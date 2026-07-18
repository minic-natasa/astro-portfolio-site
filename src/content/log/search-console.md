---
title: what to check in google search console after launch
date: 2026-04-20
category: seo
---

Google Search Console shows you how Google sees your site. Not how many people visited — that's Analytics. This is about indexing, crawl errors, search queries, and whether Google can actually find and understand your pages.

**verify ownership and submit the sitemap**

Ownership verification via DNS record is the cleanest method (doesn't depend on a file staying on the server). Once verified, go to Sitemaps and submit your sitemap URL. For WordPress, Yoast and RankMath generate sitemaps automatically. For custom builds, generate one or use a plugin.

**Coverage report**

This shows which pages are indexed, which have errors, and which are excluded. The important states:

- **Error** — Google tried to crawl the page and failed. Fix these.
- **Valid with warning** — indexed but something's off, often a canonical issue.
- **Excluded** — not indexed, which might be intentional (admin pages, thank-you pages) or a problem (your homepage).

A new site takes days to weeks to start showing data here. Normal.

**Performance report**

Once traffic starts, this shows which queries bring people to the site, which pages get the most impressions, click-through rates, and average position. Sort by impressions to find pages Google shows but nobody clicks. Those are optimization opportunities.

**Core Web Vitals**

Real user data on LCP, INP, and CLS from Chrome users visiting the site. Poor scores here affect ranking. Needs enough real traffic to populate — won't show anything on a brand new site.

**URL Inspection**

Paste any URL to see exactly how Google has indexed it, when it was last crawled, whether it's mobile-friendly, and what the rendered HTML looks like. Useful for debugging why a specific page isn't indexed.

Check Search Console a week after launch, then monthly. Most issues that appear in the first month are small configuration things that are easy to fix early and annoying to fix later.
