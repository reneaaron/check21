# check21 - Bitcoin Comparison Platform

A sleek, professional, dark-themed comparison platform for Bitcoin-backed lending services. Compare rates, terms, and features across 9 leading platforms including CeFi and DeFi options.

## Features

- 🎨 **Professional Dark Design** - Minimalistic dark theme with Bitcoin orange (#f7931a) accents
- 🔍 **Smart Matching Algorithm** - Find the best platform based on your needs
- ⚡ **9 Platforms** - Compare Strike, Ledn, Unchained Capital, River, Nexo, Aave, Compound, MakerDAO, and Sovryn
- 📊 **Comprehensive Data** - APR, LTV, fees, custody models, KYC requirements, geographic availability
- 🎯 **Personalized Results** - Filter by loan amount, location, payout method, speed, and priorities
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Full type safety
- **Vite** - Lightning-fast dev server and build
- **Tailwind CSS v4** - Modern utility-first CSS
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Clean icon system

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (Button, Card, Input, etc.)
│   ├── Navigation.tsx  # Top navigation bar
│   ├── Hero.tsx        # Hero section with stats
│   ├── PlatformFinder.tsx  # Matching form (5 questions)
│   ├── Results.tsx     # Top 3 matched results
│   ├── PlatformGrid.tsx    # All platforms grid
│   └── PlatformModal.tsx   # Detailed platform view
├── data/
│   └── platforms.ts    # Platform data with TypeScript interfaces
├── lib/
│   ├── matching.ts     # Matching algorithm
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles and theme
```

## Platform Data

The comparison includes 9 platforms across CeFi and DeFi:

### CeFi (Centralized Finance)
- **Strike** - Lightning Network, instant, global
- **Ledn** - 40+ currencies, 100+ countries, 12.4% APR
- **Unchained Capital** - Multi-sig custody, US only, 9.5-13% APR
- **River Financial** - Bitcoin-focused, US only, 8.5% APR
- **Nexo** - 180+ countries (not US), instant, 13.9% APR

### DeFi (Decentralized Finance)
- **Aave** - No KYC, 1-8% APR, 70% LTV
- **Compound** - Battle-tested, 2-9% APR, 75% LTV
- **MakerDAO** - Oldest DeFi, 5.5% APR, DAI stablecoin
- **Sovryn** - Bitcoin sidechain, ultra-low 0.5-3% APR

## Matching Algorithm

The platform uses a two-phase matching system:

1. **Hard Filters** - Eliminates platforms that don't meet requirements:
   - Minimum loan amount
   - Geographic availability
   - Payout method (fiat vs stablecoin)
   - Funding speed

2. **Scoring** - Ranks remaining platforms based on:
   - User priority (rate/security/simplicity)
   - Platform features (LTV, monthly payments, KYC, etc.)
   - Base reputation score

Returns top 3 matches sorted by score.

## Design Philosophy

- **Sleek & Minimalistic** - Clean, uncluttered interface
- **Professional Dark Theme** - Easy on the eyes, modern aesthetic
- **Bitcoin Orange Only** - Single accent color (#f7931a) for focus
- **Minimal Animations** - Subtle 2px hover lifts, 0.2s transitions
- **Business-Focused** - Professional typography and spacing

## Color Palette

```css
Background: #0a0a0a
Cards: #141414
Borders: #1f1f1f
Primary (Bitcoin Orange): #f7931a
Muted Text: #888888
White: #ffffff
```

## Development

### Adding a New Platform

1. Add platform data to `src/data/platforms.ts`
2. Follow the `Platform` interface structure
3. Include all required fields (APR, LTV, features, pros/cons, etc.)

### Customizing the Theme

Edit `src/index.css` and modify the CSS variables in the `.dark` class.

### Modifying the Matching Algorithm

Edit `src/lib/matching.ts` to adjust scoring logic or add new filter criteria.

## Building for Production

```bash
pnpm build
```

The optimized build will be in the `dist/` directory.

## License

MIT

## Credits

Built with modern web technologies and inspired by professional comparison platforms.

---

**check21** - Compare Bitcoin Lending Platforms
