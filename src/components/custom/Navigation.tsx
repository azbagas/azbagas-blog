import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { AlignJustify } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { useEffect, useState } from 'react';

const menus: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export default function Navigation() {
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex gap-4 items-center">
      {/* Desktop Navigation */}
      <NavigationMenu className="gap-4">
        <NavigationMenuList className="flex-col hidden sm:flex-row sm:flex gap-2">
          {menus.map((menu) => (
            <NavigationMenuItem key={menu.title}>
              <NavigationMenuLink
                href={menu.href}
                // Add the currentPath variable to activate the current menu item
                className={`hover:text-secondary-foreground py-3 rounded-lg px-4 font-medium text-sm ${
                  currentPath === menu.href
                    ? 'text-secondary-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {menu.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Dark Mode */}
      <ModeToggle />

      {/* Mobile Menu Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="block sm:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="top" onOpenAutoFocus={(e) => e.preventDefault()}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Where do you want to go?</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 p-4">
            {menus.map((menu) => (
              <a key={menu.title} href={menu.href}>
                {menu.title}
              </a>
            ))}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
