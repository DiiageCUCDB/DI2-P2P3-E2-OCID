@smoke
Feature: Home page
  As a visitor
  I want to open the application
  So that I know it is up and running

  Scenario: Visiting the app root url
    Given I visit "/"
    Then I should see the heading "You did it!"
