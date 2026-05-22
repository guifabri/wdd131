# WDD131 Weekly Sprint Plan

Owner: Erick (`guifabri`)
Repository: `wdd131`
Tracking Start Date: 2026-05-21

## Sprint Framework

Cadence: 1 sprint per week (W01-W07)
Primary verification: Official BYUI audit tools for W01-W05, manual QA for W06-W07.
Definition of Done (global):
- Weekly page(s) implemented and published on GitHub Pages.
- Smoke test completed locally.
- Week checklist reviewed.
- Audit executed (W01-W05) and result logged in `docs/audit-status.md` and `docs/audit-results.csv`.
- If audit fails, remediation entry is added and tracked to re-test.

## Weekly Sprint Backlog

### W01 Sprint - Home Page
Target page: `index.html`
Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w01-homepage.html
Goals:
- Confirm required structure (header/main/footer/nav), metadata, local images, footer dynamic dates.
- Ensure GitHub Pages URL is up and points to current version.
DoD:
- W01 audit returns Pass.
Risks:
- Missing/invalid metadata fields.
- Footer JS not detected by audit.

### W02 Sprint - Picture Album
Target page: `temples.html`
Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w02-picture-album.html
Goals:
- Validate responsive menu behavior, gallery structure, lazy-loaded images, and required JS interactions.
DoD:
- W02 audit returns Pass.
Risks:
- Nav/button semantics or expected labels differ from grader rules.

### W03 Sprint - Country Page
Target page: `place.html`
Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w03-place.html
Goals:
- Verify country content, weather section, wind chill calculation logic, and required footer dynamics.
DoD:
- W03 audit returns Pass.
Risks:
- Weather/windchill output format not matching expected audit checks.

### W04 Sprint - Filtered Temples
Target page: `filtered-temples.html`
Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w04-picture-album.html
Goals:
- Confirm temple data array, dynamic card rendering, all required filters, lazy loading, and menu behavior.
DoD:
- W04 audit returns Pass.
Risks:
- Filter criteria edge cases (year parsing, thresholds, empty sets).

### W05 Sprint - Product Review Form
Target pages: `form.html`, `review.html`
Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w05-form.html
Goals:
- Confirm form fields/validation, dynamic product list population, localStorage review counter, and confirmation flow.
DoD:
- W05 audit returns Pass.
Risks:
- Required fields or querystring/localStorage handling not matching expected grader rules.

### W06 Sprint - Final Project
Target pages: `project/index.html`, `project/discover.html`, `project/join.html`, `project/siteplan.html`
Audit: No official weekly audit listed in WDD131 index.
Goals:
- Validate responsive layout, multi-page navigation, dynamic rendering, and localStorage behavior.
- Run manual CLO-aligned QA + Lighthouse checks (Accessibility, Best Practices, SEO).
DoD:
- Manual QA checklist completed and documented.
Risks:
- Inconsistent behavior across pages due to shared script logic.

### W07 Sprint - Final Exam Prep
Target: Exam preparation (non-repo deliverable)
Audit: No technical audit tool in weekly index.
Goals:
- CLO review checklist completed.
- Confirm W01-W06 artifacts are stable before exam week.
DoD:
- Study checklist marked complete.
Risks:
- Carry-over unresolved issues from earlier weeks.

## Audit Failure Remediation Standard

When an audit returns Fail:
1. Classify failure:
- HTML structure
- Path/link/reference
- Metadata/head requirements
- Footer dynamic date requirements
- JavaScript behavior/CSS requirements
2. Define minimal fix that resolves failing criteria without regressing prior weeks.
3. Revalidate locally (smoke + feature behavior).
4. Re-run the audit.
5. Update `docs/audit-status.md` and append a new row in `docs/audit-results.csv`.

## Evidence Standard

Each audit run must record:
- Week
- Audit URL
- Tested GitHub Pages URL
- Result: Pass / Fail / Blocked
- Date (YYYY-MM-DD)
- Summary notes
- Issue reference (if remediation needed)
