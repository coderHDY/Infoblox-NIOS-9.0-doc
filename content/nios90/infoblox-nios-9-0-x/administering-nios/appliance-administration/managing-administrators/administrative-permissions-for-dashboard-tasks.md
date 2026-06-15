---
title: "Administrative Permissions for Dashboard Tasks"
source: "/space/nios90/280408190"
pageId: "280408190"
---
Limited-access admin groups can configure IPAM tasks on the Tasks Dashboard only if their administrative permissions are defined. The appliance denies access to IPAM tasks for which an admin group does not have defined permissions.  
You can grant read-only or read/write permission, or deny access to IPAM tasks as follows:

- All IPAM tasks on the Tasks Dashboard
- A specific IPAM task

When you deny access to an IPAM task for an admin group, uses cannot configure the task on their dashboards. Users must have at lease read-only permission to a specific task to see it in the task pack. To perform a specific task, users must also have read/write permission to the objects associated with the task. For information about specific permissions for IPAM, DNS, and DHCP objects, see [*Administrative Permissions for IPAM Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-ipam-resources), [*Administrative Permissions for DNS Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources), and [*Administrative Permissions for DHCP Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dhcp-resources).  
For information about setting permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for configuring IPAM tasks on the Tasks Dashboard.

*Permissions* *for* *IPAM* *Tasks*

| **Tasks** | **All** **Dashboard** **Tasks** | **Add** **Networks** | **Add** **Hosts** | **Add** **Fixed** **Addresses** | **Add** **CNAME** **Record** | **Add** **TXT** **Record** | **Add** **MX** **Record** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Configure all tasks in the IPAM task pack | **RO** **RW** |  |  |  |  |  |  |
| Configure the Add Networks task |  | **RO** **RW** |  |  |  |  |  |
| Configure the Add Hosts task |  |  | **RO** **RW** |  |  |  |  |
| Configure the Add Fixed Addresses task |  |  |  | **RO** **RW** |  |  |  |
| Configure the Add CNAME Record task |  |  |  |  | **RO** **RW** |  |  |
| Configure the Add TXT Record task |  |  |  |  |  | **RO** **RW** |  |
| Configure the Add MX Record task |  |  |  |  |  |  | **RO** **RW** |
