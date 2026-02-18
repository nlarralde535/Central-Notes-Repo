
# In Progress:
```dataview
LIST
FROM #Essay/inProgress
SORT createdDate DESCENDING
```

# Not yet started:
```dataview
LIST
FROM #Essay/todo 
SORT createdDate DESCENDING
```

# Completed: 
```dataview
LIST
FROM #Essay/done  
```

# All Essays:
```dataview
LIST
FROM #Essay and -#Essay/template
SORT createdDate DESCENDING
```
