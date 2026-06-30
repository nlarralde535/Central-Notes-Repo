---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Note/Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-10
---
# Claude Codes Skills doc
https://code.claude.com/docs/en/skills

# General More
 - "Skills extend what Claude can do. Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name."
 - "Claude Code skills follow the Agent Skills open standard, which works across multiple AI tools. Claude Code extends the standard with additional features like invocation control, subagent execution, and dynamic context injection."
 - Where Skills live: 
     - Managed/Enterprise
     - Personal: `~/.claude/skills/<skill-name>/SKILL.md`
     - Project: `.claude/skills/<skill-name>/SKILL.md`
     - Plug-in: `<plugin>/skills/<skill-name>/SKILL.md`
 - "When skills share the same name across levels, higher-priority locations win: enterprise > personal > project. "
  -  "When you work with files in subdirectories, Claude Code automatically discovers skills from nested .claude/skills/ "
  - "Each skill is a directory with `SKILL.md` as the entrypoint. The SKILL.md contains the main instructions and is required."
  - "Skills are configured through YAML frontmatter at the top of SKILL.md and the markdown content that follows."
      - "All fields are optional. Only description is recommended so Claude knows when to use the skill."
      - "Add `disable-model-invocation: true` to prevent Claude from triggering it automatically." 
  - "Skills support string substitution for dynamic values in the skill content:"
  - Arguments can be passed to skills. "Indexed arguments use shell-style quoting, so wrap multi-word values in quotes to pass them as a single argument."
  - "Skill files can contain any instructions, but thinking about how you want to invoke them helps guide what to include:"
      - "Reference content adds knowledge Claude applies to your current work. Conventions, patterns, style guides, domain knowledge. This content runs inline so Claude can use it alongside your conversation context."
      - "Task content gives Claude step-by-step instructions for a specific action, like deployments, commits, or code generation"
  - "Skills can include multiple files in their directory. This keeps SKILL.md focused on the essentials while letting Claude access detailed reference material only when needed. 
      - "Reference supporting files from SKILL.md using wiki link syntax so Claude knows what each file contains and when to load it:"
      - **Keep SKILL.md under 500 lines. Move detailed reference material to separate files.**"
  - "In a regular session, skill descriptions are loaded into context so Claude knows what’s available, but full skill content only loads when invoked. "
  - "When you or Claude invoke a skill, the rendered SKILL.md content enters the conversation as a single message and stays there for the rest of the session."
  - "The !`<command>` syntax runs shell commands before the skill content is sent to Claude. The command output replaces the placeholder, so Claude receives actual data, not the command itself."
      - "For multi-line commands, use a fenced code block opened with ```! instead of the inline form:"
  - "To enable extended thinking in a skill, include the word “**ultrathink**” anywhere in your skill content." ...gay
  - "Three ways to control which skills Claude can invoke:"
      - "Disable all skills by denying the Skill tool in `/permissions`"
      - "Allow or deny specific skills using permission rules"
      - "Hide individual skills by adding disable-model-invocation: true to their frontmatter. This removes the skill from Claude’s context entirely."
  - "Skill descriptions are loaded into context so Claude knows what’s available. All skill names are always included, but if you have many skills, descriptions are shortened to fit the character budget, which can strip the keywords Claude needs to match your request. The budget scales dynamically at 1% of the context window, with a fallback of 8,000 characters."

# Interesting YAML frontmatter fields
- disable-model-invocation
- effort
- allowed-tools
    - "grants permission for the listed tools while the skill is active, so Claude can use them without prompting you for approval."
    - "To block a skill from using certain tools, add deny rules in your permission settings instead."