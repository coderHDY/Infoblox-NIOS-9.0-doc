---
title: "show wins_forwarding"
source: "/space/nios90/280789496"
pageId: "280789496"
---
Use the `show`` ``wins_forwarding` command to display the current configuration for WINS packet forwarding for the Grid or a specific Grid member.  
 For information about how to configure WINS packet forwarding to Microsoft servers, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-wins-forwarding)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-wins-forwarding)[*wins_forwarding*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-wins-forwarding).

# Syntax

`show wins_forwaring`

This command has no arguments.

# Examples

## Execute the command on the Grid member that inherited the Grid settings

`Infoblox &gt; show wins_forwarding`  
`     Grid level WINS forwarding: enabled`  
`     Grid level WINS default server IP: 10.35.0.123`

`     Member level WINS forwarding: Use grid setting`

## Execute the command on the Grid member that overrode the Grid settings

`Infoblox &gt; show wins_forwarding`  
`     Grid level WINS forwarding: Enabled`  
`     Grid level WINS default server IP: 10.35.0.123 `  
`     Member level output interface: LAN2`

`     Member level WINS forwarding: Override grid setting `  
`     Member level forwarding: Enabled`  
`     Member level WINS server IP: 10.35.0.321 `  
`     Member level output interface: MGMT`

## Execute the command on the Grid member that overrode the Grid settings and packet forwarding was disabled

`Infoblox &gt; show wins_forwarding`  
`     Grid level WINS forwarding: Enabled`  
`     Grid level WINS default server IP: 10.35.0.123 `  
`     Member level output interface: LAN `  
` `

`     Member level WINS forwarding: Override grid setting `  
`     Member level forwarding: Disabled`
