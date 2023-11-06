import {test,expect, selectors} from '@playwright/test'

    test('Automate Chart Interaction', async ({page, browserName}) =>{
        test.slow()
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://coinmarketcap.com/');
        await page.waitForTimeout(2000);
        await page.locator('a[href="/currencies/bitcoin/"]').first().click()
        await page.waitForTimeout(2000);
        
        await page.getByRole('tab', { name: 'All' }).first().click()

        const chartSelector = '#section-coin-chart';
        const chart = await page.locator(chartSelector);

        const left = 290.594;
        const top = 173;
        const chartBox = await chart.boundingBox();

        if (chartBox) {
            const absoluteX = chartBox.x + left;
            const absoluteY = chartBox.y + top;

            await page.mouse.move(absoluteX, absoluteY);
        }
  
        const selectPeriod = await page.locator('div[class="floating-tooltip"] div:nth-child(2)')
        
        
        // The first moment I said its too late to invest in BTC
        let expectedText = '';
        if (browserName === 'webkit') {
            expectedText = 'Price: $793.8';
        } else {
            expectedText = 'Price: $951.42';
        }

        await expect(selectPeriod).toContainText(expectedText);
    })