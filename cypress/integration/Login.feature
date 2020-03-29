Feature: Login

I want to log into SSAT Portal
  
  @smoke
  Scenario: SSAT Portal Login
    Given I open login page
    When enter user name and password
    And user click on sign in button
    Then verify correct header text display in landing page
    Then user logout from application
     