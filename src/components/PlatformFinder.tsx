import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { DollarSign, MapPin, Building2, Coins, Repeat, Zap, Rocket, Calendar, TrendingDown, Shield, Sparkles, Loader2, UserX } from 'lucide-react';
import type { FormData } from '@/lib/matching';
import type { Platform } from '@/data/platforms';

interface PlatformFinderProps {
  onMatch: (matches: Platform[], formData: FormData) => void;
  isLoading?: boolean;
}

export function PlatformFinder({ onMatch, isLoading = false }: PlatformFinderProps) {
  const [loanAmount, setLoanAmount] = useState('10000');
  const [location, setLocation] = useState('us');
  const [payout, setPayout] = useState<'fiat' | 'stablecoin' | 'either'>('fiat');
  const [speed, setSpeed] = useState<'instant' | 'sameday' | 'fewdays' | 'noturgent'>('fewdays');
  const [priorities, setPriorities] = useState({
    rate: true,
    security: false,
    simplicity: false,
    noKyc: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData: FormData = {
      loanAmount: parseInt(loanAmount) || 10000,
      location,
      payout,
      speed,
      priorities
    };
    onMatch([], formData);
  };

  const togglePriority = (key: 'rate' | 'security' | 'simplicity' | 'noKyc') => {
    setPriorities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
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
                <DollarSign className="h-4 w-4 text-green-600" />
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
                <MapPin className="h-4 w-4 text-blue-600" />
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
              <Label className="text-base font-medium flex items-center gap-2">
                <Building2 className="h-4 w-4 text-purple-600" />
                Payout Method
              </Label>
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
                      <Icon className={`h-5 w-5 mx-auto mb-2 ${
                        payout === option.value
                          ? 'text-primary'
                          : option.value === 'fiat'
                            ? 'text-blue-500'
                            : option.value === 'stablecoin'
                              ? 'text-green-500'
                              : 'text-orange-500'
                      }`} />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Speed */}
            <div className="space-y-3">
              <Label className="text-base font-medium flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                Funding Speed
              </Label>
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
                      <Icon className={`h-5 w-5 mx-auto mb-2 ${
                        speed === option.value
                          ? 'text-primary'
                          : option.value === 'instant'
                            ? 'text-yellow-500'
                            : option.value === 'sameday'
                              ? 'text-orange-500'
                              : 'text-blue-500'
                      }`} />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Priorities */}
            <div className="space-y-3">
              <Label className="text-base font-medium flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-600" />
                Priorities (Select Multiple)
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'rate' as const, icon: TrendingDown, label: 'Best Rate', desc: 'Lowest APR' },
                  { key: 'security' as const, icon: Shield, label: 'Key Control', desc: 'Non-custodial options' },
                  { key: 'simplicity' as const, icon: Sparkles, label: 'Simplicity', desc: 'Easy process' },
                  { key: 'noKyc' as const, icon: UserX, label: 'No KYC', desc: 'No identity verification' },
                ].map((option) => {
                  const Icon = option.icon;
                  const isSelected = priorities[option.key];
                  return (
                    <button
                      key={option.key}
                      type="button"
                      className={`radio-card rounded-lg p-4 text-center ${
                        isSelected ? 'selected' : ''
                      }`}
                      onClick={() => togglePriority(option.key)}
                    >
                      <Icon className={`h-5 w-5 mx-auto mb-2 ${
                        isSelected
                          ? 'text-primary'
                          : option.key === 'rate'
                            ? 'text-red-500'
                            : option.key === 'security'
                              ? 'text-green-500'
                              : option.key === 'noKyc'
                                ? 'text-orange-500'
                                : 'text-purple-500'
                      }`} />
                      <div className="font-medium text-sm">{option.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-12 mt-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Finding Matches...
                </>
              ) : (
                "Compare Loan Options"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
