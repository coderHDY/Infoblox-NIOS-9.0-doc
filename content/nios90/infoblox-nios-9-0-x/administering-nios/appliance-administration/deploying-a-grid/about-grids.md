---
title: "About Grids"
source: "/space/nios90/280407969"
pageId: "280407969"
---
A Grid is a group of two or more NIOS appliances that share sections of a common, distributed, built-in database and which you configure and monitor through a single, secure point of access: the Grid Master. A Grid can include Infoblox appliances and vNIOS appliances. A vNIOS appliance is a non-Infoblox hardware platform running the vNIOS software package. For supported vNIOS platforms, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).  
Infoblox appliances support both IPv4 and IPv6 networks and you can configure a Grid in one of the following modes:

- **IPv4-only**: An IPv4-only Grid uses IPv4 as the Grid communication protocol and it includes an IPv4 Grid Master and the Grid members, which can be either IPv4 or dual mode (IPv4 and IPv6) independent and HA appliances. Note that when you add a dual mode HA member to an IPv4-only Grid, the communication protocol between the two nodes of an HA pair must be IPv4.
- **IPv6-only**: An IPv6-only Grid uses IPv6 as the Grid communication protocol and it includes an IPv6 Grid Master and the Grid members, which can be either IPv6 or dual mode (IPv4 and IPv6) independent and HA appliances. Note that when you add a dual mode HA member to an IPv6-only Grid, the communication protocol between the two nodes of an HA pair must be IPv6.
- **IPv4 and IPv6 (Dual mode)**: A dual mode Grid can use either IPv4 or IPv6 as the Grid communication protocol. A dual mode Grid includes a dual mode Grid Master and the Grid members, which can be either IPv4, IPv6, or dual mode independent and HA appliances.

> **warning**
>
> **Note**
> 
> Infoblox appliances support IPv4 and IPv6 networking configurations in most deployments cited in this chapter. You can set the LAN1 port to an IPv6 address and use that address to access Grid Manager. All HA (high availability) operations can be applied across IPv6. Topics in this and following chapters generally use IPv4 examples. Also note that the LAN2, MGMT, and VLAN ports also support IPv6. DNS services are fully supported in IPv6 for the LAN1, LAN2, MGMT, and VLAN ports. DHCP services are fully supported in IPv6 for the LAN1 and LAN2 ports. Examples throughout this chapter use IPv4 addressing. Interfaces on NIOS appliances support both IPv4 and IPv6 transports and intra-Grid communication is based on the type of IP address used by the Grid member to join the Grid.

The following table summarizes the possible setups of a Grid configuration:

*Possible* *Setups* *of* *Grid* *configuration*

| **Grid** **Configuration** | **VRRP** **Protocol** **for** **HA** **Pair** | **Grid** **Communication** **Protocol** | **Grid** **Connection** **via** **MGMT** | **Additional** **IPv4**    **Addresses** | **Additional** **IPv6**    **Addresses** |
| --- | --- | --- | --- | --- | --- |
| IPv4 Grid Master | IPv4 | IPv4 | NA | Yes | Yes |
| IPv6 Grid Master | IPv6 | IPv6 | NA | Yes | Yes |
| Dual mode Grid Master | IPv4 or IPv6 | IPv4 or IPv6 | NA | Yes | Yes |
| IPv4 Grid member | IPv4 | IPv4 | IPv4 | Yes | Yes |
| IPv6 Grid member | IPv6 | IPv6 | IPv6 | Yes | Yes |
| Dual mode Grid member | IPv4 or IPv6 | IPv4 or IPv6 | IPv4 or IPv6 | Yes | Yes |



> **warning**
>
> **Note**
> 
> Infoblox recommends that appliances with disk sizes below 250 GB must not be configured as Grid Masters.

You can also add supported Reporting platforms as a logging and reporting devices in your Grid. Infoblox provides a few Infoblox platforms that you can use as the logging and reporting device. For information about the supported appliances, see [*Configuring Reporting Clustering*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/configuring-reporting-clustering). Infoblox reporting solution supports both IPv4 and IPv6 networks and you can configure a reporting member in either IPv4, IPv6, or in dual mode (IPv4 and IPv6) network environment. An IPv4-only Grid uses IPv4 as the Grid communication protocol, so you can add an IPv4 or dual mode reporting member to an IPv4-only Grid. An IPv6-only Grid uses IPv6 as the Grid communication protocol, so you can add an IPv6 or dual mode reporting member to an IPv6-only Grid. However, a dual mode Grid can use either IPv4 or IPv6 as the Grid communication protocol, so you can add an IPv4, IPv6, or a dual mode reporting member to a dual mode Grid. The reporting appliance collects data from members in the Grid and stores the data in the database. It then uses the data to generate predefined and user-defined reports that you can access through Grid Manager. These reports provide useful information about the IPAM, DNS, DHCP, and system activities and usage in your Grid. For more information about reporting, see [*Infoblox Reporting and Analytics*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics).

Instead of manually provisioning IP addresses and DNS name spaces for network devices and interfaces, you can add Cloud Platform Appliances to leverage DNS and DHCP features of the Grid to manage your CMPs (Cloud Management Platforms). For information about the Infoblox Cloud Network Automation solution and supported Grid configurations, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).

The following figure shows the basic concept of a Grid, database distribution (or "replication"), and reporting.

*Grid and Partitioned Database Replication*

*[drawio]*

The Grid Master can be either an HA master or a single master; that is, an HA (high availability) pair or a single appliance. Similarly, a Grid member can be either a single member or an HA member. You can add single appliances and HA pairs to a Grid, forming single members and HA members respectively. A single Grid member can be either an Infoblox appliance or a vNIOS appliance. An HA Grid member can be a pair of Infoblox appliances or vNIOS appliances. For information, see [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).  
The Grid Master communicates with every Grid member in a hub-and-spoke configuration. Intra-Grid communication is based on the type of IP address used by the Grid member to join the Grid Master. An IPv4-only Grid Master uses IPv4 and an IPv6-only Grid Master uses IPv6 for intra-Grid communication. However, a dual mode Grid Master uses either IPv4 or IPv6 depending on the IP address type used by the Grid member to join the Grid Master. For an HA member, the Grid Master communicates with the active node, which in turn communicates with the passive node, as shown in the following figure.

*Grid* *Communications* *to* *an* *HA* *Member*

*[drawio]*

When adding vNIOS appliances to a Grid, you centralize the management of core network services of the virtual appliances through the Grid Master. vNIOS appliances support most of the features of the Infoblox NIOS software, with some limitations as described in [*vNIOS Appliances*](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).  
  
By default, Grid communications use the UDP transport with a source and destination port of 1194. This port number is configurable. For a port change to take effect, one of the following must occur: the HA master fails over, the single master reboots, or the Grid restarts services.  
After adding an appliance or HA pair to a Grid, you no longer access the Infoblox GUI on that appliance. Instead, you access the GUI running on the Grid Master. Although you can create multiple administrator accounts to manage different services on various Grid members, all administrative access is through the Grid Master. So even if someone has administrative privileges to a single Grid member, that administrator must access the GUI running on the Grid Master to manage that member.  
You can access the Infoblox GUI through an HTTPS connection to one of the following IP addresses and ports on the Grid Master:

- The VIP address, which links to the HA port on the active node of an HA Grid Master
- The IP address of the LAN1 port on a single Grid Master
- The IP address of the MGMT port (if enabled) of the active node of an HA or single Grid Master. See [*Using the MGMT Port*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port).

# Grid Communications

The Grid Master synchronizes data among all Grid members through encrypted VPN tunnels. The default source and destination UDP port number for VPN tunnels is 1194. You can continue using the default port number or change it. For example, if you have multiple Grids, you might want each Grid to use a different port so that you can set different firewall rules for each. Whatever port number you choose to use for the VPN tunnels in a Grid, all the tunnels in that Grid use that single port number.  
Before an appliance or HA pair forms a tunnel with the master, they first authenticate each other using the Challenge-Response Authentication Mechanism (CRAM). The source and destination port number for this traffic is 2114. During the CRAM handshake, the master tells the appliance or HA pair what port number to use when building the subsequent VPN tunnel.

*VPN* *Tunnels* *within* *a* *Grid*

*[drawio]*

Another type of traffic, which flows outside the tunnels, is the VRRP (Virtual Router Redundancy Protocol) advertisements that pass between the active and passive nodes in an HA pair. The VRRP advertisements act like heartbeats that convey the status of each node in an HA pair. If the active node fails, the passive node becomes active. The VIP (virtual IP) address for that pair then shifts from the previously active node to the currently active node.

# Master Grids

A Master Grid provides centralized management of multiple Grids. When a Grid is managed by a Master Grid, the Master Grid icon appears on the left side of the top panel of Multi-Grid Manager. Assuming you have permission, you can click this icon to access Multi-Grid Manager. In addition, the Toolbar provides several functions for joining the Master Grid, editing its properties and leaving the Master Grid. For more information about the Master Grid and these functions, refer to the *Multi-Grid* *Manager* *Administrator* *Guide*.
