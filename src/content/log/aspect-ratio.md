---
title: aspect-ratio replaced a hack i used for years
date: 2026-05-05
category: css
description: goodbye padding-top percentages. one property, any element, and a live box you can drag to prove it.
---

For a long time, making an element maintain a specific ratio as it resized meant the padding-top hack:

```css
.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 9/16 = 56.25% for 16:9 */
}
.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
```

It worked. It was also unintuitive, required a wrapper element, and the math made no sense to anyone reading it cold.

`aspect-ratio` replaces all of that:

```css
.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
}
```

Here it is live. Drag the bottom-right corner of this box (desktop) and watch the inner element hold 16/9 at any width:

<div style="resize: horizontal; overflow: hidden; width: 75%; min-width: 150px; max-width: 100%; border: 1px dashed var(--border-h); border-radius: 4px; padding: 0.5rem;">
  <div style="aspect-ratio: 16 / 9; background: var(--accent-d); border-radius: 4px; display: grid; place-items: center; color: var(--accent); font-size: 0.85rem; font-family: ui-monospace, monospace;">aspect-ratio: 16 / 9</div>
</div>

No JavaScript in that demo. The outer box is just `resize: horizontal` and the inner one is one line of CSS.

It works on anything: images, videos, iframes, divs, cards.

```css
/* square thumbnails */
.thumbnail {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}

/* portrait cards */
.card {
  aspect-ratio: 3 / 4;
}

/* classic cinema */
.hero-video {
  aspect-ratio: 21 / 9;
}
```

`object-fit: cover` pairs naturally with it for images: fills the ratio without distortion, crops from the center.

```css
img {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}
```

Browser support is universal now. I use it on every project that has media, cards with consistent sizing, or any element that needs to scale proportionally. The padding hack is retired.
