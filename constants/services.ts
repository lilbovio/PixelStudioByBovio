/**
 * Services data — displayed in the Services section and /services page.
 *
 * To add a service: add a new object to this array.
 * To change a service description: update it here.
 * The ServicesSection component renders automatically.
 *
 * `icon` values correspond to Lucide React icon names.
 * See: https://lucide.dev/icons/
 */

export interface Service {
  id: string
  name: string
  description: string
  /** Business outcome — what the client gains, not what we do technically */
  outcome: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description:
      'Beautiful high-converting landing pages designed to capture leads, promote products or launch new businesses.',
    outcome: 'Turn visitors into customers from the very first click.',
    icon: 'layout-template',
  },
  {
    id: 'business-websites',
    name: 'Business Websites',
    description:
      'Professional multi-page websites that establish credibility and help companies grow online.',
    outcome: 'Build the online presence your business deserves.',
    icon: 'building-2',
  },
  {
    id: 'personal-brand',
    name: 'Personal Brand Websites',
    description:
      'Premium personal websites for consultants, creators, speakers and professionals who want to build authority.',
    outcome: 'Stand out and attract the clients you actually want.',
    icon: 'user-check',
  },
  {
    id: 'redesign',
    name: 'Website Redesign',
    description:
      'Transform outdated websites into modern digital experiences that better represent the business.',
    outcome: 'Look as good as you already are.',
    icon: 'refresh-cw',
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    description:
      'Continuous updates, monitoring, optimization and technical support after launch.',
    outcome: 'Your website stays fast, secure and up to date.',
    icon: 'shield-check',
  },
  {
    id: 'seo',
    name: 'SEO Foundations',
    description:
      'Technical optimization that helps businesses become more visible in search engines.',
    outcome: 'Help more people discover your business online.',
    icon: 'search',
  },
  {
    id: 'analytics',
    name: 'Analytics Integration',
    description:
      'Understand visitor behavior and make data-driven business decisions.',
    outcome: 'Know exactly what is and is not working on your website.',
    icon: 'bar-chart-3',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Integration',
    description: 'Allow customers to contact your business instantly with one click.',
    outcome: 'Make it effortless for customers to reach you.',
    icon: 'message-circle',
  },
]
