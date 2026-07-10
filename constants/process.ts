/**
 * Process steps — displayed in the Process section and /process page.
 *
 * Four steps that explain how Pixel Studio by Bovio works.
 * `icon` values correspond to Lucide React icon names.
 */

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
  /** Approximate duration for this step — shown as a visual timeline indicator */
  timeline: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We start by understanding your business, goals, target audience and competitive landscape. No assumptions — only the right questions.',
    icon: 'search',
    timeline: '1–2 days',
  },
  {
    step: 2,
    title: 'Design',
    description:
      'We create wireframes, define the visual direction and build a modern interface that reflects your brand and speaks to your customers.',
    icon: 'pen-tool',
    timeline: '3–5 days',
  },
  {
    step: 3,
    title: 'Develop',
    description:
      'We transform the design into a fast, responsive and technically optimized website built with modern technology.',
    icon: 'code-2',
    timeline: '5–10 days',
  },
  {
    step: 4,
    title: 'Launch',
    description:
      'We deploy the website, connect your domain, run final performance checks and make sure everything is ready to grow with your business.',
    icon: 'rocket',
    timeline: '1–2 days',
  },
]
