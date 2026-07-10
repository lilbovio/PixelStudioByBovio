/**
 * JSON-LD structured data builders.
 * Inject these into page <head> via Next.js script tags for rich search results.
 *
 * Usage in layout.tsx:
 *   <script
 *     type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
 *   />
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pixelstudiobybovio.lat'

/**
 * Organization schema — describes the studio itself.
 * Placed in the root layout so it appears on every page.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixel Studio by Bovio',
    description:
      'Premium digital design studio in Guadalajara, Mexico. We design and build modern websites that help businesses earn trust, attract customers and grow.',
    url: SITE_URL,
    logo: `${SITE_URL}/logos/pixel-studio-logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      // Social links will be added here when available
    ],
  }
}

/**
 * WebSite schema — enables the sitelinks search box in Google.
 * Placed in the root layout.
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixel Studio by Bovio',
    url: SITE_URL,
  }
}

/**
 * FAQ schema — enables FAQ rich results in search.
 * Pass the FAQ items from constants/faqs.ts.
 */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}
