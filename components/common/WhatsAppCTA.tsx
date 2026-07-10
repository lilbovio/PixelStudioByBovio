/**
 * WhatsAppCTA — inline call-to-action link that opens WhatsApp.
 *
 * Different from WhatsAppButton (the floating FAB).
 * This is an inline element used inside sections:
 *   - Hero primary button
 *   - Final CTA section button
 *   - Footer contact link
 *   - Navigation CTA (delegates to Button component)
 *
 * It wraps the Button component with the WhatsApp URL pre-wired,
 * so callers don't need to construct the URL themselves.
 *
 * Usage:
 *   <WhatsAppCTA label="Start a Project" size="lg" />
 *   <WhatsAppCTA label="Message us on WhatsApp" variant="secondary" />
 */

import { Button } from '@/components/ui/Button'
import { buildWhatsAppURL } from '@/lib/whatsapp'
import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────

interface WhatsAppCTAProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  /** Custom message override — defaults to standard intro message */
  message?: string
  /** Additional content (e.g., an icon) */
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

// ─── Component ────────────────────────────────────────────────

export function WhatsAppCTA({
  label = 'Start a Project',
  variant = 'primary',
  size = 'md',
  className,
  message,
  icon,
  iconPosition,
}: WhatsAppCTAProps) {
  const url = buildWhatsAppURL(message)

  return (
    <Button
      href={url}
      variant={variant}
      size={size}
      className={className}
      icon={icon}
      iconPosition={iconPosition}
      aria-label={`${label} — opens WhatsApp`}
    >
      {label}
    </Button>
  )
}
