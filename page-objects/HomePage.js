const { expect, Locator, Page } = require('@playwright/test');
const { AbstractPage } = require('./AbstractPage');
exports.HomePage = class HomePage extends AbstractPage{

    txtUsername = Locator
    txtPassword = Locator
    loginBtn = Locator

    constructor (page=Page){
       super(page)
       this.txtUsername = page.locator('id=ctl00_MainContent_username')
       this.txtPassword = page.locator('id=ctl00_MainContent_password')
       this.loginBtn = page.locator('id=ctl00_MainContent_login_button')
    }

    async enterInfo(username, password){
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

    async login(username, password){
        await this.enterInfo(username, password);
        await this.clickLoginBtn();
    }

    async assertTitle(){
        await expect(this.page).toHaveTitle("Web Orders Login");
    }
}