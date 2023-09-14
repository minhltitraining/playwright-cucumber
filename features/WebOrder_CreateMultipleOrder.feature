Feature: To Test Web Order Create Order Functionality

  Background: Successful Login with Valid Credentials in WebOrder application
    Given WebOrder has been launch on Chrome
    When user enter valid credential
    Then All Order Page should be displayed

  Scenario Outline: Create Order with multiple positive and negative scenarios
    And User Clicks on Order link in All Order Page
    And User enters order data from "<SheetName>" and <RowNumber> into Create Order page
    Then User should should get proper expect result from "<SheetName>" and <RowNumber> after click Process button

    Examples: With Multiple Data
      | SheetName | RowNumber |
      | Sheet1    |         0 |

