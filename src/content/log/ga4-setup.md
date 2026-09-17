---
title: the ga4 setup i do before every launch
date: 2026-05-26
category: seo
description: thirty minutes before launch, or an awkward conversation six months later about the data that doesn't exist.
---

Google Analytics 4 is free, and not having it set up before launch means losing data you can never recover. Traffic on day one looks the same as day thirty without it.

**the minimum setup**

Create a GA4 property, add a web data stream, get the Measurement ID (G-XXXXXXXXXX), and install it. In WordPress I use the Google Site Kit plugin or add the gtag snippet directly to the theme. For other setups, it goes in the `<head>` via a script tag or through Google Tag Manager.

**enhanced measurement**

In the data stream settings, Enhanced Measurement is toggled off by default on new properties. Turn it on. It automatically tracks scroll depth, outbound link clicks, site search, video engagement, and file downloads without any additional code. Free data for one click.

**link GA4 to Google Search Console**

In GA4's admin, under Product Links, connect it to Search Console. This puts organic search query data inside GA4, meaning what people searched for before landing on the site. Essential for understanding where traffic comes from.

**set up conversion events**

GA4 tracks events. You decide which ones are conversions. For most projects that means: form submissions, button clicks that indicate purchase intent, successful checkout. Mark them as conversion events in the GA4 interface. Without this, you're watching traffic with no way to measure whether it does anything.

**the thing most people forget**

Internal traffic. Every visit from your own IP or the client's IP skews the data, especially in the first weeks when real traffic is low. In GA4's admin under Data Streams, add an internal traffic filter and exclude it from reports. Otherwise the numbers are noise.

<details>
<summary>the whole thing as a checklist</summary>

1. Create GA4 property + web data stream, install the Measurement ID
2. Turn on Enhanced Measurement in the stream settings
3. Link GA4 to Search Console under Product Links
4. Define conversion events (form submit, checkout, whatever "it worked" means for this site)
5. Filter internal traffic (yours and the client's IP)
6. Open Realtime, visit the site from your phone on mobile data, watch yourself show up

Step 6 is the one that catches typos in the Measurement ID before the client does.

</details>

Thirty minutes of setup before launch. The alternative is explaining to a client six months later why there's no data from the first month.
