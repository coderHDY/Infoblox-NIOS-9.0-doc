---
title: "set prompt"
source: "/space/nios90/280658830"
pageId: "280658830"
---
Use the `set prompt `command to change the prompt to the host name, user@host name, host IP address, or user@ host IP address. Note that the prompt displayed in the command line interface (CLI) can be set only on the active Grid Master node. Once you execute the `set` `prompt `command, the prompt displayed for all Grid members is set accordingly and you can see the prompt when you log in to the CLI for each Grid member.

# Syntax

`set prompt {hostname | user@hostname | ip | user@ip | default}`

| **Argument ** | **Description** |
| --- | --- |
| `hostname ` | Sets it to the host name of the Grid member that you have accessed. |
| `user@hostname` | Sets it to the user and hostname you connect from. |
| `ip` | Sets the prompt to the IP address of the host. |
| `user@ip` | Sets the prompt to the user name@ the IP address of the host. |
| `default` | Sets the prompt to "Infoblox &gt;". |

# Example

`Infoblox &gt; set prompt user@hostname`  
` admin@infoblox &gt;`  
` admin@infoblox &gt; set prompt user@ip`  
` admin@172.30.9.254 &gt;`
