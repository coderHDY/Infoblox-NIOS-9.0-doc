---
title: "set network"
source: "/space/nios90/280855567"
pageId: "280855567"
---
The `set`` ``network`` `command specifies an address for a NIOS appliance so that it can join a network, with the option of joining a Grid. You can configure either IPv4 address, IPv6 address, or both for a NIOS appliance. If the appliance is configured with an IPv6 address, it can join a Grid using the IPv6 address of the Grid Master. Use the *[show network](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-network)* command to view the network settings.  
`set`` ``network`` `supports configuration of both IPv4 and IPv6 interface addresses.

# Syntax

`set network`

This command has no arguments.

# Example

## Specifying an IPv4 address

`Infoblox &gt; ``set network`  
`NOTICE: All HA configuration is performed from the GUI. This interface is used only to`  
`configure a standalone node or to join a grid.`  
`Enter IP address:10.35.1.104`  
`Enter netmask [Default: 255.255.255.0]:`  
`Enter gateway address [Default: 10.35.0.1]:`  
`Enter VLAN tag [Default: Untagged]:`  
`Enter DSCP value [Default: Inherited from Grid: 0]:`  
`NOTICE: Additional IPv6 interface can be configured only via GUI.`  
`Configure IPv6 network settings? (y or n):n`  
`Become grid member? (y or n): n`

`New Network Settings:`

`IPv4 address: 10.35.1.104`  
`IPv4 Netmask: 255.255.255.0`  
`IPv4 Gateway address: 10.35.0.1`  
`IPv4 VLAN tag: Untagged`  
`IPv4 DSCP Value: Inherited from Grid: 0`

`Old IPv4 Network Settings:`

`IPv4 address: 192.168.1.2`  
`IPv4 Netmask: 255.255.255.0`  
`IPv4 Gateway address: 192.168.1.1`  
`IPv4 VLAN tag: Untagged`  
`IPv4 DSCP Value: Inherited from Grid: 0`` `

## Specifying an IPv6 address

`Infoblox &gt; set network`  
`NOTICE: All HA configuration is performed from the GUI. This interface is used only to`  
`configure a standalone node or to join a grid.`  
`Enter IP address : 2620:10a:6000:2400::168`  
`Enter IPv6 Prefix Length [Default: none]: 64`  
`Enter IPv6 gateway [Default: none]: 2620:10a:6000:2400::1`` `

`Enter VLAN tag [Default: Untagged]:`  
`Enter DSCP value [Default: Inherited from Grid: 0]`  
`Configure IPv4 network settings? (y or n):n`  
`Become grid member? (y or n): n`

`New Network Settings:`

`IPv6 address: 2620:10a:6000:2400::168/64`  
`IPv6 Gateway address: 2620:10a:6000:2400::1`  
`IPv6 VLAN tag: Untagged`  
`IPv6 DSCP Value: Inherited from Grid: 0`

## Specifying both IPv4 and IPv6 address

`Infoblox &gt; ``set network`  
`NOTICE: All HA configuration is performed from the GUI. This interface is used only to`  
`configure a standalone node or to join a grid.`  
`Enter IP address : 10.35.1.104`  
`Enter netmask [Default: 255.255.255.0]: 255.255.0.0`  
`Enter gateway address [Default: 10.35.0.1]:`  
`Enter VLAN tag [Default: Untagged]:`  
`Enter DSCP value [Default: Inherited from Grid: 0]`  
`Configure IPv6 network settings? (y or n):y`  
`Enter IPv6 address [Default: none]: 2620:10A:6000:2400::168`  
`Enter IPv6 Prefix Length [Default: none]: 64`  
`Enter IPv6 gateway [Default: none]: 2620:10A:6000:2400::1`  
`Enter VLAN tag [Default: Untagged]:`  
`Enter DSCP value [Default: 30]:`  
`Become grid member? (y or n): n`

`New Network Settings:`

`IPv4 address: 10.35.1.104`  
`IPv4 Netmask: 255.255.0.0`  
`IPv4 Gateway address: 10.35.0.1`  
`IPv4 VLAN tag: Untagged`  
`IPv4 DSCP Value: Inherited from Grid: 0`

`IPv6 address: 2620:10a:6000:2400::168/64`  
`IPv6 Gateway address: 2620:10a:6000:2400::1`  
`IPv6 VLAN tag: Untagged`  
`DSCP value: 30`

`Old IPv4 Network Settings:`

`IPv4 address: 192.168.1.2`  
`IPv4 Netmask: 255.255.255.0`  
`IPv4 Gateway address: 192.168.1.1`  
`IPv4 VLAN tag: Untagged`  
`IPv4 DSCP Value: Inherited from Grid: 0`

> **warning**
>
> **Note**
> 
> After you confirm your network settings, the Infoblox application automatically restarts.

After configuring the network settings, you cannot change the type of network connectivity of the appliance through CLI. For example, if the appliance is configured in IPv4-only mode, then you can change only the IPv4 interface settings through CLI. But the type of network connectivity for the appliance can be changed through GUI.
