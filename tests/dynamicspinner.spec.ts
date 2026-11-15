import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';
import { DynamiccatologPage } from '../pages/DynamiccatologPage';
import {DynamicspinnerPage} from '../pages/DynamicspinnerPage';


test.describe('Dynamic side menu ', () => {

  // Runs before EACH test in this file: log in first
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');


  });
  test('Open the menu page and navigate to the Dynamic Spinner Page', async ({ page }) => {
    const menuPage = new MenuPage(page);

    // 1. DO the actions
    await menuPage.openMenu();
    await page.getByRole('button', { name: 'Dynamic Catalog' }).click();
    await page.getByText('Spinner', { exact: true }).click();
    // Heading check (most reliable)
    await expect(page.getByText('Dynamic Catalog - Spinner', { exact: true })).toBeVisible();
  });
});