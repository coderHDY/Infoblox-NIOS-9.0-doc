---
title: "Administrative Permissions for VLAN Management"
source: "/space/nios90/280408122"
pageId: "280408122"
---
A superuser has RW access for all VLAN related objects.

Global permissions and object permissions are supported for VLAN views, ranges, and objects. Permissions set at specific levels override global permissions for VLAN ranges, views, and objects. For more information see *[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.

A user who belongs to the VLAN Admin role has the following permissions set:

| **Permission Type ** | **Object** | **Task** | **Permission** |
| --- | --- | --- | --- |
| VLAN Permissions | VLAN view | Creating VLAN views | RW |
|  |  | Editing VLAN views | RW |
|  |  | Deleting VLAN views | RW |
| VLAN Permissions | VLAN range | Creating VLAN ranges | RW |
|  |  | Editing VLAN ranges | RW |
|  |  | Deleting VLAN ranges | RW |
| VLAN Permissions | VLAN object | Creating VLAN objects | RW |
|  |  | Editing VLAN objects | RW |
|  |  | Deleting VLAN objects | RW |
| IPAM Permissions | Network view | Creating network views | RO |
|  |  | Editing network views | RO |
|  |  | Deleting network views | RO |
| IPAM Permissions | IPv4/IPv6 network |  | RW |

For information about VLAN management, see *[VLAN Management](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757588)*.
