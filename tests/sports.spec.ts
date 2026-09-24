import { test } from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';
import { logger } from '../utils/logger';

test('Verify Wikipedia Sport Page Heading', async ({ page }) => {

    logger.info('Test Started');

    const wikipediaPage = new WikipediaPage(page);

    await wikipediaPage.openSportPage();
    logger.info('Opened Sport Page');

    await wikipediaPage.verifyPageLoaded();
    logger.info('Page Loaded Successfully');

    await wikipediaPage.verifyHeading();
    logger.info('Heading Verified');

    await wikipediaPage.verifyImagePresent();
    logger.info('Image Verification Completed');

    await wikipediaPage.takeScreenshot();
    logger.info('Screenshot Captured');

    await wikipediaPage.performVisualValidation();
    logger.info('Visual Validation Completed');

    logger.info('Test Passed');
});