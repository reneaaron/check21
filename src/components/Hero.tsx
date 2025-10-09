import { TrendingDown, Shield, Zap, ArrowRight, Star, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const scrollToCompare = () => {
    const element = document.getElementById('compare');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const logos = [
    'nexo', 'coinbase', 'binance', 'aave', 'compound', 'makerdao',
    'ledn', 'youhodler', 'coinloan', 'nebeus', 'salt', 'bitfinex',
    'sygnum', 'river', 'unchained', 'hodlhodl', 'sovryn', 'strike'
  ];

  return (
    <section className="relative w-full pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced headline with better typography */}
          <div className="space-y-4">
            <Badge variant="outline">
              <Star className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-400" />
              #1 Bitcoin Lending Comparison Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Compare Bitcoin
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Lending Platforms
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the perfect Bitcoin-backed loan in <span className="text-primary font-semibold">seconds</span>.
            Compare rates, terms, and features across <span className="text-primary font-semibold">18 leading platforms</span>.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex justify-center">
            <button
              onClick={scrollToCompare}
              className="group inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Comparing Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Trust indicator below CTA */}
          <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
            <Users className="w-4 h-4 mr-2" />
            10,000+ loans compared
          </div>
          
          {/* Partner logos showcase using proper carousel */}
          <div className="pt-16">
            <p className="text-sm font-medium text-muted-foreground mb-8">
              Trusted by leading Bitcoin platforms
            </p>
            <div className="max-w-6xl mx-auto">
              <Carousel autoPlay={true} autoPlayInterval={3000} className="w-full">
                <CarouselContent className="gap-6 px-4">
                  {logos.map((logo) => (
                    <CarouselItem key={logo} className="basis-1/4 md:basis-1/6 lg:basis-1/9">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 p-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                          <img
                            src={`/src/assets/logos/${logo}.svg`}
                            alt={`${logo} logo`}
                            className="w-full h-full object-contain rounded-md overflow-hidden"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          
          {/* Enhanced stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Integrated</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <TrendingDown className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">From 0.1%</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Interest Rates</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Zap className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">24-48hrs</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Fast Funding</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Shield className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">Bank-Level</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
