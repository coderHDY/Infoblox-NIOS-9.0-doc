---
title: "show monitor dns alert"
source: "/space/nios90/301367666"
pageId: "301367666"
---
The `show`` ``monitor`` ``dns`` ``alert` command displays the current DNS alert thresholds. The appliance displays the default thresholds (50% for both invalid ports and invalid TXIDs) if you have not configured new thresholds for the DNS alerts.

# Syntax

`show monitor dns alert`

This command has no arguments.

# Example

## Viewing DNS alert thresholds

`Infoblox &gt; ``show`` ``monitor`` ``dns`` ``alert`` `  
`DNS Network Monitoring is enabled. `  
`Alerting is enabled.`  
` DNS Alert      Threshold (per minute)`  
` ===========================================`  
` port           over 70% of packets`  
` txid           over 100 packets`
