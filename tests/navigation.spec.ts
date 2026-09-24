import { test, expect } from '@playwright/test';

test('Verify Back Navigation', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await page.goBack();

    await expect(page).toHaveTitle(/Wikipedia/);
});

test('Verify Forward Navigation', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await page.goBack();

    await page.goForward();

    await expect(page).toHaveURL(/Sport/);
});