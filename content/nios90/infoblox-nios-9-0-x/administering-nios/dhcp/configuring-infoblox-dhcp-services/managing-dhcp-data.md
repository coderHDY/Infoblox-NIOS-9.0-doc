---
title: "Managing DHCP Data"
source: "/space/nios90/280271474"
pageId: "280271474"
---
You can configure a NIOS appliance to provide DHCP service for IPv4 and IPv6, and manage both IPv4 and IPv6 objects. When you define DHCP objects, you can track specific information about a network device by defining extensible attributes. Extensible attributes are fields that you define to track properties such as network locations or device models. For more information, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.

# About Networks

You can configure DHCP IPv4 and IPv6 properties for the Grid and its members, and then define the IPv4 and IPv6 networks that they serve.  
All networks, both IPv4 and IPv6, must belong to a network view. The appliance has one default network view and unless you create additional network views, all networks belong to the default view. Note that because network views are mutually exclusive, you can create networks with overlapping IP address spaces in two different network views. For more information, see *[Configuring Network Views](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/configuring-network-views)*.

> **warning**
>
> **Note**
> 
> The 255.255.255.255 limited broadcast address is reserved. The appliance does not automatically create glue A records for this address. You can however create an NS record without the associated glue records. For more information, see *[Changing the Interface IP Address](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuration-example-configuring-a-dns-view)*[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuration-example-configuring-a-dns-view/Configuration+Example+Configuring+a+DNS+View#bookmark1704)



# About Shared Networks

A shared network is a network segment to which you assign two or more subnets. When subnets in a shared network contain IP addresses that are available for dynamic allocation, the addresses are put into a common pool for allocation when client requests arise. When you create a shared network, the DHCP server can assign IP addresses to client requests from any subnet (that resides on the same network interface) in the shared network. For example,  when you have networks A, B, and C on the same network interface and you assign them to a shared network, the DHCP server can allocate available IP addresses from any DHCP range within networks A, B, and C even when all the client requests originate from network A. When adding subnets to a shared network, ensure that the subnets are assigned to the same members to avoid DHCP inconsistencies.  
Before creating a shared network, you must first create the subnets. For example, you must first create the IPv4 networks `10.32.1.0` and `10.30.0.0` before designating them to a shared network or create the IPv6 networks 2001:db8:1::/48 and 2001:db8:2::/48 before designating them to a shared network.  
After you create a network, you can define their DHCP resources such as DHCP ranges, fixed addresses, reservations, host records, and roaming hosts. IPv4 and IPv6 support most of the same DHCP objects, except that IPv6 does not support reservations.

# About DHCP Ranges

A DHCP range is a pool of IP addresses from which the appliance allocates IP addresses. You must add a DHCP address range in your network so the appliance can assign IP addresses to DHCP clients within the specified range. IPv6 DHCP ranges can also contain a range of IPv6 prefixes that it delegates to DHCP clients that request them.  
You must assign a DHCP range to a Grid member. Note that you can only assign DHCP ranges to members and networks that are in the same network view. If the server is an independent appliance, you must specify this appliance as the member that serves the DHCP range. In addition, you can also assign IPv4 DHCP ranges to failover associations.

## About Exclusion Ranges

You can define an exclusion range within a DHCP range. Creating an exclusion range prevents the appliance from assigning the addresses in the exclusion range to clients. IP addresses in an exclusion range are excluded from the pool of IP addresses. You can use exclusions to split a DHCP range into multiple blocks of ranges. You can also use addresses in the exclusion ranges as static IP addresses for network devices such as legacy printers that do not support DHCP. An exclusion in a range can help prevent address conflicts between statically configured devices and dynamically configured devices.

# About Fixed Addresses

You can configure fixed addresses for network devices, such as routers and printers, that are not frequently moved from network to network. By creating fixed addresses for network devices, clients can reliably reach them by their domain names. Some network devices, such as web or FTP servers, can benefit from having fixed addresses for this reason. In IPv4 and IPv6 networks, you can also reserve an IP address that is not part of a DHCP range by defining a reservation. For information about creating reservations, see *[Configuring IPv4 Reservations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)*.

# About Hosts

Infoblox hosts are data objects that contain DNS, DHCP, and IPAM data of the assigned addresses. You can assign multiple IPv4 and IPv6 addresses to a host. When you create a host, you are specifying the name-to-address and address-to-name mappings for the IP addresses that you assign to the host. For information about Infoblox hosts, see *[About Host Records](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records)*.

# DHCP Configuration Checklists

After you complete the appliance configuration for each member in the Grid, as described in *[Managing Appliance Operations](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations)*, you can configure DHCP services.  
The following checklist includes the major steps for configuring DHCP service for IPv4:   
  
*IPv4* *DHCP* *Configuration* *Checklist*

| **Step** | **For**** ****more**** ****information** |
| --- | --- |
| Configure DHCP properties for the Grid and members. | - *[Configuring IPv4 DHCP Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties)* - *[Understanding DDNS Updates from DHCP](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/understanding-ddns-updates-from-dhcp)* - *[Configuring DHCP IPv4 and IPv6 Common Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)* - *[Configuring the Lease Logging Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-logging)* |
| Decide if you want to configure a DHCP failover association. | - *[Configuring Failover Associations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/configuring-failover-associations)* |
| Configure networks based on your network  requirements and decide if you want to override the Grid or member DHCP configuration for the  networks | - *[Configuring IPv4 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)* - *[Configuring IPv4 Shared Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-shared-networks)* |
| Decide if you want to configure fixed addresses and reservations, and whether to override the *[Configuring IPv4 Reservations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)* upper level DHCP properties for the fixed  addresses and reservations. | - *[Configuring IPv4 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses)* - *[Configuring IPv4 Reservations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)* |
| Define DHCP ranges and decide whether to override the upper level DHCP properties for the ranges. | - *[Configuring IPv4 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)* |
| Enable DHCP services on the member. | - *[Starting DHCP Services on a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/starting-dhcp-services-on-a-member)* |

The following checklist includes the major steps for configuring DHCP service for IPv6:

*IPv6* *DHCP* *Configuration* *Checklist*

| **Step ** | **For**** more ****information** |
| --- | --- |
| Configure DHCP properties for the Grid and members. | - *[Configuring DHCPv6 Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties)* - *[Understanding DDNS Updates from DHCP](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/understanding-ddns-updates-from-dhcp)* - *[Configuring DHCP IPv4 and IPv6 Common Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)* - *[Configuring the Lease Logging Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-logging)* |
| Configure networks based on your network requirements and decide if you want to override the Grid or member DHCP configuration for the networks. | - *[Configuring IPv6 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-networks)* - *[Configuring IPv6 Shared Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-shared-networks)* |
| Decide if you want to configure fixed addresses and reservations, and whether to override the upper level DHCP properties for the fixed addresses and reservations. | - *[Configuring IPv6 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses)* |
| Define DHCP ranges and decide whether to override the upper level DHCP properties for the ranges | - *[Configuring IPv6 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)* |
| Enable DHCP services on the member. | - *[Starting DHCP Services on a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/starting-dhcp-services-on-a-member)* |
