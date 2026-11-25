<?php
/**
 * Template Part: Real Store Photography Gallery
 *
 * @package Baba_Cosmetics
 */

$theme_uri = get_template_directory_uri();
$store_photos = array(
    array(
        'filename' => 'store-interior-counter.jpg',
        'alt'      => 'Baba Cosmetics Store Interior & Showcase Counter in Janta Galli, Itahari',
        'caption'  => 'Main retail showroom counter featuring curated cosmetic collections and glass display cases',
        'featured' => true,
    ),
    array(
        'filename' => 'wholesale-corridor.jpg',
        'alt'      => 'Wholesale Trade Corridor in Janta Galli, Itahari',
        'caption'  => 'Wholesale commercial supply corridor with trade inventory and client collection access',
        'featured' => false,
    ),
    array(
        'filename' => 'shop-signboard.jpg',
        'alt'      => 'Official Nepali Signboard of B.N. Traders / Baba Cosmetics in Itahari-6',
        'caption'  => 'Official business registration and signage at Janata High School Road, Itahari-6',
        'featured' => false,
    ),
    array(
        'filename' => 'store-counter-pote.jpg',
        'alt'      => 'Store Counter and Traditional Pote Glass Beads Collection',
        'caption'  => 'Counter customer service desk with traditional Nepali pote beads and beauty displays',
        'featured' => false,
    ),
    array(
        'filename' => 'wide-shop-shelving.jpg',
        'alt'      => 'Wide View of Baba Cosmetics Store Shelves and Product Aisles',
        'caption'  => 'Floor-to-ceiling shelving stocked with original beauty formulations and accessories',
        'featured' => false,
    ),
    array(
        'filename' => 'accessories-display-tree.jpg',
        'alt'      => 'Crystal Beaded Jewelry and Beauty Accessories Showcase',
        'caption'  => 'Rotating accessory displays, beauty tools, and crystal jewelry collection',
        'featured' => false,
    ),
    array(
        'filename' => 'owner-billing-desk.jpg',
        'alt'      => 'Commercial Wholesale Billing and Consultation Station',
        'caption'  => 'Wholesale billing desk providing official statutory tax invoices (PAN: 600881922)',
        'featured' => false,
    ),
    array(
        'filename' => 'cosmetic-shelves-storage.jpg',
        'alt'      => 'Organized Cosmetics Shelving and Inventory Storage',
        'caption'  => 'Climate-protected storage racks with sealed manufacturer cartons and products',
        'featured' => false,
    ),
    array(
        'filename' => 'street-exterior-storefront.jpg',
        'alt'      => 'Storefront Location on Janata High School Road, Janta Galli',
        'caption'  => 'Storefront entrance situated 180 meters East of central Itahari Chowk',
        'featured' => false,
    ),
    array(
        'filename' => 'business-visiting-card.jpg',
        'alt'      => 'Official Business Card of B.N. Traders, Itahari',
        'caption'  => 'Verified commercial trade credentials and direct contact details',
        'featured' => false,
    ),
);
?>
<section class="store-gallery-section" id="store-gallery" aria-label="Our Store - Photo Gallery">
  <div class="container">
    <div class="store-gallery-card-frame">
      <div class="store-gallery-header">
        <div class="gallery-badge">
          <span class="badge-dot" aria-hidden="true">●</span>
          <span>Real Store Photography • Janta Galli, Itahari</span>
        </div>
        <h2 class="store-gallery-title">Take a Look Inside Baba Cosmetics</h2>
        <p class="store-gallery-desc">Get a glimpse of our store, explore our product displays, and see where we serve our customers.</p>
      </div>

      <div class="store-gallery-grid" id="store-photo-gallery">
        <?php foreach ($store_photos as $index => $photo) : 
            $img_url = $theme_uri . '/assets/images/store-gallery/' . $photo['filename'];
        ?>
          <div class="gallery-item <?php echo $photo['featured'] ? 'gallery-item-featured' : ''; ?>" 
               data-index="<?php echo esc_attr($index); ?>" 
               data-full="<?php echo esc_url($img_url); ?>" 
               data-caption="<?php echo esc_attr($photo['caption']); ?>" 
               data-alt="<?php echo esc_attr($photo['alt']); ?>">
            <div class="gallery-img-wrapper">
              <img src="<?php echo esc_url($img_url); ?>" 
                   alt="<?php echo esc_attr($photo['alt']); ?>" 
                   class="gallery-img" 
                   width="600" 
                   height="400" 
                   loading="<?php echo $index < 4 ? 'eager' : 'lazy'; ?>">
              <div class="gallery-hover-overlay" aria-hidden="true">
                <span class="gallery-zoom-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </span>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <div class="gallery-footer-bar">
        <div class="gallery-source-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: var(--color-primary-red);"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Verified Authentic Business Premises • Sourced directly from our official Google Maps listing (B.N. Traders / Baba Cosmetics, Janta Galli, Itahari-6)</span>
        </div>
        <a href="https://maps.app.goo.gl/ayvDCrwEUVjhjWfj9" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <span>View on Google Maps &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</section>
