import { test, expect } from '@playwright/test';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';

test('debería ir a la sección elegida fácilmente', async ({ page }) => {
  // Elige la sección: SECTIONS.X para autocompletado, o 'BROKEN_IMAGES' por clave
  await goToSection(page, SECTIONS.DROPDOWN);
});

test('debería ir a Dropdown y estar en la URL correcta', async ({ page }) => {
  await goToSection(page, SECTIONS.DROPDOWN);

  await expect(page).toHaveURL(/\/dropdown/);
});
