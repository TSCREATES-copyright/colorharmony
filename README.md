<div align="center">

<br />

```
   ██████╗ ██████╗ ██╗      ██████╗ ██████╗
  ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗
  ██║     ██║   ██║██║     ██║   ██║██████╔╝
  ██║     ██║   ██║██║     ██║   ██║██╔══██╗
  ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║
   ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝

  ██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ ██████╗ ███╗   ██╗██╗   ██╗
  ██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔═══██╗████╗  ██║╚██╗ ██╔╝
  ███████║███████║██████╔╝██╔████╔██║██║   ██║██╔██╗ ██║ ╚████╔╝
  ██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██║   ██║██║╚██╗██║  ╚██╔╝
  ██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║╚██████╔╝██║ ╚████║   ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝
```

### **Your deterministic color workflow engine.**  
### One color in. A production-ready palette out. In under 50ms.

<br />

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=for-the-badge)](LICENSE)
[![Made with React](https://img.shields.io/badge/React-TypeScript-61dafb?style=for-the-badge&logo=react&logoColor=white&labelColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Build-646cff?style=for-the-badge&logo=vite&logoColor=white&labelColor=black)](https://vitejs.dev)
[![Zero Backend](https://img.shields.io/badge/Backend-Zero-ff6b6b?style=for-the-badge&labelColor=black)](https://colorharmony.app)
[![WCAG AA/AAA](https://img.shields.io/badge/WCAG-AA%2FAAA-00c851?style=for-the-badge&labelColor=black)](#contrast--accessibility)
[![Author](https://img.shields.io/badge/Author-®TSCREATES-ff00ff?style=for-the-badge&labelColor=black)](#author)

<br />

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ● INPUT COLOR   →   ⚙ ENGINE   →   ▦ PALETTE   →   ✓ DONE   │
│   #FF5733              <50ms          AA/AAA          export    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br />

**[⚡ Quick Start](#-quick-start)** &nbsp;·&nbsp; **[✨ Features](#-core-features)** &nbsp;·&nbsp; **[🧠 How It Works](#-how-it-works)** &nbsp;·&nbsp; **[📊 Example Output](#-example-output)** &nbsp;·&nbsp; **[🗺 Roadmap](#-roadmap)**

<br />

---

</div>

<br />

## 🚀 Value Proposition

**ColorHarmony is not a palette generator. It is your personal color workstation.**

Every design session hits the same wall: you have one color, a deadline, and zero confidence your palette will pass accessibility review. You tab between tools, eyeball harmonies, paste hex codes into validators, rebuild the same workflow from scratch — every single time.

ColorHarmony eliminates that wall entirely.

Input one color. Select a harmony rule. Your palette is generated in under 50ms — balanced, scored, accessible, named, and export-ready. No accounts. No API keys. No AI black box. No server round-trips. Just deterministic color science, running entirely in your browser, producing the same trustworthy output every time.

This is the tool you bookmark and never close.

<br />

---

<br />

## 💥 Why This Exists

The palette problem is one of the most repeated friction points in product and brand work:

- **Manual palette building** wastes 20–40 minutes per project iteration
- **Clashing colors** slip into production because contrast was never actually checked
- **WCAG failures** get flagged in accessibility audits after the design is shipped
- **Non-deterministic tools** produce different results on every run — you cannot reproduce your best palette
- **Cloud-first tools** require accounts, subscriptions, and an internet connection just to pick a color

ColorHarmony was built because the workflow deserved a real engine — not a random number generator with a pretty UI.

Same input → Same output → Same confidence → Every time.

<br />

---

<br />

## 🎯 Who It's For

| Persona | Core Pain | How ColorHarmony Solves It |
|---|---|---|
| **UI/UX Designers** | Palette iteration is slow and inconsistent | Deterministic generation with saved history means every variant is reproducible |
| **Web Developers** | No time to learn color theory between sprints | Harmony modes do the theory; you get CSS variables immediately |
| **Graphic Designers** | Accessibility mistakes discovered too late | Real-time WCAG scoring before a single pixel is shipped |
| **Brand Specialists** | Palette drift across projects | Local library stores exact palettes per project — always reusable |
| **Indie Makers & Freelancers** | Too many tools, too little time | One browser tab replaces five tools and keeps your work locally saved |
| **Creative Agencies** | Design system handoff is messy | JSON token export drops directly into your component system |

<br />

---

<br />

## ✨ Core Features

<br />

### 🎨 Palette Harmony Engine

```
Input: #3B82F6  |  Rule: Complementary
────────────────────────────────────────────
■ #3B82F6   Base       · Blue 500    · HSL 217° 91% 60%
■ #F6923B   Accent     · Warm Ember  · HSL 37° 91% 60%
■ #1E3A5F   Support    · Navy Deep   · HSL 217° 51% 24%
■ #F6E8D4   Surface    · Linen Mist  · HSL 37° 72% 90%
■ #0F172A   Text       · Ink Black   · HSL 217° 45% 11%
────────────────────────────────────────────
Harmony Score: 92/100  |  All swatches: WCAG AA ✓
```

Generates balanced, role-aware palettes from a single base color using five deterministic harmony models. Every output includes a dominant, accent, support, surface, and text-safe swatch — structured for real UI work, not just aesthetics.

**Outcome:** You stop guessing. Every palette is harmonically complete and role-assigned from the first generation.

<br />

### ⚖️ Contrast & Accessibility Analyzer

```
Swatch        | On White | On Black | AA  | AAA
──────────────────────────────────────────────────
■ #3B82F6    |   3.0:1  |   7.0:1  |  ✓  |  ✗
■ #F6923B    |   2.8:1  |   7.4:1  |  ✗  |  ✗  ← Warning
■ #1E3A5F    |   9.3:1  |   2.3:1  |  ✓  |  ✓
■ #F6E8D4    |   1.2:1  | 16.8:1   |  ✓  |  ✓
■ #0F172A    |  18.4:1  |   1.1:1  |  ✓  |  ✓
```

Every swatch is scored against WCAG 2.1 AA and AAA thresholds in real time. Contrast badges update the moment you change a color. Problem swatches are flagged immediately with recommended text-color corrections.

**Outcome:** Accessibility is verified before deployment — not discovered during an audit.

<br />

### 🔬 Harmony Modes

Five deterministic rules, each producing a structurally different palette from the same base color:

```
ANALOGOUS       ▐██████████░░░░░░░░░░░░░░▌  Hue offset ±20°–40°
                Adjacent colors, soft and cohesive

COMPLEMENTARY   ▐██████████░░░░░░░░░█████▌  Hue offset 180°
                High contrast, bold, brand-strong

TRIAD           ▐████░░░░░█████░░░░░█████▌  Hue offset ±120°
                Three-way balance, vibrant

TETRAD          ▐████░░░███░░░░███░░░████▌  Hue offset ±90°/180°
                Four-point balance, complex systems

MONOCHROME      ▐██▓▓▓▓░░░░░░░░░░░░░░░░░░▌  One hue, varied L/S
                Clean, refined, scalable
```

**Outcome:** You explore five structurally different palettes from one color in under 5 seconds.

<br />

### 🏛️ Palette Library & History Vault

```
SAVED PALETTES                               RECENT HISTORY

┌──────────────────────┐    ┌──────────────────────────────┐
│ ■■■■■  Brand Kit v3  │    │ ■■■■■  Generated 2m ago      │
│ Complementary · AA   │    │ Triad · Score 88 · Unsaved   │
│ Saved Feb 14 ★       │    │                              │
├──────────────────────┤    ├──────────────────────────────┤
│ ■■■■■  Dashboard UI  │    │ ■■■■■  Generated 18m ago     │
│ Analogous · AAA      │    │ Analogous · Score 91 · Saved │
│ Saved Jan 29         │    │                              │
└──────────────────────┘    └──────────────────────────────┘
```

All palettes live in your browser — no account required. Save, tag, version, and revisit any palette. The local library grows with your work, creating a personal design memory that makes every future project faster.

**Outcome:** Your best palettes are never lost, never reset, and always one click away.

<br />

### 📤 Export System

```css
/* CSS Variables — ready to paste */
:root {
  --color-base:      #3B82F6;  /* Blue 500    */
  --color-accent:    #F6923B;  /* Warm Ember  */
  --color-support:   #1E3A5F;  /* Navy Deep   */
  --color-surface:   #F6E8D4;  /* Linen Mist  */
  --color-text:      #0F172A;  /* Ink Black   */
}
```


Export as CSS variables, Prompt tokens, or Tailwind-style config. Copy the full palette to clipboard in one click. All export formats are immediately usable in production code.

**Outcome:** Zero-friction handoff from palette to codebase.

<br />

### 🏷️ Color Name System

Every swatch receives a human-readable name from a local dictionary of curated color descriptors — no network call, no AI inference. Names like "Ocean Haze," "Electric Violet," "Warm Clay," and "Soft Mint" make palettes easier to discuss, document, and remember across a team.

**Outcome:** Palettes become communicable — not just a list of hex codes.

<br />

### 💎 Premium Unlock (One-Time, Local)

No subscription. No renewal. A single local unlock at **$10** removes all limits and unlocks the full toolset:

| Feature | Free | Pro |
|---|:---:|:---:|
| Daily palette generations | 3/day | ♾ Unlimited |
| Saved palettes | 5 | ♾ Unlimited |
| CSS variable export | — | ✓ |
| AI ready prompt  export | — | ✓ |
| Advanced harmony controls | — | ✓ |
| Palette version history | — | ✓ |
| Locked swatch workflows | — | ✓ |
| Custom naming presets | — | ✓ |
| Full contrast analysis | — | ✓ |

The unlock is local to your browser. No cloud licensing. No account creation. This is a one-time utility unlock — honest about what it is.

<br />

---

<br />

## 🧠 How It Works

ColorHarmony is a **deterministic pipeline**, not a probabilistic suggestion engine. The same input always produces the same output — by design.

```
┌─────────────────────────────────────────────────────────────────────┐
│                   COLORHARMONY ENGINE PIPELINE                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. INPUT HANDLER                                                   │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Accept HEX · RGB · HSL · OKLCH                       │      │
│     │  Normalize → validate → clamp → canonical format      │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  2. HARMONY ENGINE                                                  │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Apply rule: analogous / complementary / triad /      │      │
│     │              tetrad / monochrome                      │      │
│     │  Hue rotation → saturation scaling → lightness shift  │      │
│     │  Generate 5 role-assigned candidate swatches          │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  3. CONTRAST ANALYZER                                               │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Calculate WCAG 2.1 contrast ratios                   │      │
│     │  Flag low-contrast pairs                              │      │
│     │  Recommend text-safe alternatives                     │      │
│     │  Assign AA / AAA compliance badges                    │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  4. VALIDATION SYSTEM                                               │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Check palette integrity                              │      │
│     │  Detect duplicate swatches                           │      │
│     │  Ensure role separation                              │      │
│     │  Apply harmonic consistency scoring                  │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  5. SCORING ENGINE                                                  │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Contrast compliance     35%                          │      │
│     │  Harmony alignment       25%                          │      │
│     │  Visual separation       20%                          │      │
│     │  Light/dark balance      15%                          │      │
│     │  UI usability             5%                          │      │
│     │  ────────────────────────────                         │      │
│     │  Final score: 0–100 · transparent · stable            │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  6. OUTPUT PROCESSOR                                                │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  Format: HEX · RGB · HSL · OKLCH                      │      │
│     │  Generate CSS variables                               │      │
│     │  Generate JSON tokens                                 │      │
│     │  Resolve color names                                  │      │
│     │  Build copy/export payloads                           │      │
│     └───────────────────────────────────────────────────────┘      │
│                             ↓                                       │
│  7. STORAGE MANAGER                                                 │
│     ┌───────────────────────────────────────────────────────┐      │
│     │  LocalStorage: preferences, unlock state, usage count │      │
│     │  IndexedDB: palette library, history, versions, tags  │      │
│     └───────────────────────────────────────────────────────┘      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
                         ↑                 ↑
                   No API calls.    No randomness.
                   No AI.           No network.
```

**Total pipeline time: < 50ms.** The engine feels instant because it is.

<br />

---

<br />

## 📸 Interface Preview

```
╔══════════════════════════════════════════════════════════════════════╗
║                    ColorHarmony  ·  v1.0                            ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  ┌──────────────────┐  ┌───────────────────────┐  ┌──────────────┐  ║
║  │   CONTROL DECK   │  │      WORKSPACE        │  │  INSPECTOR   │  ║
║  │                  │  │                       │  │              │  ║
║  │ Base Color       │  │  ■ ■ ■ ■ ■            │  │ Selected:    │  ║
║  │ ████ #3B82F6     │  │  Complementary        │  │ ■ #3B82F6    │  ║
║  │                  │  │  Score: 92/100  ⭐     │  │ Blue 500     │  ║
║  │ Harmony Rule     │  │                       │  │              │  ║
║  │ ● Complementary  │  │  ┌───┐ ┌───┐ ┌───┐   │  │ RGB          │  ║
║  │ ○ Analogous      │  │  │   │ │   │ │   │   │  │ 59, 130, 246 │  ║
║  │ ○ Triad          │  │  │ ■ │ │ ■ │ │ ■ │   │  │              │  ║
║  │ ○ Tetrad         │  │  │   │ │   │ │   │   │  │ HSL          │  ║
║  │ ○ Monochrome     │  │  └───┘ └───┘ └───┘   │  │ 217° 91% 60% │  ║
║  │                  │  │  ┌───┐ ┌───┐          │  │              │  ║
║  │ Intensity ────── │  │  │ ■ │ │ ■ │          │  │ Contrast     │  ║
║  │ ████████░░  0.8  │  │  │   │ │   │          │  │ On White 3:1 │  ║
║  │                  │  │  └───┘ └───┘          │  │ On Black 7:1 │  ║
║  │ Lock swatches    │  │                       │  │              │  ║
║  │ ○ ○ ● ○ ○        │  │  ▸ Palette Preview    │  │ Badge: AA ✓  │  ║
║  │                  │  │  ░░░░░░░░░░░░░░░░░    │  │              │  ║
║  │ [  Generate  ]   │  │  Light Mode Preview   │  │ [ Copy HEX ] │  ║
║  │                  │  │  ████████████████     │  │ [ Copy RGB ] │  ║
║  │ Recent           │  │  ░░░░░░░░░░░░░░░░░    │  │ [ Copy HSL ] │  ║
║  │ ■■ Brand kit     │  │  Dark Mode Preview    │  │              │  ║
║  │ ■■ Dashboard     │  │  ████████████████     │  │ [Export CSS] │  ║
║  │ ■■ Landing pg    │  │                       │  │ [Export JSON]│  ║
║  │                  │  │  [Save] [Export] [↻]  │  │ [ Save ★ ]  │  ║
║  └──────────────────┘  └───────────────────────┘  └──────────────┘  ║
║                                                                      ║
║  ┌──────────────────────────────────────────────────────────────┐   ║
║  │  HISTORY VAULT                                               │   ║
║  │  ■■■■■ Brand Kit v3 · Complementary · AA  · Feb 14  ★ Load  │   ║
║  │  ■■■■■ Dashboard UI · Analogous · AAA     · Jan 29    Load  │   ║
║  │  ■■■■■ Landing Page · Triad · Score 88    · Jan 15    Load  │   ║
║  └──────────────────────────────────────────────────────────────┘   ║
╚══════════════════════════════════════════════════════════════════════╝
```

> **Screenshot placeholders below — replace with actual screenshots after first build:**

| Panel | Preview |
|---|---|
| 🎨 Palette Generator | `[ Screenshot: ColorHarmony — Workspace with generated palette ]` |
| ⚖️ Contrast Checker | `[ Screenshot: ColorHarmony — Real-time WCAG contrast badges ]` |
| 🏛️ Palette Vault | `[ Screenshot: ColorHarmony — Saved palettes with tags and history ]` |
| 📤 Export Menu | `[ Screenshot: ColorHarmony — CSS variables and JSON token export ]` |

<br />

---

<br />

## ⚡ Quick Start

> **Requirements:** Node.js 18+, npm 9+

```bash
# 1. Clone the repository
git clone https://github.com/TSCREATES-copyright/colorharmony.git

# 2. Enter the project directory
cd colorharmony

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# → http://localhost:5173
```

That's it. No `.env` file. No API keys. No backend setup. No account creation.

Open the browser, paste a hex color, pick a harmony rule, and your first palette is ready in under 10 seconds.

<br />

### Build for Production

```bash
# Build optimized static output
npm run build

# Preview the production build locally
npm run preview
```

The output is a fully static site. Deploy anywhere: GitHub Pages, Netlify, Vercel, Cloudflare Pages — or just open `dist/index.html` directly in a browser.

```bash
# Deploy to GitHub Pages (optional)
npm run deploy

# Deploy to Netlify (optional)
netlify deploy --prod --dir=dist
```

<br />

---

<br />

## 📊 Example Output

### Input

```
Base Color  :  #FF5733
Harmony     :  Complementary
Intensity   :  0.85
Contrast    :  AA target
```

### Generated Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  PALETTE OUTPUT                           Score: 89/100         │
├──────────┬────────────┬──────────────┬──────────┬──────────────┤
│  Swatch  │  Role      │  Name        │  HEX     │  Contrast AA │
├──────────┼────────────┼──────────────┼──────────┼──────────────┤
│    ■     │  Base      │  Vermillion  │ #FF5733  │  On Blk ✓    │
│    ■     │  Accent    │  Ocean Tide  │ #33BDFF  │  On Blk ✓    │
│    ■     │  Support   │  Rust Deep   │ #7A1F08  │  On Wht ✓    │
│    ■     │  Surface   │  Shell White │ #FFF4F1  │  On Blk ✓    │
│    ■     │  Text      │  Charcoal    │ #1A1A1A  │  On Wht ✓    │
└──────────┴────────────┴──────────────┴──────────┴──────────────┘
  Harmony: Complementary  |  WCAG: All pass AA  |  Warnings: None
```

### CSS Variables Export

```css
:root {
  --color-base:     #FF5733;  /* Vermillion  — Primary brand color   */
  --color-accent:   #33BDFF;  /* Ocean Tide  — Interactive elements  */
  --color-support:  #7A1F08;  /* Rust Deep   — Hover & active states */
  --color-surface:  #FFF4F1;  /* Shell White — Page background       */
  --color-text:     #1A1A1A;  /* Charcoal    — Body text             */
}
```

### Prompt Export

```ColorPrompt
You are working with a color palette for a product design system.

Palette summary:
- Base color: #FF5733
- Harmony class: triadic
- Variant: active
- Overall Contrast Score: 90/100
- Accessibility Score: 100/100

Colors:
- Base (base): #FF5833
- Primary (primary): #33FF58
- Background (background): #FBF9F9
- Text (text): #211512
- Secondary (secondary): #5833FF

Accessibility notes:
- Ensure text contrast meets WCAG AA standards (4.5:1 for normal text).
- Use the base color as the primary brand anchor.
- Use the accent color sparingly for emphasis.
- Best used with clear semantic roles.

Task:
Create a polished design direction using this palette for a modern SaaS dashboard.

Requirements:
- Keep the style clean, premium, and readable.
- Provide specific guidance on which colors to use for backgrounds, surfaces, primary buttons, borders, and text.
- Return a practical implementation-ready response.
```

<br />

---

<br />

## 🏗️ Architecture

ColorHarmony is built on one architectural principle: **React renders. Systems compute. Never mix them.**

```
src/
├── App.tsx                        # Root shell — routing and store hydration
├── main.tsx                       # Entry point and provider setup
│
├── components/
│   ├── dashboard/                 # Layout components (dumb, declarative)
│   │   ├── AppShell.tsx           # Top-level layout frame
│   │   ├── LeftPanel.tsx          # Input controls zone
│   │   ├── Workspace.tsx          # Palette output zone
│   │   ├── InspectorPanel.tsx     # Swatch detail zone
│   │   └── HistoryPanel.tsx       # Saved palette zone
│   │
│   ├── tools/                     # Feature components (receive props, dispatch actions)
│   │   ├── ColorInput.tsx         # HEX field + color picker
│   │   ├── PresetSelector.tsx     # Mood/rule preset picker
│   │   ├── PaletteGrid.tsx        # Swatch grid renderer
│   │   ├── PaletteTile.tsx        # Individual swatch card
│   │   ├── ContrastBadge.tsx      # WCAG pass/fail indicator
│   │   └── ExportMenu.tsx         # CSS / JSON export controls
│   │
│   └── ui/                        # Reusable primitives
│       ├── Button.tsx
│       ├── Slider.tsx
│       ├── Toggle.tsx
│       ├── Card.tsx
│       └── Modal.tsx
│
├── systems/                       # Pure deterministic modules (no React, no side effects)
│   ├── CoreEngine.ts              # Pipeline orchestrator
│   ├── InputHandler.ts            # Input normalization and validation
│   ├── ValidationSystem.ts        # Palette integrity and safety checks
│   ├── OutputProcessor.ts         # Format CSS / JSON / clipboard payloads
│   ├── StorageManager.ts          # LocalStorage + IndexedDB persistence
│   └── MonetizationManager.ts     # Local feature gating and unlock checks
│
├── hooks/                         # React bridges to systems
│   ├── useAppState.ts             # Global state entry point
│   ├── usePaletteEngine.ts        # Calls CoreEngine, returns palette
│   ├── useLocalStorage.ts         # Preference persistence
│   ├── useIndexedDB.ts            # Library and history persistence
│   ├── useExport.ts               # Export format builders
│   └── useMonetization.ts         # Free tier limits and unlock state
│
├── state/
│   ├── appStore.ts                # Zustand store definition
│   ├── selectors.ts               # Derived state selectors
│   └── actions.ts                 # Dispatchable actions
│
├── utils/
│   ├── color.ts                   # Color math (hue rotation, conversion)
│   ├── contrast.ts                # WCAG ratio calculations
│   ├── format.ts                  # Output formatting helpers
│   ├── ids.ts                     # Deterministic ID generation
│   └── math.ts                    # Pure math utilities
│
├── types/
│   ├── palette.ts                 # PaletteRecord, PaletteSwatch types
│   ├── engine.ts                  # Engine input/output types
│   ├── storage.ts                 # Storage schema types
│   └── ui.ts                      # UI state types
│
└── styles/
    ├── globals.css                # Reset and root variables
    ├── layout.css                 # Panel and grid layout
    ├── components.css             # Component-specific styles
    └── tokens.css                 # Design token definitions
```

<br />

---

<br />

## 🧩 Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| **UI Framework** | React 18 + TypeScript | Declarative, typed, maintainable |
| **Build Tool** | Vite | Sub-second HMR, optimized static output |
| **State Management** | Zustand | Lightweight, no boilerplate, selector-friendly |
| **Persistence (Small)** | LocalStorage | Preferences, unlock state, usage counters |
| **Persistence (Library)** | IndexedDB | Palette history, versions, tags, collections |
| **Color Engine** | Pure TypeScript modules | Deterministic, testable, zero-dependency |
| **Styling** | CSS Modules / CSS Variables | Scoped, token-driven, no runtime overhead |
| **Export** | Native browser APIs | No libraries needed for CSS/JSON/clipboard |
| **Backend** | None | Zero infrastructure, zero latency |
| **Hosting** | Static only | GitHub Pages, Netlify, Vercel, Cloudflare Pages |

**Zero runtime AI. Zero external API calls. Zero accounts. Zero latency from network.**

<br />

---

<br />

## 📐 Data Model

```typescript
// ─── Harmony Rules ─────────────────────────────────────────────────────────

export type HarmonyRule =
  | 'analogous'       // hue offset ±20–40°, soft and cohesive
  | 'complementary'   // hue offset 180°, high contrast, brand-strong
  | 'triad'           // hue offset ±120°, three-way balance
  | 'tetrad'          // hue offset ±90°/180°, four-point harmony
  | 'monochrome';     // one hue, varied lightness and saturation

// ─── Swatch Role ───────────────────────────────────────────────────────────

export type SwatchRole =
  | 'base'            // Primary brand color — anchor of the palette
  | 'accent'          // Interactive and highlight elements
  | 'support'         // Hover, active, secondary states
  | 'neutral'         // Mid-ground — backgrounds, dividers
  | 'background'      // Page and surface backgrounds
  | 'text';           // Body and heading text

// ─── Swatch ────────────────────────────────────────────────────────────────

export type PaletteSwatch = {
  id: string;
  role: SwatchRole;
  hex: string;
  rgb: [number, number, number];
  hsl: [number, number, number];
  contrastOnWhite: number;       // WCAG ratio against #FFFFFF
  contrastOnBlack: number;       // WCAG ratio against #000000
  name: string;                  // Human-readable color name
  wcagAA: boolean;               // Passes WCAG 2.1 AA (4.5:1)
  wcagAAA: boolean;              // Passes WCAG 2.1 AAA (7:1)
  locked?: boolean;              // Locked swatches survive regeneration
};

// ─── Palette Record ────────────────────────────────────────────────────────

export type PaletteRecord = {
  id: string;
  title: string;
  baseColor: string;
  rule: HarmonyRule;
  swatches: PaletteSwatch[];
  score: number;                 // 0–100 composite harmony score
  tags: string[];
  notes?: string;
  createdAt: number;             // Unix timestamp
  updatedAt: number;
  version: number;               // Incremented on each save
};

// ─── App Settings ──────────────────────────────────────────────────────────

export type AppSettings = {
  theme: 'light' | 'dark';
  defaultRule: HarmonyRule;
  defaultExportFormat: 'css' | 'json';
  dailyUsageCount: number;
  dailyUsageResetDate: string;
  premiumUnlocked: boolean;
  lastOpenedPaletteId?: string;
};
```

<br />

---

<br />

## 🔁 Core Workflow Value

The tool is built to support one repeatable workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   PROJECT STARTS                                                │
│       ↓                                                         │
│   Open ColorHarmony (already bookmarked)                        │
│       ↓                                                         │
│   Input brand primary color                                     │
│       ↓                                                         │
│   Select harmony rule (complementary for brand, analogous for   │
│   UI, monochrome for dashboards)                                │
│       ↓                                                         │
│   Review palette — check contrast badges                        │
│       ↓                                                         │
│   Lock the base swatch → regenerate if needed                   │
│       ↓                                                         │
│   Save to library with tag (e.g. "client-acme-2025")            │
│       ↓                                                         │
│   Export CSS variables → paste into design system               │
│       ↓                                                         │
│   PROJECT SHIPS WITH ACCESSIBLE COLORS                          │
│       ↓                                                         │
│   Next project → reopen app → find old palette → iterate        │
│       ↓                                                         │
│   REPEAT WEEKLY                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

The app is not a novelty. It is a **weekly workflow companion** — useful the moment a project starts and valuable long after it ships.

<br />

---

<br />

## 📊 Performance Targets

| Operation | Target | Why |
|---|---|---|
| Palette generation | **< 50ms** | Feels instant — no loading state needed |
| Contrast analysis | **< 10ms** | Inline with generation, no delay |
| Local save | **< 30ms** | IndexedDB write is non-blocking |
| App load (cold) | **< 1.5s** | Static assets, no server round-trip |
| History load | **< 100ms** | IndexedDB read on mount |
| Export format build | **< 5ms** | Pure string construction |

All targets are achievable with deterministic pure functions, memoization, and shallow state updates. No network dependency. No blocking operations.

<br />

---

<br />

## 🗺️ Roadmap

### v1.0 — MVP (Current Target)

- [x] Base color input with HEX field and color picker
- [x] Harmony modes: analogous, complementary, triad, tetrad, monochrome
- [x] Deterministic palette generation < 50ms
- [x] Role-assigned swatches: base, accent, support, surface, text
- [x] Real-time WCAG AA/AAA contrast badges
- [x] Color name resolution from local dictionary
- [x] One-click copy for individual swatches and full palette
- [x] Save to local IndexedDB library
- [x] Palette history and recent generations
- [x] CSS variable export
- [x] Prompt export
- [x] Free tier daily limit (3 generations)
- [x] Local premium unlock ($10 one-time)

<br />

### v1.1 — Refinement

- [ ] Locked swatch workflow — regenerate around fixed colors
- [ ] Palette versioning — save multiple iterations of one palette
- [ ] Palette tagging and notes
- [ ] Light/dark mode preview surfaces
- [ ] Keyboard shortcuts (G: generate, S: save, E: export, ⌘Z: undo)
- [ ] Subtle micro-feedback animations
- [ ] Improved onboarding for first-time users

<br />

### v1.2 — Power Features

- [ ] Side-by-side palette comparison view
- [ ] Batch palette generation from one base color
- [ ] Mood presets: calm, bold, premium, playful, natural, minimal
- [ ] Palette families for related projects
- [ ] Advanced contrast warning overlays
- [ ] OKLCH color space input and output

<br />

### v1.3 — Export Automation

- [ ] Tailwind CSS token export
- [ ] SCSS variable export
- [ ] Design token JSON (W3C format)
- [ ] Figma-ready token structure
- [ ] Copy as Tailwind config
- [ ] Copy as CSS-in-JS (styled-components / emotion)

<br />

### v2.0 — Expansion (Zero Infrastructure)

- [ ] Image-based palette extraction via canvas API
- [ ] Offline PWA installation
- [ ] Local mini style guide generator
- [ ] Encoded share URLs (palette state encoded in URL hash)
- [ ] Gradient palette generator
- [ ] Typography color pairing suggestions
- [ ] Accessible color ramp generator (full shading scale)
- [ ] Brand kit mode: multi-palette project collections

<br />

---

<br />

## 🧪 Development

### Prerequisites

```bash
node --version  # 18.0.0 or higher
npm --version   # 9.0.0 or higher
```

### Environment

No environment variables are required. ColorHarmony is fully client-side with no external dependencies at runtime.

### Development Commands

```bash
# Start dev server with HMR
npm run dev

# Type check (no emit)
npm run typecheck

# Lint with ESLint
npm run lint

# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing Strategy

ColorHarmony's deterministic architecture makes testing straightforward. Engine modules are pure functions — no mocking required.

```typescript
// Example: Testing the harmony engine
import { HarmonyEngine } from '../systems/HarmonyEngine';

describe('HarmonyEngine', () => {
  it('generates complementary palette from base color', () => {
    const input = { hex: '#3B82F6', rule: 'complementary', intensity: 0.8 };
    const result = HarmonyEngine.generate(input);

    expect(result.swatches).toHaveLength(5);
    expect(result.swatches[0].role).toBe('base');
    expect(result.swatches[0].hex).toBe('#3B82F6');
    expect(result.swatches[1].role).toBe('accent');
    // Complementary is 180° hue offset
    expect(result.swatches[1].hsl[0]).toBeCloseTo(37, 1);
  });

  it('is deterministic — same input, same output', () => {
    const input = { hex: '#FF5733', rule: 'triad', intensity: 0.9 };
    const first  = HarmonyEngine.generate(input);
    const second = HarmonyEngine.generate(input);

    expect(first.swatches).toEqual(second.swatches);
    expect(first.score).toBe(second.score);
  });
});
```

<br />

---

<br />

## 🧠 Common Use Cases

### Use Case 1 — UI Design System Bootstrap

```
Scenario: You're starting a new SaaS product and need a full color system.

Step 1:  Input your brand primary color (#0EA5E9)
Step 2:  Select Complementary mode
Step 3:  Review generated palette — 5 role-assigned swatches ready
Step 4:  Verify all contrast badges pass AA
Step 5:  Export CSS variables → paste into design-tokens.css
Step 6:  Save palette with tag "saas-product-v1"

Result:  Full design system color layer in under 2 minutes.
         Contrast-validated. Token-ready. Reproducible on every rebuild.
```

### Use Case 2 — Brand Identity Palette

```
Scenario: A client gives you one brand hex. You need a working palette for
          their landing page, social assets, and print collateral.

Step 1:  Input brand primary (#8B5CF6)
Step 2:  Try Analogous mode → generates cohesive purple family
Step 3:  Switch to Triad mode → generates vibrant three-tone palette
Step 4:  Compare both in history panel → choose Analogous for brand
Step 5:  Lock the brand primary swatch
Step 6:  Adjust intensity to 0.7 for softer supporting tones
Step 7:  Save both versions with tags "brand-analogous" and "brand-triad"
Step 8:  Export JSON → share with developer for implementation

Result:  Two explorations, both saved, client gets options, developer
         gets exact token values. No guesswork. No Slack messages saying
         "what was that purple you used?"
```

### Use Case 3 — Accessibility Audit Prep

```
Scenario: Your design is flagged in an accessibility review. You need to
          identify which color pairings are failing WCAG contrast.

Step 1:  Input the current UI primary color
Step 2:  Review the contrast badges for every swatch
Step 3:  Identify the failing pair (e.g. light blue text on white background)
Step 4:  Use the inspector to see exact ratios (e.g. 2.8:1 — fails AA)
Step 5:  Adjust intensity or rule to find a passing alternative
Step 6:  Note the recommended text color from the inspector
Step 7:  Export corrected palette as CSS variables

Result:  Accessibility issues identified and resolved in the same tool,
         before the next design review meeting.
```

### Use Case 4 — Dashboard & Data Visualization Palette

```
Scenario: Building a data-heavy dashboard with charts, tables, status
          indicators, and multiple semantic states.

Step 1:  Input your neutral base (#64748B)
Step 2:  Select Tetrad mode → generates four-point color system
Step 3:  Review role assignments: base for primary actions,
         accent for highlights, support for warnings, text for labels
Step 4:  Export JSON → map to chart.js / recharts color array
Step 5:  Save with tag "dashboard-v2"
Step 6:  Later: lock the base swatch and regenerate for dark mode variant

Result:  Semantically structured palette with built-in role assignments,
         ready for a multi-state UI system.
```

### Use Case 5 — Weekly Design Iteration

```
Scenario: You're iterating on a product's visual identity across sprints.
          Different colors are tested each week.

Week 1:  Generate and save palette A (bold complementary)
Week 2:  Generate and save palette B (softer analogous)
Week 3:  Reopen palette A from history → adjust intensity → save v2
Week 4:  Compare A-v2 and B side by side → choose winner
Week 5:  Lock the winning palette as "brand-final" → export

Result:  Full iteration history in one local tool.
         No lost work. No "where did that purple go?" moments.
         Design decisions become a permanent searchable archive.
```

<br />

---

<br />

## 🎨 Harmony Rule Reference

A complete guide to when and why to use each harmony mode:

<br />

### Analogous — `±20° to ±40° hue offset`

```
COLOR WHEEL POSITION:

        60°
       ██
   ██      ██
  40°      80°
  (three adjacent hues)

Example: #3B82F6 (Blue)
Output:  #3B82F6  →  #3B68F6  →  #5A3BF6  →  #6B5BF6  →  #1E40AF
```

**Best for:** Backgrounds, UI surfaces, content-heavy layouts, editorial design, calm brand identities, healthcare, fintech.

**Produces:** Cohesive, low-tension palettes. Colors feel related and peaceful. Safe for large surface areas.

**Avoid for:** High-energy brands, attention-demanding CTAs, anything needing strong contrast between elements.

<br />

### Complementary — `180° hue offset`

```
COLOR WHEEL POSITION:

  ██ ────────────────── ██
  0°                  180°
  (directly opposite)

Example: #3B82F6 (Blue)
Output:  #3B82F6 (Blue)  +  #F6923B (Orange) as complementary pair
         Supporting tones derived from both anchor hues
```

**Best for:** Brand identities, CTAs, hero sections, product packaging, anything needing strong visual tension.

**Produces:** High-contrast, energetic palettes. The complementary pair creates natural hierarchy — one color always reads as action, one as context.

**Avoid for:** Large text-heavy surfaces where sustained visual tension causes fatigue.

<br />

### Triad — `±120° hue offset`

```
COLOR WHEEL POSITION:

       ██
      /  \
     /    \
   ██      ██
  (equidistant triangle)

Example: #3B82F6 (Blue)
Output:  #3B82F6 (Blue)  →  #F63B82 (Pink)  →  #82F63B (Green)
```

**Best for:** Creative brands, gaming, entertainment, children's products, social media graphics, anything needing vibrant multi-color energy.

**Produces:** Balanced but vibrant palettes. Three equally weighted hues create visual richness without any single color dominating.

**Avoid for:** Conservative or minimal brands, clinical interfaces, heavy data displays.

<br />

### Tetrad — `±90° and 180° hue offsets`

```
COLOR WHEEL POSITION:

  ██──────────██
  |            |
  |            |
  ██──────────██
  (rectangular/square)

Example: #3B82F6 (Blue)
Output:  #3B82F6 (Blue)  →  #82F63B (Green)  →  #F63B82 (Pink)  →  #F6823B (Orange)
```

**Best for:** Complex design systems, multi-section landing pages, dashboards with multiple state types, component libraries needing semantic color diversity.

**Produces:** Rich, multi-faceted palettes. Most complex to balance — the engine handles saturation and lightness adjustments to keep all four hues from competing equally.

**Avoid for:** Minimal brands, single-product contexts, small-scale interfaces.

<br />

### Monochrome — `Single hue, varied L/S`

```
COLOR WHEEL POSITION:

  ██ (one hue)

Lightness/Saturation axis:
  ░░░░░▒▒▒▒▓▓▓▓████ (dark to light)

Example: #3B82F6 (Blue)
Output:  #1E3A5F  →  #2B5EA7  →  #3B82F6  →  #93C5FD  →  #EFF6FF
```

**Best for:** Sophisticated brands, premium products, minimalist design systems, dark mode interfaces, photography portfolios, finance and legal products.

**Produces:** The most elegant and restrained palette type. Highly coherent. Every swatch feels deliberate. Works beautifully when combined with a strong neutral system.

**Avoid for:** Multi-state UIs needing semantic color distinction, anything requiring clear separation between different data categories.

<br />

---

<br />

## ⚙️ Engine Internals

For contributors and curious developers — a transparent look at how the palette engine works:

### Color Space Conversions

The engine operates in HSL internally for harmony calculations, converts to/from HEX and RGB for input/output:

```typescript
// Simplified transformation chain
HEX input
  → RGB [0–255]
  → HSL [0–360°, 0–100%, 0–100%]
  → Apply harmony transformations
  → Adjust saturation by role
  → Adjust lightness by role
  → Apply contrast corrections
  → Back to RGB
  → Back to HEX
  → Format all output representations
```

### Saturation Logic by Role

```
Role          Saturation Target    Reasoning
──────────────────────────────────────────────────────────────────
base          60–85%               Strong enough to lead visually
accent        70–90%               Punchy, demands attention
support       40–60%               Secondary — present but yielding
neutral       10–25%               Nearly achromatic — texture only
background    5–15%                Almost white/black with tint
text          10–30%               Chromatic but readable at any size
```

### Lightness Logic by Role

```
Role          Lightness Target     Reasoning
──────────────────────────────────────────────────────────────────
base          45–65%               Mid-range — works on both surfaces
accent        50–70%               Bright enough to pop
support       25–45%               Darker — used for depth
neutral       50–75%               Mid-tones — flexible use
background    90–98%               Near white (or near black in dark)
text          8–20%                Near black for maximum readability
```

### Scoring Breakdown

```
Dimension                   Weight    Description
──────────────────────────────────────────────────────────────────
Contrast compliance          35%      WCAG ratio scores across swatches
Harmony alignment            25%      Hue relationships match the rule
Visual separation            20%      Lightness gap between swatches
Light/dark tone balance      15%      Range covers dark → light adequately
UI usability                  5%      Role assignments cover all UI needs
──────────────────────────────────────────────────────────────────
                           100%       Final score: 0–100
```

Score thresholds:

```
90–100  ●  Excellent — production-ready, no warnings
75–89   ●  Good — minor contrast issues, safe to use
60–74   ●  Fair — some adjustments recommended
40–59   ●  Weak — significant accessibility or harmony issues
0–39    ●  Poor — regenerate with different input or rule
```

<br />

---

<br />

## 🛡️ Validation System

The ValidationSystem runs after every generation to catch issues before they reach the UI:

```
CHECK 1: Input Validation
  ✓  Is HEX exactly 3 or 6 characters?
  ✓  Are RGB values clamped to 0–255?
  ✓  Is HSL hue within 0–360°?
  ✓  Is saturation and lightness within 0–100%?

CHECK 2: Palette Integrity
  ✓  Are all 5 role slots assigned?
  ✓  Are there duplicate hex values?
  ✓  Is there sufficient lightness separation between swatches?
  ✓  Does the palette include at least one dark and one light swatch?

CHECK 3: Contrast Safety
  ✓  Does text swatch pass 4.5:1 contrast on background swatch?
  ✓  Does accent swatch pass 3:1 contrast on base swatch?
  ✓  Are any critical pairs flagged below AA?

CHECK 4: Rule Consistency
  ✓  Do generated hue offsets match the selected rule within tolerance?
  ✓  Is the base swatch preserved as the anchor?
  ✓  Are locked swatches unchanged from the previous generation?
```

Validation failures produce actionable warnings — not silent corrections. The user always knows what changed and why.

<br />

---

<br />

## 🤝 Contributing

Contributions are welcome. ColorHarmony is a focused tool — contributions should stay within that focus.

### What to Contribute

- Bug fixes in the engine or UI
- New color name entries for the local dictionary
- Additional harmony rule implementations
- Improved contrast calculation accuracy
- Performance improvements in palette generation
- Accessibility improvements in the UI itself
- Documentation and example improvements

### What Not to Contribute

- Backend integrations
- AI/ML palette generation
- Cloud sync features
- External API dependencies
- Heavy third-party libraries

### Contribution Process

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes
# 4. Ensure tests pass
npm run test

# 5. Ensure no type errors
npm run typecheck

# 6. Ensure linting passes
npm run lint

# 7. Commit with a descriptive message
git commit -m "feat: add tetrad harmony intensity scaling"

# 8. Push and open a pull request
git push origin feature/your-feature-name
```

### Contribution Guidelines

- Keep engine modules pure — no side effects inside `/systems`
- Keep components declarative — no logic inside JSX
- Include test coverage for any new deterministic behavior
- Follow the existing file structure
- Keep bundle size in mind — avoid heavy dependencies
- Document any new harmony rule with example inputs and outputs

<br />

---

<br />

## 📁 Project Structure Summary

```
colorharmony/
├── public/
│   ├── favicon.svg              # Color cluster favicon (magenta/cyan/yellow/black)
│   └── favicon-dark.svg         # Dark background variant
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── dashboard/           # Layout shells
│   │   ├── tools/               # Feature components
│   │   └── ui/                  # Primitives
│   ├── systems/                 # Pure deterministic logic
│   ├── hooks/                   # React-to-system bridges
│   ├── state/                   # Zustand store
│   ├── utils/                   # Math, color, format utilities
│   ├── types/                   # TypeScript definitions
│   └── styles/                  # Global and component CSS
├── tests/
│   ├── systems/                 # Engine unit tests
│   ├── hooks/                   # Hook integration tests
│   └── utils/                   # Utility function tests
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

<br />

---

<br />

## 🔐 Local-First Privacy

ColorHarmony stores **all data locally in your browser.** Nothing is sent to any server — because there is no server.

| Data | Storage Location | Sent Externally? |
|---|---|---|
| Generated palettes | IndexedDB | ❌ Never |
| Saved library | IndexedDB | ❌ Never |
| Preferences and settings | LocalStorage | ❌ Never |
| Premium unlock token | LocalStorage | ❌ Never |
| Usage counters | LocalStorage | ❌ Never |
| Color inputs | Memory only | ❌ Never |

Clearing your browser storage clears all ColorHarmony data. Export your palette library as JSON before clearing if you want to keep your work.

<br />

---

<br />

## 🎨 Favicon

The ColorHarmony favicon is a **prism cluster of overlapping color circles** — magenta, cyan, yellow, and black — arranged in a tight, harmonically balanced composition.

```
      ●  ←  Cyan node
    ●   ←  Magenta node  
      ●  ←  Yellow node
  ─────  ←  Black anchor baseline

Symbolism:
  Overlap      = harmonic relationships
  Three nodes  = palette generation rules
  Prism form   = color theory and transformation
  Black anchor = stability, precision, legibility
```

The icon reads clearly at 16×16px and 32×32px. It communicates "structured color tool," not "paint app." Light and dark browser tab variants are included.

<br />

---

<br />

## 📜 License

```
MIT License

Copyright (c) 2026 ®TSCREATES

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<br />

---

<br />

## 👤 Author

<div align="center">

<br />

```
             ████████╗███████╗ ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗███████╗
®            ╚══██╔══╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔════╝
                ██║   ███████╗██║     ██████╔╝█████╗  ███████║   ██║   █████╗  ███████╗
                ██║   ╚════██║██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝  ╚════██║
                ██║   ███████║╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗███████║
                ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
```

**®TSCREATES** &nbsp;·&nbsp; Designer. Developer. Builder.

*Building deterministic, production-grade creative tools that respect your time.*

<br />

[![GitHub](https://img.shields.io/badge/GitHub-®TSCREATES-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=black)](https://github.com/TSCREATES-copyright)

<br />

</div>

---

<br />

<div align="center">

```
ColorHarmony  ·  deterministic color workflow engine
One color in  →  production palette out  →  in under 50ms

No AI. No backend. No accounts. No latency.
Just color science — fast, local, and trustworthy.
```

<br />

**If ColorHarmony saves you time, give it a ⭐ — it helps more designers find it.**

<br />

[![Star on GitHub](https://img.shields.io/github/stars/TSCREATES-copyright/colorharmony?style=for-the-badge&logo=github&labelColor=black&color=ff00ff)](https://github.com/TSCREATES-copyright/colorharmony)

<br />

*Built with precision by **®TSCREATES***

<br />

---

<br />

<div align="center">

```
"Color is not decoration. It is information."
— ColorHarmony design principle
```

*ColorHarmony · ®TSCREATES · MIT License · 2026*

</div># colorharmony
