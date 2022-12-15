import { Page, Locator } from '@playwright/test'
import { URL } from '../data/constants'
export class CartPage
{
    // data modifiers
    readonly page: Page
    readonly cartPageUrl: string
    readonly title: Locator
    readonly productQuantity: Locator
    readonly productName: Locator
    readonly productDescription: Locator
    readonly productPrice: Locator
    
    constructor(page: Page)
    {
        // web elements
        this.page = page
        this.cartPageUrl = URL.cartPageUrl
        this.title = page.locator('//span[contains(text(),"Your Cart")]')
        this.productQuantity = page.locator('div[class="cart_quantity"]')
        this.productName = page.locator('div[class="inventory_item_name"]')
        this.productDescription = page.locator('div[class="inventory_item_desc"]')
        this.productPrice = page.locator('div[class="inventory_item_price"]')
    }
}