import type { Platform } from '@/data/platforms';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Check, X } from 'lucide-react';

interface PlatformModalProps {
  platform: Platform | null;
  onClose: () => void;
}

export function PlatformModal({ platform, onClose }: PlatformModalProps) {
  if (!platform) return null;

  return (
    <Dialog open={!!platform} onOpenChange={onClose}>
      <DialogContent onClose={onClose} className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-10 h-10 rounded-lg object-contain"
            />
            <DialogTitle className="text-2xl font-bold">
              {platform.name}
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className={
              platform.type === 'cefi'
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
            }>
              {platform.type.toUpperCase()}
            </Badge>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{platform.custody}</span>
            {!platform.kyc && (
              <>
                <span className="text-muted-foreground">•</span>
                <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                  No KYC
                </Badge>
              </>
            )}
          </div>
        </DialogHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 my-6">
          <div className="stat-card rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">APR</div>
            <div className="text-xl font-bold text-primary">{platform.apr}</div>
          </div>
          <div className="stat-card rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">LTV</div>
            <div className="text-xl font-bold">{platform.ltv}</div>
          </div>
          <div className="stat-card rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Funding</div>
            <div className="text-sm font-bold">{platform.fundingTime}</div>
          </div>
          <div className="stat-card rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-1">Min Loan</div>
            <div className="text-sm font-bold">
              {platform.minLoan === 0 ? 'None' : `$${platform.minLoan.toLocaleString()}`}
            </div>
          </div>
        </div>

        {/* Payout Info */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Payout Methods</h4>
          <div className="flex flex-wrap gap-2">
            {platform.payoutMethods.map((method, idx) => (
              <Badge key={idx} variant="secondary">
                {method}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Withdrawal time: {platform.withdrawalTime}
          </p>
        </div>

        {/* Geography */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Geographic Availability</h4>
          <p className="text-sm text-muted-foreground">{platform.geoDisplay}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Features</h4>
          <div className="flex flex-wrap gap-2">
            {platform.features.map((feature, idx) => (
              <Badge key={idx} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              Pros
            </h4>
            <ul className="space-y-2">
              {platform.pros.map((pro, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <X className="h-4 w-4 text-muted-foreground" />
              Cons
            </h4>
            <ul className="space-y-2">
              {platform.cons.map((con, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2 text-muted-foreground">
                  <span className="mt-0.5">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="text-muted-foreground">Monthly Payments:</span>
            <span className="ml-2 font-semibold">{platform.monthlyPayments ? 'Required' : 'Not Required'}</span>
          </div>
          <div>
            <span className="text-muted-foreground">KYC:</span>
            <span className="ml-2 font-semibold">{platform.kyc ? 'Required' : 'Not Required'}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Max Loan:</span>
            <span className="ml-2 font-semibold">{platform.maxLoan}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Reputation:</span>
            <span className="ml-2 font-semibold text-primary">{platform.reputation}/10</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button asChild className="w-full h-12">
          <a href={platform.url} target="_blank" rel="noopener noreferrer">
            Visit {platform.name}
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
