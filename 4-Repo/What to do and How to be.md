# The Point:

The point of this work is to answer the question
    "What do you do when the government enacts policies that you disagree with?"
Everything we're doing is towards answering this question. When the answering is sufficiently done, then the doing must begin. 

# Relevant Notes: 
```dataview
LIST
FROM #Note/WhatToDo or #Note/HowToBe 
SORT createdDate DESCENDING 
```
# Relevant Plates:
```dataview
TABLE isActive AS "Active?", focusedSource AS "In-Focus Resource", AP
FROM #Plate/WhatToDo
SORT isActive DESC
```

# Illustrative Flowchart
```mermaid
flowchart TD

subgraph s1 [1a: Establish Contact with members of local community]
publicMeetings([Attend public community meetings])
churchMeetings([Attend church group meetings])
end

subgraph s2 [1b: Read the documentation]
HouCodes([Read Houston Code of Ordinances])
TXCodes([Read Texas Law Code])
CJ([Study Criminal Justice])
Bible([Read the Bible and study biblical criticism])
History([Study history related to current events])
Econ([Study economics related to current events])
end

subgraph s3 [1c: Identify and describe problems clearly]
CurrentEvents([Follow and capture notes related to current events])
Questions1([Make note of questions that follow from current events])
Questions2([Make note of questions that could serve as Test Questions])
end

subgraph s4 [1d: Identify and describe solutions clearly]
Answers([Define our answers to noted questions])
Policy([Define our policy positions])
end

subgraph s5 [2: Initiate conversations with members of local community about the problems identified]
Conversations1[Elaborate the problems we have identified]
Converastions2[Outline our proposed solutions]
Conversations2[Communicate our policy positions]
Conversations3[Apply our Test Questions to our inerlocutors]
Feedback[Make note of valid counterarguments] 
end

subgraph s6 [3: Call to action]
direction TD
CTA[/Explicitly request that interlocutor join you in reading documentation\]
Friend[/acquire new friend, increase potential of making meaningful change\]
Foe[/acquire new enemy, shame them\]

CTA -->|they accept?|Friend
CTA -->|they decline?|Foe
end


s1 & s2 & s4 ==> s5 --> s6
s3 & s5 -.-> s4 
```

# Log

2026-09-17
Began bringing some order to this note. Added the "The Point:" section, which we will be modifying and clarifying going forward. But as it stands is pretty well captures the work. Also added the "Relevant Plates" section. 

2026-09-12
Added the "Illustrative Flowchart" to put the work we are doing into context, or to connect all of the work we're doing and to highlight the connections. 