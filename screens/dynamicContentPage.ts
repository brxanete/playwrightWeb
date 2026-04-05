import { Locator } from '@playwright/test';

export class DynamicContentPage {
  readonly page: Page;
  readonly title: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Dynamic Content');
    this.content = page.locator('.dynamic-content');
  }
}
