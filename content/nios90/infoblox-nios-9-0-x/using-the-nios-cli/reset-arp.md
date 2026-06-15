---
title: "reset arp"
source: "/space/nios90/280790262"
pageId: "280790262"
---
The` ``reset`` ``arp` command clears the ARP (Address Resolution Protocol) cache. The ARP maps IP addresses to the hardware MAC addresses and logs them in a table which is stored in the cache. Over time, the IP address leases expire and are assigned to new devices (MAC addresses). Infoblox recommends that you periodically clear this cache to maintain valid mappings between IP addresses and MAC addresses.

# Syntax

`reset arp`

This command has no arguments.

# Example

`Infoblox &gt; ``reset`` ``arp`  
` ARP cache cleared.`
