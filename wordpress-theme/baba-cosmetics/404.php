<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

  <main class="main-content-area" id="main-content" style="padding: 4rem 0;">
    <div class="container" style="text-align: center; max-width: 640px; margin: 0 auto;">
      <div style="font-size: 5rem; font-family: var(--font-serif); font-weight: 900; color: #D71936; line-height: 1; margin-bottom: 1rem;">404</div>
      <h1 style="font-family: var(--font-serif); font-size: 2rem; color: #1E293B; margin-bottom: 1rem;">Page Not Found</h1>
      <p style="color: #64748B; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem;">The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our wholesale catalog or return to the Baba Cosmetics homepage.</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary">Return to Homepage</a>
        <a href="<?php echo esc_url(home_url('/wholesale-cosmetics/')); ?>" class="btn btn-hero-white">Wholesale Catalog</a>
      </div>
    </div>
  </main>

<?php
get_footer();
