/**
 * BABA COSMETICS - Master Site Data Generator
 * Algorithmic Authorship & SOP-Based Semantic Internal Linking Refined Architecture
 * 
 * Modular Corpus Architecture:
 * - data-modules/core-services.js (2 routes)
 * - data-modules/wholesale.js (5 routes)
 * - data-modules/retail.js (2 routes)
 * - data-modules/categories.js (10 routes)
 * - data-modules/subcategories.js (20 routes)
 * - data-modules/cosmetic-guides.js (8 routes)
 * - data-modules/institutional-trust.js (7 routes)
 * - data-modules/legal.js (5 routes)
 * Total: 59 Canonical Routes
 */

const fs = require('fs');
const path = require('path');
const config = require('./data/config.js');

const getCoreServicesRoutes = require('./data-modules/core-services.js');
const getWholesaleRoutes = require('./data-modules/wholesale.js');
const getRetailRoutes = require('./data-modules/retail.js');
const getCategoriesRoutes = require('./data-modules/categories.js');
const getSubcategoriesRoutes = require('./data-modules/subcategories.js');
const getCosmeticGuideRoutes = require('./data-modules/cosmetic-guides.js');
const getInstitutionalTrustRoutes = require('./data-modules/institutional-trust.js');
const getLegalRoutes = require('./data-modules/legal.js');

function buildCorpus() {
  const routes = [
    ...getCoreServicesRoutes(),
    ...getWholesaleRoutes(),
    ...getRetailRoutes(),
    ...getCategoriesRoutes(),
    ...getSubcategoriesRoutes(),
    ...getCosmeticGuideRoutes(),
    ...getInstitutionalTrustRoutes(),
    ...getLegalRoutes()
  ];

  return routes;
}

const siteRoutes = buildCorpus();
const outputPath = path.join(__dirname, 'data', 'site-data.js');
const fileContent = `const siteConfig = ${JSON.stringify(config, null, 2)};\n\nconst siteRoutes = ${JSON.stringify(siteRoutes, null, 2)};\n\nmodule.exports = { siteConfig, siteRoutes };\n`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Generated data/site-data.js successfully with ${siteRoutes.length} refined routes!`);
