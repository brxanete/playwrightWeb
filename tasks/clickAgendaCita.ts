import { expect } from '@playwright/test';
import { HomePage } from '../screens/homePage';

export class ClickAgendaCita {
  static async perform(homePage: HomePage): Promise<void> {
    await expect(homePage.agendaButton).toBeVisible();
    await homePage.agendaButton.click();
  }
}
