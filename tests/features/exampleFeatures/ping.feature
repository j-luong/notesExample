Feature: I can hit the ping route

  Scenario Outline: I can hit the ping route
    Given I have the note service
    When I hit the /ping route
    Then I should get the expected status code, <status>
    And My response should have object key, <key>
    And The key, <key>, should have value, <value>

    Examples:
      | status | key    | value          |
      | 200    | 'ping' | 'Hello world!' |
