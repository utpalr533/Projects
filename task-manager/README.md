# Task Manager

A minimalist, PlayStation-inspired to-do app built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Design

The UI follows the PlayStation design system — full-bleed blue hero band, pill-shaped buttons, 8px-radius cards, and the signature SST typographic voice (light-weight display, bold CTAs). See [`DESIGN.md`](DESIGN.md) for the full system reference.

## Features

- Add, toggle, and delete tasks
- Filter by All / Active / Completed
- Persistent storage via `localStorage`
- Clean empty states per filter
- Fully responsive

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npx astro check` | Type-check the project |

## Stack

- **Astro 6** — static site generation
- **Tailwind CSS v4** — utility-first CSS
- **Vanilla JS** — client-side interactivity
