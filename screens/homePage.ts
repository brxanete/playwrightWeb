import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly contextMenuLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contextMenuLink = page.getByRole('link', { name: 'Context Menu' });
  }

  /**
   * Locator del enlace de una sección por su nombre visible.
   * Centraliza la estrategia de localización para todas las secciones.
   */
  getSectionLink(sectionName: string): Locator {
    return this.page.getByRole('link', { name: sectionName });
  }
}
