/**
 * Footer — site footer.
 *
 * Visual upgrade:
 *   - Slightly warmer dark background using dark-secondary surface
 *   - Top gradient glow carries continuity from FinalCTASection
 *   - Column separators using white/08 borders
 *   - Improved typography hierarchy in column headers
 *   - Bottom row gets a clean centered copyright treatment
 */

import Link              from 'next/link'
import { Instagram, Music2, Mail, MapPin } from 'lucide-react'
import { navItems }      from '@/constants/navigation'
import { site }          from '@/constants/site'
import { buildWhatsAppURL } from '@/lib/whatsapp'
import { Logomark }      from '@/components/icons/Logomark'
import { cn }            from '@/lib/cn'

// ─── Social link helper ───────────────────────────────────────

interface SocialLinkProps {
  href:      string
  label:     string
  children:  React.ReactNode
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'flex items-center justify-center size-8 rounded-lg',
        'text-white/40 hover:text-white hover:bg-white/8',
        'border border-white/8',
        'transition-colors duration-fast ease-smooth',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40',
      )}
    >
      {children}
    </a>
  )
}

// ─── Component ────────────────────────────────────────────────

export function Footer() {
  const currentYear  = new Date().getFullYear()
  const whatsappUrl  = buildWhatsAppURL()

  return (
    <footer
      className="section-dark section-padding relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle top continuation glow from FinalCTA */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)' }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-12">

        {/* ── Top row ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-10 border-b border-dark-border">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Pixel Studio by Bovio — Home" className="w-fit">
              <Logomark variant="full" scheme="light" className="text-[1rem]" />
            </Link>
            <p className="type-body text-white/40 max-w-[260px] leading-relaxed">
              {site.description}
            </p>

            {/* Social icons */}
            {(site.social.instagram || site.social.tiktok) && (
              <div className="flex items-center gap-2 mt-1">
                <SocialLink href={site.social.instagram} label="Follow us on Instagram">
                  <Instagram size={16} strokeWidth={1.75} aria-hidden="true" />
                </SocialLink>
                <SocialLink href={site.social.tiktok} label="Follow us on TikTok">
                  <Music2 size={16} strokeWidth={1.75} aria-hidden="true" />
                </SocialLink>
              </div>
            )}
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <p className="type-label text-white/25 mb-5">Navigation</p>
            <ul role="list" className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'type-body text-white/50',
                      'hover:text-white/80',
                      'transition-colors duration-fast ease-smooth',
                      'focus-visible:outline-none focus-visible:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p className="type-label text-white/25 mb-5">Contact</p>
            <ul role="list" className="flex flex-col gap-3.5">

              {/* WhatsApp */}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                  className="group flex items-center gap-2.5 type-body text-white/50 hover:text-white/80 transition-colors duration-fast ease-smooth"
                >
                  <svg
                    aria-hidden="true"
                    className="size-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>

              {/* Email */}
              {site.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    aria-label={`Email us at ${site.email}`}
                    className="flex items-center gap-2.5 type-body text-white/50 hover:text-white/80 transition-colors duration-fast ease-smooth"
                  >
                    <Mail size={15} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
                    {site.email}
                  </a>
                </li>
              )}

              {/* Location */}
              <li>
                <span className="flex items-center gap-2.5 type-body text-white/30">
                  <MapPin size={15} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
                  {site.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom row ───────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-8">
          <p className="type-caption text-white/25">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="type-caption text-white/15">
            Designed &amp; built in Guadalajara, Mexico.
          </p>
        </div>

      </div>
    </footer>
  )
}
