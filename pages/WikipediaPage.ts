import { Page, expect } from '@playwright/test';

export class WikipediaPage {

    constructor(private page: Page) {}

    async openSportPage() {
        await this.page.goto('https://en.wikipedia.org/wiki/Sport');
    }

    async verifyPageLoaded() {
        await expect(
            this.page.locator('#firstHeading')
        ).toBeVisible();
    }

    async verifyHeading() {
        await expect(
            this.page.locator('#firstHeading')
        ).toHaveText('Sport');
    }

    async verifyImagePresent() {
        const image = this.page.locator('img:visible').first();

        await expect(image).toBeVisible();
    }

    async takeScreenshot() {
        await this.page.screenshot({
            path: 'screenshots/sport-page.png',
            fullPage: true
        });
    }
    async performVisualValidation() {
        await expect(this.page).toHaveScreenshot('sport-page-baseline.png');
    }
}