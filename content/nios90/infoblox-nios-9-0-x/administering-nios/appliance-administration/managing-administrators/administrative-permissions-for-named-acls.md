---
title: "Administrative Permissions for Named ACLs"
source: "/space/nios90/280668257"
pageId: "280668257"
---
Only superusers and limited-access users with Read/Write permission to All Named ACLs and Read/Write permission to the corresponding objects and operations can manage named ACLs and their ACEs.  
For information about access control and named ACLs, see [*Configuring Access Control*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-access-control). The following table lists the operations and required permissions for managing named ACLs.

*Administration* *Permissions*

| **Tasks** | **Grid** **Member(s)** | **All** **Named** **ACLs** | **DNS** **Views** | **Related** **DNS** **objects** | **File** **Distribution** |
| --- | --- | --- | --- | --- | --- |
| Create, modify, and delete named ACLs for all supported operations | **RW** | **RW** | **RW** | **RW** | **RW** |
| View named ACLs and ACEs | **RW** | **RO** | **RO** | **RO** | **RO** |
