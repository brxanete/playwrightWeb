import { Page, Locator } from '@playwright/test';

/**
 * Page Object para la página Add/Remove Elements de the-internet.herokuapp.com.
 * Botón "Add Element" añade botones "Delete"; cada "Delete" quita un elemento.
 */
export class AddRemoveElementsPage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.locator('#elements button.added-manually');
  }
}
