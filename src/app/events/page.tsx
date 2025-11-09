"use client";

import { useState } from 'react';
import { events } from '@/lib/events';
import { FilterBar } from './(components)/FilterBar';
import { EventList } from './(components)/EventList';
import { MapView } from './(components)/MapView';

export default function EventsPage() {
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-b">
        <FilterBar />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1fr)] gap-8 py-6 overflow-hidden">
        <div className="lg:h-full lg:overflow-hidden">
            <h2 className="text-2xl font-headline font-bold mb-4">Resultados</h2>
            <EventList events={events} onItemHover={setHoveredEventId} />
        </div>
        <div className="hidden lg:block h-full">
            <MapView events={events} hoveredEventId={hoveredEventId} onPinHover={setHoveredEventId} />
        </div>
      </div>
    </div>
  );
}
