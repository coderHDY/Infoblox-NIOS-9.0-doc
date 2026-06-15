---
title: "About Anycast Addressing for DNS"
source: "/space/nios90/280664099"
pageId: "280664099"
---
Four types of communications are utilized within an IP network:

- **Unicast** describes a one-to-one network communication between a single sender and a single recipient. The routing protocol determines the path through the network from the sender to the recipient based on the specific protocol or routing scheme. Unicast also describes the address type assigned to the recipient.
- **Multicast** describes a one-to-many network communication between a single sender and a specific group of recipients. All members within the group are intended recipients and each member receives a copy of the data from the sender. Multicast also describes the address type assigned to a group of recipients, used by the routing protocol to determine the path to the group.
- **Broadcast** is similar to multicast, the exception being that data is sent to every possible destination regardless of the groups or subnetwork. There is no specific group of recipients.
- **Anycast** describes a one-to-nearest communication between a single sender and the nearest recipient within a group. The routing protocol chooses one recipient within a target group based on the routing algorithm for the specific protocol, and sends data to that recipient only.

The NIOS appliance provides the following support for DNS anycast addressing:

- You can configure up to 20 anycast IP addresses on the loopback interface of each Grid member.
- Anycast IP addresses can be in IPv4 or IPv6 format. For all anycast IP addresses, the subnet mask value is always set to /32 for an IPv4 anycast IP or 128 for a 128-bit IPv6 address. These values are separate and distinct from the IP configuration on the NIOS appliance LAN port.
- The appliance advertises routing information of the anycast addresses through OSPF or BGP, or (seldom) both, depending on the deployment. Routers use the configured routing protocols to determine the best path to the nearest server. The appliance advertises the route information to the upstream or neighboring router, a router that forwards data on the network link and determines the forwarding path to destinations. For information, see [*IP Routing Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/ip-routing-options).
- The appliance advertises and withdraws route information based on reachability information to DNS servers sent by the IP route advertisements.
- When you configure DNS anycast addressing on an appliance and use it as an NTP server, the appliance can answer NTP requests through the anycast IP address. For information about how to configure an appliance as an NTP server, see [*Configuring a NIOS Appliance as an NTP Server*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-ntp-for-time-settings/configuring-a-nios-appliance-as-an-ntp-server)*.*

Anycast addressing for DNS provides the following benefits:

- **Improved** **Reliability**: Anycast provides improved reliability because DNS queries are sent to an anycast IP address that is defined on multiple DNS servers in the NIOS Grid. If the nearest server somehow goes offline, then the router forwards the request to the next nearest DNS server advertising the target anycast IP address (see [*Anycast Addressing for DNS Using OSPF*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/ip-routing-options) for an example).
- **Load** **Distribution**: Anycast distributes the load across multiple DNS servers based on network topology.
- **Improved** **Performance**: The NIOS appliance uses OSPF or BGP, depending on your configuration, to advertise anycast routing information to the upstream and neighboring routers. The routers determine the best route to the nearest DNS server. Anycast enables the queries to reach the nearest server more quickly, providing faster responses to DNS queries.

> **warning**
>
> ### Note
> 
> For more information about anycast addressing, refer to *RFC* *1546* *"Host* *Anycasting* *Service"*.
