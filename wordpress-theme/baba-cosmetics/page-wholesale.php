<?php
/**
 * Template Name: Wholesale Page
 * The template for displaying Wholesale Cosmetics pages
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
  <section class="hero-section-wholesale" style="background-image: linear-gradient(rgba(14, 15, 18, 0.40), rgba(20, 22, 28, 0.60)), url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-wholesale-bg.jpg'); ?>');">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <!-- Hero Badge -->
          <div class="entity-badge-stack">
            <span class="badge-dot" aria-hidden="true">●</span>
            <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="hero-title">Wholesale Cosmetics Supplier in Itahari & Koshi Province</h1>

          <!-- Direct Guidance Snippet Box -->
          <div class="featured-snippet-box">
            <div class="snippet-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>About Wholesale Supply</span>
            </div>
            <p class="snippet-text">Baba Cosmetics is the premier commercial wholesale cosmetics supplier in Itahari, operating from Janta Galli, Itahari-6, Sunsari. We supply retail cosmetic stores, pharmacies, and beauty parlors across Eastern Nepal with verified authentic cosmetics, official VAT invoicing, zero minimum order restrictions, and regional transport dispatch across the whole Koshi Province.</p>
          </div>

          <!-- Hero CTAs -->
          <div class="hero-cta-group">
            <button type="button" class="btn btn-primary btn-quote" data-modal-open="modal-quote" data-modal-context="Request Wholesale Quote">
              <span>Request Price List</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="<?php echo esc_url(home_url('/wholesale-cosmetics/how-to-order/')); ?>" class="btn btn-hero-white">
              <span>How to Order</span>
            </a>
            <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20am%20interested%20in%20your%20wholesale%20products%20and%20pricing." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
              <span>Chat on WhatsApp</span>
            </a>
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
              <span>Whole Koshi Province Delivery</span>
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
        <aside class="sidebar-wrapper" aria-label="Wholesale Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Commercial Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-quote" data-modal-context="Wholesale Quote">Request Price List</button>
              <button type="button" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-consultation" data-modal-context="Commercial Consultation">Book Trade Consult</button>
              <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics,%20I%20want%20to%20order%20wholesale%20cosmetics" class="btn btn-whatsapp" style="width: 100%;" target="_blank" rel="noopener">WhatsApp Wholesale Desk</a>
            </div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Wholesale Terms</h3>
            <div class="sidebar-card-body" style="font-size: 0.875rem; line-height: 1.6;">
              <p><strong>MOQ:</strong> No minimum order</p>
              <p><strong>Billing:</strong> PAN 600881922 Official Tax Invoices</p>
              <p><strong>Coverage:</strong> Whole Koshi Province</p>
              <p><strong>Payment:</strong> Cash & Bank Transfer</p>
              <p><strong>Credit Terms:</strong> Credit not available for newcomers</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

<?php
endwhile;

get_footer();
