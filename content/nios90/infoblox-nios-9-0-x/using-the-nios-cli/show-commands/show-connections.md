---
title: "show connections"
source: "/space/nios90/280822479"
pageId: "280822479"
---
The `show`` ``connections` command shows the active Internet connections for the NIOS appliance. Use this command to investigate connectivity issues or processes that may have stopped running.

# Syntax

`show connections`

This command has no arguments.

# Example

The following example provides information on:

- **Proto:** Active protocol, TCP or UDP
- **Recev-Q:** Packets received
- **Send-Q:** Packets sent
- **Local****Address:** Host name and type of connection
- **Foreign****Address:** IP address of the system connected to the appliance
- **State:** State of the connection

`Infoblox &gt; ``show`` ``connections`

`Active Internet connections (servers and established) `  
`Proto Recv-Q Send-Q Local Address Foreign Address State `  
` ``tcp 0    0    localhost:kdm*:*LISTEN`  
`tcp 0    0    localhost:cluster-disk*:*LISTEN`  
`tcp 0    0    localhost:localdo:domain*:*LISTEN`  
`tcp 0    0    localhost:domain*:*LISTEN`  
`tcp 0    0    localhost:rndc*:*LISTEN`  
`tcp 0    0    infoblox:localdom:https*:*LISTEN`  
`tcp 0    0    localhost:https*:*LISTEN`  
`tcp 0    0    infobloxlocaldom:https10.1.1.1:arbotext-lm ESTABLISHED`` `  
` Enter &lt;return&gt; to continue with More lines or enter q&lt;return&gt; to go back to the command line.`
