import {test,expect} from '@playwright/test'

    test('Automate Sorting Functionality(Cryptos)', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        
        await page.locator('.rank-column-title').click()
        const descendingCrypto = await page.locator('#__next > div.sc-faa5ca00-1.cKgcaj.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div:nth-child(1) > div.sc-66133f36-2.cgmess > table > tbody > tr:nth-child(1) > td:nth-child(2) > p').textContent()

        expect(descendingCrypto).toBe('100')
    })

    test('Automate Sorting Functionality(Exchanges)', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/rankings/exchanges/');
        
        await page.locator('.rank-column-title').click()
        const descendingExchng = await page.locator('#__next > div.sc-faa5ca00-1.cKgcaj.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div > div.sc-66133f36-2.fQqsAK > table > tbody > tr:nth-child(1) > td:nth-child(1) > p').textContent()
        const descendingExchngMinusOne = await page.locator('#__next > div.sc-faa5ca00-1.cKgcaj.global-layout-v2 > div.main-content > div.cmc-body-wrapper > div > div > div.sc-66133f36-2.fQqsAK > table > tbody > tr:nth-child(2) > td:nth-child(1) > p').textContent()
        
        const descendingExchngInt = parseInt(descendingExchng)
        const descendingExchngMinusOneInt = parseInt(descendingExchngMinusOne)


        expect(descendingExchngMinusOneInt).toBeLessThan(descendingExchngInt)
    })

