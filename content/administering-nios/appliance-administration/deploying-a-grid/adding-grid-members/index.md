---
title: "Adding Grid Members"
source: "/space/nios90/686097129"
pageId: "686097129"
---
> **warning**
>
> **Note**
> 
> You may provision a Port Reservation for the new Grid Member. When doing so, you select the device to which you expect the new Grid Member to connect; In the context of a Grid member, this device type is usually an Ethernet Switch or Switch-Router. The *Add Grid Member Wizard* provides a step in which you define the port reservation settings, as described in [*Adding a Single Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684752977). The process also can be applied when defining an HA pair, as described in [*Creating an HA Grid Master*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684327064)[ ](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Creating%20a%20Grid%20Master_old&linkCreation=true&fromPageId=686097129)and [*Adding an HA Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/684327111).

You can add single appliances and HA pairs to a Grid as explained in the following topics to form single members and HA members, respectively:

*[children]*

A single Grid member can be either an Infoblox appliance or a vNIOS appliance. You can configure Grid members in either IPv4, IPv6, or dual mode (IPv4 and IPv6). For information about which vNIOS appliance supports configuration as an HA Grid member, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).  
You can also define an HA member on the Grid Master and then add two individual NIOS appliances to the Grid as Node 1 and Node 2 to complete the HA member you defined on the master.  
New members inherit all settings that you create at the Grid level unless you override them at the member level. You can also define port reservations for the network infrastructure devices to which the Grid members will connect.  
The process for adding either a single appliance or HA pair to a Grid involves the following steps:

1. Adding and configuring Grid members on the Grid Master. In addition to defining the network and appliance settings for a member, you can also configure service settings before you join the member or HA pair to the Grid.
2. Reserving a port on a switch or switch-router for connectivity to the Grid member.
3. Joining the appliance or HA pair to the Grid. This includes defining the VIP or IP address of the Grid Master, the Grid name, and the shared secret on the single appliance or HA pair. If an appliance or HA pair cannot join the Grid because of MTU (maximum transmission unit) limitations on its network link, you can reduce the MTU that the master uses when communicating with it. See [*Setting the MTU for VPN Tunnels*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274866). If the Grid Master is behind a NAT device and there are members on both sides of that NAT device, you must create a NAT group, as described in [*NAT Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274710).

In a large-scale deployment of Grids across multiple sites, consider remotely provisioning your Grid members before joining them to the Grid. For more information about this feature, see [*Auto-Provisioning NIOS Appliances*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765557).  
In situations where you want to define certain configurations on an offline Grid member and associate DNS and DHCP data to the member before deploying it, you can use the pre-provisioning feature to accomplish this. For more information, see [*Pre-Provisioning NIOS and vNIOS Appliances*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765527)*.*

For more details, see the following topics:

*[children]*
