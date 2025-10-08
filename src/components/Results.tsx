import type { Platform } from '@/data/platforms';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, ExternalLink } from 'lucide-react';

interface ResultsProps {
  matches: Platform[];
  onShowDetails: (platform: Platform) => void;
}

export function Results({ matches, onShowDetails }: ResultsProps) {
  if (matches.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">Your Top Matches</h3>
        <p className="text-muted-foreground mt-2">Based on your preferences, here are the best platforms for you</p>
      </div>

      <div className="space-y-4">
        {matches.map((platform, index) => (
          <Card key={platform.id} className={`platform-card ${index === 0 ? 'border-primary' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {index === 0 && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        <Trophy className="h-3 w-3 mr-1" />
                        BEST MATCH
                      </Badge>
                    )}
                    <h4 className="text-xl font-bold">{platform.name}</h4>
                    <Badge variant="outline" className={
                      platform.type === 'cefi' 
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }>
                      {platform.type.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                      <div className="text-sm font-semibold">${platform.minLoan.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {platform.score && (
                    <div className="text-sm text-muted-foreground">
                      Match score: <span className="font-semibold text-primary">{platform.score.toFixed(1)}/10</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button onClick={() => onShowDetails(platform)} variant="outline" size="sm">
                    Details
                  </Button>
                  <Button asChild size="sm">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
