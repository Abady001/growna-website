# GROWNA - Technology & Growth Partner Website

A modern, premium B2B marketing website built with Next.js, TypeScript, and Tailwind CSS.

## About

GROWNA is a technology and growth partner helping growing businesses modernize, automate, and scale through AI solutions, SaaS products, ERP/Odoo, systems integration, automation, and digital transformation.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animation:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npx prettier --write .
```

## Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── solutions/        # Solutions page
│   ├── contact/          # Contact page
│   ├── blog/             # Blog listing + articles
│   └── case-studies/     # Case studies listing + articles
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   ├── layout/          # Header, Footer
│   └── forms/            # Form components
├── lib/
│   ├── constants.ts      # Site config, navigation, content
│   ├── data/            # Case studies, blog posts data
│   └── utils.ts         # Utility functions
└── public/               # Static assets
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About company |
| `/services` | Service offerings |
| `/solutions` | Business solutions |
| `/contact` | Contact form |
| `/blog` | Blog articles |
| `/case-studies` | Case studies |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Docker

```bash
docker build -t growna .
docker run -p 3000:3000 growna
```

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Future Phases

- Service detail pages
- Solution detail pages  
- Legal pages (Privacy, Terms)
- Careers page
- Newsletter signup
- CMS integration
- Contact form backend

## License

Private - All rights reserved.
