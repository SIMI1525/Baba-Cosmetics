const fs = require('fs');
const path = require('path');

const aboutHtml = fs.readFileSync('about/index.html', 'utf8');
const homeHtml = fs.readFileSync('index.html', 'utf8');
const wholesaleHtml = fs.readFileSync('wholesale-cosmetics/index.html', 'utf8');

// 1. Check About Us page gallery
console.log('About has store-gallery-section:', aboutHtml.includes('store-gallery-section'));
console.log('About has Title Take a Look Inside Baba Cosmetics:', aboutHtml.includes('Take a Look Inside Baba Cosmetics'));
console.log('About has Subtitle:', aboutHtml.includes('Get a glimpse of our store, explore our product displays, and see where we serve our customers.'));
console.log('About has Lightbox:', aboutHtml.includes('gallery-lightbox'));

// 2. Check Order of sections on About Us page
const heroEnd = aboutHtml.indexOf('</section>');
const galleryStart = aboutHtml.indexOf('class="store-gallery-section"');
const mainStart = aboutHtml.indexOf('class="main-content-area"');

console.log('Hero ends at index:', heroEnd);
console.log('Gallery starts at index:', galleryStart);
console.log('Main starts at index:', mainStart);
console.log('Order is Hero -> Gallery -> Main:', heroEnd < galleryStart && galleryStart < mainStart);

// 3. Check All 10 photos exist on disk and in HTML
const photos = [
  'store-interior-counter.jpg',
  'wholesale-corridor.jpg',
  'shop-signboard.jpg',
  'store-counter-pote.jpg',
  'wide-shop-shelving.jpg',
  'accessories-display-tree.jpg',
  'owner-billing-desk.jpg',
  'cosmetic-shelves-storage.jpg',
  'street-exterior-storefront.jpg',
  'business-visiting-card.jpg'
];

let allPhotosPresent = true;
photos.forEach(p => {
  const onDisk = fs.existsSync(path.join('assets', 'images', 'store-gallery', p));
  const inHtml = aboutHtml.includes(p);
  if (!onDisk || !inHtml) {
    console.error('Photo missing:', p, 'onDisk:', onDisk, 'inHtml:', inHtml);
    allPhotosPresent = false;
  }
});
console.log('All 10 photos present on disk and in About HTML:', allPhotosPresent);

// 4. Check other pages do not have the gallery
console.log('Home does NOT have store gallery:', !homeHtml.includes('store-gallery-section'));
console.log('Wholesale does NOT have store gallery:', !wholesaleHtml.includes('store-gallery-section'));
