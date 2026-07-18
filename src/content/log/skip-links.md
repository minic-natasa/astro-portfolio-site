---
title: skip links and why keyboard users need them
date: 2026-05-22
category: accessibility
---

A skip link is a hidden anchor at the very top of the page that jumps directly to the main content. Keyboard users — and screen reader users — have to Tab through every navigation item on every single page load before they reach the actual content. On a site with a header, logo, and ten nav links, that's twelve Tab presses before anything useful.

A skip link lets them press Tab once and jump straight past all of it.

```html
<a href="#main-content" class="skip-link">skip to main content</a>

<!-- ... header, nav ... -->

<main id="main-content" tabindex="-1">
  ...
</main>
```

The link is visible only when focused, hidden the rest of the time:

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.5rem 1rem;
  background: var(--bg);
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 4px;
  font-size: 0.875rem;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 1rem;
}
```

`tabindex="-1"` on the `<main>` element is important. Without it, some browsers won't move keyboard focus to the target element when the link is activated, so the user jumps to the right position visually but Tab still starts from the beginning.

Two elements, ten lines of CSS. Meaningful difference for anyone navigating by keyboard.
