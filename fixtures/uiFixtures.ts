// fixtures.ts
import { LoginPage } from '../pages/loginPage'; 
import { DashboardPage } from '../pages/dashboardPage';
import { test as base , expect, Browser, BrowserContext, Page} from '@playwright/test';
import { LogoutPage } from '../pages/logoutPage';


export type MyFixtures = {
  browser: Browser;
  page: Page;
  browserContext: BrowserContext;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  logoutPage: LogoutPage;
};

 const test = base.extend<MyFixtures>({
  browserContext: async ({ browser }, use) => {
    const context = await browser.newContext(); // Create a new browser context
    await use(context);
    await context.close(); 
  },

  page: async ({ browserContext }, use) => {
    const page = await browserContext.newPage(); // Create a single page for the test
    await use(page);
    await page.close(); 
  },

  
  loginPage: async ({ page } , use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage); 
    await page.close();
  },

  dashboardPage: async ({ page } , use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage); 
    await page.close();
  },

  logoutPage: async ({ page } , use) => {
    const logoutPage = new LogoutPage(page);
    await use(logoutPage); 
    await page.close();
  },
  
}



);

export { test, expect };


