# Playwright Typescript - Test Automation Framework

This framework is ideal for teams looking for a robust and scalable solution for their automation needs. It supports UI, API and DB testing, integrates with popular CI/CD tools, and provides detailed reporting for test results.

## Features

- **Integrated CI/CD Pipelines**: The framework is integrated with CI/CD pipelines for both GitHub and GitLab. This ensures seamless automation of tests during the development lifecycle.
- **Project Dependency Structure**: The framework follows a modular project dependency structure, making it easy to maintain and extend.
- **Context Management**: The framework incorporates Playwright's `BrowserContext` to isolate browser sessions.
- **Session Storage**: Session storage is utilized to manage user authentication and other session-related data efficiently.
- **Environment Management**: The framework supports both `.env` files and `GitLab environments and secrets`, allowing flexibility in managing environment-specific configurations.
- **Reports**: Test execution generates detailed reports using tools like `ortoni-report`, `Github report` and `Playwright's built-in HTML` reports.
- **Fixtures for POM**: Fixtures are used to implement the Page Object Model (POM) design pattern, ensuring reusable and maintainable test code.
- **Web, API and DB Automation**: The framework provides a single solution for automating both `Web`, `API` and `DB` tests, making it versatile and efficient.


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   git clone <repository-url>
   cd <repository-name>

2. Install dependencies:
   npm install
   
### Running Tests

1. Configure the environment in `playwright.config.ts` OR set environments and variables from Gitlab settings
2. Run tests using:
   - npm run uitest_uat
   - npm run apitest
   - npm run dbtest
   
### Generating Reports

Test reports are generated in the `ortoni-report/` directory. Open `ortoni-report/ortoni-report.html` in a browser to view the results. Additionally, `Github report` is also integrated.


## Visuals


## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Support

For any issues or questions, please open an issue in the repository or contact the maintainers.
