---
title: soft deletes in laravel and when to actually use them
date: 2026-04-17
category: laravel
---

A soft delete doesn't remove the row. It sets a `deleted_at` timestamp. The row stays in the database, invisible to normal queries, recoverable if needed.

Adding it to a Laravel model takes two things:

```php
// migration
$table->softDeletes(); // adds deleted_at column

// model
use Illuminate\Database\Eloquent\SoftDeletes;

class Member extends Model
{
    use SoftDeletes;
}
```

From there, `$member->delete()` sets `deleted_at` instead of running DELETE. All standard queries automatically exclude soft-deleted records. To work with them explicitly:

```php
Member::withTrashed()->get();      // all records including deleted
Member::onlyTrashed()->get();      // only deleted records
$member->restore();                // bring it back
$member->forceDelete();            // actually delete it
```

**when soft deletes are worth it**

When accidental deletion needs to be recoverable. An admin removes a member by mistake — with soft deletes, that's a restore instead of a support incident.

When you need an audit trail. Knowing that something existed, who deleted it, and when is often valuable.

When related records reference the deleted row. Hard-deleting a user with foreign key references either fails or cascades. Soft-deleting preserves the data integrity.

**when they're not worth it**

GDPR and data deletion requests. A soft delete is not a delete. If a user requests their data be erased, `deleted_at` doesn't satisfy that. You need `forceDelete()` or a separate anonymization step.

Truly temporary data — sessions, logs, cache entries. Soft deletes add overhead with no benefit.

High-volume tables where the deleted rows accumulate and slow queries down. `withTrashed()` queries scan everything.

**the thing to remember**

Soft deletes are not free. They add a column, they require scope awareness in every query, and they mean your "deleted" data still lives in the database. Use them deliberately, not by default.
