# Audit Status Board

Last Updated: 2026-05-21
Audit Owner: `guifabri`
GitHub Pages Base URL: https://guifabri.github.io/wdd131/

## Weekly Audit Summary

| Week | Sprint Focus | Target Page | Audit Tool | Status | Run Date | Evidence (Published URL) | Notes / Next Action |
|---|---|---|---|---|---|---|---|
| W01 | Home Page | `index.html` | https://byui-cse.github.io/wdd-audits/wdd131-w01-homepage.html | Fail | 2026-05-21 | https://guifabri.github.io/wdd131/ | Audit reported image-size failures (>125 kB). Remediation implemented (optimized images), pending re-audit confirmation. |
| W02 | Picture Album | `temples.html` | https://byui-cse.github.io/wdd-audits/wdd131-w02-picture-album.html | Not Run | - | https://guifabri.github.io/wdd131/temples.html | Run audit and log pass/fail findings. |
| W03 | Country Page | `place.html` | https://byui-cse.github.io/wdd-audits/wdd131-w03-place.html | Not Run | - | https://guifabri.github.io/wdd131/place.html | Run audit and verify weather/windchill checks. |
| W04 | Filtered Temples | `filtered-temples.html` | https://byui-cse.github.io/wdd-audits/wdd131-w04-picture-album.html | Not Run | - | https://guifabri.github.io/wdd131/filtered-temples.html | Run audit and verify filter criteria behavior. |
| W05 | Product Review Form | `form.html`, `review.html` | https://byui-cse.github.io/wdd-audits/wdd131-w05-form.html | Not Run | - | https://guifabri.github.io/wdd131/form.html | Run audit and validate form/review flow. |
| W06 | Final Project | `project/` pages | No official weekly audit listed | Not Run | - | https://guifabri.github.io/wdd131/project/ | Execute manual CLO checklist + Lighthouse notes. |
| W07 | Final Exam Prep | Study + stabilization | No technical audit tool | Not Run | - | N/A | Complete exam prep checklist and close remaining risks. |

## Failure Log Template

Use this block whenever an audit fails.

### [Week XX] Failure Entry - YYYY-MM-DD
- Audit URL:
- Published URL tested:
- Result: Fail
- Failure category: HTML structure | Paths/links | Metadata | Footer dynamic dates | JS/CSS behavior
- Observed failure summary:
- Root cause hypothesis:
- Minimal fix plan:
- Local re-test plan:
- Re-audit criterion (what must pass next run):
- Tracking issue/reference:

### [Week W01] Failure Entry - 2026-05-21
- Audit URL: https://byui-cse.github.io/wdd-audits/wdd131-w01-homepage.html
- Published URL tested: https://guifabri.github.io/wdd131/
- Result: Fail
- Failure category: JS/CSS behavior
- Observed failure summary: `images/profile.png` (485 kB) and `images/landscape.png` (1058 kB) exceeded the `<=125 kB` image requirement.
- Root cause hypothesis: Original source images were not optimized for web delivery.
- Minimal fix plan: Generate optimized local images under 125 kB and keep equivalent visual content/reference paths updated in `index.html`.
- Local re-test plan: Verify new asset sizes in repo and ensure page renders images with same alt text and dimensions.
- Re-audit criterion (what must pass next run): Image check shows size pass for all images on W01 page.
- Tracking issue/reference: W01-AUDIT-IMG-SIZE
