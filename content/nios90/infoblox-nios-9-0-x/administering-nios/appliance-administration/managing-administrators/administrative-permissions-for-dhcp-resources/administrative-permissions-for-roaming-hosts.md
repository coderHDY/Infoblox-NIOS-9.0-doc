---
title: "Administrative Permissions for Roaming Hosts"
source: "/space/nios90/1343291547"
pageId: "1343291547"
---
Limited-access admin groups can access roaming hosts only if their administrative permissions are defined. The appliance denies access to roaming hosts for which an admin group does not have defined permissions.  
You can grant read-only or read/write permission, or deny access to roaming hosts as follows:

- All roaming hosts in the database—Global permission that applies to all the roaming hosts in the database.
- A specific roaming host—Permissions that applies to specific roaming host.

For information on setting permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for roaming host.

*Permissions* *for* *Roaming* *Hosts*

| **Tasks** | **Grid** **DHCP** **Properties** | **Specific** **IPv4** **or** **IPv6** **Roaming** **Host** | **All** **Roaming** **Host** |
| --- | --- | --- | --- |
| Enable roaming hosts | **RW** |  |  |
| View roaming host | **RO** | **RO** | **RO** |
| Create, modify, and delete roaming hosts | **RO** |  | **RW** |
| Modify and delete roaming host | **RO** | **RW** |  |
