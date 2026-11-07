# Grantly Design System

## Brand direction
Grantly is a student-first education funding product. The visual language should feel academic, trustworthy, warm and contemporary. Scholarship facts, eligibility limits and next steps remain the visual priority.

## Three anchor colours

| Token | Hex | Role |
|---|---|---|
| Ink Navy | `#17324D` | Brand, navigation, hierarchy and primary text |
| Warm Ivory | `#F6F1E6` | Main canvas and neutral surfaces |
| Terracotta | `#B05230` | Primary accent, actions and selective emphasis |

Supporting neutrals and tints:
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

These anchor pairs are regression-tested in `src/colorContrast.test.ts`. The test does not validate every UI component or certify WCAG conformance.

## Typography and layout
- Inter/system sans-serif for UI, labels and scholarship metadata.
- Sentence case, concise headings and scannable source/status labels.
- Desktop sidebar with mobile navigation fallback.
- Visible keyboard focus and touch-friendly spacing.
- Reduced-motion support.
- Status must not rely on colour alone.

## Content and accessibility
- Eligibility checks are not award guarantees.
- Unknown criteria remain unknown / official review.
- Deadline status should distinguish explicit dates, closed cycles and unknown calls.
- Native-reviewed Hindi, Kannada and wider Indian-language localization remains a product requirement.
- This design system is not a formal accessibility certification.
