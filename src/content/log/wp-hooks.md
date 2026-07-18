---
title: wordpress hooks and why they're the whole point
date: 2026-04-10
category: wordpress
---

Hooks are what make WordPress extensible without touching core files. Every plugin, every theme, every customization that doesn't involve editing WordPress itself works through hooks. Understanding them changes how you build.

There are two types.

**actions — do something**

An action fires at a specific point in WordPress's execution. You hook into it to run your own code at that moment.

```php
// enqueue scripts and styles properly
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('my-theme', get_stylesheet_uri());
    wp_enqueue_script('my-script', get_template_directory_uri() . '/js/main.js', [], '1.0', true);
});

// run code after a post is saved
add_action('save_post', function($post_id) {
    if (get_post_type($post_id) === 'member') {
        // sync member data somewhere
    }
});

// add something to the head
add_action('wp_head', function() {
    echo '<meta name="custom" content="value">';
});
```

Actions don't return values. They just run.

**filters — modify something**

A filter receives a value, lets you modify it, and expects the modified value back.

```php
// modify post content
add_filter('the_content', function($content) {
    if (is_single()) {
        $content .= '<p class="share-prompt">found this useful? share it.</p>';
    }
    return $content; // always return
});

// change the excerpt length
add_filter('excerpt_length', fn() => 20);

// add custom body classes
add_filter('body_class', function($classes) {
    if (is_page('contact')) {
        $classes[] = 'contact-page';
    }
    return $classes;
});
```

Forgetting to `return` in a filter breaks the value silently. Always return.

**priority and accepted_args**

Both functions take optional third and fourth parameters: priority (default 10, lower runs first) and the number of arguments passed to your callback.

```php
add_filter('the_content', 'my_callback', 5);    // runs before default priority
add_action('save_post', 'my_callback', 10, 2);  // receives $post_id and $post
```

Learn the hooks that matter for your project (`init`, `wp_enqueue_scripts`, `save_post`, `the_content`, `admin_menu`) and the rest follows naturally.
