---
title: "Network Insight Architecture"
source: "/space/nios90/465273859"
pageId: "465273859"
---
Discovery appliances that only detect devices and collect device data are called Probes, which are members of the Infoblox Grid, separately dedicated to the tasks of polling and discovery of networks and devices. A separate appliance, called the Consolidator, aggregates and organizes all collected device information from the Probes and synchronizes with the Grid Master. For more information, see [*Consolidator and Probes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273455).  
You can configure supported appliances as the Consolidator and Probes, as illustrated in the figure Network Insight Appliances Added as Grid members below. The Consolidator aggregates discovered data it collects from Probes and transfers the data to the Grid Master for device management and reporting purposes.  
In the Grid, the Grid Master synchronizes data among all Grid members through encrypted VPN tunnels. Communications between the Consolidator and Probes are also through encrypted VPN tunnels. The default source and destination UDP port number for VPN tunnels in a Grid is 1194. You can use the default port number or change it for VPN communications. Note that all the VPN tunnels in the Grid use the same port number that you have chosen.

*Network* *Insight* *Appliances* *Added* *as* *Grid* *members*

*[drawio]*

Network Insight appliances use SNMP and other protocols to discover and catalogue a diverse assortment of device types, including the following: routers, enterprise switches, firewalls and security appliances, load balancers, enterprise printers, wireless access points, VoIP concentrators, application servers, VRF-based virtual networks, and end hosts.  
Network Insight provides a tool for administrators to gather key information about networks, including the discovery of routed paths and the host clouds behind enterprise switches, even in organizations where an Infoblox deployment already exists. In the figure Discovery in Action below, an appliance running discovery connects to an enterprise router, and uses its information to determine more about the networks that exist deeper within the unmanaged network, termed the discovery domain in this example.   
 *Discovery* *in* *Action*

*[drawio]*

As indicated in the above figure, discovery can trace through multiple hops and perform device discovery at every step, filling out the maps of unmanaged networks for the administrator.   
The collection of unmanaged network information extends to the networks of distribution Ethernet switches. Data collection also includes end hosts and application/file servers connected to edge switches in enterprise offices. Discovery uses the term assets to describe these devices. For more information, see [*Viewing Assets Associated with Discovered Devices*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666106/Accessing+Detailed+Device+Information#VADD).  
The Probes return discovery data to the Consolidator, which synchronizes device information with the Grid Master. Once information about discovered networks and devices resides on the Grid Master, you can convert unmanaged networks and devices to managed objects, adding them to the NIOS database. For more information, see [*Managing Discovered Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406620)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086)and [*About Automatic Conversion Rules*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764047).  
You can also configure the appliance to send SNMP and email notifications when it discovers unmanaged devices and networks. For information about how to enable SNMP and email notifications for discovered unmanaged objects, see [*Setting SNMP and Email Notifications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492). You can also manage these notifications by configuring the maximum number of unmanaged objects the appliance detects before it sends notifications and how often it notifies about these events. For information about how to configure these parameters, see [*Defining Seed Routers for Probe Membe*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248/Configuring+Discovery+Properties#DSRPM)[r](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248)[*s*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248).  
You provide one or more routers as seed routers to act as the initial gateways for discovering other networks and their devices in the discovery domain (an example appears in the figure Discovery in Action above). You can also use DHCP routers (e.g., routers serving DHCP leases) as seed routers to aid in faster discovery.  
When you create new networks, you can optionally provision them onto devices and perform discovery on them. Once you create the network, discovery can locate, poll and catalogue the network devices comprising the networks. This information is then synchronized with the Grid Master. For more information, see [*Discovering Devices and Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200).

> **warning**
>
> ### Note
> 
> For comprehensive coverage of port control features in Grid Manager, see [*Port Control Features in Network Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406109).

You can also exclude networks and IP addresses from discovery. The basic principle is that some devices do not need to be discovered, perhaps because they are already managed as part of a Grid and hence should not be subjected to discovery; because a device does not support SNMP; or for other organizational reasons. In the figure Discovery in Action above, networks 172.16.2.0/24 and 172.16.3.0/23 are excluded from discovery because they are already fully managed by a Grid. For more information, see [*Excluding IP Addresses from Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210).  
You can define scheduled time periods in which Network Insight does not perform discovery operations in the network. These time periods are called *discovery* *blackouts*. All protocols associated with discovery (SNMP, CLI through Telnet and SSH, port scanning, fingerprinting and Ping sweeps) can be shut off during discovery blackout periods. This prevents discovery protocols from occupying network bandwidth during periods of peak usage. Network Insight does not communicate with devices in any way during a discovery blackout period. For more information on discovery blackouts, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071). Network Insight also provides a second type of blackout period for port configuration tasks, during which no tasks to change device port settings will execute. For more information, see [*Defining Port Configuration Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763850).

Related topic

[Infoblox Network Insight](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267919)
