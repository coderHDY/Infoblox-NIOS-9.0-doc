---
title: "Configuring IPv6 Networks"
source: "/space/nios90/280404032"
pageId: "280404032"
---
To configure DHCP services for an IPv6 network and the resources in the network, perform the following tasks:

1. To facilitate network creation, you can specify the IPv6 global prefixes for the Grid. For more information, see *[Defining Global IPv6 Prefixes](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/defining-global-ipv6-prefixes)*.
2. Create a network and assign it to Grid members. For information, see *[Managing IPv6 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv6-networks)*[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098)and *[About IPv6 Shared Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-shared-networks)*.
3. Optionally, configure DHCP properties for the network. You can override properties set at the Grid or member level and enter unique values for the network and fixed addresses. For information, see *[Configuring DHCPv6 Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties)* and *[Configuring DHCP IPv4 and IPv6 Common Properties](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)*.
4. Optionally, assign zones to a network. For information, see *[Associating Networks with Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcp-ipv4-and-ipv6-common-properties)*.
5. Add a DHCP range to the network and assign it to a member. For information, see *[Configuring IPv6 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)*.
6. Optionally, add exclusions to the DHCP range for addresses that are not used for dynamic allocation. For information, see *[Modifying IPv6 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)*.
7. Optionally, configure DHCP properties for the address range. You can override properties set at an upper level and enter unique values for the address range. For information, see *[Modifying IPv6 Address Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-address-ranges)*.
8. Optionally, add fixed addresses to the network and configure DHCP properties for them. A fixed address may also be associated with a device port through a Port Reservation. For information, see *[Configuring IPv6 Fixed Addresses](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses)*.
9. Start the DHCP service and the IPv6 DHCP service. For more information, see *[Starting DHCP Services on a Member](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/starting-dhcp-services-on-a-member)*.
