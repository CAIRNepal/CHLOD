/**
 * Shared XR / immersive museum surface styles.
 * Uses semantic theme tokens so XR matches the dashboard in light and dark mode.
 */

import { useTranslations } from 'next-intl';

type MessageValues = Record<string, string | number | Date>;

/** XR copy lives under `heritageMuseum.xr.*` — use parent namespace for reliable resolution. */
export function useXrTranslations() {
  const t = useTranslations('heritageMuseum');
  return (key: string, values?: MessageValues) =>
    t(`xr.${key}` as Parameters<typeof t>[0], values);
}

/** Map empty-state copy under `heritageMuseum.map.*`. */
export function useMapTranslations() {
  const t = useTranslations('heritageMuseum');
  return (key: string, values?: MessageValues) =>
    t(`map.${key}` as Parameters<typeof t>[0], values);
}

/** Timeline copy under `heritageMuseum.timeline.*`. */
export function useTimelineTranslations() {
  const t = useTranslations('heritageMuseum');
  return (key: string, values?: MessageValues) =>
    t(`timeline.${key}` as Parameters<typeof t>[0], values);
}

/*
 * The museum's panels are the same liquid glass as the site chrome (spec 008),
 * so the museum stops reading as a separate app inside the site. Both panel
 * kinds use the STRONG glass: they carry body text, often over a photograph,
 * and the light 4px blur is for chips and pills that only hold a label.
 */
export const xrGlassPanel = 'liquid-glass-strong rounded-2xl';

export const xrSubtlePanel = 'liquid-glass-strong rounded-xl';

export const xrChip =
  'liquid-glass inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-muted-foreground';

export const xrCinematicLeft =
  'pointer-events-none absolute inset-0 bg-gradient-to-r from-background/92 via-background/35 to-transparent';

export const xrCinematicBottom =
  'pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/25';

export const xrNavItemBase =
  'w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
