# Baba Cosmetics Website

Official website and WordPress theme for Baba Cosmetics, located in Janta Galli, Itahari, Nepal.

## Project Structure

- `assets/`: Global CSS styles, icons, and image assets.
- `data/` and `data-modules/`: Content definitions and route datasets.
- `wordpress-theme/baba-cosmetics/`: Custom WordPress theme templates and styles.
- `build.js`: Static site pre-rendering script.
- `build-data.js`: Data compilation script.
- `server.py`: Local development HTTP server.
- `test-suite.js`: QA test runner.
- `audit-branding.js`: Verification audit script.

## Getting Started

### Local Development Server

Run the local server using Python:

```bash
python server.py 8089
```

Open `http://localhost:8089` in your web browser.

### Rebuilding Static Pages

To regenerate static routes:

```bash
node build-data.js
node build.js
```

### Running Tests

Execute the automated test suites:

```bash
node test-suite.js
node audit-branding.js
node test-algorithmic-linking.js
```

## WordPress Theme

The WordPress theme files are located in `wordpress-theme/baba-cosmetics/`.
Copy this directory into your WordPress installation under `wp-content/themes/baba-cosmetics` and activate it from the WordPress admin panel.
