# Saucedemo Starter – Playwright + TypeScript (Page Object Model)

A minimal starting point: **only the login page is done**. You build the rest.

## Setup

```bash
npm install
npx playwright install chromium
npm run test:ui
```

You should see **3 passing tests**.

## Structure

```
pages/LoginPage.ts      ← page object: locators + actions (HOW)
tests/login.spec.ts     ← tests: steps + checks (WHAT)
playwright.config.ts    ← settings (baseURL, browser, reports)
```

## Your to-do list (build these yourself)

Follow the same pattern as `LoginPage.ts` each time: locators in the constructor, actions as methods, `expect` only in tests.
Find locators with right-click → Inspect → look for `data-test="..."`.

- [ ] **Login**: add a test for empty username (`Username is required`)
- [ ] **pages/InventoryPage.ts** – title, product list, `addToCart(name)`, sort dropdown, cart icon
- [ ] **tests/inventory.spec.ts** – 6 products shown, sorting works
- [ ] **pages/CartPage.ts** – item names, remove item, checkout button
- [ ] **tests/cart.spec.ts** – add/remove products, cart badge count
- [ ] **pages/CheckoutPage.ts** – first name, last name, postal code, continue, finish
- [ ] **tests/checkout.spec.ts** – full purchase ends with "Thank you for your order!"

Users (password `secret_sauce`): `standard_user`, `locked_out_user`, `problem_user`, `performance_glitch_user`, `error_user`, `visual_user`

Run one file: `npx playwright test tests/login.spec.ts --headed`
