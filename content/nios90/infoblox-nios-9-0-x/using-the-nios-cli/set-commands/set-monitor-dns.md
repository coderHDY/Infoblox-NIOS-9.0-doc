---
title: "set monitor dns"
source: "/space/nios90/280397659"
pageId: "280397659"
---
The `set`` ``monitor`` ``dns` command enables network monitoring for DNS. Once enabled, you can do the following:

- View the average latency of authoritative and non-authoritative replies to DNS queries in 1, 5, 15, and 60 minute time intervals. Use the *[show monitor](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-monitor)* command to view the DNS network data.
- Monitor invalid DNS responses from UDP port 53. Use the *[show monitor dns alert status](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-monitor-dns-alert-status)* command to view the DNS alert status.

This command is useful when troubleshooting DNS and network issues.

> **warning**
>
> **Note**
> 
> When you enable DNS network monitoring, there is a significant impact on DNS query performance.

# Syntax

`set monitor dns {on | off}`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables network monitoring for DNS. |
| `off` | Disables network monitoring for DNS. |

# Examples

## Turn on DNS network monitoring

`Infoblox &gt; ``set`` ``monitor`` ``dns`` ``on`  
` Turning On DNS Network Monitoring...`

## Turn off DNS network monitoring

`Infoblox &gt; ``set`` ``monitor`` ``dns`` ``off`  
` Turning Off DNS Network Monitoring... `
