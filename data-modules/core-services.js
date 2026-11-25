/**
 * Core & Services Routes
 * Algorithmic Authorship & Semantic Internal Linking Refinement
 */

module.exports = function getCoreServicesRoutes() {
  return [
    // 1. Homepage
    {
      path: "/",
      title: "Baba Cosmetics - Best Cosmetic Seller in Itahari",
      metaDescription: "Baba Cosmetics is the best cosmetic seller in Itahari at Janta Galli, Itahari-6, Sunsari. 100% genuine wholesale and retail makeup, skincare, and hair products.",
      h1: "Baba Cosmetics - Best Cosmetic Seller in Itahari",
      snippet: "Baba Cosmetics is the leading wholesale supplier and retail cosmetic store in Itahari, located in Janta Galli, Itahari-6, Sunsari. We supply 100% genuine skincare, makeup, haircare, and personal beauty products with official tax invoices, providing bulk carton deliveries across Koshi Province and in-store retail shopping with a flat 5% discount on MRP.",
      category: "Core",
      parentService: null,
      breadcrumbs: [{ name: "Home", url: "/" }],
      sections: [
        {
          h2: "Why Is Baba Cosmetics Recognized as the Best Cosmetic Seller in Itahari?",
          content: `<p>Baba Cosmetics earns its reputation as the best cosmetic seller in Itahari by sourcing exclusively through authorized national distributors, enforcing physical batch-code verification, and operating transparent wholesale and retail counters in Janta Galli, Itahari-6.</p>
          <p>Every commercial consignment carries legitimate PAN billing (PAN: 600881922) to safeguard retailers against counterfeit goods. Individual shoppers receive direct counter assistance, transparent batch inspections, and a consistent flat 5% discount below maximum retail price (MRP).</p>`
        },
        {
          h2: "How Do Wholesale Supply and Retail Store Purchases Operate?",
          content: `<p>Baba Cosmetics operates two distinct commercial distribution models to serve businesses and personal customers across Eastern Nepal:</p>
          <ul>
            <li><strong>Commercial Wholesale Supply:</strong> Retail shop owners, pharmacies, and beauty parlors can order authentic inventory through our dedicated <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> desk. We enforce no minimum order quantity (MOQ), permit flexible carton packaging (mixed packs, full cases, or loose units), and coordinate regional transport across the whole Koshi Province. Payment terms include cash and bank transfer.</li>
            <li><strong>Direct Retail Showroom:</strong> Personal shoppers can visit our <a href="/retail-cosmetics/">Cosmetics Retail Shop in Itahari, Nepal</a> at Janta Galli to select daily skincare and makeup items. All retail items receive an immediate 5% discount on MRP. Payment is accepted via Cash and instant QR code (Fonepay, eSewa, mobile banking). Under our strict counter policy, once sold, goods will neither be returned nor exchanged, so complete product inspection is completed at the counter prior to checkout.</li>
          </ul>`
        },
        {
          h2: "Which Beauty Product Categories Are Available for Immediate Supply?",
          content: `<p>Baba Cosmetics maintains ready inventory across seven comprehensive beauty categories at our central Itahari stockroom:</p>
          <ul>
            <li><strong><a href="/cosmetics/makeup/">Makeup Products in Itahari, Nepal</a>:</strong> Foundations, concealers, compact powders, lipsticks, and eye cosmetics for daily wear and bridal styling.</li>
            <li><strong><a href="/cosmetics/skincare/">Skincare Products in Itahari, Nepal</a>:</strong> Dermatologically formulated face cleansers, soothing toners, concentrated serums, moisturizers, and high-SPF sunscreens.</li>
            <li><strong><a href="/cosmetics/haircare/">Hair Products in Itahari, Nepal</a>:</strong> Salon-grade shampoos, nourishing conditioners, herbal hair oils, and specialized styling treatments.</li>
            <li><strong><a href="/cosmetics/fragrance/">Fragrance & Perfumes in Itahari, Nepal</a>:</strong> Long-lasting Eau de Parfum, daily body mists, and fine fragrance sprays from authorized manufacturers.</li>
            <li><strong><a href="/cosmetics/body-care/">Body Care in Itahari, Nepal</a>:</strong> Hydrating body lotions, cleansing shower washes, and personal hygiene soaps.</li>
            <li><strong><a href="/cosmetics/beauty-tools-accessories/">Beauty Tools in Itahari, Nepal</a>:</strong> Precision makeup brushes, blending sponges, eyelash curlers, and grooming tweezers.</li>
            <li><strong><a href="/cosmetics/accessories/">Accessories in Itahari, Nepal</a>:</strong> Cosmetic organizer pouches, vanity travel kits, and hair styling accessories.</li>
          </ul>
          <p>For a complete directory of all available formulations, browse our master catalog of <a href="/cosmetics/">Available Cosmetics & Beauty Products in Itahari</a>.</p>`
        },
        {
          h2: "Where Is the Baba Cosmetics Store Located and What Are the Operating Hours?",
          content: `<p>The physical Baba Cosmetics showroom is located at Janta Galli, Itahari-6, Sunsari, exactly 180 meters east of central Itahari Chowk along Mahendra Highway.</p>
          <p><strong>Store Opening Hours:</strong> Everyday 8:00 AM – 6:00 PM, excluding Thursdays (Thursday is our weekly holiday).</p>
          <p><strong>Customer Support Hours:</strong> Everyday 7:00 AM – 8:00 PM via Landline (<a href="tel:+97725583775">025-583775</a>) and Mobile/WhatsApp (<a href="https://wa.me/9779805303415" target="_blank">+977-9805303415</a>).</p>
          <p>Detailed road access directions and walking instructions are available on our dedicated <a href="/about/">About Baba Cosmetics: Best Cosmetic Seller in Itahari</a> page.</p>`
        }
      ],
      faqs: [
        {
          q: "Where is Baba Cosmetics located in Itahari?",
          a: "Baba Cosmetics is located in Janta Galli, Itahari-6, Sunsari, approximately 180 meters east of central Itahari Chowk along Mahendra Highway."
        },
        {
          q: "What are the opening hours and weekly holidays for Baba Cosmetics?",
          a: "The store is open everyday from 8:00 AM to 6:00 PM, excluding Thursdays. Thursday is our weekly holiday. Customer support via phone and WhatsApp is active everyday from 7:00 AM to 8:00 PM."
        },
        {
          q: "What discount is offered on retail cosmetics purchases?",
          a: "Individual retail shoppers receive a flat 5% discount on MRP on all cosmetic and beauty products purchased at our Janta Galli counter."
        },
        {
          q: "What is the minimum order quantity for wholesale buyers?",
          a: "Baba Cosmetics enforces no minimum order quantity (MOQ) for wholesale buyers. Retail shop owners can order loose pieces, mixed cartons, or full case boxes."
        },
        {
          q: "Does Baba Cosmetics deliver wholesale orders across Koshi Province?",
          a: "Yes, wholesale delivery is coordinated across the whole Koshi Province, including Dharan, Biratnagar, Damak, and surrounding towns. Transport charges depend on order volume and destination."
        }
      ]
    },

    // 2. Services Hub
    {
      path: "/services/",
      title: "Wholesale & Retail Cosmetics Services | Baba Cosmetics Itahari",
      metaDescription: "Explore wholesale supply for retail shops, in-store retail shopping, and beauty salon supplies at Baba Cosmetics in Janta Galli, Itahari.",
      h1: "Wholesale & Retail Cosmetics Services in Itahari",
      snippet: "Baba Cosmetics provides three specialized commercial services in Itahari: bulk wholesale supply for regional cosmetics retailers, personalized counter shopping for individual customers, and professional product sourcing for beauty salons and parlors across Koshi Province.",
      category: "Services",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Services", url: "/services/" }],
      sections: [
        {
          h2: "What Wholesale Supply Solutions Does Baba Cosmetics Provide for Retailers?",
          content: `<p>Baba Cosmetics delivers dependable inventory replenishment for cosmetic shops, pharmacies, and department stores across Koshi Province by supplying 100% genuine cosmetics at competitive trade pricing with official VAT invoices.</p>
          <p>Our commercial desk eliminates stock bottlenecks with three flexible policies:</p>
          <ul>
            <li><strong>Zero MOQ Requirement:</strong> Shopkeepers can purchase single cartons, custom assortments, or individual restock units without restrictive capital minimums.</li>
            <li><strong>Flexible Packaging Options:</strong> Orders can be assembled in mixed cartons, custom packs, or original manufacturer master cases based on shop shelf needs.</li>
            <li><strong>Logistics Dispatch:</strong> Regular transport consignments connect our Itahari stockroom to Dharan, Biratnagar, Damak, Inaruwa, Birtamod, and rural municipalities throughout Koshi Province.</li>
          </ul>
          <p>For detailed order preparation and invoice requirements, review our guide on <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a>.</p>`
        },
        {
          h2: "How Does Baba Cosmetics Serve Individual Retail Beauty Shoppers?",
          content: `<p>Individual retail shoppers visiting our Janta Galli showroom can examine authentic makeup, skincare, and haircare products in person while receiving transparent pricing and guidance from knowledgeable staff.</p>
          <p>All in-store personal purchases benefit from:</p>
          <ul>
            <li><strong>Flat 5% Off Any MRP:</strong> Direct savings on every manufacturer retail price across all beauty brands.</li>
            <li><strong>Cash and QR Payments:</strong> Convenient checkout via cash or instant Fonepay QR code scanning.</li>
            <li><strong>Counter Inspection Protocol:</strong> Strict counter verification ensures customers inspect packaging, seal integrity, and product details before completing their purchase, adhering to our clear <a href="/customer-support/returns-exchanges/">Returns, Exchanges & Damaged Products Policy</a>.</li>
          </ul>
          <p>For visiting details and store directions, see <a href="/retail-cosmetics/how-to-buy/">How to Buy Cosmetics at Our Itahari Store</a>.</p>`
        },
        {
          h2: "What Specialized Supply Packages Are Available for Beauty Salons and Parlors?",
          content: `<p>Beauty salons, bridal studios, and cosmetology training institutes in Eastern Nepal require commercial-volume skincare, hair treatments, and disposable hygiene tools that maintain consistent client outcomes.</p>
          <p>We supply registered beauty parlors with professional bleaching creams, facial kit assortments, keratin hair serums, and disposable applicators at specialized salon trade rates. Stylists can also schedule a personalized inventory discussion through our <a href="/consultation/">Book a Consultation with Baba Cosmetics</a> service.</p>`
        }
      ],
      faqs: [
        {
          q: "Can new retail shop owners open a wholesale trade account with credit terms?",
          a: "Credit payment terms are not available for newcomers. New retail buyers can transact via cash, Fonepay QR, or advance bank transfer."
        },
        {
          q: "Do salons receive wholesale pricing on professional facial kits and hair products?",
          a: "Yes, verified beauty parlors and bridal salons receive trade pricing on bulk facial kits, shampoos, and beauty tools with no minimum carton requirements."
        }
      ]
    }
  ];
};
