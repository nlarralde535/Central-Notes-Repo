---
tags:
  - Note/Book/LessonsLearnedInSoftwareTesting
aliases:
  - _template
createdDate: 2026-05-14
---
# Introduction 
The testing project is driven by the programming project. What testers do is a reaction to what programmers do. 

# Lesson 165: Waterfall lifecycles pit reliability against time
"...rather than waiting until the end of a phase, we suggest reviewing designs and code as they become available for review"

# Lesson 177: Project documents are interesting fictions, useful but never sufficient 
"DO ask for specific information to fill in gaps when you work with a specification. DONT design your tests or plan your project on the assumption that the specification is complete, comprehensive, or accurate"

# Lesson 182: Great test planning makes late changes easy
"If late changes are inevitable then our task is to design testing processes that work well with late changes. Here are a few suggestions"
- develop tests as you need them, not in advance. This will reduce the amount of test work that becomes obsolete due to late changes
- keep test documentation as lean as possible 
- don't couple manual or automated tests the the specific fine details of the UI, because those details will almost certainly change. Design UI "smoke" tests that check the most basic, foundational aspects of the UI.
-  !!! develop a model of the users of the product and the benefits they will want to achieve from using it. Develop complex tests from this model. Most of these tests will not change rapidly as the project progresses 

Anticipate as much as possible the costs and inefficiencies you might face when late changes are introduced, then adapt your test processes accordingly. 

# Lesson 184: there is no universal formula for knowing how much testing is enough 


# Lesson 185: "Enough testing" means "enough testing for my clients to make good decisions"
"Because testing is an information-gathering process, you can stop when you've gathered enough information. ...you should stop when you reasonably believe the probability is low that the product still has important undiscovered problems."

Factors involved in deciding that testing is good enough: 
- awareness of the kinds of problems that would be important to find if they existed in the product
- awareness of how different parts of the product could exhibit important problems 
- reasonably diversified testing strategy to avoid tunnel-vision focus on only a subset of potential problems



# Lesson 192: try testing in pairs
"Pair testing is different from many other kinds of pair work because testing is an ideas generation activity rather than a plan-implementation activity. Testing is a heuristic search of an open-ended and multidimensional space. Pairing has the the effect of causing  each tester to explain and react to ideas."

# Lesson 194:  charter testing sessions, especially exploratory sessions
"Chartering" means detailing the specific testing task to be performed, the time box allowed for doing so, and other test details BEFORE any testing begins.

# Lesson 195: test in sessions
"A session is a protected block of time between 60 and 90 minutes where the tester is focused on testing. ... Testers who don't find ways to protect their time often have to work in short bursts due to frequent interruptions"