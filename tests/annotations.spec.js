import {test} from '@playwright/test'

test.describe('describe test block',async () => {
    test('test1',async () => {
    test.setTimeout(120000)
    console.log('test1');
})

test('test2',async () => {
    console.log('test3');
})

test('test3',async () => {
    //! if any test block is taking more time to execute around 40 sec
    //! but the default timing is 30 sec but the script is taking more than 30sec
    //! at that time we can give test.slow
    //! which will triple the default time
    test.slow()
    console.log('test3');
})

// test.only('test3',async () => { //! test.only is used to run only 1 test block
//     console.log('test3');
// })

test('test4',async () => {
    console.log('test4');
})

//!tesk.fixme which is used to skip a particular test block temperarily
test.fixme('test5',async () => {
    console.log('test5');
})

test('test6',async () => {
    console.log('test6');
})

test.skip('test7',async () => { //! test.skip which is used to skip the particular test block permanantly
    console.log('test7');
})
})