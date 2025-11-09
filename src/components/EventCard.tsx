"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import { Event } from '@/lib/types';
import { useSavedEvents } from '@/contexts/SavedEventsContext';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

interface EventCardProps {
  event: Event;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function EventCard({ event, className, onMouseEnter, onMouseLeave }: EventCardProps) {
  const { isSaved, toggleSavedEvent } = useSavedEvents();
  const saved = isSaved(event.id);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSavedEvent(event.id);
  };

  return (
    <Card 
      className={cn("w-full overflow-hidden border-none shadow-none bg-transparent", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={`/events/${event.id}`} className="block group">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={event.images[0]}
              alt={event.title}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="event image"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-3 right-3 rounded-full h-8 w-8 bg-black/30 hover:bg-black/50 text-white hover:text-white"
              onClick={handleSaveClick}
              aria-label={saved ? 'Quitar de guardados' : 'Guardar evento'}
            >
              <Heart className={cn("h-5 w-5 transition-all", saved ? 'fill-destructive stroke-destructive' : 'fill-transparent stroke-white')} />
            </Button>
          </div>
          <div className="pt-3">
            <h3 className="font-bold font-headline text-lg text-foreground truncate">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.date}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {event.location}, {event.city}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
