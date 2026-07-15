import { test as base, Page } from '@playwright/test';

/**
 * Custom test fixture that captures a screenshot after every significant page action.
 * Screenshots are attached to testInfo so both Playwright HTML and Allure reporters display them.
 */
export const test = base.extend<{ autoScreenshotPage: Page }>({
  page: async ({ page }, use, testInfo) => {
    let stepCounter = 0;

    // Helper to take and attach screenshot
    const takeScreenshot = async (actionName: string) => {
      try {
        stepCounter++;
        const screenshot = await page.screenshot({ fullPage: false });
        await testInfo.attach(`Step ${stepCounter} - ${actionName}`, {
          body: screenshot,
          contentType: 'image/png',
        });
      } catch {
        // Ignore screenshot errors (e.g., page already closed)
      }
    };

    // Hook into page events to capture screenshots after navigations
    page.on('load', async () => {
      await takeScreenshot('page load');
    });

    // Wrap common page methods to auto-screenshot after each action
    const originalGoto = page.goto.bind(page);
    page.goto = async (...args: Parameters<Page['goto']>) => {
      const result = await originalGoto(...args);
      await takeScreenshot(`goto ${args[0]}`);
      return result;
    };

    const originalClick = page.click.bind(page);
    page.click = async (...args: Parameters<Page['click']>) => {
      await originalClick(...args);
      await takeScreenshot(`click ${args[0]}`);
    };

    const originalFill = page.fill.bind(page);
    page.fill = async (...args: Parameters<Page['fill']>) => {
      await originalFill(...args);
      await takeScreenshot(`fill ${args[0]}`);
    };

    const originalPress = page.press.bind(page);
    page.press = async (...args: Parameters<Page['press']>) => {
      await originalPress(...args);
      await takeScreenshot(`press ${args[1]}`);
    };

    const originalReload = page.reload.bind(page);
    page.reload = async (...args: Parameters<Page['reload']>) => {
      const result = await originalReload(...args);
      await takeScreenshot('reload');
      return result;
    };

    await use(page);

    // Final screenshot at the end of the test
    await takeScreenshot('test end');
  },
});

export { expect } from '@playwright/test';
