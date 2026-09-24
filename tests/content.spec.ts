import { test, expect } from '@playwright/test';

test('Verify Sport Page Heading Exists', async ({ page }) => {

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await expect(page.locator('#firstHeading')).toBeVisible();

});

test('Verify Page Title Contains Sport', async ({ page }) => {

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await expect(page).toHaveTitle(/Sport/);

});

test('Verify URL Contains Sport', async ({ page }) => {

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await expect(page).toHaveURL(/Sport/);

});

test('Verify Categories Section Exists', async ({ page }) => {

    await page.goto('https://en.wikipedia.org/wiki/Sport');

    await expect(page.locator('#mw-normal-catlinks')).toBeVisible();

});