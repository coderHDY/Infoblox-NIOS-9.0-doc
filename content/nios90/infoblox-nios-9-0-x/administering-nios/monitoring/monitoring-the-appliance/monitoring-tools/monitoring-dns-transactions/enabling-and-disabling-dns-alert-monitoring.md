---
title: "Enabling and Disabling DNS Alert Monitoring"
source: "/space/nios90/1393197426"
pageId: "1393197426"
---
The appliance monitors only UDP traffic on port 53 for recursive queries, and then reports invalid DNS responses.  
DNS alert monitoring is disabled by default. For an HA pair, you must enable DNS alert monitoring on both the active and passive nodes.  
To enable DNS network monitoring and DNS alert monitoring:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`set monitor dns on`  
The appliance displays the following:  
`Turning on DNS Network Monitoring...`

1. Enter the following command:

`set monitor dns alert on`

When you enable DNS alert monitoring, if DNS network monitoring is disabled, the appliance automatically enables DNS network monitoring and displays the following:

`DNS Network Monitoring is disabled. It must be enabled for alerting to function. `

`Enable DNS Monitoring now? (y or n):`

You can also disable DNS network monitoring and DNS alert monitoring using the following commands:

`set monitor dns off`  
` set monitor dns alert off`

> **warning**
>
> ### Note
> 
> When you restart DNS network monitoring, you also reset the SNMP counters for DNS alerts.

You can then view the alert status to identify the primary source of invalid DNS responses.
