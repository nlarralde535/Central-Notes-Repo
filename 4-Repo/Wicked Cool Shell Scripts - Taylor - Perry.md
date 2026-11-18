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

BOOKMARK: Page 71


# Vocabulary Terms
- ANSI: American National Standards Institute 
- compound command: see `bash(1)`
- `source` or "sourcing" a shell script: see `bash(1)` "SHELL BUILTIN COMMANDS"
- parameter expansion: see `bash(1)` Parameter Expansion
- `setuid`: sets the effective user ID of the calling process (see setuid(2))


# Notes: 
Page 66
Subshells `$()` automatically inherit any functions defined in the shell that spawned them



Page 64
"Never run shell scripts under `setuid`" 



Page 53
Parameter expansion provides a mechanism for providing a default value when a variable is unset (undefined, uninitialized)
```
read myvar
echo ${ myvar:-5 }
```
Here ^ the value 5 is used if myvar is unset.




Page 45
Update a loop variable using shell arithmetic expansion like so
```
loopvar=$(( $loopvar - 1))
```



Page 45
Debug shell scripts using the `bash -x` flag, which "prints commands and their arguments as they are executed"



Page 43 (--> Page 26)
"sourcing" a shell script:
If you run a shell script within shell environment X by simply calling it via it's absolute path (`/path/to/my_script.sh`) the script is run in a subshell environment Y. "If instead you run the script using the dot (.) notation to source the script, the it is handled as though each command in the script were typed directly into the current shell", that is, environment X. "...if you source a shell script that contains an `exit 0` command it will exit the shell and log out of the terminal window", that is, it will exit environment X.



Page 41
the notation `${ blah }` is a form of "compound command". What is does is run the `blah` command in the current shell, which behavior differs from `$(blah)`, which runs `blah` in a subshell. 



Page 37
Lockfiles are a form of semaphore.
"Lockfiles are tricky though because many seemingly foolproof solutions don't actually work" An example:
```
while [ -f $lockfile] ; do
  sleep 1
done
touch $lockfile
```
"...fortunately the authors of the `procmail` email-filtering program also created a command-line utility `lockfile` that lets you safely and reliably work with lock files in shell scripts"
https://linux.die.net/man/1/lockfile



Page 35
Doing floating-point math in the shell: use `bc`. It is an ancient Unix program, read up on it before using it 



Page 35
Doing Integer math in shell scripts: `shell arithmetic expansion`  used the following syntax 
```
$(( 1 + 2 ))
```
See man page for bash(1) under **Arithmetic Expsnsion**: "evaluation is done with fixed-width integers with no check for overflow"
See https://phoenixnap.com/kb/bash-math



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

