---
title: "Administrative Permissions for DNS Views"
source: "/space/nios90/1462371098"
pageId: "1462371098"
---
Limited-access admin groups can access DNS views, including the default view, only if their administrative permissions are defined. Permissions to a DNS view apply to all its zones and resource records. To override view-level permissions, you must define permissions for its zones and resource records. For example, you can grant an admin group read-only permission to a view and read/write permission to all its zones. This allows the admins to display the view properties, but not edit them, and to create, edit and delete zones in the view.  
You can grant read-only or read/write permission, or deny access to DNS views, as follows:

- All views—Global permission that applies to all DNS views in the database.
- A specific view—Applies to its properties and its zones, if you do not define zone-level permissions. This overrides the global view permissions.
- All zones in a view—If you do not define permissions for zones, they inherit the permissions of the view they are in.

For information on setting permissions for a view and its zones, see [*About Administrative Permissions*](http://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/73272794/About+Administrative+Permissions).  
The following table lists the tasks admins can perform and the required permissions for DNS views.

*Permissions* *for* *DNS* *Views*

| **Tasks** | **Grid** **Member(s)** | **All** **DNS** **Views** | **Specific** **DNS** **View** | **All** **DNS** **Zones** |
| --- | --- | --- | --- | --- |
| Create, modify, and delete DNS views |  | **RW** |  |  |
| Create, modify, and delete DNS zones with assigned members | **RW** |  |  | **RW** |
| Create, modify, and delete DNS zones without assigned members |  |  |  | **RW** |
| Modify and delete a specific DNS view |  |  | **RW** |  |
| Create, modify, and delete DNS zones, subzones, and resource records in a specific DNS view |  |  | **RW** | **RW** |
| Add Grid members to a Match Members list of a DNS view | **RW** |  | **RW** |  |
| Delete a DNS view with Grid members in a Match Members list | **RW** |  | **RW** |  |
| View DNS view properties, DNS zones, and resource records |  | **RO** |  |  |
| View DNS zone properties, subzones, and resource records |  |  |  | **RO** |
| Restart services from the DNS tab | **RO** |  | **RW** |  |
