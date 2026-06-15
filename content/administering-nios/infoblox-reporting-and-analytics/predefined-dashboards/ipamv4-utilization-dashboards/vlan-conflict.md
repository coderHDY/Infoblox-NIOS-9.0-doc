---
title: "VLAN Conflict"
source: "/space/nios90/1380450381"
pageId: "1380450381"
---
The *VLAN Conflict *dashboard displays details about those networks in which:

- Assigned VLAN ID and discovered VLAN ID are not equal even though the VLAN names are the same.
- Assigned VLAN name and discovered VLAN name are not the same even though the VLAN IDs are equal.
- Discovered VLAN exists but there is no assigned VLAN in the network with the same VLAN ID and name.
- Assigned VLAN exists but there is no discovered VLAN in the network with the same VLAN ID and name.

You can filter data based on discovered VLAN details, assigned VLAN details, conflict details and so on.

This dashboard displays the following information in table format:

- **Time**: Time duration for which the report must be generated. Select a value from the drop-down list. The default value is **Last 1 day**.
- **Network View**: Network view with which the network is associated.
- **Network**: IP address of the network for which a conflict exists between the discovered and assigned VLAN objects
- **Netmask**: Netmask of the network.
- **Protocol**: IPv4 or IPv6 protocol that the network belongs to.
- **Discovered VLAN Name**: VLAN name of the VLAN discovered by the network.
- **Discovered VLAN ID**: VLAN ID of the VLAN discovered by the network.
- **Assigned VLAN Name**: VLAN name assigned to the network.
- **Assigned VLAN ID**: VLAN ID assigned to the network.
- **Conflict Reason**: Reason of conflict between the discovered and assigned VLAN objects.
- **Discovered IP**: IP address of the discovered system.
