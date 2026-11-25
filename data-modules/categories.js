/**
 * Categories Cluster Routes (10 Master Category Pages)
 * Algorithmic Authorship & Semantic Internal Linking Refinement
 */

module.exports = function getCategoriesRoutes() {
  return [
    // 1. Master Products Directory
    {
      path: "/cosmetics/",
      title: "Available Cosmetics & Beauty Products | Baba Cosmetics Itahari",
      metaDescription: "Explore all beauty products available at Baba Cosmetics in Itahari: makeup, skincare, haircare, fragrances, body care, tools, and accessories.",
      h1: "Available Cosmetics & Beauty Products in Itahari",
      snippet: "Baba Cosmetics maintains an exhaustive inventory of authentic cosmetics and beauty supplies at Janta Galli, Itahari-6, Sunsari. We distribute original formulations across seven primary categories to commercial retail shops throughout Koshi Province (with zero MOQ and flexible cartons) and to individual retail shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products Directory", url: "/cosmetics/" }],
      sections: [
        {
          h2: "Which Beauty Product Categories Are Distributed by Baba Cosmetics?",
          content: `<p>Baba Cosmetics categorizes its commercial beauty inventory into seven primary divisions to streamline wholesale procurement and in-store retail selection:</p>
          <div class="category-cards-grid">
            <div class="category-card">
              <h3><a href="/cosmetics/makeup/">Makeup Products in Itahari, Nepal</a></h3>
              <p>Foundations, concealers, compact powders, lipsticks, eyeliners, and makeup setting sprays for everyday and bridal wear.</p>
              <a href="/cosmetics/makeup/" class="btn btn-outline btn-sm">Explore Makeup &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/skincare/">Skincare Products in Itahari, Nepal</a></h3>
              <p>Dermatological face cleansers, soothing toners, targeted serums, daily moisturizers, and high-SPF sunscreens.</p>
              <a href="/cosmetics/skincare/" class="btn btn-outline btn-sm">Explore Skincare &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/haircare/">Hair Products in Itahari, Nepal</a></h3>
              <p>Salon-grade cleansing shampoos, nourishing conditioners, herbal hair oils, and thermal styling formulations.</p>
              <a href="/cosmetics/haircare/" class="btn btn-outline btn-sm">Explore Haircare &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/fragrance/">Fragrance & Perfumes in Itahari, Nepal</a></h3>
              <p>Authentic Eau de Parfum, refreshing body mists, daily deodorants, and fine aromatic sprays.</p>
              <a href="/cosmetics/fragrance/" class="btn btn-outline btn-sm">Explore Fragrances &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/body-care/">Body Care in Itahari, Nepal</a></h3>
              <p>Deep hydrating body lotions, cleansing shower washes, nourishing soaps, and personal care essentials.</p>
              <a href="/cosmetics/body-care/" class="btn btn-outline btn-sm">Explore Body Care &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/beauty-tools-accessories/">Beauty Tools in Itahari, Nepal</a></h3>
              <p>Professional makeup brushes, blending sponges, eyelash curlers, and grooming tweezers.</p>
              <a href="/cosmetics/beauty-tools-accessories/" class="btn btn-outline btn-sm">Explore Tools &rarr;</a>
            </div>
            <div class="category-card">
              <h3><a href="/cosmetics/accessories/">Accessories in Itahari, Nepal</a></h3>
              <p>Cosmetic travel bags, vanity organizers, hair styling clips, and beauty accessories.</p>
              <a href="/cosmetics/accessories/" class="btn btn-outline btn-sm">Explore Accessories &rarr;</a>
            </div>
          </div>`
        },
        {
          h2: "How to Procure Cosmetics for Retail Stores or Personal Use in Itahari?",
          content: `<p>Procuring cosmetics from Baba Cosmetics accommodates both commercial bulk buyers and personal shoppers through dedicated supply channels in Janta Galli, Itahari-6.</p>
          <p>Retail store owners can place wholesale orders with no minimum order requirements through our <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a> workflow, receiving VAT invoices and regional transport dispatch across Koshi Province. Personal shoppers can visit our retail showroom to inspect products in person and receive an automatic flat 5% discount below printed MRP.</p>`
        },
        {
          h2: "How Does Baba Cosmetics Assist Customers in Selecting Suitable Formulations?",
          content: `<p>To assist consumers in navigating complex ingredient lists, skin-type requirements, and seasonal shade changes, our editorial team maintains educational resources in our knowledge center.</p>
          <p>Learn how to assess beauty formulations and build balanced personal routines by exploring our comprehensive <a href="/cosmetics-guide/">Cosmetic Guide: Helpful Beauty & Product Information</a> hub.</p>`
        }
      ],
      faqs: [
        {
          q: "How can I verify whether a specific beauty brand is currently in stock?",
          a: "Contact our store desk directly via WhatsApp at +977-9805303415 or call our landline at 025-583775 for real-time inventory checks."
        },
        {
          q: "Do you supply beauty salons with professional salon-sized products?",
          a: "Yes, we stock professional facial kits, liter-sized salon shampoos, and disposable beauty accessories at specialized trade rates."
        }
      ]
    },

    // 2. Makeup Products
    {
      path: "/cosmetics/makeup/",
      title: "Makeup Products | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Buy authentic makeup products at Baba Cosmetics in Janta Galli, Itahari-6. Foundations, lipsticks, and eye makeup for retail (5% off MRP) and wholesale.",
      h1: "Makeup Products in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies 100% genuine makeup products in Janta Galli, Itahari-6, Sunsari. We distribute original face foundations, compact powders, lipsticks, eyeliners, and makeup setting sprays to retail beauty stores across Koshi Province (with zero MOQ) and to individual shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Makeup", url: "/cosmetics/makeup/" }],
      sections: [
        {
          h2: "What Makeup Formulations Are Available at Baba Cosmetics in Itahari?",
          content: `<p>Baba Cosmetics stocks genuine color cosmetics formulated for diverse skin tones and varying weather conditions in Eastern Nepal, ranging from high humidity summers to dry winter months.</p>
          <p>Our makeup inventory is organized into four specialized subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/makeup/face/">Face Makeup Products in Itahari, Nepal</a>:</strong> Liquid matte foundations, skin primers, loose setting powders, compacts, and high-coverage concealers.</li>
            <li><strong><a href="/cosmetics/makeup/eyes/">Eye Makeup Products in Itahari, Nepal</a>:</strong> Smudge-proof eyeliners, volumizing mascaras, pigmented kajal pencils, and multi-shade eyeshadow palettes.</li>
            <li><strong><a href="/cosmetics/makeup/lips/">Lip Makeup Products in Itahari, Nepal</a>:</strong> Long-wear matte liquid lipsticks, hydrating satin lip colors, nourishing lip balms, and precision lip liners.</li>
            <li><strong><a href="/cosmetics/makeup/removers/">Makeup Removers in Itahari, Nepal</a>:</strong> Gentle micellar waters, bi-phase waterproof eye makeup removers, and soothing cleansing balms.</li>
          </ul>`
        },
        {
          h2: "How Do Retailers and Shoppers Purchase Makeup Products at Baba Cosmetics?",
          content: `<p>Retail shop owners can order makeup inventory in custom mixed cartons containing varied shades and product types, supported by official VAT invoices through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> service.</p>
          <p>Individual retail shoppers visiting our Janta Galli store receive an immediate flat 5% discount on MRP. Because color accuracy is essential for cosmetics, shoppers can inspect outer packaging and verify shade numbers at our counter before purchasing.</p>`
        },
        {
          h2: "Where Can Shoppers Find Practical Techniques for Makeup Application?",
          content: `<p>Applying makeup smoothly requires understanding face preparation, formula blending order, and seasonal skin adjustments.</p>
          <p>For detailed step-by-step beauty tutorials and daily wear recommendations, review our dedicated guide on <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Can retail shops buy mixed lipstick shades in a single wholesale carton?",
          a: "Yes. Baba Cosmetics permits custom mixed carton packaging for all lipsticks and color cosmetics without requiring full single-shade cases."
        },
        {
          q: "Are the makeup products waterproof and suitable for hot Itahari summers?",
          a: "We carry specialized matte, sweat-resistant, and waterproof formulas ideal for warm Tarai weather."
        }
      ]
    },

    // 3. Skincare Products
    {
      path: "/cosmetics/skincare/",
      title: "Skincare Products | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Buy authentic skincare products at Baba Cosmetics in Janta Galli, Itahari-6. Cleansers, serums, sunscreens, and creams with 5% off MRP and wholesale supply.",
      h1: "Skincare Products in Itahari, Nepal",
      snippet: "Baba Cosmetics is the trusted distributor of authentic skincare products in Janta Galli, Itahari-6, Sunsari. We supply dermatologically tested cleansers, toners, active serums, moisturizers, and high-protection sunscreens to retail stores across Koshi Province with no MOQ, and to everyday shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Skincare", url: "/cosmetics/skincare/" }],
      sections: [
        {
          h2: "What Skincare Categories Are Available at Baba Cosmetics in Itahari?",
          content: `<p>Baba Cosmetics stocks authentic skincare formulations designed to support healthy skin barriers, address hyperpigmentation, and protect against intense ultraviolet solar radiation in Eastern Nepal.</p>
          <p>Our skincare collection comprises six specialized subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/skincare/cleansers/">Face Cleansers in Itahari, Nepal</a>:</strong> Foaming gel cleansers, salicylic acid washes, and gentle hydrating milky cleansers.</li>
            <li><strong><a href="/cosmetics/skincare/toners/">Face Toners in Itahari, Nepal</a>:</strong> Pore-refining astringents, soothing rose waters, and deep barrier-hydrating essences.</li>
            <li><strong><a href="/cosmetics/skincare/serums/">Face Serums in Itahari, Nepal</a>:</strong> Active serums including Niacinamide 10%, Vitamin C brightening serum, and Hyaluronic acid hydration drops.</li>
            <li><strong><a href="/cosmetics/skincare/moisturisers/">Face Moisturisers in Itahari, Nepal</a>:</strong> Lightweight oil-free gel creams for summer and rich ceramide barrier repair creams for winter.</li>
            <li><strong><a href="/cosmetics/skincare/sunscreen/">Sunscreens in Itahari, Nepal</a>:</strong> Broad-spectrum SPF 50+ PA++++ chemical and mineral sun protection gels and fluid sunscreens.</li>
            <li><strong><a href="/cosmetics/skincare/masks-exfoliators/">Face Masks & Scrubs in Itahari, Nepal</a>:</strong> Clarifying clay masks, hydrating sheet masks, and gentle chemical peel exfoliators.</li>
          </ul>`
        },
        {
          h2: "How to Source Wholesale Skincare Cartons or Buy Single Skincare Units?",
          content: `<p>Cosmetic shops, pharmacies, and skin clinics in Koshi Province can source verified skincare lines at trade rates without minimum order limits through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> desk.</p>
          <p>Personal shoppers can visit our Janta Galli retail showroom to purchase individual skincare items with an automatic flat 5% discount below printed MRP. All skincare is stored in temperature-regulated, light-protected stockrooms to ensure active ingredient efficacy.</p>`
        },
        {
          h2: "How Should Daily Skincare Products Be Layered for Maximum Efficacy?",
          content: `<p>Layering skincare formulations in the correct sequence—from thinnest watery essence to thickest occlusive moisturizer—ensures active ingredients penetrate effectively without pilling.</p>
          <p>To learn how to structure an effective daily regimen for your specific skin type, review our comprehensive educational resource on <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "How does Baba Cosmetics ensure active skincare serums remain potent?",
          a: "All serums and sunscreens are kept in cool, clean, sun-protected storage within our Janta Galli warehouse to prevent formulation oxidation."
        },
        {
          q: "Are the sunscreens suitable for oily skin in humid Nepal summers?",
          a: "Yes, we stock ultralight, non-greasy matte sunscreen formulations that absorb quickly without leaving a white residue."
        }
      ]
    },

    // 4. Hair Products
    {
      path: "/cosmetics/haircare/",
      title: "Hair Products | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Buy salon-grade hair products at Baba Cosmetics in Janta Galli, Itahari. Shampoos, conditioners, herbal hair oils, and styling waxes for wholesale and retail.",
      h1: "Hair Products in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies professional salon and everyday hair products in Janta Galli, Itahari-6, Sunsari. We distribute original shampoos, conditioners, herbal nourishing oils, repair masks, and hair styling waxes to salons and retail stores across Koshi Province with no MOQ, and to individual shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Hair Care", url: "/cosmetics/haircare/" }],
      sections: [
        {
          h2: "Which Hair Formulations and Treatments Are Distributed by Baba Cosmetics?",
          content: `<p>Baba Cosmetics distributes high-performance hair formulations designed to repair damaged hair cuticles, control seasonal dandruff, and protect against thermal styling damage.</p>
          <p>Our hair care catalog includes three primary subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/haircare/shampoo-conditioner/">Shampoo & Conditioner in Itahari, Nepal</a>:</strong> Anti-dandruff shampoos, sulfate-free color-safe cleansers, keratin smoothing washes, and deep conditioning masks.</li>
            <li><strong><a href="/cosmetics/haircare/oils-serums/">Hair Oils & Serums in Itahari, Nepal</a>:</strong> Pure Moroccan argan oils, herbal bhringraj extracts, onion black seed hair oils, and split-end repair serums.</li>
            <li><strong><a href="/cosmetics/haircare/styling/">Hair Styling Products in Itahari, Nepal</a>:</strong> Strong-hold matte hair waxes, styling pomades, heat protectant sprays, and hair volumizing mists.</li>
          </ul>`
        },
        {
          h2: "How Do Salons and Retailers Procure Bulk Haircare Products in Itahari?",
          content: `<p>Beauty parlors, barbershops, and cosmetics retailers across Sunsari and Morang can order salon-sized master bottles and mixed styling packs at direct trade pricing through our <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a> workflow.</p>
          <p>Personal shoppers enjoy a flat 5% discount on MRP on all single-unit hair oils, conditioners, and styling serums at our retail counter in Janta Galli.</p>`
        },
        {
          h2: "Where Can Consumers Learn Proper Hair Cleansing and Conditioning Routines?",
          content: `<p>Proper hair maintenance requires washing frequency matched to scalp oiliness and using conditioner strictly on hair lengths to avoid weighing down root volume.</p>
          <p>For expert advice on balancing scalp health and strand nourishment, consult our comprehensive guide to <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Do you supply professional 1-liter salon shampoo bottles for beauty parlors?",
          a: "Yes, we stock professional 1-liter and 5-liter salon shampoo and conditioner containers at specialized wholesale salon trade rates."
        },
        {
          q: "Are sulfate-free shampoos available for chemically treated and colored hair?",
          a: "Yes, we stock verified keratin-safe and sulfate-free hair cleansers that preserve color vibrancy and moisture balance."
        }
      ]
    },

    // 5. Fragrance & Perfumes
    {
      path: "/cosmetics/fragrance/",
      title: "Fragrance & Perfumes | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Discover authentic fragrances and perfumes at Baba Cosmetics in Janta Galli, Itahari. Long-lasting Eau de Parfum, body mists, and daily sprays.",
      h1: "Fragrance & Perfumes in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies genuine perfumes, fine fragrances, and scented body mists at Janta Galli, Itahari-6, Sunsari. We distribute original Eau de Parfum (EDP), Eau de Toilette (EDT), pocket sprays, and daily deodorants to retail stores across Koshi Province (no MOQ) and to personal shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Fragrance", url: "/cosmetics/fragrance/" }],
      sections: [
        {
          h2: "What Types of Fragrance Formulations Are Available at Baba Cosmetics?",
          content: `<p>Baba Cosmetics carries authentic aromatic formulations featuring diverse concentration tiers and fragrance families, including fresh citrus, warm oriental, floral, and woody profiles.</p>
          <p>Our fragrance inventory comprises two specialized subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/fragrance/perfumes/">Perfumes and Fragrances in Itahari, Nepal</a>:</strong> High-concentration Eau de Parfum (15–20% perfume oil concentration for 8+ hours longevity) and versatile Eau de Toilette (5–15% concentration for daytime wear).</li>
            <li><strong><a href="/cosmetics/fragrance/body-mists/">Body Mists & Sprays in Itahari, Nepal</a>:</strong> Light, refreshing all-over body splashes, travel pocket perfumes, and daily antiperspirant deodorants.</li>
          </ul>`
        },
        {
          h2: "How Are Authentic Perfumes Sourced and Sold in Itahari?",
          content: `<p>Every perfume bottle sold at Baba Cosmetics carries legitimate batch codes and official importer labels, safeguarding buyers from diluted or imitation scents.</p>
          <p>Retail shops can order mixed scent cartons with no minimum carton requirements through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> service. Personal shoppers receive a flat 5% discount on MRP at our Janta Galli showroom, with Cash and QR code payment accepted.</p>`
        },
        {
          h2: "How Do Fragrance Concentrations Differ Between Eau de Parfum and Body Mists?",
          content: `<p>Understanding the percentage of aromatic compounds in a fragrance allows consumers to select the ideal balance between projection, scent longevity, and price point.</p>
          <p>To learn how perfume oil ratios affect wear time and how to read fragrance notes, consult our educational guide on <a href="/cosmetics-guide/understanding-products/">Understanding Beauty Products, Categories & Labels</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "How can I check if a perfume bottle is genuine at Baba Cosmetics?",
          a: "All perfume boxes feature authentic manufacturer cellophane seals, laser-printed lot batch numbers, and authorized import holograms available for customer inspection."
        },
        {
          q: "How long does an Eau de Parfum typically last in warm Tarai weather?",
          a: "Authentic Eau de Parfum formulations typically project for 6 to 10 hours depending on skin chemistry and pulse-point application."
        }
      ]
    },

    // 6. Body Care
    {
      path: "/cosmetics/body-care/",
      title: "Body Care | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Browse body care products at Baba Cosmetics in Janta Galli, Itahari. Hydrating body lotions, shower gels, and cleansing soaps with 5% off MRP and wholesale supply.",
      h1: "Body Care in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies essential body care formulations at Janta Galli, Itahari-6, Sunsari. We distribute original hydrating body lotions, refreshing shower gels, and personal hygiene soaps to retail stores throughout Koshi Province (with zero MOQ) and to individual shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Body Care", url: "/cosmetics/body-care/" }],
      sections: [
        {
          h2: "What Body Care Products Are Distributed by Baba Cosmetics in Itahari?",
          content: `<p>Baba Cosmetics distributes dermatologist-approved body care products designed to cleanse skin gently, prevent winter xerosis (skin dryness), and maintain all-day hygiene.</p>
          <p>Our body care inventory covers two dedicated subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/body-care/cleansers/">Body Wash & Soaps in Itahari, Nepal</a>:</strong> Moisturizing cream body washes, antibacterial liquid shower gels, and gentle cleansing bathing bars.</li>
            <li><strong><a href="/cosmetics/body-care/moisturisers/">Body Lotions in Itahari, Nepal</a>:</strong> Cocoa butter rich body creams, aloe vera cooling gels, and deep barrier repair body moisturizers.</li>
          </ul>`
        },
        {
          h2: "How Do Wholesale and Retail Customers Purchase Body Care Products?",
          content: `<p>Retail stores and general pharmacies can purchase body care products in standard master cartons or custom mixed boxes with zero minimum order quantity via our <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a> procedure.</p>
          <p>Individual consumers visiting our Janta Galli store receive an automatic flat 5% discount on MRP across all body wash and body lotion brands, with payment accepted via Cash or Fonepay QR code.</p>`
        },
        {
          h2: "How Should Daily Body Moisturization Be Scheduled Across Seasons?",
          content: `<p>Applying body lotion within three minutes of exiting the shower traps surface moisture in the epidermal layer before water evaporates into dry ambient air.</p>
          <p>For practical daily hygiene advice and seasonal skin tips, read our educational article on <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Do you supply bulk body care cartons for pharmacies and grocery shops?",
          a: "Yes, we distribute high-demand daily body lotions, soaps, and shower gels in commercial trade cartons with official tax invoices."
        },
        {
          q: "Which body lotions work best for dry winter skin in Eastern Nepal?",
          a: "We recommend rich ceramide, shea butter, or cocoa butter formulations that create a protective lipid barrier against moisture loss."
        }
      ]
    },

    // 7. Beauty Tools
    {
      path: "/cosmetics/beauty-tools-accessories/",
      title: "Beauty Tools | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Equip your vanity or salon with beauty tools at Baba Cosmetics in Itahari. Brushes, sponges, eyelash curlers, and applicators with wholesale rates and 5% off MRP.",
      h1: "Beauty Tools in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies professional beauty tools and application instruments at Janta Galli, Itahari-6, Sunsari. We distribute high-density makeup brushes, blending sponges, eyelash curlers, and grooming tweezers to beauty parlors across Koshi Province with no MOQ, and to retail shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Beauty Tools", url: "/cosmetics/beauty-tools-accessories/" }],
      sections: [
        {
          h2: "Which Beauty Tools and Applicators Are Available at Baba Cosmetics?",
          content: `<p>Baba Cosmetics stocks durable, precision-engineered beauty tools essential for flawless cosmetic application and professional salon services.</p>
          <p>Our beauty tools catalog is organized into two primary subcategories:</p>
          <ul>
            <li><strong><a href="/cosmetics/beauty-tools-accessories/brushes-sponges/">Makeup Brushes & Sponges in Itahari, Nepal</a>:</strong> Synthetic bristled foundation brushes, angled contour tools, eyeshadow blending brushes, and latex-free teardrop makeup sponges.</li>
            <li><strong><a href="/cosmetics/beauty-tools-accessories/eye-tools/">Eyelash & Brow Tools in Itahari, Nepal</a>:</strong> Spring-action eyelash curlers, calibrated slant tweezers, eyebrow grooming scissors, and spoolie brush combs.</li>
          </ul>`
        },
        {
          h2: "How Do Salons and Everyday Shoppers Procure Beauty Tools in Itahari?",
          content: `<p>Cosmetology schools and bridal parlors can purchase tool multi-packs and brush canister sets at trade rates through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> desk.</p>
          <p>Individual retail shoppers receive a flat 5% discount below printed MRP at our Janta Galli counter, with complete in-person inspection of brush softness and tool handles encouraged before checkout.</p>`
        },
        {
          h2: "How Does Proper Tool Selection Improve Makeup Finish Quality?",
          content: `<p>Using the correct density brush or damp sponge prevents streaking and ensures foundation blends evenly across facial contours.</p>
          <p>To learn professional techniques for blending base makeup and caring for tool bristles, review our guide to <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Are synthetic makeup brushes suitable for liquid foundations?",
          a: "Yes, non-porous synthetic bristles are optimal for liquid and cream foundations because they do not absorb product into the fibers."
        },
        {
          q: "How often should makeup blending sponges be replaced?",
          a: "For daily personal use, makeup sponges should be thoroughly washed weekly and replaced every 3 months for optimal hygiene."
        }
      ]
    },

    // 8. Accessories
    {
      path: "/cosmetics/accessories/",
      title: "Accessories | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Explore cosmetic pouches, vanity organizers, and beauty accessories at Baba Cosmetics in Janta Galli, Itahari. Available for retail (5% off MRP) and wholesale.",
      h1: "Accessories in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies cosmetic organizer pouches, vanity travel kits, and hair accessories at Janta Galli, Itahari-6, Sunsari. We provide retail stores with wholesale carton assortments (with zero MOQ) and serve individual customers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Accessories", url: "/cosmetics/accessories/" }],
      sections: [
        {
          h2: "What Vanity and Cosmetic Accessories Are Available in Itahari?",
          content: `<p>Baba Cosmetics stocks practical, stylish beauty accessories designed for secure cosmetic travel, vanity organization, and daily hair grooming.</p>
          <p>Our accessories range includes waterproof zippered makeup bags, multi-compartment travel toiletry kits, hair claw clips, satin scrunchies, and compact vanity mirrors. These accessories protect delicate cosmetic bottles from impact and leakage during travel across Eastern Nepal.</p>`
        },
        {
          h2: "How Can Retailers and Personal Shoppers Buy Cosmetic Accessories?",
          content: `<p>Retail stores and gift shops can order mixed accessory cartons with no minimum quantity through our <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a> workflow.</p>
          <p>Personal shoppers can select individual vanity pouches and hair accessories with a flat 5% discount on MRP at our Janta Galli retail showroom, paying easily via Cash or Fonepay QR code.</p>`
        },
        {
          h2: "How Should Cosmetic Pouches Be Packed to Protect Glass Bottles?",
          content: `<p>Packing glass cosmetic dropper bottles and liquid foundations securely requires compartmentalized pouches with cushioned dividers to prevent impact breakage.</p>
          <p>For practical guidelines on assembling a safe travel makeup kit, consult our comprehensive resource on <a href="/cosmetics-guide/buying-guides/">Cosmetic Sets & Buying Guides</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Do you supply waterproof makeup pouches suitable for monsoon travel?",
          a: "Yes, we stock clear PVC and water-resistant nylon zippered cosmetic cases that keep products protected from moisture."
        },
        {
          q: "Can retail shops order mixed designs of hair accessories?",
          a: "Yes, hair accessories can be purchased in assorted design bundles with no minimum order requirements."
        }
      ]
    },

    // 9. Nail Care
    {
      path: "/cosmetics/nail-care/",
      title: "Nail Care Products | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Nail polishes, lacquers, and polish removers at Baba Cosmetics in Janta Galli, Itahari-6. Flat 5% off MRP retail and wholesale cartons across Koshi Province.",
      h1: "Nail Care Products in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies authentic nail care products at Janta Galli, Itahari-6, Sunsari. We distribute chip-resistant nail polishes, gel effect top coats, and acetone-free polish removers to retail shops throughout Koshi Province (with no MOQ) and to individual shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Nail Care", url: "/cosmetics/nail-care/" }],
      sections: [
        {
          h2: "What Nail Care Formulations Are Available at Baba Cosmetics?",
          content: `<p>Baba Cosmetics stocks salon-quality nail formulations that provide durable color payoff, glossy finishes, and gentle polish removal without damaging natural nail plates.</p>
          <p>Our nail collection includes quick-drying color lacquers, strengthening base coats, high-shine gel top coats, and conditioning acetone-free polish removers under our specialized subcategory: <a href="/cosmetics/nail-care/polish-remover/">Nail Polish & Removers in Itahari, Nepal</a>.</p>`
        },
        {
          h2: "How to Source Wholesale Nail Polish Cartons or Buy Single Bottles?",
          content: `<p>Cosmetic shops and nail salons can order assorted nail lacquer cartons with diverse trendy shades and zero MOQ through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> service.</p>
          <p>Personal shoppers receive an immediate flat 5% discount on MRP at our Janta Galli retail counter, where bottles can be physically examined before purchase.</p>`
        },
        {
          h2: "Where Can Shoppers Explore Complementary Beauty Tools and Grooming Kits?",
          content: `<p>Proper manicures and pedicures require clean grooming tools including nail clippers, cuticle pushers, and precision files.</p>
          <p>Explore our complete catalog of grooming instruments in our dedicated <a href="/cosmetics/beauty-tools-accessories/">Beauty Tools in Itahari, Nepal</a> section.</p>`
        }
      ],
      faqs: [
        {
          q: "Are acetone-free nail polish removers safe for sensitive cuticles?",
          a: "Yes, acetone-free removers utilize gentle solvents like ethyl acetate enriched with moisturizers to cleanse polish without drying the nail bed."
        },
        {
          q: "Can salons order mixed color display stands of nail polish?",
          a: "Yes, we supply pre-packaged retail display stands with assorted seasonal nail colors for salons and shops."
        }
      ]
    },

    // 10. Personal Care
    {
      path: "/cosmetics/personal-care/",
      title: "Personal Care Products | Wholesale & Retail in Itahari | Baba Cosmetics",
      metaDescription: "Daily personal hygiene and grooming supplies at Baba Cosmetics in Janta Galli, Itahari-6. Flat 5% off MRP for retail and wholesale supply for shops.",
      h1: "Personal Care Products in Itahari, Nepal",
      snippet: "Baba Cosmetics supplies essential daily personal hygiene and grooming products at Janta Galli, Itahari-6, Sunsari. We supply trusted body soaps, deodorants, oral care essentials, and talcum powders to retail stores across Koshi Province with no MOQ, and to personal shoppers with a flat 5% discount on MRP.",
      category: "Categories",
      parentService: "/cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Products", url: "/cosmetics/" }, { name: "Personal Care", url: "/cosmetics/personal-care/" }],
      sections: [
        {
          h2: "What Personal Care Essentials Are Supplied by Baba Cosmetics?",
          content: `<p>Baba Cosmetics distributes trusted daily personal care essentials manufactured by verified brand concessionaires, maintaining household hygiene and personal grooming standards.</p>
          <p>Our personal care catalog includes bathing soaps, liquid hand washes, daily deodorants, talcum powders, and grooming wipes. Explore our closely related moisturizing lotions and cleansers under <a href="/cosmetics/body-care/">Body Care in Itahari, Nepal</a>.</p>`
        },
        {
          h2: "How Do Retailers and Shoppers Buy Personal Care Essentials in Itahari?",
          content: `<p>Pharmacies, convenience shops, and general stores throughout Koshi Province can order personal care items in master cases or mixed cartons via our <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a> desk.</p>
          <p>In-store retail shoppers receive a flat 5% discount on MRP on all personal care brands at our Janta Galli counter, with Cash and QR code payment accepted.</p>`
        },
        {
          h2: "How Does Daily Personal Care Connect with Balanced Body Care?",
          content: `<p>Consistent daily personal cleansing forms the foundation of all healthy skincare and hair maintenance regimens.</p>
          <p>To understand the essentials of daily skin hydration and scalp care, consult our educational overview on <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.</p>`
        }
      ],
      faqs: [
        {
          q: "Do you supply antibacterial body washes and soaps?",
          a: "Yes, we distribute both medicated antibacterial soaps and gentle dermatological shower cleansers."
        },
        {
          q: "Can retail stores purchase small cartons of daily personal care items?",
          a: "Yes, we support flexible carton sizing with no minimum order requirements across all personal care SKUs."
        }
      ]
    }
  ];
};
