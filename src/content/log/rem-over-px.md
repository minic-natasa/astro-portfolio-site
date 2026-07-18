---
title: why i stopped hardcoding font sizes in px
date: 2026-06-02
category: css
---

The browser default font size is 16px. When you write `font-size: 14px` directly, you override whatever the user set in their own browser. Someone who bumped their default to 20px because their eyes need it? They get your 14px instead.

Use `rem`. `1rem` equals the browser default. Your layout respects the user, scales correctly with page zoom, and passes WCAG text sizing requirements automatically.

```css
/* no */
p    { font-size: 14px; }
h2   { font-size: 24px; }
small { font-size: 11px; }

/* yes */
p    { font-size: 0.875rem; }
h2   { font-size: 1.5rem; }
small { font-size: 0.6875rem; }
```

Quick mental shortcut: divide the px value by 16. That's your rem.

One change. Makes the site immediately more accessible to anyone who adjusts their browser defaults, and it costs nothing.
