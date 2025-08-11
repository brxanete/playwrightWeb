import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { Screenshot } from '../utils/screenshot';  // ajusta la ruta según tu estructura


import dotenv from 'dotenv';

dotenv.config();

const mainBanner = (page) => page.getByRole('link', { name: 'PRODUCT STORE' });
const homeButton = (page) => page.getByRole('link', { name: 'Home (current)' });
const contactButton = (page) => page.getByRole('link', { name: 'Contact' });
const loginButton1 = (page) => page.getByRole('link', { name: 'Log in' });
const mailTextBox = (page) => page.locator('#loginusername');
const passTextBox = (page) => page.locator('#loginpassword');
const loginButton2 = (page) => page.getByTestId('royal-login-button');
const forgotPassButton = (page) => page.getByRole('link', { name: 'Forgot password?' });
const checkNotificationsTitle = (page) => page.getByText('Revisa las notificaciones');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
});

test('has title', async ({ page }) => {
  test.step('Validar que el titulo de la pagina sea el correcto', async () => {
    await expect(page).toHaveTitle("STORE");
  })

});


test('validate visual elements on home page', async ({ page }) => {

  await test.step('Validar el cajon de texto para email', async () => {
  await expect(mainBanner(page)).toBeVisible();
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

  await test.step('Ir a la seccion de login', async () => {
    await expect(loginButton1(page)).toBeVisible();
    await loginButton1(page).click();
  });

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

  await test.step('Validar aviso notificaciones', async() => {
    await expect(checkNotificationsTitle(page)).toBeVisible();
  });

  await test.step('validar', async () => {

  });





  




});



























