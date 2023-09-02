exports.YourInformationPage = class YourInformationPage {
    constructor(page){
        this.page= page;
        this.firstName= page.locator('#first-name');
        this.lastName= page.locator('#last-name');
        this.postCode=page.locator('#postal-code');
        this.continue= page.locator('input#continue');

    }

    async fillPersonalDetails(firstName,lastName,postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postCode.fill(postalCode);
    }

    async clickContinue(){
        await this.continue.click();
    }
}