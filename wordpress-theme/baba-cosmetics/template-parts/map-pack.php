<?php
/**
 * Template Part: Baba Cosmetics Interactive Map Pack & Simplified Contact Panel
 *
 * @package Baba_Cosmetics
 */

$theme_uri = get_template_directory_uri();
?>
<section class="map-pack-section" id="store-location" aria-label="Baba Cosmetics Store Location & Map">
  <div class="container">
    <div class="map-pack-header">
      <div class="map-pack-badge">
        <span class="badge-dot" aria-hidden="true">●</span>
        <span>Store Location & Directions</span>
      </div>
      <h2 class="map-pack-title">Visit Baba Cosmetics in Itahari</h2>
      <p class="map-pack-subtitle">Located in Janta Galli, Itahari-6, Sunsari. Wholesale commercial supply counter and retail beauty showroom open daily.</p>
    </div>

    <div class="map-pack-grid">
      <!-- Simplified, Compact Business Information Panel -->
      <div class="map-business-card">
        <div class="map-card-top">
          <div class="map-brand-header">
            <img src="<?php echo esc_url($theme_uri . '/assets/images/logo.png'); ?>" alt="Baba Cosmetics Logo" class="map-brand-logo" width="44" height="44">
            <div>
              <h3 class="map-business-name">Baba Cosmetics</h3>
              <div class="map-business-tagline">Wholesale &amp; Retail Cosmetics Store</div>
            </div>
          </div>
        </div>

        <div class="map-details-list">
          <div class="map-detail-item">
            <span class="map-detail-icon" aria-hidden="true">📍</span>
            <div class="map-detail-content">
              <strong>Address</strong>
              <p>Janta Galli, Itahari-6, Sunsari, Nepal</p>
            </div>
          </div>

          <div class="map-detail-item">
            <span class="map-detail-icon" aria-hidden="true">📞</span>
            <div class="map-detail-content">
              <strong>Phone</strong>
              <p><a href="tel:+97725583775">025-583775</a></p>
            </div>
          </div>

          <div class="map-detail-item">
            <span class="map-detail-icon" aria-hidden="true">💬</span>
            <div class="map-detail-content">
              <strong>WhatsApp</strong>
              <p><a href="https://wa.me/9779805303415" target="_blank" rel="noopener noreferrer">+977-9805303415</a></p>
            </div>
          </div>

          <div class="map-detail-item">
            <span class="map-detail-icon" aria-hidden="true">⏰</span>
            <div class="map-detail-content">
              <strong>Opening Hours</strong>
              <p>8:00 AM – 6:00 PM (Closed Thursdays)</p>
            </div>
          </div>
        </div>

        <div class="map-card-actions">
          <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics,%20I%20am%20looking%20for%20directions%20to%20your%20store%20in%20Janta%20Galli,%20Itahari" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.45rem;" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/></svg>
            <span>Message Store on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Embedded Interactive Map Frame -->
      <div class="map-embed-wrapper">
        <iframe 
          title="Baba Cosmetics Store Location Map in Janta Galli, Itahari"
          src="https://maps.google.com/maps?q=26.66160862187367,87.2751234852559&hl=en&z=17&output=embed" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="map-pin-overlay-info">
          <span class="map-pin-badge">📍 Baba Cosmetics • Janta Galli, Itahari-6</span>
        </div>
      </div>
    </div>
  </div>
</section>
