import type { Platform } from '@/data/platforms';

export interface FormData {
  loanAmount: number;
  location: string;
  payout: 'fiat' | 'stablecoin' | 'either';
  speed: 'instant' | 'sameday' | 'fewdays' | 'noturgent';
  priority: 'rate' | 'security' | 'simplicity';
}

export function matchPlatforms(formData: FormData, allPlatforms: Platform[]): Platform[] {
  const { loanAmount, location, payout, speed, priority } = formData;

  // Hard filters - eliminate platforms that don't meet requirements
  let matches = allPlatforms.filter(platform => {
    // Minimum loan amount check
    if (loanAmount < platform.minLoan) return false;
    
    // Geographic availability check
    if (!platform.geography.includes(location)) return false;
    
    // Payout method check
    if (payout === 'fiat' && platform.payout !== 'fiat') return false;
    if (payout === 'stablecoin' && platform.payout !== 'stablecoin') return false;
    // 'either' accepts both fiat and stablecoin
    
    // Speed/funding time check
    if (speed === 'instant' && platform.fundingDays > 0) return false;
    if (speed === 'sameday' && platform.fundingDays > 1) return false;
    if (speed === 'fewdays' && platform.fundingDays > 7) return false;
    // 'noturgent' accepts any speed
    
    return true;
  });

  // Scoring - rank platforms based on user priorities
  matches = matches.map(platform => {
    let score = platform.reputation; // Base score from 7.0-9.5

    // Priority-based bonuses
    if (priority === 'rate') {
      // Reward low APR
      if (platform.aprMin < 5) score += 3;
      else if (platform.aprMin < 8) score += 2;
      else if (platform.aprMin < 10) score += 1;
    }
    
    if (priority === 'security') {
      // Reward non-custodial or multi-sig
      if (platform.custody === 'Non-custodial') score += 3;
      else if (platform.custody.includes('Multi-sig')) score += 2;
    }
    
    if (priority === 'simplicity') {
      // Reward CeFi platforms (easier UX)
      if (platform.type === 'cefi') score += 2;
      // Reward no monthly payments
      if (!platform.monthlyPayments) score += 1;
    }

    // General feature bonuses
    if (!platform.monthlyPayments) score += 0.5;
    if (parseInt(platform.ltv) >= 70) score += 1;
    if (!platform.kyc) score += 0.5;
    if (platform.fundingDays === 0) score += 0.5;

    return { ...platform, score };
  });

  // Sort by score (highest first) and return top 5
  matches.sort((a, b) => (b.score || 0) - (a.score || 0));
  return matches.slice(0, 5);
}
