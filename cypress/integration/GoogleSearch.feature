Feature: Google Search
  Scenario: Search for remarkablemark on Google.
    Given I go to "https://www.google.com"
    When I search for "remarkablemark"
    Then I see "remarkablemark: Home"

  Scenario: Example
    Given I go to "http://example.com"
    Then I see "Example Domain"