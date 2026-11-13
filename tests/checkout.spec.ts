import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout page', () => {
    
 test.beforeEach(async ({ page }) => {
     const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    });
 
  test('clicking Checkout opens the information page', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
  });
   test('shows an error when first name is missing', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('', 'Doe', '12345');
    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');
  });
  test('overview shows the correct total for the backpack', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('John', 'Doe', '12345');
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(checkoutPage.subtotalLabel).toHaveText('Item total: $29.99');
    await expect(checkoutPage.taxLabel).toHaveText('Tax: $2.40');
    await expect(checkoutPage.totalLabel).toHaveText('Total: $32.39');
  });

  test('completes the order', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('John', 'Doe', '12345');
    await checkoutPage.finish();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('Back Home returns to the products page', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('John', 'Doe', '12345');
    await checkoutPage.finish();
    await checkoutPage.backHome();
    await expect(page).toHaveURL(/inventory\.html/);
  });

});

