# FOMO Family Clone — Ground-Truth Design Spec

This is a reference-matched recreation of the public homepage at https://fomo.family/. Fidelity to the source reference takes priority over alternative design exploration.

## Design Read

- **Artifact:** High-conversion crypto trading landing page / product overview.
- **Audience:** Crypto-curious traders who want fast, social, low-friction market participation.
- **Visual language:** Dark orbital sci-fi campaign art, giant soft white lowercase display type, electric indigo CTA, oversized negative space, and compact uppercase utility labels.
- **Mode:** Redesign · Preserve / reference clone.
- **Visual variance:** 6/10 — structured source hierarchy with an editorial, space-campaign treatment.
- **Motion intensity:** 5/10 — gentle hero drift, reveal-on-scroll, and tactile CTA feedback.
- **Information density:** 4/10 — few words, strong visual pacing, large section transitions.
- **Asset dependence:** 9/10 — the hero, device mockups, and orbital imagery are the primary brand recognition carriers.
- **Brand fidelity:** 9/10 — match the source site’s tone, sequence, and visual proportions without copying its proprietary implementation.

## Four Positioning Questions

- **Narrative role:** The homepage is a dramatic brand-to-product journey: hero promise → web availability → social trading feature proof → onboarding simplicity → final community CTA.
- **Viewing distance:** Laptop-first but mobile-friendly; large display type should hold at both 10 cm phone distance and 1 m laptop distance.
- **Visual temperature:** Energized, aspirational, and slightly irreverent rather than corporate or technical.
- **Capacity check:** The source favors one message at a time. Each section gets a distinct visual stage and generous vertical breathing room.

## Chosen Direction

### Design Movement
Contemporary space-age editorial, borrowing the restraint of a premium launch campaign and the kinetic energy of internet-native crypto culture.

### Core Principles

1. **Big promise, few words:** Let the headline and atmosphere carry the story.
2. **Orbital pacing:** Use curved forms, staggered layouts, and long vertical scroll beats to mimic movement around a planet.
3. **Dark canvas, luminous signals:** Near-black surfaces support white type and electric indigo interaction cues.
4. **Proof in product frames:** Product UI imagery appears as large, tactile artifacts instead of dense explanatory copy.

### Color Philosophy
The page lives on a near-black indigo canvas (#06050F) so the luminous Earth edge, white typography, and electric indigo buttons feel like signals cutting through space. Blue-violet is the ownable action color; muted periwinkle is reserved for supporting copy and eyebrows so the hierarchy remains calm.

### Layout Paradigm
A vertical narrative with uneven stage heights and deliberately off-center product frames. The hero is centered for impact, the web availability section uses a diagonal device composition, and the feature proof section switches to a dense editorial split where copy and artifact alternate.

### Signature Elements

- Curved orbital rings and partial circles that enter and exit the viewport.
- Small uppercase blue eyebrows with wide tracking.
- Rounded translucent product cards and device frames that sit like satellites on the page.

### Interaction Philosophy
Interactions should feel immediate and a little tactile. CTAs brighten and lift by a few pixels, cards hover with a subtle orbital shift, and navigation anchors glide rather than jump. Avoid complex effects that compete with the message.

### Animation
Use 180–280ms ease-out transitions for controls, 600–900ms staged reveal for sections, and slow 16–24s ambient drift for orbit lines and hero light. Respect `prefers-reduced-motion` by freezing ambient movement and using instant reveals.

### Typography System
Use **Space Grotesk** for the wordmark, headlines, and UI labels, with **DM Sans** for supporting copy and utility text. Headlines are lowercase, tight, and heavy with `letter-spacing: -0.06em`; eyebrows are uppercase at 11–12px with `letter-spacing: 0.16em`; body copy is 16–20px with relaxed line-height.

### Brand Essence
**A social-first crypto trading app for people who want to make their move before the moment passes.** Personality: bold, social, kinetic.

### Brand Voice
Headlines are lowercase, short, and declarative. CTAs are direct and slightly competitive. Microcopy sounds like a friend who already knows the move.

Example lines:

- “where traders become legends.”
- “open a trade on your phone. close it on your desktop.”

### Wordmark & Logo
Use the official source favicon/mark where available, paired with a lowercase `fomo` wordmark in Space Grotesk. The standalone icon should be a compact orbital dot-and-ring mark and remain visible at header and favicon scale.

### Signature Brand Color
**Orbit Indigo — #6463F5**, a cool electric indigo that reads as an active signal against the near-black space canvas.

## Content Sequence to Reproduce

1. Header: wordmark, App Store badge, Google Play badge, Login.
2. Hero: oversized `fomo`, headline, subhead, Start trading / Download app.
3. Web availability: `NOW AVAILABLE ON WEB`, “trade from anywhere. never lose a beat.”, device composition.
4. Social-first trading: “never miss out again”, six product proof tiles: leaderboard, feed, alerts, easy onboarding, zero complexity, one click to buy.
5. Closing CTA: astronaut / orbital art, “a trading app for the rest of us”, social proof line, dual CTAs.
6. Footer: wordmark and compact About / Social / Legal link groups.

## Style Decisions

- Treat this document as the source of truth for the clone.
- Prefer real source imagery when available; use generated assets only to fill gaps or keep the visual language coherent.
- Keep the presentation dark, lowercase-led, and spacious. Do not introduce purple gradients, generic SaaS cards, or centered dashboard layouts.
