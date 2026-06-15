---
title: "Planning for an HA Pair"
source: "/space/nios90/1432819381"
pageId: "1432819381"
---
To achieve high availability, the HA and LAN1 (or VLAN) ports on both the active and passive nodes are connected to switches on the same network or VLAN. Both nodes in an HA pair share a single VIP address and a virtual MAC address so they can appear as a single entity on the network. You can also assign IPv6 addresses for each of the active and passive nodes, in addition to the IPv6 VIP address.

> **warning**
>
> **Note**
> 
> - Infoblox uses VRRP advertisements for the active and passive HA design. Therefore, all HA pairs must be located in the same location connected to the highly available switching infrastructure. Any other deployment is not supported without a written agreement with Infoblox. Contact Infoblox Technical Support for more information about other deployment support.
> - You can enable ARP on the passive node of an HA pair and monitor its status externally. To enable ARP on the passive node of an HA pair, see [*Enabling ARP on the Passive Node of an HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432754506).

In HA, each node must configure two addresses: the VRRP public address on the LAN1 interface and the VRRP HA address on the HA interface. An HA pair consists of a set of five IP addresses, all of which must belong to the same subnet. Each device in an HA pair joins the multicast address on both the HA and public interfaces.

As illustrated in the following figure, the VIP and virtual MAC addresses link to the HA port on each node. Select five IP addresses on the same network before you configure an HA pair, as follows:

- VIP: For core network services and for management purposes when the MGMT port is disabled. Both nodes share the same VIP. The VIP is the true public address in which services and daemons are active.
- Node 1 HA (active): Source IP for the VIP and VRRP advertisements. Listens on both its LAN and HA ports. For an active HA node, both the LAN interface/address and the HA interface/address belong to the VRRP multicast group.
- Node 1 LAN1 (active): For management through SSHv2 and listens for VRRP advertisements from the HA port.
- Node 2 HA (passive): Listens for VRRP advertisements on the LAN port. For a passive HA node, only the LAN interface/address belongs to the VRRP multicast group (using the LAN port's MAC address).
- Node 2 LAN1 (passive): Source IP for SSL VPN to the VIP of the active node and receives bloxSYNC from the VIP.

> **warning**
>
> **Note**
> 
> An HA member connecting to the Grid Master over the management port should have the LAN1 or HA ports connected to different physical switches to make sure the VRRP packets are exchanged correctly between the active and passive nodes. If the LAN1 or HA ports are connected to the same physical switch, you must configure the LAN1/LAN2 bonding to exchange the VRRP packets between the active and passive nodes.

The above configuration holds good only for IPv4 VRRP configurations. IPv6 VRRP configurations require only three addresses: the VIP and the LAN1 interfaces. For the IPv6 dedicated HA interfaces, NIOS uses the link local IPv6 address which you do not need to provide.

*HA* *Pair*

*[drawio]*

When you deploy a vNIOS HA pair, ensure that the port connection allows for more than one MAC address per vNIC. For example, if you deploy a vNIOS HA pair in VMware vSphere, the port-profile to which the vNIOS HA and LAN ports connect should allow for more than one MAC address per vNIC. You can do this by changing the security settings of the port-group to accept "MAC address changes" and "Forged transmits," as illustrated in the following figure.  
*Configuring* *port-profile* *in* *VMware* *vSphere*
