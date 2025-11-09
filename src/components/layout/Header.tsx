import Link from 'next/link';
import { Bookmark, UserCircle } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/events">Explorar</Link>
          </Button>
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/saved">
              <Bookmark className="h-5 w-5" />
              <span className="hidden md:inline">Guardados</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">User Profile</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
