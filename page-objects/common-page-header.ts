import { Page, Locator } from '@playwright/test'
export class CommonPageHeader
{
    // data modifiers
    readonly page: Page
    readonly title: Locator
    readonly cartLink: Locator
    readonly cartLinkBadge: Locator
    
    constructor(page: Page)
    {
        // web elements
        this.page = page
        this.title = page.locator('span[class="title"]')
        this.cartLink = this.page.locator('//a[@class="shopping_cart_link"]')
        this.cartLinkBadge = this.page.locator('span[class="shopping_cart_badge"]')
    }
}