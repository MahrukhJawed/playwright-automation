import { test as base, expect } from '@playwright/test';
import ApiBasePage from '../pages/apiBasepage';

export type APIFixtures = {
  apibasePage: ApiBasePage;
};
  
// This creates an instance of apiBasePage to make it available in the test context.
export const test = base.extend<APIFixtures>({
    apibasePage: async ({ } , use) => {
      const apibasePage = new ApiBasePage();
      await use(apibasePage); 
    },
});

export { expect } 