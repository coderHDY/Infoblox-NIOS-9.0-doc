---
title: "set ipv6_disable_on_dad"
source: "/space/nios90/280855714"
pageId: "280855714"
---
The `set`` ``ipv6_disable_on_dad` command enables or disables IPv6 on an interface if a duplicate IPv6 address is detected.

# Syntax

`set ipv6_disable_on_dad {on | off}`

| **Argument ** | **Description** |
| --- | --- |
| `on` | Enables IPv6 on an interface. |
| `off` | Disables IPv6 on an interface. |

# Examples

## Turn on IPv6 on an interface

`Infoblox &gt; ``set`` ``ipv6_disable_on_dad`` ``on`  
` WARNING: This operation will reboot the system.`  
`Do you want to proceed? (y or n): y`  
` SYSTEM REBOOTING! `  
` `

`Infoblox &gt; ``set`` ``ipv6_disable_on_dad`` ``on`  
` Already on, nothing do be done`

## Turn off Pv6 on an interface

`Infoblox &gt; ``set`` ``ipv6_disable_on_dad`` ``off`` `  
`WARNING: This operation will reboot the system. `  
`Do you want to proceed? (y or n): y`  
` SYSTEM REBOOTING!`
