---
title: "set regenerate_anycast_password"
source: "/space/nios90/280658804"
pageId: "280658804"
---
The `set regenerate_anycast_password` command regenerates eight-character alphanumeric password for the anycast service and saves it to the NIOS database. The password can then be used across all anycast configuration files (ospf.conf, bgp.conf, bfd.conf) with the following CLI commands:

- show ospf
- show bgp
- show ipv6_ospf
- show ipv6_bgp
- show bfd

When these commands are executed with the configuration argument, the values of the password and enable password fields are shown encrypted. Running `set regenerate_anycast_password` restarts the anycast service on the Grid members that have the anycast service enabled. For information on OSPF commands, see [*show ospf*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ospf) and [*show ipv6_ospf*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ipv6-ospf). For information on BGP commands, see [*show bgp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bgp)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bgp)and [*show ipv6_bgp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ipv6-bgp). For information on bfd command, see [*show bfd*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bfd).

> **warning**
>
> ### Note
> 
> Only superusers can use `set regenerate_anycast_password` in maintenance mode.

# Syntax

`set regenerate_anycast_password`

This command has no arguments.

# Example

`Maintenance Mode &gt; set regenerate_anycast_password`  
`Resetting the password will restart the anycast service.`  
`Do you want to proceed? (y or n):y`  
`Are you sure? (y or n):y`  
`Anycast password generation is successful.`
