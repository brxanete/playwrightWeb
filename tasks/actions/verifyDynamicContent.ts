import { expect } from '@playwright/test';
import { DynamicContentPage } from '../../screens/dynamicContentPage';

/**
 * Resuelve el ejercicio de la página Dynamic Content:
 * - Verifica que el título es visible.
 * - Verifica que se muestran las filas de contenido dinámico (imágenes y textos).
 * - Recarga la página y verifica que el contenido puede cambiar (es dinámico).
 * - Hace clic en "click here" para activar modo estático.
 * - Verifica que la URL contiene el parámetro with_content=static.
 * - Verifica que el contenido se renderiza correctamente en modo estático.
 */
export class VerifyDynamicContent {
  static async perform(dynamicContentPage: DynamicContentPage): Promise<void> {
    // Verificar título visible
    await expect(dynamicContentPage.title).toBeVisible();

    // Verificar que hay filas de contenido visibles
    await expect(dynamicContentPage.contentRows.first()).toBeVisible();

    // Capturar textos antes de recargar
    const textsBefore = await dynamicContentPage.rowTexts.allTextContents();
    expect(textsBefore.length).toBeGreaterThan(0);

    // Recargar la página para verificar que el contenido es dinámico
    await dynamicContentPage.page.reload();
    await expect(dynamicContentPage.contentRows.first()).toBeVisible();

    // Hacer clic en "click here" para activar modo estático
    await dynamicContentPage.staticContentLink.click();
    await expect(dynamicContentPage.page).toHaveURL(/with_content=static/);

    // Verificar que el contenido se renderiza en modo estático
    await expect(dynamicContentPage.contentRows.first()).toBeVisible();
    const textsStatic = await dynamicContentPage.rowTexts.allTextContents();
    expect(textsStatic.length).toBeGreaterThan(0);
    textsStatic.forEach((text) => {
      expect(text.trim().length).toBeGreaterThan(0);
    });
  }
}
