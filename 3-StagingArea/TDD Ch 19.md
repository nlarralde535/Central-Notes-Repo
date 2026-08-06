---
tags:
  - Note/Book/TDD
createdDate: 2026-08-05
---
# Chapter 19
Page 97
Common pattern for writing tests coined by Bill Wake: 3A - Arrange, Act, Assert. 
 - arrange (create) some objects to test/exercise
 - act upon these objects in a meaningful way
 - assert that the result is the intended one 

Two constraints come into conflict when deciding how often/frequently to create new objects for testing
 - Performance: it's faster to reuse the same objects (setup) for as many tests as possible, if not all tests
 - Isolation: the success or failure of one test should have no impact on any other tests. 

"Test coupling" occurs when tests share objects and modify them in ways that do not account for negative side effects in other tests as a result of those changes. 