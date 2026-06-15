---
title: "Configuring Ethernet Ports"
source: "/space/nios90/280274166"
pageId: "280274166"
---
Depending on your deployment and configuration choices, the Ethernet ports on the NIOS appliance perform different functions. The Ethernet ports that handle traffic on the NIOS appliance are as follows:

- LAN1 port – A 10/100/1000-Mbps gigabit Ethernet port that connects the appliance to the network. This is the default port for single independent appliances, single Grid members, and passive nodes in HA pairs. You must use the LAN1 port to set up the appliance initially. It handles traffic for all management services if you do not enable the MGMT and LAN2 ports. The passive node in an HA pair uses this port to synchronize the database with the active node.
- LAN2 port – A 10/100/1000-Mbps gigabit Ethernet port that connects the appliance to the network. The LAN2 port is not enabled by default. You can enable the LAN2 port and define its use through the GUI after the initial setup. By default, the appliance uses the LAN1 port (and HA port when deployed in an HA pair). The LAN2 port is available on all appliance models both physical and virtual except those appliances deployed in public cloud*.* For information about how to use the LAN2 port, see [*Using the LAN2 Port*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-lan2-port).
- HA port – A 10/100/1000-Mbps gigabit Ethernet port through which the active node in an HA (high availability) pair connects to the network using a VIP (virtual IP) address. HA pair nodes also use their HA ports for VRRP (Virtual Router Redundancy Protocol) advertisements.
- MGMT port – A 10/100/1000-Mbps gigabit Ethernet port that you can use for appliance management or DNS service. You can enable the MGMT port and define its use through the GUI after the initial setup. If the MGMT port is enabled, the NIOS appliance uses it for management services (see the Sources and Destinations for Services table below for specific types).

You can do the following on some of the Ethernet ports, depending on your network requirements and configurations:

- Assign VLANs (Virtual LANs) to the LAN1 and LAN2 ports so that NIOS can provide DNS service to different subnetworks on the same interface.
- Implement DiffServ (Differentiated Services) on the appliance by configuring the DSCP (Differentiated Services Code Point) value.

In this section:

*[children]*
