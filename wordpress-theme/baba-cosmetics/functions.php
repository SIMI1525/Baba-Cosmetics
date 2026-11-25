<?php
/**
 * Baba Cosmetics Theme Functions & Definitions
 * Location: Janta Galli, Itahari-6, Sunsari, Koshi Province, Nepal
 * PAN: 600881922
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('BABA_COSMETICS_VERSION', '1.0.6');
define('BABA_COSMETICS_PAN', '600881922');
define('BABA_COSMETICS_LANDLINE', '025-583775');
define('BABA_COSMETICS_MOBILE', '9805303415');
define('BABA_COSMETICS_ADDRESS', 'Janta Galli, Itahari-6, Sunsari, Nepal');
define('BABA_COSMETICS_LAT', '26.66160862187367');
define('BABA_COSMETICS_LNG', '87.2751234852559');

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function baba_cosmetics_setup() {
    // Make theme available for translation.
    load_theme_textdomain('baba-cosmetics', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom Logo Support
    add_theme_support('custom-logo', array(
        'height'      => 44,
        'width'       => 44,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Register primary and footer navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation Menu', 'baba-cosmetics'),
        'footer'  => __('Footer Navigation Menu', 'baba-cosmetics'),
    ));
}
add_action('after_setup_theme', 'baba_cosmetics_setup');

/**
 * Enqueue scripts and styles.
 */
function baba_cosmetics_scripts() {
    // Google Fonts: Playfair Display + Plus Jakarta Sans
    wp_enqueue_style(
        'baba-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Main Theme Stylesheet
    wp_enqueue_style(
        'baba-cosmetics-style',
        get_stylesheet_uri(),
        array('baba-google-fonts'),
        BABA_COSMETICS_VERSION
    );

    // Global Interactive Client Application Script
    wp_enqueue_script(
        'baba-cosmetics-app',
        get_template_directory_uri() . '/assets/js/app.js',
        array(),
        BABA_COSMETICS_VERSION,
        true
    );

    // Localize script with site data
    wp_localize_script('baba-cosmetics-app', 'babaSiteData', array(
        'ajaxUrl'  => admin_url('admin-ajax.php'),
        'themeUrl' => get_template_directory_uri(),
        'pan'      => BABA_COSMETICS_PAN,
        'phone'    => BABA_COSMETICS_LANDLINE,
        'mobile'   => BABA_COSMETICS_MOBILE,
    ));
}
add_action('wp_enqueue_scripts', 'baba_cosmetics_scripts');

/**
 * Helper: Output Baba Cosmetics Business Info Card
 */
function baba_render_business_info_card() {
    ob_start();
    get_template_part('template-parts/business-card');
    return ob_get_clean();
}
add_shortcode('baba_business_card', 'baba_render_business_info_card');

/**
 * Helper: Output Real Store Photo Gallery
 */
function baba_render_store_gallery() {
    ob_start();
    get_template_part('template-parts/store-gallery');
    return ob_get_clean();
}
add_shortcode('baba_store_gallery', 'baba_render_store_gallery');

/**
 * Helper: Output Baba Traders Interactive Map Pack
 */
function baba_render_map_pack() {
    ob_start();
    get_template_part('template-parts/map-pack');
    return ob_get_clean();
}
add_shortcode('baba_map_pack', 'baba_render_map_pack');

/**
 * Universal Routing Guard: Catch any request for a Baba Cosmetics route and guarantee 200 OK + correct template & post
 */
function baba_cosmetics_template_router($template) {
    $request_uri = $_SERVER['REQUEST_URI'] ?? '/';
    $path = trim(parse_url($request_uri, PHP_URL_PATH), '/');
    $norm_path = empty($path) ? '/' : '/' . $path . '/';

    $manifest_file = get_template_directory() . '/baba-pages-manifest.json';
    if (!file_exists($manifest_file)) {
        return $template;
    }

    $manifest = json_decode(file_get_contents($manifest_file), true);
    if (!isset($manifest[$norm_path])) {
        $norm_alt = empty($path) ? '/' : '/' . $path;
        if (!isset($manifest[$norm_alt])) {
            return $template;
        }
        $norm_path = $norm_alt;
    }

    $page_data = $manifest[$norm_path];
    $GLOBALS['baba_current_page'] = $page_data;

    // Clear 404 status
    global $wp_query, $post;
    if ($wp_query && $wp_query->is_404) {
        $wp_query->is_404 = false;
        status_header(200);
    }

    // Try finding the corresponding WordPress post
    $clean_path = trim($norm_path, '/');
    $found_post = !empty($clean_path) ? get_page_by_path($clean_path) : get_post(get_option('page_on_front'));

    if ($found_post && is_object($wp_query)) {
        $post = $found_post;
        setup_postdata($post);
        $wp_query->queried_object = $post;
        $wp_query->queried_object_id = $post->ID;
        $wp_query->is_page = true;
        $wp_query->is_singular = true;
        $wp_query->posts = array($post);
        $wp_query->post_count = 1;
    }

    // Choose template
    $tpl_name = $page_data['template'];
    $custom_template = locate_template(array($tpl_name));
    if ($custom_template) {
        return $custom_template;
    }

    return $template;
}
add_filter('template_include', 'baba_cosmetics_template_router', 99);
