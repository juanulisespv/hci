"use client";

import EventCard from "@/components/EventCard";
import { Event } from "@/lib/types";

interface EventListProps {
  events: Event[];
  onItemHover: (id: string | null) => void;
}

export function EventList({ events, onItemHover }: EventListProps) {
  return (
    <div className="h-full overflow-y-auto pr-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            onMouseEnter={() => onItemHover(event.id)}
            onMouseLeave={() => onItemHover(null)}
          />
        ))}
      </div>
    </div>
  );
}
