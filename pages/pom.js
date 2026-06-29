export class Login2{
    constructor(page){
        this.page=page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.button = page.locator('//button[@id="submit"]')
    }
    async launch(url){
        await this.page.goto(url)
    }

    async details(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.button.click()
    }
}