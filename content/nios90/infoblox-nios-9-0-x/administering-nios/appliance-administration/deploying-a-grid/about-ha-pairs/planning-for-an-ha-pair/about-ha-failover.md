---
title: "About HA Failover"
source: "/space/nios90/1432754477"
pageId: "1432754477"
---
The appliance supports HA through bloxHA™, which provides a robust failover mechanism. As described in [*Planning for an HA Pair*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/about-ha-pairs/planning-for-an-ha-pair), both nodes in an HA pair share a single VIP address and a virtual MAC address. The node that is currently active is the one whose HA port owns the VIP address and virtual MAC address. When a failover occurs, these addresses shift from the HA port of the previous active node to the HA port of the new active node, as illustrated in the figure below.

> **warning**
>
> **Note**
> 
> For a vNIOS HA pair, you must configure both LAN1 and HA interfaces to operate. When there is a notification about failure in any one of the port, make sure that both of these ports are working. If one of the port is down and another port is still working, the HA pair believes its peer is active. But, there will be connectivity issues as one of the port is down. An HA failover occurs on vNIOS appliances when both of these ports are down. For details about configuring these virtual NICs, refer to the *Infoblox Installation Guide *vNIOS* for VMware*.

*VIP* *Address* *and* *Virtual* *MAC* *Address* *and* *HA* *Failover*

*[drawio]*
