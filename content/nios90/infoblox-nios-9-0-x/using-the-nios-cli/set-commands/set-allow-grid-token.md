---
title: "set allow_grid_token"
source: "/space/nios90/850231332"
pageId: "850231332"
---
Use the `set allow_grid_token` command to allow a Grid member to use a grid token to join the Infoblox portal. When an on-premise host (Grid member) is deleted from the Infoblox portal, the grid token is removed from the member and this flag is set to `off` to prevent it from rejoining the portal. Set the command to `on` to enable the member to use a join token and rejoin the Infoblox portal.

# Syntax

`set allow_grid_token {on|off}`

| **Argument** | ** Description** |
| --- | --- |
| `on` | Specify this value to allow a Grid member to use a grid token. |
| `off` | Specify this value to disallow a Grid member from using a grid token. |

# Example

`Infoblox &gt; set allow_grid_token on`
