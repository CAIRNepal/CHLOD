'use client';

/**
 * The sources the record is built on, across the foot of the hero.
 *
 * In the reference this strip is client logos. Here it is the opposite of a
 * boast: the open sources HeritageGraph draws on and the model it maps them to,
 * each of which it credits. Every name below appears in the licence matrix on
 * /methods (and in `lib/provenance.ts`); nothing is listed that the platform
 * does not actually use. Getty reconciliation is "in progress" there, so it is
 * not here.
 *
 * The names are proper nouns and are not translated; the label is.
 */

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';

const SOURCES = [
  'UNESCO',
  'Wikimedia Commons',
  'Wikidata',
  'OpenStreetMap',
  'DANAM',
  'CIDOC-CRM',
] as const;

export function TrustBar({ className }: { className?: string }) {
  const t = useTranslations('unescoEntry.trust');
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <Link
        href="/methods"
        aria-label={t('linkLabel')}
        className="liquid-glass rounded-full px-3.5 py-1 text-xs font-light text-foreground/85 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {t('label')}
      </Link>
      <ul className="flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
        {SOURCES.map((name) => (
          <li
            key={name}
            // Latin proper nouns, so a Nepali screen reader voices them as
            // names rather than transliterating.
            lang="en"
            className="font-display text-xl tracking-tight text-foreground/85 md:text-2xl"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
