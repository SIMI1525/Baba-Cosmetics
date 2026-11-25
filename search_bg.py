import os
import re

for base in ['C:/Users/BN/Local Sites/smaran-raut/app/public/wp-content/themes/baba-cosmetics', 'C:/Users/BN/.gemini/antigravity/scratch/baba-cosmetics']:
    for f in os.listdir(base):
        p = os.path.join(base, f)
        if os.path.isfile(p) and f.endswith(('.css', '.html', '.php', '.js')):
            try:
                c = open(p, 'r', encoding='utf-8', errors='ignore').read()
                if 'hero-cosmetics-bg.jpg' in c:
                    urls = re.findall(r'[^\s"\'()]*hero-cosmetics-bg\.jpg[^\s"\')]*', c)
                    print(f"{p}: {urls}")
            except Exception:
                pass
