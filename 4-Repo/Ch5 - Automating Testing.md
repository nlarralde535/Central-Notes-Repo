---
tags:
  - Note/Book/LessonsLearnedInSoftwareTesting
aliases:
  - _template
createdDate: 2026-05-14
---
# Introduction 
"The role of testing is to gain information. What information is your automation providing?"

# Lesson 115:  user interfaces change
Abstract the user interface on your test automation designs; this will centralize the area where changes to the test suite need to be made whenever the UI inevitably changes. 

A technique for providing such an abstraction is Task Libraries: "Analyze the use cases and user workflows into constituent, discrete tasks. Each task should be conceptually distinct. Pay particular attention to the start and end states of each task. Create reusable functions that can be used across multiple automated test scripts. This way, when something in a given task changes (UI change) only that task library function needs to be updated."

# Lesson 120: test automation projects require skill in programming, testing, and project management 
"It's usually important to assign different people to test design and to automation. Each is a full-time job."

" **Testing**: well-intentioned programmers with little insight into testing can easily create test suites that are interesting but of little value. What purpose will the tests serve? How will they help find bugs? Which bugs? Are the tests informed by an understanding of the product user domain?"

" **Programming**: test automation IS programming. Managing, installing, configuring, and maintaining the tools requires programming skill. Test automation isn't easy, and won't succeed without following software engineering principles."

# Lesson 132: automate tests using programming interfaces
"Public APIs are documented as part of the software product. They can't change much, and their stability makes them attractive for test automation."

"...we conclude that there is strong correlation between the availability of programming interfaces for testing and the development of powerful automated test suites."

"Programming interfaces include APIs, CLIs, COM interfaces, HTTP, and more. You'll need to learn the lingo and the technology."

"ONE WAY OR ANOTHER YOU'LL HAVE TO LEARN THE DETAILS OF THE INTERFACE TECHNOLOGY THAT YOUR AUTOMATED TESTS USE"

# Lesson 136: Testability is often a better investment than automation 
Testability = test support code INSIDE the product which provides control or visibility

Automation = test support code OUTSIDE the product

# Lesson 137: Testability is visibility and control
"Any features that aid your ability to observe or control software operations will improve testability."

Some examples of such features:
- access to source code (and the ability to read/understand it)
- logging: useful for catching bugs sooner, analyzing bug patterns, gather information , assess test coverage. Examples include error logs, usage profiles, resource utilization logs
- diagnostics: can alert of potential problems. Examples include built-in assertions, data integrity checks, code integrity checks, memory integrity checks. Diagnostics are powerful when combined with logging.
- error simulation: error state triggers can be placed at low level of the product software to facilitate testing of error states that can be hard to induce in a systematic and repeatable way. 
- test points: these allow data to be inspected or modified at various points in the system 
    - **NOTE**: support engineers are an excellent source of ideas for specific test points or diagnostics to implement

# Lesson 140: Automate for immediate impact

Automated testing does not necessarily mean "automate all manual tests": this attitude leads to an over-emphasis on GUI tests
