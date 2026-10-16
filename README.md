# Energy Dashboard / Hydro Compare

Public app: https://energy.adeticket.com

A public electricity bill comparison dashboard with browser-local use and optional private online snapshots. Imports Hydro Ottawa Green Button bills and hourly readings (including concatenated `.xml.txt` exports), standard CAD Green Button summaries, CSV bills, or manual entries. No utility password is collected. Sign-in is required only for optional cross-device storage, and records are uploaded only when the visitor chooses Save online.

## Run locally

The editable frontend is in `public/`; the root HTML and authenticated storage endpoints are served by the supplied Sites Vinext integration. Run `npm install`, `npm run build`, and `npm start`. Generated `dist/` is ignored. D1 migrations are in `drizzle/`; never modify applied migrations. The local test runtime included with the starter supports May 2026 compatibility dates; production uses 2026-10-16. For local backend previews with that runtime, pass `--compatibility-date 2026-05-22` to Wrangler. Apply local migrations separately from production.

Run `npm test` and `npx tsc --noEmit`. To include the optional private real-export test, set `HYDRO_TEST_FILE` to a locally available export path. No private export or real bill values are committed. Tests cover standard-unit conversion, Ottawa DST hours, year matching, reconciliation, PDF candidate extraction, user isolation, origin checks, stale-write conflicts and body validation.

## Dashboard choices

- Home Studio: reference-inspired architectural hero, orange fine-line charts, daily-usage gauge and billing heatmap.
- Energy Studio, Green Analytics, Command Centre, and Classic Overview are retained.
- The dashboard switcher and Shuffle on open toggle are at the top. Shuffle chooses a different layout on each full page load; disabling it preserves the selected layout.
- Range options: last 12 bills, last 6 bills, latest bill, and all bills.

## Data limitations

Provider-specific Hydro Ottawa scaling is applied to bill fields. The PDF review reads text locally, suggests figures and requires explicit confirmation of billing dates and amounts. Scanned or unfamiliar PDFs can be entered manually. Original reported figures are retained. Known charge categories, unexplained differences, meter-usage differences and coverage are shown. No actual PDF bills were supplied during development, so provider-specific PDF extraction still needs validation against the owner's bills.

Hourly, daily and monthly charts use imported readings. Delivered/net flows stay separate, repeated DST hours remain separate, and missing periods are not filled or extrapolated. Year-over-year bills are matched by start month and normalized per day; ambiguous prior months are skipped. Tariff, weather and balance differences are not inferred. Generic CAD billing summaries were checked with standards-based synthetic fixtures; other named utilities are not claimed as tested without sample files.

Browser storage is separate for each hostname and device. Full JSON backups include bills, reviews and all imported meter streams. CSV preserves dates, kWh and totals only. Optional online snapshots save bills plus the selected meter under the platform's authenticated user ID. Visitors explicitly save/load/delete; there is no automatic upload. Optimistic revisions prevent stale devices from silently overwriting newer snapshots. Online deletion does not clear local copies; signing out leaves local data on the device. Clear this device removes local bills and interval readings.

## Hosting and source

This GitHub repository is the owner's source repository. Sites also maintains its required managed source repository. The public app uses a Sites Worker and D1 binding `DB` for opt-in private snapshots. Requests require authenticated platform identity; APIs do not accept an account ID from request bodies. There is no public data listing or sharing feature. No Azure compute or new DNS zones are provisioned. The existing Azure DNS zone points energy.adeticket.com to Sites.

## Illustration

`public/house-studio.png` was made with the built-in Image Generation tool. Prompt: “Premium architectural product render of a modern two-storey Ottawa home, pale oak and white plaster, charcoal pitched roof, large windows and glass balcony, soft daylight, isolated on white, wide composition, no people, text, logos, or solar equipment.” The asset is illustrative and does not represent a user's property.

## Portfolio

Hydro Compare is listed on https://adeticket.com alongside the six existing projects, with its canonical URL, public/no-sign-in access, and browser-local privacy note.
