// utils/screenshot.ts

import { test, Page } from '@playwright/test';

export class Screenshot {
  /**
   * Toma screenshot y lo adjunta al reporte Allure
   * Usa internamente test.info() para el attach.
   *
   * @param name Nombre para mostrar en reporte.
   * @param page Instancia de la página Playwright.
   */
  static async takeAndAttach(name: string, page: Page) {
    const screenshotBuffer = await page.screenshot();
    test.info().attach(name, {
      body: screenshotBuffer,
      contentType: 'image/png',
    });
  }
}
