'use client';

/**
 * How a record actually gets into HeritageGraph, in three steps.
 *
 * The entry page said what the platform holds and why, but never what it does.
 * A first-time visitor had no idea whether this was a museum catalogue, a wiki,
 * or someone's dataset.
 *
 * WHY IT LOOKS LIKE THIS (spec 008)
 * Three tall glass panels over a darkened photograph — the second full-screen
 * band after the hero, in the same material. Glass only reads as glass when
 * there is something behind it to blur, which is why this section has a
 * photograph at all; it is held far back (heavy scrim) so it is atmosphere,
 * not subject, and it carries its credit like every other photograph here.
 * The section is forced `dark` for the same reason the hero is.
 *
 * Each panel: an icon and the step's tags at the top, the title and one short
 * line at the foot, empty space between. Almost no prose — the section exists
 * to be understood at a glance, not read.
 *
 * The steps are the real pipeline — contribute, review, publish — not a
 * marketing abstraction of it. Nothing here claims a stage the platform does
 * not actually have. The tags name what each stage really handles.
 */

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  IconArrowRight,
  IconPencilPlus,
  IconShieldCheck,
  IconTopologyStar3,
  type Icon,
} from '@tabler/icons-react';

import { ImageAttribution } from '@/app/(site)/heritage-museum/components/ImageAttribution';
import { BlurText, Reveal } from '@/components/motion';
import { imageryFor } from '@/lib/unesco/imagery';

const STEPS: { key: 'record' | 'check' | 'connect'; Icon: Icon }[] = [
  { key: 'record', Icon: IconPencilPlus },
  { key: 'check', Icon: IconShieldCheck },
  { key: 'connect', Icon: IconTopologyStar3 },
];

/** The photograph behind the panels. A zone the hero does not open on. */
const BACKDROP_KEY = 'bauddhanath';

export function HowItWorks() {
  const t = useTranslations('unescoEntry.how');
  const tEntry = useTranslations('unescoEntry');
  const backdrop = imageryFor(BACKDROP_KEY)?.image ?? null;

  return (
    <section
      aria-labelledby="how-heading"
      className="dark relative isolate flex min-h-svh scroll-mt-14 flex-col overflow-hidden bg-background text-foreground"
    >
      {backdrop ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image src={backdrop.url} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.6)_45%,rgba(0,0,0,0.82)_100%)]" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col px-6 pt-24 pb-10 md:px-16 lg:px-20">
        <div className="mb-auto">
          <Reveal as="p" className="mb-6 font-mono text-sm text-foreground/80">
            {t('label')}
          </Reveal>
          <BlurText
            as="h2"
            id="how-heading"
            text={t('headingLines')}
            className="max-w-[14ch] font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.045em] text-balance [:lang(ne)_&]:text-[clamp(2.25rem,5vw,4rem)]"
          />
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map(({ key, Icon }, i) => (
            <Reveal
              as="li"
              key={key}
              delay={i * 120}
              className="liquid-glass flex min-h-[16rem] flex-col rounded-[1.25rem] p-6 md:min-h-[22.5rem]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="liquid-glass flex size-11 shrink-0 items-center justify-center rounded-[0.75rem]">
                  <Icon className="size-5 text-foreground" aria-hidden="true" />
                </span>
                <ul className="flex flex-wrap justify-end gap-1.5">
                  {(t.raw(`steps.${key}.tags`) as string[]).map((tag) => (
                    <li
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] whitespace-nowrap text-foreground/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1" />

              <span className="font-mono text-xs tabular-nums text-foreground/60" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-3xl leading-none tracking-[-1px] md:text-4xl">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-3 max-w-[32ch] text-sm leading-snug font-light text-foreground/90">
                {t(`steps.${key}.desc`)}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/90 underline-offset-4 hover:text-foreground hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {t('cta')}
            <IconArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </Link>
          {backdrop?.credit ? (
            <div className="flex flex-wrap items-center gap-x-2 text-[10px] text-white/70">
              <span>{t('backdropOf', { name: tEntry(`zones.${BACKDROP_KEY}`) })}</span>
              <ImageAttribution credit={backdrop.credit} variant="onImage" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
