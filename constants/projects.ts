/**
 * Project data — displayed in the Work section and /work page.
 *
 * BrandGuidelines §12: At launch, conceptual projects are used.
 * These are design concepts clearly presented as such — never as
 * fake client testimonials. The PRD explicitly mandates this.
 *
 * Each concept demonstrates design quality across a different industry.
 * Images live in public/images/projects/[slug]/
 *
 * To add a real client project:
 * 1. Add preview images to public/images/projects/[slug]/
 * 2. Set isConceptProject: false
 * 3. Add the object to this array
 * 4. The /work page and sitemap.ts update automatically
 */

export interface Project {
  slug: string
  title: string
  industry: string
  description: string
  /** The client's primary business objective for this project */
  goal: string
  coverImage: string
  /** Optional: mobile preview screenshot */
  mobileImage?: string
  tags: string[]
  /** Color palette used in the project — shown in project detail view */
  palette?: string[]
  /** Key features implemented */
  features?: string[]
  /** Whether this is a real client project or a design concept */
  isConceptProject: boolean
}

export const projects: Project[] = [
  {
    slug: 'aroma-coffee',
    title: 'Aroma Coffee',
    industry: 'Food & Beverage',
    description:
      'A premium digital experience for a specialty coffee shop focused on communicating craftsmanship, origin and community.',
    goal: 'Build a website that converts curious visitors into loyal customers — by making the coffee experience feel tangible before they walk through the door.',
    coverImage: '/images/projects/aroma-coffee/cover.webp',
    mobileImage: '/images/projects/aroma-coffee/mobile.webp',
    tags: ['Landing Page', 'Brand Identity', 'Design Concept'],
    palette: ['#1A1209', '#C8A87A', '#F5F0E8', '#3D2B1A'],
    features: [
      'Full-screen hero with product photography',
      'Menu showcase with seasonal highlights',
      'Story section communicating origin and craft',
      'WhatsApp reservation integration',
      'Location & hours block with Google Maps embed',
    ],
    isConceptProject: true,
  },
  {
    slug: 'nova-dental',
    title: 'Nova Dental',
    industry: 'Healthcare',
    description:
      'A clean, trustworthy website for a modern dental clinic designed to reduce appointment anxiety and increase new patient bookings.',
    goal: 'Increase online appointment requests by making the clinic feel approachable, professional and easy to contact.',
    coverImage: '/images/projects/nova-dental/cover.webp',
    mobileImage: '/images/projects/nova-dental/mobile.webp',
    tags: ['Business Website', 'Healthcare', 'Design Concept'],
    palette: ['#F8FAFF', '#2563EB', '#1E3A5F', '#64748B'],
    features: [
      'Services overview with procedure descriptions',
      'Before/after gallery with smooth transitions',
      'Team section with doctor profiles',
      'WhatsApp appointment booking',
      'FAQ section addressing common patient concerns',
    ],
    isConceptProject: true,
  },
  {
    slug: 'forma-studio',
    title: 'Forma Studio',
    industry: 'Architecture & Design',
    description:
      'A minimal, portfolio-driven website for an architecture studio where the work speaks — and the design never competes with it.',
    goal: 'Position the studio as a premium practice and attract higher-value residential and commercial project inquiries.',
    coverImage: '/images/projects/forma-studio/cover.webp',
    mobileImage: '/images/projects/forma-studio/mobile.webp',
    tags: ['Portfolio', 'Personal Brand', 'Design Concept'],
    palette: ['#F7F6F4', '#1C1C1C', '#A89880', '#E8E4DC'],
    features: [
      'Full-bleed project gallery with horizontal scroll',
      'Project detail pages with photography focus',
      'Studio manifesto section',
      'Awards and press mentions',
      'Contact form with project brief intake',
    ],
    isConceptProject: true,
  },
  {
    slug: 'apex-fitness',
    title: 'Apex Fitness',
    industry: 'Health & Wellness',
    description:
      'A bold but refined website for a premium fitness center that communicates energy, discipline and results.',
    goal: 'Drive membership sign-ups by communicating the premium experience and community the gym offers.',
    coverImage: '/images/projects/apex-fitness/cover.webp',
    mobileImage: '/images/projects/apex-fitness/mobile.webp',
    tags: ['Business Website', 'Health & Wellness', 'Design Concept'],
    palette: ['#0A0A0A', '#E8FF00', '#1A1A1A', '#F5F5F5'],
    features: [
      'Hero section with video background',
      'Class schedule with filter by category',
      'Trainer profiles and credentials',
      'Membership plans comparison table',
      'WhatsApp trial pass booking',
    ],
    isConceptProject: true,
  },
  {
    slug: 'meridian-law',
    title: 'Meridian Law',
    industry: 'Legal',
    description:
      'An authoritative yet approachable website for a law firm that handles commercial and corporate cases — built to convert high-value leads.',
    goal: 'Establish credibility and generate qualified consultation requests from business clients.',
    coverImage: '/images/projects/meridian-law/cover.webp',
    mobileImage: '/images/projects/meridian-law/mobile.webp',
    tags: ['Business Website', 'Professional Services', 'Design Concept'],
    palette: ['#1A1A2E', '#C9A84C', '#F4F4F0', '#2D2D44'],
    features: [
      'Practice areas with detailed service pages',
      'Attorney profiles with expertise highlights',
      'Case results and testimonials section',
      'Blog for legal insights',
      'Secure contact form with confidentiality notice',
    ],
    isConceptProject: true,
  },
  {
    slug: 'lucia-beauty',
    title: 'Lucía Beauty Studio',
    industry: 'Beauty & Wellness',
    description:
      'An elegant, personal website for a high-end beauty studio — designed to attract premium clientele and simplify booking.',
    goal: 'Communicate luxury positioning and convert website visitors into booked appointments.',
    coverImage: '/images/projects/lucia-beauty/cover.webp',
    mobileImage: '/images/projects/lucia-beauty/mobile.webp',
    tags: ['Landing Page', 'Personal Brand', 'Design Concept'],
    palette: ['#FDF6F0', '#C9967A', '#2C2C2C', '#F0E6DC'],
    features: [
      'Service menu with pricing and descriptions',
      'Before/after portfolio gallery',
      'Online booking integration',
      'Instagram feed embed',
      'Gift card section',
    ],
    isConceptProject: true,
  },
]
