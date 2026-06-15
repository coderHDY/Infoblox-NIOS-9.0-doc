---
title: "Deploying an Independent HA Pair"
source: "/space/nios90/280667859"
pageId: "280667859"
---
To deploy an independent HA pair, you cable the HA and LAN1, LAN1 (VLAN), or LAN2, LAN2 (VLAN) ports to the network and configure the IP settings for these ports and the VIP address within the same subnet. For more information about HA pairs, see [*About HA Pairs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644)*.*  
  
The default LAN1 or LAN2 settings are as follows:

- IP address: 192.168.1.2
- Netmask: 255.255.255.0
- Gateway: 192.168.1.1

You can configure an HA pair using the *Infoblox NIOS Startup Wizard*. IPv4 and IPv6 network values are supported for the *NIOS Startup Wizard* and for HA Pair configuration. The NIOS appliance MGMT port also can be configured to support an IPv6 address.

- Requirements: HTTPS connections from your management system to the Ethernet ports on the two appliances.
- Advantage: The startup wizard provides step-by-step guidance for configuring the network settings of the VIP address and HA and LAN1 or LAN1 (VLAN) ports on both nodes, for setting the host name, admin password, and system clock, and—if using NTP (Network Time Protocol)—for enabling the HA pair as an NTP client.
