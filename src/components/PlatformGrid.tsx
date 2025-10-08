import type { Platform } from '@/data/platforms';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, ShieldCheck, DollarSign } from 'lucide-react';

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
            <Card
              key={platform.id}
              className="platform-card flex flex-col hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              onClick={() => onShowDetails(platform)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-10 h-10 rounded-lg object-contain"
                    />
                    <CardTitle className="text-xl font-semibold">{platform.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className={
                    platform.type === 'cefi'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }>
                    {platform.type.toUpperCase()}
                  </Badge>
                </div>
                
                {/* Key metrics prominently displayed */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-xs text-muted-foreground mb-1">Interest Rate</div>
                    <div className="text-xl font-bold text-primary">{platform.apr}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Max LTV</div>
                    <div className="text-xl font-bold">{platform.ltv}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col pt-0">
                {/* Quick highlights */}
                <div className="flex flex-wrap gap-2">
                  {platform.fundingTime === 'Instant' && (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Instant Funding
                    </Badge>
                  )}
                  {!platform.kyc && (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      No KYC
                    </Badge>
                  )}
                  {platform.minLoan === 0 && (
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-xs flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      No Minimum
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
