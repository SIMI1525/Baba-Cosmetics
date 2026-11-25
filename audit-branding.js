const fs = require('fs');
const path = require('path');
const { siteRoutes } = require('./data/site-data.js');

let pass = 0;
let fail = 0;

function assert(condition, message) {
  if (condition) {
    pass++;
  } else {
    fail++;
    console.error('FAIL:', message);
  }
}

const contactCardPaths = new Set(['/', '/wholesale-cosmetics/', '/retail-cosmetics/', '/about/']);

console.log(`Auditing all ${siteRoutes.length} routes against latest user requirements...`);

const expectedCategoryImages = {
  '/cosmetics/': 'hero-products-overview.jpg',
  '/cosmetics/makeup/': 'hero-makeup.jpg',
  '/cosmetics/skincare/': 'hero-skincare.jpg',
  '/cosmetics/haircare/': 'hero-haircare.jpg',
  '/cosmetics/fragrance/': 'hero-fragrance.jpg',
  '/cosmetics/body-care/': 'hero-bodycare.jpg',
  '/cosmetics/beauty-tools-accessories/': 'hero-beauty-tools.jpg',
  '/cosmetics/accessories/': 'hero-accessories.jpg',
  '/cosmetics-guide/buying-guides/': 'hero-guide-buying.jpg',
  '/cosmetics-guide/skincare-routines/': 'hero-guide-skincare.jpg',
  '/cosmetics-guide/makeup-guides/': 'hero-guide-makeup.jpg',
  '/cosmetics-guide/understanding-products/': 'hero-guide-understanding.jpg',
  '/cosmetics-guide/': 'hero-guide-overview.jpg'
};

siteRoutes.forEach(route => {
  let filePath = path.join(__dirname, 'index.html');
  if (route.path !== '/') {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    filePath = path.join(__dirname, ...cleanPath.split('/'), 'index.html');
  }

  assert(fs.existsSync(filePath), 'File exists: ' + filePath);
  const html = fs.readFileSync(filePath, 'utf8');

  // 1. PAN audit
  assert(!html.includes('602384910'), 'Old PAN 602384910 found in ' + route.path);
  assert(html.includes('600881922'), 'New PAN 600881922 missing in ' + route.path);

  // 2. Logo audit
  assert(!html.includes('class="brand-symbol"'), 'Old standalone B logo found in ' + route.path);
  assert(html.includes('src="/assets/images/logo.png"'), 'New logo missing in ' + route.path);
  assert(html.includes('rel="icon" type="image/png" href="/assets/images/logo.png"'), 'Favicon logo missing in ' + route.path);

  // 3. No artificial badge overlay on images
  assert(!html.includes('hero-brand-badge-overlay'), 'Artificial badge overlay found on ' + route.path);

  // 4. Above-the-fold contact card vs Human-Centred hero visual audit
  const shouldHaveContactCard = contactCardPaths.has(route.path);
  const heroMatch = html.match(/<section[^>]*class="hero[^"]*"[^>]*>([\s\S]*?)<\/section>/);
  assert(heroMatch !== null, 'Hero section found in ' + route.path);
  
  if (heroMatch) {
    const heroContent = heroMatch[1];
    if (shouldHaveContactCard) {
      assert(heroContent.includes('business-info-card'), 'Contact card missing in hero on ' + route.path);
      assert(!heroContent.includes('hero-brand-visual-card'), 'Human hero visual unexpectedly present on ' + route.path);
    } else {
      assert(!heroContent.includes('business-info-card'), 'Contact card unexpectedly present in hero on ' + route.path);
      assert(heroContent.includes('hero-brand-visual-card'), 'Human hero visual missing on ' + route.path);
      assert(!heroContent.includes('025-583775'), 'Phone number leaked into hero on ' + route.path);
      assert(!heroContent.includes('9805303415'), 'Mobile number leaked into hero on ' + route.path);

      // Verify specific image if declared
      if (expectedCategoryImages[route.path]) {
        const expectedImg = expectedCategoryImages[route.path];
        assert(heroContent.includes(expectedImg), `Route ${route.path} does not use expected image ${expectedImg}`);
        const imgDiskPath = path.join(__dirname, 'assets', 'images', expectedImg);
        assert(fs.existsSync(imgDiskPath), `Image file ${imgDiskPath} does not exist on disk`);
      }
    }
  }

  // File size
  assert(html.length > 20000, 'HTML size < 20KB on ' + route.path + ' (' + html.length + ' bytes)');
});

console.log('Results: Passed:', pass, 'Failed:', fail);
if (fail > 0) process.exit(1);
