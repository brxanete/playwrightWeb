import { Page, Locator } from '@playwright/test';

/**
 * Page Object para la página Dynamic Content de the-internet.herokuapp.com.
 * Muestra filas con imagen + texto que cambian en cada recarga.
 * El link "click here" fuerza contenido estático (?with_content=static).
 */
export class DynamicContentPage {
  readonly page: Page;
  readonly title: Locator;
  readonly contentRows: Locator;
  readonly rowImages: Locator;
  readonly rowTexts: Locator;
  readonly staticContentLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h3');
    this.contentRows = page.locator('#content .row');
    this.rowImages = page.locator('#content .row .large-2 img');
    this.rowTexts = page.locator('#content .row .large-10');
    this.staticContentLink = page.getByRole('link', { name: 'click here' });
  }
}
