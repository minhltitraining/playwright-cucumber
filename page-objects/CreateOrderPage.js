const { expect, Locator, Page } = require('@playwright/test');
const { AbstractPage } = require('./AbstractPage');
exports.CreateOrderPage = class CreateOrderPage extends AbstractPage {
    txtQuantity = Locator
    txtName = Locator
    txtStreet = Locator
    txtCity = Locator
    txtZipcode = Locator
    txtCardNr = Locator
    txtExpDate = Locator
    processBtn = Locator
    successMessage = Locator
    emptyQuantityErr = Locator
    invalidQuantityErr = Locator
    emptyNameErr = Locator
    emptyStreetErr = Locator
    emptyCityErr = Locator
    emptyZipErr = Locator
    invalidZipErr = Locator
    emptyCardErr = Locator
    emptyCardNrErr = Locator
    invalidCardNrErr = Locator
    emptyExpDateErr = Locator
    invalidExpDateErr = Locator

    constructor(page = Page) {
        super(page)
        this.txtQuantity = page.locator('#ctl00_MainContent_fmwOrder_txtQuantity');
        this.txtName = page.locator('#ctl00_MainContent_fmwOrder_txtName');
        this.txtStreet = page.locator('#ctl00_MainContent_fmwOrder_TextBox2');
        this.txtCity = page.locator('#ctl00_MainContent_fmwOrder_TextBox3');
        this.txtZipcode = page.locator('#ctl00_MainContent_fmwOrder_TextBox5');
        this.txtCardNr = page.locator('#ctl00_MainContent_fmwOrder_TextBox6');
        this.txtExpDate = page.locator('#ctl00_MainContent_fmwOrder_TextBox1');
        this.processBtn = page.locator('#ctl00_MainContent_fmwOrder_InsertButton');
        this.successMessage = page.locator("//strong[normalize-space()='New order has been successfully added.']");
        this.emptyQuantityErr = page.locator("//em[normalize-space()=\"Field 'Quantity' cannot be empty.\"]");
        this.invalidQuantityErr = page.locator("//span[normalize-space()='Quantity must be greater than zero.']");
        this.emptyNameErr = page.locator("//span[normalize-space()=\"Field 'Customer name' cannot be empty.\"]");
        this.emptyStreetErr = page.locator("//span[normalize-space()=\"Field 'Street' cannot be empty.\"]");
        this.emptyCityErr = page.locator("//span[normalize-space()=\"Field 'City' cannot be empty.\"]");
        this.emptyZipErr = page.locator("//span[normalize-space()=\"Field 'Zip' cannot be empty.\"]");
        this.invalidZipErr = page.locator("#ctl00_MainContent_fmwOrder_rev1");
        this.emptyCardErr = page.locator("//span[normalize-space()='Select a card type.']");
        this.emptyCardNrErr = page.locator("//span[normalize-space()=\"Field 'Card Nr' cannot be empty.\"]");
        this.invalidCardNrErr = page.locator("//span[normalize-space()='Invalid format. Only digits allowed.'] [@id='ctl00_MainContent_fmwOrder_RegularExpressionValidator2']");
        this.emptyExpDateErr = page.locator("//span[normalize-space()=\"Field 'Expire date' cannot be empty.\"]");
        this.invalidExpDateErr = page.locator("//span[normalize-space()='Invalid format. Required format is mm/yy.']");
    }

    
    async createOrder(quantity, name, street, city, zipcode, card, cardNr, expDate) {
        await this.txtQuantity.fill(quantity);
        await this.txtName.fill(name);
        await this.txtStreet.fill (street);
        await this.txtCity.fill(city);
        await this.txtZipcode.fill(zipcode);
        if (card) {
            await this.page.locator("//input[@value='" + card + "']").click();
        }
        await this.txtCardNr.fill(cardNr);
        await this.txtExpDate.fill(expDate);
        this.processBtn.click();
    }

    async assertResult(expResult) {

        switch (expResult) {
            case "valid":
                expect(this.successMessage).toHaveText("New order has been successfully added.");
                break;
            case "empty_quantity":
                expect(this.invalidQuantityErr).toBeVisible();
                break;
            case "invalid_quantity":
                expect(this.invalidQuantityErr).toBeVisible();
                break;
            case "empty_name":
                expect(this.emptyNameErr).toBeVisible();
                break;
            case "empty_street":
                expect(this.emptyStreetErr).toBeVisible();
                break;
            case "empty_city":
                expect(this.emptyCityErr).toBeVisible();
                break;
            case "empty_zip":
                expect(this.emptyZipErr).toBeVisible();
                break;
            case "invalid_zip":
                expect(this.invalidZipErr).toBeVisible();
                break;
            case "empty_card":
                expect(this.emptyCardErr).toBeVisible();
                break;
            case "empty_cardnr":
                expect(this.emptyCardNrErr).toBeVisible();
                break;
            case "invalid_cardnr":
                expect(this.invalidCardNrErr).toBeVisible();
                break;
            case "empty_expdate":
                expect(this.emptyExpDateErr).toBeVisible();
                break;
            case "invalid_expdate":
                expect(this.invalidExpDateErr).toBeVisible();
                break;
        }

    }
}