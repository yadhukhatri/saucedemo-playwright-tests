import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // 1. The page (browser tab) this object works on
  readonly page: Page;

  // 2. Locators: WHERE the elements are
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  // 3. Constructor: runs when you write "new LoginPage(page)"
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // 4. Actions: WHAT a user can do on this page
  async goto() {
    await this.page.goto('/'); // '/' is added to baseURL in playwright.config.ts
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
