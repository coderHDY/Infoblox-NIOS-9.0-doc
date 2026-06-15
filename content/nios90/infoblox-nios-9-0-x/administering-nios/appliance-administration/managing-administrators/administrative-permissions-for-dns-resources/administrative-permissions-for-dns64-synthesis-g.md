---
title: "Administrative Permissions for DNS64 Synthesis Groups"
source: "/space/nios90/1462403950"
pageId: "1462403950"
---
By default, only superusers can add, edit, and delete DNS64 synthesis groups. Limited-access admin groups can access synthesis groups, only if their administrative permissions are defined.  
You can grant read-only or read/write permission, or deny access to synthesis groups, as follows:

- All synthesis groups—Global permission that applies to all shared record groups in the database.
- A specific synthesis group—Overrides global permissions.

For information on setting permissions for synthesis groups, see [*About Administrative Permissions*](http://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/73272794/About+Administrative+Permissions). The following table lists the tasks admins can perform and the required permissions for synthesis groups.

*Permissions* *for* *DNS64* *Synthesis* *Groups*

| **Tasks** | **All** **Synthesis** **Groups Specific** **Synthesis** **Group** | **Specific** **Shared** **Record** **Group** | **Grid** | **Specific** **Member** | **Specific** **DNS** **View** |
| --- | --- | --- | --- | --- | --- |
| Create, modify, and delete synthesis groups | **RW** |  |  |  |  |
| Modify and delete a specific synthesis group |  | **RW** |  |  |  |
| View a synthesis group |  | **RO** |  |  |  |
| Apply a synthesis group to the Grid |  | **RO** | **RW** |  |  |
| Apply a synthesis group to a member |  | **RO** |  | **RW** |  |
| Apply a synthesis group to a DNS view |  | **RO** |  |  | **RW** |
