import urllib.request
import re

urls = [
    ('HOME', 'http://smaran-raut.local/'),
    ('WHOLESALE', 'http://smaran-raut.local/wholesale-cosmetics/'),
    ('RETAIL', 'http://smaran-raut.local/retail-cosmetics/')
]

for name, u in urls:
    html = urllib.request.urlopen(u).read().decode('utf-8')
    m = re.search(r'<section[^>]*class="hero-section-[^"]*"[^>]*>', html)
    if m:
        print(f"{name}: {m.group(0)}")
        # Verify the image URL inside background-image is accessible
        img_url = re.search(r'url\([\'"]?([^\'")]+)[\'"]?\)', m.group(0))
        if img_url:
            target = img_url.group(1)
            if target.startswith('/'):
                target = 'http://smaran-raut.local' + target
            res = urllib.request.urlopen(target)
            print(f"  -> Image status: {res.status} ({len(res.read())} bytes) at {target}")
    else:
        print(f"{name}: NOT FOUND")
