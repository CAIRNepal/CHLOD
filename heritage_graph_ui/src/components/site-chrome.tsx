'use client';

/**
 * Chrome shared by the public shell and the workspace shell.
 *
 * Both shells render the same bar and the same footer, from here, so moving
 * between them changes the page and nothing else. When these lived inline in
 * the workspace layout, the public entry page could only match them by
 * duplication — and duplicated chrome drifts.
 */

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Github, Mail, ExternalLink } from 'lucide-react';

import AuthButtons from '@/components/AuthButtons';
import { CommandMenuTrigger } from '@/components/command-menu';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserProgressBadge } from '@/components/progression-widgets';
import { cn } from '@/lib/utils';

const NotificationBell = dynamic(
  () => import('@/components/notification-bell').then((mod) => mod.NotificationBell),
  { ssr: false },
);

/**
 * The controls at the right of the bar, as one piece of glass.
 *
 * Breakpoints are keyed to `@container/header` rather than the viewport: in the
 * workspace shell the bar shares its row with the sidebar trigger, and
 * viewport-keyed breakpoints let controls through that the bar has no room
 * for. None of them can shrink.
 */
export function HeaderControls() {
  const { status } = useSession();
  const authed = status === 'authenticated';
  return (
    <div className="liquid-glass ml-auto flex shrink-0 items-center gap-1 rounded-full p-1 @[30rem]/header:gap-1.5">
      <CommandMenuTrigger />
      {authed ? <UserProgressBadge className="border-transparent bg-foreground/[0.06] px-2.5 py-1 dark:bg-foreground/[0.06]" /> : null}
      {authed ? <NotificationBell /> : null}
      <LanguageSwitcher />
      <ThemeToggle />
      <AuthButtons />
    </div>
  );
}

export function SiteFooter() {
  const t = useTranslations('common');
  return (
    // A strip of glass under the page, with a rule that dissolves at both ends
    // — the same edge treatment as the bar, so the page is framed top and
    // bottom by the same material.
    <footer className="relative bg-background/60 px-4 py-3 backdrop-blur-xl md:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--border)_12%,var(--border)_88%,transparent)]"
      />
      <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <Image
            src="/cair-logo/fulllogo_nobuffer.png"
            alt="CAIR-Nepal"
            width={1280}
            height={314}
            className="opacity-70"
            // next/image warns when CSS overrides one dimension but not the
            // other; stating both keeps the intrinsic aspect ratio explicit.
            style={{ height: '1.25rem', width: 'auto' }}
            sizes="80px"
          />
          <span className="hidden sm:inline">
            {t('copyright', { year: new Date().getFullYear() })}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/CAIRNepal/heritagegraph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-1.5 transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="mailto:info@cair-nepal.org"
            aria-label="Email"
            className="rounded-full p-1.5 transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.cair-nepal.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CAIR-Nepal"
            className="rounded-full p-1.5 transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:text-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/**
 * The bar itself, so both shells share one set of paddings and borders.
 *
 * TWO STATES (spec 008)
 * Over a page's hero photograph (any element marked `data-site-hero`), the bar
 * has no surface of its own: the three glass pieces float on the picture and
 * the photograph runs to the top of the window. It also carries the `dark`
 * class there, because the photograph is dark whichever theme the reader has
 * chosen, and light-theme ink on it is unreadable. Once the hero has scrolled
 * away it becomes a strip of glass in the reader's own theme, with the
 * dissolving hairline underneath.
 *
 * The first render has to be right without measuring, or the bar flashes from
 * one state to the other on load. Only the entry page has a hero, so the path
 * decides the initial state — the server knows the path — and the observer
 * takes over after mount.
 *
 * Height stays 56px (`h-14`): the workspace sidebar is offset by exactly that
 * (`top-14`), and the pills are sized to sit inside it.
 */
export function SiteBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const [overHero, setOverHero] = useState(pathname === '/');

  useEffect(() => {
    const hero = document.querySelector('[data-site-hero]');
    if (!hero) {
      setOverHero(false);
      return;
    }
    // The hero counts as "under the bar" until its bottom edge passes the
    // bar's bottom edge, hence the 56px taken off the top of the root.
    const io = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), {
      rootMargin: '-56px 0px 0px 0px',
    });
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header
      data-over-hero={overHero || undefined}
      className={cn(
        '@container/header sticky top-0 z-40 h-14 transition-[background-color,backdrop-filter] duration-500 ease-glass motion-reduce:transition-none',
        overHero ? 'dark bg-transparent text-foreground' : 'bg-background/60 backdrop-blur-xl',
      )}
      role="banner"
    >
      {/* A rule that dissolves at both ends. A full-width hairline is the
          single strongest "this is a different surface" signal a bar can send,
          and over the photograph there is no surface to signal. */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,var(--border)_12%,var(--border)_88%,transparent)] transition-opacity duration-500',
          overHero && 'opacity-0',
        )}
      />
      <div className="relative flex h-full items-center gap-2 px-3 md:px-5">{children}</div>
    </header>
  );
}
