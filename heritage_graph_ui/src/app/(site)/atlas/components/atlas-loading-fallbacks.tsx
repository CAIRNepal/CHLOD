'use client';

import { useTranslations } from 'next-intl';

export function AtlasShellLoading() {
  const t = useTranslations('Atlas');
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-2 text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm">{t('loadingAtlas')}</span>
    </div>
  );
}
