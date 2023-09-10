import {test} from '@playwright/test';
import {LoginPage} from "../pages/login";
import {ProductPage} from "../pages/product";
import {ShoppingCartPage} from '../pages/shoppingCart';
import {YourInformationPage} from '../pages/yourInformation';
import { firstName,lastName,postalCode } from '../data-config';
import { url } from '../environment-config';

export const verifyFieldsYourInfor=()=>{

test.beforeEach(async({page})=>{
    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);
    

    await page.goto(url);
    await Login.login("standard_user","secret_sauce");

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();
    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.checkoutProduct();
}

)

test("Verifying the First Name field cannot be empty",async({page})=>{

    const YourInforObj= new YourInformationPage(page);
    await YourInforObj.verifyingFirstNameEmpty(lastName,postalCode);
})

test("Verifying the Last Name field cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.verifyingLastNameEmpty(firstName,postalCode);
})

test("Verifying the Postal code cannot be empty",async({page})=>{
    const YourInforObj = new YourInformationPage(page);
    await YourInforObj.verifyingPostCodeEmpty(firstName,lastName);
})


}