<?php
/**
 * The main template file
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
          <header class="archive-header" style="margin-bottom: 2rem;">
            <h1 class="archive-title" style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 800; color: #1E293B; line-height: 1.25; margin-bottom: 0.5rem;">
              <?php
              if (is_home() && !is_front_page()) {
                  single_post_title();
              } elseif (is_archive()) {
                  the_archive_title();
              } elseif (is_search()) {
                  printf(esc_html__('Search Results for: %s', 'baba-cosmetics'), '<span>' . get_search_query() . '</span>');
              } else {
                  esc_html_e('Baba Cosmetics News & Guides', 'baba-cosmetics');
              }
              ?>
            </h1>
          </header>

          <?php
          if (have_posts()) :
              while (have_posts()) : the_post();
          ?>
            <div class="post-preview-card" style="margin-bottom: 2rem; padding: 1.5rem; background: #fff; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
              <h2 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">
                <a href="<?php the_permalink(); ?>" style="color: #1E293B; text-decoration: none;"><?php the_title(); ?></a>
              </h2>
              <div style="font-size: 0.85rem; color: #D71936; margin-bottom: 0.75rem; font-weight: 600;">
                <?php echo get_the_date(); ?>
              </div>
              <div style="color: #475569; line-height: 1.6; margin-bottom: 1rem;">
                <?php the_excerpt(); ?>
              </div>
              <a href="<?php the_permalink(); ?>" class="btn btn-sm btn-primary" style="display: inline-block;">Read Article &rarr;</a>
            </div>
          <?php
              endwhile;

              the_posts_pagination(array(
                  'mid_size'  => 2,
                  'prev_text' => __('&larr; Previous', 'baba-cosmetics'),
                  'next_text' => __('Next &rarr;', 'baba-cosmetics'),
              ));
          else :
          ?>
            <p><?php esc_html_e('No posts found.', 'baba-cosmetics'); ?></p>
          <?php
          endif;
          ?>
        </article>

        <!-- Sidebar Navigation & CTAs -->
        <aside class="sidebar-wrapper" aria-label="Quick Actions">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Commercial Actions</h3>
            <div class="sidebar-card-body">
              <button type="button" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-quote" data-modal-context="Index Quote">Request Price List</button>
              <button type="button" class="btn btn-secondary" style="width: 100%; margin-bottom: 0.75rem;" data-modal-open="modal-consultation" data-modal-context="Index Consultation">Book Consultation</button>
              <button type="button" class="btn btn-hero-white" style="width: 100%;" data-modal-open="modal-stock" data-modal-context="Index Stock Check">Check Stock</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

<?php
get_footer();
