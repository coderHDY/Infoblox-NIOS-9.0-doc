---
title: "About Network Containers"
source: "/space/nios90/1346013877"
pageId: "1346013877"
---
Grid Manager uses network containers to group IPv4 and IPv6 networks. A network container is a parent network that contain other network containers and leaf networks. A leaf network is a network that does not contain other networks. For example, the following figure illustrates the IPv4 20.0.0.0/8 network, which is a network container with two network containers, 20.8.0.0/13 and 20.72.0.0/13. The 20.8.0.0/13 network has two leaf networks, 20.8.0.0/16 and 20.9.0.0/16. The 20.72.0.0/13 network has one leaf network, 20.72.0.0/16.

*IPv4* *Network* *Container*

*[drawio]*

From Grid Manager, you can click the link of the network container 20.0.0.0/8 in the IP List panel and drill down to the two network containers, 20.8.0.0/13 and 20.7.0.0/13, as shown in the below figure. You can click the network container links to drill down further to the leaf networks.

*IP* *List* *View* *of* *Network* *Containers*

![about network containerss -20250723-170813.png](/assets/1346013877/d1b0c9d7-d041-43a9-8efd-e63bbca6a5d0.png)

In the **IPAM** tab, when you create an IPv4 or IPv6 network that belongs to a larger network, the appliance automatically creates a network container and puts the leaf network in the container. The appliance also creates network containers when you split IPv4 or IPv6 networks into smaller networks. For information, see [*Splitting IPv4 Networks into Subnets*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks) and [*Splitting IPv6 Networks into Subnets*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv6-networks).

*[children]*
