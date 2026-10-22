'use client';

import { useEffect, useState } from 'react';

import { ERAS, eraOf, type AtlasPlace, type EraId } from '@/lib/heritage-atlas/atlas-model';
import { NODE_TYPE_CONFIG } from '@/app/(site)/heritage-museum/heritage-data';
import { cn } from '@/lib/utils';

import { ERA_COLOR_VARS, useAtlasWords } from './atlas-words';

function Segmented<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <div role="group" aria-label={label} className="flex overflow-hidden rounded-[10px] border border-border bg-card">
      {options.map(([v, text]) => (
        <button
          key={v}
          type="button"
          aria-pressed={value === v}
          onClick={() => onChange(v)}
          className={cn('cursor-pointer px-3 py-1.5 text-[13px] whitespace-nowrap', value === v ? 'bg-foreground text-background' : 'text-foreground hover:bg-muted')}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

interface MapControlsProps {
  onExtent: (kind: 'nepal' | 'valley') => void;
  basemap: 'terrain' | 'streets';
  onBasemap: (b: 'terrain' | 'streets') => void;
  colorBy: 'kind' | 'period';
  onColorBy: (c: 'kind' | 'period') => void;
  places: AtlasPlace[];
}

/** Extent and base-map switches, and the key, over the top-left of the map. */
export function MapControls({ onExtent, basemap, onBasemap, colorBy, onColorBy, places }: MapControlsProps) {
  const { t, eraName, eraSpan } = useAtlasWords();
  // Open on wide screens; on a phone the key would cover most of the map.
  const [keyOpen, setKeyOpen] = useState(true);
  useEffect(() => setKeyOpen(window.matchMedia('(min-width: 640px)').matches), []);
  const rows: [string, string][] =
    colorBy === 'kind'
      ? [...new Map(places.map((p) => [p.node.nodeType, NODE_TYPE_CONFIG[p.node.nodeType]])).values()]
          .filter(Boolean)
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((c) => [c.color, c.label])
      : ERAS.filter((e) => places.some((p) => eraOf(p.year) === e.id)).map((e) => [`var(${ERA_COLOR_VARS[e.id]})`, `${eraName(e.id)} · ${eraSpan(e.id)}`]);
  return (
    <div className="pointer-events-none absolute top-3 left-3 z-[500] grid max-w-[calc(100%-1.5rem)] justify-items-start gap-2">
      <div className="pointer-events-auto flex flex-wrap gap-2">
        <div role="group" aria-label={t('extentLabel')} className="flex overflow-hidden rounded-[10px] border border-border bg-card">
          <button type="button" onClick={() => onExtent('nepal')} className="cursor-pointer px-3 py-1.5 text-[13px] whitespace-nowrap text-foreground hover:bg-muted">
            {t('extentNepal')}
          </button>
          <button type="button" onClick={() => onExtent('valley')} className="cursor-pointer border-l border-border px-3 py-1.5 text-[13px] whitespace-nowrap text-foreground hover:bg-muted">
            {t('extentValley')}
          </button>
        </div>
        <Segmented label={t('basemapLabel')} value={basemap} options={[['terrain', t('basemapTerrain')], ['streets', t('basemapStreets')]]} onChange={onBasemap} />
      </div>
      <div className="pointer-events-auto grid max-w-[15rem] gap-1 rounded-[10px] border border-border bg-card/95 px-2.5 py-2 text-[11.5px] text-foreground">
        <button
          type="button"
          aria-expanded={keyOpen}
          aria-controls="atlas-key"
          onClick={() => setKeyOpen((o) => !o)}
          className="cursor-pointer text-left text-xs font-medium text-foreground"
        >
          {t('mapKey')} {keyOpen ? '▴' : '▾'}
        </button>
        <div id="atlas-key" hidden={!keyOpen} className="grid gap-1">
        <Segmented label={t('colorBy')} value={colorBy} options={[['kind', t('byKind')], ['period', t('byPeriod')]]} onChange={onColorBy} />
        <ul className="m-0 grid list-none gap-1 p-0 pt-1">
          {rows.map(([c, l]) => (
            <li key={l} className="flex items-center gap-1.5">
              <span className="size-[9px] shrink-0 rounded-full" style={{ background: c }} aria-hidden />
              {l}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}

interface EraBarProps {
  counts: Record<EraId, number>;
  era: EraId | null;
  onEra: (e: EraId | null) => void;
  shown: number;
}

/** Periods with their dates and counts; pick one to show only its places. */
export function EraBar({ counts, era, onEra, shown }: EraBarProps) {
  const { t, eraName, eraSpan } = useAtlasWords();
  return (
    <div role="group" aria-labelledby="atlas-when" className="grid gap-2 border-t border-border bg-card px-3.5 pt-2.5 pb-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs text-muted-foreground">
        <span id="atlas-when">
          <b className="font-medium text-foreground">{t('whenTitle')}</b> · {t('whenHint')}
        </span>
        <span aria-live="polite">{era ? t('periodPlaces', { count: shown, period: eraName(era) }) : t('allPeriods', { count: shown })}</span>
      </div>
      {/* One scrolling row on phones, so the bar does not eat the map's height. */}
      <div className="-mx-3.5 flex gap-1.5 overflow-x-auto px-3.5 pb-0.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {ERAS.map((e) => (
          <button
            key={e.id}
            type="button"
            aria-pressed={era === e.id}
            disabled={!counts[e.id]}
            onClick={() => onEra(era === e.id ? null : e.id)}
            className={cn(
              'inline-flex min-h-9 shrink-0 cursor-pointer items-center gap-2 rounded-[10px] border px-2.5 py-1.5 text-[13px] whitespace-nowrap disabled:cursor-default disabled:opacity-45',
              era === e.id ? 'border-foreground bg-foreground text-background' : 'border-border bg-background text-foreground hover:border-muted-foreground',
            )}
          >
            {eraName(e.id)}
            <span className={cn('text-[11.5px]', era === e.id ? 'opacity-75' : 'text-muted-foreground')}>{eraSpan(e.id)}</span>
            <span className={cn('text-xs tabular-nums', era === e.id ? 'opacity-75' : 'text-muted-foreground')}>{counts[e.id]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
