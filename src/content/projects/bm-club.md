---
title: Business Makers Club
displayTitle: BMC
description: Membership platform for a Serbian entrepreneurial community. Handles member management, event participation, business matchmaking and role-based access across 40+ companies.
tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL']
year: 2025
liveUrl: 'https://bmclub.rs/'
featured: true
---

## Overview

Business Makers Club is a Serbian professional community built around the belief that entrepreneurs grow faster when they're surrounded by the right people. The club connects business owners, creatives and leaders through events, mentorship and structured collaboration. By the time they came to me, the community had grown past 40 member companies and managing everything manually wasn't sustainable anymore.

My role was development only. Direction and vision were already in place. I was there to build it.

## The Problem

Without a platform, everything was manual. Member lists, event coordination, access control. As the community scaled, that stopped working. The club needed a system where members could manage their own profiles, admins could manage everyone else, and the software enforced the boundaries between those roles rather than relying on people to remember them.

The permission model was the hardest part to get right. Three distinct roles, each with a different scope of what they can see and do, and none of them allowed to step into each other's territory.

## Architecture

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

Three roles, one clear hierarchy. Regular members can manage their own profiles and data. IT Admins get user management and role assignment on top of that. HR Admins inherit all IT Admin permissions and also own the Activities module, including full event management.

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin: 2rem 0;">
  <div style="aspect-ratio: 4/3; background: var(--border); display: flex; align-items: center; justify-content: center; border-radius: 2px;">
    <span style="font-family: var(--font-display); font-size: 11px; letter-spacing: 0.1em; color: var(--text-3);">screenshot</span>
  </div>
  <div style="aspect-ratio: 4/3; background: var(--border); display: flex; align-items: center; justify-content: center; border-radius: 2px;">
    <span style="font-family: var(--font-display); font-size: 11px; letter-spacing: 0.1em; color: var(--text-3);">screenshot</span>
  </div>
  <div style="aspect-ratio: 4/3; background: var(--border); display: flex; align-items: center; justify-content: center; border-radius: 2px;">
    <span style="font-family: var(--font-display); font-size: 11px; letter-spacing: 0.1em; color: var(--text-3);">screenshot</span>
  </div>
  <div style="aspect-ratio: 4/3; background: var(--border); display: flex; align-items: center; justify-content: center; border-radius: 2px;">
    <span style="font-family: var(--font-display); font-size: 11px; letter-spacing: 0.1em; color: var(--text-3);">screenshot</span>
  </div>
</div>

**Member Directory**

A searchable, filterable directory of 50+ member companies with dashboards tailored to each role. What a member sees and what an admin sees are deliberately different.

**Activities Module**

Full event management for HR Admins, with public event display and participation tracking. The club can publish events, manage attendance and keep the community active.

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
