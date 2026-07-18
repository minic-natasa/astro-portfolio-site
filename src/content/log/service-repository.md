---
title: "service-repository pattern: when it's worth it and when it's just extra files"
date: 2026-05-12
category: laravel
---

The service-repository pattern gets recommended a lot in Laravel circles. Controllers delegate to services, services use repositories for data access, everything is abstracted and testable and clean. On paper it's elegant.

In practice, on a small project, it's three files where one would do.

For BMC it made sense. The application was big enough that a controller touching the database directly would've become unreadable fast. The service layer gave us a place to put the actual business logic — eligibility checks, role assignments, event registration rules — without mixing it into HTTP handling. The repository layer meant if we ever needed to swap out how a query worked, we changed it in one place.

```
app/
├── Http/Controllers/ActivityController.php   // receives request, returns response
├── Services/ActivityService.php              // business logic lives here
└── Repositories/ActivityRepository.php       // database queries live here
```

The controller doesn't know how data is fetched. The service doesn't know it's talking to MySQL. Each layer has one job.

But I've worked on smaller projects where setting this up was just friction. A five-page brochure site with a contact form doesn't need a repository. A simple admin panel for one model doesn't need a service. Patterns exist to solve problems. If the problem isn't there yet, the pattern is overhead.

My rule: if a controller action is doing more than one meaningful thing, start thinking about a service. If the same database query is needed in more than two places, put it in a repository. Otherwise, keep it simple.
