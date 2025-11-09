"use client";

import Image from 'next/image';
import { Event } from '@/lib/types';
import { MapPin, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useRef, WheelEvent } from 'react';

interface MapViewProps {
  events: Event[];
  hoveredEventId: string | null;
  onPinHover: (id: string | null) => void;
}

// Expanded boundaries for Vitoria-Gasteiz
const MAP_BOUNDS = {
  latMin: 42.82, latMax: 42.88,
  lngMin: -2.72, lngMax: -2.63,
};

const normalizeCoordinates = (lat: number, lng: number) => {
  const y = 100 - ((lat - MAP_BOUNDS.latMin) / (MAP_BOUNDS.latMax - MAP_BOUNDS.latMin)) * 100;
  const x = ((lng - MAP_BOUNDS.lngMin) / (MAP_BOUNDS.lngMax - MAP_BOUNDS.lngMin)) * 100;
  
  // Clamp values between 0 and 100 to avoid pins going off-map
  const clampedX = Math.max(0, Math.min(100, x));
  const clampedY = Math.max(0, Math.min(100, y));

  return { x: `${clampedX}%`, y: `${clampedY}%` };
};

export function MapView({ events, hoveredEventId, onPinHover }: MapViewProps) {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-view')?.imageUrl || "https://picsum.photos/seed/map/1024/1024";
  const [scale, setScale] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale(s => Math.min(s + 0.2, 3));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.2, 1));
  
  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl bg-gray-200">
      <div 
        ref={mapRef}
        className="w-full h-full transition-transform duration-300"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src={mapImage}
          alt="Map of events"
          fill
          className="object-cover"
          data-ai-hint="city map"
        />
        <div className="absolute inset-0 bg-primary/10"></div>
        
        {events.map((event) => {
          const { x, y } = normalizeCoordinates(event.coordinates.lat, event.coordinates.lng);
          const isHovered = event.id === hoveredEventId;

          return (
            <Popover key={event.id}>
              <PopoverTrigger asChild>
                 <button
                  style={{ left: x, top: y }}
                  onMouseEnter={() => onPinHover(event.id)}
                  onMouseLeave={() => onPinHover(null)}
                  className={cn(
                    'absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-sm font-bold shadow-md transition-all duration-200 max-w-[120px] truncate',
                    isHovered 
                      ? 'bg-primary text-primary-foreground scale-110 z-10' 
                      : 'bg-card text-card-foreground'
                  )}
                >
                  {event.title}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex flex-col gap-2">
                  <Image 
                    src={event.images[0]} 
                    alt={event.title} 
                    width={256} 
                    height={150} 
                    className="rounded-md object-cover aspect-[16/9]"
                    data-ai-hint="event image"
                  />
                  <div>
                    <h4 className="font-bold truncate">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.location}</p>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/events/${event.id}`}>Ver detalles</Link>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
       <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button size="icon" onClick={handleZoomIn} className="rounded-full shadow-lg">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Zoom in</span>
        </Button>
        <Button size="icon" onClick={handleZoomOut} className="rounded-full shadow-lg">
          <Minus className="h-4 w-4" />
          <span className="sr-only">Zoom out</span>
        </Button>
      </div>
    </div>
  );
}
