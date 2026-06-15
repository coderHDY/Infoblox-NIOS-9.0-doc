---
title: "Administrative Permissions for MAC Address Filters"
source: "/space/nios90/1343095005"
pageId: "1343095005"
---
Limited-access admin groups can access MAC address filters only if their administrative permissions are defined. The appliance denies access to MAC address filters for which an admin group does not have defined permissions.  
You can grant read-only or read/write permission, or deny access to MAC address filters as follows:

- All MAC address filters in the database
- A specific MAC address filter

For information on setting permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for MAC address filters.

*Permissions* *for* *MAC* *Filters*

| **Tasks** | **All** **MAC** **Address** **Filters** | **Specific** **MAC** **Address** **Filter** | **Specific** **IPv4** **DHCP** **Ranges** |
| --- | --- | --- | --- |
| Create, modify, and delete MAC address filters | **RW** |  |  |
| Create, modify, and delete MAC address entries for a MAC address filter |  | **RW** |  |
| Modify and delete a MAC address filter |  | **RW** |  |
| Apply a MAC address filter to an IPv4 DHCP range |  | **RO** | **RW** |
| Delete a MAC address filter from an IPv4 DHCP range |  | **RO** | **RW** |
| View MAC address filters and their MAC address entries | **RO** |  |  |
| View a MAC address filter and its MAC address entries |  | **RO** |  |
