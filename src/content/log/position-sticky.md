---
title: why position sticky stops working and how to debug it
date: 2026-04-13
category: css
description: it works in the demo, then silently dies in your project. it's the overflow. it's almost always the overflow.
---

`position: sticky` is one of those properties that works perfectly in a demo and then silently does nothing in a real project. Almost always for the same reason.

Here's a working one first. Scroll inside this box:

<div style="height: 170px; overflow: auto; border: 1px solid var(--border-h); border-radius: 4px;">
  <p style="margin: 0; padding: 0.5rem 0.75rem; font-size: 0.85rem; color: var(--text-3);">some content before the sticky bar...</p>
  <p style="position: sticky; top: 0; margin: 0; padding: 0.4rem 0.75rem; background: var(--accent-d); color: var(--accent); font-size: 0.85rem; font-family: ui-monospace, monospace;">position: sticky; top: 0</p>
  <p style="margin: 0; padding: 0.5rem 0.75rem 8rem; font-size: 0.85rem; color: var(--text-3);">...and enough content below it that there's something to scroll through. the bar above stays pinned to the top of this box while everything else moves. that's the entire feature. now let's talk about why yours doesn't do this.</p>
</div>

**the overflow parent trap**

A sticky element won't stick if any ancestor has `overflow: hidden`, `overflow: auto`, or `overflow: scroll`. The browser treats that ancestor as the scroll container, and the sticky element can only stick within it. If the ancestor is not the viewport, the sticky behavior is invisible.

```css
/* this breaks sticky on any child */
.parent {
  overflow: hidden;
}
```

Check every ancestor up to the root. The fix is usually removing the overflow property entirely or changing it to `overflow: clip` (which doesn't create a scroll context).

Fun detail: the live demo above works *because* of an overflow container, not despite one. The scrollable box is the scroll context, so the bar sticks within it. That's the whole trap in one sentence: sticky pins to the nearest scroll context, and if some wrapper div created one you didn't know about, your element is faithfully sticking inside a container that never scrolls.

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
3. Check the parent's height, it needs to be taller than the sticky element
4. Check for `transform` or `filter` on ancestors (they also create new stacking contexts that can break sticky)

Usually it's the overflow. Almost always the overflow.
