<?php
/**
 * Template Name: About Page
 * The template for displaying the About Us page
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
  <section class="hero-section-page">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <!-- Hero Badge -->
          <div class="entity-badge-stack">
            <span class="badge-dot" aria-hidden="true">●</span>
            <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="hero-title">About Baba Cosmetics: Best Cosmetic Seller in Itahari</h1>

          <!-- Direct Guidance Snippet Box -->
          <div class="featured-snippet-box">
            <div class="snippet-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>About Baba Cosmetics</span>
            </div>
            <p class="snippet-text">Baba Cosmetics is Itahari's premier wholesale and retail cosmetics establishment, located at Janta Galli, Itahari-6, Sunsari. Operating under PAN 600881922, we connect national beauty importers with local retailers, beauty salons, and individual shoppers, supplying 100% genuine skincare, makeup, and haircare formulations across Eastern Nepal.</p>
          </div>

          <!-- Hero CTAs -->
          <div class="hero-cta-group">
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn btn-primary">
              <span>Contact Us</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button type="button" class="btn btn-hero-white btn-stock" data-modal-open="modal-stock" data-modal-context="About Us Stock Check">
              <span>Check Product Stock</span>
            </button>
          </div>

          <!-- Trust Micro-Points -->
          <div class="trust-micro-points">
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>100% Genuine Products</span>
            </div>
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>PAN: 600881922</span>
            </div>
            <div class="trust-micro-point">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Local Service in Itahari</span>
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

  <!-- Our Store - Photo Gallery (Immediately after Hero Section) -->
  <?php get_template_part('template-parts/store-gallery'); ?>

  <!-- Main Content Body & Sidebar Area -->
  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          <?php the_content(); ?>
        </article>

        <!-- Sidebar Navigation & CTAs -->
        <aside class="sidebar-wrapper" aria-label="Quick Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Commercial Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-quote" data-modal-context="Wholesale Quote">Request Price List</button>
              <button type="button" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-consultation" data-modal-context="Book Consultation">Book Consultation</button>
              <button type="button" class="btn btn-hero-white" style="width: 100%;" data-modal-open="modal-stock" data-modal-context="Check Stock">Check Stock</button>
            </div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Store Hours & Contact</h3>
            <div class="sidebar-card-body" style="font-size: 0.875rem; line-height: 1.6;">
              <p><strong>Open:</strong> Everyday 8:00 AM – 6:00 PM</p>
              <p><strong>Closed:</strong> Thursdays (Weekly Holiday)</p>
              <p><strong>Phone:</strong> <a href="tel:+97725583775">025-583775</a></p>
              <p><strong>Mobile/WhatsApp:</strong> <a href="https://wa.me/9779805303415" target="_blank" rel="noopener">9805303415</a></p>
              <p><strong>Location:</strong> Janta Galli, Itahari-6, Sunsari</p>
              <p><strong>PAN:</strong> 600881922</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <!-- Developer Attribution Section (Immediately above Map Pack) -->
  <section class="developer-attribution-section" aria-label="<?php esc_attr_e('Website Attribution', 'baba-cosmetics'); ?>">
    <div class="container">
      <p class="developer-attribution-text">
        Web Development &amp; SEO by <a href="https://www.smaranraut.com.np" target="_blank" rel="noopener noreferrer">Smaran Raut</a>
      </p>
    </div>
  </section>

  <!-- Interactive Map Pack Section -->
  <?php get_template_part('template-parts/map-pack'); ?>

<?php
endwhile;

get_footer();
