import {test} from '@playwright/test'

import ddt from '../../testdata/login.json'

import { Login2 } from '../../pages/pom'


test('',async ({page}) => {
    let logi = new Login2(page)
    await logi.page.goto(ddt.url)
    
})

test('1',async ({page}) => {
    let logi = new Login2(page)
    await logi.launch(ddt.url)
    await logi.details(ddt.username,ddt.password)
})