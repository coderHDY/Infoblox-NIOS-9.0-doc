---
title: "show monitor dns alert status"
source: "/space/nios90/301826271"
pageId: "301826271"
---
The `show`` ``monitor`` ``dns`` ``alert`` ``status` command displays the current status of invalid DNS responses that arrive on DNS ports that are not open and have mismatched TXIDs (DNS transaction ID). You can view the alert status to identify the primary source of invalid DNS responses. The appliance displays historical alert counts and up to five primary sources that generate invalid DNS responses.

# Syntax

`show monitor dns alert status`

This command has no arguments.

# Example

## Viewing DNS alert status

`Infoblox &gt; ``show`` ``monitor`` ``dns`` ``alert`` ``status`` `  
`Data last updated: Mon Oct 6 14:47:12 2008 `  
`DNS Alert   1m   5m   15m   60m   24h   Ever`  
` ============================================ `  
`port        8    12   12    12    12    12`  
`txid        8    12   12    12    12    12`` `

` There were 80 DNS responses seen in the last minute. `  
`10% were to an invalid port.`  
` 10% had an invalid TXID. `  
` `

`Primary sources of invalid responses:`  
` 4.4.4.4 (unknown) sent 4`  
` 2.2.2.2 (unknown) sent 3`  
` 7.7.7.7 (unknown) sent 1`
