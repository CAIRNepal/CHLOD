'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconExternalLink, IconRoute } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { RecordThumb } from '@/app/(site)/heritage-museum/components/exhibit/CollectionRail';
import { heroImageOf, sizedImage, useExhibitWords, type Connection } from '@/app/(site)/heritage-museum/components/exhibit/exhibit-utils';
import { ImageAttribution } from '@/app/(site)/heritage-museum/components/ImageAttribution';
import { NODE_TYPE_CONFIG, type GraphNode } from '@/app/(site)/heritage-museum/heritage-data';
import { NodeGlyph } from '@/app/(site)/heritage-museum/node-icons';
import type { CollectionSource } from '@/lib/heritage-museum/use-heritage-collection';
import { distanceKm, eraOf, roundAltitude, type AtlasPlace } from '@/lib/heritage-atlas/atlas-model';
import { resourceIriToDetailHref } from '@/lib/provenance';

import { useAtlasWords } from './atlas-words';

/** Edges that put the other record AT this place. */
const HERE_PREDICATES = new Set([
  'has_current_location',
  'P55_has_current_location',
  'located_in',
  'located_at',
  'took_place_at',
  'celebrated_at',
  'held_at',
  'performed_at',
  'housed_in',
  'based_in',
]);

export const museumHrefFor = (id: string, source: CollectionSource) =>
  `/heritage-museum?source=${source}&node=${encodeURIComponent(id)}`;

export interface TourState {
  k: number;
  n: number;
  onPrev: () => void;
  onNext: () => void;
  onEnd: () => void;
}

interface PlacePanelProps {
  place: AtlasPlace;
  connections: Connection[];
  placeById: Map<string, AtlasPlace>;
  nearby: { place: AtlasPlace; km: number }[];
  altitude: number | null;
  source: CollectionSource;
  onSelectPlace: (place: AtlasPlace) => void;
  onShowConnections: () => void;
  tour: TourState | null;
}

function Photo({ node }: { node: GraphNode }) {
  const { t } = useAtlasWords();
  const original = heroImageOf(node);
  const [stage, setStage] = useState(0);
  useEffect(() => setStage(0), [original]);
  const credit = original ? node.imageCredits?.[original] : undefined;
  const cfg = NODE_TYPE_CONFIG[node.nodeType];
  if (!original || stage >= 2) {
    return (
      <figure className="m-0 grid aspect-[3/2] place-items-center gap-1.5 rounded-xl border border-border bg-muted text-[12.5px] text-muted-foreground">
        <span className="grid size-8 place-items-center rounded-full" style={{ background: cfg?.color }}>
          <NodeGlyph nodeType={node.nodeType} size={16} color="var(--node-glyph)" />
        </span>
        {t('noPhoto')}
      </figure>
    );
  }
  return (
    <figure className="m-0 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex justify-center bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={stage}
          src={stage === 0 ? sizedImage(original, 800) : original}
          alt={t('photoAlt', { name: node.label })}
          onError={() => setStage((s) => s + 1)}
          className="block h-auto max-h-[260px] w-auto max-w-full object-contain"
        />
      </div>
      {credit ? (
        <figcaption className="border-t border-border px-3 py-1.5">
          <ImageAttribution credit={credit} variant="onSurface" className="text-[11px]" />
        </figcaption>
      ) : null}
    </figure>
  );
}

/** The place you picked: what it is, where, how high, and what is at it, connected to it, and near it. */
export function PlacePanel({ place, connections, placeById, nearby, altitude, source, onSelectPlace, onShowConnections, tour }: PlacePanelProps) {
  const { t, eraName, km } = useAtlasWords();
  const words = useExhibitWords();
  const node = place.node;
  const cfg = NODE_TYPE_CONFIG[node.nodeType];
  const here = connections.filter((c) => c.direction === 'in' && HERE_PREDICATES.has(c.predicate));
  const rest = connections.filter((c) => !here.includes(c));
  const linkedLocated = rest.some((c) => placeById.has(c.other.id));
  const detailHref = resourceIriToDetailHref(node.id);
  const lede = node.significance || node.description;

  const row = (c: Connection) => {
    const p = placeById.get(c.other.id);
    const body = (
      <>
        <RecordThumb node={c.other} size="sm" />
        <span className="min-w-0">
          <span className="block text-[11.5px] text-muted-foreground">{words.relation(c)}</span>
          <span className="block text-[13.5px] leading-tight font-medium text-foreground">{c.other.label}</span>
          <span className="block text-[11px] text-muted-foreground">
            {p ? (distanceKm(place, p) < 1 ? t('sameSpot') : t('away', { distance: km(distanceKm(place, p)) })) : t('notOnMap')}
          </span>
        </span>
      </>
    );
    const cls = 'grid w-full grid-cols-[34px_minmax(0,1fr)] items-center gap-2.5 rounded-lg px-1 py-1.5 text-left hover:bg-card';
    return (
      <li key={c.other.id}>
        {p ? (
          <button type="button" onClick={() => onSelectPlace(p)} className={`${cls} cursor-pointer`}>
            {body}
          </button>
        ) : (
          // Not located, so it cannot be shown here; the museum has it.
          <Link href={museumHrefFor(c.other.id, source)} className={cls}>
            {body}
          </Link>
        )}
      </li>
    );
  };

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <section aria-labelledby={id} className="grid gap-2">
      <h3 id={id} className="text-xs font-medium tracking-[0.08em] text-muted-foreground uppercase">
        {title}
      </h3>
      {children}
    </section>
  );

  return (
    <div className="grid content-start gap-3.5">
      {tour ? (
        <div role="group" aria-label={t('tourTitle')} className="grid gap-2 rounded-xl border border-primary bg-card px-3 py-2.5">
          <div className="flex items-center justify-between gap-2 text-[12.5px]">
            <span>
              <b className="font-semibold text-primary">{t('tourTitle')}</b> · {t('tourStop', { k: tour.k + 1, n: tour.n })}
            </span>
            <Button type="button" variant="outline" size="sm" onClick={tour.onEnd}>
              {t('tourEnd')}
            </Button>
          </div>
          <div className="flex gap-1.5">
            <Button type="button" variant="outline" size="sm" onClick={tour.onPrev} disabled={tour.k === 0}>
              ← {t('tourPrev')}
            </Button>
            <Button type="button" size="sm" onClick={tour.onNext} disabled={tour.k === tour.n - 1}>
              {t('tourNext')} →
            </Button>
          </div>
        </div>
      ) : null}

      <Photo node={node} />

      <div className="grid gap-1.5">
        <h2 className="font-serif text-[1.75rem] leading-[1.08] text-foreground">{node.label}</h2>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[13.5px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <span className="size-[9px] rounded-full" style={{ background: cfg?.color }} aria-hidden />
            {cfg?.label}
          </span>
          {place.year != null ? <span>{words.year(place.year)}</span> : null}
          <span>{place.inValley ? t('regionValley') : t('regionNepal')}</span>
        </div>
        {lede ? <p className="font-serif text-base leading-normal text-foreground">{lede}</p> : null}
        <dl className="m-0 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-3.5 gap-y-1 text-[13px]">
          <dt className="text-muted-foreground">{t('location')}</dt>
          <dd className="m-0 text-foreground">
            {place.lat.toFixed(4)}° N, {place.lon.toFixed(4)}° E
          </dd>
          {altitude != null ? (
            <>
              <dt className="text-muted-foreground">{t('altitude')}</dt>
              <dd className="m-0 text-foreground">{t('altitudeValue', { metres: roundAltitude(altitude).toLocaleString() })}</dd>
            </>
          ) : null}
          <dt className="text-muted-foreground">{t('period')}</dt>
          <dd className="m-0 text-foreground">{eraName(eraOf(place.year))}</dd>
        </dl>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm">
          <Link href={museumHrefFor(node.id, source)}>{t('openInMuseum')}</Link>
        </Button>
        {detailHref ? (
          <Button asChild variant="outline" size="sm">
            <Link href={detailHref}>
              <IconExternalLink className="size-3.5" aria-hidden />
              {t('knowledgeRecord')}
            </Link>
          </Button>
        ) : null}
        {linkedLocated ? (
          <Button type="button" variant="outline" size="sm" onClick={onShowConnections}>
            <IconRoute className="size-3.5" aria-hidden />
            {t('showConnections')}
          </Button>
        ) : null}
      </div>

      {here.length ? (
        <Section id="pl-here" title={t('atThisPlace', { count: here.length })}>
          <ul className="m-0 grid list-none gap-0.5 p-0">{here.map(row)}</ul>
        </Section>
      ) : null}

      <Section id="pl-connected" title={t('connected', { count: rest.length })}>
        {rest.length ? <ul className="m-0 grid list-none gap-0.5 p-0">{rest.map(row)}</ul> : <p className="text-[13px] text-muted-foreground">{t('noConnections')}</p>}
      </Section>

      <Section id="pl-nearby" title={t('nearby', { count: nearby.length })}>
        {nearby.length ? (
          <ul className="m-0 grid list-none gap-0.5 p-0">
            {nearby.map(({ place: p, km: d }) => (
              <li key={p.node.id}>
                <button
                  type="button"
                  onClick={() => onSelectPlace(p)}
                  className="grid w-full cursor-pointer grid-cols-[34px_minmax(0,1fr)] items-center gap-2.5 rounded-lg px-1 py-1.5 text-left hover:bg-card"
                >
                  <RecordThumb node={p.node} size="sm" />
                  <span className="min-w-0">
                    <span className="block text-[11.5px] text-muted-foreground">{km(d)}</span>
                    <span className="block text-[13.5px] leading-tight font-medium text-foreground">{p.node.label}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[13px] text-muted-foreground">{t('noNearby')}</p>
        )}
      </Section>
    </div>
  );
}
