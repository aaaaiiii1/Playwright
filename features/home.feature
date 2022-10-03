Feature: The Internet Website Homepage

  Scenario Outline: As HRM user, I can open the HRM Staging Website
    Given I open the browser and load the url <homepageurl>
    Then I should see a title <homepagetitle>

    Examples: 
      | homepageurl                      | homepagetitle    |
      | https://hrm-qa.kingwork.vn/login | WELCOME SIGN IN! |
