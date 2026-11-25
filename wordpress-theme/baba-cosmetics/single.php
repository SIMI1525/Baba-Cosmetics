<?php
/**
 * The template for displaying all single posts
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          <?php
          if (have_posts()) :
              while (have_posts()) : the_post();
          ?>
            <header class="single-entry-header" style="margin-bottom: 2rem;">
              <div class="entry-meta" style="font-size: 0.85rem; color: #D71936; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
                <?php echo get_the_date(); ?> • <?php the_author(); ?>
              </div>
              <h1 class="single-title" style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 800; color: #1E293B; line-height: 1.25; margin-bottom: 1.25rem;"><?php the_title(); ?></h1>
              <?php if (has_post_thumbnail()) : ?>
                <div class="single-featured-image" style="margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
                  <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; display: block;')); ?>
                </div>
              <?php endif; ?>
            </header>

            <div class="entry-content">
              <?php the_content(); ?>
            </div>

            <footer class="single-entry-footer" style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #E2E8F0;">
              <div class="post-tags" style="font-size: 0.875rem; color: #64748B;">
                <?php the_tags('<strong>Tags:</strong> ', ', ', ''); ?>
              </div>
            </footer>
          <?php
              endwhile;
          else :
          ?>
            <p><?php esc_html_e('Sorry, no post was found.', 'baba-cosmetics'); ?></p>
          <?php
          endif;
          ?>
        </article>

        <!-- Sidebar Navigation & CTAs -->
        <aside class="sidebar-wrapper" aria-label="Post Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Commercial Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-quote" data-modal-context="Post Quote">Request Price List</button>
              <button type="button" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-consultation" data-modal-context="Post Consultation">Book Consultation</button>
              <button type="button" class="btn btn-hero-white" style="width: 100%;" data-modal-open="modal-stock" data-modal-context="Post Stock Check">Check Stock</button>
            </div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Need Guidance?</h3>
            <div class="sidebar-card-body" style="font-size: 0.875rem; line-height: 1.6;">
              <p>Contact Baba Cosmetics experts directly via WhatsApp for authentic cosmetics advice or wholesale trade pricing.</p>
              <a href="https://wa.me/9779805303415" class="btn btn-whatsapp" style="width: 100%; margin-top: 0.5rem;" target="_blank" rel="noopener">Chat on WhatsApp</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

<?php
get_footer();
