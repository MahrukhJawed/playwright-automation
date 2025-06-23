import { GitHubActionOptions } from '@estruyf/github-actions-reporter';
import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from "ortoni-report";

export const authFile = '../test-mj/session-storage/.auth/user.json'


const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "always", // default to never
  folderPath: "ortoni-report",
  filename: "ortoni-report.html",
  logo: "logo.{png, jpg}",
  title: "Test Report",
  showProject: true,
  projectName: "OrangeHRM",
  testType: "e2e",
  base64Image: false,
  stdIO: false,
  preferredTheme: "light",
  chartType: "doughnut",
}

export default defineConfig({
  globalSetup: './config/environments.ts', //Uncomment this to execute tests on local machine
  timeout: 60000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  workers: 1, // Set to 1 to disable parallel execution
  retries: 0,

  reporter: [
  ['list'],
  ["html", { outputFolder: "../test-mj/playwright-report", open: "never" }],
  ["ortoni-report", reportConfig],
  ['@estruyf/github-actions-reporter', <GitHubActionOptions>{
    title: 'Orange HRM Test results',
    useDetails: true,
    showError: true,
    showAnnotations: true,
    showAnnotationsInColumn: true,
    showTags: true,
    quiet: false,
    showArtifactsLink: true,
  }]
  
],
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // Authentication for Web UI Tests
    {
      name: 'Authentication',
      testDir: './tests/ui',
      testMatch: '**/authentication.ts',
      teardown: 'teardown'
    },
    //Web UI Tests
    {
      name: 'E2E Tests',
      dependencies: ['Authentication'],
      testDir: './tests/ui',
      testMatch: "**/*.spec.ts",
        use: {
          browserName: 'chromium', // Use 'chromium' for Chrome, 'firefox' for Firefox, 'webkit' for Safari
          ...devices['Desktop Chrome'] ,
          launchOptions: {args: ["--start-maximized"]},
          headless: true,
          screenshot: 'only-on-failure',
          video: 'retain-on-failure',
          trace: 'retain-on-failure',
          storageState: authFile,
        },
    },
    // Teardown for Web UI Tests
    {
      name: 'teardown',
      testDir: './tests/ui',
      testMatch: '**/teardown.ts'
    },
    // API Tests
    {
      name: 'API Tests',
      testDir: './tests/api',
      testMatch: '**/*.spec.ts',
      use: {
        baseURL: 'https://petstore.swagger.io/',
        extraHTTPHeaders: {
          //'API-Key': 'abc', //Example, replace with actual API key if needed
          'Content-Type': 'application/json', 
          'Cache-Control' : 'no-cache',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        },
       ignoreHTTPSErrors: true,
      },
    },
    // Database Tests
    {
      name: 'DB Tests',
      testDir: './tests/db',
      testMatch: '**/*.spec.ts',
    }
  ]
})
