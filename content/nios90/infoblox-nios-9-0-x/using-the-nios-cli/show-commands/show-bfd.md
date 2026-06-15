---
title: "show bfd"
source: "/space/nios90/280789774"
pageId: "280789774"
---
The `show bfd` command displays the detailed BFD information, session details, and configuration information. For information about how to set the logging level, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bfd)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bfd)[*bfd*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bfd).

# Syntax

`show bfd [ summary | details | config ]`



| **Argument** | **Description** |
| --- | --- |
| `summary` | Displays the BFD neighbor information. |
| `details` | Displays the BFD neighbor detailed information. |
| `config` | Displays the running BFD configuration file. |



# Example

`Infoblox &gt; ``show`` ``bfd`` ``details`  
` OutAddr             NeighAddr         LD/RD           Holdown(mult)        State     Int`  
` 10.34.54.68        10.34.54.16        2/4               300(3)               Up     bond0`  
` Local Diag: 0, Demand mode: 0, Poll bit: 0`  
` MinTxInt: 100000, MinRxInt: 100000, Multiplier: 3`  
` Received MinRxInt: 100000, Received Multiplier: 3`  
` Holdown (hits): 300(0), Hello (hits): 100(1638) Authentication:None`  
`                 Last Sequence Number: Rx: 0, Tx: 1566182577 `  
`Rx Count: 1638`  
` Tx Count: 1686`  
` Last packet: Version: 1                 - Diagnostic: 0`  
`             State bit: Up              - Demand bit: 0`  
`             Poll bit: 0                - Final bit: 0`  
`             Multiplier: 3              - Length: 24`  
`             My Discr: 2       - Your Discr: 4`  
` Min tx interval: 100000- Min rx interval: 100000 Min Echo interval: 100000`
