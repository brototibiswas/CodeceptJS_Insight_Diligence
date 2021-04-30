Feature: Login

  Scenario: Login to website
    Given I am in login page
    When I enter valid login info
    Then I should be directed to homepage

  Scenario: Click Order button
    When I am on dashboard
    And I click on Create Order button
    Then I should be directed to order form
