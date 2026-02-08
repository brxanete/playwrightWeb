import { expect } from '@playwright/test';
import { CheckboxesPage } from '../../screens/checkboxesPage';

/**
 * Resuelve el ejercicio de la página Checkboxes:
 * - Marca el checkbox 1 (desmarcado por defecto).
 * - Desmarca el checkbox 2 (marcado por defecto).
 */
export class CheckCheckboxes {
  static async perform(checkboxesPage: CheckboxesPage): Promise<void> {
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();

    await checkboxesPage.checkbox1.check();
    await checkboxesPage.checkbox2.uncheck();

    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  }
}
