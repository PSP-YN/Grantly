# Grantly — judging strategy and evidence

## Challenge fit

The GRANTLY prompt asks for a unified scholarship discovery and management experience. Grantly presents one connected workflow: profile → discovery → eligibility review → shortlist → document preparation → application stage tracking → official provider handoff.

## Rubric mapping

| Judging dimension | What Grantly demonstrates | Evidence / judge action |
|---|---|---|
| UI / UX | Clear information hierarchy, ink navy / warm ivory / terracotta academic palette, consistent cards, responsive shell and purposeful empty states. | Open Discover; compare desktop and 320px mobile layout. |
| Functionality | Search, category filtering, sorting, save, profile editor, dynamic criteria checks, application stages, document checklist and JSON export. | Run the walkthrough in SUBMISSION.md. |
| Creativity | Explainable eligibility screening. No fabricated percentages. Missing values remain unknown; incomplete schemes require official review. | Edit the profile and show CSSS rule outcomes changing. |
| Problem alignment | Discovery and application preparation are connected rather than separate features. | Save a scheme, add it to tracker, check documents and change stage. |
| Code quality | React + TypeScript, typed catalogue, isolated matching module, defensive localStorage parsing, data migration, lint/typecheck/tests and CI. | Review src/matching.ts, src/data.ts, src/dataSupplement.ts, src/catalog.ts and GitHub Actions workflow. |
| Responsiveness / accessibility | Mobile navigation, semantic landmarks, labelled controls, focus-visible outlines, dialog focus trap/restoration, Escape dismissal, reduced-motion CSS and browser contrast checks. | Keyboard through a dialog; inspect 320px layout. |

## Strongest demo sequence (about 3 minutes)

1. Start on Discover and state the problem: students must search multiple scheme pages and separately manage applications.
2. Open the PM-USP CSSS detail panel. Explain that the assessment is based on five explicit, self-reported checks, not an opaque AI percentage.
3. Edit the profile: choose a different income band or fresh/renewal route. Return to Discover and show the assessment change.
4. Add the scheme to the tracker. Mark the marksheet and income certificate as prepared.
5. Change the application stage to Submitted. Navigate away and back to show local persistence.
6. Export the workspace JSON and open the official source.
7. Explain the boundary: the official portal makes the final eligibility decision and receives the application.

## Questions judges may ask

**Why no backend?** This is a frontend mission. The solution demonstrates the full user journey without violating the frontend-only scope or adding unrequested infrastructure.

**Are the match results guaranteed?** No. The engine only evaluates the explicitly encoded rules against self-reported profile values. Unknown or incomplete scheme rules remain in official-review state.

**Are deadlines real-time?** No. The app labels source review dates and explicitly distinguishes current, expired, unknown and next-cycle information; verify the live provider page before applying. Users must verify the live provider page before applying.

**Where is student data stored?** In the current browser's localStorage. There is no remote transmission. It is not encrypted or authenticated, so sensitive documents and identity numbers must not be entered.

**Can it become a real product?** Yes, but a commercial service would require verified data operations, authentication, backend persistence, access control, secure document handling, privacy/legal review, monitoring and operational support. Those are intentionally outside this frontend submission.

## Avoid these judging mistakes

- Do not call the profile assessment an eligibility guarantee.
- Do not claim real-time scheme data or automatic application submission.
- Do not describe the frontend demo as a complete production SaaS.
- Do not show personal identity numbers, certificates or bank details.
- Do not spend the demo time on decorative animation; demonstrate the workflow and explainable matching.
