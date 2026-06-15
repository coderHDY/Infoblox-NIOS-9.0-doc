---
title: "show network"
source: "/space/nios90/280266010"
pageId: "280266010"
---
The `show`` ``network` command displays the current network settings for the NIOS appliance and status with respect to a Grid. For information on how to change your network settings, see *[set network](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-network)*.

# Syntax

`show network`

This command has no arguments.

# Example

`Infoblox &gt; ``show`` ``network`` `  
`Current LAN1 network settings: `  
`IP Address: 10.34.33.11`  
` Network Mask: 255.255.255.0`  
` Gateway Address: 10.34.33.1`  
` VLAN Tag: 110`  
` DSCP Value: 23`  
` IPv6 Address: 2620:010A:6000:2400:0000:0000:0000:6508/64`  
` IPv6 Gateway Address: 2620:010A:6000:2400:0000:0000:0000:0001`  
` IPv6 VLAN Tag: Untagged `  
`IPv6 DSCP Value: Inherited `  
` `

`HA enabled: false`  
` Grid Status: Member of Infoblox Grid `  
` `

`Current LAN2 Port Settings: `  
`LAN2 Port enabled: true`  
` NIC failover for LAN1 and LAN2 enabled: false `  
`LAN2 IP Address: 10.1.1.35`  
` LAN2 Netmask: 255.255.255.0`  
` LAN2 Gateway: 10.1.1.1`
