import { test, expect } from '@playwright/test';

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
  const userInput = page.locator('//div/input[@name="email"]')

  await expect(userInput).toBeAttached
  await expect(userInput).toBeVisible();
  await expect(userInput).toBeEmpty();
  await expect(userInput).toBeEditable();
  await userInput.fill("bryan.nico.rojas@gmail.com");
  await expect(userInput).toBeEmpty();




  // await page.getByRole('banner', { name: '' }).click();

  
});






















