/**
 * Server Latency and Header Verification Test
 */
const http = require('http');

async function testServer() {
  const urls = [
    'http://localhost:8089/',
    'http://localhost:8089/wholesale-cosmetics/',
    'http://localhost:8089/retail-cosmetics/',
    'http://localhost:8089/cosmetics/makeup/',
    'http://localhost:8089/cosmetics/accessories/',
    'http://localhost:8089/cosmetics-guide/',
    'http://localhost:8089/cosmetics-guide/buying-guides/',
    'http://localhost:8089/cosmetics-guide/skincare-routines/',
    'http://localhost:8089/product-authenticity/'
  ];

  for (const url of urls) {
    const start = Date.now();
    await new Promise((resolve, reject) => {
      http.get(url, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          const duration = Date.now() - start;
          const cacheControl = res.headers['cache-control'] || '';
          console.log(`[HTTP ${res.statusCode}] ${url} - ${duration}ms - ${(Buffer.byteLength(body)/1024).toFixed(1)}KB - Cache-Control: ${cacheControl}`);
          if (res.statusCode !== 200 || !cacheControl.includes('no-store')) {
            console.error('FAILED check on', url);
          }
          resolve();
        });
      }).on('error', reject);
    });
  }
}

testServer().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
