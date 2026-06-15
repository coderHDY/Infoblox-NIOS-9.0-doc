---
title: "Using the LAN2 Port"
source: "/space/nios90/280765014"
pageId: "280765014"
---
The LAN2 port is a 10/100/1000Base-T Ethernet connector on the front panel of the X5 and X6  appliances. By default, the LAN2 port is disabled and the appliance uses the LAN1 port (and HA port when deployed in an HA pair). Before you can enable and configure the LAN2 port on a Grid member, you must first configure the member and join it to the Grid. You must also have read/write permission to the Grid member on which you want to enable the port. When you enable the LAN2 port and SNMP, the appliance sends traps from this port for LAN2 related events. The LAN2 port does not  work on all public cloud (AWS, Azure, Google Cloud) appliances.

You can configure the LAN2 port in different ways:

- You can enable the port redundancy or port failover feature, which groups the LAN1 and LAN2 ports into one logical interface. The LAN1/LAN2 grouping can be activated for both IPv4 and IPv6.
- Alternatively, you can configure the LAN2 port on a different IP network than LAN1, and enable the LAN2 port to provide DNS and DHCP services.

> **note**
>
> Note:
> 
> - You cannot use the LAN2 port to access the GUI and the API, or to connect to the Grid. This can impact the ability of other appliances, such as the NetMRI and PortIQ appliances, to communicate with the Grid Master. Any IPv6 services enabled for the LAN2 port also require provisioning of an IP address on the LAN2 port.
> - NIC failover for LAN1 and LAN2 is not supported on AWS members.
