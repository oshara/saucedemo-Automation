import {test} from '@playwright/test';
import { Login } from '../loginScenarios';
import { BuyProducts } from '../buyProduct';
import { verifyFieldsYourInfor } from '../verifyingFieldsYourConfirmationPage';

//test.describe('Login Scenarios',()=>Login());
// test.describe('Buying Products',()=>BuyProducts());
test.describe('Verifying the fields in Your Information page',()=>verifyFieldsYourInfor())