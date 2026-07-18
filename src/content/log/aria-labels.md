---
title: the difference between aria-label, aria-labelledby, and aria-describedby
date: 2026-05-17
category: accessibility
---

These three attributes look similar and do related things, but they're not interchangeable. Getting them mixed up leads to either redundant announcements or missing context for screen reader users.

**aria-label**

Provides a text label directly on the element. Use it when there's no visible text label and you can't add one.

```html
<!-- icon button with no visible text -->
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<!-- input with no visible label -->
<input type="search" aria-label="Search products" />
```

The label is invisible to sighted users but announced by screen readers in place of any other content.

**aria-labelledby**

Points to another element that serves as the label. Use it when a visible label already exists somewhere on the page.

```html
<h2 id="billing-heading">Billing address</h2>
<section aria-labelledby="billing-heading">
  ...
</section>

<!-- multiple ids are valid: reads both in order -->
<input aria-labelledby="city-label country-label" />
```

Unlike `aria-label`, this references real visible content, so if the referenced text changes, the accessible name changes too.

**aria-describedby**

Provides supplementary description, not the primary label. Screen readers announce this after the label, usually with a slight pause. Use it for hints, errors, or additional context.

```html
<input
  type="password"
  id="pwd"
  aria-describedby="pwd-hint pwd-error"
/>
<p id="pwd-hint">Must be at least 8 characters.</p>
<p id="pwd-error" role="alert">Password is too short.</p>
```

**the short version**

- `aria-label`: you're writing the label yourself, inline
- `aria-labelledby`: you're pointing to visible text that already exists
- `aria-describedby`: you're adding context beyond the label, like hints or errors

When both a label and `aria-labelledby` are present, `aria-labelledby` wins. When in doubt, prefer referencing real visible text over writing hidden labels.
