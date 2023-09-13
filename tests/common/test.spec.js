import {test} from '@playwright/test';
import { Login } from '../loginScenarios';
import { BuyProducts } from '../buyProduct';
import { verifyFieldsYourInfor } from '../verifyingFieldsYourConfirmationPage';
import { removeProduct } from '../removeProduct';
import { logout } from '../logout';


//test.describe('Login Scenarios',()=>Login());
//test.describe('Buying Products',()=>BuyProducts());
// test.describe("Buy Mulitple Products",()=>BuyMulitpleProducts());
//test.describe('Verifying the fields in Your Information page',()=>verifyFieldsYourInfor());


//test.describe('Remove a product from the shoppoing cart',()=>removeProduct());

test.describe("Logout",()=>logout());