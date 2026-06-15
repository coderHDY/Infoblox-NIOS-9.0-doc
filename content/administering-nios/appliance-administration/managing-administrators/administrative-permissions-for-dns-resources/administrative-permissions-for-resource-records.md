---
title: "Administrative Permissions for Resource Records"
source: "/space/nios90/1462371131"
pageId: "1462371131"
---
Resource records inherit the permissions of the zone to which they belong. You can override zone-level permissions by setting permissions for specific resource records.  
You can grant read-only or read/write permission, or deny access to resource records as follows:

- Each resource record type in all zones and in all views—Global permission that applies to all resource records of the specified type; for example, all A records in the database.
- Each resource record type in a zone— Permissions at this level override global permissions.
- A specific resource record—Overrides zone-level permissions.

For information on setting permissions for resource records, see [*About Administrative Permissions*](http://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/73272794/About+Administrative+Permissions). The following table lists the tasks admins can perform and the required permissions for resource records.

*DNS* *Resources*

| **Tasks** | **Resource** **Record** **Type** | **Specific** **Resource** **Record** |
| --- | --- | --- |
| Create, modify, and delete resource records for a specified type, such as all A records or all PTR records | **RW** |  |
| View resource records for a specified type only | **RO** |  |
| Search for records of a specified type | **RO** |  |
| View a specific resource record |  | **RO** |
| View, modify, and delete a specific resource record |  | **RW** |

The following are additional guidelines:

- Only admins with read/write permission to bulk host records and read/write permission to reverse zones can create bulk host records and automatically add reverse-mapping zones.
- To create host records, admins must have read/write permission to the network and zone of the host.
- Admins must have read-only permission to the host records in a zone to view the Host Name Compliance Report. Admins must have read/write permission to the resource records in a zone to modify host names that do not comply with the host policy.
