---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Note/Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-11
---
# Permissions doc
https://code.claude.com/docs/en/permissions
# Permission Modes doc
https://code.claude.com/docs/en/permission-modes
# Claude Tools reference doc
https://code.claude.com/docs/en/tools-reference
# Anthropic example settings 
https://github.com/anthropics/claude-code/tree/main/examples/settings

# Second Pass Hilights 

 - You can view and manage Claude Code’s tool permissions with `/permissions` command. This UI lists all permission rules and the settings.json file they are sourced from.
 - Rules are evaluated in order: **deny -> ask -> allow**. The first matching rule wins, so deny rules always take precedence.
 - Permissions are set for TOOLS in a `settings.json` file: 
     - https://code.claude.com/docs/en/tools-reference 
     - **deny** or **ask** Tool permissions that can be used to protect parts of you system include: 
         - Bash(`<command>`)
         - Read(`/path`)
         - Edit(`/path`)
         - WebFetch(`domain:`)

# General Notes
- "Claude Code supports fine-grained permissions so that you can specify exactly what the agent is allowed to do and what it cannot"
- **Permissions** control which TOOLS Claude Code can use and which files or domains it can access. They apply to all tools (Bash, Read, Edit, WebFetch, MCP, and others).
-  **Permission Modes**: When Claude wants to edit a file, run a shell command, or make a network request, it pauses and asks you to approve the action. Permission modes control how often that pause happens. 
    - `default`:  Reads only
    - `acceptEdits`
    - `plan`: Reads only
    - `auto`: Claude is allowed to run anything 
    - `dontAsk`: only pre-approved tools
    - `bypassPermissions`
- "Permission Modes set the baseline. Layer permission rules on top to pre-approve or block specific tools in any mode except bypassPermissions, which skips the permission layer entirely."
- "You can view and manage Claude Code’s tool permissions with `/permissions` command. This UI lists all permission rules and the settings.json file they are sourced from."
- "Permission rules follow the same settings precedence as all other Claude Code settings, If a tool is denied at any level, no other level can allow it:"
    - Managed settings: cannot be overridden by any other level, including command line arguments
    - Command line arguments: temporary session overrides
    - Local project settings (.claude/settings.local.json)
    - Shared project settings (.claude/settings.json)
    - User settings (~/.claude/settings.json)
- Permissions are configured in `settings.json` files:
```
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git commit *)",
      "Bash(git * main)",
      "Bash(* --version)",
      "Bash(* --help *)"
    ],
    "deny": [
      "Bash(git push *)"
    ]
  }
}
```
- Permissions exist in 3 broad categories: 
     - **Allow** rules let Claude Code use the specified tool without manual approval.
     - **Ask** rules prompt for confirmation whenever Claude Code tries to use the specified tool.
     - **Deny** rules prevent Claude Code from using the specified tool.
 - "Rules are evaluated in order: **deny -> ask -> allow**. The first matching rule wins, so deny rules always take precedence."
 - Claude Code understand the following different tool categories: 
     - Bash
     - WebFetch
     - Edit
     - Read 
     - Write
     - Agent
     - 
 - "Permission rules follow the format `Tool` or `Tool(specifier)`."
     - "To match all uses of a tool, use just the tool name without parentheses: Bash, WebFetch, Read" 
     - "Add a specifier in parentheses to match specific tool uses: Bash(npm run build), Read(./.env)"
 - "Bash permission rules support wildcard matching with *. Wildcards can appear at any position in the command, including at the beginning, middle, or end"
     - "When * appears at the end with a space before it (like Bash(ls *)), it enforces a word boundary, requiring the prefix to be followed by a space or end-of-string."
 - "Read and Edit rules both follow the gitignore specification with four distinct pattern types:"
     - Absolute path from filesystem root:  `//path`
     - Path from home director: `~/path`
     - Path relative to project root: `/path`
     - Path relative to current directory: `path` or `./path`
 - "In gitignore patterns, * matches files in a single directory while ** matches recursively across directories. To allow all file access, use just the tool name without parentheses: Read, Edit, or Write."
 - "By default, Claude has access to files in the directory where it was launched. You can extend this access:
     - During startup: use `--add-dir <path>` CLI argument
     - During session: use /add-dir command
     - Persistent configuration: add to `additionalDirectories` in settings files"

 - "Files in additional directories follow the same permission rules as the original working directory: they become readable without prompts, and file editing permissions follow the current permission mode."
  - "Adding a directory extends where Claude can read and edit files. It does not make that directory a full configuration root. ...  The following configuration types are loaded from ` --add-dir` directories:" 
      - "Skills in .claude/skills/"
      - "Plugin settings in .claude/settings.json (enabledPlugins and extraKnownMarketplaces only)"
      - "CLAUDE.md files and .claude/rules, Only when CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1 is set"
  - "EVERYTHING else, including subagents, commands, output styles, hooks, and other settings, is discovered only from the current working directory and its parents, your user directory at ~/.claude/, and managed settings."
  - "Permissions and sandboxing are complementary security layers. Use both for defense-in-depth:"
      - "**Permissions** control which tools Claude Code can use and which files or domains it can access. They apply to all tools (Bash, Read, Edit, WebFetch, MCP, and others).
      - **Sandboxing** provides OS-level enforcement that restricts the Bash tool’s filesystem and network access. It applies only to Bash commands and their child processes."
