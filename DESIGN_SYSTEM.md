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

## Contrast targets
- Ink navy on warm ivory: approximately 11.6:1.
- Terracotta on warm ivory: approximately 4.55:1.
- Warm ivory on terracotta: approximately 4.55:1.
- Muted slate on near-white: approximately 4.9:1.
- Dark terracotta on soft terracotta: approximately 4.75:1.

Palette token contrast is regression-tested in `src/colorContrast.test.ts`. This does not verify every component, state or text-size combination and is not a WCAG conformance certification.

## Typography
- Inter/system sans-serif for UI, form controls and scholarship metadata.
- Sentence case and concise headings.
- Scholarship names, award amounts, deadlines and source status remain scannable.

## Layout and interaction
- Desktop sidebar with a mobile navigation fallback.
- Visible keyboard focus, semantic labels and keyboard-operable dialogs.
- Respect reduced-motion preferences.
- Do not communicate eligibility status by colour alone.
- Keep official sources and review notes close to scheme details.

## Content design
- No guaranteed eligibility or fabricated match score.
- Missing eligibility criteria remain unknown / official review.
- Explicitly distinguish closed, recurring, unknown and upcoming cycles.
- Do not call the curated catalogue exhaustive.

## Accessibility and localization
This design specification is not a certification. Validate keyboard flow, screen-reader semantics, zoom, contrast in real UI contexts and mobile behavior. The current UI is English-first; Hindi, Kannada and wider Indian-language localization requires native-speaker review.
