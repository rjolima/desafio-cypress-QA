import 'cypress-failed-log'
import 'cypress-mochawesome-reporter/register';
import '../support/varGlobais'
import './commands/ebacCommands'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item = runnable
    const nameParts = [runnable.title]
    if (runnable.hookName) {
      nameParts.push(`${runnable.hookName} hook`)
    } else {
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
    }
    const fullTestName = nameParts.filter(Boolean).join(' -- ')
    const screenshotPath = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`

    addContext({ test }, screenshotPath)
  }
})

beforeEach(function() {
  cy.log('Test Started')
})

afterEach(function() {
  cy.log('Test Completed')
})

before(function() {
  cy.log('Test Suite Started')
})

after(function() {
  cy.log('Test Suite Completed')
})
