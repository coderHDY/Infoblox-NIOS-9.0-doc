---
title: "show monitor"
source: "/space/nios90/301367591"
pageId: "301367591"
---
The `show monitor` command displays current network monitoring data, when network monitoring for DNS is turned on. This command also provides information on the average latency of authoritative and non-authoritative replies to DNS queries. Latency is the time it takes for a packet to cross a network connection, from sender to receiver.

> **warning**
>
> **Note**
> 
> You must turn on network monitoring for DNS to view this data. For more information, see [*set monitor dns*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-monitor-dns).

# Syntax

`show monitor`

This command has no arguments.

# Examples

The following example for Network Monitoring for DNS shows information on the interval times in minutes, the latency (in microseconds), and the number of queries.

## Viewing network monitoring for DNS data

`Infoblox &gt; show monitor`  
` Network Monitoring for DNS is ON`  
` Data last updated: Tue Sep 12 19:05:51 2006`  
` Authoritative        Interval (min)       Latency (usec)      Number of queries `

`                         1                      2                   3`  
`                         5                      3                   20`  
`                         15                     3                   65`  
`                         60                     3                   300`

`Non Authoritative    Interval (min)       Latency (usec)      Number of queries`

`                         1                      2                   2`  
`                         5                      3                  10`  
`                         15                     3                  55`  
`                         60                     3                 150`



## When network monitoring for DNS is off

`Infoblox &gt; show monitor`  
` Network Monitoring for DNS is OFF `
