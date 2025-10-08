import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PlatformFinder } from './components/PlatformFinder';
import { Results } from './components/Results';
import { PlatformGrid } from './components/PlatformGrid';
import { PlatformModal } from './components/PlatformModal';
import { platforms } from './data/platforms';
import { matchPlatforms } from './lib/matching';
import type { Platform } from './data/platforms';
import type { FormData } from './lib/matching';

function App() {
  const [matches, setMatches] = useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleMatch = (_: Platform[], formData: FormData) => {
    const results = matchPlatforms(formData, platforms);
    setMatches(results);
    setShowResults(true);
    
    // Scroll to results after a brief delay
    setTimeout(() => {
      const element = document.getElementById('compare');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen dark">
      <Navigation />
      <Hero />
      <div id="compare">
        <PlatformFinder onMatch={handleMatch} />
        {showResults && matches.length > 0 && (
          <div className="container mx-auto max-w-4xl px-6 pb-16">
            <Results matches={matches} onShowDetails={setSelectedPlatform} />
          </div>
        )}
      </div>
      <PlatformGrid platforms={platforms} onShowDetails={setSelectedPlatform} />
      
      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">21</span>
              <span className="text-primary">compare</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Professional Bitcoin lending platform comparison
            </p>
            <p className="text-xs text-muted-foreground">
              Compare rates, terms, and features across leading Bitcoin-backed loan providers.
              <br />
              Always verify platform details before borrowing.
            </p>
          </div>
        </div>
      </footer>

      <PlatformModal platform={selectedPlatform} onClose={() => setSelectedPlatform(null)} />
    </div>
  );
}

export default App;
