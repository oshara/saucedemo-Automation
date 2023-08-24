exports.LoginPage= class LoginPage {
    constructor(page){
        this.page=page;
        this.userName= page.locator('[data-test="username"]');
        this.password= page.locator('[data-test="password"]');
        this.loginBtn=page.locator('[data-test="login-button"]');
    }

    async login(username,password){
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();            
    }

}