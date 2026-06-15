---
title: "About Virtual LANs"
source: "/space/nios90/1327104070"
pageId: "1327104070"
---
You can assign VLANs (Virtual Local Area Networks) to the LAN1, LAN2, and VIP (for HA pairs) interfaces so the appliance can provide DNS service to different subnetworks on the same interface. You can also configure VLANs interfaces on supported Network Insight appliances and use them exclusively for discovery purposes. VLANs are independent logical networks that are mutually isolated on the interface so that IP packets can pass between them through one or more switches or routers. You can assign VLANs to provide segmentation services to address issues such as scalability, security, and network management. For example, you can partition your network into segments such as DHCP address allocation, DNS service, guest network, and DMZ (demilitarized zone) to achieve a higher level of security and to increase performance by limiting broadcast domains. You can also add quality of service schemes to optimize your network traffic on the VLAN trunk links by configuring the DSCP (Differentiated Services Code Point) value for the corresponding physical and virtual interfaces.

> **warning**
>
> ### Note
> 
> When you configure VLANs on Network Insight appliances, the VLAN interfaces are used exclusively for discovery. You cannot bind other services on these VLAN interfaces of the supported Network Insight appliances. For more information about Network Insight, see [*About Network Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764332).

In this section:

*[children]*
