---
title: Auto Baza
description: Automotive marketplace for buying, selling and bidding on vehicles. Advanced filtering, detailed listings, seller verification and tiered advertising packages.
tags: ['WordPress', 'Custom Development', 'Marketplace']
year: 2024
featured: true
---

## Overview

Picture an automotive marketplace built around three actions: buy, sell, bid. Most vehicle listing platforms in the region are either too simple or too overwhelming. Buyers can't filter effectively, sellers have limited control over their listings, and there's no reason for anyone to come back after a transaction is done. Auto Baza was designed to fix all three.

My role was full platform development on WordPress.

## The Problem

The client wanted a marketplace that felt serious. Not a classifieds board but a proper platform where both buyers and sellers have tools that work. Listings needed to be detailed enough to make a real decision from. Search needed to be precise enough to actually shrink the result set. And the platform needed a business model built in, not bolted on later.

## What I Built

**Vehicle Listings**

Each listing covers everything a buyer needs: make, model, year, mileage, fuel type, emission class, registration status, import country, damage assessment and price. The grid layout is optimized for scanning. When you know what you're looking for, you find it fast.

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin: 2rem 0;">
  <img src="/images/case-studies/autobaza/autobaza-1.webp" alt="Auto Baza login screen" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/autobaza/autobaza-2.webp" alt="Auto Baza ad packages with token tiers from Basic to Platinum" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/autobaza/autobaza-3.webp" alt="Auto Baza seller dashboard with active listings management" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/autobaza/autobaza-4.webp" alt="Auto Baza registration with individual and business account types" width="1200" height="653" loading="lazy" style="margin: 0;" />
</div>

**Search and Filtering**

Buyers can narrow by advertiser type, listing age, drivetrain, emission class, color, registration status, damage condition, safety equipment and price range. The goal was to reduce the result set to something actually useful, not just sort a long list.

**User System**

Registration separates private sellers from businesses, each with their own toolset, and buyers can filter by seller type. Every seller gets a dashboard: active and inactive listings with expiry dates, editing, extending and deactivating in one place, plus favorites, direct messaging between buyers and sellers, and full profile management. Each listing even shows how many people favorited it.

**Ad Packages and Tokens**

Monetization was designed around tokens, the platform's internal currency. Four packages, Basic through Platinum, load a seller's account with tokens that publishing and promoting listings spend down. A seller picks the tier that fits how much they sell. The business model ships with the platform instead of being retrofitted onto it.

## Tech Stack

- WordPress
- HTML, CSS, JavaScript
- Custom marketplace development
- Advanced filtering and user messaging
- Token-based ad packages
