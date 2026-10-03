# QuietForgeTools — small practical tools and fixed-scope technical services.

**Public hub:** [https://mamonasr789-png.github.io/quietforgetools/](https://mamonasr789-png.github.io/quietforgetools/)

QuietForgeTools publishes a small set of **existing** free tools, fixed-scope WordPress services, and offline utilities. This repository is a **catalogue / navigation surface** only — it does not sell new products, host payment forms, or distribute paid ZIPs. Buy itch utilities on [itch.io / QuietForgeTools](https://quietforgetools.itch.io/). Machine-readable metadata: [`catalogue.json`](catalogue.json). Buyer FAQ for offline utilities: [`FAQ.md`](FAQ.md).

Browser utilities that process data in your browser do so **locally on your machine** (WordPress Enquiry Path Checklist; CSV → Excel-Ready HTML; RPG Maker Case Auditor). Python CLI utilities run **offline on your computer** and are not browser apps. WordPress services are fixed-scope technical work; each service page handles enquiry and payment after scope confirmation (no private payment links on this hub).

---

## Free tools

| Name | What it is | Price | Action |
|---|---|---|---|
| **WordPress Enquiry Path Checklist** | Browser checklist to manually mark form, email, mobile, and delivery checks when a WordPress enquiry path seems broken — copyable diagnostic summary. | Free | [Open checklist](https://mamonasr789-png.github.io/quietforgetools-wp-enquiry-checklist/) |

## WordPress services

| Name | What it is | Price | Action |
|---|---|---|---|
| **WordPress Quick Fix** | One agreed WordPress problem: written diagnosis, one fix attempt, verification, short completion note. | £49 | [View service](https://mamonasr789-png.github.io/quietforgetools-wp-maintenance/quick-fix/) |
| **WordPress Update & Safety Check** | One maintenance pass: backup check, core/theme/plugin updates, smoke tests, one rollback attempt if an update we apply breaks something, short report. | £59 | [View service](https://mamonasr789-png.github.io/quietforgetools-wp-maintenance/) |
| **Enquiry Path Repair** | Fixed-scope repair for a broken WordPress contact, enquiry, or quote path after diagnosis — bounded work with a written outcome. | £149 | [View service](https://mamonasr789-png.github.io/quietforgetools-enquiry-repair/) |

## Offline / browser utilities

| Name | What it is | Price | Runtime | Action |
|---|---|---|---|---|
| **RPG Maker Case-Sensitive Asset Auditor** | Local Chromium HTML tool that audits case-sensitive RPG Maker MV/MZ asset references for deploy mismatches (read-only). | £3 | Browser (Chrome / Edge / Brave) | [Buy on itch.io](https://quietforgetools.itch.io/rpg-maker-case-sensitive-asset-auditor) |
| **CSV → Excel-Ready** | Offline browser HTML that adds an Excel-compatible UTF-8 BOM / encoding fix so valid UTF-8 CSV opens more reliably in Excel. | £5 | Desktop browser (local HTML) | [Buy on itch.io](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer) |
| **CSV Column Mapper** | Offline Python CLI for CSV column / schema mapping via an editable JSON map (rename and reorder columns). | £5 | Python 3.10+ stdlib (offline local) | [Buy on itch.io](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool) |
| **CSV Duplicate Finder** | Offline Python CLI that finds duplicate CSV rows by one column or a composite key; source file never modified. | £5 | Python 3.10+ stdlib (offline local) | [Buy on itch.io](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection) |
| **CSV Cleanup Toolkit** | Discounted package of CSV Column Mapper and CSV Duplicate Finder as two independent offline CLIs. | £8 | Python 3.10+ stdlib (offline local) | [Buy on itch.io](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder) |
| **RFQ → Catalogue Matcher** | Offline Python CLI that matches plain-text RFQ line items to a JSON catalogue with MATCHED / AMBIGUOUS / UNMATCHED statuses. | £9 | Python 3.10+ stdlib (offline local) | [Buy on itch.io](https://quietforgetools.itch.io/rfq-catalogue-matcher-offline-line-item-matching-tool) |
| **URL Audit Report** | Offline Python CLI that analyses supplied URL/status observations for redirect chains and broken-link signals (no crawl, no network). | £7 | Python 3.10+ stdlib (offline local) | [Buy on itch.io](https://quietforgetools.itch.io/url-audit-report-offline-redirect-broken-link-analyzer) |

Related product-specific documentation repos (unchanged by this catalogue):

- [quietforgetools-csv-excel-ready](https://github.com/mamonasr789-png/quietforgetools-csv-excel-ready)
- [quietforgetools-csv-column-mapper](https://github.com/mamonasr789-png/quietforgetools-csv-column-mapper)
- [quietforgetools-rfq-catalogue-matcher](https://github.com/mamonasr789-png/quietforgetools-rfq-catalogue-matcher)

---

## Detailed offline-utility notes

The sections below document the seven itch utilities in more depth (capabilities, limitations, cross-links). Prices match the live listings. Free tools and WordPress services are indexed above only — their offer pages are the source of truth for scope and payment.

## Products

### 1. CSV → Excel-Ready v1.0 — £5

**Audience:** Anyone whose valid UTF-8 CSV looks garbled (mojibake) when opened directly in Excel and who wants an offline BOM/encoding fix without uploading files.

**Capabilities**

- Add Excel-compatible UTF-8 BOM
- Preserve original CSV bytes when BOM addition alone is enough (no parse/re-serialize)
- Detect an existing UTF-8 BOM (keeps a single BOM)
- Optional explicit Windows-1252 conversion (never auto-guessed)
- Runs offline in a modern desktop browser — no uploads, no accounts

**Limitations (v1)**

- Not a general encoding-corruption repair service
- Excel behaviour still varies by version, OS, and how the file is opened
- Not CSV schema mapping and not duplicate detection

**Runtime:** Modern desktop browser (open the local HTML from the itch ZIP)

**Buy:** [CSV → Excel-Ready on itch.io](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer?utm_source=github&utm_campaign=quietforgetools-catalogue)

**Also available (related CSV utilities — separate purchases; no shared automation):**

- [CSV Column Mapper](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — rename/reorder columns via JSON map (Python CLI)
- [CSV Duplicate Finder](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — find duplicate rows by key (Python CLI)

---

### 2. CSV Column Mapper v1.0.0 — £5

**Audience:** Anyone who receives CSV exports with one header layout and needs another for CRM, accounting, or spreadsheet import.

**Capabilities**

- CSV column mapping and CSV schema mapping via a small editable JSON file (rename / map columns)
- Preserve exact target column order
- Ignore unmapped source columns
- Optional static / default values for target columns
- Clear errors if a mapped source column is missing
- UTF-8 (with or without BOM), quoted commas, blank cells, Unicode
- Never overwrites the source file by default
- Offline; no network, accounts, or telemetry

**Limitations (v1)**

- No row joins / merges by key
- No fuzzy or AI column guessing — you write the map
- No Excel `.xlsx` read/write (CSV in, CSV out)

**Runtime:** Python 3.10+ (standard library only — no pip install)

**Buy:** [CSV Column Mapper on itch.io](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue)

**Also available:**

- [CSV → Excel-Ready](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — offline UTF-8 BOM / encoding fixer for Excel (browser HTML; not schema mapping)
- [CSV Duplicate Finder](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — duplicate row detection by key (separate CLI)
- [CSV Cleanup Toolkit](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue) (£8) — Mapper + Duplicate Finder in one package (£5 + £5 = £10 separately)

---

### 3. CSV Duplicate Finder v1.0.0 — £5

**Audience:** Small businesses spotting accidental duplicate rows in customer, order, or contact CSV exports before importing elsewhere.

**Capabilities**

- CSV duplicate detection by one column or a composite key (flags duplicate CSV rows)
- Optional `--trim` and `--ignore-case`
- Explicit blank-key modes (ignore or treat as values)
- Writes `unique.csv` (first occurrence kept) and `duplicates.csv` (full groups for inspection)
- Original column order preserved; `original_row` numbers added
- UTF-8 (with or without BOM), quoted commas, blank cells, Unicode
- Source file is never modified
- Offline; no network, accounts, or telemetry

**Limitations (v1)**

- No fuzzy / similarity matching
- No email/address normalization beyond explicit trim/case-fold
- No Excel `.xlsx` read/write
- Not destructive in-place deduplication of the source

**Runtime:** Python 3.10+ (standard library only — no pip install)

**Buy:** [CSV Duplicate Finder on itch.io](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue)

**Also available:**

- [CSV → Excel-Ready](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — offline UTF-8 BOM / encoding fixer for Excel (browser HTML; not duplicate detection)
- [CSV Column Mapper](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — rename/reorder columns via JSON map (separate CLI)
- [CSV Cleanup Toolkit](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue) (£8) — Mapper + Duplicate Finder in one package (£5 + £5 = £10 separately)

---

### 4. CSV Cleanup Toolkit v1.0.0 — £8

**Audience:** Buyers who want both CSV utilities in one purchase at a modest discount.

**What you get**

- Complete **CSV Duplicate Finder** + **CSV Column Mapper** (two independent CLIs)
- Synthetic workflow example: messy export → duplicate review → schema mapping

**Pricing disclosure:** The same two utilities are also sold individually at £5 each (total £10). The toolkit is £8 and is **not** exclusive.

**Important:** The tools do **not** communicate automatically. You review Duplicate Finder output, optionally keep the unique CSV you accept, then run Column Mapper separately if needed.

**Shared limitations:** No fuzzy/AI matching, no relational joins, no Excel `.xlsx`, no automatic email/address normalization, no automatic destructive cleanup of your source, no GUI, no cloud.

**Runtime:** Python 3.10+ (standard library only)

**Buy:** [CSV Cleanup Toolkit on itch.io](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue)

**Prefer only one function?** Same utilities are sold separately (no bundle exclusivity):

- [CSV Column Mapper](https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue) — £5 standalone
- [CSV Duplicate Finder](https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue) — £5 standalone

Bundle £8 vs £5 + £5 = £10 separately. Tools remain independent CLIs either way.

**Also available:** [CSV → Excel-Ready](https://quietforgetools.itch.io/csv-excel-ready-offline-encoding-bom-fixer?utm_source=github&utm_campaign=quietforgetools-catalogue) (£5) — offline UTF-8 BOM / encoding fixer for Excel (not included in this toolkit)

---

### 5. RFQ → Catalogue Matcher v1.0.1 — £9

**Audience:** Suppliers and trade counters who need RFQ catalogue matching — turning RFQ text into quote-ready line statuses by hand.

**Capabilities**

- RFQ catalogue matching: JSON catalogue (`sku`, `description`, `unit`, `unit_price`) + plain-text RFQ with numbered lines in the documented format
- Output: `quote_ready.json` and `quote_ready.md`
- Statuses:
  - **MATCHED** — one acceptable catalogue hit (exact SKU or strong description match)
  - **AMBIGUOUS** — two or more plausible SKUs (you choose; never auto-picked)
  - **UNMATCHED** — no acceptable candidate (never invents a match)
- Offline; no network requests; no paid APIs
- Packaged as `RFQ-Catalogue-Matcher-v1.0.1` downloadable ZIP
- **v1.0.1:** handles UTF-8 BOM RFQ text correctly; treats certain underspecified catalogue matches more conservatively as ambiguous

**Limitations**

- Not OCR, not PDF extraction, not machine learning, not an ERP integration
- Match quality depends on catalogue coverage and RFQ wording
- Ambiguous and unmatched lines always need human review
- Does not integrate with the CSV tools or RPG Auditor

**Runtime:** Python 3.10+ (stdlib only). Demo: `python3 match_rfq.py --demo`

**Buy:** [RFQ → Catalogue Matcher on itch.io](https://quietforgetools.itch.io/rfq-catalogue-matcher-offline-line-item-matching-tool?utm_source=github&utm_campaign=quietforgetools-catalogue)

---

### 6. RPG Maker Case-Sensitive Asset Auditor v0.3.1 — £3+

**Audience:** RPG Maker MV/MZ creators deploying to case-sensitive hosts (Linux, many web exports) who need to catch Windows-works / deploy-breaks issues in case-sensitive RPG Maker assets before release.

**Capabilities**

- Local browser tool: open the HTML file, pick the project folder (read-only)
- Audits case-sensitive RPG Maker assets (MV/MZ) from engine markers (`js/rpg_core.js`, `js/rmmz_core.js`, project files)
- Reports CASE MISMATCH, UNRESOLVED/MISSING, CASE COLLISION, SCAN INCOMPLETE
- Read-only: does not rename, edit, create, or delete project files
- No network requests; no project upload
- Clipboard copy of the report only when you click that control

**Limitations**

- Chromium folder-picker browsers only (Chrome, Edge, Brave). Firefox/Safari not supported for folder selection
- Scans only the core JSON files and event commands listed in the tool UI — not every asset reference
- Not scanned: CommonEvents.json; plugin parameters / plugin JS; fonts; movies; dynamically generated filenames; internal MZ Effekseer details beyond effects named in Animations.json
- No auto-fix
- Does not integrate with the CSV tools or RFQ Matcher

**Runtime:** Open `RPG-Maker-Case-Sensitive-Asset-Auditor.html` in Chrome, Edge, or Brave

**Buy:** [RPG Maker Case-Sensitive Asset Auditor on itch.io](https://quietforgetools.itch.io/rpg-maker-case-sensitive-asset-auditor?utm_source=github&utm_campaign=quietforgetools-catalogue)

---

### 7. URL Audit Report — Offline Redirect & Broken-Link Analyzer v1.0.0 — £7

**Audience:** Anyone who already has URL/status observations (crawler export, monitor extract, logs, or manual checks) and wants redirect-chain and broken-link reports **without** running another live crawl.

**Capabilities**

- Offline analysis of supplied CSV observations: `source_url`, `target_url`, `status_code`
- Identifies redirect chains and loops from those observations
- Surfaces supplied 4xx/5xx observations and unresolved chain endings
- Writes `audit_summary.csv`, `redirect_chains.csv`, and `broken_links.csv`
- Python 3.10+; standard library only — no `pip` install
- Offline; **does not crawl websites**; **does not make network requests**

**Limitations (v1)**

- Not a live broken-link checker or website crawler
- Does not contact any host; does not claim statuses are currently true
- Not an SEO rank / traffic tool; not a replacement for Screaming Frog, Ahrefs, Sitebulb, etc.
- Does not integrate with the CSV tools, RFQ Matcher, or RPG Auditor

**Synthetic observation sketch:** `/old-page → /new-page → /final-page` with supplied 301 / 301 / 200 — see [`examples/url-audit-redirect-chain.md`](examples/url-audit-redirect-chain.md).

**Runtime:** Python 3.10+ (standard library only)

**Buy:** [URL Audit Report on itch.io](https://quietforgetools.itch.io/url-audit-report-offline-redirect-broken-link-analyzer?utm_source=github&utm_campaign=quietforgetools-catalogue)

---

## Synthetic workflow example

See [`examples/README.md`](examples/README.md) for a fictional small-business CSV flow (customer export → duplicate review → schema mapping). See [`examples/url-audit-redirect-chain.md`](examples/url-audit-redirect-chain.md) for a tiny synthetic redirect-chain observation sketch for URL Audit Report. Synthetic data only.

---

## Privacy

Offline utilities are designed to run locally. Browser-local tools (Checklist, CSV → Excel-Ready HTML, Case Auditor) process data in your browser without uploading your files. Python CLIs run on your machine with no network requirement for their core function. Your CSVs / RFQs / RPG Maker projects / URL observation exports are not uploaded by the tools themselves. WordPress services are separate fixed-scope work and may require temporary site access after scope confirmation. This catalogue repo contains no customer data, credentials, private payment URLs, or analytics/cookies.

## Licence / ownership

This repository contains **documentation and synthetic examples only**. It is not a grant of rights to the paid product binaries or source packaged on itch.io.

Separately sold product artifacts (ZIP / HTML downloads purchased from QuietForgeTools itch listings) are governed by the terms distributed with each package and by the itch.io purchase terms. This catalogue does not invent or restate proprietary license text for those packages.

Publisher: [QuietForgeTools on itch.io](https://quietforgetools.itch.io/)
