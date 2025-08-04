import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if test.only is left in the source code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter */
  reporter: [
    ['line'],
    ['allure-playwright', { 
      resultsDir: 'allure-results' // Puedes personalizar la carpeta
      // otras opciones disponibles
    }]
  ],
  use: {
    /* Base URL */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying failed tests */
    trace: 'on-first-retry',
    /* Take screenshot on every test */
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false // Ejecuta en modo headed
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: false // Ejecuta en modo headed
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: false // Ejecuta en modo headed
      },
    },

    // /* Test against mobile viewports */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // /* Test against branded browsers */
    // {
    //   name: 'Microsoft Edge',
    //   use: { 
    //     ...devices['Desktop Edge'], 
    //     channel: 'msedge', 
    //     headless: true, 
    //     launchOptions: {
    //       args: ['--headless=new'] 
    //     } 
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { 
    //     ...devices['Desktop Chrome'], 
    //     channel: 'chrome', 
    //     headless: true, 
    //     launchOptions: {
    //       args: ['--headless=new'] 
    //     } 
    //   },
    // },

  ],
  
  /* Run local dev server before tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
