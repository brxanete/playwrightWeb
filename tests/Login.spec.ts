import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Screenshot } from '../utils/screenshot';  // ajusta la ruta según tu estructura


import dotenv from 'dotenv';

dotenv.config();

const mailTextBox = (page) => page.getByTestId('royal-email');
const passTextBox = (page) => page.getByTestId('royal-pass');
const loginButton = (page) => page.getByTestId('royal-login-button');
const forgotPassButton = (page) => page.getByRole('link', { name: 'Forgot password?' });
const checkNotificationsTitle = (page) => page.getByText('Revisa las notificaciones');

test.beforeEach(async ({ page }) => {
  await page.goto('https://facebook.com/');
});

test('has title', async ({ page }) => {
  test.step('Validar que el titulo de la pagina sea el correcto', async () => {
    await expect(page).toHaveTitle("Facebook - log in or sign up");
  })

});


test('validate visual elements on home page', async ({ page }) => {

  await test.step('Validar el cajon de texto para email', async () => {
  await expect(mailTextBox(page)).toBeVisible();
  await expect(mailTextBox(page)).toBeEditable();
  await expect(mailTextBox(page)).toBeEmpty();
  });


  await test.step('Validar el cajon de texto para contrasena', async () =>{
    
  })
});


test('do a login', async ({ page }) => {
  if (!process.env.FB_EMAIL) {
    throw new Error('FB_EMAIL is not defined in environment variables');
  }
  if (!process.env.FB_PASSWORD) {
    throw new Error('FB_PASSWORD is not defined in environment variables');
  }

  await test.step('Llenar email y capturar screenshot', async () => {
    await mailTextBox(page).fill(process.env.FB_EMAIL);
    await Screenshot.takeAndAttach('Screenshot después de llenar email', page);
  });

  await test.step('Llenar contraseña', async () => {
    await passTextBox(page).fill(process.env.FB_PASSWORD);
  });

  await test.step('Hacer clic en login', async () => {
    await loginButton(page).click();
  });



});



























