---
title: why position sticky stops working and how to debug it
date: 2026-04-13
category: css
---

`position: sticky` is one of those properties that works perfectly in a demo and then silently does nothing in a real project. Almost always for the same reason.

**the overflow parent trap**

A sticky element won't stick if any ancestor has `overflow: hidden`, `overflow: auto`, or `overflow: scroll`. The browser treats that ancestor as the scroll container, and the sticky element can only stick within it. If the ancestor is not the viewport, the sticky behavior is invisible.

```css
/* this breaks sticky on any child */
.parent {
  overflow: hidden;
}
```

Check every ancestor up to the root. The fix is usually removing the overflow property entirely or changing it to `overflow: clip` (which doesn't create a scroll context).

**the container height problem**

A sticky element sticks only while its parent container is being scrolled past. If the parent is the same height as the sticky element, there's nothing to stick through and it just sits there like a static element.

**missing top/bottom value**

`position: sticky` requires a threshold: `top: 0`, `top: 1rem`, etc. Without it, the browser doesn't know where to stick it. This one gets missed more often than it should.

```css
.sticky-header {
  position: sticky;
  top: 0; /* required */
}
```

**debugging steps**

1. Add `top: 0` if missing
2. Open DevTools, inspect every ancestor, look for any `overflow` value that isn't `visible`
3. Check the parent's height — it needs to be taller than the sticky element
4. Check for `transform` or `filter` on ancestors (they also create new stacking contexts that can break sticky)

Usually it's the overflow. Almost always the overflow.
