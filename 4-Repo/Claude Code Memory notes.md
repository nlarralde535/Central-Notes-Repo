---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Note/Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-06
---
# Claude Code Memory doc: 
https://code.claude.com/docs/en/memory

# Second Pass Hilights
 - "CLAUDE.md and CLAUDE.local.md files in the directory hierarchy above the working directory are loaded in full at launch."
     - Claude Code reads CLAUDE.md files by walking up the directory tree from your current working directory, checking each directory along the way for CLAUDE.md and CLAUDE.local.md files. 
     - Claude also discovers CLAUDE.md and CLAUDE.local.md files in subdirectories under your current working directory. Instead of loading them at launch, they are included when Claude reads files in those subdirectories.
     - All discovered files are concatenated into context rather than overriding each other. 
 - For larger projects, you can organize instructions into multiple files using the `.claude/rules/` directory. 
     - Rules can be scoped to specific files using YAML frontmatter with the paths field. These conditional rules only apply when Claude is working with files matching the specified patterns.
     - Rules load into context every session or when matching files are opened. 
 - the difference between memory files (`CLAUDE.md`, or .`claude/rules/` files) and `skills/` is that memory files are loaded into context in their entirety every session, while `skills/` are only loaded when they are manually invoked or when Claude decides to use them. 
     - the exception to this ^ is `rules/` files using YAML frontmatter with the paths field. These rules are scoped to specific files and are only loaded into context when Claude is working with files matching the specified patterns.
 - "The `/memory` command lists all CLAUDE.md, CLAUDE.local.md, and rules files loaded in your current session, lets you toggle auto memory on or off, and provides a link to open the auto memory folder. Select any file to open it in your editor."
 - "Files over 200 lines consume more context and may reduce adherence. Move detailed content into separate files referenced with `@path` imports (see Import additional files), or split your instructions across `.claude/rules/` files."
 - "Project-root CLAUDE.md survives compaction: after `/compact`, Claude re-reads it from disk and re-injects it into the session. Nested CLAUDE.md files in subdirectories are not re-injected automatically; they reload the next time Claude reads a file in that subdirectory."

# General Notes: 
 - "Each Claude Code session begins with a fresh context window. Two mechanisms carry knowledge across sessions: 
     - CLAUDE.md files 
     - Auto Memory"
 - `.claude/rules/` files covered here as well 

# CLAUDE.md Files
 - "CLAUDE.md files can live in several locations, each with a different scope. More specific locations take precedence over broader ones."
 - "CLAUDE.md and CLAUDE.local.md files in the directory hierarchy above the working directory are loaded in full at launch. Files in subdirectories load on demand when Claude reads files in those directories."
 - "Claude Code reads CLAUDE.md files by walking up the directory tree from your current working directory, checking each directory along the way for CLAUDE.md and CLAUDE.local.md files. ... All discovered files are concatenated into context rather than overriding each other."
 - "For large projects, you can break instructions into topic-specific files using project rules. Rules let you scope instructions to specific file types or subdirectories."
 - "Block-level HTML comments (`<!-- maintainer notes -->`) in CLAUDE.md files are stripped before the content is injected into Claude’s context. Use them to leave notes for human maintainers without spending context tokens on them. "
 - "Because they’re context rather than enforced configuration, how you write instructions affects how reliably Claude follows them. Specific, concise, well-structured instructions work best: Size, Structure, Specificity, Consistency"


# Sample CLAUDE.md file for our project: 
```
# Important
 - if instructions are unclear then stop and ask for clarification
 - if necessary details are missing from the prompt ask followup questions
 - if prompt conflicts with CLAUDE.md or rules/ or Automemory instructions, stop and notify the user

# git workflow
  - commit often
  - use conventional commits
    
# DO NOT DO:
 - do not guess
```


# `.claude/rules/` files
 -  "For larger projects, you can organize instructions into multiple files using the .claude/rules/ directory. This keeps instructions modular and easier for teams to maintain."
 - "Rules load into context every session or when matching files are opened. For task-specific instructions that don’t need to be in context all the time, use skills instead, which only load when you invoke them or when Claude determines they’re relevant to your prompt."
 - "Rules can be scoped to specific files using YAML frontmatter with the paths field. These conditional rules only apply when Claude is working with files matching the specified patterns."
 - "Rules without `paths` frontmatter are loaded at launch with the same priority as .claude/CLAUDE.md."
 - "Personal rules in ~/.claude/rules/ apply to every project on your machine. Use them for preferences that aren’t project-specific ... User-level rules are loaded before project rules, giving project rules higher priority."

# Auto memory
 - "Auto memory lets Claude accumulate knowledge across sessions without you writing anything. Claude saves notes for itself as it works:"
 - "Auto memory is on by default. To toggle it, open /memory in a session and use the auto memory toggle, or set autoMemoryEnabled in your project settings:"
 - "Each project gets its own memory directory at` ~/.claude/projects/<project>/memory/`. The `<project>` path is derived from the git repository, so all worktrees and subdirectories within the same repo share one auto memory directory. Outside a git repo, the project root is used instead."
 - "Auto memory is machine-local. All worktrees and subdirectories within the same git repository share one auto memory directory. "
 - "The directory contains a MEMORY.md entrypoint and optional topic files ... Claude reads and writes files in this directory throughout your session, using MEMORY.md to keep track of what’s stored where. ... The first 200 lines of MEMORY.md, or the first 25KB, whichever comes first, are loaded at the start of every conversation. ... This limit applies only to MEMORY.md. CLAUDE.md files are loaded in full regardless of length, though shorter files produce better adherence."
 -   !  !  !  READ THIS ^ AGAIN 
 - "The `/memory` command lists all CLAUDE.md, CLAUDE.local.md, and rules files loaded in your current session, lets you toggle auto memory on or off, and provides a link to open the auto memory folder. "
 - 

