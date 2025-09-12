<?php
/**
 * Mobamovia Child Theme Functions
 */


add_action('wp_enqueue_scripts', 'mobamovia_enqueue_styles');
function mobamovia_enqueue_styles() {
    wp_enqueue_style('frost-parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('mobamovia-child-style', get_stylesheet_uri(), array('frost-parent-style'), wp_get_theme()->get('Version'));

    wp_enqueue_script('jquery');

    wp_enqueue_script('mobamovia-custom-script', get_stylesheet_directory_uri() . '/custom_script.js',
        array(), filemtime(get_stylesheet_directory() . '/custom_script.js'), true );
}
