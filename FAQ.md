# QuietForgeTools — Buyer FAQ

Short answers based on current catalogue products. This page does not change prices, refunds, or support terms.

## Are the tools offline?

Yes. CSV Column Mapper, CSV Duplicate Finder, CSV Cleanup Toolkit, and RFQ → Catalogue Matcher are local Python tools. CSV → Excel-Ready and RPG Maker Case-Sensitive Asset Auditor are local HTML pages you open in a desktop browser (Chromium folder picker for the RPG tool). URL Audit Report is a local Python CLI that analyzes supplied observations only (no crawl). They are designed to run on your machine without cloud processing of your files.

## Do they upload my files anywhere?

No. The tools themselves do not upload your CSVs, RFQs, or RPG Maker projects. There are no accounts or telemetry built into the tools for that purpose. Purchases and downloads go through itch.io's normal storefront.

## What Python version is required?

Python **3.10+** for the CSV CLIs (Column Mapper, Duplicate Finder, Cleanup Toolkit), RFQ → Catalogue Matcher, and URL Audit Report (standard library only — no `pip` install). CSV → Excel-Ready and the RPG Maker auditor do not use Python; open their HTML files in a modern desktop browser (Chrome, Edge, or Brave for the RPG folder picker).

## Are they command-line tools or GUI apps?

- **CSV Column Mapper / Duplicate Finder / Cleanup Toolkit + RFQ Matcher + URL Audit Report:** command-line (CLI).
- **CSV → Excel-Ready:** local browser HTML page (no CLI).
- **RPG Maker Case-Sensitive Asset Auditor:** local browser page with a folder picker (not a desktop GUI installer).

There is no separate desktop GUI installer for the CSV CLIs.

## What is included in the CSV Cleanup Toolkit?

The same two utilities sold separately: **CSV Column Mapper** and **CSV Duplicate Finder**, as two independent CLIs, plus a synthetic workflow example. It is not exclusive content beyond that package.

## Why buy the bundle instead of both separately?

Price only. Individually the two CSV tools are **£5** each (**£10** total). The toolkit is **£8**. Same Mapper + Duplicate Finder; you still run them as separate CLIs.

## Does Duplicate Finder delete rows automatically?

No. It identifies duplicate groups and writes review outputs (`unique.csv` / `duplicates.csv`). The source CSV is never modified. It is not destructive in-place deduplication.

## Does Column Mapper use AI/fuzzy mapping?

No. You supply an explicit JSON mapping configuration. There is no AI column guessing and no fuzzy matching.

## Does RFQ Matcher replace human review?

No. It produces review-oriented statuses (**MATCHED** / **AMBIGUOUS** / **UNMATCHED**). Ambiguous and unmatched lines always need human judgment. It is not a substitute for quoting decisions, OCR, PDF extraction, ML, or ERP integration.

## Which RPG Maker versions does the auditor support?

**RPG Maker MV and MZ** only, for the documented reference categories scanned by the tool. It does not claim coverage of every asset reference in a project (for example, items listed as not scanned in the product docs remain out of scope).

## What happens if a tool doesn't fit my use case?

Check the product limitations on this catalogue and on the itch listing before buying. This FAQ does not invent refunds, SLAs, compatibility guarantees, or support promises beyond what the public listings already state.

## Is URL Audit Report a live broken-link crawler?

No. A live broken-link crawler/checker visits websites and fetches URLs over the network. **URL Audit Report** does neither. It analyzes **already-collected** `source_url` / `target_url` / `status_code` observations offline and writes audit reports from that supplied data. It does not crawl sites and does not make network requests.

## Is CSV → Excel-Ready the same as Column Mapper?

No. **CSV → Excel-Ready** prepares encoding/BOM so a CSV opens more reliably in Excel. **CSV Column Mapper** renames and reorders columns via an explicit JSON map. They are separate tools and do not call each other.

## Do I need the Cleanup Toolkit if I only want one CSV CLI?

No. Buy **CSV Column Mapper** (£5) or **CSV Duplicate Finder** (£5) alone if you only need one function. The **CSV Cleanup Toolkit** (£8) is only a discounted package of both (£5 + £5 = £10 separately). Same two CLIs; not exclusive content.

## Where do I buy each tool?

Public itch.io pages (same catalogue UTM as the README):

| Product | Price | Buy |
|---|---|---|
| CSV → Excel-Ready | £5 | [itch.io](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| CSV Column Mapper | £5 | [itch.io](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| CSV Duplicate Finder | £5 | [itch.io](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| CSV Cleanup Toolkit | £8 | [itch.io](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| RFQ → Catalogue Matcher | £9 | [itch.io](https://quietforgetools.itch.io/rfq-catalogue-matcher-offline-line-item-matching-tool?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| RPG Maker Case-Sensitive Asset Auditor | £3+ | [itch.io](https://quietforgetools.itch.io/rpg-maker-case-sensitive-asset-auditor?utm_source=github&utm_campaign=quietforgetools-catalogue) |
| URL Audit Report | £7 | [itch.io](https://quietforgetools.itch.io/url-audit-report-offline-redirect-broken-link-analyzer?utm_source=github&utm_campaign=quietforgetools-catalogue) |

Publisher page: [quietforgetools.itch.io](https://quietforgetools.itch.io/)
