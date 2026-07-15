import { test, expect } from './helpers/baseTest';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { VerifyAbTestPage } from '../tasks/actions/verifyAbTestPage';
import { AbTestPage } from '../screens/abTestPage';

test('debería cargar la página A/B Testing y mostrar título y contenido válidos', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.AB_TESTING);

  const abTestPage = new AbTestPage(page);
  await VerifyAbTestPage.perform(abTestPage);
});

test('debería estar en la URL correcta al abrir A/B Testing', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.AB_TESTING);

  await expect(page).toHaveURL(/\/abtest/);
});

test('debería tener título de página que contenga The Internet', async ({
  page,
}) => {
  await goToSection(page, SECTIONS.AB_TESTING);

  await expect(page).toHaveTitle(/The Internet/);
});
