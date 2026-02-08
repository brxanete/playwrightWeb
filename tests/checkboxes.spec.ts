git import { test } from '@playwright/test';
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
