import { expect } from '@playwright/test';
import { NestedFramesPage } from '../../screens/nestedFramesPage';

/**
 * Resuelve el ejercicio de la página Nested Frames:
 * - Verifica que el frame izquierdo contiene "LEFT".
 * - Verifica que el frame derecho contiene "RIGHT".
 * - Verifica que el frame inferior contiene "BOTTOM".
 * - Verifica que el frame middle contiene "MIDDLE".
 */
export class VerifyNestedFrames {
  static async perform(nestedFramesPage: NestedFramesPage): Promise<void> {
    await expect(nestedFramesPage.frameLeft.locator('body')).toContainText('LEFT');
    await expect(nestedFramesPage.frameRight.locator('body')).toContainText('RIGHT');
    await expect(nestedFramesPage.frameBottom.locator('body')).toContainText('BOTTOM');
    await expect(nestedFramesPage.frameMiddle.locator('body')).toContainText('MIDDLE');
  }
}
