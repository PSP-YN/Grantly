# Grantly Design System

## Brand direction
Grantly is a student-first education funding product. The visual language should feel academic, trustworthy, warm and contemporary. The UI prioritizes scholarship details, eligibility limitations and next steps over decoration.

## Three anchor colours

| Token | Hex | Role |
|---|---|---|
| Ink Navy | `#17324D` | Brand, navigation, hierarchy and primary text |
| Warm Ivory | `#F6F1E6` | Main canvas and neutral surfaces |
| Terracotta | `#B05230` | Primary accent, actions and selective emphasis |

Supporting colours are neutrals and tints/shades:
- Slate: `#35485A`
- Muted text: `#66717D`
- Soft terracotta: `#F2E1D8`
- Dark terracotta: `#9D4B2E`
- Near-white: `#FFFEFA`

Do not add a fourth brand anchor without revisiting the palette.

## Contrast
- Ink navy on warm ivory: approximately 11.6:1.
- Terracotta on warm ivory: approximately 4.55:1.
- Warm ivory on terracotta: approximately 4.55:1.
- Muted slate on near-white: approximately 4.9:1.
- Dark terracotta on soft terracotta: approximately 4.75:1.

Palette contrast is regression-tested in `src/colorContrast.test.ts`. Automated checks are not a formal WCAG certification.

## Typography
- Inter/system sans-serif for UI, forms and scholarship metadata.
- Headings use restrained weight and concise sentence case.
- Scholarship titles, award amounts, source and application status should be easy to scan.

## Layout and interaction
- Desktop navigation collapses to mobile navigation.
- Touch targets, visible keyboard focus and reduced-motion behavior are required.
- Status must not be communicated by color alone.
- Avoid hiding eligibility limitations behind hover-only controls.
- Keep source and review information near scholarship content.

## Content design
- No guaranteed eligibility claims or fake recommendation scores.
- Unknown eligibility stays unknown / official review.
- Use “check current notice” when live availability is not confirmed.
- Explain why an application needs official verification.
- Do not label the catalogue exhaustive.
