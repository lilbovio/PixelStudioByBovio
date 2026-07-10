/**
 * Navigation items — used by FloatingNavbar, MobileMenu, and Footer.
 *
 * To add, remove, or reorder navigation links, update this array.
 * Both the desktop and mobile menus render from this single source.
 *
 * Note: FAQ is intentionally omitted — it is a homepage section, not a page.
 */

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const navCTA = {
  label: 'Start a Project',
  // href is handled dynamically by buildWhatsAppURL() in lib/whatsapp.ts
}
