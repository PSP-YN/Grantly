# Security Policy

## Scope

Grantly is currently a browser-only prototype. It has no authentication, backend API, database, server-side processing, analytics or remote profile transmission. This policy describes the current repository, not a production financial-aid service.

## Reporting

Report suspected vulnerabilities privately to the repository owner. Include a reproduction, affected component and impact. Do not publish credentials, personal records or exploit details in public issues.

## Current safeguards

- No API keys, tokens or secrets are shipped to the browser.
- Profile text is normalized and length-limited before persistence.
- Browser storage is parsed defensively; unknown scholarship IDs, stages and checklist items are discarded.
- External source destinations are fixed HTTPS URLs and opened with safe external-link attributes.
- React renders user text as text rather than interpreting it as HTML.
- No profile data is transmitted to a remote service.\n- Vercel response headers include a Content Security Policy, nosniff, frame protection, referrer policy, permissions policy, COOP and HSTS.

## Known limitations

Browser localStorage is not an authenticated or encrypted data store. Income bands, category and academic details are personal information; they are optional and remain in this browser. Do not enter identity numbers, bank details, credentials, certificates or other sensitive records.

Response headers are defense-in-depth for the static site; they do not make browser localStorage encrypted or the product compliant with any particular privacy law.\n\nA real multi-user product would require a threat model, authentication, authorization, server-side validation, secure document handling, encryption in transit and at rest, audit logging, retention/deletion controls, monitoring, backups, incident response and privacy/legal review. These controls are not currently implemented.
