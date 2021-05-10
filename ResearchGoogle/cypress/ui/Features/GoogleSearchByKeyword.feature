Feature: GoogleSearch
  Background:
	Given the browser is already launched

  Scenario: Search by keyword
    Given the research Google page is already opened
    When I search a keyword "kwd1" 
    Then the list of results contains the keyword "kwd1" is displayed
    
