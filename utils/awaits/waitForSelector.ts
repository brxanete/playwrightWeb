import { Page, Locator } from '@playwright/test';

export class WaitForSelector {
  private static readonly DEFAULT_TIMEOUT = 10000;

  static async bySelector(page: Page, selector: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<Locator> {
    await page.waitForSelector(selector, { timeout, state: 'visible' });
    return page.locator(selector);
  }

  static async bySelectorHidden(page: Page, selector: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<Locator> {
    await page.waitForSelector(selector, { timeout, state: 'hidden' });
    return page.locator(selector);
  }

  static async bySelectorAttached(page: Page, selector: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<Locator> {
    await page.waitForSelector(selector, { timeout, state: 'attached' });
    return page.locator(selector);
  }

  static async bySelectorDetached(page: Page, selector: string, timeout: number = this.DEFAULT_TIMEOUT): Promise<Locator> {
    await page.waitForSelector(selector, { timeout, state: 'detached' });
    return page.locator(selector);
  }
}
