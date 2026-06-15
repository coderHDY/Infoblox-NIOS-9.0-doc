---
title: "set ipv6_neighbor"
source: "/space/nios90/280855697"
pageId: "280855697"
---
The `set`` ``ipv6_neighbor`` `command enables definition of an IPv6 neighbor for any of the following: LAN1, LAN2 or MGMT. `Set` **ipv6_neighbor** also allows deletion of an existing IPv6 neighbor entry on the specified interface. For adding a new neighbor entry, the second required argument is for the link-local MAC address ID of the neighboring interface for the specified LAN/LAN2/MGMT port.  
 Another form of this command allows the flushing of specific or general IPv6 neighbor values from the specified interface. Prefixes and polled neighbor states can also be specified and combined in a statement.

# Syntax

`set ipv6_neighbor {add|clear} {LAN|LAN2|MGMT} [all] ``[``prefix``]`` ``ipv6-address ll_address ``[state]`

| **Argument** | **Description** |
| --- | --- |
| *ipv6_address** * | The IPv6 address of the neighboring interface. |
| *ll_address** * | The 48-bit link-local MAC ID of the neighboring interface. Argument is required for addition of a new IPv6 neighbor entry for the interface. |
| [all] | Optional argument to clear the entire list of IPv6 entries for the specified interface. |
| *[**prefix**]* | Optional argument needed if all entries are to be flushed for an IPv6 prefix. CIDR mask is required as part of the address specification. |
| [state] | Optional argument needed if entries of a specific type are to be flushed   or defined for an IPv6 prefix. Permitted values for the **state** argument include the following: **permanent, noarp, reachable,** and **stale.** |

# Example

`Infoblox &gt; ``set ipv6_neighbor add`` ``LAN`` ``2001:db8::256:180:c223:214e 02:80:C2:03:DE:05`  
` Infoblox &gt; ``set`` ``ipv6_neighbor`` ``add`` ``LAN`` ``2001:db8::256:180:c223:214e`` ``02:80:C2:03:DE:05`` ``permanent`` `  
` Infoblox &gt; ``set ipv6_neighbor clear LAN2 2001:db8::256:180:c223:214e`` ``02:80:C2:03:DE:05`` `  
` Infoblox &gt; ``set ipv6_neighbor clear LAN prefix 2001:db8:12:256::/64 stale`  
` Infoblox &gt; ``set ipv6_neighbor clear LAN all`` `
