"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSavedEvents } from "@/contexts/SavedEventsContext";
import { Event } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface StickyBookingPanelProps {
  event: Event;
}

export function StickyBookingPanel({ event }: StickyBookingPanelProps) {
  const { isSaved, toggleSavedEvent } = useSavedEvents();
  const saved = isSaved(event.id);

  return (
    <div className="lg:sticky lg:top-24">
      <Card className="shadow-lg rounded-xl">
        <CardHeader>
          <p className="text-2xl font-bold">
            {event.price === 'Gratis' ? 'Gratis' : `${event.price} €`}
            {event.price !== 'Gratis' && <span className="text-sm font-normal text-muted-foreground"> / entrada</span>}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base">
            Inscribirse
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => toggleSavedEvent(event.id)}
          >
            <Heart className={cn("mr-2 h-5 w-5", saved ? 'fill-destructive stroke-destructive' : 'fill-transparent')} />
            {saved ? 'Guardado' : 'Guardar'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
