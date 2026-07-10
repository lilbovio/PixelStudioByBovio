/**
 * Shared metadata utilities — used across page generateMetadata() functions
 * to ensure consistent OG/Twitter markup with minimal repetition.
 *
 * Title handling:
 *   The root layout sets template: '%s — Pixel Studio by Bovio'.
 *   Pass a short page title (e.g. "Servicios de Diseño Web") and the
 *   template adds the brand suffix automatically in the browser tab.
 *
 *   For OG/Twitter however, the full decorated title is used so that
 *   social sharing previews include the brand name.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pixelstudiobybovio.lat'
const SITE_NAME = 'Pixel Studio by Bovio'
const BRAND_SUFFIX = ' — Pixel Studio by Bovio'
const DEFAULT_OG_IMAGE = '/og/default.svg'

interface PageMetaOptions {
  title: string
  description: string
  path: string
  ogImage?: string
}

/**
 * Generates a consistent metadata object for a page.
 *
 * @param title       Short page title — brand suffix is added by the layout template.
 * @param description SEO description for the page.
 * @param path        URL path, e.g. '/services'.
 * @param ogImage     Optional override for the OG image.
 */
export function buildPageMetadata({ title, description, path, ogImage }: PageMetaOptions) {
  const url = `${SITE_URL}${path}`
  const image = ogImage ?? DEFAULT_OG_IMAGE
  // OG/Twitter always show the fully decorated title with brand name
  const fullTitle = title.includes(SITE_NAME) ? title : `${title}${BRAND_SUFFIX}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website' as const,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
