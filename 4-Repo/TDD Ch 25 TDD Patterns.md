---
tags:
  - Note/Book/TDD
createdDate: 2026-08-18
---

# Chapter 25

Page 126
This chapter opens with a discussion about stress during the work of programming  and its affect on the number/quality of tests run (more stress leads to less testing which leads to more stress... ). Beck suggests intentionally listing anticipated testing work is a way to manage this stress, quote: 
    "...never take a step forward without knowing  where your foot is going to land. When we sit down to a programming session, what is it we intend to accomplish?"
He refers to this as the Test List: "what we put on the list are the tests we want to implement"
 - list examples of every operation to be implemented 
 - list all anticipated refactoring 
"As you make tests run, the implementation will imply new tests (and new refactorings). Write these down on the list."

Page 128
ASSERT FIRST
 - start building a system by writing stories you want to be able to tell about the finished system
 - start implementing a particular bit of functionality by writing the tests you'd want to see passing once the implementation is in place
 - start writing a test by writing the assertions that must pass once the test is fully written 
Kent credits Jim Newkirk with this ^ technique saying "when you're writing a test you're solving severa l problems (answering several questions) at once:"
 - where does the functionality belong?
 - what should the relevant names of things be?
 - how will you check for the correct answer?
 - what other tests does this test imply?

Page 129
"You are writing tests to an audience." 
This is massive, we must keep this in mind when writing tests. 
