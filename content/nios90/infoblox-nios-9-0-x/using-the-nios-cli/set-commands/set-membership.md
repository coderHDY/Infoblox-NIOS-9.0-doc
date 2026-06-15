---
title: "set membership"
source: "/space/nios90/280822683"
pageId: "280822683"
---
The `set`` ``membership` command specifies a Grid for the NIOS appliance. Use this command when the network address has been set (see *[set network](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-network)*) and you want to put the appliance in a Grid. You can join an IPv4 appliance to an IPv4-only or a dual mode Grid and an IPv6 appliance to an IPv6-only or a dual mode Grid.  
If the IP address is acceptable to the Grid Master, use this command to join the Grid. You can specify either an IPv4 or an IPv6 address of the Grid Master. If you need to re-address the appliance, use the *[set network](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-network)* command.

> **warning**
>
> **Note**
> 
> When you join a dual mode Grid member to a dual mode Grid, you can enter IPv4 address of the Grid Master if the Grid communication protocol for the Grid member is set as IPv4 and you can enter IPv6 address of the Grid Master if the Grid communication protocol for the Grid member is set as IPv6. For information about setting the communication protocol for a dual mode appliance, refer to the *Infoblox* *Administrator* *Guide*.

# Syntax

`set membership`

This command has no arguments.

# Example

`Infoblox &gt; ``set membership`  
`Join status: No previous attempt to join a Grid.`  
`Enter new Grid Master VIP: ``10.1.1.22`  
`Enter Grid Name [Default Infoblox]: ``DaveyJones`  
`Enter Grid Shared Secret: ``L0ck37`` `  
`Join Grid as member with attributes:`  
`Join Grid Master VIP: 10.1.1.22`  
`Grid Name: DaveyJones`  
`Grid Shared Secret: L0ck37`  
`WARNING: Joining a Grid will replace all the data on this node!`  
`Is this correct? (y or n): ``y`` `  
`Are you sure? (y or n): ``y`
