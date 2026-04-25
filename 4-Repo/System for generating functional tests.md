---
tags:
  - Note/Plate/Tech/SoftwarePhilosophy/Testing
  - Note/Book/LessonsLearnedInSoftwareTesting
  - Project/SoftwareDevelopmentPhilosophy
aliases:
  - _template
createdDate: 2026-04-02
---

# Reference: Lessons Learned in Software Testing 
##  Chapter 3: Testing Techniques 
Pg 37-38:
In this chapter the authors describe two coverage-based test techniques: state-based testing and path testing. State-based testing involves walking a program thru a series of state transitions and checking the results of each transition. Path testing involves the steps associated with getting the program to a given state (think happy-path testing).

It occured to us while reading this ^ that a useful system for designing a set of functional tests that cover as many paths as makes sense to do is the following: 
 - determine all of the initial states that the program can be in
 - determine as many final/terminal states as makes sense
 - elaborate as many paths between the set of initial states and the set of final/terminal states as makes sense
 - write path tests for each of these ^ paths

## Chapter 5: Automated Testing
Pg 106 & 113: **Task Libraries**
"Analyze use cases into constituent tasks. Each tasks should be conceptually distinct. Creating library functions for these tasks can be used in your test scripts. "

Task Libraries as an abstraction for specific test case procedures follow/build upon the pattern that Playwright Fixtures establish for setup/tear down of test state. 

Following the above system outline, another step can be added to improve the maintainability of the test suite: 
 - factor-out common test procedures into task library scripts for reuse across multiple tests