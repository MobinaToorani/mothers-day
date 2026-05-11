# 🌸 Mother's Day Website

A beautiful, bilingual (English + Persian/Farsi) Mother's Day tribute site built with Next.js and Tailwind CSS.

---

## How to Customize

Everything you need to edit is in the `/content/` folder and `/public/photos/`. You **do not need to touch any code**.

---

### 1. Replace Photos

1. Add your photos to `/public/photos/`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: at least 800×600px for good quality
   - Example filenames: `photo1.jpg`, `photo2.jpg`, etc.

2. Open `content/photos.json` and update the `"image"` field to match your filenames:

```json
[
  {
    "id": 1,
    "image": "/photos/photo1.jpg",
    "caption_en": "Our favorite memory together",
    "caption_fa": "بهترین خاطره‌ی ما"
  }
]
```

3. For the **hero featured photo**, replace `/public/photos/featured.jpg` with your chosen photo.
   - Or update the `"featured_photo"` field in `content/hero.json`.

---

### 2. Edit the Hero Section

Open `content/hero.json`:

```json
{
  "title_en": "Happy Mother's Day",
  "title_fa": "روز مادر مبارک",
  "subtitle_en": "To the woman who gave me the whole world",
  "subtitle_fa": "...",
  "message_en": "Your short message here",
  "message_fa": "...",
  "featured_photo": "/photos/featured.jpg",
  "scroll_button_en": "Explore Our Memories",
  "scroll_button_fa": "خاطرات ما را کاوش کنید"
}
```

---

### 3. Edit the Letter

Open `content/message-en.md` for the English letter.
Open `content/message-fa.md` for the Persian letter.

These are plain text files — just type your words. You can use:
- A blank line between paragraphs
- `*italic text*` for italics
- `**bold text**` for bold

---

### 4. Edit the "Things I Love" Cards

Open `content/reasons.json` and update each reason:

```json
{
  "id": 1,
  "icon": "🤗",
  "reason_en": "Your Warm Hugs",
  "reason_fa": "آغوش گرمت",
  "description_en": "Every hug feels like coming home.",
  "description_fa": "هر آغوش‌ات مثل بازگشت به خانه است."
}
```

You can add or remove cards freely.

---

### 5. Edit the Footer

Open `content/footer.json`:

```json
{
  "closing_en": "With all my love, always and forever",
  "closing_fa": "با تمام عشقم، همیشه و برای همیشه",
  "made_by_en": "Made with love by your daughter",
  "made_by_fa": "ساخته شده با عشق توسط دخترت",
  "year": "2025"
}
```

---

### 6. Add Background Music (Optional)

1. Find a soft piano/instrumental MP3 (royalty-free)
2. Name it `background.mp3`
3. Place it in `/public/music/`

The music player button will appear in the bottom-right corner. It is **off by default** — your mom controls it.

---

### 7. Change Colors

Open `tailwind.config.ts` and find the `colors` section. The main palette:

| Name | Default | What it controls |
|------|---------|-----------------|
| `blush` | Pink tones | Accents, borders, particles |
| `lavender` | Purple tones | Highlights, gradients |
| `gold` | Warm gold | Decorative elements, icons |
| `cream` | Warm white | Background |
| `petal` | Warm brown | Text colors |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:3000

---

## Deploy to Vercel (One Click)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no configuration needed

Your site will be live in about 60 seconds.

---

## File Structure

```
/content              ← Edit these to personalize
  hero.json           ← Hero section text
  photos.json         ← Photo gallery data
  reasons.json        ← "Things I Love" cards
  message-en.md       ← Letter in English
  message-fa.md       ← Letter in Persian
  footer.json         ← Footer messages

/public
  /photos             ← Add your photos here
  /music              ← Add background.mp3 here (optional)

/src
  /app                ← Next.js app (no editing needed)
  /components         ← UI components (no editing needed)
  /content            ← Context providers (no editing needed)
```
