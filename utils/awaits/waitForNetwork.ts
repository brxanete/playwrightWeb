import { Page } from '@playwright/test';

export class WaitForNetwork {
  private static readonly DEFAULT_TIMEOUT = 30000;

  static async request(page: Page, url: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForRequest(
      (request) => {
        const requestUrl = request.url();
        if (typeof url === 'string') {
          return requestUrl.includes(url);
        }
        return url.test(requestUrl);
      },
      { timeout }
    );
  }

  static async response(page: Page, url: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForResponse(
      (response) => {
        const responseUrl = response.url();
        if (typeof url === 'string') {
          return responseUrl.includes(url);
        }
        return url.test(responseUrl);
      },
      { timeout }
    );
  }

  static async idle(page: Page, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await page.waitForLoadState('networkidle', { timeout });
  }
}
