
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sessions', label: 'Wise Up Sessions' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/lists', label: 'My Lists' },
];

export function Header() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  const getInitials = (displayName: string | null | undefined) => {
    if (!displayName) return 'U';
    return displayName.split(' ').map(n => n[0]).join('');
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl sm:text-3xl sm:inline-block font-headline text-shimmer">
              Abe Newmeyer
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
           {user && (
            <Link
              href="/abe"
              className="transition-colors hover:text-primary text-foreground/80 font-semibold text-shimmer"
            >
              AI Abe
            </Link>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
            ) : user ? (
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost">
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            )}
          </div>
          <div className="flex items-center justify-end md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col gap-6 pt-6">
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                      <span className="font-bold text-2xl font-headline text-shimmer">Abe Newmeyer</span>
                    </Link>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                     {user && (
                        <Link href="/abe" className="text-lg font-medium transition-colors hover:text-primary text-shimmer">AI Abe</Link>
                     )}
                     <div className="border-t border-border pt-6">
                      {loading ? (
                         <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
                      ) : user ? (
                        <>
                          <Link href="/dashboard" className="text-lg font-medium transition-colors hover:text-primary">Dashboard</Link>
                          <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-lg font-medium mt-4">
                            <LogOut className="mr-2 h-5 w-5" /> Logout
                          </Button>
                        </>
                      ) : (
                        <Button asChild variant="default" className="w-full">
                          <Link href="/login">
                            <LogIn className="mr-2 h-5 w-5" /> Login
                          </Link>
                        </Button>
                      )}
                     </div>
                  </div>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
