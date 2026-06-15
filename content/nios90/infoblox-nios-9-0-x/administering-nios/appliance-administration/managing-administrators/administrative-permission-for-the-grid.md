---
title: "Administrative Permission for the Grid"
source: "/space/nios90/280668320"
pageId: "280668320"
---
By default, the Grid Master denies access to Grid members when a limited-access admin group does not have defined permissions. You can grant an admin group read-only or read/write permission, or deny access to all Grid members or you can grant permission to specific Grid members, as described in  Applying Permissions and Managing  Overlaps, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).

> **warning**
>
> **Note**
> 
> Only superusers can modify DNS and DHCP Grid properties.

The following sections describe the types of permissions that you can set with Grid permissions:

*[toc]*

# Administrative Permissions for Grid Members

Grid Member Permissions table below lists the tasks admins can perform and the required permissions for Grid members.  
  
*Grid* *Member* *Permissions*

| **Tasks** | **Grid** **Member(s)** | **Member** **DNS** **Properties** | **Member** **DHCP** **Properties** | **Restart** **Member** **DNS** | **Restart** **Member** **DHCP** | **DNS** **Views** | **DNS** **Zones** | **Networks** | **DHCP** **Ranges** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Assign member to DNS zones |  |  |  | **RW** |  |  | **RW** |  |  |
| Assign member to networks |  |  |  |  | **RW** |  |  | **RW** |  |
| Assign member to DHCP ranges |  |  |  |  |  |  |  |  | **RW** |
| Configure member properties | **RW** |  |  |  |  |  |  |  |  |
| Add a member to a Match Members list of a DNS view | **RW** |  |  |  |  |  |  |  |  |
| Delete a view with members in a Match Members list |  |  |  |  |  | **RO** |  |  |  |
| View DNS and DHCP member properties |  | **RO** | **RO** |  |  |  |  |  |  |
| View and download syslog | **RO** |  |  |  |  |  |  |  |  |
| View DNS and DHCP configuration file |  | **RO** | **RO** |  |  |  |  |  |  |
| View network statistics | **RO** |  |  |  |  |  |  |  |  |
| Restart DNS service on the member |  |  |  | **RW** |  |  |  |  |  |
| Restart DHCP service on the member |  |  |  |  | **RW** |  |  |  |  |

# Administrative Permissions for Network Discovery

Limited-access admin groups can initiate a discovery and manage discovered data based on their administrative permissions.  
You can set global permissions for network discovery as described in  Defining Global Permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for network discovery.   
*Permissions* *for* *Network* *Discovery*

| **Tasks** | **Network** **Discovery** | **DNS** **Zones** | **Networks** **Selected** **for** **Discovery** | **Port** **Control** |
| --- | --- | --- | --- | --- |
| Initiate and control a discovery on selected networks | **RW** |  | **RW** |  |
| View discovered data |  |  | **RO** |  |
| Add unmanaged data to existing hosts, and resolve conflicting IP addresses |  |  | **RW** |  |
| Convert unmanaged data to a host, fixed address, reservation, A record, or PTR record |  | **RW** | **RW** |  |
| Configure device interfaces, provision networks on interfaces, de-provision networks | **RW** |  |  | **RW** |

# Administrative Permissions for Scheduling Tasks

You can schedule tasks, such as adding hosts or modifying fixed addresses, for a future date and time. To schedule tasks, you must first enable the scheduling feature at the Grid level, and then define administrative permissions for admin groups and admin roles. For information, see [*Scheduled Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks). Only superusers can enable and disable this feature and grant scheduling permissions to admin groups. Limited-access admin groups can schedule tasks only when they have scheduling permissions.  
Superusers can do the following:

- Enable and disable task scheduling at the Grid level
- Grant and deny scheduling permissions to admin groups and admin roles
- Schedule tasks for all supported object types
- Reschedule and delete any scheduled task

You can set global permissions to schedule tasks as described in Defining Global Permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)*.* The following table lists the tasks admins can perform and the required permissions. Users with read/write permission to scheduling can view, reschedule, and delete their own scheduled tasks.   
*Table* *4.10* *Scheduling* *Task Permissions*

| **Tasks** | **Scheduling** **Task** | **All** **Networks** | **All** **DNS** **Views** | **All** **Shared** **Record** **Groups** |
| --- | --- | --- | --- | --- |
| Schedule the addition, modification, and deletion of all supported object types | **RW** | **RW** | **RW** | **RW** |
| View, reschedule, and delete scheduled tasks | **RW** | **RW** | **RW** | **RW** |
| Convert unmanaged data to a host, fixed address, reservation, A record, or PTR record | **RW** | **RW** | **RW** |  |

To schedule tasks for specific resources, admins must have Read/Write permission to scheduling tasks, plus the required permissions to the supported resources. For information about permissions for specific resources, see the following:

- Grid members—See [*Administrative Permission for the Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permission-for-the-grid).
- DNS resources—See [*Administrative Permissions for DNS Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources).
- DHCP resources—See [*Administrative Permissions for DHCP Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dhcp-resources).

Note that the appliance deletes all pending scheduled tasks when superusers disable task scheduling at the Grid level. The appliance deletes an admin's scheduled tasks when superusers do the following:

- Set the scheduling permission of admin groups and roles to "Deny"
- Delete or disable an admin group or an admin role
- Delete or disable local admins
- Delete the scheduling permission from any admin group or admin role that contains users with pending scheduled tasks
- Change the admin group of a limited-access admin

# Administrative Permissions for Microsoft Servers

By default, only superusers can add Microsoft servers as managed servers to the Grid. Limited-access admins can add and manage Microsoft servers from the Grid based on their administrative permissions.  
The following table lists the tasks admins can perform and the required permissions. Note that only superusers can add a Microsoft server to a name server group.   
  
*Microsoft* *Server* *Permissions*

| **Tasks** | **Microsoft** **Server(s)** | **Grid** **Member(s)** | **Network** **Views** | **DNS** **Views** | **DNS** **Zones** | **Resource** **Records** | **Networks** | **DHCP** **Ranges** | **Superscopes** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Assign Microsoft server to member | **RW** | **RW** |  |  |  |  |  |  |  |
| Assign a network view to the Microsoft server | **RW** | **RW** | **RW** |  |  |  |  |  |  |
| Assign a DNS view to the Microsoft server | **RW** | **RW** |  | **RW** |  |  |  |  |  |
| Assign Microsoft server as primary or secondary to DNS zones | **RW** |  |  | **RW** | **RW** |  |  |  |  |
| Remove a Microsoft server as the primary or secondary server of a zone |  |  |  |  | **RW** |  |  |  |  |
| Remove a zone from a Microsoft server |  |  |  |  | **RW** |  |  |  |  |
| Edit zones and resource records of Microsoft servers |  |  |  |  | **RW** | **RW** |  |  |  |
| Assign a Microsoft server to a network | **RW** |  |  |  |  |  | **RW** |  |  |
| Assign a Microsoft server to a DHCP range | **RW** |  |  |  |  |  |  | **RW** |  |
| Remove a network served by a Microsoft server | **RW** |  |  |  |  |  | **RW** |  |  |
| Remove a DHCP range (scope) from a Microsoft server |  |  |  |  |  |  | **RW** | **RW** |  |
| Add, modify and remove Microsoft superscopes | **RW** |  |  |  |  |  |  | **RW** | **RW** |
| Clear leases from Microsoft server | **RW** |  |  |  |  |  |  | **RW** |  |
| Edit Microsoft server properties | **RW** |  |  |  |  |  |  |  |  |
| View Microsoft server properties | **RO** |  |  |  |  |  |  |  |  |
| View and download Microsoft logs | **RO** |  |  |  |  |  |  |  |  |
| Start/Stop DNS or DHCP on the Microsoft server | **RW** |  |  |  |  |  |  |  |  |
| Remove a Microsoft server from the Grid | **RW** |  |  |  |  |  |  |  |  |
