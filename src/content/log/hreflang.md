---
title: hreflang, why it's easy to get wrong, and how i set it up
date: 2026-03-19
category: localization
---

`hreflang` tells search engines which version of a page is intended for which language or region. Without it, Google has to guess, and it sometimes guesses wrong, showing the Serbian version to Spanish users or indexing only one version of a bilingual site.

The basic structure goes in the `<head>` of every language version:

```html
<!-- on the Serbian version -->
<link rel="alternate" hreflang="sr" href="https://advense.rs/" />
<link rel="alternate" hreflang="en" href="https://advense.rs/en/" />
<link rel="alternate" hreflang="x-default" href="https://advense.rs/" />

<!-- on the English version -->
<link rel="alternate" hreflang="sr" href="https://advense.rs/" />
<link rel="alternate" hreflang="en" href="https://advense.rs/en/" />
<link rel="alternate" hreflang="x-default" href="https://advense.rs/" />
```

**the two things that trip everyone up**

First: every page must reference all its alternates, including itself. The Serbian page lists the Serbian URL and the English URL. The English page does the same. Both pages point to both versions. This is not optional. If only one page has the tags, Google ignores them.

Second: `x-default` marks the fallback for users who don't match any of the listed language/region combinations. Point it to your default language version. Leaving it out isn't a fatal error but it's a missed signal.

**language vs region**

`hreflang="es"` targets Spanish speakers in any country. `hreflang="es-ES"` targets Spanish speakers specifically in Spain. For most bilingual sites, language-only is enough. Use region codes when you have genuinely different content for different markets, like a site with separate pricing for Spain and Mexico.

**how to verify it's working**

Google Search Console will flag hreflang errors under the International Targeting report. Common errors are mismatched URLs, missing reciprocal links, and invalid language codes. Check it after launch.

One set of tags, set up correctly once. Makes the difference between your bilingual site being understood as one site in two languages, or two separate sites that confuse each other in search results.
