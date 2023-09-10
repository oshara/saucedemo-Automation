import {test} from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductPage } from '../pages/product';
import { ShoppingCartPage } from '../pages/shoppingCart';
import { YourInformationPage } from '../pages/yourInformation';
import { CheckoutPage } from '../pages/checkout';
import {CheckoutCompletePage} from '../pages/checkoutComplete';
import { url } from '../environment-config';
import { firstName, lastName, postalCode } from '../data-config';

export const BuyProducts=()=>{

    test.beforeEach(async({page})=>{
        const Login = new LoginPage(page);
        await page.goto(url);
        await Login.login("standard_user","secret_sauce");

    })
    test('Verify user can buy a single product successfully',async({page})=>{
    
    const ProductObj = new ProductPage(page);
    const ShoppingCartObj = new ShoppingCartPage(page);
    const YourInforObj= new YourInformationPage(page);
    const CheckoutObj= new CheckoutPage(page);
    const CompletePageObj= new CheckoutCompletePage(page)

    await ProductObj.addProduct();
    await ProductObj.clickShoppingCart();
    await ShoppingCartObj.validatingTheAddedProduct();
    await ShoppingCartObj.checkoutProduct();
    await YourInforObj.fillPersonalDetails(firstName,lastName,postalCode);
    await YourInforObj.clickContinue();
    await CheckoutObj.verifyCheckoutProductName();
    await CheckoutObj.clickFinish();
    await CompletePageObj.verfiyThankYouText();
    await CompletePageObj.clickBackToHomeBtn();

    })

    test('Verify User can buy mulitiple products successfully',async({page})=>{

        const ProductObj =new ProductPage(page);
        const ShoppingCartObj = new ShoppingCartPage(page);
        const YourInforObj = new YourInformationPage(page);
        const CheckoutObj = new CheckoutPage(page);
        const CompletePageObj = new CheckoutCompletePage(page);

        await ProductObj.addProduct();
        await ProductObj.addBikeProduct();
        await ProductObj.clickShoppingCart();
        await ShoppingCartObj.validatingTheAddedProduct();
        await ShoppingCartObj.validatingAddedBikeTitle();
        await ShoppingCartObj.checkoutProduct();
        await YourInforObj.fillPersonalDetails(firstName,lastName,postalCode);
        await YourInforObj.clickContinue();
        await CheckoutObj.verifyCheckoutProductName();
        await CheckoutObj.verifyBikeTitleName();
        await CheckoutObj.clickFinish();
        await CompletePageObj.clickBackToHomeBtn();

    })



}