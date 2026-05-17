---
tags:
  - Note/Book/LessonsLearnedInSoftwareTesting
  - Project/SoftwareDevelopmentPhilosophy
aliases:
  - _template
createdDate: 2026-04-22
---
# Lesson 22: black box testing is not ignorance-based testing
"To do black box testing well, learn about the user, her expectations and needs, the technology, the configurations the software will run on, the other software this software will interact with, the data the software must manage, the development process, and so on"
# Lesson 30: Use the logic of conjecture and refutation to evaluate a product
See philosopher Karl Popper' method of conjecture and refutation for more specifics. 

"Everything is a conjecture. Popper noticed that though we can't prove that a given conjecture is true, it may be possible to prove it to be false. Therefore he suggested that the only confidence a given conjecture deserves would come from trying hard to refute it and not being able to."

This applies to testing in 3 important ways:
- "when you want to show that a product works well, find ways to REFUTE that it works well"
- "A well-formed belief about the integrity of the software product should be falsifiable. That means we should be able to imagine new information that contradicts our belief in the integrity of the software product"
- "No amount of testing provides certainty about the quality of a product. That a software product works as intended is always a matter of conjecture. Do as much as is reasonable to refute this conjecture."

# Lesson 32: You discover requirements via conference, inference, and reference 
See *Exploring Requirements: Quality Before Design* by Cause and Weinberg

"A tester who treats project documentation (project specs, use cases, Epics, etc) as the sole source of requirements is crippling his test process."

Requirements information comes to us primarily in 3 ways: 
- conference: confer with someone whose opinion on quality matters and determine what matters to them
- inference: extrapolate form OTHER information you know about the product to determine which requirements matter
- reference: discover implicit and explicit specifications and base your testing on these

# Lesson 38: Use heuristics to quickly generate ideas for tests
See *How to Solve It* by Polya 1957

"A heuristics is a rule of thumb, a way of making an educated guess. Because the number of possible test cases is infinite, we are stuck making guesses about what small population of test cases will be effective under the time and budget constraints we face."

Examples: 
- test at the boundaries
- test every error message 
- test configurations that differ from what the programmers use
- run tests that are annoying to set up

"There is no inherent wisdom in heuristics, all they do is make a suggestion for your consideration. Blindly following heuristics that you don't understand is not good testing practice."

# Lesson 42: Confusion is a test tool 
"When you feel confused that could be telling you something important. ... The more you learn about the software product, the technological context/environment in which it operates, and testing in general, the more powerful a compass your confusion becomes. " 

This is Hans