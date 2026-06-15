---
title: "show named_tcp_clients_limit"
source: "/space/nios90/1453064324"
pageId: "1453064324"
---
You can use `show named_tcp_clients_limit`the  command to set the maximum number of simultaneous DNS clients that can be handled with TCP connections.

# Syntax

`show named_tcp_clients_limit &lt;number of TCP clients&gt;`

| **Argument** | **Description** |
| --- | --- |
| Number of TCP clients | Maximum number of simultaneous DNS clients that can be handled with TCP connections. The default value is 1000. |

# Example

`Infoblox &gt; show named_tcp_clients_limit 2500`
