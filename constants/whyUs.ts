/**
 * "Why choose us" feature cards — displayed in the Why Us section.
 *
 * Each entry answers a specific client concern.
 * Focus entirely on business value — never on technical features.
 * `icon` values correspond to Lucide React icon names.
 */

export interface WhyUsItem {
  id: string
  title: string
  description: string
  icon: string
}

export const whyUsItems: WhyUsItem[] = [
  {
    id: 'design',
    title: 'Modern Design',
    description:
      'Your website reflects the quality of your business. Outdated design costs you customers before they read a single word.',
    icon: 'sparkles',
  },
  {
    id: 'performance',
    title: 'Performance First',
    description:
      'Fast websites create better customer experiences. Slow ones send people to your competitors. Every site we build is optimized for speed.',
    icon: 'zap',
  },
  {
    id: 'mobile',
    title: 'Mobile First',
    description:
      'Designed for the devices your customers actually use. Over 70% of web traffic is mobile — your website should work perfectly on a phone.',
    icon: 'smartphone',
  },
  {
    id: 'detail',
    title: 'Attention to Detail',
    description:
      'Every spacing decision, animation and interaction is carefully crafted. The difference between a good website and an exceptional one lives in the details.',
    icon: 'focus',
  },
  {
    id: 'seo',
    title: 'SEO Ready',
    description:
      'Built with the technical foundations that help search engines find and rank your business. More visibility means more customers.',
    icon: 'search',
  },
  {
    id: 'scalable',
    title: 'Scalable',
    description:
      'Your website grows alongside your business. Whether you add new services, pages or features, the foundation supports it.',
    icon: 'trending-up',
  },
  {
    id: 'communication',
    title: 'Reliable Communication',
    description:
      'Clear timelines, honest updates and transparent collaboration throughout the project. No surprises.',
    icon: 'message-square-check',
  },
  {
    id: 'partnership',
    title: 'Long-Term Partnership',
    description:
      'The relationship does not end at launch. We are here for maintenance, improvements and whatever your business needs next.',
    icon: 'handshake',
  },
]
