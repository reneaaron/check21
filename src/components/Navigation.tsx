import { Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <Bitcoin className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">
            <span className="text-foreground">check</span>
            <span className="text-primary">21</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('compare')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Compare
          </button>
          <button
            onClick={() => scrollToSection('platforms')}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            All Platforms
          </button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
