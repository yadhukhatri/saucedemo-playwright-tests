import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';

test.describe('Side menu', () => {

  // Runs before EACH test in this file: log in first
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('About link opens the Sauce Labs website', async ({ page }) => {
    const menuPage = new MenuPage(page);

    // 1. DO the actions
    await menuPage.openMenu();
    await menuPage.clickAbout();

    // 2. CHECK the result
    await expect(page).toHaveURL(/saucelabs\.com/);

  
  });
});
