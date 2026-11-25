import urllib.request
import re

urls = [
    'http://smaran-raut.local/',
    'http://smaran-raut.local/about/',
    'http://smaran-raut.local/wholesale-cosmetics/',
    'http://smaran-raut.local/wholesale-cosmetics/product-range/',
    'http://smaran-raut.local/wholesale-cosmetics/koshi-province/',
    'http://smaran-raut.local/retail-cosmetics/',
    'http://smaran-raut.local/cosmetics/',
    'http://smaran-raut.local/cosmetics/makeup/',
    'http://smaran-raut.local/cosmetics/skincare/',
    'http://smaran-raut.local/cosmetics/haircare/',
    'http://smaran-raut.local/cosmetics-guide/',
    'http://smaran-raut.local/contact/'
]

errors = []
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            code = resp.status
            html = resp.read().decode('utf-8', errors='replace')
            if code != 200:
                errors.append(f"{url} returned status {code}")
            if 'â€¢' in html:
                errors.append(f"{url} contains â€¢")
            if 'Page Not Found' in html and '404' in html:
                errors.append(f"{url} is 404 Page Not Found")
            print(f"OK: {url} (status {code})")
    except Exception as e:
        errors.append(f"{url} error: {e}")

print("--- SUMMARY ---")
if errors:
    for err in errors:
        print("ERROR:", err)
else:
    print("ALL TESTED URLS RETURNED 200 WITHOUT ENCODING ISSUES OR 404!")
