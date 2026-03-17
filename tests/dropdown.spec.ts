import { test, expect } from '@playwright/test';
import { goToSection } from './helpers/goToSection';
import { SECTIONS } from '../constants/sections';
import { DropdownPage } from '../screens/dropdownPage';
import { SelectDropdownOption } from '../tasks/actions/selectDropdownOption';

test('debería mostrar el estado inicial sin opción seleccionada', async ({ page }) => {
  await goToSection(page, SECTIONS.DROPDOWN);

  const dropdownPage = new DropdownPage(page);
  await expect(dropdownPage.dropdown).toHaveValue('');
});

test('debería seleccionar Option 1', async ({ page }) => {
  await goToSection(page, SECTIONS.DROPDOWN);

  const dropdownPage = new DropdownPage(page);
  await SelectDropdownOption.perform(dropdownPage, 'Option 1');
});

test('debería seleccionar Option 2', async ({ page }) => {
  await goToSection(page, SECTIONS.DROPDOWN);

  const dropdownPage = new DropdownPage(page);
  await SelectDropdownOption.perform(dropdownPage, 'Option 2');
});

test('debería poder cambiar de Option 1 a Option 2', async ({ page }) => {
  await goToSection(page, SECTIONS.DROPDOWN);

  const dropdownPage = new DropdownPage(page);
  await SelectDropdownOption.perform(dropdownPage, 'Option 1');
  await SelectDropdownOption.perform(dropdownPage, 'Option 2');

  await expect(dropdownPage.dropdown).toHaveValue('2');
});
