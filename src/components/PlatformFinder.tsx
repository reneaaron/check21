import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { DollarSign, MapPin, Building2, Coins, Repeat, Zap, Rocket, Calendar, TrendingDown, Shield, Sparkles } from 'lucide-react';
import type { FormData } from '@/lib/matching';
import type { Platform } from '@/data/platforms';

interface PlatformFinderProps {
  onMatch: (matches: Platform[], formData: FormData) => void;
}

export function PlatformFinder({ onMatch }: PlatformFinderProps) {
  const [loanAmount, setLoanAmount] = useState('10000');
  const [location, setLocation] = useState('us');
  const [payout, setPayout] = useState<'fiat' | 'stablecoin' | 'either'>('fiat');
  const [speed, setSpeed] = useState<'instant' | 'sameday' | 'fewdays' | 'noturgent'>('fewdays');
  const [priority, setPriority] = useState<'rate' | 'security' | 'simplicity'>('rate');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData: FormData = {
      loanAmount: parseInt(loanAmount) || 10000,
      location,
      payout,
      speed,
      priority,
    };
    onMatch([], formData);
  };

  return (
    <section id="compare" className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Find Your Match</h2>
          <p className="text-muted-foreground">
            Answer a few questions to find the best platform for your needs
          </p>
        </div>

        <div className="rounded-lg border bg-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Loan Amount */}
            <div className="space-y-3">
              <Label htmlFor="loanAmount" className="text-base font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                Loan Amount
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="pl-8 h-11"
                  placeholder="10000"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            {/* 2. Location */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-base font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Location
              </Label>
              <Select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11"
              >
                <option value="us">United States</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="latam">Latin America</option>
                <option value="other">Other</option>
              </Select>
            </div>

            {/* 3. Payout Method */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Payout Method</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'fiat' as const, icon: Building2, label: 'Bank Transfer', desc: 'Fiat currency' },
                  { value: 'stablecoin' as const, icon: Coins, label: 'Stablecoins', desc: 'USDC, DAI, etc.' },
                  { value: 'either' as const, icon: Repeat, label: 'Either', desc: 'No preference' },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`radio-card rounded-lg p-4 text-center ${
                        payout === option.value ? 'selected' : ''
                      }`}
                      onClick={() => setPayout(option.value)}
                    >
                      <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Speed */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Funding Speed</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'instant' as const, icon: Zap, label: 'Instant', desc: 'Within minutes' },
                  { value: 'sameday' as const, icon: Rocket, label: 'Same Day', desc: 'Within hours' },
                  { value: 'fewdays' as const, icon: Calendar, label: 'Few Days', desc: '1-3 days' },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`radio-card rounded-lg p-4 text-center ${
                        speed === option.value ? 'selected' : ''
                      }`}
                      onClick={() => setSpeed(option.value)}
                    >
                      <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Priority */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Priority</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'rate' as const, icon: TrendingDown, label: 'Best Rate', desc: 'Lowest APR' },
                  { value: 'security' as const, icon: Shield, label: 'Security', desc: 'Self-custody' },
                  { value: 'simplicity' as const, icon: Sparkles, label: 'Simplicity', desc: 'Easy process' },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`radio-card rounded-lg p-4 text-center ${
                        priority === option.value ? 'selected' : ''
                      }`}
                      onClick={() => setPriority(option.value)}
                    >
                      <Icon className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full h-11 mt-8">
              Show Matches
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
