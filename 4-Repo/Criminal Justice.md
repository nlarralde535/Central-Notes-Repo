---
tags:
  - Plate/WhatToDo
isActive: "Y"
AP: 
priority: A
focusedSource: "[[Texas Legal Codes]]"
correspondingTags:
  - Note/City_of_Houston/Police
  - Note/CurrentEvents/Politics/Domestic/Local/Houston/HPD
createdDate: 2026-02-16
---
## Priority: 

## Description:
We got the idea to study Criminal Justice from Huey P. Newton and Bobby Seale

**6/21/2026:** This Plate came out of out reading Huey Newton and learning about the Black Panther Party around the beginning of this year. Huey understood that a solid understanding of the laws and procedures of the land makes navigating society and applying real meaningful pressure to citizens and systems alike far more effective and sustainable. Continued reading of Huey and other Panthers is part of this Plate's curriculum, but there is necessarily also study of general criminal justice topics (like Huey studied at Merritt College in Oakland) as well as the City of Houston Code of Ordinances.

## Resources: 
**Note:** While (1) and (2) provide important motivation and guidance, it is most immediately practical to study (5), (3), and (4), in that order.
```dataview
TABLE progressionPosition AS "Progression Position", isInFocus AS "In Focus?", AP
FROM #Note/Plate/CriminalJustice/Resource 
SORT isInFocus DESC, progressionPosition ASC
```
## Textbooks from SHSU Criminal Justice curriculum
 - Intro to Criminal Justice, SHSU
     - Burke, Carter, Fedorek, Morey, Rutz-Burri, & Sanchez. Introduction to the American Criminal Justice System
     - Rennison, C.M. 2022. Introduction to Criminal Justice. (4th ed). Sage Publications
     - Criminal Justice A Brief Introduction (2016)-Frank Schmalleger
     - Bohm, R. and Haley, K. (2021). Introduction to Criminal Justice 10th ed
 - Fundamentals of Criminal Law, SHSU
     - Texas Criminal Law: Principles and Practices 3rd or 4th Edition: Jerry L. Dowling, Sam Houston State University
     - Russell-Brown, K., & Davis, A. J. (2025). Criminal Law (2nd Ed.)
 - Correctional Systems & Practice, SHSU
     - Wymore, D., and Raber, T. (2022). Introduction to Corrections, California State University System
     - Allen, H. E., Latessa, E. J., & Ponder, B. Corrections in America: An Introduction 15th Edition
 - Police Systems & Practices, SHSU
     - Policing America: Challenges and Best Practices, 10th ed Kenneth J. Peak, William Sousa
     - Police in America: An Introduction. By Samuel Walker & Charles Katz, 2022


# Corresponding Tag: "Note/City_of_Houston/Police"
```dataview
LIST
FROM #Note/City_of_Houston/Police and -#Note/CurrentEvents/Politics/Domestic/Local/Houston/HPD
SORT createdDate ASC
```

# Corresponding Tag: "Note/CurrentEvents/Politics/Domestic/Local/Houston/HPD"
```dataview
LIST
FROM #Note/CurrentEvents/Politics/Domestic/Local/Houston/HPD 
SORT createDate ASC
```