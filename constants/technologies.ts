/**
 * Trust technology badges — displayed in the TrustBadges section.
 *
 * These logos communicate that the studio builds with modern,
 * reliable and industry-standard technology.
 *
 * `imagePath` points to SVG logos in public/logos/
 * These will be added as SVG files in Phase 1.
 */

export interface TechBadge {
  id: string
  name: string
  imagePath: string
}

export const techBadges: TechBadge[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    imagePath: '/logos/nextjs.svg',
  },
  {
    id: 'react',
    name: 'React',
    imagePath: '/logos/react.svg',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    imagePath: '/logos/tailwindcss.svg',
  },
  {
    id: 'framer',
    name: 'Framer Motion',
    imagePath: '/logos/framer.svg',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    imagePath: '/logos/vercel.svg',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    imagePath: '/logos/cloudflare.svg',
  },
]
