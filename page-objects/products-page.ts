import { Page, Locator } from '@playwright/test'
import { URL } from '../data/constants'
export class ProductsPage
{
    // data modifiers
    readonly page: Page
    readonly productsPageUrl: string
    readonly title: Locator
    readonly cartLink: Locator
    readonly allProducts: Locator
    readonly productNames: Locator
    readonly productDescriptions : Locator
    readonly productPricing : Locator
    readonly addToCartButton : Locator

    constructor(page: Page)
    {
        // web elements
        this.page = page
        this.productsPageUrl = URL.productPageUrl
        this.title = page.locator('text=Products')
        this.cartLink = page.locator('//a[@class="shopping_cart_link"]')
        this.allProducts = page.locator('div[class="inventory_item"]')
        this.productNames = page.locator('div[class="inventory_item_name"]')
        this.productDescriptions = page.locator('div[class="inventory_item_desc"]')
        this.productPricing = page.locator('div[class="inventory_item_price"]')
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart'})
   }
}