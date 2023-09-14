const { expect, Locator, Page } = require('@playwright/test');
const { AbstractPage } = require('./AbstractPage');

exports.AllOrderPage = class AllOrderPage extends AbstractPage{
    orderLink = Locator
    listOfAllOrderTxt = Locator
    logoutLink = Locator

    constructor (page=Page){
        super(page)
        this.orderLink = page.locator("//a[text()='Order']");
        this.listOfAllOrderTxt = page.locator("//h2[normalize-space()='List of All Orders']");
        this.logoutLink = page.locator('#ctl00_logout');
    }

    async goToCreateOrder() {
        this.orderLink.click();
    }

    async logout(){
        this.logoutLink.click();
    }

    async assertTitle(){
        await expect(this.page).toHaveTitle("Web Orders")
    }

    async assertUrl(){
        await expect(this.page).toHaveURL("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx");
    }

    async assertText(){
        await expect(this.listOfAllOrderTxt).toBeVisible();
    }
}