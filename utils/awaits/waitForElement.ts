import { Page, Locator, expect } from '@playwright/test';

export class WaitForElement {
  private static readonly DEFAULT_TIMEOUT = 10000;

  static async toBeVisible(locator: Locator, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  static async toBeHidden(locator: Locator, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toBeHidden({ timeout });
  }

  static async toBeEnabled(locator: Locator, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toBeEnabled({ timeout });
  }

  static async toBeDisabled(locator: Locator, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toBeDisabled({ timeout });
  }

  static async toHaveText(locator: Locator, text: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toHaveText(text, { timeout });
  }

  static async toContainText(locator: Locator, text: string | RegExp, timeout: number = this.DEFAULT_TIMEOUT): Promise<void> {
    await expect(locator).toContainText(text, { timeout });
  }
}
