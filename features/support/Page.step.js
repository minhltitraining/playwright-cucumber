const { Given, When, Then } = require("@cucumber/cucumber");
const { HomePage } = require('../../page-objects/HomePage');
const { AllOrderPage } = require('../../page-objects/AllOrderPage');
const {CreateOrderPage} = require('../../page-objects/CreateOrderPage');
const fs = require('fs');

let homePage;
let allOrderPage;
let createOrderPage;

Given("WebOrder has been launch on Chrome", { timeout: 60 * 1000 }, async function () {

    await this.openUrl('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');
});

When("user enter valid credential", async function () {
    homePage = new HomePage(this.page)
    homePage.enterInfo("Tester", "test");
    homePage.clickLoginBtn();
    
});

Then("All Order Page should be displayed", async function () {
    allOrderPage = new AllOrderPage(this.page);
    await allOrderPage.assertText();
    await allOrderPage.assertTitle();
    await allOrderPage.assertUrl();
});

When("User click on Logout link from the All Order Page", async function () {
    allOrderPage.logout();
});


Then("user should be taken back to Login page", async function () {
    await homePage.assertTitle();
});


When("User Clicks on Order link in All Order Page", async function () {
    allOrderPage.goToCreateOrder();
    createOrderPage = new CreateOrderPage(this.page)
});


When('User enters order data from {int} into Create Order page', async function (index) {
        let data = fs.readFileSync('./order.json')
        const orders = JSON.parse(data);
        const order = orders[index];
        quantity = order.quantity
        c_name = order.name
        street = order.street
        city = order.city
        zip = order.zip
        card = order.card
        cardNr = order.cardNr
        expDate = order.expDate
        expResult = order.expResult
        console.log(quantity, c_name, street, city, zip, card, cardNr, expDate,expResult)
        createOrderPage.createOrder(quantity, c_name, street, city, zip, card, cardNr, expDate);
        
});

Then('User should should get proper expect result from {int} after click Process button', async function (index) {
    createOrderPage = new CreateOrderPage(this.page)
    let data = fs.readFileSync('./order.json')
    const orders = JSON.parse(data);
    const order = orders[index];
    expResult = order.expResult;
    await createOrderPage.assertResult(expResult);
});