import { test, expect } from '@playwright/test';

test('Search Sport Article', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await page.fill('#searchInput', 'Sport');

    await page.keyboard.press('Enter');

    await expect(page.locator('#firstHeading'))
        .toContainText('Sport');
});

test('Search Cricket Article', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await page.fill('#searchInput', 'Cricket');

    await page.keyboard.press('Enter');

    await expect(page.locator('#firstHeading'))
        .toContainText('Cricket');
});

test('Search Football Article', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await page.fill('#searchInput', 'Football');

    await page.keyboard.press('Enter');

    await expect(page.locator('#firstHeading'))
        .toContainText('Football');
});