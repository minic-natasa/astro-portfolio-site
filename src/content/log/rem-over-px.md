---
title: why i stopped hardcoding font sizes in px
date: 2026-06-02
category: css
description: px overrides the reader's own settings. rem respects them. one habit, free accessibility, and a way to test it yourself.
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

| px | rem |
| --- | --- |
| 12px | 0.75rem |
| 14px | 0.875rem |
| 16px | 1rem |
| 18px | 1.125rem |
| 24px | 1.5rem |
| 32px | 2rem |

**test it yourself, right now**

Open your browser settings and change the default font size (Chrome: Settings, then Appearance, then Font size). Sites built with rem, including this one, scale with your choice. Sites with hardcoded px sit there ignoring you. That difference is the entire argument.

<details>
<summary>what about zoom? doesn't ctrl+plus fix everything?</summary>

Page zoom scales px text too, so it partially compensates. But zoom scales the whole layout, often triggering horizontal scrolling or cramped breakpoints, and the user has to do it on every site. A changed default font size is set once and follows the reader everywhere. WCAG asks text to survive 200% resizing without loss of content. rem gets you there without drama.

</details>

One change. Makes the site immediately more accessible to anyone who adjusts their browser defaults, and it costs nothing.
