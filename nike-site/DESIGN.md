# Jacket Landing Page — Design System

## Brand & Identity

- **Brand:** Nike (used as visual reference — logo, aesthetic)
- **Tone:** Modern, premium, sporty, clean
- **Tagline concept:** "Jackets designed to withstand anything"

## Layout

- Full-screen hero sections per jacket variant
- Swiper-based carousel with fade transitions and parallax
- Fixed transparent header with glassmorphism on scroll
- Desktop: 3-column data layout (info | price | button)
- Mobile: stacked centered layout

## Typography

- **Font:** Montserrat (Google Fonts, 100–900 weight range)
- **Scale:**
  - Product name: 1.75rem mobile / 2.5rem desktop
  - Body/normal: 0.938rem mobile / 1rem desktop
  - Small: 0.813rem mobile / 0.875rem desktop

## Color Palette

| Token | Value |
|-------|-------|
| `--white-color` | `hsl(0, 0%, 100%)` |
| `--black-color` | `hsl(0, 0%, 0%)` |
| Green gradient | `hsl(98, 63%, 37%)` → `hsl(97, 45%, 71%)` |
| Orange gradient | `hsl(17, 98%, 56%)` → `hsl(14, 97%, 64%)` |
| Sky-blue gradient | `hsl(210, 96%, 55%)` → `hsl(205, 51%, 73%)` |
| Purple gradient | `hsl(259, 92%, 63%)` → `hsl(260, 52%, 68%)` |

Each jacket slide gets one gradient as its full-viewport background.

## Components

### Header / Nav
- Fixed top, transparent, z-index 100
- Logo (Nike name SVG, 50px / 70px desktop)
- Links: Home, Categories, About Us, Special, Contact
- Actions: Shopping bag icon, Search icon, Hamburger toggle (mobile)
- Mobile: full-screen overlay menu with backdrop blur, slide-down transition
- Active link underline animation (`::after` pseudo-element)
- Scroll state: `scroll-header` class adds backdrop blur

### Home Carousel (Swiper)
- **4 slides**, each with:
  - Background gradient (green, orange, sky-blue, purple)
  - Decorative Nike logo SVGs (3 sizes, rotated, low opacity)
  - Product image (jacket PNG, 320px / 550px desktop) with parallax
  - Product name, description text, price
  - "Buy Now" CTA button (white bg, rounded, with bag icon)
- Swiper config: loop, 800ms speed, fade effect, autoplay 3s, parallax, pagination bullets

### Decorative Elements
- Nike swoosh logos in 3 sizes layered behind product image
  - `.home-logo-3`: 320px / 790px desktop
  - `.home-logo-2`: 270px / 670px desktop, rotated 5deg
  - `.home-logo-1`: 220px / 540px desktop, rotated 5deg
- Opacity 0.4 on logo container

## Animations

### GSAP Timeline (on load)
1. Logo images stagger in from below (y: 200)
2. Nav items slide down from above (y: -30)
3. Home data (info/price/button) slide up (y: 60)
4. Product image slide up (y: 100)
5. Pagination scales in (scale: 0 → 1)

Defaults: `opacity: 0`, `power4.out`, `duration: 1.4`

### Hover States
- Nav link underline expands to full width (`::after` width transition)
- Buy Now button gets shadow elevation
- General: subtle transitions on interactive elements

## Interactivity

- Mobile menu toggle (open/close via JS class toggling)
- Menu auto-closes on link click
- Scroll header detection (>= 50px adds `scroll-header` class with blur)
- Swiper autoplay (3s delay, pauses on interaction)
- Swiper pagination bullets (clickable, white)

## Responsive Breakpoints

| Breakpoint | Behavior |
|-----------|----------|
| `<= 320px` | Scale down logo decorations (85%) |
| `>= 540px` | Center slide content, max-width 500px |
| `>= 1150px` | Desktop layout: horizontal nav, 3-column data grid, larger imagery |
| `<= 420px` + `<= 670px` height | Reduce home slider height |
| `>= 1536px` + `>= 864px` height | Full viewport height on tall screens |
| `>= 2048px` | 1.2× zoom for 2K displays |

## Content — 4 Jacket Variants

| Name | Price | Theme |
|------|-------|-------|
| Resistance | $110.00 | Green — durable, reinforced, weatherproof |
| Comfy Snug | $99.00 | Orange — soft, lightweight, warm |
| Relaxed Fit | $105.00 | Sky-blue — comfortable, casual, modern |
| Protective Type | $130.00 | Purple — thermal, waterproof, protective |
