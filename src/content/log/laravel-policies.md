---
title: how laravel policies saved me from writing role checks everywhere
date: 2026-05-29
category: laravel
description: authorization logic in one file instead of thirty. how the bmc permission system stayed sane.
---

When I started building the permission system for Business Makers Club, the first instinct was to just sprinkle `if ($user->role === 'admin')` wherever access needed to be controlled. Three roles, a few dozen routes. It would've worked.

It also would've been a nightmare to maintain. Change one role's permissions and you're grepping through controllers, middleware, views, looking for every place you hardcoded that check. This is what that future looks like:

```php
// scattered across 30 files, subtly different each time
if ($user->role === 'admin') { ... }
if (in_array($user->role, ['admin', 'hr_admin'])) { ... }
if ($user->role == 'hr-admin') { ... }  // wait, hyphen or underscore?
```

That third one is not a typo I invented for the example. That third one is how these bugs actually happen.

Laravel policies solve this by putting all authorization logic for a model in one place.

```php
// app/Policies/ActivityPolicy.php
public function manage(User $user): bool
{
    return $user->role === 'hr_admin';
}

public function view(User $user): bool
{
    return in_array($user->role, ['member', 'it_admin', 'hr_admin']);
}
```

Then anywhere in the app:

```php
// in a controller
$this->authorize('manage', Activity::class);

// in a blade template
@can('view', $activity)
  <a href="{{ route('activities.show', $activity) }}">view</a>
@endcan
```

The permission logic lives once. When the rules change, you update one file. The controllers stay thin.

For BMC specifically, the combination of policies at the model level and middleware at the route level meant unauthorized users never even reached the controllers. Two layers, clean separation, no scattered conditionals.

If you're building anything with more than two roles in Laravel, reach for policies early. The overhead of setting them up is nothing compared to untangling role checks scattered across 30 files later.
