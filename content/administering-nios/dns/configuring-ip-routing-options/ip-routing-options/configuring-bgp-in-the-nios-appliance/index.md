---
title: "Configuring BGP in the NIOS Appliance"
source: "/space/nios90/1468334691"
pageId: "1468334691"
---
You can configure the appliance as a BGP advertising interface for anycast addresses. The NIOS appliance advertises the BGP routing information to the network so routers can determine the nearest server to query. The NIOS appliance does not perform dynamic routing itself; it can use dynamic routing protocols to advertise its DNS anycast availability. You must define the ASN of the interface and list any neighboring routers that will receive the BGP announcements. On an HA pair, BGP runs only on the active node. In an HA failover, the BGP service resumes on the new active node.

> **warning**
>
> ### Note
> 
> If you encounter Malformed AS_PATH error, then remove the dont-capability-negotiate option. Infoblox doesn't provide an option to create confederation of autonomous systems if the BGP peer is configured by enabling the dont-capability-negotiate option.
