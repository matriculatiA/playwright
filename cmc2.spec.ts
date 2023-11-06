import {test,expect} from '@playwright/test'

    test('Automate CryptoCurrency Details', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.locator('a[href="/currencies/bitcoin/"]').first().click()
        await page.waitForTimeout(10000);
        
        const maxSupply = await page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > dl:nth-child(2) > div:nth-child(6) > div:nth-child(1) > dd:nth-child(2)').textContent()
        const maxSupplySource = '21,000,000 BTC'

        expect(maxSupply).toEqual(maxSupplySource)

        const maxSupply2 = await page.locator('dd').allTextContents()
        expect(maxSupply2).toContain(maxSupplySource)

    })


