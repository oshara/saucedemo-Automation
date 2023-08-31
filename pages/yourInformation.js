exports.YourInformationPage = class YourInformationPage {
    constructor(page){
        this.page= page;
        this.firstName= page.getByTestId('firstName');
        this.lastName= page.getByTestId('lastName');
        this.postCode=page.getByTestId('postalCode');
        this.continue= page.getByTestId('continue');

    }
}