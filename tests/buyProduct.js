import {test} from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/product';
import { ShoopingCartPage } from '../pages/shoppingCart';
import { YourInformationPage } from '../pages/yourInformation';

export const BuyProducts=()=>{
    test('Verify user can buy a single product successfully',async({page})=>{
    
    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoopingCartPage(page);
    const YourInforObj= new YourInformationPage(page);
    


    await page.goto('https://www.saucedemo.com/');
    await Login.login("standard_user","secret_sauce");

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();

})
}