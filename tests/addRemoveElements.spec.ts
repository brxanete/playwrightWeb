import { test, expect } from './helpers/baseTest';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { AddRemoveElements } from '../tasks/actions/addRemoveElements';
import { AddRemoveElementsPage } from '../screens/addRemoveElementsPage';

test('debería añadir 3 elementos, verificar y eliminar uno', async ({ page }) => {
  await goToSection(page, SECTIONS.ADD_REMOVE_ELEMENTS);

  const addRemovePage = new AddRemoveElementsPage(page);
  await AddRemoveElements.perform(addRemovePage);
});

test('debería mostrar cero botones Delete al cargar la página', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.ADD_REMOVE_ELEMENTS);

  const addRemovePage = new AddRemoveElementsPage(page);
  await expect(addRemovePage.addElementButton).toBeVisible();
  await expect(addRemovePage.deleteButtons).toHaveCount(0);
});

test('debería añadir 5 elementos y eliminarlos todos hasta dejar cero', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.ADD_REMOVE_ELEMENTS);

  const addRemovePage = new AddRemoveElementsPage(page);
  for (let i = 0; i < 5; i++) {
    await addRemovePage.addElementButton.click();
  }
  await expect(addRemovePage.deleteButtons).toHaveCount(5);

  const count = await addRemovePage.deleteButtons.count();
  for (let i = 0; i < count; i++) {
    await addRemovePage.deleteButtons.first().click();
  }
  await expect(addRemovePage.deleteButtons).toHaveCount(0);
});

test('debería añadir un solo elemento y verificar que aparece exactamente un botón Delete', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.ADD_REMOVE_ELEMENTS);

  const addRemovePage = new AddRemoveElementsPage(page);
  await addRemovePage.addElementButton.click();

  await expect(addRemovePage.deleteButtons).toHaveCount(1);
  await expect(addRemovePage.deleteButtons).toHaveText('Delete');
});
