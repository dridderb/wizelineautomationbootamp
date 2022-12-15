import dotenv from 'dotenv'
dotenv.config()

export const URL =
{
    baseUrl: 'https://www.saucedemo.com',
    productPageUrl: 'https://www.saucedemo.com/inventory.html',
    cartPageUrl: 'https://www.saucedemo.com/cart.html'
}

export const CREDENTIALS =
{
    validUsername: process.env.VALIDUSERNAME,
    validPassword: process.env.VALIDPASSWORD,
    invalidUsername: process.env.INVALIDUSERNAME,
    invalidPassword: process.env.INVALIDPASSWORD
}