import { expect } from '@playwright/test'
import { test } from '../../fixtures/uiFixtures'
import { authFile } from '../../playwright.config';
import fs from 'fs';

const data = JSON.parse(
	fs.readFileSync('./data/testData.json','utf8'))

	test('Login', async ( { page, loginPage  }) => {
		console.log('Test Start:', new Date().toISOString())
		await loginPage.openApp()
		expect(await loginPage.getUrl()).toContain(process.env.BASE_URL)
		expect(await loginPage.getTitle()).toBe(data.loginPageTitle)
		await loginPage.usernameFieldVisible()
		await loginPage.passwordFieldVisible()
		await loginPage.loginAsAdminUser()
		await loginPage.waitForPageLoad()
		await page.context().storageState({ path: authFile });
		console.log("logged in successfully")
	})

 

	

    