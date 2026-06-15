---
title: "traceroute"
source: "/space/nios90/155582508"
pageId: "155582508"
---
The `traceroute` command displays information on the route IPv4/IPv6 packets. You can use this command to determine the path of an IPv4/IPv6 query. This command provides information on the path packets travel and the time it takes to reach the IPv4/IPv6 destination address.

# Syntax

`traceroute ``{``hostname`` ``| ``ip_address``} [ opt ]`` `

| **Argument** | **Description** |
| --- | --- |
| `hostname`` ` | Fully qualified domain name |
| `ip_address`` ` | Valid IPv4/IPv6 address of the host |
| `opt`` ` | Can be any of the following:  - `numerical`` `(specifies to not interpret the IP address as a DNS name) - `src_addr`` `(specifies the starting or "from" address) - `ICMP` (specifies to use `ping`) - `v6` (specifies IPv6 hostname) |

# Example

The following example shows you how to use the traceroute command.

`Infoblox &gt; ``traceroute`` ``10.1.1.1`  
` traceroute to 10.1.1.1 (10.1.1.1), 30 hops max, 40 byte packets`  
` 1 10.1.1.5 (10.1.1.5) 1.951 ms 1.637 ms 1.734 ms`  
` 2 10.1.1.1 (10.1.1.1) 0.248 ms 0.284 ms 0.239 ms`
