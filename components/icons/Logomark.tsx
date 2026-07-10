/**
 * Logomark — the Pixel Studio by Bovio wordmark, inlined as SVG.
 *
 * Mark: a 2×2 grid of squares — a literal "pixel" abstraction.
 * Wordmark: "pixel" (medium weight) + "studio" (extrabold) spaced apart.
 *
 * Two schemes:
 *   dark  — for light backgrounds (default)
 *   light — for dark backgrounds (navbar scrolled, footer)
 *
 * Fully accessible — renders as a labelled span.
 * Zero network request — inline SVG.
 */

import { cn } from '@/lib/cn'

// ─── Types ────────────────────────────────────────────────────

type LogomarkVariant = 'full' | 'mark'
type LogomarkScheme = 'dark' | 'light'

interface LogomarkProps {
  variant?: LogomarkVariant
  scheme?: LogomarkScheme
  className?: string
}

// ─── Pixel mark SVG ───────────────────────────────────────────
// A 2×2 grid of rounded squares — references both "pixel" and
// the precision / grid-based nature of digital design.

function PixelMark({ scheme }: { scheme: LogomarkScheme }) {
  const isLight = scheme === 'light'
  const fill = isLight ? 'rgba(255,255,255,0.90)' : 'var(--color-text-primary)'
  const fillMuted = isLight ? 'rgba(255,255,255,0.35)' : 'var(--color-text-muted)'

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Top-left square */}
      <rect x="0" y="0" width="8" height="8" rx="2" fill={fill} />
      {/* Top-right square — slightly muted for depth */}
      <rect x="10" y="0" width="8" height="8" rx="2" fill={fill} />
      {/* Bottom-left square — muted */}
      <rect x="0" y="10" width="8" height="8" rx="2" fill={fillMuted} />
      {/* Bottom-right square — most muted, creates depth */}
      <rect x="10" y="10" width="8" height="8" rx="2" fill={fillMuted} opacity="0.5" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────

export function Logomark({ variant = 'mark', scheme = 'dark', className }: LogomarkProps) {
  const isLight = scheme === 'light'

  return (
    <span
      className={cn('inline-flex items-center gap-2.5 select-none', className)}
      aria-label="Pixel Studio by Bovio"
    >
      {/* Geometric pixel mark */}
      <PixelMark scheme={scheme} />

      {/* Wordmark */}
      <span className="inline-flex items-baseline gap-1 leading-none">
        <span
          className={cn('tracking-tight', isLight ? 'text-white/80' : 'text-text-muted')}
          style={{
            fontSize: 'inherit',
            fontWeight: 500,
            letterSpacing: '-0.02em',
          }}
        >
          pixel
        </span>
        <span
          className={cn('tracking-tight', isLight ? 'text-white' : 'text-text-primary')}
          style={{
            fontSize: 'inherit',
            fontWeight: 800,
            letterSpacing: '-0.03em',
          }}
        >
          studio
        </span>
      </span>

      {variant === 'full' && (
        <span
          className={cn('type-label', isLight ? 'text-white/35' : 'text-text-disabled')}
          style={{ marginLeft: '2px' }}
        >
          by bovio
        </span>
      )}
    </span>
  )
}
