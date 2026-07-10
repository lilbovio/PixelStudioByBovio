# Pixel by Bovio — Motion Language

> **Status:** Pre-implementation specification.
> **Principle:** Motion is communication, not decoration. The best animation is the one users barely notice.

---

## 1. Philosophy

Every animation must earn its existence by fulfilling one of these purposes:
1. **Guide attention** — direct the eye to the most important element
2. **Reduce cognitive load** — make state transitions feel natural and predictable
3. **Reinforce hierarchy** — communicate that some things are more important than others
4. **Increase perceived quality** — make the site feel physically real and crafted

Animations that exist only because they look impressive are removed.

If a visitor's first thought is "this has great animations" instead of "this feels incredibly smooth," the motion system has failed.

---

## 2. Timing System

All durations are drawn from this scale. No arbitrary values.

| Name | Duration | Usage |
|---|---|---|
| `duration-instant` | 100ms | Immediate micro-feedback (button press) |
| `duration-fast` | 150ms | Hover state transitions, focus rings |
| `duration-normal` | 240ms | Standard UI transitions (nav links, card hover) |
| `duration-medium` | 350ms | Scroll reveal, panel open/close |
| `duration-slow` | 500ms | Page load entrance, image reveal |
| `duration-deliberate` | 700ms | Hero stagger sequence, modal enter |

---

## 3. Easing Curves

No linear transitions. Every animation uses one of these curves.

| Name | CSS / Framer Value | Usage |
|---|---|---|
| `ease-smooth` | `[0.25, 0.46, 0.45, 0.94]` | General UI transitions |
| `ease-out-expo` | `[0.16, 1, 0.3, 1]` | Scroll reveals — fast start, gentle landing |
| `ease-out-back` | `[0.34, 1.56, 0.64, 1]` | Avoid. Too playful for this brand. |
| `ease-in-out` | `[0.4, 0, 0.2, 1]` | Panel open/close, modal transitions |
| `ease-spring` | `{ type: "spring", stiffness: 260, damping: 30 }` | Button press, card hover |

**Default easing for scroll reveals:** `ease-out-expo`. Animations feel physical — fast initial movement that settles gently into place.

---

## 4. Animation Primitives

These are the core animation presets, implemented as Framer Motion `variants` objects in `components/common/AnimationWrapper.tsx`.

### `fadeUp`
The primary entrance animation for text and cards.
```json
{
  "hidden": { "opacity": 0, "y": 20, "filter": "blur(4px)" },
  "visible": { "opacity": 1, "y": 0, "filter": "blur(0px)",
    "transition": { "duration": 0.5, "ease": [0.16, 1, 0.3, 1] }
  }
}
```

### `fadeIn`
For elements that should not move, only appear.
```json
{
  "hidden": { "opacity": 0 },
  "visible": { "opacity": 1,
    "transition": { "duration": 0.35, "ease": [0.25, 0.46, 0.45, 0.94] }
  }
}
```

### `blurUp`
For hero elements and large images — slight movement with blur reduction.
```json
{
  "hidden": { "opacity": 0, "y": 30, "filter": "blur(8px)" },
  "visible": { "opacity": 1, "y": 0, "filter": "blur(0px)",
    "transition": { "duration": 0.7, "ease": [0.16, 1, 0.3, 1] }
  }
}
```

### `staggerContainer`
Parent wrapper that drives stagger timing for child elements.
```json
{
  "hidden": {},
  "visible": {
    "transition": { "staggerChildren": 0.07, "delayChildren": 0.1 }
  }
}
```

---

## 5. Page Load Experience

**Total entrance duration: ~700ms**

The page should never appear instantly. Content settles into place.

Sequence:
1. **Navigation bar** fades in at `delay: 0ms`
2. **Hero headline** appears at `delay: 100ms` — `blurUp` variant
3. **Hero paragraph** appears at `delay: 220ms` — `fadeUp` variant
4. **Primary CTA button** appears at `delay: 340ms` — `fadeUp` variant
5. **Secondary CTA button** appears at `delay: 420ms` — `fadeUp` variant
6. **Hero visual / mockup** appears at `delay: 500ms` — `blurUp` variant, longer duration (700ms)

The hero headline receives the most attention through being first and having the blur effect, which makes it feel sharpening into focus.

---

## 6. Scroll Reveal System

All sections below the fold use scroll-triggered entrance animations via `AnimationWrapper`. The Intersection Observer threshold is `0.15` — the animation triggers when 15% of the element is visible.

**Rules:**
- Each section animates **once only** — `once: true` in `whileInView`
- No re-animation when scrolling back upward
- Sections animate in full, not piece by piece at the section level

**Per-section behavior:**

| Section | Type | Stagger |
|---|---|---|
| Trust Badges | `fadeIn` | 60ms |
| Problem cards | `fadeUp` | 70ms |
| Solution points | `fadeUp` | 80ms |
| Service cards | `fadeUp` | 70ms |
| Project cards | `fadeUp` | 80ms |
| Process steps | `fadeUp` | 100ms |
| Why Us cards | `fadeUp` | 70ms |
| FAQ items | `fadeUp` | 50ms |
| Final CTA | `blurUp` | n/a |

---

## 7. Hover Interactions

### Card Hover
```
transform: translateY(-4px)
box-shadow: var(--shadow-medium)
border-color: rgba(0,0,0,0.08)
transition: all 240ms ease-smooth
```
Cards lift 4px. Shadow deepens. Border becomes slightly more visible. Never more than 4px movement — keeps the feeling refined.

### Button: Primary
```
Default → Hover:
  background: slightly lighter charcoal
  transform: translateY(-1px)
  box-shadow: var(--shadow-medium)
  transition: 150ms ease-fast

Hover → Active (press):
  transform: translateY(0) scale(0.98)
  box-shadow: none
  transition: 100ms ease-instant

Active → Release:
  return to default, 200ms ease-smooth
```

### Button: Secondary
```
Default → Hover:
  background: rgba(0,0,0,0.04)
  border-color: rgba(0,0,0,0.15)
  transition: 150ms ease-smooth
```

### Navigation Links
```
Default → Hover:
  color: var(--color-text-primary) (from muted)
  text-decoration: underline (grows from left, width animation via clip-path)
  transition: 150ms ease-smooth
```

### Project Card Hover
```
Image: translateY(-8px) over 250ms
Overlay: opacity 0 → 0.6 over 250ms
CTA: opacity 0 → 1, translateY(8px → 0) over 250ms
Shadow: var(--shadow-elevated)
cursor: pointer
```

### Glass Nav (scroll behavior)
```
Scroll position 0:
  background: transparent
  border: none
  backdrop-filter: none

Scroll position > 20px:
  background: rgba(255,255,255,0.72)
  backdrop-filter: blur(12px)
  border-bottom: 1px solid rgba(229,231,235,0.5)
  transition: all 240ms ease-smooth
```

---

## 8. FAQ Accordion

```
Item open:
  height: 0 → auto (via Framer Motion layout animation)
  opacity: 0 → 1
  duration: 350ms ease-in-out

Icon rotation:
  rotate: 0 → 180deg
  duration: 240ms ease-smooth
```

Only one item open at a time. Closing animation mirrors opening (reversed).

---

## 9. Image Reveal

Images should never pop into existence.

```
Hidden:
  opacity: 0
  filter: blur(6px)
  transform: translateY(12px)

Visible:
  opacity: 1
  filter: blur(0)
  transform: translateY(0)
  transition: duration 600ms, ease-out-expo
```

Always reserve image dimensions with `width` and `height` to prevent CLS. Images load via `next/image` which handles the technical optimization.

---

## 10. Loading States

### Skeleton Loader
Animated shimmer from left to right over 1.4s, infinite.
```css
background: linear-gradient(
  90deg,
  var(--color-bg-tertiary) 25%,
  rgba(229,231,235,0.7) 50%,
  var(--color-bg-tertiary) 75%
);
background-size: 200% 100%;
animation: shimmer 1.4s ease-in-out infinite;
```

Shimmer speed: 1.4s (not fast — fast shimmer feels anxious).

---

## 11. Form Interactions

### Input Focus
```
Default:
  border: 1px solid var(--color-border)
  box-shadow: none

Focus:
  border: 1px solid var(--color-accent)
  box-shadow: 0 0 0 3px rgba(26,86,219,0.12)
  transition: 150ms ease-smooth
```

### Validation
```
Error state:
  border: 1px solid var(--color-error)
  box-shadow: 0 0 0 3px rgba(220,38,38,0.08)
  // NO shaking. NO red flash.

Error message:
  fadeIn over 200ms
  color: var(--color-error)
  font-size: text-caption
```

---

## 12. Success & Error States

### Form Success
```
Sequence:
1. Button shows spinner (loading state)
2. On success: form fades out (300ms)
3. Success message fades in (300ms)
   - Small check icon (Lucide CheckCircle)
   - Friendly confirmation copy
   - Never redirect immediately
```

### Toast Notifications
If used (clipboard copy, etc.):
```
Enter: translateY(16px → 0) + opacity (0 → 1), 300ms ease-out-expo
Exit: opacity (1 → 0), 200ms ease-smooth
Auto-dismiss: 3000ms
Position: bottom-center on mobile, bottom-right on desktop
```

---

## 13. Background Motion

Used sparingly. Only in hero section and possibly solution section.

**Approved background effects:**
- Soft floating gradient blob: `opacity: 0.06–0.12`, `blur: 80px`, movement speed < 8s per cycle
- Subtle noise texture: static, `opacity: 0.02–0.04`

**Never:**
- Particle systems
- Continuous gradient animations at > 0.1 opacity
- Anything that distracts from reading

---

## 14. Parallax

Used only for:
- Hero background abstract shape (movement ratio: 0.15 — very subtle)
- Large section background accents

Maximum scroll multiplier: `0.2`. If the visitor moves 100px, the background moves 20px maximum. Never create motion sickness.

---

## 15. Reduced Motion

All animations respect `prefers-reduced-motion: reduce`.

**`AnimationWrapper` behavior when reduced motion is detected:**
- Removes all `y` translation properties
- Removes all `filter` / `blur` properties
- Keeps `opacity` transitions (they remain smooth but not jarring)
- Reduces all durations to `150ms`

**`StaggerWrapper` behavior:**
- Stagger delay → 0ms (all items appear simultaneously)

**Navigation glass effect:**
- Still transitions background, but without blur (`backdrop-filter: none`)

The site remains fully functional and visually complete with motion disabled.

---

## 16. Animation QA Checklist

Before any page is considered complete:

- [ ] No animation exceeds 700ms (except background motion)
- [ ] No animation uses linear easing
- [ ] No bounce/elastic easing is present
- [ ] Scroll reveal fires only once per element
- [ ] Stagger delays feel rhythmic, not slow
- [ ] All animations complete before the user can interact with the element
- [ ] Reduced motion mode disables all complex animations
- [ ] No dropped frames on mid-range mobile devices
- [ ] Glass nav transition smooth at 60fps
- [ ] Hero sequence completes within 800ms of page load
- [ ] FAQ accordion height animation has no jarring snapping
