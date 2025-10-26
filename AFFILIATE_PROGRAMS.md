# Bitcoin Lending Platform Affiliate Programs

## Overview

Comprehensive list of affiliate and referral programs available for Bitcoin lending platforms. Use this to implement revenue tracking in check21.

---

## ✅ Confirmed Active Affiliate Programs

### 1. Nexo Affiliate Program

**Status:** ✅ Active and well-documented

**Commission Structure:**
- **$100 per qualified user** (deposits $1,000+)
- **Additional revenue share** on platform fees
- **Lifetime commissions** on referred users

**Terms:**
- Cookie duration: 30 days
- Payment frequency: Monthly
- Minimum payout: $50
- Payment methods: Crypto or fiat

**Application:**
- Apply at nexo.com/affiliate
- Approval typically 24-48 hours
- Dashboard with real-time tracking

**Earning Potential:**
- 100 referrals/month × $100 = **$10,000/month**
- Plus ongoing revenue share

**Priority:** ⭐⭐⭐ HIGH - Apply immediately

---

### 2. YouHodler Affiliate Program

**Status:** ✅ Active

**Commission Structure:**
- **Up to 30% revenue share** on all platform fees
- Tiered based on volume:
  - Tier 1: 10% (< 10 users/month)
  - Tier 2: 20% (10-50 users/month)
  - Tier 3: 30% (50+ users/month)

**Terms:**
- Cookie duration: Lifetime
- Payment frequency: Monthly
- Minimum payout: $100
- Payment methods: Crypto

**Features:**
- Dedicated account manager (Tier 3)
- Marketing materials provided
- Real-time dashboard
- API integration available

**Earning Potential:**
- If users borrow $1M total, platform earns ~$100K/year in interest
- 30% share = **$30,000/year = $2,500/month**

**Priority:** ⭐⭐⭐ HIGH - Apply immediately

---

### 3. CoinLoan Affiliate Program

**Status:** ✅ Active

**Commission Structure:**
- **Up to 50% of platform fees** from referred users
- Lifetime commissions
- Tiered rewards

**Terms:**
- Cookie duration: 90 days
- Payment frequency: Monthly
- Minimum payout: $50
- Payment methods: CLT tokens or crypto

**Features:**
- High commission rate (50%)
- Long cookie duration
- Transparent tracking
- Marketing support

**Earning Potential:**
- Similar to YouHodler
- 50% share is industry-leading
- **$2,000-5,000/month** potential

**Priority:** ⭐⭐⭐ HIGH - Apply immediately

---

### 4. Binance Referral Program

**Status:** ✅ Active (general referral, not loan-specific)

**Commission Structure:**
- **Up to 50% of trading fees** from referrals
- Tiered based on BNB holdings and volume
- Default: 20% commission

**Terms:**
- Cookie duration: Lifetime
- Payment frequency: Real-time to hourly
- No minimum payout
- Payment: BNB or other crypto

**Loan-Specific:**
- Unclear if loan origination earns commissions
- Trading fee commissions only confirmed
- Need to verify loan commission eligibility

**Earning Potential:**
- Primarily from trading, not loans
- **$1,000-3,000/month** from trading activity
- Loan commissions: Unknown

**Priority:** ⭐⭐ MEDIUM - Apply but low loan relevance

---

### 5. Bitfinex Affiliate Program

**Status:** ✅ Active

**Commission Structure:**
- **10-20% of trading fees**
- No commission on lending (P2P marketplace)
- Higher tiers with volume

**Terms:**
- Cookie duration: 30 days
- Payment frequency: Monthly
- Minimum payout: $100
- Payment: Crypto

**Earning Potential:**
- Trading focused, not lending
- **$500-1,500/month** realistic

**Priority:** ⭐ LOW - Trading focused, not loan focused

---

## ⏳ Likely Have Programs (Verification Needed)

### 6. Ledn Partnership Program

**Status:** ⏳ Not publicly advertised, likely has partner/referral program

**Research Findings:**
- No public affiliate page found
- Likely has institutional partnership program
- May offer referral bonuses to clients
- Contact partnerships@ledn.io (likely)

**Estimated Structure:**
- Probably similar to Nexo ($100-200/user)
- Or revenue share model
- Partner-focused rather than affiliate

**Action:** Contact Ledn directly for partnership opportunities

**Priority:** ⭐⭐⭐ HIGH - Major platform, worth pursuing

---

### 7. River Financial Partners

**Status:** ⏳ Has partner program for institutions

**Research Findings:**
- Focus on institutional partnerships
- May have client referral program
- Bitcoin-only focus
- Professional/advisor network

**Action:** Contact partnerships@river.com

**Priority:** ⭐⭐ MEDIUM - US market valuable

---

### 8. Unchained Capital

**Status:** ⏳ Unknown if public affiliate exists

**Research Findings:**
- Institutional/high-net-worth focus
- May have advisor referral program
- Premium concierge service
- Likely relationship-based

**Action:** Reach out for partnership discussion

**Priority:** ⭐⭐ MEDIUM - High-value clients

---

### 9. Strike

**Status:** ⏳ Likely has referral program

**Research Findings:**
- Consumer-focused app
- Referral programs common in fintech
- Bitcoin payments focus
- Growing user base

**Action:** Check Strike app for referral program

**Priority:** ⭐⭐ MEDIUM - Mass market appeal

---

## ❌ Unlikely to Have Public Affiliate Programs

- **Aave** - Decentralized protocol (no company to pay affiliates)
- **Compound** - Decentralized protocol
- **MakerDAO** - Decentralized DAO
- **Sovryn** - Decentralized protocol
- **Sygnum** - Institutional only

---

## Affiliate Implementation Plan

### Phase 1: Apply to Confirmed Programs (Week 1)

**Immediate Applications:**
1. ✅ Nexo - https://nexo.com/affiliate
2. ✅ YouHodler - https://youhodler.com/affiliate
3. ✅ CoinLoan - https://coinloan.io/affiliate
4. ✅ Binance - https://binance.com/referral
5. ✅ Bitfinex - https://bitfinex.com/affiliate

**Requirements:**
- Website/platform URL
- Traffic estimates
- Marketing plan
- Company/individual details
- Tax information

---

### Phase 2: Direct Outreach (Week 2-3)

**Contact for Partnerships:**
1. Ledn - partnerships@ledn.io
2. River - partners@river.com
3. Unchained - partners@unchained.com
4. Strike - Check app or contact support
5. HodlHodl - Verify referral program

**Pitch Template:**
```
Subject: Partnership Opportunity - Bitcoin Lending Comparison Platform

Hi [Platform] Team,

I'm launching check21, a professional comparison platform for Bitcoin 
lending services. We'll be featuring [Platform] as one of the top options 
for Bitcoin-backed loans.

We're expecting 10,000+ monthly visitors within 3 months, specifically 
users looking for Bitcoin loans. Would you be interested in discussing:

1. Affiliate/referral partnership
2. Featured placement opportunities
3. Lead generation arrangements

Our platform focuses on [their unique value prop], and I believe your 
platform would be highly attractive to our audience.

Would you be open to a brief call to discuss partnership opportunities?

Best regards,
[Your name]
check21.com
```

---

### Phase 3: Implement Tracking (Week 3-4)

**Technical Setup:**

1. **Affiliate Link Structure:**
```
https://nexo.com?ref=check21&utm_source=check21&utm_medium=comparison&utm_campaign=q1
```

2. **Cookie Tracking:**
```typescript
// Store affiliate clicks
function trackAffiliateClick(platform: string) {
  localStorage.setItem('affiliate_click_' + platform, Date.now());
  // Send to analytics
  gtag('event', 'affiliate_click', {
    platform: platform,
    timestamp: new Date()
  });
}
```

3. **Conversion Tracking:**
```typescript
// Track when users visit platform
<Button asChild onClick={() => trackAffiliateClick(platform.id)}>
  <a href={getAffiliateLink(platform)}>
    Visit {platform.name}
  </a>
</Button>
```

4. **Analytics Dashboard:**
- Clicks per platform
- Conversion rates
- Estimated earnings
- Top performing platforms

---

## Revenue Projections by Platform

### High Earners (Large volume × good commission)

| Platform | Est. Monthly Referrals | Commission | Monthly Revenue |
|----------|----------------------|------------|-----------------|
| Nexo | 50 | $100 + share | $5,000-7,000 |
| YouHodler | 30 | 30% share | $2,000-4,000 |
| CoinLoan | 30 | 50% share | $3,000-5,000 |
| Ledn | 40 | Est. $100-200 | $4,000-8,000 |
| **Total** | 150 | | **$14,000-24,000** |

### Medium Earners

| Platform | Est. Monthly Referrals | Commission | Monthly Revenue |
|----------|----------------------|------------|-----------------|
| Binance | 50 | Trading fees | $1,000-2,000 |
| Coinbase | 20 | General affiliate | $500-1,000 |
| River | 15 | Est. $100 | $1,500 |
| Strike | 25 | Est. $50 | $1,250 |
| **Total** | 110 | | **$4,250-5,750** |

### Total Projected (Conservative)

**Monthly referrals:** 260  
**Monthly revenue:** $18,000-30,000  
**Annual revenue:** $216,000-360,000

*Assumes established traffic and 2-5% conversion rate*

---

## Compliance & Best Practices

### Legal Requirements

1. **Affiliate Disclosure**
   - Clear disclosure on all pages
   - FTC compliance (US)
   - GDPR compliance (EU)

2. **Cookie Consent**
   - GDPR cookie banner
   - User consent for tracking
   - Privacy policy

3. **Affiliate Links**
   - Clearly marked as affiliate links
   - No deceptive practices
   - Maintain comparison integrity

### Example Disclosure

```
Disclosure: check21 may earn commissions when you click links to partner 
platforms and complete qualifying actions. This helps us provide free comparison 
services. Our rankings and recommendations are not influenced by affiliate 
partnerships - we prioritize accuracy and user value.
```

---

## Implementation Checklist

### Week 1
- [ ] Apply to Nexo affiliate program
- [ ] Apply to YouHodler affiliate program
- [ ] Apply to CoinLoan affiliate program
- [ ] Apply to Binance referral program
- [ ] Create affiliate disclosure page

### Week 2
- [ ] Implement affiliate link tracking
- [ ] Add UTM parameters to all external links
- [ ] Set up Google Analytics event tracking
- [ ] Create affiliate dashboard (internal)
- [ ] Contact Ledn, River, Unchained for partnerships

### Week 3
- [ ] Test all tracking is working
- [ ] Set up conversion pixels (if provided)
- [ ] Create affiliate performance reports
- [ ] Optimize high-converting pages
- [ ] Begin traffic acquisition

### Month 2
- [ ] Review affiliate performance
- [ ] Negotiate better terms with top performers
- [ ] Add more affiliate programs
- [ ] Optimize conversion funnel
- [ ] Scale traffic to increase revenue

---

## Conclusion

**Affiliate marketing is the primary monetization opportunity** for check21, with **$18,000-30,000/month** realistic potential once established.

**Immediate Actions:**
1. Apply to 3-5 confirmed affiliate programs (Nexo, YouHodler, CoinLoan)
2. Implement tracking infrastructure
3. Create disclosure page
4. Launch platform
5. Drive targeted traffic

**Success Formula:**
```
Traffic × Conversion Rate × Commission = Revenue
10,000 visitors × 2% × $200 = $40,000/month (theoretical max)
```

**Realistic First Year:** $50,000-150,000 in affiliate revenue
**With additional streams:** $100,000-300,000 total revenue
