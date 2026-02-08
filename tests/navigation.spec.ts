import { test, expect } from '@playwright/test';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { CheckboxesPage } from '../screens/checkboxesPage';
import { AddRemoveElementsPage } from '../screens/addRemoveElementsPage';

test('debería navegar a Checkboxes, verificar título, y luego a Add/Remove Elements y verificar botón', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.CHECKBOXES);
  const checkboxesPage = new CheckboxesPage(page);
  await expect(checkboxesPage.checkbox1).toBeVisible();
  await expect(checkboxesPage.checkbox2).toBeVisible();

  await goToSection(page, SECTIONS.ADD_REMOVE_ELEMENTS);
  const addRemovePage = new AddRemoveElementsPage(page);
  await expect(addRemovePage.addElementButton).toBeVisible();
  await expect(addRemovePage.deleteButtons).toHaveCount(0);
});

test('debería navegar a A/B Testing y luego a Checkboxes en la misma sesión', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.AB_TESTING);
  await expect(page).toHaveURL(/\/abtest/);

  await goToSection(page, SECTIONS.CHECKBOXES);
  await expect(page).toHaveURL(/\/checkboxes/);
});
