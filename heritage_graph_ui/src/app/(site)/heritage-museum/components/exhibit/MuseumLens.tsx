'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

import { NODE_TYPE_CONFIG, type GraphData, type GraphNode } from '../../heritage-data';
import { MandalaLoader } from '../MandalaLoader';
import { TimelineStrip } from '../TimelineStrip';
import type { LensKind } from './ContextColumn';
import { connectionsOf, coordsOf, useExhibitWords } from './exhibit-utils';

const MapView = dynamic(() => import('../MapView').then((m) => m.MapView), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center">
      <MandalaLoader />
    </div>
  ),
});

const W = 900;
const H = 560;

interface EgoGraphProps {
  node: GraphNode;
  graph: GraphData;
  onSelect: (node: GraphNode) => void;
}

/**
 * The selected record at the centre, its direct connections on a ring with
 * the relation written on each line, and up to three of each neighbour's own
 * connections beyond. A whole-corpus force layout drew every edge label at
 * once and could not be read; this draws only what the reader is looking at.
 */
function EgoGraph({ node, graph, onSelect }: EgoGraphProps) {
  const tx = useTranslations('heritageMuseum.exhibit');
  const words = useExhibitWords();
  const cx = W / 2;
  const cy = H / 2;
  const ring1 = connectionsOf(node, graph);
  const pos = new Map<string, { x: number; y: number; n: GraphNode; level: 0 | 1 | 2 }>();
  pos.set(node.id, { x: cx, y: cy, n: node, level: 0 });
  ring1.forEach((c, k) => {
    const a = (k / Math.max(ring1.length, 1)) * Math.PI * 2 - Math.PI / 2;
    pos.set(c.other.id, { x: cx + Math.cos(a) * 190, y: cy + Math.sin(a) * 170, n: c.other, level: 1 });
  });
  const outer: [string, string][] = [];
  ring1.forEach((c, k) => {
    const base = (k / Math.max(ring1.length, 1)) * Math.PI * 2 - Math.PI / 2;
    const kids = connectionsOf(c.other, graph)
      .filter((x) => !pos.has(x.other.id))
      .slice(0, 3);
    kids.forEach((x, m) => {
      if (pos.has(x.other.id)) return;
      const a = base + (m - (kids.length - 1) / 2) * 0.42;
      pos.set(x.other.id, { x: cx + Math.cos(a) * 360, y: cy + Math.sin(a) * 235, n: x.other, level: 2 });
      outer.push([c.other.id, x.other.id]);
    });
  });
  const activate = (n: GraphNode) => {
    if (n.id !== node.id) onSelect(n);
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="group" aria-label={tx('graphAria', { name: node.label })}>
      {outer.map(([a, b]) => {
        const p = pos.get(a)!;
        const q = pos.get(b)!;
        return <line key={`${a}>${b}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} className="stroke-border" strokeWidth={1.2} />;
      })}
      {ring1.map((c) => {
        const q = pos.get(c.other.id)!;
        return (
          <g key={c.other.id}>
            <line x1={cx} y1={cy} x2={q.x} y2={q.y} className="stroke-muted-foreground" strokeWidth={1.2} />
            <text
              x={(cx + q.x) / 2}
              y={(cy + q.y) / 2}
              textAnchor="middle"
              className="fill-muted-foreground stroke-card text-[10px]"
              strokeWidth={3}
              paintOrder="stroke"
            >
              {words.relation(c).toLowerCase()}
            </text>
          </g>
        );
      })}
      {[...pos.values()].map(({ x, y, n, level }) => {
        const r = level === 0 ? 16 : level === 1 ? 10 : 6;
        const below = y >= cy;
        return (
          <g
            key={n.id}
            role="button"
            tabIndex={level === 0 ? -1 : 0}
            aria-label={n.label}
            onClick={() => activate(n)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate(n);
              }
            }}
            className="cursor-pointer outline-none focus-visible:[&>circle]:stroke-ring"
          >
            <circle cx={x} cy={y} r={r} fill={NODE_TYPE_CONFIG[n.nodeType]?.color} className="stroke-card" strokeWidth={2.5} />
            <text
              x={x}
              y={below ? y + r + 14 : y - r - 7}
              textAnchor="middle"
              className="fill-foreground stroke-card text-xs font-medium"
              strokeWidth={3}
              paintOrder="stroke"
            >
              {n.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

interface MuseumLensProps {
  kind: LensKind | null;
  onClose: () => void;
  node: GraphNode;
  graph: GraphData;
  /** What the map and timeline show: the collection after search and filters. */
  visibleNodes: GraphNode[];
  onSelect: (node: GraphNode) => void;
}

/**
 * Full-size views opened from the context column. Map and timeline close when
 * a record is picked, so the reader lands on it; the graph stays open and
 * re-centres, because moving through it is the point.
 */
export function MuseumLens({ kind, onClose, node, graph, visibleNodes, onSelect }: MuseumLensProps) {
  const tx = useTranslations('heritageMuseum.exhibit');
  const located = visibleNodes.filter((n) => coordsOf(n)).length;
  const title =
    kind === 'map'
      ? tx('mapLensTitle', { count: located })
      : kind === 'timeline'
        ? tx('timelineLensTitle')
        : tx('graphLensTitle', { name: node.label });
  const pickAndClose = (n: GraphNode) => {
    onSelect(n);
    onClose();
  };

  return (
    <Dialog open={kind !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="grid h-[min(88vh,860px)] w-[min(1100px,96vw)] max-w-none grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden p-0 sm:max-w-none">
        <div className="border-b border-border px-5 py-3.5 pr-12">
          <DialogTitle className="font-serif text-xl font-medium">{title}</DialogTitle>
          {kind === 'graph' ? (
            <DialogDescription className="pt-1 text-xs">{tx('graphLensHint')}</DialogDescription>
          ) : (
            <DialogDescription className="sr-only">{title}</DialogDescription>
          )}
        </div>
        <div className="relative min-h-0 overflow-auto">
          {kind === 'map' ? (
            <div className="absolute inset-0">
              <MapView nodes={visibleNodes} selectedId={node.id} onNodeSelect={pickAndClose} />
            </div>
          ) : kind === 'timeline' ? (
            <div className="flex h-full flex-col">
              <TimelineStrip nodes={visibleNodes} selectedId={node.id} onSelect={pickAndClose} />
            </div>
          ) : kind === 'graph' ? (
            <div className="p-4">
              <EgoGraph node={node} graph={graph} onSelect={onSelect} />
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
