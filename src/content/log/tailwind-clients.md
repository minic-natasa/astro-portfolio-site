---
title: "tailwind on client projects: what i keep and what i skip"
date: 2026-03-26
category: css
---

Tailwind is the right choice for a lot of projects. It's fast, consistent, and on a component-based codebase with a team that knows it, the utility-first approach genuinely reduces the friction of writing CSS.

But I've learned to think carefully before reaching for it on client work.

**when it works well**

On projects I own end to end, where the codebase stays with me or goes to another developer who knows Tailwind, it's excellent. Design tokens through `tailwind.config.js`, consistent spacing and color scales, no context switching between CSS files and templates. For this portfolio, for BMC, it was the right call.

**where it creates problems**

When the client or another developer needs to edit the HTML and they're not familiar with Tailwind, the class strings are noise. `class="flex items-center justify-between gap-4 py-3 border-b group"` is readable if you know what those mean. If you don't, it's intimidating and error-prone. Clients who manage their own WordPress content sometimes end up editing raw HTML in a page builder. That goes badly with utility classes.

For ECOSOUL and Omoda, I used standard CSS with BEM-style naming. The output was cleaner for handoff and easier to maintain for anyone who came after me.

**the thing I always keep**

Even on projects where I skip the full Tailwind setup, I'll pull in just the Tailwind reset and maybe a few utility concepts manually. The box model reset and base normalization alone save setup time.

**my decision rule**

If the project has a component architecture and lives with developers: Tailwind. If it's a WordPress site where a non-developer might edit templates, or a handoff to a team with no Tailwind familiarity: standard CSS with clear naming.

The tool should serve the project, not the other way around.
