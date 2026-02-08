import { expect } from '@playwright/test';
import { AbTestPage } from '../../screens/abTestPage';

/**
 * Verifica que la página A/B Test se cargó correctamente:
 * - El heading es una de las variantes ("A/B Test" o "No A/B Test").
 * - El texto explicativo está visible.
 */
export class VerifyAbTestPage {
  static async perform(abTestPage: AbTestPage): Promise<void> {
    await expect(abTestPage.heading).toBeVisible();
    await expect(abTestPage.heading).toHaveText(/A\/B Test|No A\/B Test/);

    await expect(abTestPage.bodyText).toBeVisible();
    await expect(abTestPage.bodyText).toContainText(
      /split testing|simultaneously test|desired outcome/i
    );
  }
}
