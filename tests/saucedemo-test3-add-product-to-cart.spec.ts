import { test, expect, selectors, Locator } from '@playwright/test'
import { CommonPageHeader } from '../page-objects/common-page-header'
import { LoginPage } from '../page-objects/login-page'
import { ProductsPage } from '../page-objects/products-page'
import { CartPage } from '../page-objects/cart-page'
import { CREDENTIALS } from '../data/constants'

test('As a standard User, I should be able to log in successfully and add a product to the cart', async ({ page }) =>
{
  // instantiate classes
  const commonPageHeader = new CommonPageHeader(page)
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const cartPage = new CartPage(page)

  // load sauce demo page
  await page.goto(loginPage.loginPageUrl)

  // login using valid username and valid password
  await loginPage.submitLoginForm(CREDENTIALS.validUsername, CREDENTIALS.validPassword)

  // confirm user logged in succesfully and is at Products page
  await expect(page).toHaveURL(productsPage.productsPageUrl)
  await expect(productsPage.title).toBeVisible()

  // identify a product to add to cart
  const totalProductCount = await productsPage.allProducts.count()
  const selectedProduct = Math.floor(Math.random() * totalProductCount)

  // add product to cart
  await productsPage.addToCartButton.nth(selectedProduct).click()
  
  // capture information for the product added to cart
  const selectedProductName = await productsPage.productNames.nth(selectedProduct).textContent()
  const selectedProductDesc = await productsPage.productDescriptions.nth(selectedProduct).textContent()
  const selectedProductPrice = await productsPage.productPricing.nth(selectedProduct).textContent()

  // confirm one item added to cart
  await expect (commonPageHeader.cartLinkBadge).toHaveText('1')
  
  // click on cart icon
  await (productsPage.cartLink).click()

  // confirm user is at Cart page
  await expect(page).toHaveURL(cartPage.cartPageUrl)
  await expect(cartPage.title).toBeVisible()
    
  // confirm quantity added, product name, product description, product price
  await expect (cartPage.productQuantity).toHaveText('1')
  expect (await cartPage.productName.textContent()).toEqual(selectedProductName)
  expect (await cartPage.productDescription.textContent()).toEqual(selectedProductDesc)
  expect (await cartPage.productPrice.textContent()).toEqual(selectedProductPrice)
})
