---
title: "Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks"
source: "/space/nios90/1343160450"
pageId: "1343160450"
---
Limited-access admin groups can access IPv4 and IPv6 networks, including shared networks, only if their administrative permissions are defined. Permissions for a network apply to all its DHCP ranges and fixed addresses. To override network-level permissions, you must define permissions for specific DHCP ranges and fixed addresses. For example, you can grant an admin group read-only permission to a network, read/write permission to its DHCP ranges, and read-only permission to its fixed addresses.  
You can grant read-only or read/write permission, or deny access to networks, as follows:

- All IPv4 or IPv6 networks—Global permission that applies to all IPv4 or all IPv6 networks in the database.
- All IPv4 or IPv6 shared networks—Global permission that applies to all IPv4 or all IPv6 shared networks in the database.
- A specific IPv4 or IPv6 network—Network permissions apply to its properties and to all DHCP ranges, fixed addresses and hosts in the network, if they do not have permissions defined. This overrides global permissions.
- All IPv4 or IPv6 DHCP ranges in a network—If you do not define permissions for DHCP ranges, they inherit the permissions of the network in which they reside.
- All IPv4 or IPv6 fixed addresses in a network—If you do not define permissions for fixed addresses, they inherit the permissions of the network in which they reside.

To define permissions for a specific IPv4 or IPv6 network and its DHCP ranges and fixed addresses, see* *[*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).  
The following table lists the tasks admins can perform and the required permissions for IPv4 and IPv6 networks.

*Network* *Permissions*

| **Tasks** | **Grid Member(s)** | **All IPv4 or IPv6 Networks** | **Specific IPv4 or IPv6 Network** | **All IPv4 or IPv6 Shared Networks** | **Specific DNS Zone** | **All IPv4 or IPv6 DHCP Ranges** | **All IPv4 or IPv6 Fixed Addresses** | **IPv4 or IPv6 Network Template** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Create, modify, and delete IPv4 or IPv6 networks, DHCP ranges, and fixed addresses without assigned Grid members |  | **RW** |  |  |  |  |  |  |
| Create, modify, and delete IPv4 or IPv6 networks, DHCP ranges, and fixed addresses with assigned Grid members | **RW** | **RW** |  |  |  |  |  |  |
| Assign a Grid member to a specific IPv4 or IPv6 network and its DHCP ranges | **RW** |  | **RW** |  |  |  |  |  |
| Expand and join IPv4 or IPv6 networks |  | **RW** |  |  |  |  |  |  |
| Create IPv4 or IPv6 networks from templates |  | **RW** |  |  |  |  |  | **RO** |
| Create, modify, and delete an IPv4 or IPv6 network |  | **RW** |  |  |  |  |  |  |
| View IPv4 or IPv6 network properties and statistics, and search for DHCP ranges and fixed addresses in a specific network |  |  | **RO** |  |  |  |  |  |
| Create, modify, and delete IPv4 or IPv6 DHCP ranges and fixed addresses in a specific network |  |  | **RW** |  |  |  |  |  |
| Create and split an IPv4 or IPv6 network and automatically create a reverse DNS zone |  |  | **RW** |  | **RW** |  |  |  |
| Create, modify, and delete IPv4 or IPv6 shared networks |  |  |  | **RW** |  |  |  |  |
| View IPv4 or IPv6 shared networks |  |  |  | **RO** |  |  |  |  |
| Create, modify, and delete IPv4 or IPv6 DHCP ranges with an assigned member in a specific network | **RW** |  | **RW** |  |  |  |  |  |
| Create, modify, and delete IPv4 or IPv6 DHCP ranges |  |  |  |  |  | **RW** |  |  |
| View and search for IPv4 or IPv6 DHCP ranges in a specific network |  |  | **RO** |  |  |  |  |  |
| Create, modify, and delete IPv4 or IPv6 fixed addresses |  |  |  |  |  |  | **RW** |  |
| View and search for IPv4 or IPv6 fixed addresses in a specific network |  |  | **RO** |  |  |  |  |  |
