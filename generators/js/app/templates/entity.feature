Feature: <%= entityCapital %>
  As a security engineer I would like
  manage my <%= entitiesLower %>

  Scenario: I can create a <%= entityLower %>
    When I create <%= entityLower %> "Test"
    Then I see the "Test" <%= entityLower %>

  Scenario: I can update a <%= entityLower %>
    Given I create <%= entityLower %> "Test"
    When I update the <%= entityLower %> name to "New"
    Then I see the "New" <%= entityLower %>

  Scenario: I can delete a <%= entityLower %>
    Given I create <%= entityLower %> "Delete"
    When I delete the <%= entityLower %> "Delete"
    Then I can not see the "Delete" <%= entityLower %>

  Scenario: I can select a <%= entityLower %>
    Given I create <%= entityLower %> "Select"
    When I select the <%= entityLower %> "Select"
    Then I can see the "Select" as selected <%= entityLower %>

