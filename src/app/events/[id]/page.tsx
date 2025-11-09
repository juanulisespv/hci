import { events } from "@/lib/events";
import { notFound } from "next/navigation";
import { User, Calendar, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { EventGallery } from "./(components)/EventGallery";
import { StickyBookingPanel } from "./(components)/StickyBookingPanel";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <EventGallery images={event.images} title={event.title} />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mt-8">
        <div className="lg:col-span-2">
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 hidden lg:block">
              {event.title}
            </h1>
            <div className="flex items-center space-x-6 text-muted-foreground text-sm mb-6">
                <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary"/>
                    <span>{event.category}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary"/>
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary"/>
                    <span>Organizado por <strong>{event.organizer}</strong></span>
                </div>
            </div>

            <Separator className="my-8" />
            
            <h2 className="font-headline text-2xl font-bold text-primary mb-4">Sobre este evento</h2>
            <p className="text-foreground/90 leading-relaxed">
                {event.description}
            </p>
            
            <Separator className="my-8" />

        </div>

        <div className="lg:col-span-1">
          <StickyBookingPanel event={event} />
        </div>
      </div>
    </div>
  );
}
