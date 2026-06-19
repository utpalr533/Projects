# Jacket Landing Page — Design System

## Overview
Modern, bold jacket e-commerce landing page with full-screen gradient hero sliders. Mobile-first responsive design.

---

## Brand Colors

| Gradient | Name         | CSS (135deg)                          |
|----------|--------------|---------------------------------------|
| 🟢       | Green        | `hsl(98,63%,37%)` → `hsl(97,45%,71%)` |
| 🟠       | Orange       | `hsl(17,98%,56%)` → `hsl(14,97%,64%)` |
| 🔵       | Sky Blue     | `hsl(210,96%,55%)` → `hsl(205,51%,73%)` |
| 🟣       | Purple       | `hsl(259,92%,63%)` → `hsl(260,52%,68%)` |

- Background: Gradients above (hero slides)
- Text: White (`hsl(0,0%,100%)`) on gradients
- Buttons: White bg, black text

---

## Typography

- **Font**: Montserrat (Google Fonts, 100–900)
- **Scale**:
  - Hero product name: `1.75rem` mobile / `2.5rem` desktop
  - Body: `0.938rem` / `1rem`
  - Small: `0.813rem` / `0.875rem`
- **Weights**: 600 for headings, 400 for body

---

## Layout

- Header: Fixed top, transparent, `z-index: 100`
- Container: `max-width: 1120px`, `margin-inline: 1rem`
- Hero: Full viewport height (`100vh`) on mobile, auto height on desktop
- Desktop grid (≥1150px): `.home-data` = 3-column grid (info / price / button)

---

## Header & Navigation

- Logo: Nike-style SVG, `50px` mobile / `70px` desktop
- Nav links: White, weight 600, underline hover effect
- Icons: Shopping bag + Search (RemixIcons, `1.5rem`)
- Mobile: Hamburger toggle → full-screen overlay menu with blur backdrop
- Scroll: Adds `scroll-header` class → frosted glass effect

---

## Components

### Hero Slide
- Full-screen gradient background per slide
- 3 layered logo SVGs (decorative, `opacity: 0.4`)
- Product image centered, `z-index: 10`
- Info: Name, description, price, "Buy Now" button
- Swiper: `loop: true`, `speed: 800`, `effect: fade`, `parallax: true`, autoplay 3s

### Button
- Pill shape (`border-radius: 4rem`), white bg, black text
- `padding: 0.75rem 1rem`, font weight 600
- Flex with icon, hover shadow

### Pagination
- Swiper pagination bullets (white) positioned at `bottom: calc(50% - 5rem)`

---

## Breakpoints

| Device       | Width    | Changes |
|-------------|----------|---------|
| Small       | ≤320px   | Zoom 0.85 on logos |
| Medium      | ≥540px   | Hero grid: 500px centered |
| Large       | ≥1150px  | Desktop layout, full nav visible, larger images |
| Tall+Wide   | ≥1536x864| Hero returns to 100vh |
| 2K          | ≥2048px  | Zoom 1.2 on all hero elements |

---

## Assets

- Images: `public/assets/img/jacket-{1-4}.png`
- Icons: RemixIcons CDN
- Logo: `public/assets/img/logo-nike.svg`, `logo-nike-name.svg`
- Favicon: `public/favicon.png`

---

## JS Libraries

- **Swiper** 12: Hero carousel (`swiper-bundle.min.css` + `.min.js`)
- **GSAP** 3.15: Entry animations (logo stagger, nav drop, data/image fade-up)
- **RemixIcons** 4.9.0: UI icons
