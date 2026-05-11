# mothers-day

A bilingual Mother's Day tribute website in English and Persian (Farsi), with full RTL support. Designed to feel like a digital scrapbook: warm, soft, personal, and a little dreamy.

## What it is

A single-page tribute site with a photo memory gallery, a handwritten-style letter, an animated "things I love about you" section, and an optional background music player. All the personal content — photos, captions, letters, messages — lives in simple JSON and markdown files so it's easy to swap out without touching the code.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** with a custom palette (cream, blush, lavender, gold)
- **Framer Motion** for scroll animations and transitions
- **Google Fonts** — Playfair Display, Cormorant Garamond, Poppins (English) + Vazirmatn (Persian)
- No backend, no database, no auth — fully static, deploys to Vercel in one click

## Features

- Full bilingual support with a language toggle (EN / فارسی)
- Persian text renders RTL with Vazirmatn and proper spacing
- Polaroid-style photo gallery with lightbox
- Markdown-rendered letter with a gold drop-cap
- Animated cards section
- Floating hearts/flowers/stars particles in the background
- Optional background music (off by default)
- Mobile-first responsive design

## Content structure

All editable content is in `/content/`:

```
content/
  hero.json        — titles, subtitle, hero message
  photos.json      — photo paths + captions in both languages
  reasons.json     — the "things I love about you" cards
  message-en.md    — the letter in English
  message-fa.md    — the letter in Persian
  footer.json      — closing message

public/
  photos/          — photo files go here
  music/           — optional background.mp3
```

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Deployed on Vercel. No configuration needed — just connect the repo and it works.
