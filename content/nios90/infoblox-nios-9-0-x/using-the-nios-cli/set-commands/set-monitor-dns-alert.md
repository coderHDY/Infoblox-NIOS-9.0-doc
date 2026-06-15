---
title: "set monitor dns alert"
source: "/space/nios90/280397638"
pageId: "280397638"
---
The `set`` ``monitor`` ``dns`` ``alert` commands enable DNS alert monitoring and set the thresholds for invalid DNS responses. After you enable DNS alert monitoring, the appliance monitors the UDP traffic on port 53 for recursive DNS queries, and then reports invalid DNS responses on UDP ports that are not open and with mismatched TXIDs. You must enable DNS network monitoring when you enable DNS alert monitoring. For information, see the *[set monitor dns](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-monitor-dns)* command.  
You can also configure the thresholds for invalid DNS responses. When the number of invalid responses exceeds the thresholds, the appliance logs the event and sends SNMP traps and notifications, if previously enabled. The default thresholds for both invalid ports and invalid TXIDs are 50%. You can configure the thresholds either as absolute packet counts or as percentages of the total traffic during a one minute time interval.  
This command is useful for monitoring possible cache poisoning. Use the *[show monitor dns alert status](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-monitor-dns-alert-status)* command to view invalid port and invalid TXID data.

# Syntax

`set monitor dns alert {on | off}`  
` set monitor dns alert modify {port | txid} over ``threshold_value`` {packets | percent}`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables DNS alert monitoring. |
| `off` | Disables DNS alert monitoring. |
| `modify`   `   port`   `   txid`   `   threshold_value`   `  `` packets`   `   percent` | Sets the thresholds for invalid DNS responses   Enter `port`** **to set the threshold for invalid ports.    Enter `txid`** **to set the threshold for invalid TXIDs.   Enter the number of packets or percentage for the threshold.   Enter `packets`** **if you want to set the threshold as a total packet count.   Enter `percentage` if you want to set the threshold as a percentage of the total traffic. For a percentage-based threshold, the appliance does not generate a threshold crossing event if the traffic level is less than 100 packets per minute. |

# Examples

## Turning on and off DNS alert monitoring

`Infoblox &gt; ``set`` ``monitor`` ``dns`` ``alert`` ``on`  
` Infoblox &gt; ``set`` ``monitor`` ``dns`` ``alert`` ``off`

## Triggering a DNS alert when the percentage of invalid DNS responses on UDP ports exceeds 70% per minute

`Infoblox &gt; ``set`` ``monitor`` ``dns`` ``alert`` ``modify`` ``port`` ``over`` ``70`` ``percent`

## Triggering a DNS alert when the total packet count of invalid DNS responses with mismatched TXIDs is over 100 packets per minute

`Infoblox &gt; ``set`` ``monitor`` ``dns`` ``alert`` ``modify`` ``txid`` ``over`` ``100`` ``packets`
