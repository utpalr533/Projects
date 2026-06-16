# Nike-Site

A premium, interactive landing page for Nike jackets built with **Astro**. Features a full-screen product carousel with smooth animations, a shopping cart system, and responsive design.

## Features

- **Product Carousel** — Swiper-based 4-slide carousel with fade transitions, parallax, and autoplay
- **Shopping Cart** — Add/remove items, quantity controls, persistent storage via localStorage, badge count
- **Search Overlay** — Live search filtering across all jackets with quick-add functionality
- **Notification Toasts** — Smooth slide-in notifications on cart actions
- **Smooth Scrolling** — Nav links scroll to content sections
- **GSAP Animations** — Entry animations on page load (stagger, fade, slide)
- **Fully Responsive** — Mobile-first design with breakpoints at 320px, 540px, 1150px, 1536px, and 2048px

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Static site generation |
| [Swiper](https://swiperjs.com) | Touch-enabled carousel |
| [GSAP](https://gsap.com) | Page-load animations |
| [Remix Icons](https://remixicon.com) | Icon set |
| [Google Fonts (Montserrat)](https://fonts.google.com/specimen/Montserrat) | Typography |

## Getting Started

```sh
npm install
npm run dev
```

Open **http://localhost:4321** in your browser.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI |

## Project Structure

```
src/
├── components/
│   ├── Header.astro
│   └── HomeSlider.astro
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
public/
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/ (jacket images, logos)
```
