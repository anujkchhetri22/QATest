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
