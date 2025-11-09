"use client"

import { events } from '@/lib/events';
import EventCard from '@/components/EventCard';
import { SearchBar } from './(components)/SearchBar';
import { useState } from 'react';
import { MapView } from './events/(components)/MapView';
import { Event } from '@/lib/types';
import { EventList } from './events/(components)/EventList';

export default function Home() {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = events.filter(event =>
      event.title.toLowerCase().includes(lowercasedTerm) ||
      event.category.toLowerCase().includes(lowercasedTerm) ||
      event.city.toLowerCase().includes(lowercasedTerm) ||
      event.location.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredEvents(results);
  };

  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="py-12 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Encuentra tu próxima experiencia cultural
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Busca conciertos, exposiciones, teatro y más en Vitoria-Gasteiz.
            </p>
            <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden mb-8">
            <MapView events={filteredEvents} hoveredEventId={hoveredEventId} onPinHover={setHoveredEventId}/>
        </div>

        <div>
            <h2 className="text-2xl font-bold font-headline mb-4">Eventos en Vitoria-Gasteiz</h2>
            <div className="h-full overflow-y-auto">
                <EventList events={filteredEvents} onItemHover={setHoveredEventId} />
            </div>
        </div>
      </div>
    </div>
  );
}
