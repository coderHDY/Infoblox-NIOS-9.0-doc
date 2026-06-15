---
title: "Administrative Permissions for Zones"
source: "/space/nios90/1462403914"
pageId: "1462403914"
---
By default, zones inherit administrative permissions from the DNS view in which they reside. You can override view-level permissions by setting permissions for specific zones. Permissions set for a zone are inherited by its subzones and resource records. To override zone-level permissions, set permissions for specific subzones and resource records.  
For example, you can grant an admin group the following permissions:

- Read-only to a zone and to all its A, AAAA, and PTR records (in reverse and forward-mapping zones)
- Read/Write permission to all MX and SRV records in the zone
- Deny to all the other resource records—CNAME, DNAME, TXT, host, and bulk host You can grant read-only or read/write permission, or deny access to zones as follows:
- All zones —Global permission that applies to all zones in all views.
- All zones in a view—Permissions at this level override the global permissions.
- A specific zone—Applies to the zone properties and resource records, if you do not define permissions for its resource records. This overrides global and view-level permissions. If you delete a zone and reparent its subzone, the subzone inherits the permissions of the new parent zone.
- All Response Policy Zones—Global permission that applies to all the Response Policy Zones.
- All Response Policy Rules—Global permission that applies to all the local Response Policy Zone rules.
  
  Object permissions are not applicable to Response Policy Zone rules.
  
  

- Each resource record type in a zone—For example, you can define permissions for all A records and for all PTR records in a zone. if you do not define permissions for resource records, they inherit the permissions of the zone in which they reside.

For information on setting permissions for zones and resource records, see [*About Administrative Permissions*](http://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/73272794/About+Administrative+Permissions).  
The following table lists the tasks admins can perform and the required permissions for zones.

*DNS* *Zone* *Permissions*

| **Tasks** | **Grid** **Member(s)** | **Specific** **DNS** **View** | **All** **DNS** **Zones** | **Specific** **DNS** **Zone** | **Resource** **Records** | **Shared** **Record** **Group** |
| --- | --- | --- | --- | --- | --- | --- |
| Create, modify, and delete zones, subzones and resource records with assigned members | **RW** |  | **RW** |  |  |  |
| Create, modify, and delete zones, subzones and resource records without assigned members |  |  | **RW** |  |  |  |
| Lock and unlock a zone |  |  |  | **RW** |  |  |
| Delete a zone with assigned Grid members | **RW** |  |  | **RW** |  |  |
| Create, modify, and delete all zones, subzones, and resource records in a specific view |  | **RW** | **RW** |  |  |  |
| Assign a name server group (member) to a zone | **RW** |  |  | **RW** |  |  |
| Delete a zone with name server groups assigned | **RW** |  |  | **RW** |  |  |
| Assign a shared record group to a zone |  |  |  | **RW** |  | **RW** |
| View zone properties, subzones, and resource records of a specific zone |  |  |  | **RO** |  |  |
| Search for zones, subzones, and resource records in a specific DNS view |  | **RO** | **RO** |  |  |  |
| Copy resource records from one zone to another: Source zone |  |  |  | **RO** | **RO** |  |
| Copy resource records from one zone to another: Destination Zone |  |  |  | **RW** | **RW** |  |
