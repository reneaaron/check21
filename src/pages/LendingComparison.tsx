import { useState } from 'react';
import { PlatformFinder } from '../components/PlatformFinder';
import { Results } from '../components/Results';
import { PlatformGrid } from '../components/PlatformGrid';
import { PlatformModal } from '../components/PlatformModal';
import { platforms } from '../data/platforms';
import { matchPlatforms } from '../lib/matching';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import type { Platform } from '../data/platforms';
import type { FormData } from '../lib/matching';

export function LendingComparison() {
  const [matches, setMatches] = useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleMatch = (_: Platform[], formData: FormData) => {
    const results = matchPlatforms(formData, platforms);
    setMatches(results);
    setShowResults(true);
    
    // Scroll to results after a brief delay
    setTimeout(() => {
      const element = document.getElementById('results');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-6xl pt-24 pb-12 px-6">
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <Badge variant="outline">
              <Star className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-400" />
              #1 Bitcoin-Backed Lending Comparison
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Unlock Your Bitcoin
              <br />
              <span className="text-primary">
                Without Selling
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find your perfect Bitcoin-backed loan in <span className="text-primary font-semibold">seconds</span>.
            Lower rates. Better terms. No hassle.
          </p>
        </div>
      </div>

      <div id="compare">
        <PlatformFinder onMatch={handleMatch} />
        {showResults && matches.length > 0 && (
          <div id="results" className="container mx-auto max-w-4xl px-6 pb-16">
            <Results matches={matches} onShowDetails={setSelectedPlatform} />
          </div>
        )}
      </div>
      
      <div id="platforms">
        <PlatformGrid platforms={platforms} onShowDetails={setSelectedPlatform} />
      </div>
      
      <PlatformModal platform={selectedPlatform} onClose={() => setSelectedPlatform(null)} />
    </div>
  );
}

export default LendingComparison;