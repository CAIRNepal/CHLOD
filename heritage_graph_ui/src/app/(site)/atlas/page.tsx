import { Suspense } from 'react';

import { AtlasPageClient } from './atlas-page-client';
import { AtlasShellLoading } from './components/atlas-loading-fallbacks';

export default function AtlasPage() {
  // A definite height (viewport minus the 3.5rem site bar) so the rail, map and
  // panel can each scroll inside it; -my-4 / -mx cancel main's padding.
  return (
    <div className="relative -mx-4 -my-4 flex h-[calc(100svh-3.5rem)] flex-col overflow-hidden bg-background md:-mx-6">
      <Suspense fallback={<AtlasShellLoading />}>
        <AtlasPageClient />
      </Suspense>
    </div>
  );
}
