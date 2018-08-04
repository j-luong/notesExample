Feature: Create a note
  In order to use the service
  As a note api user
  I want to be able to create a note

  Scenario Outline: I can create a note with subject, and body
    Given I have the note service
    And I have a subject <subject>
    And I have body <body>
    When I create a note
    Then I should get the expected status code, <status>
    And My response should have object key, <key>

    Examples:
      | status | subject         | body           | key      |
      | 201    | 'My first note' | 'Hello world!' | 'noteId' |
