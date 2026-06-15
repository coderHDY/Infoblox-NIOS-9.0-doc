---
title: "set named_tcp_clients_limit"
source: "/space/nios90/280855583"
pageId: "280855583"
---
You can use the `set named_tcp_tcp_clients_limit` command to set the maximum number of simultaneous DNS clients that can be handled with TCP connections. It does not account for UDP connections.

# Syntax

`set named_tcp_clients_limit &lt;number of TCP clients}`



| **Argument** | **Description** |
| --- | --- |
| Number of TCP clients | Maximum number of simultaneous DNS clients that can be handled with TCP connections. The number must be between 200 and 25000. The default value is 1000. |

# Example

`Infoblox &gt; set named_tcp_clients_limit 2500`
