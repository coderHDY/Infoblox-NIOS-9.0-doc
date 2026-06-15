---
title: "IP Routing Options"
source: "/space/nios90/379191446"
pageId: "379191446"
---
IP routing is a set of protocols that determine the path IP packets follow in order to travel across multiple networks from the source to the destination. When information travels through a series of routers and across multiple networks, IP routing protocols enable the routers to build up a forwarding table that correlates the final destination with the next upstream routers.

For routing purposes, the internet is divided into ASs (Autonomous Systems). Data is routed within an AS using an IGP (Interior Gateway Protocol) and routed between different ASs using an EGP (Exterior Gateway Protocol). NIOS appliances support OSPFv2 (for IPv4) and OSPFv3 (for IPv6) for a routing IGP, and BGP4 to advertise DNS anycast addresses in the larger internetwork.

As noted in the section [*Configuring Anycast Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404744), you configure OSPF or BGP4 to advertise anycast addresses, which configured on the loopback interface of NIOS appliances. Use of either protocol depends on the network topology, based on whether the advertisements will propagate only within a single AS or between more than one AS. The following figure shows a simplified example.

*OSPF* *and* *BGP* *Routing* *Example*

*[drawio]*

Within each AS, OSPF is the protocol used to forward anycast advertisements. Between ASs, BGP is the protocol selected to advertise anycast addresses. Using this technique, DNS servers in diverse locations can operate together to ensure continuous service.
