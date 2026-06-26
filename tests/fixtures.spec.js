import {test} from '@playwright/test'

test.only('fixtures',async ({page}) => {
    await page.goto('https://www.google.com')
    await page.goto('https://www.flipkart.com')
})

test('context fixtire',async ({context}) => {
    let page = await context.newPage()
    await page.goto('https://www.amazon.in')

    let page2 = await context.newPage()
    await page2.goto('https://www.myntra.com')
})

test('browser fixture',async ({browser}) => {
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto('https://www.ajio.com')

    let context2 = await browser.newContext()
    let page2 = await context2.newPage()
    await page2.goto('https://www.zepto.com')
})

//!create 2 tabs and launch the applications
//! launch 2 applications in 2 different  browsers and in the 2nd one more new tab in that launch the applications
