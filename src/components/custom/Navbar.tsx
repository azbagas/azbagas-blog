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
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { AlignJustify } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

const menus: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  },
];

const Navbar = () => {
  return (
    <nav className="custom-container py-8 sticky top-0 bg-background">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>azbagas</div>

        <div className="flex gap-4 items-center">
          {/* Desktop Navigation */}
          <NavigationMenu className="gap-4">
            <NavigationMenuList className="flex-col hidden sm:flex-row sm:flex">
              {menus.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuLink
                    href={menu.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {menu.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Dark Mode */}
          <ModeToggle></ModeToggle>

          {/* Mobile Menu Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <AlignJustify className="block sm:hidden cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="top"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Where are you going?</SheetDescription>
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
      </div>
    </nav>
  );
};

export default Navbar;
