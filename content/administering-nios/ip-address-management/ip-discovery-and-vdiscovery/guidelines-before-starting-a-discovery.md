---
title: "Guidelines Before Starting a Discovery"
source: "/space/nios90/280273599"
pageId: "280273599"
---
Consider the following guidelines before you start a discovery.

# Database Updates

After the Grid Master receives discovery data from the Grid member, it integrates the data based on the following rules:

- For a discovered host with a new IP address, the appliance marks the IP address "unmanaged."
- For a discovered host associated with one of the following, the appliance updates the data of the associated object:
  
  - A fixed address reservation or host address reservation
  - A host address not configured for DHCP services
  - A fixed address or host address with the same MAC address as that of the discovered host
  - An A or PTR record
  - A DHCP lease with the same MAC address as that of the discovered host
- For a DHCP lease that does not have any associated object, such as a fixed address or host record, the appliance updates the IP address with the discovered data. When the lease expires and the IP address has no associated objects, the appliance marks the IP address "unmanaged". When the lease expires and the IP address is associated with the same MAC address, the appliance preserves the discovered data.
- For a discovered host associated with one of the following, the appliance updates all data except the MAC address and marks the IP address as a conflict. For information about resolving conflicting addresses, see [*Managing Discovered Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086).
  
  - A fixed address with a different MAC address than that of the discovered host
  - A DHCP lease with associated objects and with a different MAC address than that of the discovered host
  - An Infoblox host address configured for DHCP services and with a different MAC address than that of the discovered host
- For a discovered host that is part of a DHCP range but does not have a fixed or leased address or is not within an exclusion range, the appliance assigns a DHCP range conflict to the IP address.
- For a discovered host through a vDiscovery, the appliance adds the discovered data to the database. The data is displayed in the IP Map and IP List panels, the **Discovered** **Data** tab of an object editor, and the Discovered Data section of the IP Address panel.
- The OS of an IP address obtained by an IP discovery supersedes that obtained by a vDiscovery, and the newly discovered name of a host supersedes the last discovered data.
- When a vDiscovery cannot obtain the IP address of a virtual entity, it does not return any discovered data for the entity. If this behavior is observed in a vDiscovery job running on VMware, then install VMware tools on the VM instance.
- Only the objects with IP addresses to which the administrators have read/write permission are updated to include the vDiscovery data.

# Database Capacity

When the Grid Master database reaches its maximum capacity (the maximum capacity varies based on the appliance model), the Grid Master stops updating the database and requests that the Grid member stop the discovery. When the discovering Grid member database reaches its capacity, the Grid member pauses the discovery. The appliance displays a dialog to inform you that the discovery pauses. The Grid member resumes the discovery once the database falls below its capacity. When a discovery pauses because of capacity issues, you cannot resume the discovery or start a new discovery. You can check the capacity of your appliance database before starting a discovery.

# HA Failover

In an HA pair, if the Grid Master fails over to the passive node, the passive node takes over and continues with the discovery from the last known state. If an independent appliance fails, the appliance stops the discovery process and keeps the discovery in a paused state. The appliance resumes the discovery once it starts up again.
