import { Page, Locator } from '@playwright/test'
import { URL } from '../data/constants'
export class LoginPage
{
    // data modifiers
    readonly page: Page
    readonly loginPageUrl: string
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly loginErrorMsg: Locator

    constructor(page: Page)
    {
        // web elements
        this.page = page
        this.loginPageUrl = URL.baseUrl
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.loginErrorMsg = page.locator('text=Epic sadface: Username and password do not match any user in this service')
    }

    async submitLoginForm(username, password)
    {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}