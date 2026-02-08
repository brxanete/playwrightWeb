import { expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../../screens/addRemoveElementsPage';

/**
 * Resuelve el ejercicio de la página Add/Remove Elements:
 * - Añade 3 elementos.
 * - Verifica que hay 3 botones Delete.
 * - Elimina 1 elemento.
 * - Verifica que quedan 2 botones Delete.
 */
export class AddRemoveElements {
  static async perform(addRemovePage: AddRemoveElementsPage): Promise<void> {
    await expect(addRemovePage.addElementButton).toBeVisible();

    for (let i = 0; i < 3; i++) {
      await addRemovePage.addElementButton.click();
    }
    await expect(addRemovePage.deleteButtons).toHaveCount(3);

    await addRemovePage.deleteButtons.first().click();
    await expect(addRemovePage.deleteButtons).toHaveCount(2);
  }
}
