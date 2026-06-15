---
title: "show ha_link_check"
source: "/space/nios90/1453523010"
pageId: "1453523010"
---
Use the `show ha_link_check`CLI command to configure HA link checking. The value of the command is set to `off` by default.

# Syntax

`show ha_link_check [ on | off ]`

| **Argument** | **Description** |
| --- | --- |
| `on` | Turns on HA link checking. |
| `off` | Turns off HA link checking. |

# Example

## Enables HA link checking

`Infoblox &gt; show ha_link_check on`

## Disables HA link checking

`Infoblox &gt; show ha_link_check off`
