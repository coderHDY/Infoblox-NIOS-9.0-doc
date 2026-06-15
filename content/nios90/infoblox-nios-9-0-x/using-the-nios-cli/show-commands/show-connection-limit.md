---
title: "show connection_limit"
source: "/space/nios90/280397424"
pageId: "280397424"
---
You can use the `show`` ``connection_limit`` `command to display the per client IP address maximum connection limit for the following protocols: HTTP and HTTPS. Note that maximum connections here refer to the network level connections, not application level connections. For example, an HTTPS connection limit of 4 means that there can be a maximum of four TCP connections between any given client IP address and the appliance that are concerned using the HTTPS protocol.  
 To set the maximum connection limit, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-connection-limit)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-connection-limit)[*connection_limit*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-connection-limit).

# Syntax

`show connection_limit {http | https}`

| **Argument ** | **Description** |
| --- | --- |
| `http` | The maximum connection limit for the HTTP protocol. |
| `https ` | The maximum connection limit for the HTTPS protocol. |

# Examples

## Showing the Per Client Address Maximum Connection Limit for the HTTP Protocol

`Infoblox &gt; ``show`` ``connection_limit`` ``http`  
` Current http connection limit: 150`
