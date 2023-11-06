import {test,expect} from '@playwright/test'

    test('Automate Navigation', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.locator('a[href="/currencies/bitcoin/"]').first().click()
        await page.waitForTimeout(2000);

        const coin = await page.locator('.dXQGRd').textContent()

        expect(coin).toBe('BTC')

        await page.goBack();

        const pageURL = page.url()
        expect(pageURL).toBe("https://coinmarketcap.com/")
        
    })