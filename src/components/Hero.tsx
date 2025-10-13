import { BarChart2, Shield, Zap, ArrowRight, Star, Users, Sparkles, Globe, Coins } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

export function Hero() {

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
              #1 Bitcoin Services Comparison Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Compare Bitcoin
              <br />
              <span className="text-primary">
                Services & Platforms
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the best Bitcoin services in <span className="text-primary font-semibold">seconds</span>.
            Compare rates, features, and deals across <span className="text-primary font-semibold">leading platforms</span> to maximize your Bitcoin experience.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = '/lending'}
              className="group inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Find the Best Bitcoin-Backed Loans
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Trust indicator below CTA */}
          <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
            <Users className="w-4 h-4 mr-2" />
            Trusted by thousands of Bitcoin users
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
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <div className="text-sm text-muted-foreground">Services</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Compared</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <BarChart2 className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">Best Rates</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Guaranteed</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Zap className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">Instant</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Comparisons</div>
            </div>
            
            <div className="stat-card rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Shield className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
              <div className="text-sm text-muted-foreground">Trusted</div>
              <div className="text-xs text-muted-foreground/60 mt-1">Information</div>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="pt-20 pb-8">
            <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 md:p-12 border shadow-sm">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Start Comparing Bitcoin Services Today
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of Bitcoin users who trust check21 to find the best services, rates, and features across the ecosystem.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => window.location.href = '/lending'}
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get Started with Bitcoin Lending
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features section */}
          <div className="pt-24 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Why Choose <span className="text-primary">check21</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="feature-card p-6 rounded-xl border bg-card/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Unbiased Comparisons</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We provide transparent, data-driven comparisons across all Bitcoin services to help you make informed decisions.
                </p>
              </div>
              
              <div className="feature-card p-6 rounded-xl border bg-card/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Global Coverage</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Compare Bitcoin services from around the world, with detailed information on availability, restrictions, and requirements.
                </p>
              </div>
              
              <div className="feature-card p-6 rounded-xl border bg-card/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Save Money</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Find the best deals and lowest fees across all Bitcoin services, helping you maximize value and minimize costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
