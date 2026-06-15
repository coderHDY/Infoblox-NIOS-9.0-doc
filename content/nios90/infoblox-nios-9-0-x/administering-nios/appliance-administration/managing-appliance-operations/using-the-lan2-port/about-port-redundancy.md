---
title: "About Port Redundancy"
source: "/space/nios90/1481015668"
pageId: "1481015668"
---
You can configure the LAN2 or LAN2 (VLAN) port to provide redundancy and additional fault tolerance in your network. Port redundancy is transparently supported for both IPv4 and IPv6. When you enable port redundancy, the LAN1 or LAN1 (VLAN) and LAN2 or LAN2 (VLAN) ports are grouped into one logical interface. They share one IP address and appear as one interface to the network. Then, if a link to one of the ports fails or is disabled, the appliance fails over to the other port, avoiding a service disruption.  
You can connect the LAN1 or LAN1 (VLAN) and LAN2 or LAN2 (VLAN) ports to the same switch or to different switches, but the VLAN configuration between LAN1 and LAN2 must match. One port is active and the other port is idle at all times. In case of failure in the LAN1 or LAN1 (VLAN) port, the LAN2 or LAN2 (VLAN) port becomes active and once the LAN1 or LAN1 (VLAN) port is active again, the LAN2 or LAN2 (VLAN) port becomes passive if the **Use LAN1 when available** option is enabled. For more information, see Enabling Port Redundancy below.

> **warning**
>
> ### Note
> 
> - When configuring port redundancy, the speed of the interfaces is not taken into consideration when selecting the active interface.

The LAN1 or LAN1 (VLAN) and LAN2 or LAN2 (VLAN) ports share the IP address of the LAN1 or LAN1 (VLAN) port; the port that is currently active owns the IP address. When you enable services on the appliance, such as DNS and DHCP, clients send their service requests to the LAN1 or LAN1 (VLAN) port IP address and receive replies from it as well. The port supports the services and features supported on the LAN1 or LAN1 (VLAN) port as listed in Appliance Roles table and Sources and Destinations for Services table, see [*Configuring Ethernet Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports). You cannot enable the port redundancy feature if the LAN2 or LAN2 (VLAN) port is serving DNS or DHCP.  
For example, you can use the MGMT port for Grid communications, and the LAN1 and LAN2 ports are connected to the same switch. The LAN1 and LAN2 port share the IP address of the LAN1 port, which is 1.1.1.5. In the illustration, LAN1 is the active port.

You can also have the MGMT port disabled and configure LAN1 and LAN2 for port redundancy. You can enable port redundancy on single or HA independent appliances and Grid members.

*Using* *the* *LAN2* *Failover* *Feature*

*[drawio]*
