import { Page, Locator } from '@playwright/test';

export class MenuPage {
  // 1. The page (browser tab) this object works on
  readonly page: Page;

  // 2. Locators: WHERE the elements are
  readonly hamburgerButton: Locator;
  readonly aboutLink: Locator;


  // 3. Constructor: runs when you write "new MenuPage(page)"
  constructor(page: Page) {
    this.page = page;
    this.hamburgerButton = page.locator('#react-burger-menu-btn');
    this.aboutLink = page.locator('[data-test="about-sidebar-link"]');
  }

  // 4. Actions: WHAT a user can do with the side menu
  async openMenu() {
    await this.hamburgerButton.click();
  }

  async clickAbout() {
    await this.aboutLink.click();


  }
}
