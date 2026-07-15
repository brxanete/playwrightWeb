import { test, expect } from './helpers/baseTest';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { VerifyDynamicContent } from '../tasks/actions/verifyDynamicContent';
import { DynamicContentPage } from '../screens/dynamicContentPage';

test('debería mostrar contenido dinámico con imágenes y textos', async ({ page }) => {
  await goToSection(page, SECTIONS.DYNAMIC_CONTENT);

  const dynamicContentPage = new DynamicContentPage(page);
  await expect(dynamicContentPage.title).toBeVisible();
  await expect(dynamicContentPage.contentRows.first()).toBeVisible();
  await expect(dynamicContentPage.rowImages.first()).toBeVisible();
  await expect(dynamicContentPage.rowTexts.first()).not.toBeEmpty();
});

test('debería cambiar el contenido al recargar la página', async ({ page }) => {
  await goToSection(page, SECTIONS.DYNAMIC_CONTENT);

  const dynamicContentPage = new DynamicContentPage(page);
  const textsBefore = await dynamicContentPage.rowTexts.allTextContents();

  await page.reload();
  await expect(dynamicContentPage.contentRows.first()).toBeVisible();

  const textsAfter = await dynamicContentPage.rowTexts.allTextContents();
  // El contenido dinámico debería cambiar en al menos una fila
  const changed = textsBefore.some((text, i) => text !== textsAfter[i]);
  expect(changed).toBeTruthy();
});

test('debería forzar contenido estático al hacer clic en "click here"', async ({ page }) => {
  await goToSection(page, SECTIONS.DYNAMIC_CONTENT);

  const dynamicContentPage = new DynamicContentPage(page);
  await dynamicContentPage.staticContentLink.click();

  await expect(page).toHaveURL(/with_content=static/);
  await expect(dynamicContentPage.contentRows.first()).toBeVisible();
});

test('debería navegar a modo estático y verificar que se muestra contenido', async ({ page }) => {
  await goToSection(page, SECTIONS.DYNAMIC_CONTENT);

  const dynamicContentPage = new DynamicContentPage(page);
  await dynamicContentPage.staticContentLink.click();
  await expect(page).toHaveURL(/with_content=static/);

  // Verificar que hay filas de contenido visibles en modo estático
  await expect(dynamicContentPage.contentRows.first()).toBeVisible();
  await expect(dynamicContentPage.rowImages.first()).toBeVisible();
  await expect(dynamicContentPage.rowTexts.first()).not.toBeEmpty();

  // Verificar que al menos algunas filas tienen contenido estable (no vacío)
  const texts = await dynamicContentPage.rowTexts.allTextContents();
  expect(texts.length).toBeGreaterThan(0);
  texts.forEach((text) => {
    expect(text.trim().length).toBeGreaterThan(0);
  });
});

test('debería verificar el flujo completo de Dynamic Content', async ({ page }) => {
  await goToSection(page, SECTIONS.DYNAMIC_CONTENT);

  const dynamicContentPage = new DynamicContentPage(page);
  await VerifyDynamicContent.perform(dynamicContentPage);
});
