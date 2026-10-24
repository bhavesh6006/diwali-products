# Diwali Products

A one-page React and Vite storefront for a Diwali product collection.

## Run locally

```sh
npm install
npm run dev
```

## Add products

1. Put product images in `src/assets/products/`. Supported formats: PNG, JPG, JPEG, WebP, and AVIF.
2. Add one object per product to `src/data/products.json`. Set `image` to the exact image filename, and include its name and price:

```json
[
  { "name": "Brass Diya", "image": "brass-diya.jpg", "price": 499 },
  { "name": "Rangoli Set", "image": "rangoli-set.webp", "price": 799 }
]
```

The component loops over this JSON list and displays each matching image and price. Products without a price show “Price on request.”

## Set WhatsApp contacts

Edit `src/data/store.js`. Replace each display value with the number shown to customers and each `number` value with the full WhatsApp number using digits only, including the country code. For example, `919876543210`. Clicking a contact then opens its WhatsApp chat.

## Checks

```sh
npm run lint
npm run build
```

## Deploy to GitHub Pages

Vite is configured for this repository's project Pages URL: `https://bhavesh6006.github.io/diwali-products/`.

1. Push the project to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. Open the **Actions** tab and confirm the `Deploy React Vite to GitHub Pages` workflow completes. Future pushes to `main` deploy automatically.

The deployed site URL is separate from the repository URL. The source code is at `https://github.com/bhavesh6006/diwali-products`; the live site is at `https://bhavesh6006.github.io/diwali-products/`.
