---
tags:
  - Note/Book/LessonsLearnedInSoftwareTesting
aliases:
  - _template
createdDate: 2026-05-14
---
# Introduction 


# Lesson 276: the real test plan is the set of ideas that guides your test process
"Your test plan is whatever idea guide the work that you do. THAT you have such ideas is important. WHETHER and HOW you document those ideas is an entirely separate issue"

# Lesson 277: design your test plan to fit your context
"The object of planning is to make choices about the test process that allow you to test within the CONSTRAINTS of the project environment, while exploiting the RESOURCES available to you to achieve your mission."

Per the Satisfice Model there are 5 givens for any software testing project:
-  development: the system which produces the code you test
- requirements: the criteria that define a successful software product 
- test team: the folks available to test the product 
- test lab: the testing resources available to you 
- mission: the problem you must solve in order to be considered successful by your clients

"You may be able to negotiate some of these givens... but you can't expect much control over any of them. Your control comes in how you respond to your situation. "

# Lesson 278: use the test plan to express choices about strategy, logistics, and work products

"A good test plan expresses a set of choices about the test process. Three major categories describe the choices you must make:"

1 Strategy: 
- how will you cover the product to find important problems fast?
- What specifically will you test?
- what techniques will you use to create tests?
- how will you recognize bugs when they occur

2 Logistics:
- how will you apply available resources to execute the test strategy?
- who will test and when will they test?

3 Work Products:
- how will your work be presented to your clients?
- how will you track bugs?
- what test documentation and reports will you make?

NOTE: 
Test cases and test documentation and test reports are AS OPAQUE to clients/stakeholders as the code is (despite mostly being written in plain language). 

NOTE: 
It's probably safer to assume that the test work products you produce will never be consumed directly by anyone other that you their author, OR other testers who are familiar with the test process that produces the test work products. You will always have to INTERPRET the test work products FOR OTHERS: developers, stakeholders, etc. 

# Lesson 280: how to lie with test cases
"If you take all the briefcase carried by executives and senior managers withing your company, and you like them up to weight them all...what does that information tell you about the future of the company? Nothing. Yet the contents of those briefcases will indeed say alot.

Test cases are like briefcases. Counting them without regard to their content tells you nothing.

Calculating the pass/fail ratio tells you nothing. Calculating the percentage of completed test cases vs total test cases tells you nothing. ..."

Alternatives to these ^ meaningless calculations and inferences which ignore test case contents:
- Nothing! "Consider that it may be better to know little and simply live with that reality than to know little and yet pretend to know alot."
- examine and discuss test case contents 


# Lesson 283: apply the principle of diverse half-measures
The principle: "... It's better to do more different kinds of testing to a pretty good level than to do one or two kinds of testing perfectly"

"This strategic principle services from the structured complexity of software products. When testing, you're sampling a complex space. No single test technique will sample this space in a way that finds all of the important problems/bugs quickly."

"To ensure diversity in your testing, use the five-fold testing system from Ch 3 Testing Techniques. Diversify to maximize the bug find rate. Diversify to minimize the chances of overlooking important problems."

# Lesson 285: Your first strategy on a project is always wrong
Strategy should evolve as you continue to learn about the product and it's failure patterns, as you see where it's weaknesses are, and as new ways to test it occur to you. 

NOTE:
We heard someone once say "every software project is unique because no one has ever written this specific piece of software with this specific team for this specific user base using this specific technology stack and these specific constraints."

# Lesson 287 - 288: test according to the maturity of the product - use test levels to simplify discussions of test complexity 
- early in the project, test sympathetically: early on the product doesn't work very well, and you don't know much about it
- In the middle of the project, test [AGGRESSIVELY]()
- near the end of the project, test DIVERSELY: it's harder to find bugs in a mature product, so you u have to get more creative 
- in the final days, test METICULOUSLY: as the ship date nears, the focus of testing should become more defensive
The overall goal is to adjust the strategy as the product improves. 

One example of a test level hierarchy: 
- level 0: smoke testing
- level 1: capability testing 
- level 2: function testing - testing which examined both the capability and basic reliability of each individual function and subfunction 
- level 3: complex testing - tests that involve interactions of functions  which form complex scenarios
The overall theme is to start testing broadly and sympathetically, then move into depth and deviousness as the product matures. 

# Lesson 289: test the gray box
"The concept is simple: if you know something about how the product works on the inside, you can test it better from the outside. ... you are testing from the outside of the product, but your choices are informed by your knowledge of how the underlying components operate and interact"
