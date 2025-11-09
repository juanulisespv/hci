"use client"

import * as React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar as CalendarIcon, MapPin, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
  className?: string;
}

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [date, setDate] = React.useState<Date>()
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch?.(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
        <div className="bg-card shadow-lg rounded-full border flex items-center p-2">
            <div className="flex-1 px-4">
                <label htmlFor="event-search" className="text-xs font-bold">¿Qué evento buscas?</label>
                <Input
                    id="event-search"
                    placeholder="Concierto, exposición..."
                    className="border-none p-0 h-auto focus-visible:ring-0 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <Separator orientation="vertical" className="h-10" />
            <Popover>
                <PopoverTrigger asChild>
                <button
                    className={cn(
                    "flex-1 text-left px-4",
                    !date && "text-muted-foreground"
                    )}
                >
                     <p className="text-xs font-bold">Fecha</p>
                     <p className="text-sm">
                        {date ? format(date, "d 'de' LLLL", { locale: es }) : <span>Elige una fecha</span>}
                     </p>
                </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
                </PopoverContent>
            </Popover>
            <Separator orientation="vertical" className="h-10" />
             <div className="flex-1 px-4">
                <label htmlFor="location-search" className="text-xs font-bold">Ubicación</label>
                <Input
                    id="location-search"
                    placeholder="Ciudad o barrio"
                    className="border-none p-0 h-auto focus-visible:ring-0 text-sm"
                />
            </div>
            <Button onClick={handleSearch} type="submit" size="icon" className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
            </Button>
        </div>
    </div>
  )
}
