---
title: "Administrative Permissions for DNS Resources"
source: "/space/nios90/280765861"
pageId: "280765861"
---
You can grant roles and admin groups read-only or read/write permission, or deny access to the following DNS resources:

- DNS Views
- DNS Zones
- Response Policy Zones
- All RPZ Rules
- Hosts
- Bulk Hosts
- A records
- AAAA records
- CNAME records
- DNAME records
- MX records
- PTR records
- SRV records
- TXT records
- Hosts
- Bulk Hosts
- Shared Record Groups
- Shared A records
- Shared AAAA records
- Shared CNAME records
- Shared MX records
- Shared SRV records
- Shared TXT records
- DNS64 synthesis groups
- Adding a blank A/AAAA record

The appliance applies permissions for DNS resources hierarchically. Permissions to a DNS view apply to all zones and resource records in that view. Permissions for a zone apply to all its subzones and resource records, and resource record permissions apply to those resource records only. To override permissions set at higher level, you must define permissions at a more specific level. To assign permissions, see *[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.   
You can also define permissions for specific DNS objects and Grid member to restrict admins to perform only the specified DNS tasks on the specified member. For more information about defining DNS and DHCP permissions on Grid Members, see *[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.  
The following sections describe the different types of permissions that you can set for DNS resources:

- Administrative Permissions for DNS Views
- Administrative Permissions for Zones
- Administrative Permissions for Resource Records
