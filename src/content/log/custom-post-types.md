---
title: custom post types and when pages aren't enough
date: 2026-04-28
category: wordpress
---

WordPress ships with posts and pages. Posts for chronological content, pages for static content. That covers a blog and a brochure site. It doesn't cover most real projects.

A membership platform needs members. A car marketplace needs listings. A restaurant site needs menu items. A portfolio needs projects. These are all distinct content types with their own fields, their own archive pages, their own admin sections. Putting them in posts or pages and hacking the structure works until it doesn't.

Custom post types give each content type its own home.

**registering a custom post type**

```php
add_action('init', function() {
    register_post_type('listing', [
        'label'       => 'Listings',
        'public'      => true,
        'has_archive' => true,
        'supports'    => ['title', 'thumbnail', 'editor'],
        'menu_icon'   => 'dashicons-car',
        'rewrite'     => ['slug' => 'listings'],
        'show_in_rest' => true, // enables block editor
    ]);
});
```

This adds a Listings section to the admin, a `/listings/` archive URL, and individual `/listings/post-name/` pages. Templates follow the WordPress template hierarchy: `archive-listing.php` and `single-listing.php`.

**custom post types and ACF**

The combination is what makes this powerful. Register the post type to define where the content lives, add ACF field groups to define what fields it has, write the template to display it. The client gets a clean admin form, you get structured data, and the layout is entirely in your hands.

**when to use CPT UI plugin vs code**

For simple projects or when the client might need to adjust settings later, the CPT UI plugin is fine. For anything production with version control, I register post types in code. It's predictable, portable, and doesn't depend on a database record.

If a content type has more than three fields and will have more than a handful of entries, it probably deserves its own post type.
