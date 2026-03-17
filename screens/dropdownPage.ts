import { Page, Locator } from '@playwright/test';

/**
 * Page Object para la página Dropdown de the-internet.herokuapp.com.
 * El select tiene id="dropdown" con Option 1 y Option 2.
 */
export class DropdownPage {
  readonly page: Page;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }
}
