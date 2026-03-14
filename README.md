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

1. **Push code to GitHub:**
   ```bash
   git push origin master
   ```

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure environment variables:**
   In Vercel project settings, add:
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g., https://growna.com)
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your Formspree form endpoint

4. **Deploy:**
   - Click "Deploy" - Vercel will automatically build and deploy

**Note:** The contact form requires `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to be set. Get your endpoint from [formspree.io](https://formspree.io) (free tier available).

### Docker

```bash
docker build -t growna .
docker run -p 3000:3000 growna
```

### Self-Hosted

```bash
npm run build
npm start
```

## Environment Variables

### Required for Production

Create `.env.local` for local development or add in Vercel:

```env
# Site URL (required for SEO)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Formspree - Get from https://formspree.io (free tier available)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

### Getting Started with Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form for your contact page
3. Copy the form endpoint (e.g., `https://formspree.io/f/xyzabc`)
4. Add it as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your environment

The form will automatically send submissions to your email and provide a dashboard to manage responses.

## Future Enhancements

- Analytics integration (Plausible or Vercel Analytics)
- Newsletter signup component
- Legal pages (Privacy, Terms)
- Careers page
- CMS integration for blog/case studies
- Multi-language support

## License

Private - All rights reserved.
