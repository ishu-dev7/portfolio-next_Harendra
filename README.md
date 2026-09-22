# DevFolio — Premium Developer Portfolio

A production-ready personal portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion. Dark/light theme, animated counters, skill bars,
project filtering, a typing hero, and full SEO/PWA metadata out of the box.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom design tokens via CSS variables)
- **Animation:** Framer Motion + a lightweight canvas particle background
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/code) via `next/font/google`

## Project Structure

```
app/
  layout.tsx        Root layout: fonts, metadata, JSON-LD, theme init script
  page.tsx           Composes every section in order
  globals.css        CSS variables (theme tokens) + a few keyframes Tailwind can't express
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           robots.txt
  manifest.ts         PWA web app manifest
  favicon.ico
components/          One component per section (Hero, About, Skills, Experience, ...)
constants/
  data.ts             ALL editable content lives here — names, copy, skills, projects, etc.
types/
  index.ts            Shared TypeScript interfaces for the content data
public/               Static assets: icons, OG image, resume.pdf (all placeholders — replace them)
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before You Deploy — Replace These Placeholders

1. **Your name** — search for `[Your Name]` across `constants/data.ts`, `app/layout.tsx`,
   and `components/Footer.tsx`.
2. **Contact info** — `SITE.email`, `SITE.phone`, `SITE.github`, `SITE.linkedin` in `constants/data.ts`.
3. **Photos** — replace the placeholder boxes in `components/Hero.tsx` and `components/About.tsx`
   with real `<Image>` components (use `next/image` for optimization).
4. **Resume** — replace `public/resume.pdf` with your real resume (same filename, or update the
   link in `components/Resume.tsx`).
5. **Icons / OG image** — replace `public/icon-192.png`, `public/icon-512.png`, `public/og-image.png`,
   and `app/favicon.ico` with real branded assets.
6. **Site URL** — update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
   from `https://example.com` to your real domain once you have one.
7. **Contact form** — the form in `components/Contact.tsx` currently just shows an alert.
   Wire it to a real backend: a Next.js Route Handler (`app/api/contact/route.ts`) that sends
   email via Resend/SendGrid, or a service like Formspree.
8. **Testimonials** — replace the bracketed names in `constants/data.ts` with real quotes,
   or remove the section if you don't have any yet.

## Editing Content

Everything text-based — skills, projects, experience, achievements, stats — lives in
`constants/data.ts`. You generally never need to touch the component files just to update copy.

## Deployment

### Vercel (recommended — zero config)
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings needed. Click Deploy.
4. Add your custom domain under Project Settings → Domains.

### Netlify
1. Push to GitHub.
2. In Netlify, "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `.next`.
4. Install the official [`@netlify/plugin-nextjs`](https://github.com/netlify/netlify-plugin-nextjs)
   (Netlify prompts for this automatically for Next.js projects) so App Router features
   (SSR, image optimization) work correctly.

### Azure App Service
1. Build locally or in CI: `npm install && npm run build`.
2. Azure App Service (Linux, Node 18+) can run Next.js directly with `npm start` as the
   startup command, after setting `WEBSITE_NODE_DEFAULT_VERSION` and uploading the build output
   (or deploy via GitHub Actions using Azure's official Next.js workflow template).
3. Alternatively, use `next export`-style static hosting only if you remove all dynamic
   features (theme toggle and forms still work fine client-side, so this isn't required —
   standard Node hosting is simpler here).

## Notes on Scope

This project covers the full section set from the brief (hero through footer), SEO
metadata, JSON-LD, sitemap/robots/manifest, dark/light theming, and the core animation
set (typing effect, scroll reveal, particle background, animated counters/bars, project
filtering). Not included, as lower-priority extras you can add incrementally:
command palette (Ctrl+K), custom cursor, background music toggle, blog, and a real
GitHub contribution graph — these are nice-to-haves that don't affect the core portfolio
experience and are easy to layer in later.
