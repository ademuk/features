Feature: Import project

  Background:
    Given I am logged in

  Scenario: Import from git repo
    Given my git repo has features
    When I import it
    Then I should see a list of features

  Scenario:
    Given my git repo does not have features
    When I import it
    Then I should see an option to specifiy where features will be saved
