---
tags:
  - Note/Plate/Tech/AI/ClaudeCode
  - Project/CurrentEventsTimelineApp
aliases:
  - _template
createdDate: 2026-04-11
---
# Sandboxing Guide doc
https://code.claude.com/docs/en/sandboxing

# Sandboxing Settings doc
https://code.claude.com/docs/en/settings#sandbox-settings

# Anthropic example settings
https://github.com/anthropics/claude-code/tree/main/examples/settings

# General Notes:
 - "Claude Code features native sandboxing to provide a more secure environment for agent execution while reducing the need for constant permission prompts. Instead of asking permission for each bash command, sandboxing creates defined boundaries upfront where Claude Code can work more freely with reduced risk."
     - "The sandboxed bash tool uses OS-level primitives to enforce both filesystem and network isolation."
 - "Customize sandbox behavior through your `settings.json` file. See **Settings** for complete configuration reference." Example: 
 ```
 {
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "excludedCommands": ["docker *"],
    "filesystem": {
      "allowWrite": ["/tmp/build", "~/.kube"],
      "denyRead": ["~/.aws/credentials"]
    },
    "network": {
      "allowedDomains": ["github.com", "*.npmjs.org", "registry.yarnpkg.com"],
      "allowUnixSockets": [
        "/var/run/docker.sock"
      ],
      "allowLocalBinding": true
    }
  }
}
 ```
 - There are TWO components to Claude Code sandboxing configuration: File System sandboxing and Network sandboxing
     - "! ! ! **Effective** sandboxing requires both filesystem and network isolation. ... When configuring sandboxing it is important to ensure that your configured settings do not create bypasses in these systems."
 - **File system Isolation**: "The sandboxed bash tool restricts file system access to specific directories:
     - Default writes behavior: Read and write access to the current working directory and its subdirectories
     - Default read behavior: Read access to the entire computer, except certain denied directories
     - Blocked access: Cannot modify files outside the current working directory without explicit permission
     - Configurable: Define custom allowed and denied paths through settings"
 - "You can grant write access to additional paths using sandbox.filesystem.allowWrite in your settings. These restrictions are enforced at the OS level "
 - "Path prefixes control how paths are resolved. ... The older `//path` prefix for absolute paths still works. If you previously used single-slash `/path` expecting project-relative resolution, switch to `./path`."
     - "This ^ syntax differs from Read and Edit permission rules, which use //path for absolute and /path for project-relative. Sandbox filesystem paths use standard conventions: /tmp/build is an absolute path."
 - **Network Isolation**: "Network access is controlled through a proxy server running outside the sandbox:
     - Domain restrictions: Only approved domains can be accessed
     - User confirmation: New domain requests trigger permission prompts (unless `allowManagedDomainsOnly` is enabled, which blocks non-allowed domains automatically)
     - Custom proxy support: Advanced users can implement custom rules on outgoing traffic
     - Comprehensive coverage: Restrictions apply to all scripts, programs, and subprocesses spawned by commands"
 - **OS-level enforcement**: "The sandboxed bash tool leverages operating system security primitives. On Linux, the `bubblewrap` utility is used to ensure that all child processes spawned by Claude Code’s commands inherit the same security boundaries."
 - **Prerequisites**: "On Linux and WSL2, install the required packages first:" 
 ```
 sudo apt-get install bubblewrap socat
 ```
 - Sandbox Modes: Claude Code offers 2 sandbox modes: 
     - "Auto-allow mode: Bash commands will attempt to run inside the sandbox and are automatically allowed without requiring permission. Commands that cannot be sandboxed (such as those needing network access to non-allowed hosts) fall back to the regular permission flow. "
     - "Regular permissions mode: All bash commands go through the standard permission flow, even when sandboxed. This provides more control but requires more approvals."
 - "! ! ! Auto-allow mode works independently of your permission mode setting. Even if you’re not in “accept edits” mode, sandboxed bash commands will run automatically when auto-allow is enabled. This means bash commands that modify files within the sandbox boundaries will execute without prompting, even when file edit tools would normally require approval."
 - **Effect of Settings Scopes**: "When allowWrite (or denyWrite/denyRead/allowRead) is defined in multiple settings scopes, the arrays are merged, meaning paths from every scope are combined, not replaced. For example, if managed settings allow writes to /opt/company-tools and a user adds ~/.kube in their personal settings, both paths are included in the final sandbox configuration. This means users and projects can extend the list without duplicating or overriding paths set by higher-priority scopes."
 - **Sandboxing Monitoring and Control:** "All access attempts outside the sandbox are blocked at the OS level You receive immediate notifications when boundaries are tested You can choose to deny, allow once, or permanently update your configuration"
 - **Security Limitations**: ! ! ! 
 - "**Sandboxing** and **Permissions** are complementary security layers that work together. ... Filesystem and network restrictions are configured through both sandbox settings and permission rules:"