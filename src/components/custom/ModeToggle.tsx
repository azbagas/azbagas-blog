import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  theme: 'theme-light' | 'dark' | 'system';
  setThemeState: (theme: 'theme-light' | 'dark' | 'system') => void;
}

export function ModeToggle({ theme, setThemeState }: Props) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setThemeState(theme == 'dark' ? 'theme-light' : 'dark')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
