import { expect } from "@playwright/test";
exports.ProductPage =class ProductPage {
    constructor(page){
        this.page=page;
        this.backPackTitle=page.locator('em_4_title_link');

        //this.addToCartBtn= page.getByTestId('#add-to-cart-sauce-labs-backpack');
        this.addToCartBtn= page.locator('#add-to-cart-sauce-labs-backpack')
        this.shoppingCartIcon= page.locator('#shopping_cart_container');

    }

    async addProduct(){
        await this.addToCartBtn.click();
        await expect(this.backPackTitle).toHaveValue('Sauce Labs Backpack');

    }

    async clickShoppingCart(){
        await this.shoppingCartIcon.click();
    }
}