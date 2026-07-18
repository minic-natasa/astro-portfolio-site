---
title: building wordpress sites for clients who will manage them alone
date: 2026-03-08
category: wordpress
---

Most of the WordPress projects I've built weren't just for launching. They were for handing off. The client would be the one adding products, updating pages, publishing content, managing everything after I was gone. That changes how you build.

A few things I do differently when the client is the long-term maintainer:

**use ACF for structured content, not free-form editors**

The block editor is flexible, which means clients can break the layout in creative ways. Advanced Custom Fields with a defined schema gives them exactly the fields they need and nothing else. They can't accidentally delete a section or add a block in the wrong place because those options aren't available.

**label everything like the developer won't be there to explain it**

Field labels, instructions, placeholder text. If the client has to guess what "Subtitle" means or what format a date field expects, you'll get a support call. Write the admin UI for someone opening it six months later with no context.

**test the admin experience, not just the frontend**

Before handoff, I log in as the client role and walk through every task they'll do routinely. Add a product. Update an event. Publish a post. If something is confusing in the admin, it'll be confusing every time they use it.

**set up a staging environment and show them how it works**

Clients who know there's a place to test changes without breaking the live site are dramatically less anxious. And dramatically less likely to edit production directly and call you when it breaks.

The best client handoff is one where they don't need to call you.
