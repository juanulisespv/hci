"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const filters = ["Hoy", "Este fin de semana", "Conciertos", "Gratis", "Exposiciones", "Teatro"];

export function FilterBar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="py-4">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            className={cn(
              "rounded-full whitespace-nowrap",
              activeFilter === filter ? "bg-primary text-primary-foreground" : "bg-card"
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
}
