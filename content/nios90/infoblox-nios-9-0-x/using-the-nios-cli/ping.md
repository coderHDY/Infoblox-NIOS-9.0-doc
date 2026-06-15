---
title: "ping"
source: "/space/nios90/280790279"
pageId: "280790279"
---
The `ping`` `command verifies if a remote IPv4/IPv6 host is functioning and accessible across the network. When you execute the ping command, it sends five (default) sequential ICMP ECHO requests to the host and displays the results.

# Syntax

`ping {``hostname ``| ``ip_address``} [ ``opt ``]`

| **Argument** | **Description** |
| --- | --- |
| `hostname`` ` | The name of the remote host that you want to verify. |
| `ip_address`` ` | The IP address of the remote host that you want to verify. |
| `opt`` ` | - `numerical `(specifies to not interpret the IP address as a DNS name) - `src_addr` (specifies the starting or "from" address) - `v6` (specifies you are using an IPv6 hostname) - `broadcast` (allows pinging to a broadcast address) - `ttl``&lt;hops&gt;`` `(specifies the time-to-live setting for outgoing packets) - `packetsize``&lt;bytes&gt;` (specifies the number of data bytes to send) - `count``&lt;packets&gt;` (specifies number of echo_requests packets sent, default is 5, maximum is 250) |



# Examples

## Valid host

`Infoblox &gt; ``ping`` ``10.1.1.1`  
` pinging 10.1.1.1`  
` PING 10.1.1.1 (10.1.1.1) 56(84) bytes of data.`  
` 64 bytes from 10.1.1.1: icmp_seq=1 ttl=64 time=0.295 ms`  
` 64 bytes from 10.1.1.1: icmp_seq=2 ttl=64 time=0.102 ms`  
` 64 bytes from 10.1.1.1: icmp_seq=3 ttl=64 time=0.155 ms`  
` 64 bytes from 10.1.1.1: icmp_seq=4 ttl=64 time=0.211 ms`  
` 64 bytes from 10.1.1.1: icmp_seq=5 ttl=64 time=0.265 ms`  
` — 10.1.1.1 ping statistics —`  
` 5 packets transmitted, 5 received, 0% packet loss, time 4005ms rtt min/avg/max/mdev = 0.335/0.562/1.245/0.343 ms`

## Invalid host

`Infoblox &gt; ``ping`` ``jsparrow`  
` pinging jsparrow`  
` ping: unknown host jsparrow`
