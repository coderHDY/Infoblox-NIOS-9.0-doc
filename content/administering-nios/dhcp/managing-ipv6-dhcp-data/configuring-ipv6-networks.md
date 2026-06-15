---
title: "Configuring IPv6 Networks"
source: "/space/nios90/280404032"
pageId: "280404032"
---
To configure DHCP services for an IPv6 network and the resources in the network, perform the following tasks:

1. To facilitate network creation, you can specify the IPv6 global prefixes for the Grid. For more information, see *[Defining Global IPv6 Prefixes](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663525)*.
2. Create a network and assign it to Grid members. For information, see *[Managing IPv6 Networks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764556)*[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319292098)and *[About IPv6 Shared Networks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403994)*.
3. Optionally, configure DHCP properties for the network. You can override properties set at the Grid or member level and enter unique values for the network and fixed addresses. For information, see *[Configuring DHCPv6 Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691)* and *[Configuring DHCP IPv4 and IPv6 Common Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881)*.
4. Optionally, assign zones to a network. For information, see *[Associating Networks with Zones](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881)*.
5. Add a DHCP range to the network and assign it to a member. For information, see *[Configuring IPv6 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270891)*.
6. Optionally, add exclusions to the DHCP range for addresses that are not used for dynamic allocation. For information, see *[Modifying IPv6 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270891)*.
7. Optionally, configure DHCP properties for the address range. You can override properties set at an upper level and enter unique values for the address range. For information, see *[Modifying IPv6 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270891)*.
8. Optionally, add fixed addresses to the network and configure DHCP properties for them. A fixed address may also be associated with a device port through a Port Reservation. For information, see *[Configuring IPv6 Fixed Addresses](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663479)*.
9. Start the DHCP service and the IPv6 DHCP service. For more information, see *[Starting DHCP Services on a Member](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404283)*.
