---
title: "Managing IPv4 DHCP Data"
source: "/space/nios90/280267800"
pageId: "280267800"
---
To configure DHCP service for an IPv4 network and the resources in the network, perform the following tasks:

1. Create a network and assign it to Grid members or Microsoft DHCP servers, or an interface on an external discovered device. For information about Adding IPv4 Networks and Modifying IPv4 Networks, see *[Configuring IPv4 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)*.
2. Configure DHCP properties for the network. You can override properties set at the Grid or member level and enter unique values for the network. For information, see *[Configuring General IPv4 DHCP Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-general-ipv4-dhcp-properties)* and *[Configuring DHCP IPv4 and IPv6 Common Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)*[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)
3. Optionally, assign zones to a network. For information, see *[Associating Networks with Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)*.
4. Add a DHCP range to the network and assign it to a member, a failover association, or a Microsoft DHCP server. For information about Adding IPv4 Address Ranges  and Modifying IPv4 Address Ranges, see *[Configuring IPv4 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)*.
5. Optionally, add exclusions to the DHCP range for addresses that are not used for dynamic allocation. For information, see *[Configuring IPv4 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses)*[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses)
6. Optionally, configure DHCP properties for the address range. You can override properties set at an upper level and enter unique values for the address range. For information, see *[Modifying IPv4 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges)*.
7. Optionally, define filters for precise address assignments and apply them to the DHCP range. For information, see* **[About IPv4 DHCP Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters)**.*
8. Optionally, add fixed addresses and reservations to the network and configure DHCP properties for them. For information, see *[Configuring IPv4 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-fixed-addresses)* and *[Configuring IPv4 Reservations](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-reservations)*.

This section explains how to configure and manage IPv4 DHCP data. It contains the following topics:

*[children]*
