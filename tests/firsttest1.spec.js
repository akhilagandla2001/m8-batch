import {test} from '@playwright/test'

test('first test',async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtex"]').fill('shoes')
})

/*
import {test} from '@playwright/test
test('',async()=>{
    
    })
*/


/*
()=>{
    }
*/