import { expect } from '@playwright/test';
import { HomePage } from '../screens/homePage';

export class ClickContextMenu {
  static async perform(homePage: HomePage): Promise<void> {
    await expect(homePage.contextMenuLink).toBeVisible();
    await homePage.contextMenuLink.click();
  }
}
