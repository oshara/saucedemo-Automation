import {test} from '@playwright/test';
import {LoginPage} from "../pages/login";
import {ProductPage} from '../pages/product';
import {ShoppingCartPage} from '../pages/shoppingCart';
import { url } from '../environment-config';

export const removeProduct = ()=>{
test("Remove a product from the cart",async({page})=>{

    const Login= new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);


    await page.goto(url);
    await Login.login("standard_user","secret_sauce");
    
    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();

    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.removeProduct();
})

}