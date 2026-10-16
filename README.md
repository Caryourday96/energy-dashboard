# Energy Dashboard / Hydro Compare

Public app: https://energy.adeticket.com

A browser-local electricity bill comparison dashboard. Imports Hydro Ottawa Green Button billing summaries (including concatenated `.xml.txt` exports), generic supported Green Button summaries, CAD CSV records, or manual entries. Visitors review values before saving. No account or utility password is required; imported financial records remain in browser local storage and are not included in the source or deployment.

## Run locally

Serve `dist/` using any static web server. There are no runtime dependencies or build step. Keep all three application scripts in their declared order.

Run `node --check dist/app.js`, `node --check dist/enhancements.js`, `node --check dist/home-studio.js`, and `node check.cjs` for the local syntax and focused CSV/date/calculation checks.

## Dashboard choices

- Home Studio: reference-inspired architectural hero, orange fine-line charts, daily-usage gauge and billing heatmap.
- Energy Studio, Green Analytics, Command Centre, and Classic Overview are retained.
- The dashboard switcher and Shuffle on open toggle are at the top. Shuffle chooses a different layout on each full page load; disabling it preserves the selected layout.
- Range options: last 12 bills, last 6 bills, latest bill, and all bills.

## Data limitations

Provider-specific Hydro Ottawa scaling is applied to the billing detail fields. Always review imported totals and usage against PDF bills; reported amounts may include balances and adjustments. Unclassified breakdown differences are shown explicitly. Other provider XML formats require compatibility checks; CAD CSV/manual entry is provider-independent. Interval-only XML is not converted into invented bill totals.

Browser storage is separate for each hostname and device. Export CSV backups before clearing browser data or switching devices. CSV export preserves billing dates, kWh, and totals; detailed charge categories are available from XML imports.

## Hosting and source

This GitHub repository is the owner's source repository. Publication through Sites also maintains its required managed source repository and uses `.openai/hosting.json`. No Azure compute or new DNS zones are provisioned for this app. The existing Azure DNS zone points energy.adeticket.com to Sites.

## Illustration

`dist/house-studio.png` was made with the built-in Image Generation tool. Prompt: “Premium architectural product render of a modern two-storey Ottawa home, pale oak and white plaster, charcoal pitched roof, large windows and glass balcony, soft daylight, isolated on white, wide composition, no people, text, logos, or solar equipment.” The asset is illustrative and does not represent a user's property.

## Portfolio

Hydro Compare is listed on https://adeticket.com alongside the six existing projects, with its canonical URL, public/no-sign-in access, and browser-local privacy note.
