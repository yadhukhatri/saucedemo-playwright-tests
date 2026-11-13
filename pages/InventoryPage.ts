import { Page, Locator } from '@playwright/test';

    export class InventoryPage {
        // 1. The page (browser tab) this object works on
        readonly page: Page;
// ① DECLARE the locators here (name + type)
    readonly title: Locator;
    readonly productItems: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly sortDropdown: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.productItems = page.locator('[data-test="inventory-item"]');
        this.productNames = page.locator('[data-test="inventory-item-name"]');
        this.productPrices = page.locator('[data-test="inventory-item-price"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
      }
    
      // Example: clicks "Add to cart" for the backpack
      async addBackpackToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      }
    
      // TODO 1: add the bike light to the cart
      // Hint: Inspect the button. Its data-test is "add-to-cart-sauce-labs-bike-light"
      async addBikeLightToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      }
    
      // TODO 2: choose a sort option, e.g. 'lohi' = price low to high
      // Hint: use this.sortDropdown.selectOption(option)
      async sortBy(option: string) {
        await this.sortDropdown.selectOption(option);
      }
      
    
      // TODO 3: click the cart icon
      async openCart() {
        await this.cartIcon.click();
      }
    }