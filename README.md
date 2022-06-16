# AutomationPlaywrightTests

<h3>Languages and Tools:</h3>

<p>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
<a href="https://playwright.dev/" target="_blank" rel="noreferrer">
<img src="https://playwright.dev/img/playwright-logo.svg" alt="playwright" width="40" height="40"></a>
</p>

***

## Installation dependencies

<details>
  <summary>Installation steps</summary><br />

```sh
cd AutomationPlaywrightTests
npm i
```

</details>

***

## Running Tests

<details>
  <summary>Running Tests</summary><br/>

  You can run autotests in one of several ways:

  1. Running tests in normal mode

  ```sh
  npm run test
  ```

  2. Running test in headless mode

  ```sh
  npm run test:headed
  ```

  3. Using the official plugin for VSCode

  <a href="https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright">Playwright Test for VSCode</a>

  4. Run on environments

  Use the project designation when running the test. Example below

  ```sh
  npx playwright test --project=QA
  ```

  Where is the project - environment indications

</details>

***

## Reporting

<details>
  <summary>Reporting</summary><br />

  A test run report is generated automatically in the catalog <i>playwright-reports</i>

  You can also run the report with the following command:

  ```sh
  npm run report
  ```

</details>
