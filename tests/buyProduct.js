import {test} from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/product';
import { ShoopingCartPage } from '../pages/shoppingCart';
import { YourInformationPage } from '../pages/yourInformation';
import { CheckoutPage } from '../pages/checkout';
import {CheckoutCompletePage} from '../pages/checkoutComplete';

export const BuyProducts=()=>{
    test('Verify user can buy a single product successfully',async({page})=>{
    
    const Login = new LoginPage(page);
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoopingCartPage(page);
    const YourInforObj= new YourInformationPage(page);
    const CheckoutObj= new CheckoutPage(page);
    const CompletePageObj= new CheckoutCompletePage(page)


    await page.goto('https://www.saucedemo.com/');
    await Login.login("standard_user","secret_sauce");

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();
    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.checkoutProduct();
    await YourInforObj.fillPersonalDetails("Sam","Smith","40000");
    await YourInforObj.clickContinue();
    await CheckoutObj.verifyCheckoutProductName();
    await CheckoutObj.clickFinish();
    await CompletePageObj.verfiyThankYouText();
    await CompletePageObj.clickBackToHomeBtn();


})
}