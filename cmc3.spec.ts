import {test,expect} from '@playwright/test'

    test('Automate Currency Conversion', async ({page}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.locator(".cJZKOM").click()
        await page.locator("body > div.sc-acb6320-0.jVSkTR.modalOpened > div > div.sc-acb6320-2.TjpYi.cmc-modal-body.has-title > div > div.sc-95c89bcc-0.kQQfdT > div:nth-child(1) > div > div:nth-child(2)").click()
        
        await page.locator('a[href="/currencies/tether/"]').first().click()
        await page.waitForTimeout(10000);

        const tetherPriceEUR = await page.locator('.jxpCgO').textContent()
        const euroCurrency = tetherPriceEUR.charAt(0)

        await expect(euroCurrency).toBe("€")

        await page.locator(".cJZKOM").click()
        await page.locator("body > div.sc-acb6320-0.jVSkTR.modalOpened > div > div.sc-acb6320-2.TjpYi.cmc-modal-body.has-title > div > div.sc-95c89bcc-0.kQQfdT > div:nth-child(1) > div > div:nth-child(1)").click()

        const tetherPriceUSD = await page.locator('.jxpCgO').textContent()
        

        await expect(tetherPriceUSD).toBe("$1.00")
        


        // here is an example what can be done if I have the source for the conversion API(that fatching real time data that updates every second in order 
        // to match the conversion, otherwise the conversion from CMC can not be matched exactly, CMC have their own currency source for conversion. Using the
        // static value because you said to not make failing tests.
        // -----------------------------------------------------------------------------
        // const bitoinPriceUSD = await page.locator('.jxpCgO').textContent()
        // const bitcoinPriceUSDConverted = parseInt(bitoinPriceUSD.replace(/[$,]/g, ''), 10);

        // const bitcoinPriceEURO = Math.round(bitcoinPriceUSDConverted * 0.93260208)

        // await page.locator(".cJZKOM").click()
        // await page.locator("body > div.sc-acb6320-0.jVSkTR.modalOpened > div > div.sc-acb6320-2.TjpYi.cmc-modal-body.has-title > div > div.sc-95c89bcc-0.kQQfdT > div:nth-child(1) > div > div:nth-child(2)").click()

        // const bitoinPriceEUROFetched = await page.locator('.jxpCgO').textContent()
        // const bitcoinPriceEUROConverted = parseInt(bitoinPriceEUROFetched.replace(/[$,]/g, ''), 10);

        // await expect.soft(bitcoinPriceEURO).toBe(bitoinPriceEUROFetched)
        // -----------------------------------------------------------------------------

        // test('Automate Sorting Functionality', async ({page}) =>{

        // })
    })

