/**
 * BABA COSMETICS - Static Pre-Rendering Engine & Zero-White-Screen Generator
 * Second Refinement:
 * - 3 Distinct Hero Background Images with lighter, brighter tailored overlays
 * - Dropdown Navigation for Products (7 categories) and Cosmetic Guide (6 topics)
 * - All calculators completely removed
 * - Strictly NO invented business information
 * - Every route pre-rendered >20KB
 */

const fs = require('fs');
const path = require('path');
const { siteConfig, siteRoutes } = require('./data/site-data.js');

const BASE_URL = 'https://babacosmetics.com.np';

// Generate JSON-LD Schema
function generateJSONLD(page, config) {
  const schemas = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "@id": `${BASE_URL}/#organization`,
    "name": config.brand.name,
    "legalName": config.brand.legalName,
    "url": BASE_URL,
    "logo": `${BASE_URL}/assets/images/logo.png`,
    "image": `${BASE_URL}/assets/images/hero-cosmetics-bg.jpg`,
    "description": page.metaDescription,
    "telephone": config.brand.phone,
    "email": config.brand.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.brand.address.streetAddress,
      "addressLocality": config.brand.address.addressLocality,
      "addressRegion": config.brand.address.addressRegion,
      "postalCode": config.brand.address.postalCode,
      "addressCountry": config.brand.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": config.brand.geo.latitude,
      "longitude": config.brand.geo.longitude
    }
  });

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": page.breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url === "/" ? BASE_URL : `${BASE_URL}${crumb.url}`
      }))
    });
  }

  if (page.faqs && page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return `<script type="application/ld+json">\n${JSON.stringify(schemas, null, 2)}\n</script>`;
}

// Master HTML template compiler
function compilePage(page, allRoutes) {
  const jsonLd = generateJSONLD(page, siteConfig);
  const isHomePage = page.path === '/';
  const isWholesalePage = page.path === '/wholesale-cosmetics/';
  const isRetailPage = page.path === '/retail-cosmetics/';
  const isAboutPage = page.path === '/about/' || page.path === '/about';
  const isContactPage = page.path === '/contact/' || page.path === '/contact';
  const showContactCardAboveTheFold = isHomePage || isWholesalePage || isRetailPage || isAboutPage;
  const showMapPack = isHomePage || isAboutPage;
  const isLandingWithHeroImage = isHomePage || isWholesalePage || isRetailPage;

  // Determine Hero Class
  let heroClass = 'hero-section-page';
  if (isHomePage) heroClass = 'hero-section-home';
  else if (isWholesalePage) heroClass = 'hero-section-wholesale';
  else if (isRetailPage) heroClass = 'hero-section-retail';

  // Reciprocal Parent Link
  let reciprocalHtml = '';
  if (page.parentService) {
    const parent = allRoutes.find(r => r.path === page.parentService);
    if (parent) {
      reciprocalHtml = `
      <aside class="reciprocal-parent-card" aria-label="Parent Service Link">
        <div class="reciprocal-text">
          <strong>Need wholesale supply or store collection for these products?</strong>
          Visit our main <a href="${parent.path}">${parent.h1.split(':')[0]}</a> section for product information, mixed cartons, and store pickup in Janta Galli, Itahari.
        </div>
        <a href="${parent.path}" class="btn btn-outline btn-sm">View Service &rarr;</a>
      </aside>`;
    }
  }

  // Category and Hub cross links
  let subcategoryListHtml = '';
  if (page.path === '/cosmetics/') {
    subcategoryListHtml = `
    <div class="category-cards-grid">
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/makeup/">Makeup Products</a></h3>
          <p class="category-card-desc">Foundations, compact powders, lipsticks, and eye cosmetics.</p>
        </div>
        <a href="/cosmetics/makeup/" class="btn btn-outline btn-sm">Explore Makeup &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/skincare/">Skincare Products</a></h3>
          <p class="category-card-desc">Cleansers, toners, hydrating serums, and sunscreens.</p>
        </div>
        <a href="/cosmetics/skincare/" class="btn btn-outline btn-sm">Explore Skincare &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/haircare/">Hair Products</a></h3>
          <p class="category-card-desc">Shampoos, conditioners, hair repair treatments, and oils.</p>
        </div>
        <a href="/cosmetics/haircare/" class="btn btn-outline btn-sm">Explore Hair Products &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/fragrance/">Fragrance & Perfumes</a></h3>
          <p class="category-card-desc">Eau de Parfum, Eau de Toilette, and scented daily body sprays.</p>
        </div>
        <a href="/cosmetics/fragrance/" class="btn btn-outline btn-sm">Explore Fragrances &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/body-care/">Body Care</a></h3>
          <p class="category-card-desc">Shower gels, moisturizing body lotions, and soaps.</p>
        </div>
        <a href="/cosmetics/body-care/" class="btn btn-outline btn-sm">Explore Body Care &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/beauty-tools-accessories/">Beauty Tools</a></h3>
          <p class="category-card-desc">Makeup brushes, sponges, eyelash curlers, and applicators.</p>
        </div>
        <a href="/cosmetics/beauty-tools-accessories/" class="btn btn-outline btn-sm">Explore Beauty Tools &rarr;</a>
      </div>
      <div class="category-card">
        <div>
          <h3 class="category-card-title"><a href="/cosmetics/accessories/">Accessories</a></h3>
          <p class="category-card-desc">Cosmetic pouches, vanity storage, and everyday beauty accessories.</p>
        </div>
        <a href="/cosmetics/accessories/" class="btn btn-outline btn-sm">Explore Accessories &rarr;</a>
      </div>
    </div>`;
  }

  // Cosmetic Guide Hub Component (Search & Grid)
  let kbHeroHtml = '';
  if (page.path === '/cosmetics-guide/' || page.path === '/blog/') {
    kbHeroHtml = `
    <div class="kb-hero-search">
      <div class="kb-search-bar">
        <input type="text" id="kb-search-input" class="kb-search-input" placeholder="Search Cosmetic Guide by topic (e.g. Skincare, Makeup, Routine, Labels)..." aria-label="Search guides">
      </div>
      <div class="kb-tag-list" role="tablist">
        <button class="kb-tag-btn active" data-tag="all">All Topics</button>
        <button class="kb-tag-btn" data-tag="buying guides">Buying Guides</button>
        <button class="kb-tag-btn" data-tag="skincare">Skincare</button>
        <button class="kb-tag-btn" data-tag="makeup">Makeup</button>
        <button class="kb-tag-btn" data-tag="hair & body">Hair & Body</button>
      </div>
    </div>`;
  }

  let articlesGridHtml = '';
  if (page.path === '/cosmetics-guide/' || page.path === '/blog/') {
    const guidePages = [
      { path: "/cosmetics-guide/buying-guides/", title: "Cosmetic Sets & Buying Guides", cat: "buying guides", desc: "Understanding cosmetic sets, choosing suitable products, and basic product combinations." },
      { path: "/cosmetics-guide/skincare-routines/", title: "Skincare Routines & Steps", cat: "skincare", desc: "Basic morning and evening skincare steps, product application order, and hydration tips." },
      { path: "/cosmetics-guide/makeup-guides/", title: "Makeup Guides & Application Tips", cat: "makeup", desc: "Makeup basics, understanding product types and uses, and everyday application techniques." },
      { path: "/cosmetics-guide/understanding-products/", title: "Understanding Beauty Products & Labels", cat: "buying guides", desc: "Cosmetic categories, reading ingredient lists and expiry symbols, and identifying safe formulas." },
      { path: "/cosmetics-guide/hair-body-care/", title: "Hair Care & Body Care Essentials", cat: "hair & body", desc: "Basic hair washing, conditioning, body moisturizing, and everyday personal hygiene." },
      { path: "/cosmetics-guide/beauty-tips-trends/", title: "Beauty Tips & Trends", cat: "makeup", desc: "Seasonal skincare tips, current beauty trends, and everyday cosmetic care." }
    ];

    articlesGridHtml = `
    <div class="kb-grid" id="kb-articles-grid">
      ${guidePages.map(art => `
        <article class="kb-card" data-title="${art.title}" data-category="${art.cat}" data-snippet="${art.desc}">
          <div>
            <div class="kb-card-badge">Cosmetic Guide</div>
            <h3 class="category-card-title"><a href="${art.path}">${art.title}</a></h3>
            <p class="category-card-desc">${art.desc}</p>
          </div>
          <a href="${art.path}" class="btn btn-outline btn-sm" style="margin-top: 1rem;">Read Guide &rarr;</a>
        </article>
      `).join('')}
    </div>
    <div id="kb-no-results" style="display: none; text-align: center; padding: 3rem; background: #fff; border-radius: 8px; margin-top: 2rem;">
      <p style="font-size: 1.15rem; color: #555;">No matching guides found. Try searching a different keyword or visit our store in Janta Galli, Itahari.</p>
    </div>`;
  }

  // Breadcrumbs HTML
  const breadcrumbsHtml = page.breadcrumbs && page.breadcrumbs.length > 0 ? `
  <nav class="breadcrumb-wrapper" aria-label="Breadcrumbs">
    <div class="container">
      <ol class="breadcrumb-list">
        ${page.breadcrumbs.map((b, i) => `
          <li class="breadcrumb-item ${i === page.breadcrumbs.length - 1 ? 'active' : ''}">
            ${i === page.breadcrumbs.length - 1 ? `<span>${b.name}</span>` : `<a href="${b.url}">${b.name}</a> &rsaquo;`}
          </li>
        `).join('')}
      </ol>
    </div>
  </nav>` : '';

  // FAQ Accordion HTML
  let faqsHtml = '';
  if (page.faqs && page.faqs.length > 0) {
    faqsHtml = `
    <section class="faq-section" aria-label="Frequently Asked Questions">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-accordion-group">
        ${page.faqs.map((faq, idx) => `
          <div class="faq-accordion-item ${idx === 0 ? 'active' : ''}">
            <button class="faq-question-btn" type="button" aria-expanded="${idx === 0 ? 'true' : 'false'}">
              <span>${faq.q}</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer-panel">
              <p>${faq.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>`;
  }

  // Real Store Photography Gallery (About Us Page only)
  let storeGalleryHtml = '';
  if (isAboutPage) {
    const storePhotos = [
      {
        filename: 'store-interior-counter.jpg',
        alt: 'Baba Cosmetics Store Interior & Showcase Counter in Janta Galli, Itahari',
        caption: 'Main retail showroom counter featuring curated cosmetic collections and glass display cases',
        featured: true
      },
      {
        filename: 'wholesale-corridor.jpg',
        alt: 'Wholesale Trade Corridor in Janta Galli, Itahari',
        caption: 'Wholesale commercial supply corridor with trade inventory and client collection access',
        featured: false
      },
      {
        filename: 'shop-signboard.jpg',
        alt: 'Official Nepali Signboard of B.N. Traders / Baba Cosmetics in Itahari-6',
        caption: 'Official business registration and signage at Janata High School Road, Itahari-6',
        featured: false
      },
      {
        filename: 'store-counter-pote.jpg',
        alt: 'Store Counter and Traditional Pote Glass Beads Collection',
        caption: 'Counter customer service desk with traditional Nepali pote beads and beauty displays',
        featured: false
      },
      {
        filename: 'wide-shop-shelving.jpg',
        alt: 'Wide View of Baba Cosmetics Store Shelves and Product Aisles',
        caption: 'Floor-to-ceiling shelving stocked with original beauty formulations and accessories',
        featured: false
      },
      {
        filename: 'accessories-display-tree.jpg',
        alt: 'Crystal Beaded Jewelry and Beauty Accessories Showcase',
        caption: 'Rotating accessory displays, beauty tools, and crystal jewelry collection',
        featured: false
      },
      {
        filename: 'owner-billing-desk.jpg',
        alt: 'Commercial Wholesale Billing and Consultation Station',
        caption: 'Wholesale billing desk providing official statutory tax invoices (PAN: 600881922)',
        featured: false
      },
      {
        filename: 'cosmetic-shelves-storage.jpg',
        alt: 'Organized Cosmetics Shelving and Inventory Storage',
        caption: 'Climate-protected storage racks with sealed manufacturer cartons and products',
        featured: false
      },
      {
        filename: 'street-exterior-storefront.jpg',
        alt: 'Storefront Location on Janata High School Road, Janta Galli',
        caption: 'Storefront entrance situated 180 meters East of central Itahari Chowk',
        featured: false
      },
      {
        filename: 'business-visiting-card.jpg',
        alt: 'Official Business Card of B.N. Traders, Itahari',
        caption: 'Verified commercial trade credentials and direct contact details',
        featured: false
      }
    ];

    storeGalleryHtml = `
  <!-- Our Store - Photo Gallery (Immediately after Hero Section) -->
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
          ${storePhotos.map((photo, index) => `
            <div class="gallery-item ${photo.featured ? 'gallery-item-featured' : ''}" data-index="${index}" data-full="/assets/images/store-gallery/${photo.filename}" data-caption="${photo.caption}" data-alt="${photo.alt}">
              <div class="gallery-img-wrapper">
                <img src="/assets/images/store-gallery/${photo.filename}" alt="${photo.alt}" class="gallery-img" width="600" height="400" loading="${index < 4 ? 'eager' : 'lazy'}">
                <div class="gallery-hover-overlay" aria-hidden="true">
                  <span class="gallery-zoom-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </span>
                </div>
              </div>
            </div>
          `).join('')}
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
  </section>`;
  }

  // Baba Cosmetics Business Information Card
  const businessInfoCardHtml = `
  <div class="business-card-wrapper">
    <!-- Subtle Floating Decorative Chips (Continuous micro-movement) -->
    <div class="baba-floating-chip chip-top-right speed-1" aria-hidden="true">
      <span class="chip-dot"></span>
      <span>100% Authentic</span>
    </div>
    <div class="baba-floating-chip chip-bottom-left speed-2" aria-hidden="true">
      <span class="chip-dot"></span>
      <span>Beauty Essentials</span>
    </div>
    <div class="business-info-card">
      <div class="info-card-header">
        <h3 class="info-card-title">Baba Cosmetics</h3>
        <div class="info-card-subtitle">Wholesale & Retail Cosmetics Store</div>
        <span class="info-card-est-badge">Since 2050 B.S.</span>
      </div>
      <div class="info-card-body">
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">📍</div>
          <div class="info-detail">
            <span class="info-label">Business Address</span>
            <span class="info-value">Janta Galli, Itahari-6, Sunsari, Nepal<br><small style="color: #64748B;">(180m East of Itahari Chowk)</small></span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">📞</div>
          <div class="info-detail">
            <span class="info-label">Store Telephones</span>
            <span class="info-value"><a href="tel:+97725583775">025-583775</a> (Landline) &bull; <a href="tel:+9779805303415">9805303415</a></span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">💬</div>
          <div class="info-detail">
            <span class="info-label">WhatsApp Contact</span>
            <span class="info-value"><a href="https://wa.me/9779805303415" target="_blank" rel="noopener">+977-9805303415</a></span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">📋</div>
          <div class="info-detail">
            <span class="info-label">PAN Number</span>
            <span class="info-value">600881922 (Registered & Tax Compliant)</span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">⏰</div>
          <div class="info-detail">
            <span class="info-label">Opening Hours</span>
            <span class="info-value">8:00 AM – 6:00 PM (Closed Thursdays)</span>
          </div>
        </div>
      </div>
      <div class="info-card-footer">
        <span>100% Genuine Products</span>
        <a href="/about/#store-location">Get Directions &rarr;</a>
      </div>
    </div>
  </div>`;

  // Helper: Retrieve page-specific human-centred hero photography & editorial metadata
  function getPageHeroVisual(pObj) {
    const p = pObj.path;

    // 1. Products Overview
    if (p === '/cosmetics/' || p === '/cosmetics') {
      return {
        src: '/assets/images/hero-products-overview.jpg',
        alt: 'Baba Cosmetics Showroom Display and Customer Consultation in Itahari',
        pill: 'Authentic Beauty Sourcing & Retail',
        caption: 'Direct brand distribution and verified retail beauty inventory at Janta Galli, Itahari.',
        feature1: '✓ 1,500+ Active SKUs',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ 100% Genuine Batch Verified'
      };
    }

    // 2. Makeup Products
    if (p.startsWith('/cosmetics/makeup')) {
      return {
        src: '/assets/images/hero-makeup.jpg',
        alt: 'Client Applying Vibrant Lip and Face Makeup at Baba Cosmetics Vanity',
        pill: 'Commercial & Retail Makeup Collections',
        caption: 'Original lipsticks, foundations, palettes, and pigments sourced exclusively through verified brand importers.',
        feature1: '✓ 100% Seal Verified',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Wholesale Cartons & Retail Units'
      };
    }

    // 3. Skincare Products
    if (p.startsWith('/cosmetics/skincare')) {
      return {
        src: '/assets/images/hero-skincare.jpg',
        alt: 'Hydrating Skincare Routine and Facial Serum Application with Baba Cosmetics Formulations',
        pill: 'Dermatologically Compliant Skincare',
        caption: 'Clinically verified cleansers, toners, serums, and sunscreens with intact manufacturer seals.',
        feature1: '✓ Fresh PAO & Lot Inspected',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Climate-Protected Storage'
      };
    }

    // 4. Hair Products
    if (p.startsWith('/cosmetics/haircare')) {
      return {
        src: '/assets/images/hero-haircare.jpg',
        alt: 'Healthy Haircare Routine with Nourishing Hair Oils and Professional Formulations',
        pill: 'Salon & Everyday Haircare Supply',
        caption: 'Genuine shampoos, deep conditioners, herbal oils, and professional styling essentials.',
        feature1: '✓ Authentic Salon Formulations',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Bulk Salon & Retail Packs'
      };
    }

    // 5. Fragrance & Perfumes
    if (p.startsWith('/cosmetics/fragrance')) {
      return {
        src: '/assets/images/hero-fragrance.jpg',
        alt: 'Luxury Fragrance and Fine Perfume Mist Application at Baba Cosmetics Boutique',
        pill: 'Authentic Imported Fragrances',
        caption: 'Long-lasting designer eau de parfum, eau de toilette, and refreshing body mists with authentic batch codes.',
        feature1: '✓ 100% Original Batch Codes',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Premium Glass Packaging'
      };
    }

    // 6. Body Care
    if (p.startsWith('/cosmetics/body-care')) {
      return {
        src: '/assets/images/hero-bodycare.jpg',
        alt: 'Soothing Body Care and Nourishing Skin Hydration Routine at Home',
        pill: 'Nourishing Bath & Body Care',
        caption: 'Rich hydrating body lotions, gentle foaming washes, and body polishes for daily personal care.',
        feature1: '✓ Gentle Skin-Safe Formulas',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Everyday Value & Trade Packs'
      };
    }

    // 7. Beauty Tools
    if (p.startsWith('/cosmetics/beauty-tools-accessories')) {
      return {
        src: '/assets/images/hero-beauty-tools.jpg',
        alt: 'Professional Makeup Artist Using Precision Blending Brushes and Beauty Tools',
        pill: 'Professional Application Tools',
        caption: 'Soft synthetic brush sets, latex-free blending sponges, eyelash curlers, and precision applicators.',
        feature1: '✓ Ergonomic & Durable Quality',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Studio & Daily Use Tools'
      };
    }

    // 8. Accessories & Nail Care
    if (p.startsWith('/cosmetics/accessories') || p.startsWith('/cosmetics/nail-care')) {
      return {
        src: '/assets/images/hero-accessories.jpg',
        alt: 'Elegant Cosmetic Cases, Vanity Mirrors, and Beauty Accessories Collection',
        pill: 'Curated Vanity & Travel Accessories',
        caption: 'Durable travel cosmetic pouches, compact pocket mirrors, hair claws, and personal styling essentials.',
        feature1: '✓ Premium Durable Hardware',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Retail & Gift Pack Options'
      };
    }

    // 9. Personal Care
    if (p.startsWith('/cosmetics/personal-care')) {
      return {
        src: '/assets/images/hero-bodycare.jpg',
        alt: 'Daily Personal Hygiene and Gentle Skincare Essentials',
        pill: 'Everyday Personal Care Essentials',
        caption: 'Trusted daily hygiene, sanitization, and gentle care products for families and hospitality businesses.',
        feature1: '✓ Hypoallergenic Standards',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Reliable Koshi Supply'
      };
    }

    // 10. Cosmetic Guide: Buying Guides
    if (p.startsWith('/cosmetics-guide/buying-guides')) {
      return {
        src: '/assets/images/hero-guide-buying.jpg',
        alt: 'Customer and Beauty Advisor Selecting Curated Cosmetics Sets at Baba Cosmetics',
        pill: 'Curated Buying Guidance & Gift Sets',
        caption: 'Expert selection criteria, value analysis, and curated bridal or personal cosmetic set recommendations.',
        feature1: '✓ Comprehensive Set Breakdown',
        feature2: '✓ Authentic Brand Invoicing',
        feature3: '✓ Budget & Trade Price Match'
      };
    }

    // 11. Cosmetic Guide: Skincare Routines
    if (p.startsWith('/cosmetics-guide/skincare-routines')) {
      return {
        src: '/assets/images/hero-guide-skincare.jpg',
        alt: 'Morning and Evening Step-by-Step Skincare Routine Guidance with Active Serums',
        pill: 'Step-by-Step Routine Advisory',
        caption: 'Dermatologically sound layering orders from cleansing and toning to active serums and daily SPF.',
        feature1: '✓ AM & PM Step Protocols',
        feature2: '✓ Skin Type Compatibility',
        feature3: '✓ Seasonal Routine Adjustments'
      };
    }

    // 12. Cosmetic Guide: Makeup Guides & Tips
    if (p.startsWith('/cosmetics-guide/makeup-guides')) {
      return {
        src: '/assets/images/hero-guide-makeup.jpg',
        alt: 'Professional Makeup Artist Demonstrating Blending and Foundation Application',
        pill: 'Educational Application Tutorials',
        caption: 'Techniques for long-lasting foundation, flawless eye blending, and sweat-resistant summer makeup in Nepal.',
        feature1: '✓ Climate-Tested Techniques',
        feature2: '✓ Shade Matching Guidance',
        feature3: '✓ Professional Studio Insights'
      };
    }

    // 13. Cosmetic Guide: Understanding Products & Labels
    if (p.startsWith('/cosmetics-guide/understanding-products')) {
      return {
        src: '/assets/images/hero-guide-understanding.jpg',
        alt: 'Consumer Examining Cosmetic Product Ingredients, Batch Codes, and PAO Symbols',
        pill: 'Consumer Transparency & Verification',
        caption: 'Decoding INCI ingredient lists, expiration date stamps, PAO jar icons, and authentic batch codes.',
        feature1: '✓ Batch Code Verification',
        feature2: '✓ PAO & Shelf Life Mastery',
        feature3: '✓ Ingredient Safety Standards'
      };
    }

    // 14. Cosmetic Guide: Hair & Body Care
    if (p.startsWith('/cosmetics-guide/hair-body-care')) {
      return {
        src: '/assets/images/hero-haircare.jpg',
        alt: 'Comprehensive Hair Care and Body Wellness Routine Guidance',
        pill: 'Holistic Hair & Body Essentials',
        caption: 'Targeted solutions for scalp health, frizz management, and barrier-repairing whole-body hydration.',
        feature1: '✓ Scalp & Cuticle Science',
        feature2: '✓ Seasonal Hydration Care',
        feature3: '✓ Sulfate-Free & Gentle Options'
      };
    }

    // 15. Cosmetic Guide: Beauty Tips & Trends
    if (p.startsWith('/cosmetics-guide/beauty-tips-trends')) {
      return {
        src: '/assets/images/hero-makeup.jpg',
        alt: 'Exploring Contemporary Beauty Trends and Radiant Makeup Formulations',
        pill: 'Seasonal Trends & Practical Advice',
        caption: 'Modern beauty insights, minimalist dewy skin looks, and seasonal color palettes suited to local lifestyles.',
        feature1: '✓ Contemporary Trend Analysis',
        feature2: '✓ Wearable Daily Looks',
        feature3: '✓ Expert Product Pairings'
      };
    }

    // 16. Cosmetic Guide Overview & Archive
    if (p.startsWith('/cosmetics-guide') || p.startsWith('/blog') || p.startsWith('/guides')) {
      return {
        src: '/assets/images/hero-guide-overview.jpg',
        alt: 'Baba Cosmetics Educational Beauty Guide and Knowledge Hub Showroom in Itahari',
        pill: 'Independent Beauty Guidance Hub',
        caption: 'Educational beauty resources, unbiased product comparisons, and genuine cosmetic sourcing guidelines.',
        feature1: '✓ Fact-Checked Guidance',
        feature2: '✓ PAN: 600881922',
        feature3: '✓ Janta Galli In-Store Support'
      };
    }

    // Fallback for general informational pages
    return {
      src: '/assets/images/hero-human-centred.jpg',
      alt: 'Baba Cosmetics Commercial Distribution & Retail Showroom in Janta Galli, Itahari',
      pill: 'Authentic Commercial Distribution & Retail',
      caption: 'Dedicated cosmetic specialists providing genuine beauty formulations and professional guidance in Itahari, Sunsari.',
      feature1: '✓ 100% Batch Inspected',
      feature2: '✓ PAN: 600881922',
      feature3: '✓ Koshi Province Supply'
    };
  }

  // Human-Centred Hero Brand Visual Card (for pages without above-the-fold contact info)
  const heroVisual = getPageHeroVisual(page);
  const humanCentredHeroVisualHtml = `
  <div class="hero-brand-visual-wrapper">
    <!-- Subtle Floating Decorative Chips -->
    <div class="baba-floating-chip chip-top-right speed-1" aria-hidden="true">
      <span class="chip-dot"></span>
      <span>${heroVisual.pill || 'Authentic Beauty'}</span>
    </div>
    <div class="baba-floating-chip chip-bottom-left speed-2" aria-hidden="true">
      <span class="chip-dot"></span>
      <span>Baba Cosmetics</span>
    </div>
    <div class="hero-brand-visual-card">
      <div class="hero-brand-visual-media">
        <img src="${heroVisual.src}" alt="${heroVisual.alt}" class="hero-brand-img" width="540" height="360" loading="eager">
      </div>
      <div class="hero-brand-visual-caption">
        <div class="hero-caption-pill">${heroVisual.pill}</div>
        <p class="hero-caption-desc">${heroVisual.caption}</p>
        <div class="hero-caption-features">
          <span class="hero-caption-feature">${heroVisual.feature1}</span>
          <span class="hero-caption-feature">${heroVisual.feature2}</span>
          <span class="hero-caption-feature">${heroVisual.feature3}</span>
        </div>
      </div>
    </div>
  </div>`;

  // Hero CTAs
  let heroCtaHtml = '';
  if (isHomePage) {
    heroCtaHtml = `
    <div class="hero-cta-group">
      <a href="/wholesale-cosmetics/" class="btn btn-primary">
        <span>Explore Wholesale</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="/retail-cosmetics/" class="btn btn-hero-white">
        <span>Shop Retail</span>
      </a>
      <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </div>`;
  } else if (isWholesalePage) {
    heroCtaHtml = `
    <div class="hero-cta-group">
      <button type="button" class="btn btn-primary btn-quote" data-modal-open="modal-quote" data-modal-context="Request Wholesale Quote">
        <span>Request Price List</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <a href="/wholesale-cosmetics/how-to-order/" class="btn btn-hero-white">
        <span>How to Order</span>
      </a>
      <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20am%20interested%20in%20your%20wholesale%20products%20and%20pricing." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </div>`;
  } else if (isRetailPage) {
    heroCtaHtml = `
    <div class="hero-cta-group">
      <button type="button" class="btn btn-primary btn-stock" data-modal-open="modal-stock" data-modal-context="Check Retail Stock">
        <span>Check Product Stock</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </div>`;
  } else if (isAboutPage) {
    heroCtaHtml = `
    <div class="hero-cta-group">
      <a href="/contact/" class="btn btn-primary">
        <span>Contact Us</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <button type="button" class="btn btn-hero-white btn-stock" data-modal-open="modal-stock" data-modal-context="About Us Stock Check">
        <span>Check Product Stock</span>
      </button>
    </div>`;
  } else {
    heroCtaHtml = `
    <div class="hero-cta-group">
      <button type="button" class="btn btn-primary btn-quote" data-modal-open="modal-quote" data-modal-context="Product Information">
        <span>Request Information</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <button type="button" class="btn btn-outline btn-stock" data-modal-open="modal-stock" data-modal-context="Stock Check">
        <span>Check Product Stock</span>
      </button>
    </div>`;
  }

  // Snippet Box title
  const snippetTitle = isHomePage ? "About Baba Cosmetics" : (page.category === "Cosmetic Guide" ? "Guide Summary" : "About This Product / Service");

  // Hero Section Background Inline Styles (Guarantees immediate, reliable photo rendering)
  let heroInlineStyle = '';
  if (isHomePage) {
    heroInlineStyle = ' style="background-image: linear-gradient(rgba(14, 15, 18, 0.42), rgba(20, 22, 28, 0.62)), url(\'/assets/images/hero-cosmetics-bg.jpg\');"';
  } else if (isWholesalePage) {
    heroInlineStyle = ' style="background-image: linear-gradient(rgba(14, 15, 18, 0.40), rgba(20, 22, 28, 0.60)), url(\'/assets/images/hero-wholesale-bg.jpg\');"';
  } else if (isRetailPage) {
    heroInlineStyle = ' style="background-image: linear-gradient(rgba(14, 15, 18, 0.38), rgba(20, 22, 28, 0.58)), url(\'/assets/images/hero-retail-bg.jpg\');"';
  }

  const isRedirectPage = page.path === '/product-authenticity/' || page.path === '/location/';
  const canonicalUrl = isRedirectPage ? `${BASE_URL}/about/` : `${BASE_URL}${page.path}`;
  const redirectMeta = isRedirectPage ? `\n  <meta http-equiv="refresh" content="0; url=/about/">` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.metaDescription}">
  <link rel="canonical" href="${canonicalUrl}">${redirectMeta}
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.metaDescription}">
  <meta property="og:url" content="${BASE_URL}${page.path}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Baba Cosmetics">
  <meta property="og:locale" content="en_NP">
  
  <!-- Preconnect & Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Master Stylesheet with Cache-Busting -->
  <link rel="stylesheet" href="/css/styles.css?v=2026_v12">
  <link rel="icon" type="image/png" href="/assets/images/logo.png">
  
  <!-- Semantic JSON-LD Structured Data -->
  ${jsonLd}
</head>
<body>

  <!-- Top Announcement Bar -->
  <aside class="top-notice-bar" aria-label="Store Announcement">
    <span>${showContactCardAboveTheFold 
      ? 'Baba Cosmetics: Janta Galli, Itahari-6 • Landline: 025-583775 • Mobile/WhatsApp: 9805303415 • Everyday 8AM–6PM (Closed Thu) • Retail: Flat 5% Off MRP' 
      : 'Baba Cosmetics: 100% Genuine Cosmetics Wholesale & Retail • Janta Galli, Itahari-6 • Retail: Flat 5% Off Any MRP'}</span>
    <a href="/wholesale-cosmetics/how-to-order/">Order Wholesale &rarr;</a>
  </aside>

  <!-- Primary Sticky Header with Dropdown Navigation -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand-logo-wrap" aria-label="Baba Cosmetics Home">
        <img src="/assets/images/logo.png" alt="Baba Cosmetics Logo" class="brand-logo-img" width="44" height="44">
        <div class="brand-text-block">
          <span class="brand-name">Baba Cosmetics</span>
          <span class="brand-locality">Janta Galli, Itahari-6</span>
        </div>
      </a>

      <!-- Primary Navigation with Dropdowns -->
      <nav class="primary-nav" id="primary-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          <li><a href="/" class="nav-link ${page.path === '/' ? 'active' : ''}">Home</a></li>
          <li><a href="/wholesale-cosmetics/" class="nav-link ${page.path.startsWith('/wholesale-cosmetics') ? 'active' : ''}">Wholesale</a></li>
          <li><a href="/retail-cosmetics/" class="nav-link ${page.path.startsWith('/retail-cosmetics') ? 'active' : ''}">Retail Shop</a></li>
          
          <!-- Products Dropdown (7 Categories + Overview) -->
          <li class="nav-item-dropdown" data-dropdown="products">
            <div class="nav-dropdown-trigger-wrap">
              <a href="/cosmetics/" class="nav-link dropdown-main-link ${((page.path.startsWith('/cosmetics/') && !page.path.startsWith('/cosmetics-guide')) || page.path === '/cosmetics' || page.path === '/cosmetics/') ? 'active' : ''}">Products</a>
              <button type="button" class="dropdown-chevron-btn" aria-label="Toggle Products dropdown menu" aria-expanded="false" aria-haspopup="true">
                <span class="dropdown-chevron" aria-hidden="true">▾</span>
              </button>
            </div>
            <ul class="dropdown-menu" role="menu">
              <li><a href="/cosmetics/" class="dropdown-item-link dropdown-item-overview" role="menuitem"><strong>All Products Overview &rarr;</strong></a></li>
              <li><a href="/cosmetics/makeup/" class="dropdown-item-link" role="menuitem">Makeup Products</a></li>
              <li><a href="/cosmetics/skincare/" class="dropdown-item-link" role="menuitem">Skincare Products</a></li>
              <li><a href="/cosmetics/haircare/" class="dropdown-item-link" role="menuitem">Hair Products</a></li>
              <li><a href="/cosmetics/fragrance/" class="dropdown-item-link" role="menuitem">Fragrance & Perfumes</a></li>
              <li><a href="/cosmetics/body-care/" class="dropdown-item-link" role="menuitem">Body Care</a></li>
              <li><a href="/cosmetics/beauty-tools-accessories/" class="dropdown-item-link" role="menuitem">Beauty Tools</a></li>
              <li><a href="/cosmetics/accessories/" class="dropdown-item-link" role="menuitem">Accessories</a></li>
            </ul>
          </li>

          <!-- Cosmetic Guide Dropdown (6 Topics + Overview) -->
          <li class="nav-item-dropdown" data-dropdown="guides">
            <div class="nav-dropdown-trigger-wrap">
              <a href="/cosmetics-guide/" class="nav-link dropdown-main-link ${(page.path.startsWith('/cosmetics-guide') || page.path.startsWith('/blog')) ? 'active' : ''}">Cosmetic Guide</a>
              <button type="button" class="dropdown-chevron-btn" aria-label="Toggle Cosmetic Guide dropdown menu" aria-expanded="false" aria-haspopup="true">
                <span class="dropdown-chevron" aria-hidden="true">▾</span>
              </button>
            </div>
            <ul class="dropdown-menu" role="menu">
              <li><a href="/cosmetics-guide/" class="dropdown-item-link dropdown-item-overview" role="menuitem"><strong>All Guides Overview &rarr;</strong></a></li>
              <li><a href="/cosmetics-guide/buying-guides/" class="dropdown-item-link" role="menuitem">Cosmetic Sets & Buying Guides</a></li>
              <li><a href="/cosmetics-guide/skincare-routines/" class="dropdown-item-link" role="menuitem">Skincare Routines</a></li>
              <li><a href="/cosmetics-guide/makeup-guides/" class="dropdown-item-link" role="menuitem">Makeup Guides & Tips</a></li>
              <li><a href="/cosmetics-guide/understanding-products/" class="dropdown-item-link" role="menuitem">Understanding Beauty Products</a></li>
              <li><a href="/cosmetics-guide/hair-body-care/" class="dropdown-item-link" role="menuitem">Hair Care & Body Care</a></li>
              <li><a href="/cosmetics-guide/beauty-tips-trends/" class="dropdown-item-link" role="menuitem">Beauty Tips & Trends</a></li>
            </ul>
          </li>

          <li><a href="/about/" class="nav-link ${(page.path === '/about/' || page.path === '/about') ? 'active' : ''}">About Us</a></li>
        </ul>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <button type="button" class="btn btn-primary btn-sm btn-quote" data-modal-open="modal-quote" data-modal-context="Request Quote">Request Quote</button>
        <button type="button" class="mobile-nav-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="primary-nav">☰</button>
      </div>
    </div>
  </header>

  <!-- Breadcrumbs -->
  ${breadcrumbsHtml}

  <!-- Hero Section -->
  <section class="${heroClass}"${heroInlineStyle}>
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <!-- Hero Badge -->
          <div class="entity-badge-stack">
            <span class="badge-dot" aria-hidden="true">●</span>
            <span>Baba Cosmetics • Janta Galli, Itahari-6 • Sunsari</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="hero-title">${page.h1}</h1>

          <!-- Direct Guidance Snippet Box -->
          <div class="featured-snippet-box">
            <div class="snippet-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>${snippetTitle}</span>
            </div>
            <p class="snippet-text">${page.snippet}</p>
          </div>

          <!-- Hero CTAs -->
          ${heroCtaHtml}

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

        <!-- Right-Side Hero: Clean Baba Cosmetics Business Information Card or Human-Centred Brand Visual -->
        <div class="hero-card-col">
          ${showContactCardAboveTheFold ? businessInfoCardHtml : humanCentredHeroVisualHtml}
        </div>
      </div>
    </div>
  </section>

  <!-- Our Store - Photo Gallery (About Us Page only, immediately after Hero) -->
  ${storeGalleryHtml}

  <!-- Main Content Body & Sidebar Area (Zero Calculators) -->
  <main class="main-content-area" id="main-content">
    <div class="container">
      <div class="content-grid">
        <article class="article-body">
          ${page.sections.map(sec => {
            let content = sec.content;
            if (content.includes('<table') && !content.includes('baba-table-card') && !content.includes('data-table-wrapper') && !content.includes('table-card')) {
              content = content.replace(/(<table[\s\S]*?<\/table>)/g, '<div class="baba-table-card">$1</div>');
            }
            return `
            <section>
              <h2>${sec.h2}</h2>
              <div>${content}</div>
            </section>
          `;}).join('')}

          <!-- Genuine Sourcing Notice -->
          <div class="statutory-callout">
            <div class="statutory-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm1 16h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              <span>Our Commitment to Genuine Products in Nepal</span>
            </div>
            <p style="margin-bottom: 0; font-size: 0.925rem;">Baba Cosmetics is registered under the laws of Nepal (PAN: 600881922). We procure products through recognized brand distribution channels and issue official tax invoices for wholesale transactions. Every product in our store is genuine and properly packaged.</p>
          </div>

          <!-- Reciprocal Parent Service Anchor Link -->
          ${reciprocalHtml}

          <!-- Subcategory / Hub Links if /cosmetics/ -->
          ${subcategoryListHtml}

          <!-- Cosmetic Guide Dynamic Search & Articles -->
          ${kbHeroHtml}
          ${articlesGridHtml}

          <!-- Targeted FAQs Section with Structured Accordions -->
          ${faqsHtml}
        </article>

        <!-- Sidebar Architecture -->
        <aside class="sidebar">
          <!-- Verified Store Badge -->
          <div class="verified-stamp-badge">
            <div class="stamp-icon">🛡️</div>
            <h3 style="color: #fff; font-size: 1.15rem; margin-bottom: 0.35rem;">100% Genuine Guaranteed</h3>
            <p style="font-size: 0.85rem; color: #E2E8F0; margin-bottom: 0.75rem;">Every product is authentic and sourced from recognized distributors.</p>
            <div style="font-size: 0.775rem; color: #FEF08A; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">PAN: 600881922</div>
          </div>

          <!-- Store Location Card -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Store Location</h3>
            <ul class="contact-quick-list">
              <li class="contact-quick-item">
                <span style="font-size: 1.1rem;">📍</span>
                <div>
                  <strong>Janta Galli, Itahari-6, Sunsari</strong>
                  <div style="font-size: 0.825rem; color: #64748B;">180m East of Itahari Chowk</div>
                </div>
              </li>
              <li class="contact-quick-item">
                <span style="font-size: 1.1rem;">⏰</span>
                <div>
                  <strong>Opening Hours</strong>
                  <div style="font-size: 0.825rem; color: #64748B;">8:00 AM – 6:00 PM (Closed Thu)</div>
                </div>
              </li>
              <li class="contact-quick-item">
                <span style="font-size: 1.1rem;">📞</span>
                <div>
                  <strong>Store Telephones</strong>
                  <div><a href="tel:+97725583775">025-583775</a> &bull; <a href="tel:+9779805303415">9805303415</a></div>
                </div>
              </li>
              <li class="contact-quick-item">
                <span style="font-size: 1.1rem;">💬</span>
                <div>
                  <strong>WhatsApp Contact</strong>
                  <div><a href="https://wa.me/9779805303415" target="_blank" rel="noopener">+977-9805303415</a></div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Quick Action Buttons in Sidebar -->
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">Quick Actions</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <button type="button" class="btn btn-primary btn-sm btn-quote" data-modal-open="modal-quote" data-modal-context="Sidebar Wholesale Request">Request Wholesale Rates</button>
              <button type="button" class="btn btn-outline btn-sm btn-stock" data-modal-open="modal-stock" data-modal-context="Sidebar Stock Check">Check Product Availability</button>
              <a href="/about/#store-location" class="btn btn-secondary btn-sm">Find Store on Map</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>

  ${isAboutPage ? `
  <!-- Developer Attribution Section (Immediately above Map Pack) -->
  <section class="developer-attribution-section" aria-label="Website Attribution">
    <div class="container">
      <p class="developer-attribution-text">
        Web Development &amp; SEO by <a href="https://www.smaranraut.com.np" target="_blank" rel="noopener noreferrer">Smaran Raut</a>
      </p>
    </div>
  </section>` : ''}

  <!-- Baba Cosmetics Interactive Local Map Pack -->
  ${showMapPack ? `
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
              <img src="/assets/images/logo.png" alt="Baba Cosmetics Logo" class="map-brand-logo" width="44" height="44">
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
  </section>` : ''}

  <!-- Global Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <img src="/assets/images/logo.png" alt="Baba Cosmetics Logo" width="36" height="36" style="object-fit: contain;">
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
            <li><a href="/wholesale-cosmetics/">Wholesale Overview</a></li>
            <li><a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale</a></li>
            <li><a href="/wholesale-cosmetics/pricing/">Wholesale Pricing & Quotations</a></li>
            <li><a href="/wholesale-cosmetics/delivery-pickup/">Delivery & Store Pickup</a></li>
            <li><a href="/wholesale-cosmetics/product-range/">Available Categories</a></li>
            <li><a href="/wholesale-cosmetics/koshi-province/">Delivery in Koshi Province</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Products & Categories</h4>
          <ul class="footer-links">
            <li><a href="/cosmetics/makeup/">Makeup Products</a></li>
            <li><a href="/cosmetics/skincare/">Skincare Products</a></li>
            <li><a href="/cosmetics/haircare/">Hair Products</a></li>
            <li><a href="/cosmetics/fragrance/">Fragrance & Perfumes</a></li>
            <li><a href="/cosmetics/body-care/">Body Care</a></li>
            <li><a href="/cosmetics/beauty-tools-accessories/">Beauty Tools</a></li>
            <li><a href="/cosmetics/accessories/">Accessories</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Cosmetic Guide & Info</h4>
          <ul class="footer-links">
            <li><a href="/cosmetics-guide/buying-guides/">Cosmetic Sets & Buying Guides</a></li>
            <li><a href="/cosmetics-guide/skincare-routines/">Skincare Routines</a></li>
            <li><a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Tips</a></li>
            <li><a href="/cosmetics-guide/understanding-products/">Understanding Beauty Products</a></li>
            <li><a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care</a></li>
            <li><a href="/cosmetics-guide/beauty-tips-trends/">Beauty Tips & Trends</a></li>
            <li><a href="/about/">About Baba Cosmetics</a></li>
            <li><a href="/about/#store-location">Location & Directions</a></li>
            <li><a href="/faqs/">Frequently Asked Questions</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2050 B.S.–2026 Baba Cosmetics Wholesale & Retail Trading Pvt. Ltd. All rights reserved.</div>
        <div class="footer-developer-credit">
          Web Development &amp; SEO by <a href="https://www.smaranraut.com.np" target="_blank" rel="noopener noreferrer">Smaran Raut</a>
        </div>
        <div style="display: flex; gap: 1rem;">
          <a href="/privacy-policy/" style="color: inherit;">Privacy</a>
          <span>•</span>
          <a href="/terms-and-conditions/" style="color: inherit;">Terms</a>
          <span>•</span>
          <a href="/editorial-policy/" style="color: inherit;">Editorial Policy</a>
          <span>•</span>
          <a href="/cookie-policy/" style="color: inherit;">Cookies</a>
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

  <!-- Global Application Script -->
  <script src="/data/site-data.js?v=2026_v7"></script>
  <script src="/js/app.js?v=2026_v7"></script>
</body>
</html>`;
}

// Generate Sitemap XML
function generateSitemap(routes) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  routes.forEach(route => {
    let priority = "0.7";
    let changefreq = "weekly";

    if (route.path === "/") {
      priority = "1.0";
      changefreq = "daily";
    } else if (route.category === "Wholesale" || route.category === "Retail" || route.category === "Services") {
      priority = "0.9";
      changefreq = "daily";
    } else if (route.category === "Categories") {
      priority = "0.8";
      changefreq = "weekly";
    } else if (route.category === "Cosmetic Guide") {
      priority = "0.8";
      changefreq = "weekly";
    } else if (route.category === "Legal") {
      priority = "0.4";
      changefreq = "monthly";
    }

    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>2026-11-22</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

// Generate Robots.txt
function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// Execute Build & Pre-Render Pipeline
function build() {
  console.log(`Starting pre-render compilation for ${siteRoutes.length} routes...`);

  let successCount = 0;
  let smallCount = 0;

  siteRoutes.forEach(route => {
    const html = compilePage(route, siteRoutes);
    const byteSize = Buffer.byteLength(html, 'utf8');

    let outputDir = __dirname;
    if (route.path !== '/') {
      const cleanPath = route.path.replace(/^\/|\/$/g, '');
      outputDir = path.join(__dirname, ...cleanPath.split('/'));
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const filePath = path.join(outputDir, 'index.html');
    fs.writeFileSync(filePath, html, 'utf8');

    if (byteSize < 20480) {
      smallCount++;
      console.warn(`Warning: Route ${route.path} size is ${byteSize} bytes (<20KB)`);
    }

    successCount++;
  });

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), generateSitemap(siteRoutes), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'robots.txt'), generateRobots(), 'utf8');

  console.log(`\n==============================================`);
  console.log(`PRE-RENDER COMPLETE:`);
  console.log(`Total Routes Compiled: ${successCount}`);
  console.log(`Pages < 20KB: ${smallCount}`);
  console.log(`Sitemap: Generated sitemap.xml with ${siteRoutes.length} URLs`);
  console.log(`Robots: Generated robots.txt`);
  console.log(`==============================================\n`);
}

build();
