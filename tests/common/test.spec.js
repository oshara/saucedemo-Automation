import {test} from '@playwright/test';
import { Login } from '../loginScenarios';
import { BuyProducts } from '../buyProduct';

//test.describe('Login Scenarios',()=>Login());
test.describe('Buying Products',()=>BuyProducts());