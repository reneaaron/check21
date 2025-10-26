# Quick Start Guide

## 🚀 Get Started in 30 Seconds

```bash
# 1. Navigate to project
cd /home/reneaaron/Projects/tmp/check21

# 2. Install dependencies (if not already done)
pnpm install

# 3. Run dev server
pnpm dev
```

That's it! Open http://localhost:5173 in your browser.

## What You'll See

1. **Hero Section** - Bitcoin orange branding with "check21"
2. **Platform Finder** - 5-question form to find your match
3. **Results** - Top 3 personalized platform recommendations
4. **Platform Grid** - Browse all 9 platforms
5. **Modal Details** - Click any platform for comprehensive details

## Try It Out

### Example User Flow:

1. Enter loan amount: `$10,000`
2. Select location: `United States`
3. Choose payout: `Direct to Bank` (fiat)
4. Select speed: `Few Days`
5. Pick priority: `Best Rate`
6. Click "Show My Matches"

**Expected Results:**
- River Financial (8.5% APR, US-focused)
- Unchained Capital (9.5-13% APR, multi-sig security)
- Ledn (12.4% APR, global fiat support)

### Try Different Scenarios:

**DeFi Seeker:**
- Payout: `Stablecoins`
- Priority: `Best Rate`
- Result: Sovryn, Aave, Compound (0.5-8% APR)

**Security Focus:**
- Priority: `Security`
- Result: Unchained (multi-sig), MakerDAO, Aave (non-custodial)

**International User:**
- Location: `Europe`
- Result: Ledn, Nexo, DeFi platforms

## Development Tips

### Hot Module Replacement
Changes to `.tsx` files reflect instantly in the browser (< 200ms)

### Component Structure
- All components use shadcn/ui primitives
- Dark theme is hardcoded in `index.html` with `class="dark"`
- Bitcoin orange (`#f7931a`) is the only accent color

### Making Changes

**Add a platform:**
```typescript
// src/data/platforms.ts
export const platforms: Platform[] = [
  // Add your platform here
  {
    id: 'newplatform',
    name: 'New Platform',
    type: 'cefi',
    apr: '10%',
    // ... full interface
  }
];
```

**Adjust matching logic:**
```typescript
// src/lib/matching.ts
export function matchPlatforms(formData: FormData, allPlatforms: Platform[]) {
  // Customize filtering and scoring
}
```

**Change theme colors:**
```css
/* src/index.css */
.dark {
  --primary: oklch(0.73 0.148 52); /* Bitcoin orange */
  --background: oklch(0.04 0 0);   /* #0a0a0a */
  /* ... other colors */
}
```

## Build for Production

```bash
pnpm build
pnpm preview  # Preview production build locally
```

Output in `dist/` directory ready for deployment.

## Need Help?

- Check `README.md` for full documentation
- Review component files in `src/components/`
- Platform data in `src/data/platforms.ts`
- Matching algorithm in `src/lib/matching.ts`

---

**Happy comparing! 🚀**
