---
title: why i use acf on almost every wordpress project
date: 2026-03-23
category: wordpress
---

Advanced Custom Fields (ACF) lets you define structured field groups and attach them to any post type, page, user, taxonomy, or option page. It's the tool that makes WordPress a proper CMS instead of just a blogging platform.

**the problem it solves**

Without ACF, a "team member" page means the client edits the post body and hopes they remember to format the name, title, and bio consistently every time. With ACF, you define fields — Name, Title, Bio, Photo, LinkedIn URL — and the client fills in a structured form. The data is clean, the layout is controlled by the template, and nothing depends on the client remembering a format.

**field groups**

You define field groups in the admin, attach them to specific post types or templates, and access them in PHP with `get_field()`:

```php
// single-team-member.php
$name     = get_field('name');
$title    = get_field('job_title');
$linkedin = get_field('linkedin_url');
$photo    = get_field('profile_photo'); // returns an array with url, alt, etc.
```

**option pages**

ACF lets you add custom admin pages for global settings — things that don't belong to a specific post. Site-wide phone number, address, social links, opening hours. The client edits them in one place, they appear wherever the template uses them.

```php
// register an options page
acf_add_options_page('Site Settings');

// use in templates
$phone = get_field('phone_number', 'option');
```

**flexible content and repeater fields**

For layouts that vary — a page with alternating text/image sections, a features list with unknown length — ACF's Repeater and Flexible Content fields handle it without a page builder.

The free version covers most use cases. Repeater and Flexible Content are Pro features, but for most client projects, the Pro license pays for itself on the first project.

I've shipped projects without ACF. I always miss it.
