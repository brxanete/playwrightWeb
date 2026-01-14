import { expect } from '@playwright/test';
import { HomePage } from '../screens/homePage';

export class ClickHomeButton {
  static async perform(homePage: HomePage): Promise<void> {
    await expect(homePage.storeButton).toBeVisible();
    await homePage.storeButton.click();
  }
}
