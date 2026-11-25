<?php
require_once 'C:/Users/BN/Local Sites/smaran-raut/app/public/wp-load.php';

$p = get_page_by_path('wholesale-cosmetics');
if ($p) {
    echo "Found wholesale-cosmetics: ID={$p->ID}, status={$p->post_status}, template=" . get_post_meta($p->ID, '_wp_page_template', true) . "\n";
} else {
    echo "NOT FOUND wholesale-cosmetics by path\n";
    $pages = get_posts(['post_type' => 'page', 's' => 'wholesale', 'post_status' => 'any']);
    foreach ($pages as $pg) {
        echo "Candidate: ID={$pg->ID}, slug={$pg->post_name}, title={$pg->post_title}, status={$pg->post_status}, parent={$pg->post_parent}\n";
    }
}
