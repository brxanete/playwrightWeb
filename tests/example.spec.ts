import { test, expect } from '@playwright/test';
import { obtenerDatoDesdeExcel } from '../utils/excelReader';



test('title validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const bannerLogo = page.locator('img[alt="Facebook"]');

  await expect(bannerLogo).toBeAttached();
  await expect(bannerLogo).toBeVisible();
  await expect(bannerLogo).toHaveAttribute('alt', 'Facebook');
  
  // Expect a title "to contain" a substring.web

});

test('info text validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const infoText = page.locator('//div/h2[@class="_8eso"]')
  await expect(infoText).toHaveText('Connect with friends and the world around you on Facebook.');

  // await page.getByRole('banner', { name: '' }).click();

  
});

test('user name input validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const userInput = page.locator('//div/input[@name="email"]');
  const data = obtenerDatoDesdeExcel();

  await expect(userInput).toBeAttached
  await expect(userInput).toBeVisible();
  await expect(userInput).toBeEmpty();
  await expect(userInput).toBeEditable();
  await userInput.fill(data['Correo']);

});

test('password input validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const passInput = page.locator('//div/input[@name="pass"]');
  const data = obtenerDatoDesdeExcel();
  await expect(passInput).toBeAttached
  await expect(passInput).toBeVisible();
  await expect(passInput).toBeEmpty();
  await expect(passInput).toBeEditable();
  await passInput.fill(data['Clave']);
  
});

test('login button validation', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  const loginButton = page.locator('//div/button[@name="login"]');
  const data = obtenerDatoDesdeExcel();
  await expect(loginButton).toBeAttached
  await expect(loginButton).toBeVisible();
});






























