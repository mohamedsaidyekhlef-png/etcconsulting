<?php
function et_consulting_scripts() {
    // Enqueue the main React build script
    wp_enqueue_script(
        'et-consulting-main',
        get_template_directory_uri() . '/assets/index-C6RXtQDi.js',
        array(),
        '1.0.0',
        true
    );

    // Enqueue the main styles
    wp_enqueue_style(
        'et-consulting-styles',
        get_template_directory_uri() . '/assets/index-MqFPL46v.css',
        array(),
        '1.0.0'
    );

    // Pass data to React if needed (e.g., API URLs)
    wp_localize_script('et-consulting-main', 'wpData', array(
        'rootUrl' => get_site_url(),
        'themeUrl' => get_template_directory_uri()
    ));
}
add_action('wp_enqueue_scripts', 'et_consulting_scripts');

// Add module type to script tag for Vite compatibility
function et_add_type_attribute($tag, $handle, $src) {
    if ('et-consulting-main' !== $handle) {
        return $tag;
    }
    return '<script type="module" src="' . esc_url($src) . '"></script>';
}
add_filter('script_loader_tag', 'et_add_type_attribute', 10, 3);

// Support for Title Tag
add_theme_support('title-tag');
?>