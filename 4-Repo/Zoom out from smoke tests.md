---
tags:
  - Note/Plate/Tech/SoftwarePhilosophy/Testing
  - Note/Project/SoftwareDevelopmentPhilosophy
aliases:
  - _template
createdDate: 2026-04-22
---
# Context
While watching this video **It's Time We Go Beyond the Test Pyramid** 
https://youtu.be/IBvYFRSw4do?si=vQ2kAk-1bWw7kdz9
the presenter makes the point that a "service test", the middle layer in the pyramid, is NOT meant to be just a synonym for "integration test", but rather (in the context of BDD) these tests are meant to test from the perspective of the user. 

This ^ got us thinking  about what the point of tests are in the first place. Ideally when a test fails, that failure should give you meaningful information about the state of the software under test: 
 - where did the failure occur?
 - what were the predictions before failure?
 - what is the failure state?
The first point there ^ is particularly important, because a good test SHOULD make it easy to localize the problem, or at least narrow the problem domain. 

This ^ is something we complain about regularly when troubleshooting car problems using OBDII codes: the OBDII tests do not localize the root causes of the trouble codes produced  by failed tests.

# The Point:

One purpose tests must serve in order to be useful is facilitating diagnosis of a problem. 

The traditional electronic smoke test answers the question "can power be supplied to the board?". When this test fails, smoke pours out of one or more parts of the board. Hence the diagnostic utility of the failed smoke test: 
 - can the board be powered? No.
 - why not? Idk, but I'd start by troubleshooting the areas where the smoke is pouring from.

When the smoke test passes, all we can say is that power was successfully applied to the board. This is important because usually an electronic circuit board is one part of a larger apparatus, and if the circuit board cannot be powered properly then the odds of the overall apparatus function as intended are low. 

The Test Pyramid metaphor begins to seem useful here, and it is. Or at least the concept of testing at different implementation layers seems useful. And THIS is where a tester can truly distinguish themselves and be maximally useful: 
 - understand the IMPLEMENTATION LAYERS of the software you're testing
 - build tests specific to each layer
 - run your tests one layer at a time, staring from the lowest layer

This ^ is how you zoom out from the smoke test. 

# Addendum

What does it mean to "understand the implementation layers" of a software product?