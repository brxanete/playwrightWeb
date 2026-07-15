import { test, expect } from './helpers/baseTest';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { CheckCheckboxes } from '../tasks/actions/checkCheckboxes';
import { CheckboxesPage } from '../screens/checkboxesPage';

test('debería resolver el ejercicio de checkboxes: marcar checkbox1 y desmarcar checkbox2', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.CHECKBOXES);

  const checkboxesPage = new CheckboxesPage(page);
  await CheckCheckboxes.perform(checkboxesPage);
});

test('debería poder revertir el estado: desmarcar checkbox1 y marcar checkbox2', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.CHECKBOXES);

  const checkboxesPage = new CheckboxesPage(page);
  await CheckCheckboxes.perform(checkboxesPage);

  await checkboxesPage.checkbox1.uncheck();
  await checkboxesPage.checkbox2.check();

  await expect(checkboxesPage.checkbox1).not.toBeChecked();
  await expect(checkboxesPage.checkbox2).toBeChecked();
});

test('debería mostrar estado inicial: checkbox1 desmarcado y checkbox2 marcado', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.CHECKBOXES);

  const checkboxesPage = new CheckboxesPage(page);
  await expect(checkboxesPage.checkbox1).not.toBeChecked();
  await expect(checkboxesPage.checkbox2).toBeChecked();
});
