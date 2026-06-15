---
title: "Viewing DNS Alert Indicator Status"
source: "/space/nios90/1393918012"
pageId: "1393918012"
---
To view DNS alert indicator status:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`show monitor dns alert status`

The appliance displays historical alert counts and up to five primary sources that generate invalid DNS responses, as shown in the following example:   
`Data last updated: Mon Oct 6 14:47:12 2008 `

`DNS Alert1m5m15m60m24hEver`  
` ============================================ `

`port8 12  1212  12  12`

`txid8 12  1212  12  12`

`There were 80 DNS responses seen in the last minute. `

`10% were to an invalid port.`

`10% had an invalid TXID. `

`Primary sources of invalid responses:`

`4.4.4.4 (unknown) sent 4`

`2.2.2.2 (unknown) sent 3`

`7.7.7.7 (unknown) sent 1`

The appliance attempts to resolve the hostnames of the sources that sent invalid responses, if the DNS resolver is enabled. If the appliance cannot resolve a hostname, it displays "unknown" as the hostname of the invalid response.
