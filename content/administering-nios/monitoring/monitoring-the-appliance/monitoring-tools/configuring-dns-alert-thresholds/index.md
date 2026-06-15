---
title: "Configuring DNS Alert Thresholds"
source: "/space/nios90/1393557685"
pageId: "1393557685"
---
You can configure thresholds for DNS alerts to control when the appliance tracks DNS attacks on UDP port 53 and issues SNMP traps and e-mail notifications.

> **warning**
>
> ### Note
> 
> Ensure that you enable SNMP traps and e-mail notifications. For information, see [*Configuring SNMP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492).

You can configure thresholds for both invalid ports and invalid TXIDs. The default thresholds for both invalid ports and TXIDs are 50%. When the number of invalid ports or invalid TXIDs exceeds the thresholds, the appliance logs the event and sends SNMP traps and notifications. You can configure the thresholds either as absolute packet counts or as percentages of the total traffic during a one-minute time interval.   
To configure DNS alert thresholds:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`set monitor dns alert modify port | txid over threshold_value packets | percent`  
where  
`port | txid` = Enter `port `to set the threshold for invalid ports, or enter `txid `to set the threshold for invalid TXIDs.  
`threshold_value =` Enter the number of packets or percentage for the threshold.  
`packets | percent =` Enter `packets `if you want to track the total packet count, or enter `percentage `if you want to track a percentage of the total traffic. For a percentage-based threshold, the appliance does not generate a threshold crossing event if the traffic level is less than 100 packets per minute.

For example, if you want the appliance to send a DNS alert when the percentage of DNS responses arriving on invalid ports from UDP port 53 exceeds 70% per minute, you can enter the following command:

`set monitor dns alert modify port over 70 percent`

If you want the appliance to send a DNS alert when the total number of packets with invalid TXIDs from UDP port 53 is over 100 packets per minute, you can enter the following command:

`set monitor dns alert modify txid over 100 packets`

When there is a DNS alert, the appliance logs an event in the syslog file and sends an SNMP trap and e-mail notification if enabled.
