<?php
require_once 'C:/Users/BN/Local Sites/smaran-raut/app/public/wp-load.php';

echo "WordPress Loaded. Site URL: " . get_site_url() . PHP_EOL;

$pages = get_posts([
    'post_type' => 'page',
    'numberposts' => -1,
    'post_status' => 'any'
]);

echo "Total pages: " . count($pages) . PHP_EOL;
foreach ($pages as $p) {
    $uri = get_page_uri($p);
    $template = get_post_meta($p->ID, '_wp_page_template', true);
    echo sprintf("ID: %4d | Status: %-7s | Slug: %-25s | URI: %-45s | Template: %s\n", 
        $p->ID, $p->post_status, $p->post_name, $uri, $template);
}
