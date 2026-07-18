---
title: Business Makers Club
displayTitle: BMC
description: Membership platform for a Serbian entrepreneurial community. Handles member management, event participation, business matchmaking and role-based access across 50+ companies.
tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL']
year: 2025
liveUrl: 'https://bmclub.rs/'
featured: true
---

## Overview

Business Makers Club is a Serbian professional community built around the belief that entrepreneurs grow faster when they're surrounded by the right people. The club connects business owners, creatives and leaders through events, mentorship and structured collaboration. By the time they came to me, the community had grown past 50 member companies and managing everything manually wasn't sustainable anymore.

My role was development only. Direction and vision were already in place. I was there to build it.

## The Problem

Without a platform, everything was manual. Member lists, event coordination, access control. As the community scaled, that stopped working. New members arrive through an application or a referral, pay an annual membership fee, and expect a working profile from day one. The club needed a system where members manage their own data, admins manage everyone else, and the software enforces the boundaries between those roles rather than relying on people to remember them.

The permission model was the hardest part to get right. Three distinct roles, each with a different scope of what they can see and do, and none of them allowed to step into each other's territory.

## Architecture

The platform is really two applications sharing one codebase: a public site that presents the club, its activities and member search, and a login-gated member area behind it. Everything past the login screen is protected. Visitors hitting the members section land on authentication, not on data.

The application is built on Laravel 10 with a modular MVC structure and a clear separation between controllers, services and repositories. Business logic lives in the service layer. Data access is abstracted through repositories. Authorization happens at two levels: middleware blocks unauthorized requests before they reach the controllers, and policies handle permissions at the model level. If a user doesn't have access, they don't even reach the data.

```
app/
├── Http/
│   ├── Controllers/     # thin, delegate to services
│   └── Middleware/      # role enforcement, auth guards
├── Services/            # business logic layer
├── Repositories/        # data access abstraction
└── Policies/            # per-model authorization
```

## What I Built

**Authentication and Roles**

Three roles, one clear hierarchy. Members can manage their own profiles and data. IT Admins get user management and role assignment on top of that. HR Admins inherit all IT Admin permissions and also own the Activities module.

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin: 2rem 0;">
  <img src="/images/case-studies/bm-club/bm-club-1.webp" alt="BMC member login screen" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/bm-club/bm-club-2.webp" alt="BMC admin panel with member and activity counts" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/bm-club/bm-club-3.webp" alt="BMC club partners section" width="1200" height="653" loading="lazy" style="margin: 0;" />
  <img src="/images/case-studies/bm-club/bm-club-4.webp" alt="BMC member search with profile cards" width="1200" height="653" loading="lazy" style="margin: 0;" />
</div>

**Member Directory**

A searchable, filterable directory of 50+ member companies with dashboards tailored to each role. Member search is available right on the public homepage; the full directory lives behind login. What a member sees and what an admin sees are deliberately different.

**Activities Module**

A blog-style module where HR Admins publish club news and event recaps, with public display and search. The club runs it on their own, no developer in the loop. That was the goal.

**Security**

CSRF protection, input validation on all forms and permission enforcement at the infrastructure level. Security decisions don't live in the frontend.

## Tech Stack

- Laravel 10, PHP 8+
- Blade templates, Tailwind CSS, Vite
- MySQL
- Laravel Breeze / Sanctum with custom RBAC
- Composer, NPM, Artisan CLI
- Git and GitHub
- MVC with Service-Repository pattern

## What's Next

The platform is structured to grow without a rewrite. Planned additions include multilingual support, in-app messaging between members, a gamification layer with points and rewards, and an analytics dashboard for engagement tracking.
