<?php
/**
 * The template for displaying all pages
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

while (have_posts()) : the_post();
    $baba_hero = get_post_meta(get_the_ID(), '_baba_hero_html', true);
    $baba_path = get_post_meta(get_the_ID(), '_baba_path', true);
    $baba_snippet = get_post_meta(get_the_ID(), '_baba_snippet', true);
?>

  <?php if (!empty($baba_hero)) : ?>
    <?php echo $baba_hero; ?>
  <?php else : ?>
    <!-- Fallback Hero Section -->
    <section class="hero-section-page">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="entity-badge-stack">
              <span class="badge-dot" aria-hidden="true">●</span>
              <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
            </div>
            <h1 class="hero-title"><?php the_title(); ?></h1>
            <?php if (!empty($baba_snippet)) : ?>
              <div class="featured-snippet-box">
                <div class="snippet-tag">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  <span>Quick Overview</span>
                </div>
                <p class="snippet-text"><?php echo esc_html($baba_snippet); ?></p>
              </div>
            <?php endif; ?>
            <div class="hero-cta-group">
              <button type="button" class="btn btn-primary btn-quote" data-modal-open="modal-quote" data-modal-context="Page Quote">
                <span>Request Information</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button type="button" class="btn btn-outline btn-stock" data-modal-open="modal-stock" data-modal-context="Stock Check">
                <span>Check Product Stock</span>
              </button>
            </div>
          </div>
          <div class="hero-card-col">
            <?php get_template_part('template-parts/business-card'); ?>
          </div>
        </div>
      </div>
    </section>
  <?php endif; ?>

  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          <?php the_content(); ?>
        </article>

        <!-- Sidebar Navigation & CTAs -->
        <aside class="sidebar-wrapper" aria-label="Page Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Commercial Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-quote" data-modal-context="Page Wholesale Quote">Request Price List</button>
              <button type="button" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-consultation" data-modal-context="Page Consultation">Book Consultation</button>
              <button type="button" class="btn btn-hero-white" style="width: 100%;" data-modal-open="modal-stock" data-modal-context="Page Stock Check">Check Product Stock</button>
            </div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Baba Cosmetics Store</h3>
            <div class="sidebar-card-body" style="font-size: 0.875rem; line-height: 1.6;">
              <p><strong>Address:</strong> Janta Galli, Itahari-6, Sunsari</p>
              <p><strong>Landline:</strong> <a href="tel:+97725583775">025-583775</a></p>
              <p><strong>Mobile/WhatsApp:</strong> <a href="https://wa.me/9779805303415" target="_blank" rel="noopener">9805303415</a></p>
              <p><strong>Hours:</strong> Everyday 8:00 AM – 6:00 PM (Closed Thu)</p>
              <p><strong>PAN:</strong> 600881922</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <?php if ($baba_path === '/location/' || $baba_path === '/about/') : ?>
    <?php get_template_part('template-parts/map-pack'); ?>
  <?php endif; ?>

<?php
endwhile;

get_footer();
