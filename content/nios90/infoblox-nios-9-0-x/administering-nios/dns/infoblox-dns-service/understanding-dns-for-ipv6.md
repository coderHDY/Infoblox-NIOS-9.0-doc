---
title: "Understanding DNS for IPv6"
source: "/space/nios90/280763647"
pageId: "280763647"
---
You can configure NIOS appliances to provide DNS services over IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6) networks. You can configure the Grid member as IPv6, or dual-mode name server. Dual-mode name server is capable of sending and receiving IPv4 and IPv6 queries and responses. It can serve DNS data in response to both IPv4 and IPv6 queries. The appliance supports authoritative forward-mapping zones containing AAAA records mapping host names to IPv6 addresses, as well as authoritative reverse-mapping zones with PTR records mapping IPv6 addresses to host names.  
Configuring a Grid containing an IPv4 primary server and IPv6 secondary servers is not supported. You must enable IPv6 on both the primary and secondary servers within the Grid to enable them to communicate with each other.  
Infoblox highly recommends that you enable IPv6 on your Grid appliances before configuring IPv6 authoritative zones.  
The NIOS appliance supports IPv6 configuration on multiple interfaces, such as LAN1,LAN2, MGMT, anycast (OSPF and BGP), and loopback interfaces. Infoblox integrates IPv6 address management into many of the same places where IPv4 addresses are entered. Data validation occurs on all IP address fields and automatic validation is done to ensure proper entry of either an IPv4 address or an IPv6 address.  
The NIOS appliance supports the following DNS functions for IPv6:

- AAAA records—You can import, serve queries, display, add, delete, and modify AAAA records on the appliance. An AAAA record is equivalent to an IPv4 A record, relying upon a forward-mapping zone to map a hostname to an IPv6 address. A single forward-mapping zone can map names to both IPv4 and IPv6 addresses. The appliance autogenerates AAAA records for any of its interfaces that have IPv6 addresses.
- Hosts—You can configure IPv4 and IPv6 addresses for hosts. For information, see [*Adding Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).
- ip6.arpa— A specific domain for IPv6 is used for DNS reverse lookups called ip6.arpa. This domain maps an IPv6 address to a hostname. When you specify an IPv6 network, the appliance automatically creates the appropriate zone under ip6.arpa.
- PTR records—Import, serve queries, display, add, delete, and modify PTR records within an ip6.arpa reverse zone. The PTR record returns a domain name corresponding to an IPv6 address contained in the ip6.arpa zone. The appliance does not autogenerate PTR records; the user must configure PTR records manually.
- DDNS—The appliance supports AAAA and PTR records for DDNS (Dynamic DNS).

For more information about DNS for IPv6, see RFC 3596, *DNS* *Extensions* *to* *Support* *IP* *Version* *6*.

# Address Structures

IPv4 uses a 32-bit, 4-octet (each octet separated by decimals) addressing structure to designate sources and destinations within a network. Since there are 32 bits that make up the address, IPv4 can support up to 4 billion unique addresses.  
An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight groups of four hexadecimal digits separated by colons (example: 12ab:0000:0000:0123:4567:89ab:0000:cdef). Since there are 128 bits that make up the address, IPv6 can support up to 3.4x10<sup>38 </sup>unique addresses. The increase in the number of unique IPv6 addresses is one of the biggest advantages of an IPv6 implementation.  
  
*IPv6* *Address* *Structure*

*[drawio]*

The IPv6 address structure consists of the following:

- Global Routing Prefix—Global routing prefix is a (typically hierarchically-structured) value assigned to a site.
- Subnet ID—Subnet ID is an identifier of a link within the site.
- Interface ID—Interface Identifier. This portion of the address identifies the interface on the subnet. This is equivalent to the host identifier for IPv4 addresses.

When you enter an IPv6 address, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a four-hexadecimal group. For example, the complete IPv6 address 2006:0000:0000:0123:4567:89ab:0000:cdef can be shortened to 2006::123:4567:89ab:0:cdef. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The NIOS appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered.

# **Configuring** **IPv6** **on** **a** **Grid** **Member**

You can configure a Grid member in either IPv6 or dual mode (IPv4 and IPv6) to support IPv6 connections. A dual mode Grid member supports both IPv4 and IPv6 connections by configuring an IPv6 address on the member, in addition to the standard IPv4 address.  
When you enable IPv6 on a member, you can manually enter the IPv6 gateway address or enable the member to automatically acquire the address from router advertisements. Routers periodically send router advertisements that contain link-layer addresses and configuration parameters. A NIOS appliance that supports IPv6 can listen for router advertisements and obtain the default gateway IP address and link MTU (maximum transmission unit). The link MTU is the maximum packet size, in octets, that can be conveyed in one transmission unit over a link. Thus you can set parameters on a router once and automatically propagate it to all attached hosts.  
To configure the member to support IPv6:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.
2. Expand the Toolbar and click **Add** -&gt; **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, enter the following and click **Next**:
   
   - **Member** **Type**: Specify the appliance type of the Grid member. If the member is an Infoblox appliance, select **Infoblox**, which is the default. If the member is a NIOS virtual appliance, select **Virtual** **NIOS**.
   - **Host** **Name:** Type the FQDN (fully qualified domain name) of the appliance that you are adding to the Grid.
   - **Time** **Zone:** If the Grid member is in a different time zone from the Grid, click **Override** and select a time zone.
   - **Comment:** Type a comment that provides some useful information about the appliance, such as its location.
   - **Master** **Candidate:** Select this option to designate this appliance as a Master Candidate. For supported vNIOS appliances, see [*Supported vNIOS Appliance Models and Specifications*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=vNIOS%20Appliances%20in%20NIOS%209.0.0&linkCreation=true&fromPageId=280763647). Note that the Grid Master Candidate must use the same communication protocol as the Grid Master.
4. Enter the following information about the member that you are adding to the Grid and click **Next**:
   
   - **Type** **of** **Network** **Connectivity:** Select **IPv6** to configure an IPv6 Grid member or select **IPv4** **and** **IPv6** to configure a dual mode Grid member.
   - Select **Standalone** **Member** to configure a single member or select **High** **Availability** **Pair** to configure an HA member.   
     For an HA member, enter the **Virtual** **Router** **ID** number and if the HA member is configured in dual mode, select **IPv6** in the **Send** **HA** **and** **Grid** **Communication** **Over** field.
   - **Required** **Ports** **and** **Addresses:** This table lists the network interfaces based on the type of network connectivity of the Grid member.   
     For IPv6 Grid member, specify the network information for LAN1(IPv6) interface. For a dual mode Grid member, specify the network information for both LAN1(IPv4) and LAN1(IPv6) interfaces.  
     For IPv6 HA member, specify the network information for VIP (IPv6), Node1 LAN1(IPv6), and Node2 LAN1(IPv6) ports. For a dual mode HA member, specify the network information for the following interfaces: VIP (IPv4), Node1 LAN1(IPv4), Node2 LAN1(IPv4), VIP (IPv6), Node1 LAN1(IPv6), and Node2 LAN1(IPv6).  
     Enter correct information for the following by clicking the field:
     
     - **Interface**: Displays the name of the interface. You cannot modify this.
     - **Address:** You can enter IPv4 or IPv6 address depending on the type of interface. An IPv6 address is a 128-bit number in colon hexadecimal notation. It consists of eight 16-bit groups of hexadecimal digits separated by colons (example: 2001:db8:0000:0123:4567:89ab:0000:cdef or 2001:db8::123:4567:89ab:0:cdef).
     - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6):** Enter an appropriate subnet mask for IPv4 address and prefix length for IPv6 address. The prefix length ranges from 2 to 127.
     - **Gateway:** Type the default gateway for the interface. For IPv6 interface, you can also type **Automatic** to enable the appliance to acquire the IPv6 address of the default gateway and the link MTU from router advertisements.
     - **VLAN** **Tag**: For a VLAN, enter the VLAN tag or ID. You can enter a number from 1 to 4094. Ensure that you configure the corresponding switch accordingly.
     - **Port** **Settings:** From the drop-down list, choose the connection speed that you want the port to use. You can also choose the duplex setting. Choose **Full** for concurrent bidirectional data transmission or **Half** for data transmission in one direction at a time. Select **Automatic** to instruct the NIOS appliance to negotiate the optimum port connection type (full or half duplex) and speed with the connecting switch automatically. This is the default setting. You cannot configure port settings for vNIOS appliances.
     - **DSCP** **Value**: Displays the Grid DSCP value, if configured. To modify, click **Override** and enter the DSCP value. You can enter a value from 0 to 63. For information about DSCP, see [*Implementing Quality of Service Using DSCP*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-ethernet-ports).
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Configuring DNS for IPv6 Addressing

Configuring the appliance to manage DNS services for IPv6 connections is similar to configuring DNS services for IPv4 connections. For simplicity, the IPv6 procedures are located in the same location as the corresponding procedures for IPv4 in this chapter. In most cases, the key difference within the procedure involves selecting an IPv6 mapping zone instead of an IPv4 mapping zone. You can configure the following tasks:   
*IPv6* *DNS* *Configuration* *Checklist*

| **Step ** | **For** **more** **information** |
| --- | --- |
| 1. Create primary or secondary name servers and specify an IPv6 root server. | - [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones) - [*Specifying a Primary Server*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers) - [*Specifying Secondary Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers) - [*Creating a Root Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-forward-mapping-zone/Creating+an+Authoritative+Forward-Mapping+Zone#Creating-a-Root-Zone) |
| 1. Configure the IPv6 zones. | - [*Creating an Authoritative Forward-Mapping Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-forward-mapping-zone) - [*Creating an Authoritative Reverse-Mapping Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-reverse-mapping-zone) |
| 1. Configure IPv6 resource records | - [*Managing AAAA Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records) - [*Managing PTR Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records) |
