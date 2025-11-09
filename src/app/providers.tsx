"use client";

import { SavedEventsProvider } from '@/contexts/SavedEventsContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SavedEventsProvider>{children}</SavedEventsProvider>;
}
