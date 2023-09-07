import { expect } from "@playwright/test";
exports.ShoppingCartPage= class ShoppingCartPage{

    constructor(page){
        this.page=page;
        this.checkoutBtn= page.locator('#checkout');
        this.backPackTitleName = page.locator('#item_4_title_link');

    }


    async validatingTheAddedProduct(){
        await expect(this.backPackTitleName).toContainText("Sauce Labs Backpack");

    }

    async checkoutProduct(){
        await this.checkoutBtn.click();
    }
}