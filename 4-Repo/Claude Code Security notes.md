---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Note/Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-10
---
# Claude Codes Security doc
https://code.claude.com/docs/en/security

# General Notes
 - Agentic risk mitigation systems:
     - "Write access restriction: Claude Code can only write to the folder where it was started and its subfolders—it cannot modify files in parent directories without explicit permission. While Claude Code can read files outside the working directory (useful for accessing system libraries and dependencies), write operations are strictly confined to the project scope, creating a clear security boundary"
     - "Prompt fatigue mitigation: Support for allowlisting frequently used safe commands per-user, per-codebase, or per-organization"
 - Prompt-injection mitigation core protections:
     - "Permission system: Sensitive operations require explicit approval"
     - "Command blocklist: Blocks risky commands that fetch arbitrary content from the web like curl and wget by default. When explicitly allowed, be aware of permission pattern limitations"
 - Additional safeguards:
     - Network request approval: Tools that make network requests require user approval by default
     - Isolated context windows: Web fetch uses a separate context window to avoid injecting potentially malicious prompts
