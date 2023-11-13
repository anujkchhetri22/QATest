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
