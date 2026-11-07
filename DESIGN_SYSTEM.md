# Grantly Design System

## Brand purpose
Grantly should feel like a trustworthy academic guide: calm, accessible, hopeful and practical. Education and funding information must be the visual priority. Avoid decorative gradients, excessive card nesting, overly animated UI and visual noise.

## Three anchor colours

| Token | Hex | Role |
|---|---|---|
| Forest Green | `#183D2B` | Brand, primary text, navigation and primary actions |
| Parchment | `#F7F4EA` | Page canvas and warm neutral surfaces |
| Academic Gold | `#C89B3C` | Progress, highlights and limited emphasis |

Supporting colours are tints, shades and neutrals—not new brand anchors:
- Forest surface: `#2F493B`
- Soft parchment: `#E8E5D7`
- Pale gold: `#F3E9CF`
- Body muted text: `#647066`
- Contrast-safe dark gold text: `#78551A`

## Contrast
- Primary forest text on parchment exceeds WCAG AA contrast for normal text.
- White text on forest surfaces has high contrast.
- Academic gold on forest is suitable for small highlights; do not use gold as ordinary body text on parchment.
- Dark gold (`#78551A`) is used for text on pale gold.
- Automated contrast tests are regression checks, not a formal WCAG conformance certification.

## Typography
- Inter/system sans-serif for UI, forms and scholarship metadata.
- Headings use restrained weight and concise sentence case.
- Scholarship titles, award amounts, source and application status should be easy to scan.

## Layout and interaction
- Desktop navigation collapses to mobile navigation.
- Touch targets, visible keyboard focus and reduced-motion behavior are required.
- Status must not be communicated by colour alone.
- Avoid hiding eligibility limitations behind hover-only controls.
- Use source and review information near the scholarship content.

## Content design
- No guaranteed eligibility claims or fake recommendation scores.
- Unknown eligibility stays unknown / official review.
- Use “check current notice” when live availability is not confirmed.
- Explain why an application needs official verification.
- Do not label the catalogue exhaustive.

## Accessibility
The design specification is not a certification. Validate keyboard flow, dialog focus, screen-reader semantics, zoom, mobile layouts and real assistive technologies before broad public rollout.
