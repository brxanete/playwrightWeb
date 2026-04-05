import { expect } from '@playwright/test';
import { ChallengingDomPage } from '../../screens/challengingDomPage';

/**
 * Verifica la estructura clave de la página Challenging DOM:
 * - 3 botones de acción en la parte superior.
 * - Cabeceras correctas en la tabla.
 * - 10 filas de datos.
 * - Cada fila tiene enlaces "edit" y "delete".
 */
export class VerifyChallengingDom {
  static async perform(challengingDomPage: ChallengingDomPage): Promise<void> {
    await expect(challengingDomPage.actionButtons).toHaveCount(3);

    await expect(challengingDomPage.headerCells).toHaveText([
      'Lorem',
      'Ipsum',
      'Dolor',
      'Sit',
      'Amet',
      'Diceret',
      'Action',
    ]);

    await expect(challengingDomPage.rows).toHaveCount(10);
    await expect(challengingDomPage.editLinks).toHaveCount(10);
    await expect(challengingDomPage.deleteLinks).toHaveCount(10);
  }
}

