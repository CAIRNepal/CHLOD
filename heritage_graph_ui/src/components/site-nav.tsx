'use client';

/**
 * The top bar's navigation, shared by the public shell and the workspace shell.
 *
 * WHY A TOP BAR AT ALL
 * The entry page opened inside the workspace sidebar — a reader arriving at the
 * front door was handed Contributions Queue, Activity Log and Browse by type
 * before they knew what the platform was. Those are a contributor's tools. The
 * front door needs the few destinations a visitor actually wants, and nothing
 * else.
 *
 * WHY ONE COMPONENT FOR BOTH SHELLS
 * So that moving between them does not feel like changing site. The bar is
 * identical everywhere; the only difference is that the workspace shell also
 * renders the sidebar trigger, because that shell has a sidebar to toggle.
 *
 * WHY A PILL (spec 008)
 * Three pieces of glass instead of one strip: the mark on the left, the
 * destinations in the middle, the controls on the right. Each is a separate
 * object on the page, so over the entry photograph the picture shows through
 * the gaps between them rather than behind a full-width band. Contribute is
 * the one solid element — it is the action the platform exists to invite, and
 * it is the only thing in the bar that is not a way to look at something.
 *
 * Reference material (About, Methods, Team, Contributors, Organizations) sits
 * under one menu rather than five top-level links: it is what a reader consults
 * once, not what they navigate by.
 */

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';

import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

/** The destinations a visitor navigates by. Contribute is the CTA, not a link. */
const PRIMARY = [
  { key: 'heritageMuseum', href: '/heritage-museum' },
  { key: 'heritageAtlas', href: '/atlas' },
  { key: 'dashboard', href: '/dashboard' },
] as const;

const CONTRIBUTE = { key: 'contribute', href: '/contribute' } as const;

/**
 * Reference material, consulted rather than navigated.
 *
 * The menu is labelled "About" and its first item is the About page. That
 * repetition is deliberate: the label a visitor looks for when they want to
 * know who is behind this is "About", not "Reference".
 */
const REFERENCE = [
  { key: 'about', href: '/about' },
  { key: 'methods', href: '/methods' },
  { key: 'team', href: '/team' },
  { key: 'contributors', href: '/community/contributors' },
  { key: 'organizations', href: '/community/organizations' },
] as const;

/** True when `href` is the current page or an ancestor of it. */
function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring';

/**
 * The current page is a filled lozenge inside the pill. The previous bar used
 * a rule beneath the label; inside a rounded pill a rule reads as an underline
 * that has lost its text. The fill never changes the label's weight, so the
 * row does not reflow between pages.
 */
const pillLink = (active: boolean) =>
  cn(
    'rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200',
    focusRing,
    active
      ? 'bg-foreground/10 text-foreground'
      : 'text-foreground/70 hover:bg-foreground/[0.06] hover:text-foreground',
  );

export function SiteNav({ withSidebarTrigger = false }: { withSidebarTrigger?: boolean }) {
  const t = useTranslations('nav');
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);

  const referenceActive = REFERENCE.some((r) => isActive(pathname, r.href));

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2">
      {withSidebarTrigger ? (
        <SidebarTrigger
          variant="ghost"
          className="liquid-glass size-10 rounded-full text-foreground/80 hover:bg-foreground/[0.06] hover:text-foreground"
        />
      ) : null}

      {/* The mark, then the name. The mark never truncates — it is the way back
          to the front door — and the name drops out before anything else does
          when the bar runs short of room. */}
      <Link
        href="/"
        aria-label="HeritageGraph"
        className={cn('group flex shrink-0 items-center gap-2.5 rounded-full', focusRing)}
      >
        <span className="liquid-glass flex size-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <span className="font-display text-2xl leading-none text-foreground" aria-hidden="true">
            h
          </span>
        </span>
        <span
          className="hidden font-display text-xl leading-none text-foreground @[84rem]/header:inline"
          aria-hidden="true"
        >
          HeritageGraph
        </span>
      </Link>

      {/* Desktop nav. Keyed to the header's own container, not the viewport:
          in the workspace shell the bar shares the row with the sidebar
          trigger, and long Nepali labels need more room than English ones.
          Between 64rem and 84rem the pill shares the row with a compact set
          of controls (icon-only search, short sign-in label, no wordmark);
          past 84rem everything gets its full label. Measured at 1024px with
          the sidebar trigger present. */}
      <nav
        aria-label={t('navigation')}
        className="liquid-glass mx-auto hidden items-center gap-0.5 rounded-full p-1 @[64rem]/header:flex"
      >
        {PRIMARY.map(({ key, href }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={pillLink(active)}
            >
              {t(key)}
            </Link>
          );
        })}

        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(pillLink(referenceActive), 'inline-flex items-center gap-1')}
          >
            {t('about')}
            <ChevronDown className="size-3.5" aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-52">
            {REFERENCE.map(({ key, href }) => (
              <DropdownMenuItem key={href} asChild>
                <Link href={href}>{t(key)}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href={CONTRIBUTE.href}
          aria-current={isActive(pathname, CONTRIBUTE.href) ? 'page' : undefined}
          className={cn(
            'group ml-1 inline-flex items-center gap-1 rounded-full bg-cta px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-cta-foreground transition-opacity hover:opacity-90',
            focusRing,
          )}
        >
          {t(CONTRIBUTE.key)}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
      </nav>

      {/* Below that width the same links live in a sheet. A nav that silently
          disappears on a narrow screen is worse than no nav. */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label={t('navigation')}
          className={cn(
            'liquid-glass ml-auto inline-flex size-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground @[64rem]/header:hidden',
            focusRing,
          )}
        >
          <Menu className="size-4.5" aria-hidden="true" />
        </SheetTrigger>
        <SheetContent side="left" className="w-72 gap-0 p-0">
          <SheetTitle className="border-b border-border px-5 py-4 font-display text-xl">
            HeritageGraph
          </SheetTitle>
          <nav aria-label={t('navigation')} className="flex flex-col gap-1 p-3">
            {[...PRIMARY, CONTRIBUTE].map(({ key, href }) => (
              <SheetLink
                key={href}
                href={href}
                active={isActive(pathname, href)}
                onNavigate={() => setOpen(false)}
              >
                {t(key)}
              </SheetLink>
            ))}
            <p className="mt-4 px-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              {t('about')}
            </p>
            {REFERENCE.map(({ key, href }) => (
              <SheetLink
                key={href}
                href={href}
                active={isActive(pathname, href)}
                onNavigate={() => setOpen(false)}
              >
                {t(key)}
              </SheetLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface SheetLinkProps {
  href: string;
  active: boolean;
  onNavigate: () => void;
  children: React.ReactNode;
}

function SheetLink({ href, active, onNavigate, children }: SheetLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'rounded-full px-3 py-2 text-sm transition-colors',
        focusRing,
        active
          ? 'bg-foreground/10 font-medium text-foreground'
          : 'text-muted-foreground hover:bg-foreground/[0.06] hover:text-foreground',
      )}
    >
      {children}
    </Link>
  );
}
