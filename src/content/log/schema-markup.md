---
title: schema markup and what it actually does in search results
date: 2026-04-03
category: seo
---

Schema markup is structured data you add to a page to help search engines understand what the content is, not just what it says. The result can be rich results in search — expanded listings that show ratings, prices, FAQs, event dates, or business hours directly in the search result.

**the format**

JSON-LD is the recommended format. It goes in a `<script>` tag in the `<head>`, separate from the HTML content. Clean and non-invasive.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Avellana Consulting",
  "url": "https://avellana.consulting",
  "telephone": "+381-...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Belgrade",
    "addressCountry": "RS"
  }
}
</script>
```

**types that come up most in real projects**

`Organization` or `LocalBusiness` — for any business site. Establishes identity signals for Google.

`FAQPage` — marks up a Q&A section. Google can show the questions and answers directly in the search result as an expandable panel. Good for service pages.

```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are your working hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Monday to Friday, 9am to 6pm."
    }
  }]
}
```

`Product` — for e-commerce. Shows price and availability in search results.

`BreadcrumbList` — shows the page path in the search result URL area. Helps users and Google understand site structure.

`WebSite` — enables the sitelinks search box on the homepage in some cases.

**how to check if it works**

Google's Rich Results Test (search for it, it's a free tool) validates your markup and shows a preview of how it might appear in search. Search Console also has a Rich Results report once the site has traffic.

Not every page needs schema. The homepage, service pages, product pages, and any page with structured data like FAQs or events are the highest-priority targets.
