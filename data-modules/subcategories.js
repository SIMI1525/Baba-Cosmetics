/**
 * Subcategories Cluster Routes (All 20 Dedicated Subcategory Pages)
 * Algorithmic Authorship & Semantic Internal Linking Refinement
 */

module.exports = function getSubcategoriesRoutes() {
  const subcatDefinitions = [
    // 1. Face Makeup
    {
      path: "/cosmetics/makeup/face/",
      parent: "/cosmetics/makeup/",
      name: "Face Makeup Products",
      h1: "Face Makeup Products in Itahari, Nepal",
      metaDesc: "Find authentic face makeup products at Baba Cosmetics in Janta Galli, Itahari-6. Foundations, powders, and concealers with 5% off MRP and wholesale cartons.",
      snippet: "Face makeup products provide skin tone evening, blemish concealing, and shine control for daily beauty and professional bridal makeup. Baba Cosmetics distributes genuine face cosmetics—including liquid foundations, compact powders, setting powders, and concealers—to retail shoppers in Janta Galli (with a flat 5% discount on MRP) and wholesale store owners across Koshi Province with no minimum order requirements.",
      focus: "foundations, powders, primers, and concealers",
      typesDesc: "Baba Cosmetics stocks four primary face makeup formulations: matte liquid foundations for oily skin, dewy hydrating foundations for dry skin, compact pressed powders, and high-coverage liquid concealers matched to South Asian skin undertones.",
      wholesaleRetailDesc: "Wholesale buyers can order face makeup in custom mixed shade cartons with zero MOQ restrictions, while individual retail shoppers receive a flat 5% discount on MRP at our Janta Galli counter, with Cash and QR code payment accepted.",
      guideBridge: {
        h2: "How Should Face Makeup Products Be Applied for Long-Lasting Wear?",
        passage: `Long-lasting face makeup application requires gentle skin cleansing, hydrating primer preparation, light foundation blending, and setting powder fixation. For step-by-step beauty tutorials and daily routine recommendations, review our comprehensive <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a> or pair your base cosmetics with verified applicators from our <a href="/cosmetics/beauty-tools-accessories/brushes-sponges/">Makeup Brushes & Sponges in Itahari, Nepal</a> collection.`
      },
      faqs: [
        { q: "How can I choose the correct foundation shade for my skin tone?", a: "We recommend inspecting foundation shades in natural daylight at our Janta Galli counter and matching the swatch to your jawline undertone before purchasing." },
        { q: "Can retail shops buy mixed foundation shades in one order?", a: "Yes, Baba Cosmetics supports mixed shade cartons with zero minimum order quantity for cosmetic shops and salons throughout Koshi Province." }
      ]
    },

    // 2. Eye Makeup
    {
      path: "/cosmetics/makeup/eyes/",
      parent: "/cosmetics/makeup/",
      name: "Eye Makeup Products",
      h1: "Eye Makeup Products in Itahari, Nepal",
      metaDesc: "Shop authentic eye makeup at Baba Cosmetics in Janta Galli, Itahari. Smudge-proof eyeliners, kajal, mascaras, and eyeshadows with 5% off MRP and wholesale trade.",
      snippet: "Eye makeup products accentuate eye shape, define lash lines, and add vibrant color for everyday elegance and party beauty. Baba Cosmetics distributes authentic eyeliners, volumizing mascaras, pigmented kajal pencils, and multi-color eyeshadow palettes in Janta Galli, Itahari with wholesale trade terms (no MOQ) and a flat 5% retail discount on MRP.",
      focus: "mascaras, eyeliners, kajal, and eyeshadow palettes",
      typesDesc: "Our eye cosmetic selection features waterproof liquid eyeliners, traditional herbal smudge-resistant kajal, curling waterproof mascaras, and blendable eyeshadow palettes tested for ocular safety.",
      wholesaleRetailDesc: "Retailers and beauty parlors across Koshi Province can purchase assorted eye makeup cartons with no minimum quantity, while personal shoppers receive an instant 5% discount on MRP at our Itahari showroom.",
      guideBridge: {
        h2: "Which Beauty Tools Help Create Precise Eye Makeup Lines?",
        passage: `Creating sharp eyeliner wings and defined eyelashes requires high-precision grooming instruments alongside quality cosmetics. Explore calibrated eyelash curlers and grooming tweezers in our dedicated <a href="/cosmetics/beauty-tools-accessories/eye-tools/">Eyelash & Brow Tools in Itahari, Nepal</a> section, or review application techniques in our <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.`
      },
      faqs: [
        { q: "Are the eyeliners and kajal safe for sensitive contact lens wearers?", a: "Yes, we stock ophthalmologist-tested, smudge-proof formulas designed to prevent eye irritation." },
        { q: "Can salons purchase bulk mascara cartons?", a: "Yes, salons and cosmetics shops can purchase wholesale mascara packs with official VAT invoicing." }
      ]
    },

    // 3. Lip Makeup
    {
      path: "/cosmetics/makeup/lips/",
      parent: "/cosmetics/makeup/",
      name: "Lip Makeup Products",
      h1: "Lip Makeup Products in Itahari, Nepal",
      metaDesc: "Discover lipsticks, lip glosses, and lip balms at Baba Cosmetics in Itahari. 100% genuine formulations with 5% off MRP retail and wholesale cartons.",
      snippet: "Lip makeup products provide vibrant color, deep hydration, and protective nourishment for daily wear and formal celebrations. Baba Cosmetics stocks authentic matte lipsticks, liquid lip tints, moisturizing lip balms, and lip defining pencils at Janta Galli, Itahari-6 with no minimum wholesale orders and a flat 5% discount on MRP for retail shoppers.",
      focus: "lipsticks, lip balms, and lip liners",
      typesDesc: "We distribute transfer-proof liquid matte lipsticks, creamy moisturizing satin lip colors, tinted hydration balms with SPF, and precision wooden lip liners in trending nude, pink, and bold red shades.",
      wholesaleRetailDesc: "Cosmetic retailers can assemble custom mixed lip color cartons to suit local client preferences, while retail customers enjoy 5% off MRP at checkout with Cash or instant QR code scanning.",
      guideBridge: {
        h2: "How to Coordinate Lip Shades with Face Makeup Bases?",
        passage: `Pairing complementary lip colors with balanced facial foundations creates a harmonious, polished appearance for both daytime work and evening occasions. To select a seamless complexion base, explore our curated range of <a href="/cosmetics/makeup/face/">Face Makeup Products in Itahari, Nepal</a> or review shade pairing advice in our <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.`
      },
      faqs: [
        { q: "Do the matte lipsticks cause dry or chapped lips?", a: "We stock modern matte formulas enriched with vitamin E and jojoba oil that maintain comfortable moisture while delivering long wear." },
        { q: "Can I inspect the lipstick packaging before buying?", a: "Yes, customers can inspect factory batch stamps and sealed packaging at our retail counter before completing purchase." }
      ]
    },

    // 4. Makeup Removers
    {
      path: "/cosmetics/makeup/removers/",
      parent: "/cosmetics/makeup/",
      name: "Makeup Removers",
      h1: "Makeup Removers in Itahari, Nepal",
      metaDesc: "Buy gentle micellar waters and makeup removers at Baba Cosmetics in Itahari. Effective cleansing without skin irritation, 5% off MRP, wholesale available.",
      snippet: "Makeup removers dissolve waterproof cosmetics, sunscreen residues, and environmental pollutants without compromising the skin's lipid barrier. Baba Cosmetics supplies genuine micellar waters, bi-phase eye removers, and cleansing oils at Janta Galli, Itahari-6 with wholesale pricing for salons (no MOQ) and a flat 5% retail discount on MRP.",
      focus: "micellar waters, bi-phase removers, and cleansing balms",
      typesDesc: "Our makeup removal inventory includes oil-free micellar waters for daily light makeup, bi-phase oil-in-water removers for waterproof mascara, and gentle balm-to-oil cleansers for heavy foundation.",
      wholesaleRetailDesc: "Salons and beauty shops across Koshi Province can order makeup removers in assorted case sizes with VAT billing, while personal shoppers receive 5% off MRP at our Itahari store counter.",
      guideBridge: {
        h2: "How Does Makeup Removal Integrate into Evening Skincare Cleansing?",
        passage: `Thorough double-cleansing begins with dissolving stubborn pigments using a makeup remover, followed immediately by a water-based face cleanser to purify pores. Discover gentle second-step face washes in our <a href="/cosmetics/skincare/cleansers/">Face Cleansers in Itahari, Nepal</a> section, or follow complete double-cleansing steps in our <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.`
      },
      faqs: [
        { q: "Is micellar water safe for sensitive eye areas?", a: "Yes, our micellar formulations are ophthalmologist-tested and gentle on delicate eyelid skin." },
        { q: "Do salons use specialized bulk makeup removers?", a: "Yes, we supply salon-sized micellar water bottles that provide economical, hygienic makeup removal for bridal studios." }
      ]
    },

    // 5. Face Cleansers
    {
      path: "/cosmetics/skincare/cleansers/",
      parent: "/cosmetics/skincare/",
      name: "Face Cleansers",
      h1: "Face Cleansers in Itahari, Nepal",
      metaDesc: "Shop authentic face cleansers and face washes at Baba Cosmetics in Janta Galli, Itahari. Gentle, oil-control, and hydrating formulas with 5% off MRP.",
      snippet: "Face cleansers eliminate excess sebum, atmospheric dust, and cellular impurities to prepare skin for restorative skincare treatments. Baba Cosmetics supplies authentic foaming washes, salicylic acid gel cleansers, and hydrating milky cleansers at Janta Galli, Itahari-6 with wholesale trade supply across Koshi Province and 5% off MRP for retail shoppers.",
      focus: "foaming, gel, and cream face cleansers",
      typesDesc: "We stock gentle foaming cleansers for normal skin, salicylic acid clarifying gel washes for acne-prone skin, and ceramide-infused non-foaming cream cleansers for sensitive dry barriers.",
      wholesaleRetailDesc: "Retail pharmacies and cosmetics stores can order daily face washes in mixed brand cartons without minimum order hurdles, while individual shoppers receive a flat 5% discount on MRP.",
      guideBridge: {
        h2: "What Is the Next Skincare Step After Cleansing Your Face?",
        passage: `After cleansing away impurities, applying a balancing toner restores skin pH and prepares pores to absorb active serums effectively. Explore gentle hydrating toners in our <a href="/cosmetics/skincare/toners/">Face Toners in Itahari, Nepal</a> collection, or follow full morning and evening regimens in our <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.`
      },
      faqs: [
        { q: "Which cleanser is best for humid Tarai summer weather?", a: "We recommend lightweight gel cleansers containing tea tree or low-percentage salicylic acid to control excess oiliness without stripping." },
        { q: "Can retail shops order mixed face wash cartons?", a: "Yes, shops can mix gel, cream, and foaming facial cleansers within a single wholesale carton." }
      ]
    },

    // 6. Face Toners
    {
      path: "/cosmetics/skincare/toners/",
      parent: "/cosmetics/skincare/",
      name: "Face Toners",
      h1: "Face Toners in Itahari, Nepal",
      metaDesc: "Buy hydrating and pore-clarifying face toners at Baba Cosmetics in Janta Galli, Itahari. Alcohol-free formulas with 5% off MRP and wholesale trade pricing.",
      snippet: "Face toners balance post-cleansing skin pH, refine pore appearance, and infuse immediate hydration before targeted serum application. Baba Cosmetics stocks authentic alcohol-free hydrating toners, soothing rose waters, and clarifying BHA toners at Janta Galli, Itahari-6 with no MOQ wholesale terms and a flat 5% retail discount on MRP.",
      focus: "hydrating, soothing, and clarifying toners",
      typesDesc: "Our toner selection includes alcohol-free hyaluronic acid essences for deep hydration, centella asiatica soothing waters for irritated skin, and gentle exfoliating glycolic toners.",
      wholesaleRetailDesc: "Pharmacies and beauty shops can order assorted toner cartons with official VAT invoices, while personal shoppers enjoy a flat 5% discount on MRP at our retail showroom.",
      guideBridge: {
        h2: "How Do Toners Maximize the Absorption of Facial Serums?",
        passage: `Hydrated skin absorbs active cosmetic compounds up to ten times more effectively than dry skin barriers, making toners the ideal primer for concentrated treatments. Select your targeted treatment from our <a href="/cosmetics/skincare/serums/">Face Serums in Itahari, Nepal</a> section, or learn proper product sequencing in our <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.`
      },
      faqs: [
        { q: "Are the toners alcohol-free?", a: "Yes, we prioritize alcohol-free hydrating and soothing toners that nourish skin without causing dryness or stinging." },
        { q: "Can I apply toner using my hands instead of cotton pads?", a: "Yes, patting hydrating toner directly into clean facial skin with your palms minimizes product waste." }
      ]
    },

    // 7. Face Serums
    {
      path: "/cosmetics/skincare/serums/",
      parent: "/cosmetics/skincare/",
      name: "Face Serums",
      h1: "Face Serums in Itahari, Nepal",
      metaDesc: "Discover concentrated face serums at Baba Cosmetics in Itahari. Niacinamide, Vitamin C, and Hyaluronic Acid with 5% off MRP and wholesale supply.",
      snippet: "Face serums deliver concentrated active cosmetic molecules to address targeted skin concerns such as dark spots, dehydration, and uneven texture. Baba Cosmetics supplies verified authentic serums—including Niacinamide, Vitamin C, and Hyaluronic Acid—at Janta Galli, Itahari-6 with zero MOQ wholesale supply and 5% off MRP for retail shoppers.",
      focus: "hydrating, brightening, and barrier repair active serums",
      typesDesc: "We stock 10% Niacinamide serums for oil control and pores, stabilized Vitamin C serums for hyperpigmentation, multi-molecular Hyaluronic Acid drops for hydration, and peptide serums for skin firmness.",
      wholesaleRetailDesc: "Cosmetic shops and skincare clinics can purchase assorted serum cartons with temperature-controlled batch assurance, while retail shoppers receive 5% off MRP at our counter.",
      guideBridge: {
        h2: "How Should Facial Serums Be Sealed with a Moisturizer?",
        passage: `Active water-soluble serums evaporate quickly if not sealed with an emollient moisturizer that locks moisture into the stratum corneum. Discover barrier-protecting creams in our <a href="/cosmetics/skincare/moisturisers/">Face Moisturisers in Itahari, Nepal</a> section, or read about understanding active cosmetic ingredients in our <a href="/cosmetics-guide/understanding-products/">Understanding Beauty Products, Categories & Labels</a>.`
      },
      faqs: [
        { q: "How should Vitamin C serum be stored to prevent oxidation?", a: "Store Vitamin C in a cool, dark cabinet away from direct sunlight, and ensure the dropper cap is tightly sealed after each use." },
        { q: "Can I use Niacinamide serum alongside Hyaluronic Acid?", a: "Yes, Niacinamide and Hyaluronic Acid complement each other well and can be layered safely in both morning and evening routines." }
      ]
    },

    // 8. Face Moisturisers
    {
      path: "/cosmetics/skincare/moisturisers/",
      parent: "/cosmetics/skincare/",
      name: "Face Moisturisers",
      h1: "Face Moisturisers in Itahari, Nepal",
      metaDesc: "Buy face moisturisers and barrier creams at Baba Cosmetics in Janta Galli, Itahari. Lightweight gel and rich ceramide creams with 5% off MRP and wholesale cartons.",
      snippet: "Face moisturizers replenish natural skin lipids, prevent transepidermal water loss, and fortify the protective cutaneous barrier against harsh weather conditions. Baba Cosmetics supplies authentic gel creams, ceramide creams, and soothing daily lotions at Janta Galli, Itahari-6 with wholesale supply across Koshi Province and 5% off MRP for retail customers.",
      focus: "gel creams, barrier repair moisturizers, and night creams",
      typesDesc: "Our moisturizers include oil-free water gel creams for hot humid seasons, rich ceramide and shea barrier repair creams for dry weather, and gentle non-comedogenic lotions for sensitive skin.",
      wholesaleRetailDesc: "Retail stores and pharmacies can order daily moisturizers in mixed cases with official tax documentation, while retail customers receive an instant 5% discount below printed MRP.",
      guideBridge: {
        h2: "Why Must Daily Daytime Moisturizer Be Followed by Sunscreen?",
        passage: `While daytime moisturizers restore hydration, they do not shield skin cells against DNA damage and hyperpigmentation caused by solar ultraviolet rays. Complete your daily daytime defense by exploring broad-spectrum sun lotions in our <a href="/cosmetics/skincare/sunscreen/">Sunscreens in Itahari, Nepal</a> collection, or review morning routine order in our <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.`
      },
      faqs: [
        { q: "Will a gel moisturizer clog pores on oily or acne-prone skin?", a: "No, our water-based gel moisturizers are formulated to be non-comedogenic and absorb completely without leaving a greasy film." },
        { q: "Can beauty salons buy professional facial moisturizing creams in bulk?", a: "Yes, we stock professional massage creams and barrier lotions for beauty salons at trade wholesale rates." }
      ]
    },

    // 9. Sunscreens
    {
      path: "/cosmetics/skincare/sunscreen/",
      parent: "/cosmetics/skincare/",
      name: "Sunscreens",
      h1: "Sunscreens in Itahari, Nepal",
      metaDesc: "Shop high-protection SPF 50+ sunscreens at Baba Cosmetics in Janta Galli, Itahari. Lightweight, non-greasy sun creams with 5% off MRP and wholesale supply.",
      snippet: "Sunscreens provide essential photoprotection against harmful ultraviolet UVA and UVB radiation, preventing premature photo-aging, solar erythema, and deep pigmentation. Baba Cosmetics supplies verified broad-spectrum SPF 50+ sun gels and fluid sunscreens at Janta Galli, Itahari-6 with zero MOQ wholesale terms and a flat 5% retail discount on MRP.",
      focus: "broad-spectrum SPF 50+ PA++++ sun gels and creams",
      typesDesc: "We stock ultralight hybrid chemical sun gels, non-nano zinc oxide physical mineral sunscreens, and water-resistant matte sun lotions that leave zero white residue on skin.",
      wholesaleRetailDesc: "Pharmacies and cosmetic shops across Koshi Province can order high-demand sunscreens in mixed cartons with complete batch verification, while individual shoppers receive 5% off MRP.",
      guideBridge: {
        h2: "How Should Sunscreen Be Applied and Reapplied Throughout the Day?",
        passage: `Applying two full finger-lengths of sunscreen to facial skin twenty minutes before sun exposure ensures adequate photoprotective coverage against ultraviolet radiation. To learn how sunscreen integrates with makeup and routine steps, consult our comprehensive resource on <a href="/cosmetics-guide/skincare-routines/">Skincare Routines: Steps & General Guidance</a>.`
      },
      faqs: [
        { q: "What does the PA++++ rating on your sunscreens signify?", a: "PA++++ represents the highest level of UVA radiation protection, preventing deep cellular skin damage and premature aging." },
        { q: "Do the sunscreens leave a heavy white cast on South Asian skin tones?", a: "No, we curate lightweight fluid and gel formulas that blend seamlessly into South Asian skin without a white cast." }
      ]
    },

    // 10. Face Masks & Scrubs
    {
      path: "/cosmetics/skincare/masks-exfoliators/",
      parent: "/cosmetics/skincare/",
      name: "Face Masks & Scrubs",
      h1: "Face Masks & Scrubs in Itahari, Nepal",
      metaDesc: "Buy clarifying clay masks, sheet masks, and gentle face scrubs at Baba Cosmetics in Itahari. 5% off MRP retail and wholesale cartons across Koshi Province.",
      snippet: "Face masks and exfoliators accelerate cellular renewal, unclog pore congestion, and deliver intensive hydration to revitalize dull skin surfaces. Baba Cosmetics supplies authentic clay masks, sheet masks, and gentle exfoliating face scrubs at Janta Galli, Itahari-6 with no MOQ wholesale terms and a flat 5% retail discount on MRP.",
      focus: "sheet masks, clay masks, and exfoliating facial scrubs",
      typesDesc: "Our exfoliation and mask range includes purifying bentonite clay masks, hydrating hyaluronic acid sheet masks, and gentle walnut or apricot physical facial scrubs formulated for weekly use.",
      wholesaleRetailDesc: "Beauty parlors and retail shops can purchase assorted sheet mask boxes and scrub jars at trade rates with official tax invoices, while retail shoppers enjoy 5% off MRP at our counter.",
      guideBridge: {
        h2: "How Frequently Should Face Masks and Exfoliators Be Used?",
        passage: `Exfoliating once or twice weekly removes dead skin buildup without compromising the lipid barrier, allowing subsequent serums and creams to penetrate deeply. To discover lightweight hydration products to apply after exfoliating, browse our <a href="/cosmetics/skincare/serums/">Face Serums in Itahari, Nepal</a> or consult our <a href="/cosmetics-guide/beauty-tips-trends/">Beauty Tips & Trends: Practical Everyday Advice</a>.`
      },
      faqs: [
        { q: "Can sheet masks be reused?", a: "No, sheet masks are designed for single-use application to maintain hygiene and prevent bacterial contamination." },
        { q: "Can sensitive skin use physical facial scrubs safely?", a: "Those with sensitive skin should choose gentle chemical exfoliants or ultra-fine scrubs used no more than once per week." }
      ]
    },

    // 11. Shampoo & Conditioner
    {
      path: "/cosmetics/haircare/shampoo-conditioner/",
      parent: "/cosmetics/haircare/",
      name: "Shampoo & Conditioner",
      h1: "Shampoo & Conditioner in Itahari, Nepal",
      metaDesc: "Shop authentic shampoos and conditioners at Baba Cosmetics in Janta Galli, Itahari. Anti-dandruff, keratin, and salon-size bottles with 5% off MRP and wholesale.",
      snippet: "Shampoos and conditioners cleanse hair follicles of environmental sebum while restoring lipid moisture and smoothing the outer cuticle layer. Baba Cosmetics supplies authentic anti-dandruff, keratin-safe, and volumizing shampoo and conditioner formulations at Janta Galli, Itahari-6 with zero MOQ wholesale supply and 5% off MRP for retail shoppers.",
      focus: "cleansing shampoos, anti-dandruff washes, and nourishing conditioners",
      typesDesc: "We stock sulfate-free cleansers for chemically treated hair, zinc pyrithione anti-dandruff washes, and keratin-rich smoothing conditioners that detangle and protect hair strands.",
      wholesaleRetailDesc: "Beauty salons, barbershops, and stores across Koshi Province can order standard retail sizes and 1-liter salon containers with VAT billing, while retail shoppers receive 5% off MRP.",
      guideBridge: {
        h2: "What Nourishing Step Should Follow Hair Conditioning?",
        passage: `Applying a lightweight nourishing serum or botanical oil to towel-damp hair locks in hydration, prevents split ends, and protects strands from combing friction. Browse our selection of pure botanical extracts in <a href="/cosmetics/haircare/oils-serums/">Hair Oils & Serums in Itahari, Nepal</a>, or review hair washing fundamentals in <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.`
      },
      faqs: [
        { q: "Why should conditioner not be applied directly to the scalp?", a: "Conditioners contain rich emollient conditioning agents designed for hair lengths; applying them to the scalp can weigh down roots and accelerate oiliness." },
        { q: "Are salon-size 1-liter shampoo bottles available for home use?", a: "Yes, individual shoppers can purchase 1-liter bottles at our retail counter with an immediate 5% discount on MRP." }
      ]
    },

    // 12. Hair Oils & Serums
    {
      path: "/cosmetics/haircare/oils-serums/",
      parent: "/cosmetics/haircare/",
      name: "Hair Oils & Serums",
      h1: "Hair Oils & Serums in Itahari, Nepal",
      metaDesc: "Buy authentic herbal hair oils and smoothing serums at Baba Cosmetics in Itahari. Moroccan argan, onion oil, and heat protectants with 5% off MRP and wholesale.",
      snippet: "Hair oils and serums deliver vital fatty acids and silicones to seal damaged cuticles, stimulate scalp microcirculation, and impart high-gloss sheen. Baba Cosmetics distributes genuine Moroccan argan oils, herbal bhringraj extracts, onion black seed oils, and split-end serums at Janta Galli, Itahari-6 with no MOQ wholesale terms and 5% off MRP retail.",
      focus: "herbal hair oils, smoothing serums, and heat protectants",
      typesDesc: "Our hair oil inventory includes cold-pressed coconut oil, onion hair growth blends, pure argan serums for frizz control, and thermal protectant sprays for blow-drying.",
      wholesaleRetailDesc: "Salons and retail pharmacies can purchase assorted hair oil cartons with official tax invoicing, while retail customers receive an instant 5% discount below printed MRP at our showroom.",
      guideBridge: {
        h2: "How Do Hair Serums Protect Strands Before Styling?",
        passage: `Thermal styling tools subject hair strands to temperatures above 180°C, making pre-styling protective serums essential to prevent keratin breakdown. Explore styling pomades and strong-hold hair waxes in our <a href="/cosmetics/haircare/styling/">Hair Styling Products in Itahari, Nepal</a> section, or review routine guidelines in <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.`
      },
      faqs: [
        { q: "Can hair serum be used on dry hair to tame frizz?", a: "Yes, rubbing 1-2 drops of hair serum between your palms and smoothing over dry flyaways instantly eliminates frizz and adds shine." },
        { q: "How long should herbal hair oil be left on the scalp before washing?", a: "Leaving hair oil on the scalp for 1 to 2 hours before shampooing provides optimal nourishment without attracting dust." }
      ]
    },

    // 13. Hair Styling Products
    {
      path: "/cosmetics/haircare/styling/",
      parent: "/cosmetics/haircare/",
      name: "Hair Styling Products",
      h1: "Hair Styling Products in Itahari, Nepal",
      metaDesc: "Shop hair styling waxes, pomades, and holding sprays at Baba Cosmetics in Itahari. Strong hold, matte finish for salons and retail shoppers with 5% off MRP.",
      snippet: "Hair styling products provide structural hold, texture, and volume control to maintain sculpted hairstyles throughout humid weather and long working hours. Baba Cosmetics supplies genuine hair waxes, styling pomades, holding sprays, and curl gels at Janta Galli, Itahari-6 with wholesale cartons for salons (zero MOQ) and a flat 5% discount on MRP for retail buyers.",
      focus: "hair waxes, pomades, hairsprays, and styling gels",
      typesDesc: "We stock matte clay waxes for textured modern haircuts, water-based high-shine pomades, flexible hold styling sprays, and curl defining creams that eliminate frizz.",
      wholesaleRetailDesc: "Barbershops, salons, and cosmetics shops across Koshi Province can order mixed styling packs at direct trade pricing, while individual shoppers receive 5% off MRP at our counter.",
      guideBridge: {
        h2: "How Should Strong Styling Products Be Cleansed from Hair?",
        passage: `Preventing product buildup and scalp follicle clogging requires washing styling waxes thoroughly with an effective clarifying shampoo. Browse deep cleansing formulations in our <a href="/cosmetics/haircare/shampoo-conditioner/">Shampoo & Conditioner in Itahari, Nepal</a> section, or review commercial order processes on our <a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a> hub.`
      },
      faqs: [
        { q: "Are water-based hair pomades easy to wash out?", a: "Yes, water-based pomades rinse out completely with warm water and standard shampoo without leaving sticky residues." },
        { q: "Do the hair waxes provide humidity resistance in Tarai summers?", a: "Yes, our matte clay waxes contain microcrystalline waxes that resist perspiration and maintain hold in humid weather." }
      ]
    },

    // 14. Body Wash & Soaps
    {
      path: "/cosmetics/body-care/cleansers/",
      parent: "/cosmetics/body-care/",
      name: "Body Wash & Soaps",
      h1: "Body Wash & Soaps in Itahari, Nepal",
      metaDesc: "Buy moisturizing body washes, shower gels, and cleansing soaps at Baba Cosmetics in Itahari. 5% off MRP retail and wholesale cartons across Koshi Province.",
      snippet: "Body washes and cleansing soaps purify the skin of daily sweat, environmental bacteria, and dead skin cells while preserving natural cutaneous barrier moisture. Baba Cosmetics supplies genuine liquid shower gels, antibacterial body washes, and nourishing bathing bars at Janta Galli, Itahari-6 with wholesale supply (no MOQ) and 5% off MRP for retail shoppers.",
      focus: "shower gels, moisturizing body washes, and bathing bars",
      typesDesc: "Our body cleansing catalog features moisturizing shea butter body washes, refreshing citrus shower gels, gentle glycerin bathing bars, and medicated antibacterial cleansers.",
      wholesaleRetailDesc: "Retail stores, pharmacies, and hotels across Koshi Province can order body cleansers in master cartons with VAT invoices, while personal shoppers enjoy 5% off MRP at our counter.",
      guideBridge: {
        h2: "Why Should Body Cleansing Be Immediately Followed by Body Lotion?",
        passage: `Hot water and shower soaps strip surface sebum, making it critical to seal hydration into the skin within three minutes of drying off. Explore deep-nourishing body moisturizers in our <a href="/cosmetics/body-care/moisturisers/">Body Lotions in Itahari, Nepal</a> collection, or read our complete daily hygiene guide on <a href="/cosmetics-guide/hair-body-care/">Hair Care & Body Care: Everyday Essentials</a>.`
      },
      faqs: [
        { q: "Is shower gel more moisturizing than bar soap?", a: "Formulated shower gels generally have a lower pH and higher humectant content, making them gentler and more hydrating than traditional bar soaps." },
        { q: "Can shops buy mixed cartons of body washes and soaps?", a: "Yes, wholesale buyers can mix bar soaps and liquid shower washes within a single order." }
      ]
    },

    // 15. Body Lotions
    {
      path: "/cosmetics/body-care/moisturisers/",
      parent: "/cosmetics/body-care/",
      name: "Body Lotions",
      h1: "Body Lotions in Itahari, Nepal",
      metaDesc: "Discover hydrating body lotions and creams at Baba Cosmetics in Janta Galli, Itahari. Cocoa butter, aloe vera, and barrier repair lotions with 5% off MRP.",
      snippet: "Body lotions restore essential moisture, soften rough skin surfaces, and relieve winter xerosis across the arms, legs, and torso. Baba Cosmetics supplies authentic cocoa butter lotions, cooling aloe gels, and deep barrier repair body creams at Janta Galli, Itahari-6 with wholesale supply across Koshi Province (no MOQ) and a flat 5% retail discount on MRP.",
      focus: "body lotions, moisturizing body creams, and aloe soothing gels",
      typesDesc: "We stock lightweight non-greasy aloe lotions for summer hydration, intensive cocoa and shea butter creams for dry winter weather, and dermatological ceramide body balms.",
      wholesaleRetailDesc: "Cosmetic retailers and general shops can order bulk body lotion cartons with full VAT billing, while retail shoppers receive an automatic 5% reduction below printed MRP.",
      guideBridge: {
        h2: "How to Complement Daily Body Moisturization with Fresh Fragrance?",
        passage: `Applying a light scented mist over freshly moisturized skin enhances fragrance longevity because hydrated skin lipids bind aromatic oils effectively. Discover daily body splashes in our <a href="/cosmetics/fragrance/body-mists/">Body Mists & Sprays in Itahari, Nepal</a> section, or review gentle body wash pairings in <a href="/cosmetics/body-care/cleansers/">Body Wash & Soaps in Itahari, Nepal</a>.`
      },
      faqs: [
        { q: "Which body lotion is recommended for severely dry, flaky winter skin?", a: "We recommend rich cocoa butter or ceramide-enriched moisturizing creams that form an occlusive barrier against cold dry air." },
        { q: "Do the body lotions feel sticky in warm humid weather?", a: "No, we stock specialized fast-absorbing aloe and water-gel lotions designed specifically for warm climates." }
      ]
    },

    // 16. Perfumes and Fragrances
    {
      path: "/cosmetics/fragrance/perfumes/",
      parent: "/cosmetics/fragrance/",
      name: "Perfumes and Fragrances",
      h1: "Perfumes and Fragrances in Itahari, Nepal",
      metaDesc: "Buy authentic Eau de Parfum and fine perfumes at Baba Cosmetics in Janta Galli, Itahari. 100% genuine long-lasting scents with 5% off MRP and wholesale supply.",
      snippet: "Fine perfumes and fragrances express personal sophistication through layered aromatic notes that project gracefully throughout the day. Baba Cosmetics distributes authentic Eau de Parfum (EDP) and Eau de Toilette (EDT) formulations at Janta Galli, Itahari-6 with wholesale trade pricing for regional stores (zero MOQ) and a flat 5% discount on MRP for retail shoppers.",
      focus: "Eau de Parfum, Eau de Toilette, and luxury perfumes",
      typesDesc: "We stock long-lasting Eau de Parfum with 15–20% perfume oil concentrations, versatile Eau de Toilette for daytime office wear, and concentrated traditional attar formulations.",
      wholesaleRetailDesc: "Gift shops and cosmetics stores can order mixed fragrance cases with verified manufacturer lot stamps, while retail customers enjoy 5% off MRP with Cash and QR payments accepted.",
      guideBridge: {
        h2: "How Do Perfume Concentrations Differ from Lighter Daily Body Mists?",
        passage: `While concentrated Eau de Parfum is engineered for 8+ hours of projection on pulse points, lighter body mists provide subtle, refreshing all-over scents for casual daytime wear. Explore pocket sprays and daily splashes in our <a href="/cosmetics/fragrance/body-mists/">Body Mists & Sprays in Itahari, Nepal</a> section, or learn how to decode perfume notes in <a href="/cosmetics-guide/understanding-products/">Understanding Beauty Products, Categories & Labels</a>.`
      },
      faqs: [
        { q: "How can I maximize perfume longevity throughout the day?", a: "Apply perfume onto clean pulse points—such as the wrists, behind the ears, and base of the neck—without rubbing the wrists together." },
        { q: "Can I inspect the perfume box seal before purchase?", a: "Yes, customers can inspect tamper-evident cellophane seals and manufacturer batch codes at our retail counter." }
      ]
    },

    // 17. Body Mists & Sprays
    {
      path: "/cosmetics/fragrance/body-mists/",
      parent: "/cosmetics/fragrance/",
      name: "Body Mists & Sprays",
      h1: "Body Mists & Sprays in Itahari, Nepal",
      metaDesc: "Shop refreshing body mists, body sprays, and pocket perfumes at Baba Cosmetics in Itahari. Genuine scents with 5% off MRP and wholesale trade cartons.",
      snippet: "Body mists and scented sprays offer an airy, refreshing fragrance profile ideal for all-over daily application, post-workout touch-ups, and casual daytime wear. Baba Cosmetics supplies authentic body mists, pocket perfumes, and deodorant sprays at Janta Galli, Itahari-6 with wholesale cartons (zero MOQ) and a flat 5% retail discount on MRP.",
      focus: "body mists, body sprays, and pocket perfumes",
      typesDesc: "Our mist collection features floral, citrus, and vanilla scented all-over body splashes, compact travel pocket sprays, and aluminum-free daily antiperspirant body sprays.",
      wholesaleRetailDesc: "Retail stores and college gift shops across Koshi Province can order mixed scent cartons at wholesale rates with VAT billing, while personal shoppers receive 5% off MRP.",
      guideBridge: {
        h2: "When Should You Choose an Eau de Parfum Over a Daily Body Mist?",
        passage: `Daily body mists provide light, refreshing scent bursts for 2 to 4 hours, whereas concentrated fine perfumes project for full working days and formal celebrations. Compare high-concentration fragrance options in our <a href="/cosmetics/fragrance/perfumes/">Perfumes and Fragrances in Itahari, Nepal</a> section, or explore daily cleansing pairings in <a href="/cosmetics/body-care/cleansers/">Body Wash & Soaps in Itahari, Nepal</a>.`
      },
      faqs: [
        { q: "Can body mists be sprayed directly onto clothes?", a: "Yes, body mists have a gentle water-alcohol base that does not stain standard cotton or polyester garments when sprayed from 15cm away." },
        { q: "Are travel pocket perfumes leak-proof?", a: "Yes, our pocket perfume containers feature secure threaded atomizer caps designed for travel." }
      ]
    },

    // 18. Nail Polish & Removers
    {
      path: "/cosmetics/nail-care/polish-remover/",
      parent: "/cosmetics/nail-care/",
      name: "Nail Polish & Removers",
      h1: "Nail Polish & Removers in Itahari, Nepal",
      metaDesc: "Buy chip-resistant nail polishes, gel top coats, and acetone-free removers at Baba Cosmetics in Itahari. 5% off MRP retail and wholesale cartons across Koshi Province.",
      snippet: "Nail polishes and removers deliver vibrant salon-grade manicure color while providing gentle solvent action that removes old lacquer without stripping nail keratin. Baba Cosmetics supplies authentic quick-drying polishes, gel effect top coats, and acetone-free polish removers at Janta Galli, Itahari-6 with no MOQ wholesale terms and a flat 5% retail discount on MRP.",
      focus: "nail colors, gel top coats, and acetone-free removers",
      typesDesc: "We stock chip-resistant glossy nail lacquers in pastel, nude, and festive shades, strengthening base coats, gel-finish top coats, and moisturizing nail polish removers.",
      wholesaleRetailDesc: "Nail salons, beauty parlors, and cosmetics shops can purchase wholesale assorted color racks with official tax invoicing, while retail shoppers enjoy 5% off MRP at our counter.",
      guideBridge: {
        h2: "What Grooming Tools Ensure a Clean Manicure Application?",
        passage: `Achieving clean, salon-grade nail color application begins with shaping nail edges and gently preparing cuticle borders using precision instruments. Discover manicure clippers and tweezers in our dedicated <a href="/cosmetics/beauty-tools-accessories/">Beauty Tools in Itahari, Nepal</a> section, or review in-store shopping details on our <a href="/retail-cosmetics/">Cosmetics Retail Shop in Itahari, Nepal</a> page.`
      },
      faqs: [
        { q: "How long does the gel-finish top coat take to dry?", a: "Our quick-dry gel top coats set to a hard, chip-resistant finish within 90 seconds under ambient indoor airflow." },
        { q: "Does the acetone-free remover leave white residue on nails?", a: "No, our acetone-free polish remover contains conditioning agents that leave natural nail plates clean and moisturized." }
      ]
    },

    // 19. Makeup Brushes & Sponges
    {
      path: "/cosmetics/beauty-tools-accessories/brushes-sponges/",
      parent: "/cosmetics/beauty-tools-accessories/",
      name: "Makeup Brushes & Sponges",
      h1: "Makeup Brushes & Sponges in Itahari, Nepal",
      metaDesc: "Shop makeup brushes, blending sponges, and applicators at Baba Cosmetics in Itahari. Professional bristles, 5% off MRP retail, wholesale salon packs.",
      snippet: "Makeup brushes and blending sponges provide precise pigment placement, seamless foundation buffing, and streak-free cosmetic finishes. Baba Cosmetics supplies synthetic bristle brush sets, contouring tools, and latex-free blending sponges at Janta Galli, Itahari-6 with wholesale supply for bridal salons (no MOQ) and a flat 5% retail discount on MRP.",
      focus: "foundation brushes, blending sponges, and powder applicators",
      typesDesc: "Our brush collection includes flat-top kabuki foundation brushes, tapered eyeshadow blending brushes, angled cheek contour brushes, and ergonomic teardrop beauty sponges.",
      wholesaleRetailDesc: "Bridal studios, salons, and makeup academies can order brush sets and sponge multipacks at wholesale trade rates, while individual shoppers receive 5% off MRP at our showroom.",
      guideBridge: {
        h2: "How Does Proper Tool Application Elevate Face Makeup Formulations?",
        passage: `Using a dampened teardrop sponge or high-density synthetic brush prevents foundation from absorbing into porous fingers, ensuring base cosmetics blend seamlessly into the skin. Discover verified complexion cosmetics in our <a href="/cosmetics/makeup/face/">Face Makeup Products in Itahari, Nepal</a> collection, or follow expert blending advice in our <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.`
      },
      faqs: [
        { q: "Should beauty sponges be used damp or dry for foundation?", a: "Beauty sponges should be soaked in clean water, thoroughly squeezed until damp, and used to bounce foundation into the skin for a natural, skin-like finish." },
        { q: "Are the brush bristles made of natural hair or synthetic fibers?", a: "We curate premium synthetic bristles that are cruelty-free, easy to wash, and do not harbor bacteria like natural animal hair." }
      ]
    },

    // 20. Eyelash & Brow Tools
    {
      path: "/cosmetics/beauty-tools-accessories/eye-tools/",
      parent: "/cosmetics/beauty-tools-accessories/",
      name: "Eyelash & Brow Tools",
      h1: "Eyelash & Brow Tools in Itahari, Nepal",
      metaDesc: "Buy precision eyelash curlers, tweezers, and brow scissors at Baba Cosmetics in Itahari. Salon-quality instruments with 5% off MRP and wholesale cartons.",
      snippet: "Eyelash and brow tools shape, groom, and curl facial hair to create defined eye frames and lifted lash lines without crimping or pinching sensitive skin. Baba Cosmetics supplies ergonomic eyelash curlers, calibrated slant tweezers, and eyebrow grooming scissors at Janta Galli, Itahari-6 with zero MOQ wholesale terms and a flat 5% retail discount on MRP.",
      focus: "eyelash curlers, slant tweezers, and brow scissors",
      typesDesc: "We stock stainless steel eyelash curlers with soft silicone pads, hand-filed slant tip eyebrow tweezers, micro-serrated brow scissors, and double-ended spoolie brush combs.",
      wholesaleRetailDesc: "Beauty parlors, salons, and makeup artists across Koshi Province can order eye tool sets at trade rates with VAT invoices, while personal shoppers receive 5% off MRP at our counter.",
      guideBridge: {
        h2: "How Do Eyelash Tools Complement Mascaras and Eyeliners?",
        passage: `Curling eyelashes at the base before applying mascara locks in a lifted curve and prevents wet mascara from smudging onto the upper eyelid fold. Discover smudge-proof mascaras and kajal in our dedicated <a href="/cosmetics/makeup/eyes/">Eye Makeup Products in Itahari, Nepal</a> collection, or review eye styling techniques in our <a href="/cosmetics-guide/makeup-guides/">Makeup Guides & Application Tips</a>.`
      },
      faqs: [
        { q: "When should you curl your eyelashes: before or after mascara?", a: "Always curl clean eyelashes before applying mascara; curling after mascara can cause brittle lashes to stick to the curler pad and break." },
        { q: "Are replacement silicone pads included with eyelash curlers?", a: "Yes, our eyelash curlers come with replacement food-grade silicone pads to ensure continuous gentle cushioning." }
      ]
    }
  ];

  return subcatDefinitions.map(sub => ({
    path: sub.path,
    title: `${sub.name} in Itahari | Baba Cosmetics`,
    metaDescription: sub.metaDesc,
    h1: sub.h1,
    snippet: sub.snippet,
    category: "Subcategories",
    parentService: sub.parent,
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/cosmetics/" },
      { name: "Category", url: sub.parent },
      { name: sub.name, url: sub.path }
    ],
    sections: [
      {
        h2: `Which ${sub.name} Are Available at Baba Cosmetics in Itahari?`,
        content: `<p>${sub.typesDesc}</p>
        <p>Every product is sourced through authorized national distributor channels in Nepal, carrying verified manufacturer batch codes and tamper-evident factory seals. We store all cosmetic inventory in clean, temperature-regulated facilities to ensure formulation integrity.</p>`
      },
      {
        h2: `How Do Wholesale and Retail ${sub.name} Purchases Work in Itahari?`,
        content: `<p>${sub.wholesaleRetailDesc}</p>
        <p>Retail stores can combine these products with other cosmetics categories in mixed cartons without minimum order quantities. Personal shoppers visiting our Janta Galli counter are invited to inspect all outer packaging prior to payment, as our strict counter policy ensures all sales are verified and finalized at checkout.</p>`
      },
      {
        h2: sub.guideBridge.h2,
        content: `<p>${sub.guideBridge.passage}</p>`
      }
    ],
    faqs: sub.faqs
  }));
};
