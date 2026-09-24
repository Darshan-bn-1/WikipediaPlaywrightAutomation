// Jenkins Auto Trigger Test

import { test, expect } from '@playwright/test';

test('Verify Wikipedia Home Page', async ({ page }) => {

    await page.goto('https://en.wikipedia.org');

    await expect(page).toHaveTitle(/Wikipedia/);

});

//Demo