import re
import os

theme_dir = 'C:/Users/BN/Local Sites/smaran-raut/app/public/wp-content/themes/baba-cosmetics'
for fname in ['front-page.php', 'page-wholesale.php', 'page-retail.php', 'page-about.php']:
    path = os.path.join(theme_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"=== {fname} ===")
    matches = re.findall(r'<div class="hero-cta-group">(.*?)</div>', content, re.DOTALL)
    for m in matches:
        print(m.strip())
