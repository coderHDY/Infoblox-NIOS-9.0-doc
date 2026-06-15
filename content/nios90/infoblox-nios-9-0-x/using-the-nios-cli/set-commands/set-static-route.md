---
title: "set static_route"
source: "/space/nios90/280920731"
pageId: "280920731"
---
Use the `set static_route` command to configure static routes on your appliance. You can create new IPv4 and IPv6 static routes, move static route to a desired position in the list of static routes, move static routes up and down in the list, or move static route at a specific position up or down in the list of static routes. You can also delete an existing static route, delete static routes at a specific position, or delete all existing static routes for IPv4, IPv6 or both protocols. Use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-static-routes)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-static-routes)[*static_routes*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-static-routes) command to view the current configuration of static routes on your appliance.

# Syntax

`set static_route add network/cidr gateway [position]`  
`set static_route move network/cidr gateway new-position`  
`set static_route move network/cidr gateway (up|down)`  
`set static_route move (v4|v6) old-position new-position`  
`set static_route move (v4|v6) old-position (up|down)`  
`set static_route delete network/cidr gateway`  
`set static_route delete (v4|v6) position`  
`set static_route delete (all|v4|v6)`` `

| **Argument** | **Description** |
| --- | --- |
| `add network/cidr gateway [position]`` ` | Creates a new static route and optionally specifies its position in the list of static routes. |
| `move network/cidr gateway new-position``  ` | Moves a static route to a new position in the list of static routes. |
| `move ``network``/``cidr gateway ``[up\|down]`` ` | Moves a static route up or down in the list of static routes. |
| `move ``(``v4`` \| ``v6``)`` [old-position] [new-position]`` ` | Moves an IPv4 or IPv6 static route from its existing position to a new position in the list of static routes. |
| `move (``v4 ``\| ``v6``)`` [old-position] (up\|down)`` ` | Moves an IPv4 or IPv6 static route up or down from its current position in the list of static routes. |
| `delete ``network``/``cidr gateway`` ` | Deletes an existing static route. |
| `delete ``(``v4`` \|`` ``v6``)`` [position]`` ` | Deletes an IPv4 or IPv6 static route, at a specific position, from the list of static routes. |
| `delete (all \| ``v4`` ``\| ``v6``)`` ` | Deletes all static routes, all IPv4 static routes, or all IPv6 static routes. |

# Examples

## Adding a new static route

`Infoblox &gt; set static_route add 10.6.112.0/24 10.6.42.1`  
` Infoblox &gt; set static_route add 2001:1234:5678::/112 2001:1234::42`

## Moving a static route to a new position in the list of static routes

`Infoblox &gt; set static_route move 10.6.112.0/24 10.6.42.1 5`  
` Infoblox &gt; set static_route move 2001:1234:5678::/112 2001:1234::42 6`

## Moving a static route up or down in the list of static routes

`Infoblox &gt; set static_route move 10.6.112.0/24 10.6.42.1 up `  
`Infoblox &gt; set static_route move 10.6.112.0/24 10.6.42.1 down`  
` Infoblox &gt; set static_route move 2001:1234:5678::/112 2001:1234::42 up `  
`Infoblox &gt; set static_route move 2001:1234:5678::/112 2001:1234::42 down`

## Moving an IPv4 or IPv6 static route from its current position to a new position in the list of static routes

`Infoblox &gt; set static_route move v4 1 12 Infoblox &gt; set static_route move v6 1 12`

## Moving an IPv4 or IPv6 static route up or down from its current position in the list of static routes

`Infoblox &gt; set static_route move v4 12 up `  
`Infoblox &gt; set static_route move v6 12 up `  
`Infoblox &gt; set static_route move v4 1 down `  
`Infoblox &gt; set static_route move v6 1 down`

## Deleting an existing static route

`Infoblox &gt; set static_route delete 10.6.112.0/24 10.6.42.1`  
` Infoblox &gt; set static_route delete 2001:1234:5678::/112 2001:1234::42`

## Deleting an IPv4 or IPv6 static route at a specific position in the list of static routes

`Infoblox &gt; set static_route delete v4 1 `  
`Infoblox &gt; set static_route delete v6 2`

## Deleting all IPv4 static routes

`Infoblox &gt; set static_route delete v4`

## Deleting all IPv6 static routes

`Infoblox &gt; set static_route delete v6`

## Deleting all IPv4 and IPv6 static routes

`Infoblox &gt; set static_route delete all`
