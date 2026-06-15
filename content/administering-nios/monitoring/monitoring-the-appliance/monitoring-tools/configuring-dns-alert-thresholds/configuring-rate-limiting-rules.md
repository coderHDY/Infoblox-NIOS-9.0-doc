---
title: "Configuring Rate Limiting Rules"
source: "/space/nios90/1393852500"
pageId: "1393852500"
---
You configure rate limiting rules to limit access or block connections from UDP port 53. The rules take effect when you enable rate limiting.  
When adding rules, ensure that you do not include an IP address that matches the IP address of either the Grid Master or Grid member. Doing this could affect VPN connectivity. To configure rate limiting rules:

1. Log in to the Infoblox CLI as a superuser account.
2. Enter the following CLI command:

`set ip_rate_limit add source all | ip_address [/mask] limit packets/m [burst burst_packets]`

where

`all | ip_address` = Enter `all` or `0.0.0.0` if you want to limit all traffic from all sources, or enter the IP

address from which you want to limit the traffic.

`[/mask]` = Optionally, enter the netmask of the host from which you want to limit the traffic.

`packets` = Enter the number of packets per minute that you want to receive from the source.

`[burst burst_packets]` = Optionally, enter `burst` and the number of packets for burst traffic. This is the maximum number of packets accepted.

The following are sample commands and descriptions for rate limiting rules:

- To block all traffic from host 10.10.1.1, enter the following command:

`set ip_rate_limit add source 10.10.1.1 limit 0`

- To limit traffic to five packets per minute from host 10.10.1.2, enter the following command:

`set ip_rate_limit add source 10.10.1.2 limit 5/m`

- To limit the traffic to five packets per minute from host 10.10.2.1/24 with an allowance for burst traffic of 10 packets, enter the following command:

`set ip_rate_limit add source 10.10.2.1/24 limit 5/m burst 10`

- To limit the traffic to 5000 packets per minute from all sources, enter the following command:

`set ip_rate_limit add source all limit 5000/m`
