---
title: why i use acf on almost every wordpress project
date: 2026-03-23
category: wordpress
description: structured fields instead of "please format the bio the same way every time." the plugin that makes wordpress a real cms.
---

Advanced Custom Fields (ACF) lets you define structured field groups and attach them to any post type, page, user, taxonomy, or option page. It's the tool that makes WordPress a proper CMS instead of just a blogging platform.

**the problem it solves**

Without ACF, a "team member" page means the client edits the post body and hopes they remember to format the name, title, and bio consistently every time. With ACF, you define fields (Name, Title, Bio, Photo, LinkedIn URL) and the client fills in a structured form. The data is clean, the layout is controlled by the template, and nothing depends on the client remembering a format.

<details>
<summary>what the client sees, before vs after</summary>

Before: one big text editor. The last three team members were added with the name bolded, the name as a heading, and the name in italics with the title on the same line. All three look different on the site. Nobody did anything wrong on purpose.

After: five labeled fields. Name goes in Name. The photo uploader only accepts images. There is no way to do it inconsistently, which means there is nothing to fix later.

The template decides how it looks. The client decides only what it says. That separation is the entire value.

</details>

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

ACF lets you add custom admin pages for global settings, the things that don't belong to a specific post. Site-wide phone number, address, social links, opening hours. The client edits them in one place, they appear wherever the template uses them.

```php
// register an options page
acf_add_options_page('Site Settings');

// use in templates
$phone = get_field('phone_number', 'option');
```

**flexible content and repeater fields**

For layouts that vary, like a page with alternating text/image sections or a features list with unknown length, ACF's Repeater and Flexible Content fields handle it without a page builder.

The free version covers most use cases. Repeater and Flexible Content are Pro features, but for most client projects, the Pro license pays for itself on the first project.

I've shipped projects without ACF. I always miss it.
