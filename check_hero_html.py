with open('C:/Users/BN/Local Sites/smaran-raut/app/public/wp-content/themes/baba-cosmetics/style.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'hero-section-(?:home|wholesale|retail)', text)]
for pos in matches:
    print(text[max(0, pos-40):pos+250])
    print('='*50)
