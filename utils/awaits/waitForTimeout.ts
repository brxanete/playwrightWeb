import { Page } from '@playwright/test';

export class WaitForTimeout {
  static async perform(page: Page, milliseconds: number): Promise<void> {
    await page.waitForTimeout(milliseconds);
  }
}
