---
tags:
  - Plate/____
  - Plates/Plate
  - Plates/Template
priority: "A | B | C | D"
isActive: "y | n"
correspondingTags:
  - aaa
  - bbb
createdDate: "{{date}}"
---
## Description:

# Sources
```dataview
TABLE progressionPosition
FROM #Note/Plate/_____/Source 
SORT progressionPosition ASC
```

# Corresponding Tag: "aaa"
```dataview
LIST
FROM #aaa
```

# Corresponding Tag: "bbb"
```dataview
LIST
FROM #bbb
```

# LOG
...
