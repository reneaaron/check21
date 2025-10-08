import type { Platform } from '@/data/platforms';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PlatformGridProps {
  platforms: Platform[];
  onShowDetails: (platform: Platform) => void;
}

export function PlatformGrid({ platforms, onShowDetails }: PlatformGridProps) {
  return (
    <section id="platforms" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">All Platforms</h2>
          <p className="text-muted-foreground">Browse all Bitcoin lending platforms we track</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.id} className="platform-card flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <Badge variant="outline" className={
                    platform.type === 'cefi' 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }>
                    {platform.type.toUpperCase()}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{platform.custody}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground">APR</div>
                    <div className="text-lg font-bold text-primary">{platform.apr}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">LTV</div>
                    <div className="text-lg font-bold">{platform.ltv}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Funding</div>
                    <div className="text-sm font-semibold">{platform.fundingTime}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Min Loan</div>
                    <div className="text-sm font-semibold">
                      {platform.minLoan === 0 ? 'None' : `$${platform.minLoan.toLocaleString()}`}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  📍 {platform.geoDisplay}
                </div>

                <Button 
                  onClick={() => onShowDetails(platform)} 
                  className="w-full mt-auto"
                  variant="outline"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
