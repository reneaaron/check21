import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
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
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl font-bold mb-8">Find Your Match</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Loan Amount */}
            <div className="space-y-2">
              <Label htmlFor="loanAmount" className="text-base font-semibold">
                1. How much do you need to borrow?
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="pl-8"
                  placeholder="10000"
                />
              </div>
              <p className="text-sm text-muted-foreground">Enter amount in USD</p>
            </div>

            {/* 2. Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-base font-semibold">
                2. Where are you located?
              </Label>
              <Select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
              <Label className="text-base font-semibold">3. How do you want to receive funds?</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'fiat' as const, emoji: '🏦', label: 'Direct to Bank', desc: 'Fiat currency' },
                  { value: 'stablecoin' as const, emoji: '💵', label: 'Stablecoins', desc: 'USDC, DAI, etc.' },
                  { value: 'either' as const, emoji: '🔄', label: 'Either', desc: 'No preference' },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`radio-card rounded-lg p-4 text-center ${payout === option.value ? 'selected' : ''}`}
                    onClick={() => setPayout(option.value)}
                  >
                    <div className="text-3xl mb-2">{option.emoji}</div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Speed */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">4. How quickly do you need funds?</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'instant' as const, emoji: '⚡', label: 'Instant' },
                  { value: 'sameday' as const, emoji: '🚀', label: 'Same Day' },
                  { value: 'fewdays' as const, emoji: '📅', label: 'Few Days' },
                  { value: 'noturgent' as const, emoji: '🕐', label: 'Not Urgent' },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`radio-card rounded-lg p-4 text-center ${speed === option.value ? 'selected' : ''}`}
                    onClick={() => setSpeed(option.value)}
                  >
                    <div className="text-2xl mb-1">{option.emoji}</div>
                    <div className="text-sm font-medium">{option.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Priority */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">5. What matters most to you?</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'rate' as const, emoji: '💰', label: 'Best Rate', desc: 'Lowest APR' },
                  { value: 'security' as const, emoji: '🔒', label: 'Security', desc: 'Control keys' },
                  { value: 'simplicity' as const, emoji: '✨', label: 'Simplicity', desc: 'Easy to use' },
                ].map((option) => (
                  <div
                    key={option.value}
                    className={`radio-card rounded-lg p-4 text-center ${priority === option.value ? 'selected' : ''}`}
                    onClick={() => setPriority(option.value)}
                  >
                    <div className="text-3xl mb-2">{option.emoji}</div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{option.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full h-12 text-base font-semibold">
              Show My Matches
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
