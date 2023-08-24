import {test} from '@playwright/test';
import { LoginPage } from '../pages/login';

export const Login = ()=>{
test('Verify Standard User can login to the application successfully',async({page})=>{

    await page.goto('https://www.saucedemo.com/');
    const Login = new LoginPage(page);

    await Login.login("standard_user","secret_sauce");

    

})

test('Verify Locked out user can login to the application',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const Login = new LoginPage(page);

    await Login.login("locked_out_user","secret_sauce");

})

// test("Verify problem user can login to the application",()=>{

// })

// test('Verify performance_glitch_user can login to the application',()=>{

// })

// test('Verify user cannot login to application with the correct user name & password',()=>{

// })
}