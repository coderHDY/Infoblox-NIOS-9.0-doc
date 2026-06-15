---
title: "VRRP Advertisements"
source: "/space/nios90/1432754439"
pageId: "1432754439"
---
VRRP advertisements are periodic announcements of the availability of the HA node linked to the VIP. The two nodes in an HA pair include a VRID (virtual router ID) in all VRRP advertisements and use it to recognize VRRP advertisements intended for themselves. Only another appliance on the same subnet configured to use the same VRID responds to the announcements. The active node in an HA pair sends advertisements as multicast datagrams every second. It sends them from its HA port using the source IP address of the HA port (not from the VIP address) and the source MAC address 00:00:5e:00:01:vrrp_id. The last two hexadecimal numbers in the source MAC address indicate the VRID number for this HA pair. For example, if the VRID number is 143, then the source MAC address is 00:00:5e:00:01:8f (8f in hexadecimal notation = 143 in decimal notation).  
The destination MAC and IP addresses for all VRRP advertisements are 00:00:5e:00:01:12 and 224.0.0.18 (00:00:5e:00:02:12 and FF02::12 for IPv6 only configurations). Because a VRRP advertisement is a multicast datagram that can only be sent within the immediate logical broadcast domain, the nodes in an HA pair must be in the same subnet together.  
As illustrated in the figure below, when you configure an HA pair, only the appliance configured to listen for VRRP advertisements with the same VRID number processes the datagrams, while all other appliances ignore them. The passive node in an Infoblox HA pair listens for these on its HA port and the active node listens on its LAN1 or LAN1 (VLAN) port. If the passive node does not receive three consecutive advertisements or if it receives an advertisement with the priority set to 0 (which occurs when you manually perform a forced failover or request the active node to restart, reboot, or shut down), it changes to the active state and assumes ownership of the VIP address and virtual MAC address.   
If both nodes go offline, the one that comes online first becomes the active node. If they come online simultaneously, or if they enter a dual-active state—that is, a condition arises in which both appliances assume an active role and send VRRP advertisements, possibly because of network issues—then the appliance with the numerically higher VRRP priority becomes the active node. The priority is based on system status and events.  
If both nodes have the same priority, then the appliance whose HA port has a numerically higher IP address becomes the active node. For example, if the IP address of the HA port on Node 1 is 10.1.1.80 and the IP address of the HA port on Node 2 is 10.1.1.20, then Node 1 becomes the active node.



For more information about VRRP, see *RFC* *3768,* *Virtual* *Router* *Redundancy* *Protocol* *(VRRP)*.

*VRRP* *Advertisements* *with* *a* *Unique* *VRID*

*[drawio]*

> **warning**
>
> **Note**
> 
> - For a dual mode (IPv4 and IPv6) HA Master or HA member, you can set either IPv4 or IPv6 for VRRP advertisements.
> - The Grid members may restart all the services after the Grid Master has recovered from the dual-active state.
