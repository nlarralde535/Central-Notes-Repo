# Status: todo
```dataview
TABLE duedate, category, priority
FROM #ToDo and -#ToDo/Template
WHERE status = "todo"
SORT priority ASCENDING 
```

# Status: in progress 
```dataview
TABLE duedate, category, priority
FROM #ToDo and -#ToDo/Template
WHERE status = "in progress"
SORT priority ASCENDING 
```

# Did you forget to remove the Template tag?
```dataview
LIST
FROM #ToDo/Template
```