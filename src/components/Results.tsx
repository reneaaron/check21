import type { Platform } from '@/data/platforms';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, ExternalLink, Star } from 'lucide-react';

interface ResultsProps {
  matches: Platform[];
  onShowDetails: (platform: Platform) => void;
}

// Convert 0-10 score to 1-5 stars
function getStarRating(score: number): number {
  return Math.round((score / 10) * 5 * 2) / 2; // Round to nearest 0.5
}

// Render star rating component
function StarRating({ score }: { score: number }) {
  const rating = getStarRating(score);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - Math.ceil(rating));

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-primary text-primary" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="h-4 w-4 text-muted-foreground" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className="h-4 w-4 fill-primary text-primary" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground" />
      ))}
    </div>
  );
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

      <div className="space-y-6">
        {matches.map((platform, index) => (
          <Card
            key={platform.id}
            className={`platform-card cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 ${index === 0 ? 'border-primary border-2' : ''}`}
            onClick={() => onShowDetails(platform)}
          >
            <CardContent className="p-8 relative">
              {/* Match Rating - Top Right */}
              {platform.score && (
                <div className="absolute top-6 right-6 flex flex-col items-end gap-1.5">
                  {index === 0 ? (
                    <div className="flex items-center gap-1.5 text-primary font-semibold text-sm">
                      <Trophy className="h-4 w-4" />
                      BEST MATCH
                    </div>
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">Match Rating</span>
                  )}
                  <StarRating score={platform.score} />
                </div>
              )}

              {/* Main Content */}
              <div className="pr-32">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-8 h-8 rounded object-contain"
                  />
                  <h4 className="text-2xl font-bold">{platform.name}</h4>
                  <Badge variant="outline" className={
                    platform.type === 'cefi'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }>
                    {platform.type.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
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

                <div className="flex flex-wrap gap-2">
                  {platform.features.slice(0, 3).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Visit Button - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <Button
                  asChild
                  size="sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    Visit Site
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
