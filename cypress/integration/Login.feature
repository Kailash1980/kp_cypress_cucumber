Feature: Login

  I want to log into Conduit
  
  @smoke
  Scenario: Conduit Login
    Given I open Conduit login page
    When user type username and password
        | username  | password  |
      | Garry123 | Test@123 |
    And user click on sign in button
    Then "Welcome to The SSAT" should be shown
     