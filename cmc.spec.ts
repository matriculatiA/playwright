import {test,expect} from '@playwright/test'


    test('Enter Crypro, Search and see relevant results', async ({page}) => {
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.click('.fWcxPm');
        await page.locator('[placeholder="Search coin, pair, contract address, exchange, or post"]').fill('XRP')
        await page.locator('.tippy-content').locator('a[href="/currencies/xrp/"]').first().click()
        await page.waitForTimeout(10000);
   // await page.screenshot({ path: 'newPageScreenshot.png' });
        await expect(page.locator('h1 > span')).toContainText('XRP');
        await expect(page).toHaveURL('https://coinmarketcap.com/currencies/xrp/')
    })
