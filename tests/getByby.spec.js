import {test} from '@playwright/test'

test('get by methods',async ({page}) => {
    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    //! getByLabel():- which is used to target the label
    // await page.getByLabel('Name').fill('akhila')

    //! getByPlaceholder targts the element based on the placeholder
    // await page.getByPlaceholder('Enter Your Email').fill('akhila@gmail.com')

    //!getByRole() :- used to target the element based on the role of the element
    // await page.getByRole('button',{name:'Register'}).click()
    // await page.getByRole('link',{name:'Login Now'}).click()

    //!getByTitle() :- used to target the element based on the title attribute
    // await page.goto('https://www.flipkart.com/search?q=dress+for+women&sid=clo%2Codx%2Cmaj%2Cjhy&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=RECENT&suggestionId=dress+for+women%7CWomen%27s+Dresses&requestId=3a70324f-a657-487b-9b82-3c2d3a1f07ae&as-backfill=on')
    // await page.getByTitle('Women A-line Multicolor Ankle Length Dress').click()

    //!getByaltText():- used for images
    // await page.getByAltText('Flipkart').first().click()

    //!getBytext():-target the element based on the visble text 
    // await page.getByText('Clothing and Accessories').first().click()

    //!getByTestId()
    await page.goto('https://www.saucedemo.com/')
    //~testIdAttribute:'data-test',in config file
    await page.getByTestId('username').fill('akhila')
})