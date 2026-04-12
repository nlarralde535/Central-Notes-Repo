---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-10
---
# Claude Code Settings doc
https://code.claude.com/docs/en/settings

# General Notes 
 - "You can configure Claude Code by running the /config command when using the interactive REPL, which opens a tabbed Settings interface where you can view status information and modify configuration options."
- "Claude Code uses a scope system to determine where configurations apply and who they’re shared with."
    - Managed
    - User (`~/.claude/settings.json`)
    - Project (`.claude/settings.json`)
    - Local (`.claude/settings.local.json`)
- "When the same setting is configured in multiple scopes, more specific scopes take precedence:
    1. Managed (highest) - can’t be overridden by anything
    2. Command line arguments - temporary session overrides
    3. Local - overrides Project and user settings, Claude Code will configure git to ignore `settings.local.json`
    4. Project - saved in your project directory, overrides User settings
    5. User (lowest) - applies to all projects, when nothing else specifies the setting"
 - "Claude Code automatically creates timestamped backups of configuration files and retains the five most recent backups to prevent data loss."
 - "Other configuration is stored in `~/.claude.json`. This file contains your preferences (theme, notification settings, editor mode), OAuth session, MCP server configurations for user and local scopes, per-project state (allowed tools, trust settings), and various caches. "
 - Configure a custom command for @ file path autocomplete. The built-in file suggestion uses fast filesystem traversal, but large monorepos may benefit from project-specific indexing such as a pre-built file index or custom tooling. `fileSuggestion`

# Interesting Claude Code  `settings.json` options 
 - alwaysThinkingEnabled
 - env
 - hooks
 - spinnerVerbs

# Interesting Global Settings`claude.json` options 
 - editor more
 - allow
 - ask
 - deny
 - enabled (bash sandboxing) 
 - 

