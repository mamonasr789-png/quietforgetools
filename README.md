# QuietForgeTools — Offline Utility Catalogue

QuietForgeTools publishes small **offline** utilities for practical data and game-project chores — including **offline CSV tools** for CSV column mapping, CSV schema mapping, and CSV duplicate detection, plus RFQ catalogue matching, case-sensitive RPG Maker asset auditing, and offline URL redirect / broken-link **analysis of supplied observations** (not a live crawler). Tools run on your machine (Python stdlib CLIs or a local Chromium HTML page). No accounts, no telemetry, no cloud processing of your files.

This repository is a **public catalogue / documentation surface** only. It does **not** distribute paid source code or purchase ZIPs. Buy packaged downloads on [itch.io / QuietForgeTools](https://quietforgetools.itch.io/). Machine-readable product metadata: [`catalogue.json`](catalogue.json).

**Buyer FAQ:** [`FAQ.md`](FAQ.md) — offline scope, what's included, purchase links.

Related product-specific documentation repos (unchanged by this catalogue):

- [quietforgetools-csv-column-mapper](https://github.com/mamonasr789-png/quietforgetools-csv-column-mapper)
- [quietforgetools-rfq-catalogue-matcher](https://github.com/mamonasr789-png/quietforgetools-rfq-catalogue-matcher)

---

## Choose by task

| If you need to… | Use | Price | Runtime |
|---|---|---|---|
| CSV column mapping / CSV schema mapping — rename & reorder columns to a target schema (JSON map) | **CSV Column Mapper** | £5 | Python 3.10+ (stdlib) |
| Find duplicate CSV rows via CSV duplicate detection (one column or a composite key) | **CSV Duplicate Finder** | £5 | Python 3.10+ (stdlib) |
| Get **both** Mapper + Duplicate Finder in one discounted package | **CSV Cleanup Toolkit** | £8 | Python 3.10+ (stdlib) |
| RFQ catalogue matching — plain-text RFQ lines to a JSON catalogue with human-review statuses | **RFQ → Catalogue Matcher** | £9 | Python 3.10+ (stdlib) |
| Audit case-sensitive RPG Maker assets (MV/MZ refs) for deploy mismatches | **RPG Maker Case-Sensitive Asset Auditor** | £3+ | Chrome / Edge / Brave (folder picker) |
| Analyze supplied URL/status observations for redirect chains and broken-link signals (offline; no crawl) | **URL Audit Report** | £7 | Python 3.10+ (stdlib) |

The CSV tools, RFQ Matcher, RPG Auditor, and URL Audit Report are independent product lines. They do **not** integrate with each other.

**Cross-product positioning**

| Product | Role |
|---|---|
| Column Mapper | Schema transformation (rename / reorder / defaults) |
| Duplicate Finder | Duplicate identification (review groups; source never modified) |
| Cleanup Toolkit | Discounted package containing both CSV tools (two separate CLIs) |
| RFQ Matcher | Line-item matching against a catalogue with MATCHED / AMBIGUOUS / UNMATCHED |
| RPG Auditor | RPG Maker MV/MZ case-sensitive asset reference auditing (read-only) |
| URL Audit Report | Offline analysis of supplied URL/status observations (redirect chains / broken-link signals; no crawl, no network) |

---

## Products

### 1. CSV Column Mapper v1.0.0 — £5

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

---

### 2. CSV Duplicate Finder v1.0.0 — £5

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

---

### 3. CSV Cleanup Toolkit v1.0.0 — £8

**Audience:** Buyers who want both CSV utilities in one purchase at a modest discount.

**What you get**

- Complete **CSV Duplicate Finder** + **CSV Column Mapper** (two independent CLIs)
- Synthetic workflow example: messy export → duplicate review → schema mapping

**Pricing disclosure:** The same two utilities are also sold individually at £5 each (total £10). The toolkit is £8 and is **not** exclusive.

**Important:** The tools do **not** communicate automatically. You review Duplicate Finder output, optionally keep the unique CSV you accept, then run Column Mapper separately if needed.

**Shared limitations:** No fuzzy/AI matching, no relational joins, no Excel `.xlsx`, no automatic email/address normalization, no automatic destructive cleanup of your source, no GUI, no cloud.

**Runtime:** Python 3.10+ (standard library only)

**Buy:** [CSV Cleanup Toolkit on itch.io](https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue)

---

### 4. RFQ → Catalogue Matcher — £9

**Audience:** Suppliers and trade counters who need RFQ catalogue matching — turning RFQ text into quote-ready line statuses by hand.

**Capabilities**

- RFQ catalogue matching: JSON catalogue (`sku`, `description`, `unit`, `unit_price`) + plain-text RFQ with numbered lines in the documented format
- Output: `quote_ready.json` and `quote_ready.md`
- Statuses:
  - **MATCHED** — one acceptable catalogue hit (exact SKU or strong description match)
  - **AMBIGUOUS** — two or more plausible SKUs (you choose; never auto-picked)
  - **UNMATCHED** — no acceptable candidate (never invents a match)
- Offline; no network requests; no paid APIs
- Packaged as `RFQ-Catalogue-Matcher-v1.0.0` downloadable ZIP

**Limitations**

- Not OCR, not PDF extraction, not machine learning, not an ERP integration
- Match quality depends on catalogue coverage and RFQ wording
- Ambiguous and unmatched lines always need human review
- Does not integrate with the CSV tools or RPG Auditor

**Runtime:** Python 3.10+ (stdlib only). Demo: `python3 match_rfq.py --demo`

**Buy:** [RFQ → Catalogue Matcher on itch.io](https://quietforgetools.itch.io/rfq-catalogue-matcher-offline-line-item-matching-tool?utm_source=github&utm_campaign=quietforgetools-catalogue)

---

### 5. RPG Maker Case-Sensitive Asset Auditor v0.3.1 — £3+

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

### 6. URL Audit Report — Offline Redirect & Broken-Link Analyzer v1.0.0 — £7

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

All listed tools are designed to run locally. Your CSVs / RFQs / RPG Maker projects / URL observation exports are not uploaded by the tools themselves. This catalogue repo contains no customer data, credentials, or payment assets.

## Licence / ownership

This repository contains **documentation and synthetic examples only**. It is not a grant of rights to the paid product binaries or source packaged on itch.io.

Separately sold product artifacts (ZIP / HTML downloads purchased from QuietForgeTools itch listings) are governed by the terms distributed with each package and by the itch.io purchase terms. This catalogue does not invent or restate proprietary license text for those packages.

Publisher: [QuietForgeTools on itch.io](https://quietforgetools.itch.io/)
