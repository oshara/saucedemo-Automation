exports.CheckoutPage =class CheckoutPage {
    constructor(page){
        this.page= page;
        this.backPackTitleName= page.locator('#item_4_title_link');
        this.finishBtn= page.getByTestId('finish');
    }
}