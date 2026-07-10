import type { MetadataRoute } from 'next'

// robots.ts is auto-generated — no manual edits needed.
// Routes are derived from the sitemap and project constants.
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pixelstudiobybovio.lat'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
