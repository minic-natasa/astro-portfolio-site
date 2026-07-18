---
title: optional chaining and why it's not just shorter code
date: 2026-05-15
category: js
---

Before optional chaining, accessing a nested property safely looked like this:

```js
const avatar = user && user.profile && user.profile.avatar;
```

Every level had to be guarded manually. Miss one and you get a TypeError at runtime when something unexpectedly returns null or undefined.

Optional chaining collapses this:

```js
const avatar = user?.profile?.avatar;
```

If any part of the chain is null or undefined, the whole expression short-circuits to undefined instead of throwing. No error, no crash.

It works the same way on methods and array access:

```js
// methods
const trimmed = input?.trim();
obj?.method?.();   // also guards the method itself in case it doesn't exist

// arrays
const first = items?.[0];
const name  = users?.[0]?.name;
```

**where it matters most**

API responses where fields are optional. Config objects where not all keys are guaranteed. DOM queries where an element might not exist.

```js
// before
const val = document.querySelector('.field') 
  ? document.querySelector('.field').value 
  : undefined;

// after
const val = document.querySelector('.field')?.value;
```

**what it doesn't do**

It doesn't catch errors thrown inside a method. It only handles null/undefined in the chain. For runtime errors, you still need try/catch.

Combined with `??`, it covers most defensive access patterns cleanly:

```js
const timeout = config?.network?.timeout ?? 3000;
```
