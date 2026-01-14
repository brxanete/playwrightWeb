import { Page } from '@playwright/test';
import { HomePage } from '../screens/homePage';

export class NavigateToPistaPista {
  static async perform(page: Page): Promise<HomePage> {
    await page.goto('https://pistapista.com.co/');
    await page.waitForLoadState('networkidle');
    return new HomePage(page);
  }
}
