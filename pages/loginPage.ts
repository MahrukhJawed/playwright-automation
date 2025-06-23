import { Page } from '@playwright/test'
import BasePage from './basePage'
import fs from 'fs'
require('dotenv').config()

const data = JSON.parse(
	fs.readFileSync(
		'./data/testData.json',
		'utf8'
	)
)

const BASE_URL = process.env.BASE_URL as string;
const USERNAME = process.env.Username as string;
const PASSWORD = process.env.Password as string;

export class LoginPage extends BasePage {

    readonly username: string
    readonly password: string
    readonly loginButton: string

	constructor(page: Page) {
		super(page)
		this.username = "//input[@placeholder='Username']"
		this.password = "//input[@placeholder='Password']"
		this.loginButton = "//button[@type='submit']"
	}

    async openApp() {
		await super.openUrl(BASE_URL)
		return await super.waitForPageLoad()
	}

	async usernameFieldVisible() {
		return await super.isElementVisible(this.username, data.notVisibleText)
	}

	async passwordFieldVisible() {
		return await super.isElementVisible(this.password, data.notVisibleText)
	}

	async loginAsAdminUser() {
		console.log("Logging in as : " +USERNAME)
		await this.waitAndFill(this.username, USERNAME)
		await this.waitAndFill(this.password, PASSWORD)
		await this.waitAndClick(this.loginButton)
	}

}