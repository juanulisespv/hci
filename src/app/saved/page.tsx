"use client";

import { useSavedEvents } from "@/contexts/SavedEventsContext";
import { events } from "@/lib/events";
import EventCard from "@/components/EventCard";
import { Bookmark } from "lucide-react";

export default function SavedPage() {
  const { savedEventIds } = useSavedEvents();
  const savedEvents = events.filter(event => savedEventIds.includes(event.id));

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold text-primary">Mis Eventos Guardados</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Tu colección personal de experiencias culturales.
        </p>
      </div>

      {savedEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {savedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <Bookmark className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold text-foreground">No tienes eventos guardados</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Usa el icono del corazón para guardar los eventos que te interesen.
          </p>
        </div>
      )}
    </div>
  );
}
