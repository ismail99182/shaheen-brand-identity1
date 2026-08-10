# Shaheen Developers Brand Identity System

A polished, production-ready single-page HTML experience for Shaheen Developers. It combines branding, contact details, social links, WhatsApp outreach, and an interactive brand guidelines system in one fully self-contained file.

## Overview

This project is designed for instant deployment on:
- Vercel
- Netlify
- GitHub Pages

It requires no build step and can be hosted as a static website directly.

## Project Structure

- [index.html](index.html) — Main deployment-ready file
- [shaheen_developers_brand_identity_system.html](shaheen_developers_brand_identity_system.html) — Original source file
- [README.md](README.md) — Project documentation

## Features

- Responsive one-page brand identity experience
- SEO metadata and social-sharing tags
- Inline SVG favicon for instant browser-tab rendering
- Safe external links with `noopener` and `noreferrer`
- Interactive logo mockups and brand system previews
- SVG and PNG export functionality
- AI-inspired studio sections for brand copy, palette generation, image generation, and TTS

## Deployment

### GitHub Pages
1. Upload the project files to a GitHub repository.
2. Open the repository settings.
3. Navigate to Pages.
4. Choose the main branch as the deployment source.
5. Your site will be published at:
   `https://<your-username>.github.io/<repo-name>/`

### Vercel
1. Import the GitHub repository into Vercel.
2. Vercel will detect the static HTML project automatically.
3. Deploy with the default settings.

### Netlify
1. Drag and drop the project folder into Netlify, or connect the GitHub repository.
2. Deploy with the default static-site configuration.

## Main JavaScript Functions

The embedded script contains several interactive functions:

- `scrollToSection(id)` — Smoothly scrolls to a target section.
- `replayHeroAnimation()` — Replays the hero SVG animation.
- `toggleHeroGrid()` — Toggles the construction-grid overlay.
- `selectConcept(conceptNum)` — Switches between brand concept previews.
- `setTheme(mode)` — Changes the layout preview theme between color, white, black, and monochrome.
- `switchMockupTab(tabId)` — Switches between mockup views.
- `downloadSVG(svgId, filename)` — Downloads an SVG asset.
- `downloadPNG(svgId, filename, width, height)` — Renders and downloads a PNG asset.
- `copySVG(elementId)` — Copies SVG markup to the clipboard.
- `copyColor(hex)` — Copies a hex color value to the clipboard.
- `showToast(msg)` — Displays a toast notification.
- `switchAiTab(tabName)` — Switches between AI Studio tabs.
- `generateBrandCopy()` — Generates brand copy using Gemini.
- `generateAiPalette()` — Generates a palette using Gemini JSON output.
- `generateAiImage()` — Generates imagery using Imagen.
- `generateAiTts()` — Generates audio using Gemini TTS.

## Notes

- The page uses CDN-hosted Tailwind CSS, Google Fonts, and Font Awesome for fast loading.
- No local build tools or package installation are required.
- The site is fully self-contained and ready for static hosting.

## Contact

Shaheen Developers
- Email: shaheensdevelopers@gmail.com
- Phone: +92 330 4369621
- GitHub: https://github.com/ismail99182
- LinkedIn: https://www.linkedin.com/in/muhammad-ismail-899b7637b
- WhatsApp: https://wa.me/923304369621
