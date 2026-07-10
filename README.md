# Pixel Studio by Bovio

Premium Digital Design Studio — [pixelstudiobybovio.lat](https://pixelstudiobybovio.lat)

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Font | Geist |
| Deployment | Vercel |

## Development

```bash
# Install dependencies
pnpm install

# Start development server (with Turbopack)
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format

# Production build
pnpm build
```

## Project Structure

```
app/          Next.js App Router — pages, layouts, metadata
components/   Reusable UI components
constants/    All site content as typed data (CMS-ready)
lib/          Utilities — cn, whatsapp, metadata, structured-data
hooks/        Custom React hooks
types/        TypeScript interfaces
public/       Static assets — images, icons, logos
docs/         Architecture, design system, and decision documentation
```

## Documentation

- [`docs/Architecture.md`](docs/Architecture.md) — Project architecture, folder structure, roadmap
- [`docs/DesignSystem.md`](docs/DesignSystem.md) — Design tokens, components, responsive strategy
- [`docs/MotionLanguage.md`](docs/MotionLanguage.md) — Animation system and interaction specs
- [`docs/BrandGuidelines.md`](docs/BrandGuidelines.md) — Brand voice, tone, visual identity
- [`docs/DevelopmentStandards.md`](docs/DevelopmentStandards.md) — Coding standards, SEO, performance
- [`docs/Decisions.md`](docs/Decisions.md) — Architectural decision records (ADRs)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number without `+` or spaces
- `NEXT_PUBLIC_SITE_URL` — Canonical site URL

## How to Add Content

**Add a project:** Add to `constants/projects.ts` + images to `public/images/projects/`

**Add a service:** Add to `constants/services.ts`

**Update contact info:** Edit `constants/site.ts`

**Update navigation:** Edit `constants/navigation.ts`
