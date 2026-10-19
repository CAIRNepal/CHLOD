// components/theme-toggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * A round icon button that sits inside the glass control pill.
 *
 * It was a sliding switch — a second, differently shaped control inside a row
 * of round ones. The theme is not known until mount (next-themes reads it from
 * storage), so before then the button renders as an empty placeholder of the
 * same size rather than nothing: returning null made every control to its
 * right jump 44px sideways on load.
 */
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const base =
    'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-foreground/70 transition-colors';

  if (!mounted || !resolvedTheme) {
    return <span className={base} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
      className={cn(
        base,
        'hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      )}
    >
      {isDark ? (
        <Sun className="size-4" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
