import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
import { ProductsPage } from '../page-objects/products-page'
import { CREDENTIALS } from '../data/constants'

test('As a standard User, I should be able to log in successfully', async ({ page }) =>
{
  // instantiate classes
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)

  // load sauce demo page
  await page.goto(loginPage.loginPageUrl)

  // login using valid username and valid password
  await loginPage.submitLoginForm(CREDENTIALS.validUsername, CREDENTIALS.validPassword)

  // confirm user is succesfully logged in by arriving at Products page
  await expect(page).toHaveURL(productsPage.productsPageUrl)
  await expect(productsPage.title).toBeVisible()
});
