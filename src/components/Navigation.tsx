import { Bitcoin, Zap, ArrowRightLeft, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Bitcoin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">
              <span className="text-foreground">check</span>
              <span className="text-primary">21</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link
            to="/lending"
            className={`text-sm font-medium transition-colors hover:text-foreground flex items-center ${
              location.pathname === '/lending' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Lending
          </Link>
          
          <div className="text-sm font-medium text-muted-foreground/50 flex items-center cursor-not-allowed">
            <Zap className="h-3.5 w-3.5 mr-1.5 text-muted-foreground/50" />
            Lightning
            <Badge variant="outline" className="ml-1.5 text-[10px] py-0 h-4 px-1">
              Soon™
            </Badge>
          </div>
          
          <div className="text-sm font-medium text-muted-foreground/50 flex items-center cursor-not-allowed">
            <Shield className="h-3.5 w-3.5 mr-1.5 text-muted-foreground/50" />
            Self-Custody
            <Badge variant="outline" className="ml-1.5 text-[10px] py-0 h-4 px-1">
              Soon™
            </Badge>
          </div>
          
          <div className="text-sm font-medium text-muted-foreground/50 flex items-center cursor-not-allowed">
            <ArrowRightLeft className="h-3.5 w-3.5 mr-1.5 text-muted-foreground/50" />
            Swaps
            <Badge variant="outline" className="ml-1.5 text-[10px] py-0 h-4 px-1">
              Soon™
            </Badge>
          </div>
          
          <Link to="/lending">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
