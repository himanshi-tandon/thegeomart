# Demo E-Commerce Site (Data Layer Example)

This is a minimal static demo site showing a simple **data layer implementation** for analytics or tag management (e.g., Adobe Launch, GTM).

## Structure
- `index.html` — Home page
- `product.html` — Product detail page with "Add to Cart" event
- `js/dataLayer.js` — Shared JS and mock Adobe Web SDK function

## How to Run Locally
1. Download and unzip this project.
2. Open the folder in VS Code or terminal.
3. Start a local server:
   ```bash
   npx http-server .
   ```
   or just open `index.html` in your browser directly.
4. Open DevTools console to view `digitalData` logs.
