---
title: "show dscp"
source: "/space/nios90/280756897"
pageId: "280756897"
---
The `show`` ``dscp` command provides information about the Grid and member DSCP values in both decimal and hexadecimal formats. You can use the` ``set`` ``dscp` command to configure the DSCP value. For more information, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dscp)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dscp)[*dscp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dscp).

# Syntax

`show dscp`

This command has no arguments.

# Examples

For a Grid:

`Infoblox &gt; ``show`` ``dscp`  
` Grid Level: 30 (Ox1e)`  
` Member Level:Override grid setting`  
`            20 (Ox14) `  
` `

`Infoblox &gt; ``show`` ``dscp`  
` Grid Level: 30 (Ox1e) `  
`Member Level:Use grid setting`

For an independent appliance:

I`nfoblox &gt; ``show`` ``dscp`` `  
`DSCP:       28 (Ox1c)`
