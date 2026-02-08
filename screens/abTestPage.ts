import { Page, Locator } from '@playwright/test';

/**
 * Page Object para la página A/B Testing de the-internet.herokuapp.com.
 * El título puede ser "A/B Test" o "No A/B Test" según la variante.
 */
export class AbTestPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly bodyText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 3 });
    this.bodyText = page.locator('.example p');
  }
}
