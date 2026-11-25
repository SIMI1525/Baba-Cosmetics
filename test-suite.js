/**
 * BABA COSMETICS - Automated Quality Assurance & Verification Protocol
 * Validates Corpus Integrity, Reciprocity Links, Pre-Render Payload (>20KB),
 * Dropdowns, Cosmetic Guide navigation, and File Assets.
 */

const fs = require('fs');
const path = require('path');
const { siteRoutes, siteConfig } = require('./data/site-data.js');

let passCount = 0;
let failCount = 0;
const errors = [];

function assert(condition, message) {
  if (condition) {
    passCount++;
  } else {
    failCount++;
    errors.push(message);
    console.error(`❌ FAIL: ${message}`);
  }
}

console.log(`\n========================================================`);
console.log(`BABA COSMETICS QA AUDIT SUITE (SECOND REFINEMENT)`);
console.log(`Checking ${siteRoutes.length} pre-rendered routes...`);
console.log(`========================================================\n`);

// 1. Corpus Integrity Audit
console.log(`--- [1/5] Auditing Corpus Integrity & SEO Meta ---`);
siteRoutes.forEach(route => {
  assert(route.title && route.title.length > 5, `Route ${route.path} has valid title: "${route.title}"`);
  assert(route.metaDescription && route.metaDescription.length > 20, `Route ${route.path} has descriptive metaDescription`);
  assert(route.h1 && route.h1.length > 5, `Route ${route.path} has valid H1`);
  assert(route.snippet && route.snippet.length >= 25, `Route ${route.path} has summary snippet`);

  let filePath = path.join(__dirname, 'index.html');
  if (route.path !== '/') {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    filePath = path.join(__dirname, ...cleanPath.split('/'), 'index.html');
  }

  assert(fs.existsSync(filePath), `Physical pre-rendered file exists at ${filePath}`);
});

// 2. Pre-Render File Size & Payload Verification (>20KB)
console.log(`\n--- [2/5] Auditing Pre-Render File Size (>20KB per page) ---`);
let allAbove20KB = true;
let minSize = Infinity;
let maxSize = 0;

siteRoutes.forEach(route => {
  let filePath = path.join(__dirname, 'index.html');
  if (route.path !== '/') {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    filePath = path.join(__dirname, ...cleanPath.split('/'), 'index.html');
  }

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.size < minSize) minSize = stats.size;
    if (stats.size > maxSize) maxSize = stats.size;

    if (stats.size < 20480) {
      allAbove20KB = false;
      assert(false, `Route ${route.path} size is ${(stats.size/1024).toFixed(2)}KB (Requires >20KB)`);
    }
  }
});
assert(allAbove20KB, `100% of routes exceed 20KB pre-rendered HTML threshold (Min: ${(minSize/1024).toFixed(2)}KB, Max: ${(maxSize/1024).toFixed(2)}KB)`);

// 3. Dropdown Menus & Cosmetic Guide Audit
console.log(`\n--- [3/5] Auditing Navigation Dropdowns & Cosmetic Guide ---`);
const homeHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
assert(homeHtml.includes('nav-item-dropdown'), 'Navigation includes dropdown components');
assert(homeHtml.includes('Cosmetic Guide'), 'Navigation includes Cosmetic Guide (renamed from Knowledge Hub)');
assert(!homeHtml.includes('>Knowledge Hub<'), 'Navigation no longer has Knowledge Hub');
assert(homeHtml.includes('/cosmetics/accessories/'), 'Products dropdown includes Accessories');
assert(homeHtml.includes('/cosmetics-guide/buying-guides/'), 'Cosmetic Guide dropdown includes Buying Guides');
assert(homeHtml.includes('/cosmetics-guide/skincare-routines/'), 'Cosmetic Guide dropdown includes Skincare Routines');
assert(homeHtml.includes('/cosmetics-guide/makeup-guides/'), 'Cosmetic Guide dropdown includes Makeup Guides');
assert(homeHtml.includes('/cosmetics-guide/understanding-products/'), 'Cosmetic Guide dropdown includes Understanding Products');
assert(homeHtml.includes('/cosmetics-guide/hair-body-care/'), 'Cosmetic Guide dropdown includes Hair & Body Care');
assert(homeHtml.includes('/cosmetics-guide/beauty-tips-trends/'), 'Cosmetic Guide dropdown includes Beauty Tips & Trends');

// New Navigation Audit: About Us replacing Authenticity & Store Map
assert(homeHtml.includes('>About Us<') && homeHtml.includes('href="/about/"'), 'Main navigation includes About Us');
assert(!homeHtml.includes('>Authenticity<'), 'Main navigation does not include Authenticity');
assert(!homeHtml.includes('>Store Map<'), 'Main navigation does not include Store Map');

// New Homepage H1 Audit
assert(homeHtml.includes('Baba Cosmetics - Best Cosmetic Seller in Itahari'), 'Homepage H1 matches "Baba Cosmetics - Best Cosmetic Seller in Itahari"');

// New Active Route Matching Audit: Cosmetic Guide must NOT highlight Products
const guideHtml = fs.readFileSync(path.join(__dirname, 'cosmetics-guide', 'index.html'), 'utf8');
assert(guideHtml.includes('class="nav-link dropdown-main-link active">Cosmetic Guide<'), 'Cosmetic Guide page highlights Cosmetic Guide');
assert(!guideHtml.includes('class="nav-link dropdown-main-link active">Products<'), 'Cosmetic Guide page does NOT highlight Products');

// 4. Hero Background Images on All Three Landing Pages
console.log(`\n--- [4/5] Auditing Three Landing Page Hero Images ---`);
const wholesaleHtml = fs.readFileSync(path.join(__dirname, 'wholesale-cosmetics', 'index.html'), 'utf8');
const retailHtml = fs.readFileSync(path.join(__dirname, 'retail-cosmetics', 'index.html'), 'utf8');

assert(homeHtml.includes('hero-section-home'), 'Home page has hero-section-home class');
assert(wholesaleHtml.includes('hero-section-wholesale'), 'Wholesale page has hero-section-wholesale class');
assert(retailHtml.includes('hero-section-retail'), 'Retail page has hero-section-retail class');

assert(fs.existsSync(path.join(__dirname, 'assets', 'images', 'hero-cosmetics-bg.jpg')), 'hero-cosmetics-bg.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'images', 'hero-wholesale-bg.jpg')), 'hero-wholesale-bg.jpg exists');
assert(fs.existsSync(path.join(__dirname, 'assets', 'images', 'hero-retail-bg.jpg')), 'hero-retail-bg.jpg exists');

// 5. Zero Calculators Audit
console.log(`\n--- [5/6] Auditing Complete Removal of Calculators ---`);
assert(!homeHtml.includes('calc-wholesale-margin'), 'Homepage has no wholesale calculator');
assert(!homeHtml.includes('calc-inventory-restock'), 'Homepage has no inventory calculator');
assert(!homeHtml.includes('calc-batch-expiry'), 'Homepage has no batch expiry calculator');
assert(!homeHtml.includes('calc-startup-budget'), 'Homepage has no startup budget calculator');
assert(!wholesaleHtml.includes('calc-wholesale-margin'), 'Wholesale page has no calculator');
assert(!retailHtml.includes('calc-batch-expiry'), 'Retail page has no calculator');

// 6. Algorithmic Authorship & SOP Internal Linking Audit
console.log(`\n--- [6/6] Auditing Algorithmic Authorship & SOP-Based Internal Linking ---`);
const validPaths = new Set(siteRoutes.map(r => r.path));
let totalLinksChecked = 0;
let brokenLinksFound = 0;
let bannedPatternFound = 0;

const bannedList = [
  /furthermore/i,
  /moreover/i,
  /\bin addition\b/i,
  /\bbasically\b/i,
  /\bactually\b/i,
  /have you ever wondered/i,
  /in this article,?\s+we will explore/i,
  /it is important to note that/i,
  /\[information required\]/i,
  /\[pending confirmation\]/i
];

siteRoutes.forEach(route => {
  let filePath = path.join(__dirname, 'index.html');
  if (route.path !== '/') {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    filePath = path.join(__dirname, ...cleanPath.split('/'), 'index.html');
  }

  const html = fs.readFileSync(filePath, 'utf8');

  bannedList.forEach(p => {
    if (p.test(html)) {
      bannedPatternFound++;
    }
  });

  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[0];
    const linkRegex = /<a\s+[^>]*href=["'](\/[^"'#?]*)["'][^>]*>/gi;
    let match;
    while ((match = linkRegex.exec(mainHtml)) !== null) {
      const destUrl = match[1];
      totalLinksChecked++;
      const cleanDest = destUrl.endsWith('/') ? destUrl : `${destUrl}/`;
      if (!validPaths.has(destUrl) && !validPaths.has(cleanDest) && destUrl !== '/') {
        brokenLinksFound++;
      }
    }
  }
});

assert(bannedPatternFound === 0, `Zero banned patterns or placeholders found across all routes (Violations: ${bannedPatternFound})`);
assert(brokenLinksFound === 0, `Zero broken internal links found in main content (Checked: ${totalLinksChecked})`);
assert(totalLinksChecked >= 250, `Substantial semantic internal linking present across corpus (Found: ${totalLinksChecked} links)`);

// SOP Supplementary Linking Audit on Educational Guides
const skinRoutineHtml = fs.readFileSync(path.join(__dirname, 'cosmetics-guide', 'skincare-routines', 'index.html'), 'utf8');
assert(skinRoutineHtml.includes('Where Can Shoppers Source Genuine Skincare Products in Itahari?'), 'Skincare guide has SOP supplementary H2');
assert(skinRoutineHtml.includes('<a href="/cosmetics/skincare/">Skincare Products in Itahari, Nepal</a>'), 'Skincare guide links with exact target H1 anchor');

const makeupGuideHtml = fs.readFileSync(path.join(__dirname, 'cosmetics-guide', 'makeup-guides', 'index.html'), 'utf8');
assert(makeupGuideHtml.includes('How to Select and Inspect Genuine Makeup Products in Itahari?'), 'Makeup guide has SOP supplementary H2');
assert(makeupGuideHtml.includes('<a href="/cosmetics/makeup/">Makeup Products in Itahari, Nepal</a>'), 'Makeup guide links with exact target H1 anchor');

const buyingGuideHtml = fs.readFileSync(path.join(__dirname, 'cosmetics-guide', 'buying-guides', 'index.html'), 'utf8');
assert(buyingGuideHtml.includes('When Should Retailers Choose a Wholesale Cosmetics Supplier in Itahari?'), 'Buying guide has SOP supplementary H2');
assert(buyingGuideHtml.includes('<a href="/wholesale-cosmetics/">Wholesale Cosmetics Supplier in Itahari & Koshi Province</a>'), 'Buying guide links with exact target H1 anchor');

console.log(`\n========================================================`);
console.log(`QA AUDIT RESULTS:`);
console.log(`Tests Passed: ${passCount}`);
console.log(`Tests Failed: ${failCount}`);
if (failCount === 0) {
  console.log(`🏆 VERIFICATION SUCCESSFUL: 100% OF AUDIT CHECKS PASSED.`);
} else {
  console.log(`⚠️ VERIFICATION FAILED WITH ${failCount} ERRORS:`);
  errors.forEach(e => console.log(` - ${e}`));
}
console.log(`========================================================\n`);
