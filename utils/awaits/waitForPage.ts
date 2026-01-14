import { Page } from '@playwright/test';

export class WaitForPage {
  private static readonly DEFAULT_TIMEOUT = 30000;

  static async loadState(page: Page, state: 'load' | 'domcontentloaded' | 'networkidle' = 'networkidle', timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForLoadState(state, { timeout });
  }

  static async url(page: Page, url: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForURL(url, { timeout });
  }

  static async navigation(page: Page, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForNavigation({ timeout });
  }

  static async title(page: Page, title: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForFunction(
      (expectedTitle) => {
        const currentTitle = document.title;
        if (typeof expectedTitle === 'string') {
          return currentTitle.includes(expectedTitle);
        }
        return expectedTitle.test(currentTitle);
      },
      title,
      { timeout }
    );
  }
}
