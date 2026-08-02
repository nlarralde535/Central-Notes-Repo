---
tags:
  - Note/Book/TDD
createdDate: 2026-07-27
---
# Chapter 14
Page 71
Note: the main difference between the way I develop code and TDD is that I don't write separate/distinct test cases to confirm my assumptions about my code as I'm developing it. Instead I write disposable `print()` statements , which is a habit we got from Dr. Parks.

Capturing your experiments in tests is probably better than doing so in `print()` statements that will be removed. The tests that survive the development process will probably be useful. Even if it is faster to just write `print()` statements.