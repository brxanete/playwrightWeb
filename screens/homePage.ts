import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly agendaButton: Locator;
  readonly storeButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.agendaButton = page.getByRole('link', { name: 'COMPRALOS AQUÍ' });
    this.storeButton =   page.getByRole('link', { name: 'TIENDA' });
    
  }
}
