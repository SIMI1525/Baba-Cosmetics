const fs = require('fs');
const path = require('path');
const { siteRoutes } = require('./data/site-data.js');

const validUrls = new Set(siteRoutes.map(r => r.path));
const urlToH1 = {};
siteRoutes.forEach(r => {
  urlToH1[r.path] = r.h1;
});

console.log('========================================================');
console.log('AUDITING ALGORITHMIC AUTHORSHIP & INTERNAL LINKING');
console.log(`Auditing ${siteRoutes.length} routes...`);
console.log('========================================================\n');

let totalLinks = 0;
let brokenLinks = 0;
let bannedPatternMatches = 0;
const linkInventory = [];

const bannedPatterns = [
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

siteRoutes.forEach((route, idx) => {
  let filePath = path.join(__dirname, 'index.html');
  if (route.path !== '/') {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    filePath = path.join(__dirname, ...cleanPath.split('/'), 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    console.error(`Missing HTML file for route: ${route.path}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Check banned patterns
  bannedPatterns.forEach(pattern => {
    if (pattern.test(html)) {
      console.warn(`[BANNED PATTERN] Match ${pattern} on route ${route.path}`);
      bannedPatternMatches++;
    }
  });

  // Extract internal links in main content (<main> to </main>)
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[0];
    const linkRegex = /<a\s+[^>]*href=["'](\/[^"'#?]*)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = linkRegex.exec(mainHtml)) !== null) {
      const destUrl = match[1];
      const rawAnchor = match[2].replace(/<[^>]+>/g, '').trim();
      totalLinks++;

      // Verify dest exists
      const cleanDest = destUrl.endsWith('/') ? destUrl : `${destUrl}/`;
      const isValid = validUrls.has(destUrl) || validUrls.has(cleanDest);
      if (!isValid && destUrl !== '/' && !destUrl.startsWith('/#')) {
        console.error(`[BROKEN LINK] on ${route.path} -> ${destUrl}`);
        brokenLinks++;
      } else {
        const targetH1 = urlToH1[destUrl] || urlToH1[cleanDest] || 'Homepage';
        linkInventory.push({
          source: route.path,
          destination: destUrl,
          anchor: rawAnchor,
          targetH1: targetH1,
          matchesTargetH1: rawAnchor.toLowerCase() === targetH1.toLowerCase()
        });
      }
    }
  }
});

console.log('\n========================================================');
console.log('AUDIT RESULTS:');
console.log(`Total Main Content Internal Links Checked: ${totalLinks}`);
console.log(`Broken Internal Links: ${brokenLinks}`);
console.log(`Banned Writing Pattern Violations: ${bannedPatternMatches}`);
console.log(`Total Unique Routes Audited: ${siteRoutes.length}`);
console.log('========================================================\n');

// Sample linking map
console.log('Sample Internal Linking Map Entries (first 15):');
linkInventory.slice(0, 15).forEach((item, i) => {
  console.log(`${i+1}. [${item.source}] -> [${item.destination}] | Anchor: "${item.anchor}" | Matches Target H1: ${item.matchesTargetH1}`);
});
