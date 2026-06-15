---
title: "Administrative Permissions for Discovery"
source: "/space/nios90/280406370"
pageId: "280406370"
---
You can start a discovery and manage discovered data based on your administrative permissions. For more information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).  
Initiating and controlling a discovery requires specific administrative permissions. The following are permission guidelines for initiating and controlling a discovery:

- The **IPAM** **Discovery** **Admin** role provides a pre-configured list of permissions by which assigned admin accounts may perform discovery tasks. Administrators with these permissions can initiate and control discovery on any existing network. By default, the **IPAM** **Discovery** **Admin** role supports the following permissions:
  
  - All permissions associated with the Network Discovery feature set (active if you do not have a Network Insight license)
  - Read-Only on all Network Views, network containers, networks and ranges
  - Read-Only on all hosts
  - Read-Only on all Members
  - Read-Write Network Discovery permissions
  - Editing network, network container or range discovery properties: Read-Only for each type. For member assignment, the user also needs additional read-only permission for the assigned member
  - Editing fixed address, host or reservation discovery properties: Read-only for each type
  - Excluding an IP address or an IP Range (from the Network Editor 's **Discovery** **Exclusions** tab or from the IPAM IP **List** view): read-only permission for the network
  - Defining discovery and port configuration blackouts at the Grid and Network levels
  - **Discover** **Now** for Network, DHCP Range, IP address or device: Read-Only permission for each.
- If the user does not possess the **Network** **Discovery** permission, all Network Insight permissions and operations are disabled.
- A **Port** **Control** permission under the **IPAM** **Permissions** type allows you to add a Read/Write or Deny permission for a device; a network; a network container; or network view. You can also add a global RW/Deny port control permission for all network views.
  
  - If the user does not possess the **Port** **Control** permission, the user cannot provision networks, de-provision networks, perform port reservations or configure interfaces. *All* *non-Superuser* *accounts* *must* *have* *the* *Port* *Control* *permission* *to* *create* *port* *control* *tasks* *for* *any* *affected* *objects*.
- Superusers can initiate and control discovery on all networks. Some discovery functions require superuser permissions:
  
  - Grid Discovery properties
  - Uploading, Viewing and deletion of device support bundles
  - Launching Discovery Diagnostics
  - Launching Discovery Status

Similar to Network Discovery, devices and end hosts found through discovery can undergo conversion from unmanaged status to managed status. This entails converting an unmanaged IP address to a host, an A record or AAAA record, a PTR record, or to a fixed address.

- Administrators with read/write permission to a DNS zone or specific record type can convert unmanaged data to a host, fixed address, reservation, A record, or PTR record.
- IPAM Discovery admins can convert unmanaged networks to managed networks and can change discovery settings for networks.
- For unmanaged networks: users may **Delete**, **Convert** (to managed), **Clear** **Unmanaged** **Data** and **Clear** **Discovered** **Data** if one of the following is true:
  
  - User has read-write permission for the network  
    –or–
  - User has Network Discovery permission plus Read-Only for the network.

After a discovery is complete, the following permission guidelines apply to viewing and managing discovery data:

- Superusers can view and manage all discovered data.
- Administrators with read permission to networks can view all discovery data without editing.
- If a user has read-only permissions for a device's management IP address, the device is visible in the **Data** **Management** **–&gt;** **Devices** tab.

For more information on configuring admin user accounts and working with permissions, see the sections under [*Managing Administrators*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators). For information about discovery permissions, see [*Administrative Permissions for Network Discovery*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permission-for-the-grid/Administrative+Permission+for+the+Grid#APND).
