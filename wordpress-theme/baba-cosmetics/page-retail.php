<?php
/**
 * Template Name: Retail Shop Page
 * The template for displaying the Retail Cosmetics Shop
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

while (have_posts()) : the_post();
?>

  <!-- Hero Section -->
  <section class="hero-section-retail" style="background-image: linear-gradient(rgba(14, 15, 18, 0.38), rgba(20, 22, 28, 0.58)), url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-retail-bg.jpg'); ?>');">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <!-- Hero Badge -->
          <div class="entity-badge-stack">
            <span class="badge-dot" aria-hidden="true">●</span>
            <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="hero-title">Cosmetics Retail Shop in Itahari, Nepal</h1>

          <!-- Direct Guidance Snippet Box -->
          <div class="featured-snippet-box">
            <div class="snippet-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>Retail Shopping Policy</span>
            </div>
            <p class="snippet-text">Baba Cosmetics welcomes individual cosmetic shoppers to our retail showroom in Janta Galli, Itahari-6, Sunsari. Enjoy a flat 5% discount on MRP on all genuine skincare, haircare, and makeup products. Cash and QR mobile banking accepted. Inspection is encouraged at the counter before purchase.</p>
          </div>

          <!-- Hero CTAs -->
          <div class="hero-cta-group">
            <button type="button" class="btn btn-primary btn-stock" data-modal-open="modal-stock" data-modal-context="Retail Stock Check">
              <span>Check Product Stock</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <!-- Trust Micro-Points -->
          <div class="trust-micro-points">
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Flat 5% Off Any MRP</span>
            </div>
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>100% Genuine Brands</span>
            </div>
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Instant QR & Cash</span>
            </div>
          </div>
        </div>

        <!-- Right-Side Hero: Clean Baba Cosmetics Business Information Card -->
        <div class="hero-card-col">
          <?php get_template_part('template-parts/business-card'); ?>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content Body & Sidebar Area -->
  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          <?php the_content(); ?>
        </article>

        <!-- Sidebar Navigation & CTAs -->
        <aside class="sidebar-wrapper" aria-label="Retail Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Retail Counter Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-stock" data-modal-context="Retail Stock Check">Check Product Stock</button>
              <a href="<?php echo esc_url(home_url('/about/#store-location')); ?>" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;">Get Directions</a>
              <a href="https://wa.me/9779805303415" class="btn btn-whatsapp" style="width: 100%;" target="_blank" rel="noopener">WhatsApp Store</a>
            </div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Opening Hours</h3>
            <div class="sidebar-card-body" style="font-size: 0.875rem; line-height: 1.6;">
              <p><strong>Open:</strong> Everyday 8:00 AM – 6:00 PM</p>
              <p><strong>Closed:</strong> Thursdays</p>
              <p><strong>Discount:</strong> Flat 5% Off MRP</p>
              <p><strong>Payment:</strong> Cash & Instant QR Code</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <!-- Interactive Map Pack Section -->
  <?php get_template_part('template-parts/map-pack'); ?>

<?php
endwhile;

get_footer();
