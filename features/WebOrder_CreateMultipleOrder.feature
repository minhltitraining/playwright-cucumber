Feature: To Test Web Order Create Order Functionality



  Scenario Outline: Create Order with multiple positive and negative scenarios
    Given WebOrder has been launch on Chrome
    When user enter valid credential
    Then All Order Page should be displayed
    And User Clicks on Order link in All Order Page
    And User enters order data from <RowNumber> into Create Order page
    Then User should should get proper expect result from <RowNumber> after click Process button

    Examples: With Multiple Data
      | RowNumber |
      |         0 |
      |         1 |
      |         2 |
      |         3 |
      |         4 |
      |         5 |
      |         6 |
      |         7 |
      |         8 |
      |         9 |
      |        10 |
      |        11 |
      |        12 |
      

