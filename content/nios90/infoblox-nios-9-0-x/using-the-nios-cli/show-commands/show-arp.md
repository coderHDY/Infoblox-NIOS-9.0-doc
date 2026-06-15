---
title: "show arp"
source: "/space/nios90/280887986"
pageId: "280887986"
---
The `show`` ``arp` command displays ARP (Address Resolution Protocol) data to view mappings. This allows you to see if the current state matches the mappings. If the mappings are out of date, use the [*reset*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-arp)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-arp)[*arp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/reset-arp) command. This command is also useful for troubleshooting network connectivity issues.

# Syntax

`show arp`

This command has no arguments.

# Example

The following example shows the IP address (10.1.1.1), MAC address (`00:04:96:1D:19:80`), and type of connection (ethernet).

`Infoblox &gt; ``show arp`  
`? (10.1.1.1) at 00:04:96:1D:19:80 [ether] or LAN`
