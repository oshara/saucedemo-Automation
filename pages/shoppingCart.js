exports.ShoopingCartPage= class ShoopingCartPage{

    constructor(page){
        this.page=page;
        this.checkoutBtn= page.getByTestId('checkout');
        this.backPackTitleName = page.locator('#item_4_title_link');

    }
}