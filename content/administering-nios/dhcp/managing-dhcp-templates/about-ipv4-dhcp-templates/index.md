---
title: "About IPv4 DHCP Templates"
source: "/space/nios90/280404118"
pageId: "280404118"
---
You can use templates to create DHCP IPv4 ranges, fixed addresses, reservations, roaming hosts, and networks. You can create the following IPv4 templates:

- A DHCP range template, containing DHCP range settings, such as the total number of IP addresses allocated to a range. You can add a DHCP range template to a network template. For information, see [*About IPv4 Range Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#About-IPv4-Range-Templates) below.
- A fixed address/reservation template, containing information for creating fixed addresses, reservations, or roaming hosts. You can add a fixed address/reservation template to a network template. For information, see [*About IPv4 Network Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#About-IPv4-Network-Templates) below.
- A network template, containing basic network properties for creating networks. It is also a container that holds your DHCP range templates and fixed address/reservation templates. When you create a network using a network template, the network inherits the properties of the range and fixed address/reservation templates. You can create a network in any network view using a network template. For information, see [*About IPv4 Network Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#About-IPv4-Network-Templates) below.

Because you can potentially add DHCP range and fixed address/reservation templates to a network template, create the DHCP range and fixed address/reservation templates before you create a network template. For information, see Configuration Example: [*Creating an IPv4 Network Using a Template*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404118/About+IPv4+DHCP+Templates#Configuration-Example%3A-Creating-an-IPv4-Network-Using-a-Template) below*.*
