# Example workflow (synthetic): customer export → duplicate review → schema mapping

This walkthrough uses **fictional** data only (`example.com` addresses, made-up shop name). It illustrates how a buyer might use QuietForgeTools **CSV Duplicate Finder** and **CSV Column Mapper** together. The paid CLIs are **not** included in this repository — purchase them on itch.io (individually or via the CSV Cleanup Toolkit).

The CSV tools do **not** integrate with RFQ → Catalogue Matcher or the RPG Maker Asset Auditor.

---

## Scenario

“Northbridge Supplies” exports contacts from an old shop system. Before importing into a CRM that expects different column names, they want to:

1. Spot duplicate rows by email
2. Keep a reviewed unique list
3. Map columns into the CRM’s schema

---

## Step 0 — Starting export (synthetic)

`contacts_export.csv` (fictional):

```csv
cust_email,first,last,order_total,notes
alex@example.com,Alex,Nguyen,120.00,Repeat buyer
blake@example.com,Blake,Singh,45.50,
alex@example.com,Alex,Nguyen,120.00,Duplicate of first row
casey@example.com,Casey,Ó Briain,88.00,"Needs paper invoice, not email"
dana@example.com,Dana,Wright,0.00,
blake@example.com,Blake,Singh,45.50,Same email again
```

Problems visible by eye: two rows for `alex@example.com`, two for `blake@example.com`, and headers the CRM will not accept (`cust_email` vs `Email`, etc.).

---

## Step 1 — Duplicate review (CSV Duplicate Finder)

Conceptually (after buying/unzipping the tool):

```bash
python3 csv_duplicate_finder.py contacts_export.csv --key cust_email \
  --unique contacts_unique.csv --duplicates contacts_duplicates.csv
```

**Illustrative `contacts_unique.csv`** (first occurrence kept; synthetic expected shape):

```csv
cust_email,first,last,order_total,notes,original_row
alex@example.com,Alex,Nguyen,120.00,Repeat buyer,2
blake@example.com,Blake,Singh,45.50,,3
casey@example.com,Casey,Ó Briain,88.00,"Needs paper invoice, not email",5
dana@example.com,Dana,Wright,0.00,,6
```

**Illustrative `contacts_duplicates.csv`** (full groups for human inspection — not only the later copies):

```csv
cust_email,first,last,order_total,notes,original_row
alex@example.com,Alex,Nguyen,120.00,Repeat buyer,2
alex@example.com,Alex,Nguyen,120.00,Duplicate of first row,4
blake@example.com,Blake,Singh,45.50,,3
blake@example.com,Blake,Singh,45.50,Same email again,7
```

A human reviews `contacts_duplicates.csv`. In this fictional case they accept the first-occurrence unique file as good enough for CRM import.

**Not claimed:** fuzzy matching, automatic merge of conflicting fields, or in-place deletion of the source export.

---

## Step 2 — Schema mapping (CSV Column Mapper)

CRM wants: `Email`, `First Name`, `Last Name`, `Amount`, `Currency`, `Notes`.

Synthetic `mapping.json`:

```json
{
  "version": 1,
  "target_columns": [
    "Email",
    "First Name",
    "Last Name",
    "Amount",
    "Currency",
    "Notes"
  ],
  "map": {
    "Email": "cust_email",
    "First Name": "first",
    "Last Name": "last",
    "Amount": "order_total",
    "Notes": "notes"
  },
  "defaults": {
    "Currency": "GBP"
  }
}
```

Conceptually:

```bash
python3 csv_column_mapper.py \
  --source contacts_unique.csv \
  --mapping mapping.json \
  --output contacts_crm_ready.csv
```

**Illustrative `contacts_crm_ready.csv`:**

```csv
Email,First Name,Last Name,Amount,Currency,Notes
alex@example.com,Alex,Nguyen,120.00,GBP,Repeat buyer
blake@example.com,Blake,Singh,45.50,GBP,
casey@example.com,Casey,Ó Briain,88.00,GBP,"Needs paper invoice, not email"
dana@example.com,Dana,Wright,0.00,GBP,
```

`original_row` from the Finder output would be ignored if left unmapped (or omit it before mapping). `Currency` comes from `defaults`.

**Not claimed:** joins, Excel `.xlsx`, AI column guessing, or guaranteed time savings.

---

## Buying options for this workflow

| Need | Product | Price | Link |
|---|---|---|---|
| Mapper only | CSV Column Mapper v1.0.0 | £5 | https://quietforgetools.itch.io/csv-column-mapper-offline-schema-mapping-tool?utm_source=github&utm_campaign=quietforgetools-catalogue |
| Finder only | CSV Duplicate Finder v1.0.0 | £5 | https://quietforgetools.itch.io/csv-duplicate-finder-offline-duplicate-row-detection?utm_source=github&utm_campaign=quietforgetools-catalogue |
| Both (discounted package) | CSV Cleanup Toolkit v1.0.0 | £8 | https://quietforgetools.itch.io/csv-cleanup-toolkit-offline-mapper-duplicate-finder?utm_source=github&utm_campaign=quietforgetools-catalogue |

Individual total = £10; toolkit = £8. Tools remain separate CLIs either way.

---

## Data policy for this example

- All names, emails, and notes are synthetic
- No real customer, prospect, or challenge private data
- No paid source files or ZIPs are included in this repo
