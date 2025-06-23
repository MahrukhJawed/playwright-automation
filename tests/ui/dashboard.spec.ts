import { test, expect } from '../../fixtures/uiFixtures'

test.describe('@smoke: Dashboard screen', () => {
	
	test('Dashboard screen', async ({ page, loginPage, dashboardPage}) => {
		console.log('Test Start:', new Date().toISOString())
		await test.step(`Verify user is redirected to Dashboard after login`, async () => {
            await loginPage.openApp()
            expect(await loginPage.getUrl()).toContain('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
			console.log("on dashboard successfully")
		})


		await test.step(`Verify user can apply leave`, async () => {
			await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible()
			await page.getByRole('button', { name: 'Apply Leave' }).click();
			await expect(page.getByText('No Leave Types with Leave')).toBeVisible();
		})

		await test.step(`Verify user can assign leave`, async () => {
			await expect(page.getByRole('link', { name: 'Assign Leave' })).toBeVisible()
			await page.getByRole('link', { name: 'Assign Leave' }).click();
			await page.getByRole('textbox', { name: 'Type for hints...' }).click();
			await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
			await page.getByRole('option', { name: 'Ranga Akunuri' }).click();
			await page.locator('form i').first().click();
			await page.getByRole('option', { name: 'CAN - Bereavement' }).click();
			await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().fill('2025-08-01');
			await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
			await page.getByRole('button', { name: 'Assign' }).click();
			await expect(page.getByRole('dialog')).toContainText('Employee does not have sufficient leave balance for leave request. Click OK to confirm leave assignment.');
	})
	})

})


