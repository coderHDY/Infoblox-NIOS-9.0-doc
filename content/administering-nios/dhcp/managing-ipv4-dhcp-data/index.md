---
title: "Managing IPv4 DHCP Data"
source: "/space/nios90/280267800"
pageId: "280267800"
---
To configure DHCP service for an IPv4 network and the resources in the network, perform the following tasks:

1. Create a network and assign it to Grid members or Microsoft DHCP servers, or an interface on an external discovered device. For information about Adding IPv4 Networks and Modifying IPv4 Networks, see *[Configuring IPv4 Networks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742)*.
2. Configure DHCP properties for the network. You can override properties set at the Grid or member level and enter unique values for the network. For information, see *[Configuring General IPv4 DHCP Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663815)* and *[Configuring DHCP IPv4 and IPv6 Common Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881)*[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881)
3. Optionally, assign zones to a network. For information, see *[Associating Networks with Zones](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881)*.
4. Add a DHCP range to the network and assign it to a member, a failover association, or a Microsoft DHCP server. For information about Adding IPv4 Address Ranges  and Modifying IPv4 Address Ranges, see *[Configuring IPv4 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663590)*.
5. Optionally, add exclusions to the DHCP range for addresses that are not used for dynamic allocation. For information, see *[Configuring IPv4 Fixed Addresses](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)*[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)
6. Optionally, configure DHCP properties for the address range. You can override properties set at an upper level and enter unique values for the address range. For information, see *[Modifying IPv4 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663590)*.
7. Optionally, define filters for precise address assignments and apply them to the DHCP range. For information, see* **[About IPv4 DHCP Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280791719)**.*
8. Optionally, add fixed addresses and reservations to the network and configure DHCP properties for them. For information, see *[Configuring IPv4 Fixed Addresses](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)* and *[Configuring IPv4 Reservations](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404203)*.

This section explains how to configure and manage IPv4 DHCP data. It contains the following topics:

*[children]*
