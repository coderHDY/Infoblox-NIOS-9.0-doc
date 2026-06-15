---
title: "set ip_rate_limit"
source: "/space/nios90/280658933"
pageId: "280658933"
---
The `set` **ip_rate_limit** commands enable and disable rate limiting UDP traffic from source port 53, configure rate limiting rules that control the traffic, and remove rate limiting rules. Once you enable rate limiting, the current rate limiting rules take effect.  
 This command is useful when you want to mitigate cache poisoning on your DNS server by limiting the UDP traffic or blocking connections from source port 53.

# Syntax

set ip_rate_limit {on | off}  
set ip_rate_limit remove {source all | all | source *ip-address**[/**mask**]*}  
set ip_rate_limit add source {all | *ip_address **[/**mask**]}* limit 0  
set ip_rate_limit add source {all | *ip_address **[/**mask**]}* limit packets/m [burst  
*burst_packets*]

| **Argument** | **Description** |
| --- | --- |
| `On` | Enables rate limiting from UDP port 53. |
| `Off` | Disables rate limiting from UDP port 53. |
| `add source`   `  all`   `  ip_address/mask`   `  limit packets`   `  burst `***burst_packets****** *** | Configures the rate limiting rules.   Enter all or 0.0.0.0 if you want to limit all traffic from all sources.    Enter the IP address, and optionally the netmask, from which you want to limit the UDP traffic on port 53.    Enter the number of packets per minute that you want to receive from the source.    Optionally, enter burst and the number of packets for burst traffic. Burst is the maximum number of packets accepted. |
| `remove`` `   `  source all`` `   `  all`` `   `  source`*** ip-address******/******mask****** *** | Removes rate limiting rules from all sources or an existing host on UDP port 53.   Removes the rate limiting rule that limits traffic from all sources on UDP port 53.    Removes all of the rate limiting rules from all sources on UDP port 53.    Removes the existing rules for an existing host. |



# Examples

## Turn on rate limiting

`Infoblox &gt; ``set`` ``ip_rate_limit`` ``on`  
` Enabling rate limiting will discard packets and may degrade performance.`  
` Are you sure? (y or n):`

## Turn off rate limiting

`Infoblox &gt; ``set`` ``ip_rate_limit`` ``off`

## Block all traffic from host 10.10.1.1

`Infoblox &gt; ``set`` ``ip_rate_limit`` ``add`` ``source`` ``10.10.1.1`` ``limit`` ``0`

## Limit the traffic to five packets per minute from host 10.10.1.2/24, with an allowance for burst of 10 packets

`Infoblox &gt; ``set`` ``ip_rate_limit`` ``add`` ``source`` ``10.10.1.2/24`` ``limit`` ``5/m`` ``burst`` ``10`

## Remove the rate limiting rule from host 10.10.1.1/24

`Infoblox &gt; ``set`` ``ip_rate_limit`` ``remove`` ``source`` ``10.10.1.1/24`` `
