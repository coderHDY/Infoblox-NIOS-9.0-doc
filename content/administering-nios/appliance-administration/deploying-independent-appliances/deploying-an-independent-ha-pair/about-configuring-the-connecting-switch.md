---
title: "About Configuring the Connecting Switch"
source: "/space/nios90/1503658310"
pageId: "1503658310"
---
To ensure that VRRP (Virtual Router Redundancy Protocol) works properly, configure the following settings at the port level for all the connecting switch ports (HA, LAN1, LAN1 (VLAN), LAN2, and LAN2 (VLAN)):

- Spanning Tree Protocol: Disable. For vendor specific information, search for "HA" in the Infoblox Knowledge Base system at [*https://support.infoblox.com*](https://support.infoblox.com).
- Trunking: Disable
- EtherChannel: Disable
- IGMP Snooping: Disable
- Port Channeling: Disable
- Speed and Duplex settings: Match these settings on both the Infoblox appliance and switch
- Disable other dynamic and proprietary protocols that might interrupt the forwarding of packets

> **warning**
>
> ### Note
> 
> By default, a NIOS appliance automatically negotiates the optimal connection speed and transmission type (full or half duplex) on the physical links between its LAN1, HA, and MGMT ports and the Ethernet ports on the connecting switch. If the two appliances fail to auto-negotiate the optimal settings, see [*Modifying*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[*Ethernet*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[*Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166)[*Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166) for steps you can take to resolve the problem.
