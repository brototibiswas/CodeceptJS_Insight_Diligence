exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      show: true,
      waitForNavigation: "networkidle0",
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0',
      waitforTimeout: 5000
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/LoginPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: './output/allure/allure-results',
      screenshotOnFail: true,
      retryFailedStep: true
    }
    // autoLogin: {
    //   enabled: true,
    //   saveToFile: true,
    //   inject: 'login',
    //   cms: {

    //   }
    // }
  },
  cucumber: {
    cucumberOptions: {
      jsonFile: './report/cucumber_report.json'
    }
  },
  tests: './*_test.js',
  name: 'Codecept'
}