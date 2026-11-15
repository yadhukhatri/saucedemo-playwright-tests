import { Page, Locator } from '@playwright/test';

export class DynamicspinnerPage {
  // 1. The page (browser tab) this object works on
  readonly page: Page;

   // 2. Locators: WHERE the elements are
   readonly hamburgerButton: Locator;
   

   // 3. Constructor: runs when you write "new MenuPage(page)"
  constructor(page: Page) {
    this.page = page;
    this.hamburgerButton = page.locator('#react-burger-menu-btn');


  }
};