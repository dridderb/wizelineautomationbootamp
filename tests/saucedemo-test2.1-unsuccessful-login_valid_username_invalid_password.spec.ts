import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page'
import { CREDENTIALS } from '../data/constants'

test('User enters valid username & invalid password, unsuccessful login error message displays', async ({ page }) =>
{
  // instantiate classes
  const loginPage = new LoginPage(page)

  // load sauce demo page
  await page.goto(loginPage.loginPageUrl)

  // login using valid username and invalid password
  await loginPage.submitLoginForm(CREDENTIALS.validUsername, CREDENTIALS.invalidPassword)

  // confirm error message on login page
  await expect(page).toHaveURL(loginPage.loginPageUrl)
  await expect(loginPage.loginErrorMsg).toBeVisible()
});