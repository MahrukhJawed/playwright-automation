import { expect } from '@playwright/test'
import { test } from '../../fixtures/uiFixtures'


test.describe('Logout screen', () => {
        test('Logout', async ( { page, loginPage, logoutPage  }) => {
        console.log('Test Start:', new Date().toISOString())
        await loginPage.openApp()
        await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click()
        await expect(page.getByRole('heading')).toContainText('Login')
        console.log("logged out successfully")
        })
})
