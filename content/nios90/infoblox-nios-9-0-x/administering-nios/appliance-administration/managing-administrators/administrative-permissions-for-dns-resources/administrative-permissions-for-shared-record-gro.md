---
title: "Administrative Permissions for Shared Record Groups"
source: "/space/nios90/1462436736"
pageId: "1462436736"
---
By default, only superusers can add, edit, and delete shared record groups. Limited-access admin groups can access shared record groups, only if their administrative permissions are defined.  
You can set different permissions for a shared record group and for each type of shared resource record in the group. For example, you can grant a role or an admin group the following permissions:

- Read-only to a shared record group and to all its shared A, AAAA, and CNAME records
- Read/Write permission to all the shared MX and SRV records in the shared record group
- Deny to the TXT records

You can grant read-only or read/write permission, or deny access to shared record groups, as follows:

- All shared record groups—Global permission that applies to all shared record groups in the database.
- A specific shared record group—Overrides global permissions.
- Each shared record type in all shared record groups — The shared resource record types include shared A records, shared AAAA records, shared CNAME records, shared MX records, shared SRV records, and shared TXT resource records.
- Each shared record type in a shared record group— Permissions at this level override global permissions.
- A specific shared record—Overrides zone-level permissions. Note the following guidelines:
- Shared record group permissions override zone permissions.
- Even if a zone is locked, superusers and limited-access users with read/write access can still edit or delete a shared record in the zone.

For information on setting permissions for shared record groups, see . The following table lists the tasks admins can perform and the required permissions for shared record groups.

*Permissions* *for* *Shared* *Record* *Groups*

| **Tasks** | **All** **Shared** **Record** **Groups** | **Specific** **Shared** **Record** **Group** | **Shared** **Record** **Type** | **Specific** **DNS** **Zone** | **Specific** **Shared** **Record** |
| --- | --- | --- | --- | --- | --- |
| Create, modify, and delete shared record groups | **RW** |  |  |  |  |
| Modify and delete a shared record group |  | **RW** |  |  |  |
| View a shared record group |  | **RO** |  |  |  |
| Create, modify, and delete shared records for a specific type |  |  | **RW** |  |  |
| View or search for shared records of a specific type |  |  | **RO** |  |  |
| Create, modify, and delete shared records for a specific type in a specified shared record group |  | **RW** | **RW** |  |  |
| View shared records for a specific type in a specified shared record group only |  | **RO** | **RO** |  |  |
| Create, modify, and delete a shared record |  |  |  |  | **RW** |
| View a specific shared record |  |  |  |  | **RO** |
| Assign a shared record group to DNS zones |  | **RW** |  | **RW** |  |
| Change the DNS zones associated with a shared record |  | **RW** |  | **RW** |  |
| Delete zones with a shared record group assigned. Before you delete a shared record group, you must remove all zones associated with it. |  | **RW** |  | **RW** |  |
