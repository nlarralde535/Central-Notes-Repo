---
tags:
  - Note/Plate/Tech/SoftwarePhilosophy/Testing
  - Note/Book/LessonsLearnedInSoftwareTesting
aliases:
  - _template
createdDate: 2026-04-02
---
# Chapter 3: Testing Techniques 
Pg 37-38:
In this chapter the authors describe two coverage-based test techniques: state-based testing and path testing. State-based testing involves walking a program thru a series of state transitions and checking the results of each transition. Path testing involves the steps associated with getting the program to a given state (think happy-path testing).

It occured to us while reading this ^ that a useful system for designing a set of functional tests that cover as many paths as makes sense to do is the following: 
 - determine all of the initial states that the program can be in
 - determine as many final/terminal states as makes sense
 - elaborate as many paths between the set of initial states and the set of final/terminal states as makes sense
 - write path tests for each of these ^ paths