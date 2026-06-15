---
title: "set lom"
source: "/space/nios90/280757220"
pageId: "280757220"
---
The `set lom` command configures the LOM (Lights Out Management) settings for the IPMI interface. To view the current network settings for the IPMI interface, use the *[show lom](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-lom)* command.

# Syntax

`set lom`

This command has no arguments.

# Example

`Infoblox &gt; ``set lom`  
`Enter LOM IP address: ``10.1.1.22`  
`Enter LOM netmask: ``255.255.255.0`  
`Enter gateway address [Default: 10.34.10.1]:`  
`LOM network settings:`

`IP address: 10.34.10.42`  
`Netmask:255.255.255.0`  
`Gateway address: 10.34.10.1`

`Is this correct? (y or n): ``y`  
`Are you sure? (y or n): ``y`
