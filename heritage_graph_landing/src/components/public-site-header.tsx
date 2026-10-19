'use client';

/**
 * The discovery app's header, in the same glass-pill form as the main app's
 * bar (spec 008): the mark on the left, the links in a pill in the middle with
 * Contribute as the one solid button, the controls on the right. A visitor
 * following "Open app" from here lands under a bar that looks the same.
 *
 * It was a solid primary-blue band — the only blue anywhere once the main app
 * moved to its own palette, which made the two apps read as different products.
 */

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { appPath } from '@/lib/config';
import { cn } from '@/lib/utils';

interface PublicSiteHeaderProps {
  variant?: 'marketing' | 'record';
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring';

const pillLink = cn(
  'rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground/70 transition-colors hover:bg-foreground/[0.06] hover:text-foreground',
  focusRing,
);

export function PublicSiteHeader({ variant = 'marketing' }: PublicSiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-background/60 backdrop-blur-xl">
      {/* A hairline that dissolves at both ends, as on the main app's bar. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,var(--border)_12%,var(--border)_88%,transparent)]"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-3 py-2 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          {variant === 'record' ? (
            <Link
              href="/"
              aria-label="Back to discovery"
              className={cn(
                'liquid-glass inline-flex size-10 items-center justify-center rounded-full text-foreground/80 hover:text-foreground',
                focusRing,
              )}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </Link>
          ) : null}
          <Link href="/" className={cn('group flex items-center gap-2.5 rounded-full', focusRing)}>
            <span className="liquid-glass flex size-10 items-center justify-center rounded-full">
              <span className="font-display text-2xl leading-none text-foreground" aria-hidden="true">
                h
              </span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl text-foreground">HeritageGraph</span>
              {variant === 'marketing' ? (
                <span className="mt-0.5 block font-mono text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                  Collections discovery
                </span>
              ) : null}
            </span>
          </Link>
        </div>

        <nav
          aria-label="Site"
          className="liquid-glass scrollbar-none order-3 mx-auto flex w-full max-w-full items-center justify-start gap-0.5 overflow-x-auto rounded-full p-1 md:order-none md:w-auto md:justify-center"
        >
          <Link href={appPath('/')} className={pillLink}>
            Open app
          </Link>
          <Link href={appPath('/graphview')} className={pillLink}>
            Graph
          </Link>
          <a href="#search-tips" className={pillLink}>
            Search tips
          </a>
          <a
            href="https://github.com/CAIRNepal/heritagegraph"
            target="_blank"
            rel="noopener noreferrer"
            className={pillLink}
          >
            GitHub
          </a>
          <Link
            href={appPath('/contribute')}
            className={cn(
              'group ml-1 inline-flex items-center gap-1 rounded-full bg-cta px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-cta-foreground transition-opacity hover:opacity-90',
              focusRing,
            )}
          >
            Contribute
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>

        <div className="liquid-glass ml-auto flex shrink-0 items-center gap-1 rounded-full p-1 md:ml-0">
          <Link
            href={appPath('/auth/login')}
            className={cn(
              'rounded-full px-3 py-1.5 text-sm text-foreground/80 hover:bg-foreground/[0.06] hover:text-foreground',
              focusRing,
            )}
          >
            Sign in
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
