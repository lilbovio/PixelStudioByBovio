/**
 * FAQ data — displayed in the FAQ section on the homepage.
 *
 * Each entry should address a real objection or concern a business owner has.
 * Keep answers concise, honest and reassuring.
 * Answers also feed the FAQPage JSON-LD schema in lib/structured-data.ts.
 */

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 'cost',
    question: 'How much does a website cost?',
    answer:
      'Every project is different, so pricing depends on the scope, complexity and timeline. We offer transparent quotes with no hidden fees. The best way to get an accurate estimate is to start a conversation — it takes less than five minutes.',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'A landing page typically takes one to two weeks. A full business website usually takes two to four weeks. Timelines depend on feedback speed and project complexity. We always provide a clear schedule before we begin.',
  },
  {
    id: 'hosting',
    question: 'Do you provide hosting?',
    answer:
      'Yes. We set up and configure hosting on reliable platforms like Vercel or Netlify. Your website will be fast, secure and always online. We can also work with your existing hosting if you prefer.',
  },
  {
    id: 'domain',
    question: 'Can you help with domains?',
    answer:
      'Absolutely. We can help you register a domain, connect it to your new website and configure any DNS settings needed. If you already have a domain, we will handle the migration.',
  },
  {
    id: 'mobile',
    question: 'Will my website work on mobile devices?',
    answer:
      'Every website we build is designed mobile-first. It will look and work beautifully on phones, tablets and desktop computers. Most of your customers are on mobile — so that is always our priority.',
  },
  {
    id: 'changes',
    question: 'Can I request changes?',
    answer:
      'Yes. We include a revision period in every project so you can request adjustments before the final launch. After launch, changes can be handled through a maintenance agreement or billed per request.',
  },
  {
    id: 'seo',
    question: 'Will my website appear on Google?',
    answer:
      'Every website we build includes solid SEO foundations — proper page structure, metadata, fast loading and mobile optimization. This gives you a strong starting point. Reaching the top of search results requires ongoing content and SEO work, which we can also help with.',
  },
  {
    id: 'maintenance',
    question: 'Do you provide maintenance after launch?',
    answer:
      'Yes. We offer ongoing maintenance plans that cover updates, security monitoring, performance optimization and content changes. You can focus on your business while we keep your website running smoothly.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. If your current website feels outdated, slow or is not generating results, we can transform it into a modern experience that better represents your business. We will analyze what is working and improve everything else.',
  },
  {
    id: 'start',
    question: 'How do we start?',
    answer:
      'Send us a message on WhatsApp. Tell us a little about your business and what you need. We will schedule a short discovery call, walk you through our process and put together a proposal. No commitment required.',
  },
]
