---
title: "set session_timeout"
source: "/space/nios90/280822568"
pageId: "280822568"
---
Use the `set`` ``session_timeout`` `command to specify how long a session remains open when there is no user activity. Use the *[show session_timeout](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-session-timeout)* command to view the session_timeout setting.

# Syntax

`set session_timeout`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``session_timeout`  
` Current GUI/CLI timeout is 60000 seconds (16:40:00) `  
` `

`WARNING: Changing the session timeout will cause GUI users to be logged out.`  
`New GUI/CLI session timeout (in seconds, 0 to abort)? ``90000`
