---
title: "Anycast and OSPF"
source: "/space/nios90/1468629622"
pageId: "1468629622"
---
NIOS appliances can use the OSPF routing protocol to advertise routes for DNS anycast addresses to an upstream router within the autonomous system. The upstream router uses the OSPF advertisement to determine the nearest DNS server from a group of servers within the internetwork. In practice, the NIOS appliance relies upon OSPF to determine the best route for DNS queries to take to the nearest DNS server. The upstream router then forwards the query to the chosen DNS server.

As illustrated in the figure Anycast Addressing for DNS Using OSPF below, to enable anycast for DNS queries, you configure two or more DNS servers within the AS routing domain with the same anycast address on their loopback interfaces. When you select OSPF as the routing protocol, the upstream router determines the nearest server within the group of servers configured with that anycast address. (The "nearest" DNS server may not necessarily be the geographically closest DNS server; it is the DNS server with the lowest cost associated with its reachability from the current node. This is calculated through the OSPF routing algorithm, a discussion of which is far beyond the scope of this manual.) The nearest DNS server configured with the correct anycast address then responds to the DNS query. In the case where the nearest server becomes unavailable, the next nearest server responds to the query. OSPF anycast provides a dynamically routed failover to ensure that DNS can always resolve client requests within the AS. From the client perspective, anycasting is transparent and the group of DNS servers with the anycast address appears to be a single DNS server.

*Anycast* *Addressing* *for* *DNS* *Using* *OSPF*

*[drawio]*

After you configure or change DNS anycast settings, you must restart the DNS services for the settings to take effect. When you enter any OSPF command and wait for the interface to return more information, the appliance disconnects your CLI session after you restart services or make other OSPF configuration changes through Grid Manager. Re-enter your credentials to log back in to the CLI. (For information, refer to the *Infoblox* *CLI* *Guide*.)  
To enable the appliance to support OSPF and advertising anycast addresses on OSPF from the loopback, you must first configure the LAN1 or LAN1 (VLAN) interface as an OSPF advertising interface. For information about VLAN, see* *[*About Virtual LANs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1327104070).  
You can also configure authentication for OSPF advertisements to ensure that the routing information received from a neighbor is authentic and the reachability information is accurate. This process can be implemented for OSPF over IPv4 networks but is not supported for IPv6/OSPFv3.

> **warning**
>
> ### Note
> 
> For more information about the OSPF routing protocol, refer to *RFC* *2328* *"OSPFv2"* *and* *RFC* *5340* *"OSPF* *for* *IPv6"*.
