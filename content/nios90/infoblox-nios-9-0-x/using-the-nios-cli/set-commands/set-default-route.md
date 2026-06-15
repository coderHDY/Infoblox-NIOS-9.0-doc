---
title: "set default_route"
source: "/space/nios90/280855796"
pageId: "280855796"
---
The `set`` ``default_route` command allows you to configure the default gateway for the NIOS appliance. You can set the gateway address of LAN1 or LAN2 as the default route. You can also specify the IPv4 or IPv6 gateway address. You can also set an optional VLAN gateway address and make it the default route.

# Syntax

`set default_route LAN1|LAN2`  
`set default_route IPv4gateway [IPv6gateway] | IPv6gateway [IPv4gateway]`

| **Argument** | **Description** |
| --- | --- |
| `LAN1`` `   `LAN2`` ` | Specifies the LAN1 gateway address.   Specifies the LAN2 gateway address. |
| `IPv4gateway`   `IPv6gateway` | Specifies the IPv4 gateway address.   Specifies the IPv6 gateway address. |

# Example

`Infoblox &gt; set default_route LAN1`  
`Infoblox &gt;set default_route LAN2`  
` Infoblox &gt; set default_route 10.35.0.1 2620:10a:6000:2400::1 `  
`Infoblox &gt; set default_route 2620:10a:6000:2400::1`
