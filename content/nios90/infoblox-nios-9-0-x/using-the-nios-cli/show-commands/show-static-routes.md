---
title: "show static_routes"
source: "/space/nios90/280855182"
pageId: "280855182"
---
Use the `show static_routes` command to display the current static route configuration on your appliance. To configure static routes, use the [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-static-route)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-static-route)[*static_route*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-static-route) command.  
 You can also use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-routes)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-routes)[*routes*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-routes) command to view the current IPv4 and IPv6 routing information on the NIOS appliance and how the information is organized according to the interfaces.

# Syntax

show static_routes [v4|v6]

| **Argument** | **Description** |
| --- | --- |
| `v4\|v6` | Shows IPv4 or IPv6 static routes. If this is not specified, static routes for both IPv4 and IPv6 are displayed. |

# Examples

## Displaying IPv4 Static Routes

`Infoblox &gt; ``show`` ``static_routes`` ``v4`

| `Position` | `Destination` | `Gateway` |
| --- | --- | --- |
| `1` | `1.1.1.1/32` | `192.168.1.11` |
| `2` | `1.1.1.2/32` | `192.168.1.12` |
| `3` | `1.1.1.11/32` | `192.168.1.21` |
| `4` | `1.1.1.3/32` | `192.168.1.13` |
| `5` | `1.1.1.4/32` | `192.168.1.14` |
| `6` | `1.1.1.5/32` | `192.168.1.15` |
| `7` | `1.1.1.6/32` | `192.168.1.16` |
| `8` | `1.1.1.7/32` | `192.168.1.17` |
| `9` | `1.1.1.8/32` | `192.168.1.18` |
| `10` | `1.1.1.9/32` | `192.168.1.19` |
| `11` | `1.1.1.10/32` | `192.168.1.20` |



# Displaying IPv6 Static Routes

`Infoblox &gt; ``show`` ``static_routes`` ``v6`

| `Position` | `Destination` | `Gateway` |
| --- | --- | --- |
| `1` | `1111:2222:3333:4444:5555:` | `1111:2222:3333:4444:5555:6666:7777:9999` |
|  | `6666:7777:1000/125` |  |
| `2` | `1111:2222:3333:4444:5555:` | `1111:2222:3333:4444:5555:6666:7777:bbbb` |
|  | `6666:7777:2000/125` |  |
