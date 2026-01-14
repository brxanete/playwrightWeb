import { test } from '@playwright/test';
import { NavigateToPistaPista } from '../tasks/navigateToPistaPista';
import { ClickHomeButton } from '../tasks/clickHomeButton';
import { WaitForTimeout } from '../utils/awaits/waitForTimeout';

test('debería ingresar a Pista Pista y hacer click en TIENDA', async ({ page }) => {
  const homePage = await NavigateToPistaPista.perform(page);
  await ClickHomeButton.perform(homePage);
  await WaitForTimeout.perform(page, 5000);                     
});

