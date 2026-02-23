---
title: Business Makers Club
description: Full-stack web platform for a Serbian professional networking community connecting entrepreneurs, creatives, and business leaders.
tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL']
year: 2025
---

## Overview

Business Makers Club is a Serbian professional networking community that brings together entrepreneurs, creatives, and business leaders through events, mentorship, and collaboration. I was brought on to build the platform from the ground up — a full-stack web application that serves as the community's digital hub for member management, event participation, and business matchmaking.

My role was purely development. The platform needed to handle a diverse user base, enforce strict access control across roles, and be structured to grow as the club expands.

## Problem

The club was operating without a centralized digital platform. Managing members, publishing activities, and controlling who can access what was being handled manually. As membership grew, this became unsustainable.

The core challenges were:

- **Role-based access** — different users (members, IT admins, HR admins) needed different views and permissions, without any overlap or privilege escalation
- **Member directory** — the community needed a searchable, filterable directory with profile management
- **Scalability** — the architecture had to support continuous growth in membership and events without a full rewrite down the road

## Architecture

The application follows a modular **MVC architecture** using Laravel 10, with a clear separation between controllers, services, and repositories. This pattern keeps business logic out of controllers and makes individual components independently testable and replaceable.

```
app/
├── Http/
│   ├── Controllers/     # thin, delegate to services
│   └── Middleware/      # role enforcement, auth guards
├── Services/            # business logic layer
├── Repositories/        # data access abstraction
└── Policies/            # per-model authorization
```

Role-based access is enforced at two levels: middleware intercepts routes before they reach controllers, and policies handle model-level permissions. This means a user with insufficient privileges is blocked at the edge — they never reach the data layer.

## Key Features Built

**Authentication & Role System**

Three roles with a clear privilege hierarchy:

- **User** — profile management and personal data
- **IT Admin** — extends User with full user management and role assignment
- **HR Admin** — inherits IT Admin permissions and has full CRUD over the Activities module

**Member Directory**

A searchable, filterable directory of 50+ member companies with dashboards tailored to each role. Members can manage their own profiles; admins get an expanded view with management controls.

**Activities Module**

Full CRUD for club events and member engagement, accessible to HR Admins. Displays recent events publicly and tracks member participation.

**Security Layer**

CSRF protection, validation layers on all inputs, and middleware/policy guards on every protected route. No security logic is left to the frontend.

## Tech Stack

- **Backend:** Laravel 10, PHP 8+
- **Frontend:** Blade templates, Tailwind CSS, Vite
- **Database:** MySQL
- **Auth:** Laravel Breeze / Sanctum with custom RBAC
- **Build:** Composer, NPM, Artisan CLI
- **Version Control:** Git & GitHub
- **Architecture:** MVC, Service-Repository pattern

## What's Next

The platform is designed to accommodate planned features without structural changes:

- Multilingual support (Serbian / English)
- In-app messaging between members
- Gamification — point collection and in-app rewards
- Member benefits program with reward tracking
- Analytics dashboard for activity and engagement metrics
- Real-time notifications for events and updates
