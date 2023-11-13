1.	Install the required packages:

npm install --save-dev @types/node @types/cucumber @types/webdriverio cucumber ts-node typescript webdriverio


2.	Create a package.json file with the following content:


{
  "scripts": {
    "start": "cucumber-ts"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^14.0.29",
    "@types/cucumber": "^7.0.0",
    "@types/webdriverio": "^7.10.3",
    "cucumber": "^7.0.0",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.5",
    "webdriverio": "^7.11.1"
  }
}



3.	Create a tsconfig.json file:



{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true
  }
}


4.	Create a features folder with a “sample.feature”  file:



Feature: Sample Feature
  As a user
  I want to perform a sample checkout process

  Scenario: Checkout a product
    Given I am on the website
    When I access the Shop
    And I filter for a Certain Category
    And I open the Product Page
    And I add multiple quantities of the product to the cart
    Then I perform a Checkout


5.	Create a step-definitions folder with a sample.steps.ts file:



import { Given, When, Then } from 'cucumber';
import { browser, $, $$ } from 'webdriverio';

Given('I am on the website', async () => {
  await browser.url('https://magento.softwaretestingboard.com/');
});

When('I access the Shop', async () => {
  // Perform actions to access the shop
});

When('I filter for a Certain Category', async () => {
  // Perform actions to filter for a certain category
});

When('I open the Product Page', async () => {
  // Perform actions to open the product page
});

When('I add multiple quantities of the product to the cart', async () => {
  // Perform actions to add multiple quantities to the cart
});

Then('I perform a Checkout', async () => {
  // Perform actions to complete the checkout
});


6.	Run the test using the command:

npm start
![image](https://github.com/anujkchhetri22/QATest/assets/150718982/a4171f7b-e31f-440a-a5f4-f47a1feb5101)

