# AGENTS.md - GROWNA Website

## Project Overview

**GROWNA** is a premium B2B technology and growth partner website.

### Services
- AI solutions
- SaaS products
- ERP / Odoo
- Systems integration
- Automation
- Digital transformation for growing businesses

---

## Stack

- **Framework:** Next.js 16 (App Router) - compatible with 15+
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Linting:** ESLint
- **Formatting:** Prettier

---

## Design Direction

- **Style:** Modern premium B2B SaaS / tech company
- **Feel:** Clean, sharp, confident, elegant
- **Visual Hierarchy:** Strong, conversion-aware
- **Motion:** Smooth but not excessive
- **Theme:** Dark/light-ready, high-trust enterprise feel
- **Colors:** Trust-building (blues, dark tones), modern gradients

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage |
| `/about` | `app/about/page.tsx` | About page |
| `/services` | `app/services/page.tsx` | Services overview |
| `/solutions` | `app/solutions/page.tsx` | Solutions showcase |
| `/contact` | `app/contact/page.tsx` | Contact form |

---

## Folder Structure

```
src/
├── app/                      # Next.js pages (App Router)
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── about/
│   ├── services/
│   ├── solutions/
│   ├── contact/
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components (Button, Card, etc.)
│   ├── sections/            # Page sections (Hero, Features, etc.)
│   └── layout/             # Header, Footer, etc.
├── lib/
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Site constants, config
├── content/                 # Content data (services, team, etc.)
├── public/
│   ├── images/             # Static images
│   └── fonts/              # Custom fonts
```

---

## Coding Standards

1. Use functional components with TypeScript
2. Keep components small and reusable
3. Use Tailwind utility classes; avoid custom CSS unless necessary
4. Follow Next.js App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`)
5. Use proper semantic HTML
6. Ensure responsive design (mobile-first)
7. Use shadcn/ui components as base; customize via Tailwind
8. Add animations with Framer Motion sparingly

---

## Components

- **UI Components:** `components/ui/` - Button, Card, Input, Sheet, NavigationMenu
- **Sections:** `components/sections/` - Hero, ServicesGrid, TrustBar, CTASection
- **Layout:** `components/layout/` - Header, Footer, Container

### Naming
- Component files: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Use index files for clean imports

---

## Safety Rules

1. **No secrets:** Never add API keys, tokens, or credentials to code
2. **No deletions:** Do not delete unrelated files; ask first
3. **No installs:** Do not install new packages without explaining why
4. **Environment:** Use `.env.local` for local secrets (already in `.gitignore`)
5. **Verify:** Run `npm run build` and `npm run lint` before committing

---

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Start production
npm start
```

---

## Notes

- Keep changes incremental and production-minded
- Test responsive design on mobile
- Optimize images for web
- Use `lucide-react` for icons
- This is a frontend-only marketing site for now
