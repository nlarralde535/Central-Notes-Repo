---
tags:
  - Note/Plate/Tech/Resource/Linux
plate: "Tech"
progressionPosition: "2"
isInFocus: "Y"
createdDate: 2026-06-23
---
# Description
Digital book in our Google Drive
**6/21/2026:** This will be a good practical review of the material in in [[How Linux Works]]. NOTE: At this point it would be good to also briefly review Sed One-Liners and Awk One-Liners. 

BOOKMARK: Page 30

# Notes: 
Page 30
Interesting pattern: you can call a separate shell script X from within your shell script Y, and validate the exit code of X within your script: 
```
#!/bin/bash

# save path to X as a variable 
scriptX="/path/to/X"
# call X, passing all input params ($@)
x="$($scriptX "$@")"
# check X's exit code ($?) other than 0
if [! $? -eq 0] ; then
  exit 1
fi 
```

Page 26
Validating floating-point input
"To include another shell script as part of this one, use the '.' source notation"
```
#!/bin/bash
. script-to-import.sh
```

Page 25:
Validating Integer Input
DO NOT chain logical operators within a bash `test` condition in a effort to collapse nested `if`
blocks: always prefer nested `if` blocks. This is because "...you can't guarantee the second condition won't be tested as well", meaning bash does not perform lazy-evaluation the way most other programming languages do. Here's a link to a clearer example and explanation: https://unix.stackexchange.com/questions/548737/bash-chained-logical-operator-execution-order-lazy-evaluation

