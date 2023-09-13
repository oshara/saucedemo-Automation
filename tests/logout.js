import {test} from '@playwright/test';
import {LoginPage} from '../pages/login';
import {ProductPage} from '../pages/product';
import { url } from '../environment-config';

export const logout = ()=>{

test("Logout from the application",async({page})=>{

    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);

    await page.goto(url);
    await Login.login("standard_user","secret_sauce");
    
    await ProductObj.logout();


})
}