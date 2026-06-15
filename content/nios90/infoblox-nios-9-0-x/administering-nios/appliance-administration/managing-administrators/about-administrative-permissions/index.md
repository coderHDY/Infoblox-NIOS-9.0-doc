---
title: "About Administrative Permissions"
source: "/space/nios90/280275424"
pageId: "280275424"
---
You can assign permissions to admin roles which you then assign to admin groups, or you can assign permissions directly to an admin group. The following are permissions you can grant admin groups and roles:

- Read/Write (RW): Allows admins to add, modify, delete, view, and search for a resource.
- Read-Only (RO): Allows admins to view and search for a resource. Admins cannot add, modify, or delete the resource.
- Deny: Prevents admins from adding, modifying, deleting, and viewing a resource. This is the default permission level for all resources.

By default, the superuser group (**admin-group**) has full access to all resources on the appliance. Superusers can create limited-access admin groups and grant them permissions to resources at the global and object levels.  
Limited-access admin groups must have either read-only or read/write permissions assigned in order to view information or perform tasks on any supported objects.  
When you assign permissions at the global level, the permissions apply to all objects that belong to the specified resource. For example, when you define a read/write permission to all DHCP networks, the permission applies to all DHCP ranges and fixed addresses in the networks. For information about global permissions, see Defining Global Permissions below.  
You can also define permissions at a more granular level, such as for a specific Grid member, DNS zone, Response Policy Zone, network, and even an individual database object, such as a resource record or fixed address. When you define a permission at the object level, admins with this permission can only manage the specified object and its associated objects. For information about object permissions, see Defining Object Permissions below.  
You can use global and object permissions to restrict admins to specific DNS and DHCP resources on specific Grid members by assigning the appropriate permissions. You can use this feature to separate DNS and DHCP administration on selected Grid members. For more information, see Defining DNS and DHCP Permissions on Grid Members below.  
You can configure global permissions, object permissions, and member DNS and DHCP permissions for default and custom admin groups and roles. You cannot however define permissions for the factory default roles, such as DHCP Admin.

The appliance supports the following permissions:

| **Permissions** | **Description** |
| --- | --- |
| Grid permissions | Includes Grid DNS properties, Grid DHCP properties, all Grid members, Microsoft servers that are managed by the Grid, network discovery, task scheduling, CSV imports, and all dashboard tasks. |
| IPAM permissions | Includes network views, IPv4 and IPv6 networks, and host records. |
| DHCP permissions | Includes Grid DHCP properties, network views, IPv4 networks, host records, DHCP ranges, DHCP fixed addresses/reservations, DHCP enabled host addresses, Mac filters, shared networks, DHCP templates, lease history, and roaming hosts. |
| DNS permissions | Includes Grid DNS properties, DNS views, DNS zones, Response Policy Zones, host records, bulk hosts, all DNS resource records, all shared records, and adding a blank A/AAAA record. |
| File distribution permissions | Includes Grid-level file distribution properties. |
| Reporting permissions | Includes Grid-level reporting properties. |
| Administration permissions | Includes all certificate authentication services, CA certificates and object change tracking. |
| GLB (Global Load Balancer) permissions | Includes all NIOS managed GLB objects. |
| DHCP fingerprint permissions | Includes all DHCP fingerprint related objects. |
| Named ACL permissions | Includes all named ACLs (access control lists). |
| Cloud permissions | Includes all tenant objects. |
| Super Host Permissions | Includes all super host objects. |

NIOS applies permissions hierarchically in a parent-child structure. When you define permissions for a resource, all objects within that resource inherit the same permissions. For example, when you grant an admin group read/write permission for a network, the admin group automatically has read/write permission for objects in that network. To override permissions set at a higher level, you define permissions at a more specific level. For example, you can override the read/write network-level permission by setting read-only or deny permission for a fixed address or a DHCP-enabled host address. To define permissions for a more specific level, see the following:

- Permissions for common tasks, as described in [*Administrative Permissions for Common Tasks*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-common-tasks).
- Permissions for the Grid and Grid members, as described in [*Administrative Permission for the Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permission-for-the-grid).
- Permissions for IPAM resources, such as IPv6 networks, as described in [*Administrative Permissions for IPAM Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-ipam-resources).
- Permissions for DNS resources, such as DNS views and A records, as described in [*Administrative Permissions for DNS Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources).
- Permissions for DNS resource with associated IP addresses in networks and ranges, as described in [*Administrative Permissions for DNS Resources with Associated IP addresses in Networks and Ranges*](/nios90/by-id/414711908).
- Permissions for DHCP resources, such as network views and fixed addresses, as described in [*Administrative Permissions for DHCP Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dhcp-resources).
- Permissions for file distribution services, as described in [*Administrative Permissions for File Distribution Services*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-file-distribution).* *
- Permissions for certificate authentication services and CA certificates, as described in [*Administrative Permissions for Certificate Authentication Services and CA Certificates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-certificate-authe).
- Permissions for object change tracking, as described in [*Administrative Permissions for Object Change Tracking*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-object-change-tra).[* *](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-object-change-tra)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-object-change-tra)
- Permissions for GLB and GLB objects, as described in [*Administrative Permissions for Load Balancers*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Administrative%20Permissions%20for%20Load%20Balancers&linkCreation=true&fromPageId=280275424).
- Permissions for Cloud objects, as described in [*Administrative Permissions for Cloud Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-cloud-objects).

When you set permissions that overlap with existing permissions, Grid Manager displays a warning about the overlaps. You can view detailed information and find out which permissions the appliance uses and which ones it ignores. For information, see Applying Permissions and Managing Overlaps below.

In this section:

*[children]*
