---
title: "indexes: the one thing i wish i'd added earlier on autobaza"
date: 2026-04-24
category: mysql
---

Autobaza has a lot of filterable fields. Make, model, year, mileage, fuel type, condition, price range, location, seller type. Users can combine any of them. When the listing count was low, every query was fast. As data grew, some filter combinations started dragging.

The fix was indexes. I already knew what they were. I just underestimated how much they matter on tables that aren't enormous but have complex queries running against them.

An index is a separate data structure MySQL maintains alongside your table so it can find rows without scanning everything. Without one, a `WHERE fuel_type = 'diesel'` on 50,000 rows reads all 50,000. With one, it jumps directly to the matching rows.

**what to index**

Columns you filter by, sort by, or join on. Foreign keys. Columns used in `WHERE`, `ORDER BY`, or `GROUP BY` clauses.

```sql
-- if you're doing this often:
SELECT * FROM listings WHERE fuel_type = 'diesel' AND price < 20000 ORDER BY created_at DESC;

-- index these:
ALTER TABLE listings ADD INDEX idx_fuel_price (fuel_type, price);
ALTER TABLE listings ADD INDEX idx_created (created_at);
```

**how to find what's slow**

`EXPLAIN` is your friend. Prefix any query with it and MySQL tells you how it's being executed, including whether it's doing a full table scan.

```sql
EXPLAIN SELECT * FROM listings WHERE fuel_type = 'diesel' AND price < 20000;
```

Look at the `type` column. `ALL` means full table scan. `ref` or `range` means an index is being used.

**what not to over-index**

Every index speeds up reads and slows down writes slightly, because MySQL has to update the index on every insert or update. Don't index every column just in case. Index the columns that your actual query patterns need.

Add them early on columns you know will be filtered. It's easier than profiling later.
