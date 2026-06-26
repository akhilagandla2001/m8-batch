let {chromium} = require('playwright'); //~importing the chromium browser

(
    async () => {
        let browser = await chromium.launch({headless:false})//!launching of the browser 
        let context = await browser.newContext();//!creating the session
        let page = await context.newPage();//!the page will be created
        await page.goto('https://www.google.com')//!the application will be launched 
        await browser.close()//!browser is closed
    }
)()