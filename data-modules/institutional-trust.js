/**
 * Institutional & Trust Cluster Routes (7 Pages)
 * Algorithmic Authorship & Semantic Internal Linking Refinement
 */

module.exports = function getInstitutionalTrustRoutes() {
  return [
    // 1. About Us Page
    {
      path: "/about/",
      title: "About Baba Cosmetics | Best Cosmetic Seller in Itahari",
      metaDescription: "Learn about Baba Cosmetics in Janta Galli, Itahari-6. Discover our story, 100% genuine product guarantee, store location, and wholesale/retail beauty services.",
      h1: "About Baba Cosmetics: Best Cosmetic Seller in Itahari",
      snippet: "Baba Cosmetics is Itahari's premier wholesale and retail cosmetics establishment, located at Janta Galli, Itahari-6, Sunsari. Operating under PAN 600881922, we connect national beauty importers with local retailers, beauty salons, and individual shoppers, supplying 100% genuine skincare, makeup, and haircare formulations across Eastern Nepal.",
      category: "Institutional",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us", url: "/about/" }],
      sections: [
        {
          h2: "What Is the Heritage and Story of Baba Cosmetics in Itahari?",
          content: `<p>Baba Cosmetics was established in Janta Galli, Itahari-6, Sunsari (PAN: 600881922) to solve a critical problem in the Eastern Nepal consumer market: the proliferation of grey-market counterfeits and unreliable trade pricing.</p>
          <p>Over more than a decade of continuous operation, we have grown into the central cosmetics supply anchor for Sunsari, Morang, and Jhapa districts. By maintaining direct relationships with verified national brand concessionaires, we ensure that local retail shops, beauty parlors, and everyday families always receive authentic, fresh-batch cosmetics with official tax invoicing.</p>`
        },
        {
          h2: "How Does Baba Cosmetics Guarantee 100% Product Authenticity?",
          content: `<p>Baba Cosmetics enforces a rigorous four-point authenticity verification protocol on every incoming consignment before products are accepted into our inventory:</p>
          <ul>
            <li><strong>Direct Authorized Concessionaires:</strong> We source inventory exclusively from verified brand distributors in Nepal, refusing unregulated border shipments.</li>
            <li><strong>Batch Code and PAO Inspection:</strong> Every master carton and retail unit is physically inspected for matching lot numbers, intact safety seals, and valid expiration dates.</li>
            <li><strong>Climate-Regulated Storage:</strong> Sensitive cosmetics, liquid foundations, and sunscreens are stored in cool, sun-protected facilities to prevent heat-induced chemical breakdown.</li>
            <li><strong>Official Statutory Invoicing:</strong> Every wholesale transaction receives a formal tax invoice backed by our corporate PAN (600881922).</li>
          </ul>
          <p>For more details on batch codes and packaging verification, review our integrated <a href="/product-authenticity/">Genuine Products: How We Check Product Authenticity</a> guidelines.</p>`
        },
        {
          h2: "Where Is the Store Located and How Can Customers Visit in Itahari?",
          content: `<div id="store-location">
            <p>Baba Cosmetics is situated in the primary commercial corridor of Itahari:</p>
            <div class="table-card">
              <p><strong>Physical Address:</strong> Janta Galli, Itahari-6, Sunsari District, Koshi Province, Nepal.</p>
              <p><strong>Landmark Directions:</strong> Exactly 180 meters East of central Itahari Chowk (Main Crossroads). Travel 150 meters east along Mahendra Highway, turn right into Janta Galli, and proceed 30 meters down the street on the right-hand side.</p>
              <p><strong>Road Access:</strong> Direct paved roadway access suitable for two-wheelers, passenger cars, and commercial transport vans.</p>
              <p><strong>Landline Telephone:</strong> <a href="tel:+97725583775">025-583775</a></p>
              <p><strong>Mobile / WhatsApp:</strong> <a href="https://wa.me/9779805303415" target="_blank">+977-9805303415</a></p>
              <p><strong>Store Operating Hours:</strong> Everyday 8:00 AM – 6:00 PM (Closed Thursdays / Thursday Holiday)</p>
              <p><strong>Customer Support:</strong> Everyday 7:00 AM – 8:00 PM</p>
            </div>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="https://maps.google.com/?q=Janta+Galli+Itahari+Sunsari+Nepal" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open in Google Maps &rarr;</a>
              <a href="/contact/" class="btn btn-outline btn-sm">View Contact Details &rarr;</a>
            </div>
          </div>`
        },
        {
          h2: "Who Does Baba Cosmetics Serve Across Koshi Province?",
          content: `<p>Baba Cosmetics serves three distinct customer communities with tailored commercial terms:</p>
          <ul>
            <li><strong>Retail Shop Owners:</strong> Sourcing regular mixed cartons, trending beauty SKUs, and volume inventory through our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> desk with zero MOQ.</li>
            <li><strong>Beauty Salons & Parlors:</strong> Procuring professional hair treatments, facial kits, and cosmetic accessories in commercial quantities.</li>
            <li><strong>Personal Shoppers:</strong> Visiting our welcoming <a href="/retail-cosmetics/">Cosmetics Retail Shop in Itahari, Nepal</a> showroom in Janta Galli to select genuine branded daily skincare and makeup with an automatic flat 5% discount on MRP.</li>
          </ul>`
        }
      ],
      faqs: [
        {
          q: "Is Baba Cosmetics a registered business entity in Nepal?",
          a: "Yes, Baba Cosmetics operates under registered PAN 600881922 with the Inland Revenue Department of Nepal, issuing formal tax invoices for all wholesale transactions."
        },
        {
          q: "What products are available at the Baba Cosmetics store?",
          a: "Our inventory covers seven primary categories: makeup, skincare, haircare, fragrances, body care, beauty tools, and vanity accessories."
        },
        {
          q: "Can customers test cosmetic items before buying at the retail store?",
          a: "No testers are provided without purchase. Customers are invited to inspect outer packaging, seals, and batch stamps at our counter before completing payment."
        }
      ]
    },

    // 2. Contact Us Page
    {
      path: "/contact/",
      title: "Contact Baba Cosmetics | Itahari Store & Wholesale Desk",
      metaDescription: "Contact Baba Cosmetics in Janta Galli, Itahari-6. Direct landline (025-583775), mobile/WhatsApp (+977-9805303415), and store address.",
      h1: "Contact Baba Cosmetics in Itahari",
      snippet: "Connect directly with Baba Cosmetics in Janta Galli, Itahari-6, Sunsari. Whether you need immediate wholesale quotations, in-store stock availability checks, or driving directions, our trade desk is accessible via telephone, WhatsApp, or in-person counter visits.",
      category: "Institutional",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contact/" }],
      sections: [
        {
          h2: "What Are the Official Contact Channels for Baba Cosmetics in Itahari?",
          content: `<p>Baba Cosmetics maintains four direct communication channels for wholesale inquiries, retail customer support, and order logistics:</p>
          <div class="table-card">
            <ul>
              <li><strong>Store Physical Address:</strong> Janta Galli, Itahari-6, Sunsari District, Koshi Province, Nepal (180 meters East of central Itahari Chowk)</li>
              <li><strong>Landline Telephone:</strong> <a href="tel:+97725583775">025-583775</a></li>
              <li><strong>Mobile & WhatsApp Support:</strong> <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer">+977-9805303415</a></li>
              <li><strong>Official Commercial Email:</strong> supply@babacosmetics.com.np</li>
              <li><strong>Statutory Registration:</strong> PAN 600881922</li>
              <li><strong>Store Opening Hours:</strong> Everyday 8:00 AM – 6:00 PM (Closed Thursdays / Thursday Holiday)</li>
              <li><strong>Customer Support Hours:</strong> Everyday 7:00 AM – 8:00 PM</li>
            </ul>
            <div style="margin-top: 1.25rem;">
              <a href="https://wa.me/9779805303415?text=Hello%20Baba%20Cosmetics%2C%20I%20would%20like%20to%20get%20in%20touch." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.71 14.81 12.14 15.86C12.72 16.11 13.17 16.26 13.52 16.37C14.11 16.56 14.64 16.53 15.07 16.47C15.54 16.4 16.52 15.88 16.73 15.3C16.93 14.71 16.93 14.21 16.87 14.11C16.81 14.01 16.65 13.95 16.4 13.82C16.16 13.7 14.97 13.11 14.75 13.03C14.53 12.95 14.36 12.91 14.2 13.15C14.04 13.4 13.57 13.95 13.43 14.11C13.29 14.28 13.14 14.3 12.9 14.17C12.66 14.05 11.88 13.8 10.95 12.97C10.23 12.33 9.74 11.53 9.6 11.29C9.46 11.04 9.58 10.91 9.7 10.79C9.81 10.68 9.95 10.49 10.07 10.35C10.19 10.21 10.24 10.1 10.32 9.94C10.4 9.78 10.36 9.64 10.3 9.52C10.24 9.4 9.77 8.24 9.57 7.77C9.38 7.31 9.18 7.37 9.04 7.36C8.9 7.36 8.74 7.33 8.53 7.33Z"/></svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>`
        },
        {
          h2: "How Should Retailers and Customers Prepare Their Inquiries for Fastest Response?",
          content: `<p>For the fastest response, wholesale buyers should message our WhatsApp line (+977-9805303415) with their shop name, delivery town, and itemized product list as outlined in our guide on <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a>.</p>
          <p>Personal retail shoppers visiting our showroom can review visitor guidelines and payment methods in advance by reading <a href="/retail-cosmetics/how-to-buy/">How to Buy Cosmetics at Our Itahari Store</a>.</p>`
        }
      ],
      faqs: []
    },

    // 3. FAQs Page
    {
      path: "/faqs/",
      title: "Frequently Asked Questions | Baba Cosmetics Itahari",
      metaDescription: "Find clear answers to common questions about wholesale orders, retail shopping, opening hours, and location at Baba Cosmetics Itahari.",
      h1: "Frequently Asked Questions",
      snippet: "Find verified answers to common questions regarding wholesale ordering, retail discounts, product authenticity, store opening hours, and delivery terms at Baba Cosmetics in Janta Galli, Itahari-6, Sunsari.",
      category: "Institutional",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "FAQs", url: "/faqs/" }],
      sections: [
        {
          h2: "Frequently Asked Questions About Shopping and Wholesale Supply",
          content: `<p>Review clear answers to frequently asked questions about visiting our store, placing wholesale requisitions, and our customer policies:</p>`
        }
      ],
      faqs: [
        {
          q: "What are your store hours and weekly holidays in Itahari?",
          a: "Baba Cosmetics is open everyday from 8:00 AM to 6:00 PM, excluding Thursdays. Thursday is our regular weekly holiday. Phone and WhatsApp support is available everyday from 7:00 AM to 8:00 PM."
        },
        {
          q: "Where is Baba Cosmetics located in Itahari?",
          a: "We are located in Janta Galli, Itahari-6, Sunsari, approximately 180 meters east of central Itahari Chowk along Mahendra Highway."
        },
        {
          q: "What discount is offered on retail purchases?",
          a: "All individual retail customers receive a flat 5% discount below printed MRP across all genuine beauty products at our Janta Galli counter."
        },
        {
          q: "Is there a minimum order requirement for wholesale buyers?",
          a: "No, we enforce zero minimum order requirements. Retailers can purchase loose units, mixed cartons, or full master cases."
        },
        {
          q: "What payment methods are accepted for wholesale and retail?",
          a: "Wholesale transactions accept Cash and Bank Transfer (credit not available for newcomers). Retail counter transactions accept Cash and Fonepay QR code payments."
        },
        {
          q: "What is your policy on returns and damaged goods?",
          a: "Retail sales operate under a strict counter policy: once sold, goods will neither be returned nor exchanged. Wholesale transit damage must be reported within 24 hours of receipt with photo evidence to qualify for damage refund."
        }
      ]
    },

    // 4. Location Page (Integrated into /about/)
    {
      path: "/location/",
      title: "Store Location & Directions | Baba Cosmetics Itahari",
      metaDescription: "Find directions to Baba Cosmetics in Janta Galli, Itahari-6, Sunsari, Nepal. 180 meters east of Itahari Chowk. Now integrated into our About Us page.",
      h1: "Find Our Cosmetics Store in Itahari: Location & Directions",
      snippet: "Baba Cosmetics is located at Janta Galli, Itahari-6, Sunsari, 180 meters east of central Itahari Chowk. Store location and interactive map directions are integrated into our main About Us page.",
      category: "Institutional",
      parentService: "/about/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us", url: "/about/" }, { name: "Store Location", url: "/about/#store-location" }],
      sections: [
        {
          h2: "Store Location Transferred to About Us",
          content: `<div style="background: #FFFBEB; border: 1px solid #FCD34D; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.75rem; font-weight: 600; color: #92400E;">Notice: Our physical store address, landmark directions, and map integration have been permanently consolidated into our About Us page.</p>
            <a href="/about/#store-location" class="btn btn-primary btn-sm">View Store Location on About Us &rarr;</a>
          </div>
          <p><strong>Physical Address:</strong> Janta Galli, Itahari-6, Sunsari, Koshi Province, Nepal.</p>
          <p><strong>Landmark Directions:</strong> 180 meters East of central Itahari Chowk along Mahendra Highway, 30 meters right into Janta Galli.</p>
          <p><strong>Store Hours:</strong> Everyday 8:00 AM – 6:00 PM (Closed Thursdays / Thursday Holiday).</p>`
        }
      ],
      faqs: []
    },

    // 5. Consultation Page
    {
      path: "/consultation/",
      title: "Wholesale & Salon Consultation | Baba Cosmetics Itahari",
      metaDescription: "Book a consultation with Baba Cosmetics in Itahari for shop inventory planning, salon supply packages, or wholesale orders.",
      h1: "Book a Consultation with Baba Cosmetics",
      snippet: "Plan your retail cosmetics inventory or beauty parlor supply package with professional guidance from the Baba Cosmetics trade desk in Janta Galli, Itahari-6, Sunsari.",
      category: "Institutional",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Consultation", url: "/consultation/" }],
      sections: [
        {
          h2: "How Can a Consultation with Baba Cosmetics Help Your Business?",
          content: `<p>A trade consultation with Baba Cosmetics helps retail shop owners, pharmacy managers, and salon operators optimize their cosmetic stock allocation, select high-demand regional SKUs, and prevent dead-stock accumulation.</p>
          <p>Consultations are available in person at our Janta Galli showroom during store opening hours (Everyday 8:00 AM – 6:00 PM, closed Thursdays) or by calling our Landline (<a href="tel:+97725583775">025-583775</a>) and WhatsApp (<a href="https://wa.me/9779805303415" target="_blank">+977-9805303415</a>).</p>
          <p>Review our commercial ordering workflow beforehand by reading <a href="/wholesale-cosmetics/how-to-order/">How to Order Wholesale Cosmetics</a>.</p>`
        }
      ],
      faqs: []
    },

    // 6. Product Authenticity Page (Integrated into /about/)
    {
      path: "/product-authenticity/",
      title: "Product Authenticity Guarantee | Baba Cosmetics Itahari",
      metaDescription: "Learn how Baba Cosmetics ensures every product sold at our Janta Galli, Itahari shop is 100% original and safe to use. Now integrated into our About Us page.",
      h1: "Genuine Products: How We Check Product Authenticity",
      snippet: "Baba Cosmetics guarantees that all cosmetics sold at our Janta Galli store are 100% original. We source through authorized brand channels, inspect lot numbers, and preserve formulation quality under temperature-controlled storage. This guide is permanently incorporated into our About Us page.",
      category: "Trust",
      parentService: "/about/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us", url: "/about/" }, { name: "Product Authenticity", url: "/about/" }],
      sections: [
        {
          h2: "Authenticity Commitment Transferred to About Us",
          content: `<div style="background: #FFFBEB; border: 1px solid #FCD34D; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.75rem; font-weight: 600; color: #92400E;">Notice: Our comprehensive product authenticity protocols and batch-inspection standards have been permanently integrated into our main About Us page.</p>
            <a href="/about/" class="btn btn-primary btn-sm">Read Product Authenticity on About Us &rarr;</a>
          </div>
          <p>Every product sold at Baba Cosmetics is sourced through authorized brand channels in Nepal, inspected for intact manufacturer seals, and accompanied by legitimate tax invoices (PAN: 600881922).</p>`
        }
      ],
      faqs: [
        {
          q: "How does Baba Cosmetics prevent counterfeit cosmetics from entering its stock?",
          a: "We procure solely from authorized national brand distributors and inspect every carton for intact factory seals, matching lot numbers, and legitimate expiration dates."
        }
      ]
    },

    // 7. Returns and Exchanges Policy Page
    {
      path: "/customer-support/returns-exchanges/",
      title: "Returns and Exchanges Policy | Baba Cosmetics Itahari",
      metaDescription: "Clear policy for wholesale orders and retail customers at Baba Cosmetics in Itahari, Nepal. Counter inspection and 24-hour transit damage reporting.",
      h1: "Returns, Exchanges & Damaged Products Policy",
      snippet: "Baba Cosmetics maintains clear, transparent policies governing both in-store retail purchases and regional wholesale freight shipments. Review our retail counter inspection standards and 24-hour wholesale transit damage reporting terms below.",
      category: "Policy",
      parentService: "/wholesale-cosmetics/",
      breadcrumbs: [{ name: "Home", url: "/" }, { name: "Returns & Exchanges", url: "/customer-support/returns-exchanges/" }],
      sections: [
        {
          h2: "What Is the Retail Store Return and Exchange Policy?",
          content: `<p>Baba Cosmetics enforces a strict counter policy: <strong>once sold, goods will neither be returned nor exchanged</strong>.</p>
          <p>For health, personal hygiene, and product authenticity reasons, cosmetic formulations, lipsticks, and skincare items cannot be accepted for return once they leave our controlled store environment. We invite and encourage all retail shoppers to conduct complete product inquiries and physical packaging inspections at our counter prior to checkout.</p>`
        },
        {
          h2: "What Is the Wholesale Transit Damage and Refund Policy?",
          content: `<p>Wholesale clients receiving regional transport shipments across Koshi Province must inspect all cartons upon carrier arrival:</p>
          <ul>
            <li><strong>24-Hour Reporting Window:</strong> Any shipping damages, container leaks, or carton discrepancies must be photographed and reported to our trade desk within <strong>24 hours of receipt</strong> via WhatsApp (<a href="https://wa.me/9779805303415" target="_blank">+977-9805303415</a>).</li>
            <li><strong>Refund Policy:</strong> Refunds or replacement items are available <strong>only if goods are found to be damaged during transport</strong> and verified by our receiving team.</li>
          </ul>
          <p>For details on carrier coordination and freight options, consult our <a href="/wholesale-cosmetics/delivery-pickup/">Cosmetics Wholesale Delivery & Store Pickup</a> guide.</p>`
        }
      ],
      faqs: [
        {
          q: "Can retail customers return an unopened item if they change their mind?",
          a: "No. Under our strict counter policy, once sold, goods will neither be returned nor exchanged. All retail sales are finalized at the counter."
        },
        {
          q: "What evidence is required to claim a refund for damaged wholesale shipments?",
          a: "Consignees must provide clear photographs or video of the outer damaged carton, shipping bill, and damaged internal product bottles within 24 hours of arrival."
        }
      ]
    }
  ];
};
