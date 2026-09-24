import { test, expect } from '@playwright/test';

test.describe('Wikipedia Hockey page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://en.wikipedia.org/wiki/Hockey');
    });

    test('displays the Hockey article heading', async ({ page }) => {
        await expect(page.locator('#firstHeading')).toHaveText('Hockey');
    });

    test('has the expected title and URL', async ({ page }) => {
        await expect(page).toHaveTitle(/Hockey/);
        await expect(page).toHaveURL(/\/wiki\/Hockey$/);
    });

    test('displays the article content and categories', async ({ page }) => {
        await expect(page.locator('#mw-content-text')).toBeVisible();
        await expect(page.locator('#mw-normal-catlinks')).toBeVisible();
    });
});
