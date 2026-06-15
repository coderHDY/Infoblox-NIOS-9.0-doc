---
title: "Administrative Permissions for IPv4 and IPv6 DHCP Ranges"
source: "/space/nios90/1343094960"
pageId: "1343094960"
---
DHCP ranges inherit the permissions of the networks in which they reside. You can override network-level permissions by defining permissions for DHCP ranges. You can read-only or read/write permission, or deny access to DHCP address ranges, as follows:

- All IPv4 or IPv6 DHCP ranges—Global permission that applies to all IPv4 or IPv6 DHCP ranges in the database.
- All IPv4 or IPv6 DHCP ranges in a network—Permissions at this level override global permissions. If you do not define permissions for DHCP ranges, they inherit the permissions of the network in which they reside.
- A single IPv4 or IPv6 DHCP range—Overrides global and network-level permissions.

For information on setting permissions for DHCP ranges, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424). The following table lists the tasks admin can perform and the required permissions for DHCP ranges.

*DHCP* *Ranges*

| **Tasks** | **Grid** **Member(s)**   | **Specific** **IPv4** **or** **IPv6** **Network** | **All** **DHCP** **IPv4** **or** **IPv6** **Ranges** | **Specific** **IPv4** **or** **IPv6** **DHCP** **Range** | **MAC** **Address** **Filter** |
| --- | --- | --- | --- | --- | --- |
| Create, modify, and delete IPv4 or IPv6 DHCP ranges with an assigned member or a failover association | **RW** |  | **RW** |  |  |
| Create, modify, and delete IPv4 or IPv6 DHCP ranges in a network with assigned members | **RW** | **RW** |  |  |  |
| Modify and delete an IPv4 or IPv6 DHCP range with an assigned member | **RW** |  |  | **RW** |  |
| View and search for all IPv4 or IPv6 DHCP ranges with an assigned member | **RO** |  |  | **RO** |  |
| View and search for IPv4 or IPv6 DHCP ranges in a network with assigned members | **RO** | **RO** |  |  |  |
| View and search for an IPv4 or IPv6 DHCP range with an assigned member | **RO** |  |  | **RO** |  |
| View and search for an IPv4 or IPv6 DHCP range without an assigned member |  |  |  | **RO** |  |
| Apply relay agent and option filters to an IPv4 DHCP range |  |  |  | **RW** |  |
| Apply a MAC address filter to an IPv4 DHCP range |  |  |  | **RW** | **RO** |
