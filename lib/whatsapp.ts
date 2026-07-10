/**
 * WhatsApp utility — single source of truth for all CTA links.
 *
 * Every "Start a Project" / "Contact on WhatsApp" button in the site
 * calls buildWhatsAppURL(). Updating the number or message here updates
 * every CTA simultaneously.
 *
 * Phone number format: international, no +, no spaces (e.g. 5233293915329)
 * See .env.local for the value.
 */

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

// Default prefilled message — per PRD specification
export const DEFAULT_WHATSAPP_MESSAGE = `Hello Pixel Studio by Bovio,

I found your website and I'm interested in discussing a project for my business.

I would like to receive more information.

Thank you.`

/**
 * Builds a wa.me URL with an optional prefilled message.
 *
 * @param message - Optional custom message. Defaults to the standard intro message.
 * @returns A fully encoded WhatsApp deep link URL.
 */
export function buildWhatsAppURL(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
