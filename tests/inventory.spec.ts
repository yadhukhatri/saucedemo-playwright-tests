import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';

test.describe('Products page', () => {

    // Runs before EACH test in this file: log in first
    test.beforeEach(async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login('standard_user', 'secret_sauce');
    });
    test('shows the Products title', async ({ page }) => {
      const inventoryPage = new InventoryPage(page);
      await expect(inventoryPage.title).toHaveText('Products');
    });
    test('shows 6 products', async ({ page }) => {
      const inventoryPage = new InventoryPage(page);
      await expect(inventoryPage.productItems).toHaveCount(6);
    });
    test('adding the backpack shows 1 in the cart badge', async ({ page }) => {
      const inventoryPage = new InventoryPage(page);
      await inventoryPage.addBackpackToCart();
      await expect(inventoryPage.cartBadge).toHaveText('1');
    });
    // TODO 4: write a test that adds the backpack AND the bike light
  //         and checks the badge says '2'
  test('adding the bikelight and backpack shows 2 in the cart badge', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBikeLightToCart();
    await inventoryPage.addBackpackToCart(); 
    await expect(inventoryPage.cartBadge).toHaveText('2');
  });

  // TODO 5: write a test that calls sortBy('lohi')
  //         and checks the first price is '$7.99'
  //         Hint: expect(inventoryPage.productPrices.first()).toHaveText('$7.99')
  test('sortBy lohi and check the first price to be $7.99', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
      // 1. DO the action
  await inventoryPage.sortBy('lohi');
  await expect(inventoryPage.productPrices.first()).toHaveText('$7.99');

  });
  // TODO 6: write a test that calls openCart()
  //         and checks the URL contains 'cart.html'
  test('openCart and check the URL contains cart.html', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.openCart();   
  await expect(page).toHaveURL(/cart\.html/);
});

  });