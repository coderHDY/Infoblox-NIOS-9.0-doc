---
title: "About Network Insight"
source: "/space/nios90/280764332"
pageId: "280764332"
---
Infoblox Network Insight provides discovery features for detecting and managing devices in your network infrastructure. You can use discovery to collect device data and manage it through Grid Manager. For more information about device management, see [*Managing Discovered Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406620).

You can view the operating state of all discovered network infrastructure devices and newly discovered IP networks, including but not limited to routers, wireless routers and access points, firewalls, load balancers, Ethernet L2/L3 switches, end hosts and other devices in end host networks, end host networks, VRF (Virtual Routing and Forwarding) virtual networks, single and multipoint VPNs, SDN and SD-WAN devices, and much more. Network Insight makes it easy to manage and secure your enterprise network by detecting all interfaces for every discovered device and providing specific information about them. For information about discovering VRF virtual networks, see [*Discovering VRF Virtual Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406393)*.*

The Infoblox IPAM feature set also provides control mechanisms by including and excluding networks and IP addresses for discovery. You can schedule and define when discovery takes place on any network, and define blackout periods during which no discovery tasks occur. Infoblox IPAM and DHCP functions also extend network control to assigning of discovered switch and router interfaces to IPAM objects such as IP networks, IP reservations, and host records. The assignments are called *port* *reservations* and are part of a feature set called *port* *control*, managed through Grid Manager. For more information, see [*Port Control Features in Network Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406109).

Infoblox provides a few reports in which you can view trending information about the device groups, types of devices, and device IP addresses for the devices that are discovered by Network Insight. For information about these reports, see [*Status Dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114).

Deployment of Network Insight discovery requires a separate Discovery license and one or more NIOS appliances dedicated to discovery tasks.

Network Insight performs discovery in the following ways:

- Through specification of seed routers, which inform discovery of the various networks that should be examined and catalogued.
- Through discovery of the various Object types you can create under IPAM and DHCP, including IPv4 and IPv6 Networks, Host Records, IPv4 reservations, DHCP ranges, and IPv4/IPv6 fixed addresses.
- An enhanced VM discovery allowing both scheduled VM discovery and immediate discovery of VMs.

# Supported Appliances for Network Insight

Network Insight is supported on the following appliances: ND-906, ND-1606, ND-2306, ND-4106, ND-805, ND-1405, ND-2205, and ND-4005. All appliances that perform discovery require a Discovery license. Appliances with this license only perform discovery tasks and do not perform core DNS or DHCP functions.
