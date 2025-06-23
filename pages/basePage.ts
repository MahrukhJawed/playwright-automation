import { Page, expect} from '@playwright/test'

class BasePage {
    page: Page;
	constructor(page: any) {
		this.page = page
	}

    async openUrl(url:string) {
		return await this.page.goto(url,{ waitUntil: 'domcontentloaded' })
	}
    
	async waitForPageLoad() {
		await this.page.waitForTimeout(8000)
		return await this.page.waitForLoadState('domcontentloaded')
	}

    async getTitle() {
		return await this.page.title()
	}

    async getUrl() {
		return this.page.url()
	}

	async isElementVisible(selector: string, errorMessage: string) {
		const element = this.page.locator(selector);
		try {
			await expect(element).toBeVisible({ timeout: 5000 });
		} catch (error) {
			throw new Error(`${errorMessage}: ${error}`);
		}
	}

	async waitAndFill(selector:string, text:string) {
		return await this.page.fill(selector, text)
	}

	async waitAndClick(selector:string) {
		return await this.page.click(selector)
	}

}

export default BasePage