import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
import { ProductsPage } from '../page-objects/products-page'
import { CartPage } from '../page-objects/cart-page'
import { URL, CREDENTIALS } from '../data/constants'

test('Validate Urls and Titles on Products page and Cart page', async ({ page }) =>
{
  // instantiate classes
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const cartPage = new CartPage(page)

  // load sauce demo page
  await page.goto(URL.baseUrl)

  // login using valid credentials
  await loginPage.submitLoginForm(CREDENTIALS.validUsername, CREDENTIALS.validPassword)

  // confirm Products page url and title
  await expect(page).toHaveURL(productsPage.productsPageUrl)
  await expect(productsPage.title).toBeVisible()

  // go to cart page
  await productsPage.cartLink.click()

  // confirm Cart page url and title
  await expect(page).toHaveURL(cartPage.cartPageUrl)
  await expect(cartPage.title).toBeVisible()
});

