import { Page, Locator } from '@playwright/test';

/**
 * Page Object para la página Checkboxes de the-internet.herokuapp.com.
 * checkbox 1: unchecked por defecto | checkbox 2: checked por defecto
 */
export class CheckboxesPage {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.locator('input[type="checkbox"]').first();
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }
}
