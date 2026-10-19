'use client';

/**
 * Two figures on glass under the hero headline.
 *
 * Both are read from `ground-truth.ts` and passed into the copy as parameters,
 * so no number on this page is typed into a translation file where it could
 * drift from the authority. Neither is a platform metric: a count of records
 * changes daily and is a contributor's number (it lives on the dashboard); the
 * inscription facts are what a visitor to this page is here for.
 *
 * The zone figure is worded as zones of ONE property — never "seven World
 * Heritage Sites", which is the precise error ground-truth.ts exists to stop.
 */

import { useTranslations } from 'next-intl';
import { IconBuildingMonument, IconCalendarEvent, type Icon } from '@tabler/icons-react';

import {
  KATHMANDU_VALLEY,
  KATHMANDU_VALLEY_ZONE_COUNT,
  LUMBINI,
} from '@/lib/unesco/ground-truth';
import { cn } from '@/lib/utils';

interface Stat {
  key: string;
  Icon: Icon;
  value: number;
  label: string;
}

export function HeroStats({ className }: { className?: string }) {
  const t = useTranslations('unescoEntry.hero.stats');

  const stats: Stat[] = [
    {
      key: 'zones',
      Icon: IconBuildingMonument,
      value: KATHMANDU_VALLEY_ZONE_COUNT,
      label: t('zones', { year: KATHMANDU_VALLEY.yearInscribed }),
    },
    {
      key: 'lumbini',
      Icon: IconCalendarEvent,
      value: LUMBINI.yearInscribed,
      label: t('lumbini'),
    },
  ];

  return (
    <dl className={cn('flex flex-wrap justify-center gap-4', className)}>
      {stats.map(({ key, Icon, value, label }) => (
        <div
          key={key}
          className="liquid-glass flex w-[13.75rem] flex-col items-start rounded-[1.25rem] p-5 text-left"
        >
          <Icon className="size-6 text-foreground/80" stroke={1.5} aria-hidden="true" />
          {/* The figure is the term and the sentence its description, so a
              screen reader hears "7: Monument zones, inscribed together…". */}
          <dt className="mt-4 font-display text-4xl leading-none tracking-[-1px] tabular-nums">
            {value}
          </dt>
          <dd className="mt-2 text-xs leading-snug font-light text-foreground/80">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
