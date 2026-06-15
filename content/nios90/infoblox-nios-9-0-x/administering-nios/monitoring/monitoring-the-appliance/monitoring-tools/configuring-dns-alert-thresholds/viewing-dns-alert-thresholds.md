---
title: "Viewing DNS Alert Thresholds"
source: "/space/nios90/1393852533"
pageId: "1393852533"
---
You can view the DNS alert thresholds. The appliance displays the current thresholds. If you have not configured new thresholds, the appliance displays the default thresholds, which are 50% for both invalid port and TXID.  
To view the DNS alert thresholds:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`show monitor dns alert`

The appliance displays the threshold information as shown in the following example:

`DNS Network Monitoring is enabled. Alerting is enabled.`

`DNS Alert Threshold (per minute)`  
` ===========================================`  
` portover 70% of packets`

`txidover 100 packets`
