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
