---
title: "Configuring the Connecting Switch"
source: "/space/nios90/1481048785"
pageId: "1481048785"
---
To ensure that VRRP (Virtual Router Redundancy Protocol) works properly, configure the following settings at the port level for all the connecting switch ports (HA, LAN1, and LAN2):

- **Spanning Tree Protocol**: Disable this or enable this with Portfast. For vendor specific information, search for "HA" in the Infoblox Knowledge Base system at [*https://support.infoblox.com*](https://support.infoblox.com).
- **Trunking**: Disable.
  
  Note that if VLAN tagging is enabled on an Infoblox HA appliance, you must enable trunking at the port level.  
  **Ether Channel**: Disable.
- **IGMP Snooping**: Disable.
- **DHCP Snooping**: Disable or Enable Trust Interface.
  
  Note that you must disable DHCP Snooping to successfully run DHCP services on the Grid. For more information about DHCP services, see [*About Infoblox DHCP Services*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services).
- **Port Channeling**: Disable.
- **Speed and Duplex settings**: Match these settings on both the Infoblox appliance and switch.
- Disable other dynamic and proprietary protocols that might interrupt the forwarding of packets.

> **warning**
>
> ### Note
> 
> By default, a NIOS appliance automatically negotiates the optimal connection speed and transmission type (full or half duplex) on the physical links between its LAN1 or LAN1 (VLAN), HA, and MGMT ports and the Ethernet ports on the connecting switch. If the two appliances fail to auto-negotiate the optimal settings, see [*Modifying Ethernet Port Settings*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports)* *for steps you can take to resolve the problem.
