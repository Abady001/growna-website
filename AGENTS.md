# AGENTS.md - GROWNA Website

## Project Overview

**GROWNA** is a B2B growth-tech company website.

### Services
- AI solutions
- SaaS products
- ERP / Odoo
- Systems integration
- Automation
- Digital transformation for growing businesses

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Deployment:** Vercel-ready (or any Node.js host)

---

## Design Direction

- **Style:** Modern, professional, tech-forward B2B
- **Colors:** Trust-building (blues, dark tones), accent with modern gradients
- **Typography:** Clean sans-serif (Inter or similar)
- **Layout:** Section-based landing page with clear CTAs
- **Tone:** Innovative, reliable, growth-oriented

---

## Coding Standards

- Use functional components with TypeScript
- Keep components small and reusable
- Use Tailwind utility classes; avoid custom CSS unless necessary
- Follow Next.js App Router conventions (`page.tsx`, `layout.tsx`)
- Use proper semantic HTML
- Ensure responsive design (mobile-first)

---

## Folder Structure

```
src/
├── app/                    # Next.js pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── layout/           # Header, Footer, etc.
├── lib/
│   ├── utils.ts          # Utility functions
│   └── constants.ts      # Site constants
├── public/               # Static assets (images, fonts)
```

---

## Components

- **UI Components:** Base components in `components/ui/` (Button, Card, Container)
- **Sections:** Page sections in `components/sections/` (Hero, Services, CTA)
- **Layout:** Header, Footer in `components/layout/`

### Naming
- Component files: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Use index files for clean imports

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage |

Add new pages in `app/` following Next.js App Router.

---

## Assets

- Images: `public/images/`
- Icons: Use Lucide React components
- Fonts: Use `next/font` (Google Fonts)

---

## Safety Rules

1. **No secrets:** Never add API keys, tokens, or credentials to code
2. **No deletions:** Do not delete unrelated files; ask first
3. **No installs:** Do not install new packages without explaining why
4. **Environment:** Use `.env.local` for local secrets (add to `.gitignore`)
5. **Verify:** Run `npm run build` before committing

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

## Phase 2: Homepage Implementation

See `PHASE2.md` for detailed homepage requirements.

---

## Notes

- Keep changes incremental and production-minded
- Test responsive design on mobile
- Optimize images for web
