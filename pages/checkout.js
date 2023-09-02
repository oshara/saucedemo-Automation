import { expect } from "@playwright/test";

exports.CheckoutPage =class CheckoutPage {
    constructor(page){
        this.page= page;
        this.backPackTitleName= page.locator('#item_4_title_link');
        this.finishBtn= page.locator('#finish');
    }

    async verifyCheckoutProductName(){
        await expect(this.backPackTitleName).toContainText('Sauce Labs Backpack');
        
    }

    async clickFinish(){
        await this.finishBtn.click();

    } 

}