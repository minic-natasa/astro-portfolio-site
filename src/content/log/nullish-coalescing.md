---
title: "?? vs || and why the difference catches real bugs"
date: 2026-05-01
category: js
---

Both `||` and `??` return the right side when the left side isn't "there." The difference is in what "not there" means.

`||` treats anything falsy as "not there": `null`, `undefined`, `0`, `''`, `false`, `NaN`.

`??` only treats `null` and `undefined` as "not there."

This distinction causes real bugs:

```js
const count = userCount || 10;
```

If `userCount` is `0` — a perfectly valid value meaning zero — this returns `10`. You silently replaced a real value with a default. Same problem with empty strings and `false`.

```js
const count = userCount ?? 10;  // 0 stays 0
const label = title ?? 'untitled';  // '' stays ''
const flag  = isActive ?? true;    // false stays false
```

`??` only falls back when the value is genuinely absent, not when it's a valid falsy value.

**when to use which**

`??` — default values. When you want to substitute only for missing data, not for all falsy values.

`||` — boolean-style fallbacks. When any falsy value should trigger the fallback, like a feature flag or a truthy check.

```js
// good uses of ||
const user = getUser() || guestUser;       // treat no user same as guest
const label = name || email || 'anonymous'; // first truthy wins

// good uses of ??
const timeout = config.timeout ?? 3000;    // 0 is a valid timeout
const page    = params.page ?? 1;          // 0 would be invalid but ?? is safer
```

When in doubt, reach for `??` for defaults. It's the safer assumption.
