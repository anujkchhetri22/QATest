1. Install the required packages:

npm install --save-dev @types/node @types/cucumber @types/webdriverio cucumber ts-node typescript webdriverio


2. Create a package.json file with the following content:


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



3. Create a tsconfig.json file:



{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true
  }
}


4. Create a features folder with a “sample.feature”  file:



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


5. Create a step-definitions folder with a sample.steps.ts file:



import { Given, When, Then } from 'cucumber';
import { browser, $, $$, expect } from 'webdriverio';

Given('I am on the website', async () => {
  await browser.url('https://magento.softwaretestingboard.com/');
});

When('I access the Shop', async () => {
  await $('a[href="/shop"]').click();
  await expect(browser).toHaveUrlContaining('/shop');
});

When('I filter for a Certain Category', async () => {
  // Assuming the category filter is identified by the CSS selector 'input.category-filter'
  await $('input.category-filter').setValue('JavaScript');
  await $('button.category-filter-submit').click();
  // Add an assertion to check if the category is applied successfully
  await expect($('span.category-title')).toHaveText('JavaScript');
});

When('I open the Product Page', async () => {
  // Assuming the product link is identified by the CSS selector 'a.product-link'
  await $$('a.product-link')[0].click();
  // Add an assertion to check if the product page is loaded successfully
  await expect(browser).toHaveUrlContaining('/product');
});

When('I add multiple quantities of the product to the cart', async () => {
  // Assuming the quantity input is identified by the CSS selector 'input.quantity'
  await $('input.quantity').setValue(2);
  await $('button.add-to-cart').click();
  // Add an assertion to check if the product is added to the cart successfully
  await expect($('span.cart-quantity')).toHaveText('2');
});

Then('I perform a Checkout', async () => {
  // Assuming the checkout button is identified by the CSS selector 'button.checkout'
  await $('button.checkout').click();
  // Add assertions or further actions to complete the checkout process
  // For example, you might want to check if the checkout page is loaded
});


6.	Run the test using the command:

npm start

