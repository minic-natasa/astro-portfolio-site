---
title: what working at usablenet changed about how i write html
date: 2026-05-24
category: accessibility
description: habits from auditing sites for wcag all day. semantic elements, keyboard tests, and why placeholder is not a label.
---

UsableNet sits at the intersection of quality and accessibility. We audit sites, fix issues, and help companies meet WCAG standards. After spending time in that work, I write HTML differently than I did before.

Not dramatically differently. The fundamentals are still the same. But there are habits I've built that I now do automatically on every project.

**semantic elements by default**

Before, I'd reach for a `div` and add a role if needed. Now I reach for the right element first. `<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, `<header>` for page structure. Screen readers use these to build a mental model of the page. A page full of divs is a page full of silence.

**never use a div or span as an interactive element**

`<div onclick="...">` is not a button. It doesn't receive keyboard focus. It doesn't respond to Enter or Space. It has no accessible role. The person navigating by keyboard or using a screen reader simply can't reach it. If something is clickable and does something, use `<button>`. If it navigates somewhere, use `<a>`.

**test keyboard navigation before calling something done**

Tab through the page. Can you reach every interactive element? Is the focus order logical? Can you see where focus is at all times? If you can't operate the page without a mouse, it's not done.

**alt text is a description, not a filename**

`alt="image1.jpg"` is worse than `alt=""`. If the image conveys information, describe that information. If it's decorative, use `alt=""` so screen readers skip it. The test: if the image were removed, would a sighted user lose context? If yes, describe it. If no, leave alt empty.

**form inputs always have labels**

`placeholder` is not a label. It disappears when the user starts typing. Every input needs a `<label>` connected via `for`/`id`. Every time.

**the 60-second audit you can run on any site**

No tools, no extensions:

<details>
<summary>open the audit</summary>

1. Press Tab ten times. Can you see where focus is at every step? If focus vanishes at any point, something is broken.
2. Check the first Tab press: does a skip link appear? (Try it on this site. It does.)
3. Find a clickable thing that isn't a link or a button. Right-click, inspect. If it's a `div` with an onclick, keyboard users can't reach it.
4. Find any image. Does the alt text describe it, or is it `IMG_2024_final_v3.jpg`?
5. Click into a form field. Is there a label above it, or only placeholder text that's about to disappear?

Five checks, one minute, and you'll have a rough but honest picture of how much the site's builders cared. Most sites fail at step 1.

</details>

None of this is hard. It's just habits. Build them early enough and you stop thinking about it.
