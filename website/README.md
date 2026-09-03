# FOMO Family Clone Website

This directory contains the React/WebDev source for the fomo.family-inspired landing-page clone. The implementation includes the responsive page layout, dark orbital visual system, hero and closing scenes, product showcase, feature proof cards, mobile navigation, CTA interactions, and footer links.

## Run locally

From this directory, install dependencies and start the Vite development server:

```bash
pnpm install
pnpm dev
```

The project is frontend-first and uses the existing WebDev template configuration. Image references use durable `/manus-storage/` URLs from the original WebDev project, so the source is intended to run within that project environment or after replacing those URLs with your own hosted assets.

## Main files

| File | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Main landing page and interactions |
| `client/src/index.css` | Visual system, layout, responsive rules, and motion |
| `client/index.html` | HTML shell, metadata, favicon, and font imports |
| `ideas.md` | Reference-matched design direction |
| `brand-spec.md` | Asset inventory and visual tokens |
