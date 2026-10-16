# Completed portfolio addition

Hydro Compare is published as the seventh project at https://adeticket.com. All six existing entries are preserved. Portfolio source: https://github.com/Caryourday96/personal_site, release 6976eed; Azure workflow 38932511724 succeeded and the live page was verified.

- Title: Hydro Compare
- Canonical URL: https://energy.adeticket.com (verified custom domain; HTTPS active).
- Description: A personal Hydro Ottawa bill comparison dashboard with Green Button XML and CSV imports, customizable themes, interactive charts, and period comparisons.
- Access: Public; no sign-in required. Imported bills stay in the browser and must never appear in the portfolio entry.
- Publish the portfolio update only with the relevant deployment authorization.

# Future integration

- Investigate Hydro Ottawa Green Button provider onboarding and certification before implementing automatic syncing.
- Real Hydro Ottawa export validated: two concatenated feeds, 17 unique bill summaries, provider monetary scaling, unadjusted usage, credits, and Ottawa local dates. Review amounts against PDF bills; unknown differences remain explicitly categorized.

# Expanded dashboard release

- [x] Hourly, daily and monthly readings explorer with separate meter streams, DST-aware grouping and explicit coverage.
- [x] Year-over-year comparisons with per-day normalization and ambiguous matches skipped.
- [x] Local PDF text extraction, editable reviewed figures and original totals preserved.
- [x] Reconciliation panel for line-item differences, selected-meter usage and coverage.
- [x] Full backup/restore including every meter; optional signed-in private online snapshots with conflict protection.
- [x] Standard CAD XML fixtures and access-control tests.
- [ ] Reconcile actual records against owner-provided PDF bills; none supplied yet. Do not mark records verified without user review.
- [ ] Verify named additional utility XML/PDF exports when sample files are supplied. Standards-based fixtures are not provider certification.
- [ ] Automatic utility syncing remains deferred at the owner's request.


