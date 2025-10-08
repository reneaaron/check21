import { TrendingDown, Shield, Zap } from 'lucide-react';

export function Hero() {
  const scrollToCompare = () => {
    const element = document.getElementById('compare');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Compare Bitcoin
            <br />
            <span className="text-primary">Lending Platforms</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect Bitcoin-backed loan in seconds. Compare rates, terms, and features across 18 leading platforms.
          </p>
          
          <button
            onClick={scrollToCompare}
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Comparing
          </button>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="stat-card rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground mt-2">Platforms</div>
            </div>
            
            <div className="stat-card rounded-lg p-6 text-center">
              <TrendingDown className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm text-muted-foreground">Low Rates</div>
            </div>
            
            <div className="stat-card rounded-lg p-6 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm text-muted-foreground">Fast Funding</div>
            </div>
            
            <div className="stat-card rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-sm text-muted-foreground">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
