import { Page } from '@playwright/test';
import { HomePage } from '../../screens/homePage';

export class NavigateToTheInternet {
  static async perform(page: Page): Promise<HomePage> {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState('networkidle');
    return new HomePage(page);
  }
}
