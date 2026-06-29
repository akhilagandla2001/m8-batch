export class login{
    constructor(page){
        this.page=page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//button[@id="submit"]')
    }
    
}