import { test, expect } from '@playwright/test';
import { obtenerDatosDesdeExcel } from '../utils/excelReader';

const datosDePrueba = obtenerDatosDesdeExcel();


test('title validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const bannerLogo = page.locator('img[alt="Facebook"]');

  await expect(bannerLogo).toBeAttached();
  await expect(bannerLogo).toBeVisible();
  await expect(bannerLogo).toHaveAttribute('alt', 'Facebook');


});

test('info text validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const infoText = page.locator('//div/h2[@class="_8eso"]')
  await expect(infoText).toHaveText('Connect with friends and the world around you on Facebook.');
  
});

test.describe('username input validation', () => {
  datosDePrueba.forEach(({ Correo }) => {
    test(`Correct username input with user: ${Correo}`, async ({ page }) => {
      await page.goto('https://www.facebook.com/');
    
      const userInput = page.locator('//div/input[@name="email"]');

      await expect(userInput).toBeAttached
      await expect(userInput).toBeVisible();
      await expect(userInput).toBeEmpty();
      await expect(userInput).toBeEditable();
      await userInput.fill(Correo);
 
    });
  });
});


test.describe('password input validation', () => {
  datosDePrueba.forEach(({ Clave }) => {
    test(`Correct username input with pass: ${Clave}`, async ({ page }) => {
      await page.goto('https://www.facebook.com/');
    
      const passInput = page.locator('//div/input[@name="pass"]');
     
      await expect(passInput).toBeAttached
      await expect(passInput).toBeVisible();
      await expect(passInput).toBeEmpty();
      await expect(passInput).toBeEditable();
      await passInput.fill(Clave);
 
    });
  });
});

test('login button validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  const loginButton = page.locator('//div/button[@name="login"]');

  await expect(loginButton).toBeAttached
  await expect(loginButton).toBeVisible();
});



test.describe('sign in valdation', () => {
  datosDePrueba.forEach(({ Correo, Clave }) => {
    test(`Correct login with user: ${Correo}`, async ({ page }) => {
      await page.goto('https://www.facebook.com/');
    
      const userInput = page.locator('//div/input[@name="email"]');
      const passwordInput = page.locator('//div/input[@name="pass"]');
      const loginButton = page.locator('//div/button[@name="login"]');
      const banner = page.locator('//div[@class="xg87l8a x1iymm2a"]');

      await userInput.fill(Correo);
      await passwordInput.fill(Clave);
      await loginButton.click();
      await expect(banner).toHaveText('Te damos la bienvenida a Facebook, Nicolas');
    });
  });
});


































