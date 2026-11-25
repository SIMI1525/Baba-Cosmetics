<?php
/**
 * The template for displaying the footer
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

  <!-- Global Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>" alt="Baba Cosmetics Logo" width="36" height="36" style="object-fit: contain;">
            <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 800; color: #fff;">Baba Cosmetics</div>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; color: #CBD5E1; margin-bottom: 1.25rem;">Your trusted store for 100% genuine cosmetics wholesale and retail in Itahari, Sunsari. Serving local retail shops, salons, and everyday shoppers across Koshi Province.</p>
          <div style="font-size: 0.8rem; color: #94A3B8; line-height: 1.6;">
            <strong>Store Address:</strong> Janta Galli, Itahari-6, Sunsari, Nepal<br>
            <strong>PAN Number:</strong> 600881922<br>
            <strong>Telephones:</strong> <a href="tel:+97725583775" style="color: inherit;">025-583775</a> / <a href="tel:+9779805303415" style="color: inherit;">9805303415</a><br>
            <strong>Hours:</strong> Everyday 8:00 AM – 6:00 PM (Closed Thursdays)<br>
            <strong>Retail Pricing:</strong> Flat 5% Off Any MRP<br>
            <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." class="footer-whatsapp-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Wholesale Services</h4>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/')); ?>">Wholesale Overview</a></li>
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/how-to-order/')); ?>">How to Order Wholesale</a></li>
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/pricing/')); ?>">Wholesale Pricing & Quotations</a></li>
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/delivery-pickup/')); ?>">Delivery & Store Pickup</a></li>
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/product-range/')); ?>">Available Categories</a></li>
            <li><a href="<?php echo esc_url(home_url('/wholesale-cosmetics/koshi-province/')); ?>">Delivery in Koshi Province</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Products & Categories</h4>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/cosmetics/makeup/')); ?>">Makeup Products</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/skincare/')); ?>">Skincare Products</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/haircare/')); ?>">Hair Products</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/fragrance/')); ?>">Fragrance & Perfumes</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/body-care/')); ?>">Body Care</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/beauty-tools-accessories/')); ?>">Beauty Tools</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics/accessories/')); ?>">Accessories</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Cosmetic Guide & Info</h4>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/buying-guides/')); ?>">Cosmetic Sets & Buying Guides</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/skincare-routines/')); ?>">Skincare Routines</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/makeup-guides/')); ?>">Makeup Guides & Tips</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/understanding-products/')); ?>">Understanding Beauty Products</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/hair-body-care/')); ?>">Hair Care & Body Care</a></li>
            <li><a href="<?php echo esc_url(home_url('/cosmetics-guide/beauty-tips-trends/')); ?>">Beauty Tips & Trends</a></li>
            <li><a href="<?php echo esc_url(home_url('/about/')); ?>">About Baba Cosmetics</a></li>
            <li><a href="<?php echo esc_url(home_url('/about/#store-location')); ?>">Location & Directions</a></li>
            <li><a href="<?php echo esc_url(home_url('/faqs/')); ?>">Frequently Asked Questions</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2050 B.S.–<?php echo date('Y'); ?> Baba Cosmetics Wholesale & Retail Trading Pvt. Ltd. All rights reserved.</div>
        <div class="footer-developer-credit">
          Web Development &amp; SEO by <a href="https://www.smaranraut.com.np" target="_blank" rel="noopener noreferrer">Smaran Raut</a>
        </div>
        <div style="display: flex; gap: 1rem;">
          <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" style="color: inherit;">Privacy</a>
          <span>•</span>
          <a href="<?php echo esc_url(home_url('/terms-and-conditions/')); ?>" style="color: inherit;">Terms</a>
          <span>•</span>
          <a href="<?php echo esc_url(home_url('/editorial-policy/')); ?>" style="color: inherit;">Editorial Policy</a>
          <span>•</span>
          <a href="<?php echo esc_url(home_url('/cookie-policy/')); ?>" style="color: inherit;">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Universal Modal 1: Commercial Consultation -->
  <div class="baba-modal" id="modal-consultation" role="dialog" aria-modal="true" aria-labelledby="modal-consult-title" aria-hidden="true">
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-dynamic-title" id="modal-consult-title">Book a Consultation</h3>
        <button type="button" class="modal-close-trigger" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal-body">
        <form class="baba-form" data-baba-form data-form-type="Consultation Request">
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="consult-name">Full Name / Shop Name</label>
            <input type="text" id="consult-name" name="fullName" class="form-control" required placeholder="e.g. Ramesh Shrestha">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="consult-phone">Mobile Phone / WhatsApp</label>
            <input type="tel" id="consult-phone" name="phone" class="form-control" required placeholder="e.g. 9805303415">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="consult-business">What describes you best?</label>
            <select id="consult-business" name="businessType" class="form-control">
              <option value="Cosmetics Retail Store">Cosmetics Retail Shop Owner</option>
              <option value="Beauty Parlor / Bridal Studio">Beauty Parlor / Makeup Artist</option>
              <option value="Pharmacy / General Store">Pharmacy / Grocery Store Owner</option>
              <option value="Individual Shopper">Individual Customer</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label class="form-label" for="consult-city">Your Town or Location</label>
            <input type="text" id="consult-city" name="city" class="form-control" placeholder="e.g. Itahari, Dharan, Biratnagar, Damak">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Confirm Consultation Request</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Universal Modal 2: Wholesale Quotation -->
  <div class="baba-modal" id="modal-quote" role="dialog" aria-modal="true" aria-labelledby="modal-quote-title" aria-hidden="true">
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-dynamic-title" id="modal-quote-title">Request Wholesale Price List</h3>
        <button type="button" class="modal-close-trigger" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal-body">
        <form class="baba-form" data-baba-form data-form-type="Wholesale Price List Request">
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="quote-name">Your Name / Shop Name</label>
            <input type="text" id="quote-name" name="fullName" class="form-control" required placeholder="e.g. Shrestha Cosmetics">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="quote-phone">WhatsApp Number for Catalog</label>
            <input type="tel" id="quote-phone" name="phone" class="form-control" required placeholder="e.g. 98XXXXXXXX">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="quote-categories">Interested Categories</label>
            <input type="text" id="quote-categories" name="categories" class="form-control" placeholder="e.g. Makeup, Skincare, Haircare, Perfumes">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Send Wholesale Price Request</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Universal Modal 3: Check Stock Availability -->
  <div class="baba-modal" id="modal-stock" role="dialog" aria-modal="true" aria-labelledby="modal-stock-title" aria-hidden="true">
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-dynamic-title" id="modal-stock-title">Check In-Store Stock</h3>
        <button type="button" class="modal-close-trigger" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal-body">
        <form class="baba-form" data-baba-form data-form-type="Product Stock Check">
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="stock-product">Product Name & Shade/Size</label>
            <input type="text" id="stock-product" name="productDetails" class="form-control" required placeholder="e.g. Foundation Shade / Serum / Lipstick">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="stock-phone">Your Phone / WhatsApp Number</label>
            <input type="tel" id="stock-phone" name="phone" class="form-control" required placeholder="e.g. 98XXXXXXXX">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Check Stock Now</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Store Photo Gallery Lightbox Modal -->
  <div class="gallery-lightbox" id="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Store Photo Lightbox" aria-hidden="true">
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-container">
      <button type="button" class="lightbox-close" aria-label="Close Lightbox">&times;</button>
      <button type="button" class="lightbox-prev" aria-label="Previous Photo">&#10094;</button>
      <button type="button" class="lightbox-next" aria-label="Next Photo">&#10095;</button>
      <div class="lightbox-content">
        <img src="" alt="" class="lightbox-img" id="lightbox-img">
        <div class="lightbox-meta">
          <p class="lightbox-caption" id="lightbox-caption"></p>
          <span class="lightbox-counter" id="lightbox-counter"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Toast Notification Container -->
  <div class="toast-container" id="baba-toast-container" aria-live="polite"></div>

<?php wp_footer(); ?>
</body>
</html>
