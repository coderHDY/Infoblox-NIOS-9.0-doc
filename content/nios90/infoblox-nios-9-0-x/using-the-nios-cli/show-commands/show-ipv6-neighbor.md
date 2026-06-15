---
title: "show ipv6_neighbor"
source: "/space/nios90/280920509"
pageId: "280920509"
---
The `show`` ``ipv6_neighbor` command displays the status, IPv6 address and link-local address (normally, the MAC address of the neighboring port) of the IPv6 neighbor for the specified NIOS appliance interface–LAN, LAN2 or MGMT.

# Syntax

`show ipv6_neighbor &lt;lan|lan2|mgmt&gt;`

If no applicable information is available (for example, the current device has no IPv6 configuration and hence no IPv6 neighbor information), you are returned to the NIOS CLI prompt.

# Example

`Infoblox &gt; ``show`` ``ipv6_neighbor`` ``lan`  
` fe80::204:96ff:fe1d:1980 lladdr 00:04:96:1d:19:80 router STALE`
