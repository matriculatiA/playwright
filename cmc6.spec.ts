import {test,expect} from '@playwright/test'

    test('Automate Pagination', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.waitForTimeout(2000);
        
        await page.locator('.ebFoZm').first().click()
        await page.locator('#tippy-4 > div > div.tippy-content > div > div > button:nth-child(3)').first().click()
        // await page.locator('Next page').first().click()
        await page.getByRole('button', {name: "Page 2"}).click()

        const pageUrl = page.url()

        expect(pageUrl).toBe('https://coinmarketcap.com/?page=2')

        await page.reload();

        const pagination = await page.locator('#__next > div.sc-faa5ca00-1.cKgcaj.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-66133f36-2.cgmess > table > tbody > tr:nth-child(1) > td:nth-child(2) > p').textContent()
        expect(pagination).toBe("21")
    })