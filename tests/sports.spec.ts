import { test } from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';

test('Verify Wikipedia Sport Page Heading', async ({ page }) => {

    const wikipediaPage = new WikipediaPage(page);

    await wikipediaPage.openSportPage();

    await wikipediaPage.verifyPageLoaded();

    await wikipediaPage.verifyHeading();

    await wikipediaPage.verifyImagePresent();

    await wikipediaPage.takeScreenshot();

    await wikipediaPage.performVisualValidation();

});