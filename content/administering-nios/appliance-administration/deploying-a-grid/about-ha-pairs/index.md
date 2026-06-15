---
title: "About HA Pairs"
source: "/space/nios90/280765644"
pageId: "280765644"
---
You can configure two appliances as an HA (high availability) pair to provide hardware redundancy for core network services and Infoblox DNS Infrastructure Protection. For more information, see [*About Infoblox DNS Infrastructure Protection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267604).

An HA pair can be a Grid Master, a Grid Master candidate, a Grid member, or an independent appliance. An HA pair can comprise two physical appliances or two virtual appliances. NIOS also supports HA pairs that comprise a physical appliance and a virtual appliance. This is called a hybrid HA setup. In a hybrid HA setup, you can select the Grid member to be of type **Infoblox** or **Virtual** **NIOS** from the **Member Type** drop-down list in the *Add* *Grid* *Member* wizard. For information about adding an HA member, see [*Adding an HA Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684327111). For limitations of using this combination, see [*Limitations of Using a Combination of a Physical Appliance and a Virtual Appliance for HA*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432787074).

The two nodes that form an HA pair, identified as Node 1 and Node 2, are in an active/passive configuration. The active node receives, processes, and responds to all service requests. The passive node constantly keeps its database synchronized with that of the active node, so it can take over services if a failover occurs. A failover is the reversal of the active/passive roles of each node; that is, when a failover occurs, the previously active node becomes passive and the previously passive node becomes active. You can configure an HA pair in either IPv4, IPv6, or in dual mode. An IPv4 HA pair uses IPv4 as the communication protocol between the two nodes and an IPv6 HA pair uses IPv6 as the communication protocol between the two nodes. But in a dual mode HA pair, you can select either IPv4 or IPv6 as the communication protocol between the two nodes. Note that when you add a dual mode HA member to a Grid, the communication protocol between the two nodes of an HA pair must be the same as the Grid communication protocol.

> **warning**
>
> **Note**
> 
> - HA Grid Master and HA Grid Master Candidate configurations are not supported when Threat Protection licenses are installed on the appliance.
> - For a vNIOS HA pair, you must configure both LAN1 and HA interfaces to operate. When there is a notification about failure in any one of the ports, make sure that both of the  ports are working. If one of the ports is down but the other port is working, the HA pair believes its peer is active. However, there will be connectivity issues as one of the ports is down. **An HA failover occurs on vNIOS appliances when both of the ports are down. **For details about configuring virtual NICs, see the Infoblox Installation Guide vNIOS for VMware at [https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances)

For Infoblox, only the active node in an HA pair handles DNS traffic. The passive node is in a standby mode ready to take over if a failover occurs.  
The appliance uses the following components in the HA functionality:

- bloxSYNC: An Infoblox proprietary mechanism for secure, real-time synchronization of the database that maintains the data, system configuration, and protocol service configuration between the two nodes. With bloxSYNC, the nodes continuously synchronize changes of their configurations and states. When a failover occurs, the passive node can quickly take over services. For information, see [About HA Failover](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432754477).
- VRRP (Virtual Router Redundancy Protocol): An industry-standard, MAC-level HA failover mechanism. VRRP utilizes the concept of an active and passive node that share a single VIP (virtual IP) address. When the active node that owns the VIP becomes unavailable, the passive node takes over the VIP and provides network core services. For information about VRRP, refer to *RFC3768,Virtual Router Redundancy Protocol (VRRP)* and see VRRP Advertisements below.

Using bloxSYNC and VRRP combined, if the active node fails or is taken offline for maintenance purposes, the passive node assumes the VIP and continues to respond to requests and services with minimal interruption. You can deploy an HA pair as a Grid Master, a Grid member, or an independent HA. To deploy an independent HA pair, see [*Deploying an Independent HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667859). To deploy an HA Grid Master, see [*Creating an HA Grid Master*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684327064).

This topic includes the following sections:

*[children]*
