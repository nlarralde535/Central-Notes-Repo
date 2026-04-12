---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-11
---
# Hooks Guide doc
https://code.claude.com/docs/en/hooks-guide

# Hooks Reference doc
https://code.claude.com/docs/en/hooks

# General Notes:
 - "Hooks are user-defined shell commands that execute at specific points in Claude Code’s lifecycle. They provide deterministic control over Claude Code’s behavior, ensuring certain actions always happen rather than relying on the LLM to choose to run them. Use hooks to enforce project rules, automate repetitive tasks, and integrate Claude Code with your existing tools."
 - "Hooks let you run code at key points in Claude Code’s lifecycle: format files after edits, block commands before they execute, send notifications when Claude needs input, inject context at session start, and more. "
 - "To create a hook, add a **hooks** block to a `settings.json` file."
     - "You can also ask Claude to write the hook for you by describing what you want in the CLI."
 - "Type `/hooks` to open the hooks browser. You’ll see a list of all available hook events, with a count next to each event that has hooks configured. " 
 - "Hook events fire at specific lifecycle points in Claude Code. When an event fires, all matching hooks run in parallel, and identical hook commands are automatically deduplicated. "
 - "Each hook has a type that determines how it runs. Most hooks use "type": "**command**", which runs a shell command. Three other types are available:"
     - "type": "**http**": POST event data to a URL. See HTTP hooks.
     - "type": "**prompt**": single-turn LLM evaluation. See Prompt-based hooks.
     - "type": "**agent**": multi-turn verification with tool access. See Agent-based hooks.
 - "Hooks communicate with Claude Code through stdin, stdout, stderr, and exit codes.
 -  When an event fires, Claude Code passes event-specific data as JSON to your script’s stdin. Your script reads that data, does its work, and tells Claude Code what to do next via the exit code."
 - **Hook Input**: "Every event includes common fields like session_id and cwd, but each event type adds different data."
 - **Hook Output**: "Your script tells Claude Code what to do next by writing to stdout or stderr and exiting with a specific code. "
     - **Exit 0:** the action proceeds. For `UserPromptSubmit` and `SessionStart` hooks, anything you write to stdout is added to Claude’s context.
     - **Exit 2:** the action is blocked. Write a reason to stderr, and Claude receives it as feedback so it can adjust.
     - **Any other exit code**: the action proceeds. The transcript shows a `<hook name>` hook error notice followed by the first line of stderr; the full stderr goes to the debug log.
 - Exit codes give you two options: allow or block. For more control, exit 0 and print a JSON object to stdout instead.
     - "Use exit 2 to block with a stderr message, or exit 0 with JSON for structured control. Don’t mix them: Claude Code ignores JSON when you exit 2."
 - **matchers**: "Without a matcher, a hook fires on every occurrence of its event. Matchers let you narrow that down. "
 - "Each event type matches on a specific field. ... See Hooks Reference - Matcher patterns for how plain names and regular expressions are evaluated."
 - **Prompt-based hooks**: "For decisions that require judgment rather than deterministic rules, use type: "prompt" hooks. Instead of running a shell command, Claude Code sends your prompt and the hook’s input data to a Claude model (Haiku by default) to make the decision. "
 - **HTTP-based hooks**: "Use type: "http" hooks to POST event data to an HTTP endpoint instead of running a shell command. The endpoint receives the same JSON that a command hook would receive on stdin, and returns results through the HTTP response body using the same JSON format."
 - **Limitations**: "Command hooks communicate through stdout, stderr, and exit codes only. They cannot trigger / commands or tool calls. "
  - 


# Interesting Claude Lifecycle Events and when the fire
- `SessionStart`: when a session begins or resumes
- `PermissionRequest`
- `PreToolUse`