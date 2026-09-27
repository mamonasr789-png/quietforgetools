# Synthetic example: redirect chain observations (URL Audit Report)

Fictional path only — no real websites, no customer data, no paid tool source.

Illustrative supplied observations for:

`/old-page → /new-page → /final-page`

| Hop | source_url | target_url | status_code |
|---|---|---|---|
| 1 | `https://example.com/old-page` | `https://example.com/new-page` | 301 |
| 2 | `https://example.com/new-page` | `https://example.com/final-page` | 301 |
| 3 | `https://example.com/final-page` | *(blank — final)* | 200 |

```csv
source_url,target_url,status_code
https://example.com/old-page,https://example.com/new-page,301
https://example.com/new-page,https://example.com/final-page,301
https://example.com/final-page,,200
```

**What URL Audit Report does with this (offline):** infer the redirect chain, hop count, end URL, and end status (`final_2xx` from the supplied 200). It does **not** fetch these URLs and does **not** crawl the site.

Buy: [URL Audit Report on itch.io](https://quietforgetools.itch.io/url-audit-report-offline-redirect-broken-link-analyzer?utm_source=github&utm_campaign=quietforgetools-catalogue) — £7, Python 3.10+ stdlib.
