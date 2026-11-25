<?php
/**
 * The header for the Baba Cosmetics theme
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <!-- Top Announcement Bar -->
  <aside class="top-notice-bar" aria-label="<?php esc_attr_e('Store Announcement', 'baba-cosmetics'); ?>">
    <span>Baba Cosmetics: Janta Galli, Itahari-6 • Landline: 025-583775 • Mobile/WhatsApp: 9805303415 • Everyday 8AM–6PM (Closed Thu) • Retail: Flat 5% Off MRP</span>
    <a href="<?php echo esc_url(home_url('/wholesale-cosmetics/how-to-order/')); ?>">Order Wholesale &rarr;</a>
  </aside>

  <!-- Primary Sticky Header with Dropdown Navigation -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo-wrap" aria-label="Baba Cosmetics Home">
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>" alt="Baba Cosmetics Logo" class="brand-logo-img" width="44" height="44">
        <div class="brand-text-block">
          <span class="brand-name">Baba Cosmetics</span>
          <span class="brand-locality">Janta Galli, Itahari-6</span>
        </div>
      </a>

      <!-- Primary Navigation with Dropdowns -->
      <nav class="primary-nav" id="primary-nav" aria-label="<?php esc_attr_e('Main Navigation', 'baba-cosmetics'); ?>">
        <?php
        if (has_nav_menu('primary')) {
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'      => 'nav-list',
                'fallback_cb'    => 'baba_default_nav_fallback',
            ));
        } else {
            baba_default_nav_fallback();
        }

        function baba_default_nav_fallback() {
            $current_url = home_url(add_query_arg(array(), $GLOBALS['wp']->request ?? ''));
        ?>
        <ul class="nav-list">
          <li><a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link <?php echo is_front_page() ? 'active' : ''; ?>">Home</a></li>
          <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/')); ?>" class="nav-link">Wholesale</a></li>
          <li><a href="<?php echo esc_url(home_url('/retail-cosmetics/')); ?>" class="nav-link">Retail Shop</a></li>
          
          <!-- Products Dropdown (7 Categories + Overview) -->
          <li class="nav-item-dropdown" data-dropdown="products">
            <div class="nav-dropdown-trigger-wrap">
              <a href="<?php echo esc_url(home_url('/cosmetics/')); ?>" class="nav-link dropdown-main-link">Products</a>
              <button type="button" class="dropdown-chevron-btn" aria-label="Toggle Products dropdown menu" aria-expanded="false" aria-haspopup="true">
                <span class="dropdown-chevron" aria-hidden="true">▾</span>
              </button>
            </div>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo esc_url(home_url('/cosmetics/')); ?>" class="dropdown-item-link dropdown-item-overview" role="menuitem"><strong>All Products Overview &rarr;</strong></a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/makeup/')); ?>" class="dropdown-item-link" role="menuitem">Makeup Products</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/skincare/')); ?>" class="dropdown-item-link" role="menuitem">Skincare Products</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/haircare/')); ?>" class="dropdown-item-link" role="menuitem">Hair Products</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/fragrance/')); ?>" class="dropdown-item-link" role="menuitem">Fragrance & Perfumes</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/body-care/')); ?>" class="dropdown-item-link" role="menuitem">Body Care</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/beauty-tools-accessories/')); ?>" class="dropdown-item-link" role="menuitem">Beauty Tools</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics/accessories/')); ?>" class="dropdown-item-link" role="menuitem">Accessories</a></li>
            </ul>
          </li>

          <!-- Cosmetic Guide Dropdown (6 Topics + Overview) -->
          <li class="nav-item-dropdown" data-dropdown="guides">
            <div class="nav-dropdown-trigger-wrap">
              <a href="<?php echo esc_url(home_url('/cosmetics-guide/')); ?>" class="nav-link dropdown-main-link">Cosmetic Guide</a>
              <button type="button" class="dropdown-chevron-btn" aria-label="Toggle Cosmetic Guide dropdown menu" aria-expanded="false" aria-haspopup="true">
                <span class="dropdown-chevron" aria-hidden="true">▾</span>
              </button>
            </div>
            <ul class="dropdown-menu" role="menu">
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/')); ?>" class="dropdown-item-link dropdown-item-overview" role="menuitem"><strong>All Guides Overview &rarr;</strong></a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/buying-guides/')); ?>" class="dropdown-item-link" role="menuitem">Cosmetic Sets & Buying Guides</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/skincare-routines/')); ?>" class="dropdown-item-link" role="menuitem">Skincare Routines</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/makeup-guides/')); ?>" class="dropdown-item-link" role="menuitem">Makeup Guides & Tips</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/understanding-products/')); ?>" class="dropdown-item-link" role="menuitem">Understanding Beauty Products</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/hair-body-care/')); ?>" class="dropdown-item-link" role="menuitem">Hair Care & Body Care</a></li>
              <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/beauty-tips-trends/')); ?>" class="dropdown-item-link" role="menuitem">Beauty Tips & Trends</a></li>
            </ul>
          </li>

          <li><a href="<?php echo esc_url(home_url('/about/')); ?>" class="nav-link">About Us</a></li>
        </ul>
        <?php } ?>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <button type="button" class="btn btn-primary btn-sm btn-quote" data-modal-open="modal-quote" data-modal-context="Request Quote">Request Quote</button>
        <button type="button" class="mobile-nav-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="primary-nav">☰</button>
      </div>
    </div>
  </header>

  <?php if (!is_front_page()) : ?>
  <!-- Breadcrumbs -->
  <nav class="breadcrumb-wrapper" aria-label="Breadcrumbs">
    <div class="container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li class="breadcrumb-item active"><span><?php wp_title('', true); ?></span></li>
      </ol>
    </div>
  </nav>
  <?php endif; ?>
