import {test} from '@playwright/test'
import path from 'node:path';

test('page methods',async ({page}) => {
    await page.goto('https://google.com')
    let size = await page.viewportSize()
    console.log(size);
})

test.only('page methods2',async ({page}) => {
    await page.setViewportSize({width:300,height:300})
    await page.goto('https://google.com')
    let size = await page.viewportSize()
    console.log(size);

    //!page.title():-Returns the title of the web page
    console.log(await page.title());
    
    //!page.url():- retrieves the url of the web page
    console.log(await page.url());

    //! it takes the screenshot but only 1 screenshot is taken because it overrides
    await page.screenshot({path:'screenshot/ss.png'})

    //!if we wanted to take  mulriple screenshots we can go for this methods
    let time = new Date().getTime()
    await page.screenshot({path:`screenshot/browser${time}.png`})

    //!used to locate the elements
    await page.locator()
})