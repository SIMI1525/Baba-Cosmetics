import json

path = 'C:/Users/BN/Local Sites/smaran-raut/app/public/wp-content/themes/baba-cosmetics/baba-pages-manifest.json'
with open(path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

# Update home
if '/' in manifest:
    h = manifest['/']['heroHtml']
    h = h.replace(
        '<section class="hero-section-home">', 
        '<section class="hero-section-home" style="background-image: linear-gradient(rgba(14, 15, 18, 0.42), rgba(20, 22, 28, 0.62)), url(\'/wp-content/themes/baba-cosmetics/assets/images/hero-cosmetics-bg.jpg\');">'
    )
    manifest['/']['heroHtml'] = h

# Update wholesale
if '/wholesale-cosmetics/' in manifest:
    h = manifest['/wholesale-cosmetics/']['heroHtml']
    h = h.replace(
        '<section class="hero-section-wholesale">', 
        '<section class="hero-section-wholesale" style="background-image: linear-gradient(rgba(14, 15, 18, 0.40), rgba(20, 22, 28, 0.60)), url(\'/wp-content/themes/baba-cosmetics/assets/images/hero-wholesale-bg.jpg\');">'
    )
    manifest['/wholesale-cosmetics/']['heroHtml'] = h

# Update retail
if '/retail-cosmetics/' in manifest:
    h = manifest['/retail-cosmetics/']['heroHtml']
    h = h.replace(
        '<section class="hero-section-retail">', 
        '<section class="hero-section-retail" style="background-image: linear-gradient(rgba(14, 15, 18, 0.38), rgba(20, 22, 28, 0.58)), url(\'/wp-content/themes/baba-cosmetics/assets/images/hero-retail-bg.jpg\');">'
    )
    manifest['/retail-cosmetics/']['heroHtml'] = h

with open(path, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)

print('Successfully updated heroHtml in baba-pages-manifest.json')
