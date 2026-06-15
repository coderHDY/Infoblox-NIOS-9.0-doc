---
title: "Configuring Credential Groups"
source: "/space/nios90/1343161672"
pageId: "1343161672"
---
You can organize specific credential sets into groups that you can use to guess device credentials by assigning different credential groups to IPAM objects such as networks. For example, when a credential group is assigned to a network, Network Insight runs the guessing process only over credentials of this group for devices in this network.

You can use credential groups for credential guessing on the following levels:

- The Grid
- Probe members
- IPAM networks and network containers
- DHCP networks and DHCP ranges

A default credential group preexists on the Grid. The default credential group is automatically pre-assigned to the Grid, members, and IPAM objects such as networks, network containers, or ranges. You can create custom credential groups and add credentials to them. After that, you assign credential groups to the Grid, Probe members, and IPAM objects.

For more information, see the following sections:

- [Creating a Credential Group](#)
- [Adding SNMP and CLI Device Credentials to a Credential Group](#)
- [Assigning a Credential Group](#)
- [Viewing Credential Group Used for Device](#)
