# In Progress
```dataview
TABLE status, createdDate
FROM #Project and -#Project/Template
WHERE status = "in progress"
SORT createdDate DESC
```

# Not Started
```dataview
TABLE status, createdDate
FROM #Project and -#Project/Template
WHERE status = "todo"
SORT createdDate DESC
```

# Done
```dataview
TABLE status, createdDate
FROM #Project and -#Project/Template
WHERE status = "done"
SORT createdDate DESC
```
