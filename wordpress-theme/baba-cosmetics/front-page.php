<?php
/**
 * The template for displaying the Front Page (Homepage)
 *
 * @package Baba_Cosmetics
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

  <!-- Hero Section -->
  <section class="hero-section-home" style="background-image: linear-gradient(rgba(14, 15, 18, 0.42), rgba(20, 22, 28, 0.62)), url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-cosmetics-bg.jpg'); ?>');">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <!-- Hero Badge -->
          <div class="entity-badge-stack">
            <span class="badge-dot" aria-hidden="true">●</span>
            <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="hero-title">Baba Cosmetics - Best Cosmetic Seller in Itahari</h1>

          <!-- Direct Guidance Snippet Box -->
          <div class="featured-snippet-box">
            <div class="snippet-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>About Baba Cosmetics</span>
            </div>
            <p class="snippet-text">Baba Cosmetics is the leading wholesale supplier and retail cosmetic store in Itahari, located in Janta Galli, Itahari-6, Sunsari. We supply 100% genuine skincare, makeup, haircare, and personal beauty products with official tax invoices, providing bulk carton deliveries across Koshi Province and in-store retail shopping with a flat 5% discount on MRP.</p>
          </div>

          <!-- Hero CTAs -->
          <div class="hero-cta-group">
            <a href="<?php echo esc_url(home_url('/wholesale-cosmetics/')); ?>" class="btn btn-primary">
              <span>Explore Wholesale</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="<?php echo esc_url(home_url('/retail-cosmetics/')); ?>" class="btn btn-hero-white">
              <span>Shop Retail</span>
            </a>
            <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
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

  <!-- Main Content Body -->
  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          <section>
            <h2>Why Is Baba Cosmetics Recognized as the Best Cosmetic Seller in Itahari?</h2>
            <div>
              <p>Baba Cosmetics earns its reputation as the best cosmetic seller in Itahari by sourcing exclusively through authorized national distributors, enforcing physical batch-code verification, and operating transparent wholesale and retail counters in Janta Galli, Itahari-6.</p>
              <p>Every commercial consignment carries legitimate PAN billing (PAN: 600881922) to safeguard retailers against counterfeit goods. Individual shoppers receive direct counter assistance, transparent batch inspections, and a consistent flat 5% discount below maximum retail price (MRP).</p>
            </div>
          </section>

          <section>
            <h2>How Do Wholesale Supply and Retail Store Purchases Operate?</h2>
            <div>
              <p>Baba Cosmetics operates two distinct commercial distribution models to serve businesses and personal customers across Eastern Nepal:</p>
              <ul>
                <li><strong>Commercial Wholesale Supply:</strong> Retail shop owners, pharmacies, and beauty parlors can order authentic inventory through our dedicated <a href="<?php echo esc_url(home_url('/wholesale-cosmetics/')); ?>">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> desk. We enforce no minimum order quantity (MOQ), permit flexible carton packaging (mixed packs, full cases, or loose units), and coordinate regional transport across the whole Koshi Province. Payment terms include cash and bank transfer.</li>
                <li><strong>Direct Retail Showroom:</strong> Personal shoppers can visit our <a href="<?php echo esc_url(home_url('/retail-cosmetics/')); ?>">Cosmetics Retail Shop in Itahari, Nepal</a> at Janta Galli to select daily skincare and makeup items. All retail items receive an immediate 5% discount on MRP. Payment is accepted via Cash and instant QR code (Fonepay, eSewa, mobile banking). Complete product inspection is completed at the counter prior to checkout.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Which Beauty Product Categories Are Available for Immediate Supply?</h2>
            <div>
              <p>Baba Cosmetics maintains ready inventory across seven comprehensive beauty categories at our central Itahari stockroom:</p>
              <ul>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/makeup/')); ?>">Makeup Products in Itahari, Nepal</a>:</strong> Foundations, concealers, compact powders, lipsticks, and eye cosmetics for daily wear and bridal styling.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/skincare/')); ?>">Skincare Products in Itahari, Nepal</a>:</strong> Dermatologically formulated face cleansers, soothing toners, concentrated serums, moisturizers, and high-SPF sunscreens.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/haircare/')); ?>">Hair Products in Itahari, Nepal</a>:</strong> Salon-grade shampoos, nourishing conditioners, herbal hair oils, and specialized styling treatments.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/fragrance/')); ?>">Fragrance & Perfumes in Itahari, Nepal</a>:</strong> Long-lasting Eau de Parfum, daily body mists, and fine fragrance sprays from authorized manufacturers.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/body-care/')); ?>">Body Care in Itahari, Nepal</a>:</strong> Hydrating body lotions, cleansing shower washes, and personal hygiene soaps.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/beauty-tools-accessories/')); ?>">Beauty Tools in Itahari, Nepal</a>:</strong> Precision makeup brushes, blending sponges, eyelash curlers, and grooming tweezers.</li>
                <li><strong><a href="<?php echo esc_url(home_url('/cosmetics/accessories/')); ?>">Accessories in Itahari, Nepal</a>:</strong> Cosmetic organizer pouches, vanity travel kits, and hair styling accessories.</li>
              </ul>
              <p>For a complete directory of all available formulations, browse our master catalog of <a href="<?php echo esc_url(home_url('/cosmetics/')); ?>">Available Cosmetics & Beauty Products in Itahari</a>.</p>
            </div>
          </section>

          <section>
            <h2>Where Is the Baba Cosmetics Store Located and What Are the Operating Hours?</h2>
            <div>
              <p>The physical Baba Cosmetics showroom is located at Janta Galli, Itahari-6, Sunsari, exactly 180 meters east of central Itahari Chowk along Mahendra Highway.</p>
              <p><strong>Store Opening Hours:</strong> Everyday 8:00 AM – 6:00 PM, excluding Thursdays (Thursday is our weekly holiday).</p>
              <p><strong>Customer Support Hours:</strong> Everyday 7:00 AM – 8:00 PM via Landline (<a href="tel:+97725583775">025-583775</a>) and Mobile/WhatsApp (<a href="https://wa.me/9779805303415" target="_blank" rel="noopener">+977-9805303415</a>).</p>
              <p>Detailed road access directions and walking instructions are available on our dedicated <a href="<?php echo esc_url(home_url('/about/')); ?>">About Baba Cosmetics: Best Cosmetic Seller in Itahari</a> page.</p>
            </div>
          </section>

          <!-- Genuine Sourcing Notice -->
          <div class="statutory-callout">
            <div class="statutory-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm1 16h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              <span>Our Commitment to Genuine Products in Nepal</span>
            </div>
            <p style="margin-bottom: 0; font-size: 0.925rem;">Baba Cosmetics is registered under the laws of Nepal (PAN: 600881922). We procure products through recognized brand distribution channels and issue official tax invoices for wholesale transactions. Every product in our store is genuine and properly packaged.</p>
          </div>

          <!-- Targeted FAQs Section with Structured Accordions -->
          <section class="faq-section" aria-label="Frequently Asked Questions">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-accordion-group">
              <div class="faq-accordion-item active">
                <button class="faq-question-btn" type="button" aria-expanded="true">
                  <span>Where is Baba Cosmetics located in Itahari?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer-panel">
                  <p>Baba Cosmetics is located in Janta Galli, Itahari-6, Sunsari, approximately 180 meters east of central Itahari Chowk along Mahendra Highway.</p>
                </div>
              </div>

              <div class="faq-accordion-item">
                <button class="faq-question-btn" type="button" aria-expanded="false">
                  <span>What are the opening hours and weekly holidays for Baba Cosmetics?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer-panel">
                  <p>The store is open everyday from 8:00 AM to 6:00 PM, excluding Thursdays. Thursday is our weekly holiday. Customer support via phone and WhatsApp is active everyday from 7:00 AM to 8:00 PM.</p>
                </div>
              </div>

              <div class="faq-accordion-item">
                <button class="faq-question-btn" type="button" aria-expanded="false">
                  <span>What discount is offered on retail cosmetics purchases?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer-panel">
                  <p>Individual retail shoppers receive a flat 5% discount on MRP on all cosmetic and beauty products purchased at our Janta Galli counter.</p>
                </div>
              </div>

              <div class="faq-accordion-item">
                <button class="faq-question-btn" type="button" aria-expanded="false">
                  <span>What is the minimum order quantity for wholesale buyers?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer-panel">
                  <p>Baba Cosmetics enforces no minimum order quantity (MOQ) for wholesale buyers. Retail shop owners can order loose pieces, mixed cartons, or full case boxes.</p>
                </div>
              </div>

              <div class="faq-accordion-item">
                <button class="faq-question-btn" type="button" aria-expanded="false">
                  <span>Does Baba Cosmetics deliver wholesale orders across Koshi Province?</span>
                  <span class="faq-icon" aria-hidden="true">+</span>
                </button>
                <div class="faq-answer-panel">
                  <p>Yes, wholesale delivery is coordinated across the whole Koshi Province, including Dharan, Biratnagar, Damak, and surrounding towns. Transport charges depend on order volume and destination.</p>
                </div>
              </div>
            </div>
          </section>
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
              <p><strong>Landline:</strong> <a href="tel:+97725583775">025-583775</a></p>
              <p><strong>Mobile/WhatsApp:</strong> <a href="https://wa.me/9779805303415" target="_blank" rel="noopener">9805303415</a></p>
              <p><strong>Location:</strong> Janta Galli, Itahari-6, Sunsari</p>
              <p><strong>PAN:</strong> 600881922</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <!-- Interactive Map Pack Section -->
  <?php get_template_part('template-parts/map-pack'); ?>

<?php
get_footer();
