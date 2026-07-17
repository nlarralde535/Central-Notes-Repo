---
tags:
  - Note/Book/TDD
createdDate: 2026-05-21
---
# Preface
Page xi:
"Imagine programming as turning a crank to pull a bucket of water from a well ... You need a ratchet mechanism to allow you to rest in between bouts of cranking. ... The heavier the bucket, the closer the teeth need to be on the ratchet. ... The tests in TDD are the teeth on the ratchet"

Page xii:
DEFINITION: "TDD is an awareness of the gap between decision and feedback during programming, and techniques to control that gap."

# Introduction
Page xix:
Two simple rules for ordinary-skilled software engineers
 - write failing automated tests before writing any code 
 - remove duplication

# Chapter 1
Page 1
TDD rhythm: 
 1. Quickly add a new test
 2. Run all tests and see the new test fail
 3. Make a little change 
 4. Run all tests again and see them all pass
 5. Retractor to remove duplication
Note: it is crucial that there be a known condition where the test fails. The test must fail in the absence of the implementation it is testing to ensure against false positives. 

Page 4
The inciting question: "what set of tests, when passing, will demonstrate the presence of code which we are confident will `do the right thing` ?"

"When we write a test ... we are telling ourselves a story about how the operation will look from the outside ... it's better to start from the best-possible API and work backwards from there..."

Page 8
Dependency & Duplication: "The problem is the dependency between the code and the test...you can't change one without changing the other. Dependency is the key problem in software development at all scales ... Duplication is the symptom ... most often takes the form of duo are logic - the same expression showing up in multiple places in the code. ... eliminating duplication in programs eliminates dependency. Hence the 2nd rule in TDD"


