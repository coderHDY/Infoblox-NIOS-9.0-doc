---
title: "Configuration Example: Configuring an HA Pair for Internal DNS and DHCP Services"
source: "/space/nios90/280407590"
pageId: "280407590"
---
In this example, you set up an HA pair of NIOS appliances to provide internal DNS and DHCP services. The HA pair answers internal queries for all hosts in its domain (corpxyz.com). It forwards internal queries for external sites to ns1.corpxyz.com at 10.1.5.2 and ns2.corpxyz.com at 2.2.2.2. It also uses DHCP to provide dynamic and fixed addresses. You can deploy the HA appliance in IPv4, IPv6 or dual mode(IPv4 and IPv6), but the configuration example uses IPv4 addresses.  
  
The HA pair consists of two appliances (nodes). The IP addresses of the VIP (virtual IP) address of the HA pair and the HA and LAN1 ports on each node are as follows:

| **HA** **Pair** **IP** **Addresses** |
| --- |
| VIP 10.1.4.10 (the address that the active node of the HA pair uses) |
| Node 1 | Node 2 |
| - LAN1 10.1.4.6 - HA 10.1.4.7 | - LAN1 10.1.4.8 - HA 10.1.4.9 |

The virtual router ID number for the HA pair is 150. The ID number must be unique for this network segment. When you create the corpxyz.com zone on the HA pair, you import DNS data from the legacy server at 10.1.4.11.  
  
*Example* *2* *Network* *Diagram*

*[drawio]*

An HA pair of NIOS appliances provide internal DNS services. It answers internal queries for all hosts in its domain. It forwards internal queries for external sites to ns1 and ns2. It also serves DHCP, providing both dynamic and fixed addresses.

In this section:

*[children]*
