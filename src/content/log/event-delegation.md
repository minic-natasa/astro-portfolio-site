---
title: event delegation and why it matters on dynamic lists
date: 2026-03-30
category: js
---

The standard way to handle click events on a list of items:

```js
document.querySelectorAll('.listing-card').forEach(card => {
  card.addEventListener('click', handleClick);
});
```

This works. Until the list updates dynamically. New cards added after this code runs don't have the listener attached. You either re-run the whole setup after every update, or you use event delegation.

Event delegation works because events bubble up the DOM. A click on a child element also fires on every ancestor. Instead of listening on each card, you listen on the parent container:

```js
document.querySelector('.listings-grid').addEventListener('click', (e) => {
  const card = e.target.closest('.listing-card');
  if (!card) return;
  handleClick(card);
});
```

One listener. Works for every `.listing-card` that exists now and every one that gets added later. If the list re-renders after a filter, no re-setup needed.

`closest()` is the key piece here. `e.target` is whatever was actually clicked, which might be a nested `<img>` or `<span>` inside the card. `closest('.listing-card')` walks up the DOM until it finds the matching ancestor, so you always get the card regardless of which child was clicked.

A few things to watch for:

**check that the target matches before acting**

The listener fires for every click on the container, not just clicks on cards. The `if (!card) return` guard is not optional. Without it, clicks on empty space in the grid will try to handle a null card.

**don't overdo it**

Delegation is great for lists and grids. It's overkill for a single static button. Match the pattern to the problem.

This pattern comes up constantly on anything with filterable lists, dynamic search results, or content loaded after the initial render. Worth knowing by reflex.
