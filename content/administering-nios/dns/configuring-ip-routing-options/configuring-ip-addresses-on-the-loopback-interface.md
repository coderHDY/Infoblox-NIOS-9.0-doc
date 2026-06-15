---
title: "Configuring IP Addresses on the Loopback Interface"
source: "/space/nios90/280762109"
pageId: "280762109"
---
The loopback interface is a virtual network interface on the appliance. You can do the following on the loopback interface:

- Configure IP addresses to consolidate DNS servers for migration purposes. For information, see [*Configuring IP Addresses*](#ConfiguringIPAddresses).
- Add anycast addresses to improve the reliability and performance of DNS services in multiple locations. For information, see [*About Anycast Addressing for DNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664099).
- Separate DNS traffic by assigning an IP address as the source port for DNS queries. For information, see* *[*Specifying Source Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121).

When you use the loopback interface for anycast addressing, the upstream and neighboring routers can continue to advertise anycast addresses without being affected by hardware malfunctions.

To configure non-anycast addresses on the loopback interface, complete the following:

1. Add IP addresses to the loopback interface. For information, see [*Configuring IP Addresses*](#ConfiguringIPAddresses).
2. Enable DNS services on the loopback addresses. For information, see [*Specifying Port Settings for DNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121) and its subtopic, [*Specifying Source Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121).

To configure DNS anycast addresses and their advertising protocols, complete the following:

1. Add anycast addresses to the loopback interface. For information, see [*Configuring Anycast Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404744).
2. Configure anycast addressing protocols. For information, see [*Configuring OSPF on the NIOS Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/379191446) and [*Configuring BGP in the NIOS Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/379191446). This is the primary application for routing protocols in the NIOS appliance.
3. Enable the DNS anycast addresses. For information, see [*Specifying Port Settings for DNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121) and its subtopic, [*Specifying Source Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121).

To separate DNS queries from DNS transfers and notify messages, complete the following:

1. Add an IP address of the source port for DNS queries. For information, see[ ](#ConfiguringIPAddresses)[*Configuring IP Addresses*](#ConfiguringIPAddresses).
2. Select the source IP for DNS queries. For information, see [*Specifying Source Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121).

# Configuring IP Addresses

You can configure IP addresses on the loopback interface to minimize service downtime during a server migration. As illustrated in the figure DNS Server Migration Using the Loopback Interface below, you have two existing DNS servers (ns1.example.com 192.204.18.11 and ns2.example.com 192.204.18.12) and you want to replace these servers with a new one (ns3.example.com 192.204.18.88). The migration takes a few weeks and you want DNS services to be available on all three addresses during the migration. You can add all three IP addresses to the loopback interface of a NIOS appliance, and then configure the appliance to provide DNS services on all addresses. After the server migration, you can shut down the old servers and use the new one for services.

*DNS* *Server* *Migration* *Using* *the* *Loopback* *Interface*

*[drawio]*

You can also add an IP address that is used solely for DNS queries, to separate the DNS traffic. You first add an IP address you want to use for DNS queries on the loopback interface. You then configure the appliance to listen for DNS queries solely on this address. For information, see [*Specifying Source Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215121).  
When you configure non-anycast addresses on the loopback interface, ensure that you establish a static route between the appliance and the router so queries to these addresses are routed correctly. For information, see [*Advertising Loopback Addresses to the Network*](#AdvertisingLoopbackAddressestotheNetwork).

To configure an IP address on the loopback interface:

1. From the **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox -> Edit icon.
2. In the *Grid* *Member* *Properties* *Editor*, select the **Network** tab -> **Basic** tab.  
   You can add an IPv4 or IPv6 address on the loopback. You define each type in their own table.
3. Click the Add icon in the Additional Ports and Addresses table and select **Additional** **Address** **(loopback)** **(IPv4)** or **Additional** **Address** **(loopback)** **(IPv6)** from the drop-down list.
   
   You cannot configure **Additional** **Address** **(loopback)** **(IPv4)** interface for an IPv6 Grid member and **Additional** **Address** **(loopback)** **(IPv6)** interface for an IPv4 Grid member. You can only enter the IP address you want to add to the loopback interface. You cannot configure the subnet mask, prefix length, gateway, or port settings.  
   The appliance adds a row to the table. Complete the following:
   
   - **Interface**: Displays **Additional** **Address** **(loopback)**. You cannot modify this.
   - **Address:** Enter the IP address you want to add to the loopback interface. An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight 16-bit groups of hexadecimal digits separated by colons (example: 2001:db8:0000:0123:4567:89ab:0000:cdef or 2001:db8::123:4567:89ab:0:cdef).
   - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** You cannot change the netmask of the loopback interface. It is set to 255.255.255.255, or /32. For an IPv6 address, the mask is set to 128 and cannot be modified.
     
     You cannot configure the gateway address and port settings.
4. Save the configuration and click **Restart** if it appears at the top of the screen.  
   To add multiple IP addresses on the loopback interface, repeat the steps for each IP address.

> **warning**
>
> ### Note
> 
> If you are configuring the loopback interface on a Grid Master, the Grid is temporarily disrupted upon saving the configuration and restarting services on the appliance. The Grid reconnects automatically and the appliance regains the role as Grid Master after a short delay.

# Advertising Loopback Addresses to the Network

Advertising IP addresses on the loopback interface relies on the upstream router to populate routes to the loopback interface. As illustrated in the figure Static Route for Loopback IP Addresses below, when a client on a different subnet queries an IP address on the loopback interface, it sends the request to the router. If the IP address on the loopback interface is not advertised to the router, the request cannot reach the appliance. Therefore, when you configure non-anycast addresses on the loopback interface, or if OSPF or BGP is not configured within your network, you must configure the upstream router to reach the NIOS appliance through a static route on the LAN1 interface.

Note that when an appliance is configured for both authoritative and recursive queries, you should connect your internet interface through the LAN1 port to allow for maximum flexibility while using auxiliary LAN2 and MGMT ports. Consult with your network administrator for information about configuring static routes from the router to the additional IP addresses on the loopback interface.

*Static* *Route* *for* *Loopback* *IP* *Addresses*

*[drawio]*

When you configure DNS anycast addresses on the loopback interface, you can select OSPF, BGP, or both, to advertise the addresses to upstream and neighboring routers, without establishing a static route. For information, see [*About Anycast Addressing for DNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664099).
