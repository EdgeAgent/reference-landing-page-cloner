---
name: reference-landing-page-cloner
description: Clone a public landing page into a polished, responsive React/WebDev experience. Use when the user provides a website URL or visual reference and asks to recreate, clone, mirror, or build an overview of the page.
---

# Reference Landing Page Cloner

Recreate the **experience and visual hierarchy** of a public landing page without copying its implementation. Treat the supplied reference as the ground-truth source for layout, tone, content sequence, and brand recognition. Build a working frontend, not a static screenshot.

## Workflow

1. Inspect the reference.
2. Define the clone scope and design system.
3. Initialize or inspect the WebDev project.
4. Gather, generate, and document visual assets.
5. Implement the page in responsive React components.
6. Run type-check/build validation and visual verification.
7. Save one final checkpoint and deliver it.

## 1. Inspect the Reference

Open every URL supplied by the user with the browser. Review the first viewport and the full scroll sequence. Record the following in `ideas.md`:

| Area | Record |
| --- | --- |
| Narrative | Hero promise, proof sections, product story, final CTA |
| Visual language | Background treatment, imagery, color temperature, contrast |
| Typography | Display/body pairing, case, scale, tracking, line-height |
| Components | Header, buttons, feature cards, product frames, footer |
| Motion | Scroll reveals, hover states, ambient movement, navigation behavior |
| Responsive behavior | Mobile stacking, navigation changes, crop and type changes |

Use the reference page’s visible copy as source material, but do not invent customer reviews, ratings, or testimonials. Do not claim that copied statistics are newly verified; preserve them only when the task is explicitly a visual clone.

If the reference is unavailable, ask the user for a screenshot or a working URL before proceeding. Do not guess brand-specific assets.

## 2. Define the Design System

For a replication task, skip unrelated style exploration and declare the reference-matched direction directly. Write a concise `ideas.md` containing:

- Design read and audience.
- Narrative role, viewing distance, visual temperature, and capacity check.
- Color philosophy and concrete tokens.
- Typography pairing and hierarchy rules.
- Layout paradigm and signature motifs.
- Interaction and animation rules.
- Brand essence, voice, and logo/mark treatment.
- Content sequence to reproduce.

Use the question: **Does this choice reinforce or dilute the reference’s visual language?** Keep the answer visible at the top of every edited CSS, component, and page file.

Prefer asymmetric editorial compositions over generic centered SaaS layouts. Avoid default Inter typography, purple gradients, uniform rounded cards, and unrelated dashboard patterns unless the reference clearly uses them.

## 3. Initialize the Project

For a new website, initialize a WebDev static project before making detailed architecture decisions. Read the scaffold README after initialization and follow its asset and file-placement rules. Keep the implementation frontend-only unless the user explicitly requests authentication, data, payments, or other backend functionality.

Use a page-level component and small reusable primitives for the header, buttons, store links, feature cards, and footer. Keep navigation escape routes available on every route.

## 4. Gather and Generate Assets

Follow this asset order:

1. Source the official logo, favicon, screenshots, and product imagery from the reference’s public site or press resources.
2. Download public reference assets into `/home/ubuntu/webdev-static-assets/` and upload them to durable WebDev storage.
3. Generate original replacement art only when the source asset is unavailable, unsuitable for reuse, or the user asks for an original interpretation.
4. Generate prominent hero/closing art and a standalone icon early, before implementing the page.

Document all source and generated assets in `brand-spec.md`. Use durable returned storage URLs in code; never reference local filesystem paths from the frontend. Keep assets out of the project’s `client/public` directory except for tiny configuration files.

For generated imagery, specify purpose, subject, composition, safe area for text, style, aspect ratio, and exclusions. Use one reference image when several generated assets need a consistent visual language. Keep text out of generated backgrounds unless the user explicitly requires a text-bearing final image.

## 5. Implement the Page

Build the page in the reference’s narrative order. Typical sections include:

- Fixed or sticky header with brand mark, utility links, and primary action.
- Hero with atmospheric visual, display wordmark, concise promise, and paired CTAs.
- Product availability or device showcase section.
- Alternating product-proof feature cards or editorial modules.
- Closing community/CTA stage with a distinct visual asset.
- Compact footer with grouped links and legal labels.

Use lowercase-led copy, distinctive eyebrows, and spacious section stages when the reference uses them. Use meaningful `alt` text for product imagery and empty `alt` for purely decorative orbit art. Make CTAs keyboard-reachable and ensure placeholder flows show a concise toast rather than silently doing nothing.

Implement responsive breakpoints deliberately:

- Desktop: preserve the wide visual stage and asymmetric device composition.
- Tablet: reduce stage height, collapse utility navigation, and retain the major hierarchy.
- Mobile: stack content, open a compact menu, reduce device overlap, and keep buttons comfortably tappable.

Add motion from the start: short ease-out control feedback, modest hover elevation, staged reveal-on-scroll, and slow ambient drift. Respect `prefers-reduced-motion` by disabling non-essential animation.

## 6. Validate

Run the project’s type-check and production build commands. Resolve compile errors before visual review. Capture representative desktop and mobile previews, preferably the full page, and inspect:

| Check | Pass condition |
| --- | --- |
| Contrast | Text remains readable over every background and image crop |
| Hierarchy | The eye lands on the hero promise and primary CTA first |
| Assets | Every image loads from a durable URL and has appropriate alt text |
| Responsive layout | No clipping, overflow, or unreadably small copy at mobile width |
| Interaction | Navigation anchors, external store links, menus, and CTA feedback work |
| Motion | Animation is restrained and reduced-motion friendly |
| Build | Type-check and production build complete successfully |

Do not use a visual style reviewer for strict reference-replication work unless the user requests an independent critique; fidelity to the reference takes priority.

## 7. Deliver

Save exactly one final checkpoint after the first complete delivery. Include the checkpoint as the primary deliverable. Summarize what was implemented, mention validation performed, and state any intentionally placeholder flows. End with a few concrete next-step suggestions such as connecting real auth, adding dedicated subpages, or replacing temporary product frames with approved production screenshots.

## Guardrails

- Do not copy private source code or bypass authentication.
- Do not fabricate reviews, ratings, testimonials, endorsements, or customer stories.
- Do not claim that a reference site’s business metrics are current unless independently verified.
- Do not deploy or publish on the user’s behalf; provide the saved project checkpoint and direct the user to the project’s Publish control.
- Do not put large images, videos, or fonts inside the project directory.
- Prefer one substantial implementation pass over many tiny style tweaks.
