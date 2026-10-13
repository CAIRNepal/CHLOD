'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { getPublicApiUrl, isPublicApiUrlConfigured } from '@/lib/api-base';
import { enrichKgNodeForMuseum, enrichMuseumGraph, collapseClusterDuplicates } from '@/lib/heritage-museum/museum-graph';
import { fetchKgGraph, fetchKgNeighborhood, rdfTypeToNodeType, type KgGraphResponse, type KgNeighborhoodResponse } from '@/lib/kg-graph';
import { datasetMetaFromKgResponse, downloadJson, type DatasetMeta } from '@/lib/provenance';

import {
  fetchHeritageDemoCorpus,
  NODE_TYPE_CONFIG,
  type CorpusProvenance,
  type GraphData,
  type GraphLink,
  type GraphNode,
  type HgCategory,
} from './heritage-data';
import { MandalaLoader } from './components/MandalaLoader';
import { CollectionRail } from './components/exhibit/CollectionRail';
import { ContextColumn, type LensKind } from './components/exhibit/ContextColumn';
import { ExhibitView } from './components/exhibit/ExhibitView';
import { connectionsOf } from './components/exhibit/exhibit-utils';
import { MuseumLens } from './components/exhibit/MuseumLens';
import { RailControls } from './components/exhibit/RailControls';
import type { MuseumDataSource } from './components/museum-types';
import { exportVisibleGraphPayload } from './utils/exportGraph';

// ── Live Knowledge Graph → museum graph conversion ────────────────────────────
//
// The live view reads the Oxigraph PUBLIC graph: every node is typed by its real
// rdf:type and every edge is a real triple (see lib/kg-graph.ts + the backend
// /kg/graph/ endpoint). Node types come straight from the ontology via
// RDF_CLASS_URI_TO_NODE_TYPE — no lossy category enum, no heuristic edges.
// Nodes whose rdf:type maps to no NodeType are dropped to stay ontology-faithful.
function kgToGraphData(resp: KgGraphResponse): GraphData {
  const nodes: GraphNode[] = [];
  const kept = new Set<string>();

  for (const n of resp.nodes) {
    const nodeType = rdfTypeToNodeType(n.types);
    if (!nodeType) continue; // not an ontology class we visualise
    const cfg = NODE_TYPE_CONFIG[nodeType];
    kept.add(n.id);
    const isLux = n.sourceLayer === 'lux';
    const narrative = enrichKgNodeForMuseum(n, nodeType);
    nodes.push({
      id: n.id,
      label: n.label,
      nodeType,
      cidocMapping: cfg.cidocMapping,
      hgCategory: cfg.hgCategory as GraphNode['hgCategory'],
      description: narrative.description,
      storyText: narrative.storyText,
      imageUrl: narrative.imageUrl,
      images: narrative.images,
      imageCredits: narrative.imageCredits,
      lat: n.lat ?? undefined,
      long: n.long ?? undefined,
      inceptionYear: n.inceptionYear ?? undefined,
      tags: isLux ? ['Yale LUX', 'Collection link'] : undefined,
      keyFacts: narrative.keyFacts,
      clusterId: n.clusterId ?? undefined,
      clusterLabel: n.clusterLabel ?? undefined,
      typeScope: n.typeScope ?? undefined,
      canonicalMemberId: n.canonicalMemberId ?? undefined,
      relations: [],
    });
  }

  const links: GraphLink[] = resp.edges
    .filter((e) => kept.has(e.source) && kept.has(e.target))
    .map((e) => ({
      source: e.source,
      target: e.target,
      predicate: (e.predicateLocal || 'associated_with').replace(/-/g, '_'),
      provenance: e.provenance ?? null,
    }));

  return collapseClusterDuplicates({ nodes, links });
}

// Local name of an IRI (after the last # or /).
function iriLocalName(iri: string): string {
  if (!iri) return '';
  const i = Math.max(iri.lastIndexOf('#'), iri.lastIndexOf('/'));
  return i >= 0 ? iri.slice(i + 1) : iri;
}

// Convert a node's neighborhood (click-to-expand) into nodes + links. Only typed
// resource neighbours are kept — literals (label/comment) and untyped IRIs drop out.
function kgNeighborhoodToGraph(
  centerId: string,
  resp: KgNeighborhoodResponse,
): { nodes: GraphNode[]; links: GraphLink[] } {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const seen = new Set<string>();

  for (const e of resp.edges) {
    if (!e.value || !/^https?:\/\//.test(e.value)) continue; // skip literals
    const nodeType = e.valueType ? rdfTypeToNodeType([e.valueType]) : null;
    if (!nodeType) continue; // only render ontology-typed neighbours
    if (!seen.has(e.value)) {
      seen.add(e.value);
      const cfg = NODE_TYPE_CONFIG[nodeType];
      const isLux = e.value.includes('/imported/lux/');
      const narrative = enrichKgNodeForMuseum(
        {
          id: e.value,
          types: e.valueType ? [e.valueType] : [],
          label: e.valueLabel || iriLocalName(e.value),
          comment: null,
          lat: null,
          long: null,
          sourceLayer: isLux ? 'lux' : 'curated',
          externalUri: isLux ? e.value : null,
        },
        nodeType,
      );
      nodes.push({
        id: e.value,
        label: e.valueLabel || iriLocalName(e.value),
        nodeType,
        cidocMapping: cfg.cidocMapping,
        hgCategory: cfg.hgCategory as GraphNode['hgCategory'],
        description: narrative.description,
        storyText: narrative.storyText,
        keyFacts: narrative.keyFacts,
        tags: isLux ? ['Yale LUX', 'Collection link'] : undefined,
        relations: [],
      });
    }
    const predicate = (iriLocalName(e.predicate) || 'associated_with').replace(/-/g, '_');
    links.push(
      e.direction === 'outbound'
        ? { source: centerId, target: e.value, predicate }
        : { source: e.value, target: centerId, predicate },
    );
  }
  return { nodes, links };
}

// Build a HeritageRelation[] for every node from the edge list so the
// StoryPanel's Connections section works for live data too.
function attachRelations(nodes: GraphNode[], links: GraphLink[]): void {
  const byId = new Map<string, GraphNode>();
  for (const n of nodes) {
    n.relations = [];
    byId.set(n.id, n);
  }
  for (const l of links) {
    const sourceId = typeof l.source === 'string' ? l.source : l.source.id;
    const targetId = typeof l.target === 'string' ? l.target : l.target.id;
    const src = byId.get(sourceId);
    const tgt = byId.get(targetId);
    if (src && tgt) {
      src.relations.push({
        predicate: l.predicate,
        targetId,
        targetLabel: tgt.label,
        provenance: l.provenance ?? null,
      });
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════════
type DataSource = MuseumDataSource;
type LiveError = 'unconfigured' | 'notfound' | 'timeout' | 'live';

const API_BASE = getPublicApiUrl();
/** Give up on the live graph after this long and say so, rather than spin forever. */
const LIVE_TIMEOUT_MS = 20_000;
/** The context column sits beside the exhibit from this width; below it, under it. */
const WIDE_QUERY = '(min-width: 1280px)';
/** The collection rail is a column from this width; below it, a sheet. */
const RAIL_QUERY = '(min-width: 1024px)';
const EMPTY: GraphData = { nodes: [], links: [] };

/** Lens ↔ `?view=`. Old links used 2d (graph) and map; xr (stories) is now the default page. */
const VIEW_FOR_LENS: Record<LensKind, string> = { map: 'map', graph: '2d', timeline: 'timeline' };
const LENS_FOR_VIEW: Record<string, LensKind> = { map: 'map', '2d': 'graph', timeline: 'timeline' };

function useMedia(query: string): boolean {
  const [match, setMatch] = useState(true);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const sync = () => setMatch(mql.matches);
    sync();
    mql.addEventListener('change', sync);
    return () => mql.removeEventListener('change', sync);
  }, [query]);
  return match;
}

/**
 * The Heritage Museum: one exhibit page.
 *
 * It used to be three modes — Stories, Map, Connections — and switching lost
 * the reader's place. Now the record stays in the middle, the collection is a
 * list beside it, and its place, date and connections sit alongside; the full
 * map, the timeline and a focused graph open as overlays when wanted.
 */
export function HeritageMindMapClient() {
  const { data: session } = useSession();
  const t = useTranslations('heritageMuseum');
  const tx = useTranslations('heritageMuseum.exhibit');
  const router = useRouter();
  const searchParams = useSearchParams();
  const bootstrappedRef = useRef(false);
  const wide = useMedia(WIDE_QUERY);
  const railColumn = useMedia(RAIL_QUERY);

  // ── Demo data ──────────────────────────────────────────────────────────────
  const [demoGraph, setDemoGraph] = useState<GraphData | null>(null);
  const [demoProv, setDemoProv] = useState<CorpusProvenance | null>(null);
  const [demoLoading, setDemoLoading] = useState(true);
  const [demoError, setDemoError] = useState<string | null>(null);

  // ── Live data ──────────────────────────────────────────────────────────────
  const [liveGraph, setLiveGraph] = useState<GraphData | null>(null);
  const [liveLoading, setLiveLoading] = useState(false);
  const [liveError, setLiveError] = useState<LiveError | null>(null);
  const [datasetMeta, setDatasetMeta] = useState<DatasetMeta | null>(null);
  const liveAbortRef = useRef<AbortController | null>(null);

  // ── UI state ───────────────────────────────────────────────────────────────
  const [dataSource, setDataSource] = useState<DataSource>('demo');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [kind, setKind] = useState<HgCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lens, setLens] = useState<LensKind | null>(null);
  const [railOpen, setRailOpen] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const exhibitScrollRef = useRef<HTMLDivElement>(null);

  // ── Load demo data once ────────────────────────────────────────────────────
  useEffect(() => {
    fetchHeritageDemoCorpus()
      .then(({ graph, provenance }) => {
        setDemoGraph(graph);
        setDemoProv(
          provenance
            ? { retrieved: provenance.retrieved, generatedBy: provenance.generatedBy, imageSource: provenance.imageSource, note: provenance.note }
            : null,
        );
        setDemoLoading(false);
      })
      .catch(() => {
        setDemoError('demo');
        setDemoLoading(false);
      });
  }, []);

  // ── Load live data on demand ───────────────────────────────────────────────
  const applyLiveResponse = useCallback((resp: KgGraphResponse) => {
    const { nodes, links } = kgToGraphData(resp);
    setDatasetMeta(datasetMetaFromKgResponse(resp, API_BASE));
    attachRelations(nodes, links);
    enrichMuseumGraph({ nodes, links });
    setLiveGraph({ nodes, links });
  }, []);

  const loadLiveData = useCallback(async () => {
    if (!API_BASE || !isPublicApiUrlConfigured()) {
      console.error('heritage-museum: NEXT_PUBLIC_API_URL is not set, so the live graph cannot load.');
      setLiveError('unconfigured');
      setLiveLoading(false);
      return;
    }
    liveAbortRef.current?.abort();
    const ctrl = new AbortController();
    liveAbortRef.current = ctrl;
    let timedOut = false;
    const timer = window.setTimeout(() => {
      timedOut = true;
      ctrl.abort();
    }, LIVE_TIMEOUT_MS);
    setLiveLoading(true);
    setLiveError(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token = (session as any)?.accessToken as string | undefined;
    try {
      // Curated graph first. Asking for Yale LUX links makes the backend query
      // a remote endpoint before it answers (≈20 s against 0.5 s without), so
      // the links follow in a second request instead of holding up the page.
      applyLiveResponse(await fetchKgGraph(API_BASE, token, { includeLux: 'none', signal: ctrl.signal }));
    } catch (err) {
      if (ctrl.signal.aborted && !timedOut) return; // superseded by a newer load
      const msg = err instanceof Error ? err.message : '';
      if (timedOut) {
        setLiveError('timeout');
      } else if (/\b404\b/.test(msg)) {
        console.error(`heritage-museum: ${API_BASE}/api/v1/cidoc/kg/graph/ returned 404. Check NEXT_PUBLIC_API_URL (baked in at build time).`);
        setLiveError('notfound');
      } else {
        console.error('heritage-museum: live graph failed to load', err);
        setLiveError('live');
      }
      return;
    } finally {
      window.clearTimeout(timer);
      if (liveAbortRef.current === ctrl) setLiveLoading(false);
    }

    // Background: merge Yale LUX links only if they add anything.
    fetchKgGraph(API_BASE, token, { includeLux: 'linked', signal: ctrl.signal })
      .then((resp) => {
        if ((resp.counts.luxNodes ?? 0) > 0 && liveAbortRef.current === ctrl) applyLiveResponse(resp);
      })
      .catch(() => {
        /* the curated graph is already showing; LUX links are optional */
      });
  }, [session, applyLiveResponse]);

  useEffect(() => () => liveAbortRef.current?.abort(), []);

  const toggleDataSource = useCallback(() => {
    if (dataSource === 'demo') {
      if (!API_BASE || !isPublicApiUrlConfigured()) {
        setLiveError('unconfigured');
        return;
      }
      setDataSource('live');
      if (!liveGraph) void loadLiveData();
    } else {
      setDataSource('demo');
      setLiveError(null);
    }
    setSelectedId(null);
    setLens(null);
  }, [dataSource, liveGraph, loadLiveData]);

  const retryLiveData = useCallback(() => {
    setLiveError(null);
    void loadLiveData();
  }, [loadLiveData]);

  // ── Bootstrap from the URL ─────────────────────────────────────────────────
  useEffect(() => {
    if (bootstrappedRef.current) return;
    bootstrappedRef.current = true;
    const view = searchParams.get('view');
    if (view && LENS_FOR_VIEW[view]) setLens(LENS_FOR_VIEW[view]);
    const node = searchParams.get('node');
    if (node) setSelectedId(decodeURIComponent(node));
    // The illustrated corpus is self-contained and always renders, so it is the
    // default; the live graph loads only when the URL or the visitor asks.
    if (searchParams.get('source') === 'live' && API_BASE && isPublicApiUrlConfigured()) {
      setDataSource('live');
      void loadLiveData();
    }
  }, [searchParams, loadLiveData]);

  // ── Click-to-expand (live KG only) ─────────────────────────────────────────
  const fullGraph = dataSource === 'live' ? liveGraph : demoGraph;
  const loading = dataSource === 'live' ? liveLoading && !liveGraph : demoLoading;
  const error = dataSource === 'live' ? liveError : demoError;

  const expandNode = useCallback(
    async (node: GraphNode) => {
      if (dataSource !== 'live' || !API_BASE) return;
      setExpanding(true);
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const token = (session as any)?.accessToken as string | undefined;
        const resp = await fetchKgNeighborhood(API_BASE, node.id, token, { includeLux: 'linked' });
        const add = kgNeighborhoodToGraph(node.id, resp);
        const base = liveGraph ?? EMPTY;
        const nodeIds = new Set(base.nodes.map((n) => n.id));
        const newNodes = add.nodes.filter((n) => !nodeIds.has(n.id));
        const idOf = (x: string | GraphNode) => (typeof x === 'string' ? x : x.id);
        const linkKey = (l: GraphLink) => `${idOf(l.source)}→${idOf(l.target)}→${l.predicate}`;
        const seenLinks = new Set(base.links.map(linkKey));
        const newLinks = add.links.filter((l) => !seenLinks.has(linkKey(l)));
        if (!newNodes.length && !newLinks.length) {
          toast(t('expand.none', { name: node.label }));
          return;
        }
        setLiveGraph((prev) => {
          const current = prev ?? EMPTY;
          const have = new Set(current.nodes.map((n) => n.id));
          const haveLinks = new Set(current.links.map(linkKey));
          const nodes = [...current.nodes, ...newNodes.filter((n) => !have.has(n.id))];
          const links = [...current.links, ...newLinks.filter((l) => !haveLinks.has(linkKey(l)))];
          attachRelations(nodes, links);
          enrichMuseumGraph({ nodes, links });
          return { nodes, links };
        });
        toast.success(t('expand.added', { count: newNodes.length, name: node.label }));
      } catch (err) {
        console.error('heritage-museum: expand failed', err);
        toast.error(t('expand.failed', { name: node.label }));
      } finally {
        setExpanding(false);
      }
    },
    [dataSource, session, liveGraph, t],
  );

  // ── The collection, as listed ──────────────────────────────────────────────
  const visibleNodes = useMemo<GraphNode[]>(() => {
    if (!fullGraph) return [];
    const q = searchQuery.trim().toLowerCase();
    return fullGraph.nodes
      .filter((n) => {
        if (kind && n.hgCategory !== kind) return false;
        if (!q) return true;
        return (
          n.label.toLowerCase().includes(q) ||
          (n.description ?? '').toLowerCase().includes(q) ||
          (NODE_TYPE_CONFIG[n.nodeType]?.label ?? '').toLowerCase().includes(q) ||
          Boolean(n.tags?.some((tag) => tag.toLowerCase().includes(q)))
        );
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [fullGraph, kind, searchQuery]);

  // The open record: the one asked for, else the first listed record that has
  // a photograph, so the page never opens on an empty exhibit.
  const selectedNode = useMemo<GraphNode | null>(() => {
    if (!fullGraph?.nodes.length) return null;
    const asked = selectedId ? fullGraph.nodes.find((n) => n.id === selectedId) : undefined;
    if (asked) return asked;
    const sorted = [...fullGraph.nodes].sort((a, b) => a.label.localeCompare(b.label));
    return sorted.find((n) => n.imageUrl || n.images?.length) ?? sorted[0];
  }, [fullGraph, selectedId]);

  const connections = useMemo(
    () => (selectedNode && fullGraph ? connectionsOf(selectedNode, fullGraph) : []),
    [selectedNode, fullGraph],
  );

  const select = useCallback((node: GraphNode) => {
    setSelectedId(node.id);
    setRailOpen(false);
    exhibitScrollRef.current?.scrollTo({ top: 0 });
  }, []);

  const index = selectedNode ? visibleNodes.findIndex((n) => n.id === selectedNode.id) : -1;
  const prev = index > 0 ? visibleNodes[index - 1] : null;
  const next = index >= 0 && index < visibleNodes.length - 1 ? visibleNodes[index + 1] : null;

  // ←/→ step through the list when focus is not in a field or the list itself.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lens || railOpen || e.defaultPrevented || e.altKey || e.metaKey || e.ctrlKey) return;
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable="true"], [role="dialog"], ul')) return;
      if (e.key === 'ArrowRight' && next) select(next);
      if (e.key === 'ArrowLeft' && prev) select(prev);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lens, railOpen, next, prev, select]);

  // ── State → URL, for citable links ─────────────────────────────────────────
  useEffect(() => {
    if (!bootstrappedRef.current || !selectedNode) return;
    const p = new URLSearchParams();
    p.set('source', dataSource);
    p.set('node', selectedNode.id);
    if (lens) p.set('view', VIEW_FOR_LENS[lens]);
    const target = `/heritage-museum?${p.toString()}`;
    if (target !== `/heritage-museum?${searchParams.toString()}`) router.replace(target, { scroll: false });
  }, [dataSource, selectedNode, lens, router, searchParams]);

  const handleExportJson = useCallback(() => {
    if (!fullGraph) return;
    const ids = new Set(visibleNodes.map((n) => n.id));
    const graph = {
      nodes: visibleNodes,
      links: fullGraph.links.filter((l) => ids.has(typeof l.source === 'string' ? l.source : l.source.id) && ids.has(typeof l.target === 'string' ? l.target : l.target.id)),
    };
    downloadJson(
      `heritagegraph-museum-${dataSource}-${new Date().toISOString().slice(0, 10)}.json`,
      exportVisibleGraphPayload(graph, datasetMeta, dataSource),
    );
  }, [fullGraph, visibleNodes, datasetMeta, dataSource]);

  // Visitor-facing only; configuration detail goes to the console in loadLiveData.
  const messageFor = (e: string | null) =>
    e === 'unconfigured' || e === 'notfound'
      ? t('errors.liveUnavailable')
      : e === 'timeout'
        ? t('errors.liveTimeout')
        : e === 'live'
          ? t('errors.liveLoad')
          : e === 'demo'
            ? t('errors.demoLoad')
            : null;
  const liveRetryable = liveError === 'timeout' || liveError === 'live';
  const sparseLive = dataSource === 'live' && !liveLoading && !liveError && liveGraph && liveGraph.nodes.length < 20;

  const rail = (
    <CollectionRail
      allNodes={fullGraph?.nodes ?? []}
      visibleNodes={visibleNodes}
      selectedId={selectedNode?.id ?? null}
      onSelect={select}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      kind={kind}
      onKindChange={setKind}
      showTitle={railColumn}
      controls={
        <RailControls
          dataSource={dataSource}
          demoCount={demoGraph?.nodes.length ?? 0}
          liveLoading={liveLoading}
          onSwitchSource={toggleDataSource}
          provenance={dataSource === 'demo' ? demoProv : null}
          liveApiBase={dataSource === 'live' ? API_BASE : null}
          datasetMeta={dataSource === 'live' ? datasetMeta : null}
          onExportJson={dataSource === 'live' ? handleExportJson : undefined}
        />
      }
    />
  );

  const context =
    selectedNode && fullGraph ? (
      <ContextColumn
        node={selectedNode}
        allNodes={fullGraph.nodes}
        connections={connections}
        onSelect={select}
        onOpenLens={setLens}
        showProvenance={dataSource === 'live'}
      />
    ) : null;

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-background text-foreground">
      {liveError && (
        <div className="z-20 flex flex-shrink-0 flex-wrap items-center gap-2 border-b border-destructive/20 bg-destructive/10 px-4 py-2 text-xs text-destructive" role="alert">
          <span aria-hidden="true">⚠</span>
          <span>{messageFor(liveError)}</span>
          <span className="ml-auto flex items-center gap-2">
            {liveRetryable && (
              <Button onClick={retryLiveData} disabled={liveLoading} variant="outline" size="sm" className="h-7 text-xs" type="button">
                {liveLoading ? t('errors.retrying') : t('errors.retry')}
              </Button>
            )}
            {dataSource === 'live' && (
              <Button onClick={toggleDataSource} variant="outline" size="sm" className="h-7 text-xs" type="button">
                {t('errors.showDemo')}
              </Button>
            )}
            <Button onClick={() => setLiveError(null)} variant="ghost" size="icon" className="size-7" aria-label={t('errors.dismiss')} type="button">
              <IconX className="size-4" />
            </Button>
          </span>
        </div>
      )}

      {sparseLive ? (
        <div className="z-20 flex-shrink-0 border-b border-border bg-muted/40 px-4 py-2 text-xs text-muted-foreground" role="status">
          {t('sparseLive', { count: liveGraph.nodes.length })}{' '}
          <Link href="/contribute/entity" className="text-primary underline underline-offset-2">
            {t('sparseLiveContribute')}
          </Link>
        </div>
      ) : null}

      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_330px]">
        {railColumn ? <aside aria-label={tx('browseCollection')} className="min-h-0 border-r border-border">{rail}</aside> : null}

        <div ref={exhibitScrollRef} className="min-h-0 overflow-auto">
          {!railColumn ? (
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-2.5">
              <h1 className="font-serif text-xl leading-tight">{t('title')}</h1>
              <Button type="button" variant="outline" size="sm" onClick={() => setRailOpen(true)}>
                {tx('browseCollection')}
              </Button>
            </div>
          ) : null}

          <div className="px-4 pt-5 pb-12 sm:px-6 lg:px-[clamp(1.25rem,3vw,2.75rem)] lg:pt-7">
            {loading ? (
              <div className="grid min-h-[50vh] place-items-center">
                <MandalaLoader />
              </div>
            ) : error && !fullGraph ? (
              <div className="grid min-h-[50vh] place-items-center" role="alert">
                <div className="grid max-w-md justify-items-center gap-3 p-8 text-center">
                  <p className="text-sm font-medium text-foreground">{t('errors.loadTitle')}</p>
                  <p className="text-xs text-muted-foreground">{messageFor(error)}</p>
                  {dataSource === 'live' ? (
                    <div className="flex flex-wrap justify-center gap-2 pt-1">
                      {liveRetryable ? (
                        <Button onClick={retryLiveData} disabled={liveLoading} variant="outline" size="sm" type="button">
                          {liveLoading ? t('errors.retrying') : t('errors.retry')}
                        </Button>
                      ) : null}
                      <Button onClick={toggleDataSource} variant="outline" size="sm" type="button">
                        {t('errors.showDemo')}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : selectedNode && fullGraph ? (
              <>
                <ExhibitView
                  node={selectedNode}
                  connections={connections}
                  dataSource={dataSource}
                  onPrev={prev ? () => select(prev) : undefined}
                  onNext={next ? () => select(next) : undefined}
                  onExpand={dataSource === 'live' ? () => void expandNode(selectedNode) : undefined}
                  expanding={expanding}
                />
                {!wide ? (
                  <aside aria-label={tx('where')} className="grid gap-3.5 pt-8 sm:grid-cols-2 lg:grid-cols-3 [&>section:last-child]:sm:col-span-2 lg:[&>section:last-child]:col-span-1">
                    {context}
                  </aside>
                ) : null}
              </>
            ) : null}
          </div>
        </div>

        {wide ? (
          <aside aria-label={tx('where')} className="grid min-h-0 content-start gap-3.5 overflow-auto border-l border-border p-[18px]">
            {context}
          </aside>
        ) : null}
      </div>

      {!railColumn ? (
        <Sheet open={railOpen} onOpenChange={setRailOpen}>
          <SheetContent side="left" className="w-[min(22rem,92vw)] gap-0 p-0">
            <SheetTitle className="sr-only">{tx('browseCollection')}</SheetTitle>
            {rail}
          </SheetContent>
        </Sheet>
      ) : null}

      {selectedNode && fullGraph ? (
        <MuseumLens
          kind={lens}
          onClose={() => setLens(null)}
          node={selectedNode}
          graph={fullGraph}
          visibleNodes={visibleNodes}
          onSelect={select}
        />
      ) : null}
    </div>
  );
}
