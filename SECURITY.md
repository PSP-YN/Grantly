# Security Policy

## Scope

Grantly is a frontend-only hackathon application. It has no authentication, backend API, database, server-side processing or remote profile transmission.

## Reporting

Report suspected vulnerabilities privately to the repository owner. Include a reproduction, affected component and impact. Do not publish credentials, personal records or exploit details in public issues.

## Current safeguards

- No API keys, tokens or secrets are shipped to the browser.
- Profile text is length-limited and normalized before persistence.
- Browser storage is parsed defensively; unknown scholarship IDs, stages and checklist items are discarded.
- External source destinations are fixed HTTPS URLs and opened with noopener,noreferrer.
- React renders user text as text rather than interpreting it as HTML.
- No profile data is transmitted to a remote service.

## Known limitations

Browser localStorage is not an authenticated or encrypted data store. Income bands, category and academic details are personal information; they are optional and remain in this browser. Do not enter identity numbers, bank details, certificates or other sensitive records. A commercial service would require a threat model, authentication, authorization, server-side validation, encrypted transport and storage, audit logging, retention controls, incident response and a privacy/legal review.
