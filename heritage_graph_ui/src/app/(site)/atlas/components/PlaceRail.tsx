'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';

import { RecordThumb } from '@/app/(site)/heritage-museum/components/exhibit/CollectionRail';
import { useExhibitWords } from '@/app/(site)/heritage-museum/components/exhibit/exhibit-utils';
import type { AtlasPlace, MapFact } from '@/lib/heritage-atlas/atlas-model';
import { roundAltitude } from '@/lib/heritage-atlas/atlas-model';
import { cn } from '@/lib/utils';

import { useAtlasWords } from './atlas-words';

interface PlaceRailProps {
  places: AtlasPlace[];
  unlocated: number;
  selectedId: string | null;
  onSelect: (place: AtlasPlace) => void;
  query: string;
  onQueryChange: (q: string) => void;
  onResetFilters: () => void;
  onStartTour: () => void;
  canTour: boolean;
  facts: MapFact[];
  onFact: (fact: MapFact) => void;
  controls?: ReactNode;
  showTitle?: boolean;
}

/** The places, as a list: search, the guided tour, what the map shows, and every place by area. */
export function PlaceRail({
  places,
  unlocated,
  selectedId,
  onSelect,
  query,
  onQueryChange,
  onResetFilters,
  onStartTour,
  canTour,
  facts,
  onFact,
  controls,
  showTitle = true,
}: PlaceRailProps) {
  const { t } = useAtlasWords();
  const words = useExhibitWords();
  const listRef = useRef<HTMLUListElement>(null);
  const sorted = [...places].sort((a, b) => a.node.label.localeCompare(b.node.label));
  const groups: [string, AtlasPlace[]][] = [
    [t('groupValley'), sorted.filter((p) => p.inValley)],
    [t('groupElsewhere'), sorted.filter((p) => !p.inValley)],
  ];

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[aria-current="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [selectedId]);

  const move = (from: HTMLElement, step: 1 | -1) => {
    const items = [...(listRef.current?.querySelectorAll<HTMLButtonElement>('button[data-id]') ?? [])];
    const next = items[Math.max(0, Math.min(items.length - 1, items.indexOf(from as HTMLButtonElement) + step))];
    if (!next || next === from) return;
    next.focus();
    const p = places.find((x) => x.node.id === next.dataset.id);
    if (p) onSelect(p);
  };

  const factText = (f: MapFact) => {
    switch (f.kind) {
      case 'valley':
        return t('factValley', { count: f.count, total: f.total });
      case 'oldest':
        return t('factOldest', { name: f.place.node.label, year: words.year(f.year) });
      case 'highest':
        return t('factHighest', { name: f.place.node.label, metres: roundAltitude(f.metres).toLocaleString() });
      case 'lowest':
        return t('factLowest', { name: f.place.node.label, metres: roundAltitude(f.metres).toLocaleString() });
      case 'gap':
        return t('factGap', { name: f.westernmost.node.label });
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="grid gap-3 border-b border-border px-[18px] pt-5 pb-3">
        <div className="grid gap-1.5">
          {showTitle ? <h1 className="font-serif text-[1.65rem] leading-tight text-foreground">{t('title')}</h1> : null}
          <p className="text-[13px] leading-relaxed text-muted-foreground">{t('lede')}</p>
        </div>
        {controls}
        <div role="search" className="relative">
          <IconSearch className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <label htmlFor="atlas-search" className="sr-only">
            {t('searchLabel')}
          </label>
          <input
            id="atlas-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && query) onQueryChange('');
            }}
            placeholder={t('searchPlaceholder')}
            autoComplete="off"
            className="h-10 w-full rounded-full border border-border bg-card pr-9 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-2 focus:outline-ring [&::-webkit-search-cancel-button]:appearance-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              aria-label={t('clearSearch')}
              className="absolute top-1/2 right-1.5 grid size-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <IconX className="size-3.5" aria-hidden />
            </button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onStartTour}
          disabled={!canTour}
          className="h-[38px] cursor-pointer rounded-[10px] bg-primary text-sm font-medium text-primary-foreground disabled:cursor-default disabled:opacity-50"
        >
          {t('tour')}
        </button>
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {t('count', { shown: places.length, unlocated })}
        </p>
        {facts.length ? (
          <section aria-labelledby="atlas-facts" className="grid gap-1">
            <h2 id="atlas-facts" className="pb-0.5 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              {t('factsTitle')}
            </h2>
            {facts.map((f, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onFact(f)}
                className={cn(
                  'cursor-pointer rounded-lg px-2.5 py-1.5 text-left text-[12.5px] leading-snug',
                  f.kind === 'gap' ? 'bg-warning-soft text-warning-on-soft hover:brightness-95' : 'bg-card text-foreground hover:bg-muted',
                )}
              >
                {factText(f)}
              </button>
            ))}
          </section>
        ) : null}
      </div>

      <ul ref={listRef} className="min-h-0 flex-1 overflow-auto p-1.5">
        {places.length === 0 ? (
          <li className="grid justify-items-start gap-2 p-3 text-sm text-muted-foreground">
            {t('noMatches')}
            <button type="button" onClick={onResetFilters} className="cursor-pointer rounded-lg border border-border bg-card px-3 py-1.5 text-foreground">
              {t('reset')}
            </button>
          </li>
        ) : (
          groups
            .filter(([, g]) => g.length)
            .map(([name, g]) => (
              <li key={name}>
                <p className="px-2 pt-3 pb-1.5 text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                  {name} · {g.length}
                </p>
                <ul>
                  {g.map((p) => {
                    const current = p.node.id === selectedId;
                    return (
                      <li key={p.node.id}>
                        <button
                          type="button"
                          data-id={p.node.id}
                          aria-current={current}
                          onClick={() => onSelect(p)}
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                              e.preventDefault();
                              move(e.currentTarget, e.key === 'ArrowDown' ? 1 : -1);
                            }
                          }}
                          className={cn(
                            'grid w-full cursor-pointer grid-cols-[48px_minmax(0,1fr)] items-center gap-2.5 rounded-[10px] p-1.5 text-left hover:bg-card',
                            current && 'bg-card shadow-[inset_3px_0_0_var(--primary)]',
                          )}
                        >
                          <RecordThumb node={p.node} size="md" />
                          <span className="min-w-0">
                            <span className="block text-sm leading-tight font-medium text-foreground">{p.node.label}</span>
                            <span className="block text-xs text-muted-foreground">
                              {words.typeLabel(p.node)}
                              {p.year != null ? ` · ${words.year(p.year)}` : ''}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}
