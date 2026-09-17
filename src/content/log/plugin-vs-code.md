---
title: when to use a wordpress plugin and when to just write the code
date: 2026-03-12
category: wordpress
description: the decision every wordpress project makes five times, and the audit i run before any launch.
---

Every WordPress project involves this decision multiple times. Get it wrong either way and you pay for it later.

**use a plugin when**

The functionality is established and well-maintained. Contact forms (Gravity Forms, WPForms), SEO (Yoast, RankMath), caching (WP Rocket, W3 Total Cache), security (Wordfence), WooCommerce extensions. These have years of testing, active development, and edge cases already handled. Writing your own contact form handler, spam protection, and email deliverability stack from scratch to avoid a plugin is not a good trade.

Also: payment gateways. Never write your own payment integration when a maintained gateway plugin exists.

**write custom code when**

The plugin does 90% of what you need but the remaining 10% requires hacking its output with filters that weren't designed for your use case. At that point you're fighting the plugin instead of using it, and the next update might undo your workaround.

When the feature is specific enough to the project that no plugin does it right. A custom points system, a specific data structure, a business rule that only this client has. A plugin for this would be configuration and template overrides more complex than just writing the feature directly.

When a plugin adds 200KB of assets to do something that's 20 lines of code.

**the hidden cost of plugins**

Each active plugin is something to update, something that can conflict with another plugin, something that can break on a WordPress major release. I audit plugin lists before launching any project. If something hasn't been updated in two years and does something simple, it gets replaced with custom code.

**the pre-launch plugin audit**

Before any site goes live, every plugin on the list answers for itself:

<details>
<summary>the five questions each plugin gets</summary>

1. When was it last updated? Over a year: yellow flag. Over two: it goes.
2. What does it actually do here? If nobody can answer in one sentence, it's probably leftover from an experiment.
3. Could this be 20 lines in functions.php? Social icons, a snippet in the head, a small shortcode: yes, and then it is.
4. How much does it load on the frontend? One feature costing 200KB of JS on every page is not one feature, it's a tax.
5. What happens if it disappears tomorrow? If the answer is "the site breaks completely," it had better be worth that dependency.

A typical result: a site arrives with 24 plugins and launches with 9. Nothing lost, everything faster, far fewer things to update forever.

</details>

**my rule of thumb**

If the functionality exists as a well-maintained plugin, use the plugin. If you'd be fighting the plugin more than using it, write the code. The goal is a site that works reliably for years, not a technically pure solution.
