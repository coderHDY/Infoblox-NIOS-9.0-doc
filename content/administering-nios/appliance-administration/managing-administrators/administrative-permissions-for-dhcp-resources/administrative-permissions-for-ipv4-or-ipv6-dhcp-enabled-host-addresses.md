---
title: "Administrative Permissions for IPv4 or IPv6 DHCP Enabled Host Addresses"
source: "/space/nios90/1343094925"
pageId: "1343094925"
---
A read-write permission to IPv4 or IPv6 Host Address gives limited-access users the ability to create, modify, and delete IPv4 and IPv6 DHCP enabled host addresses in a specified network. Admin users with a read-write permission can create, modify, and delete IPv4 or IPv6 DHCP enabled host addresses only in the specified network. They do not have the ability to create, modify or delete any networks or objects, such as fixed addresses, in those networks.  
You can also grant admin users read-only permission or deny access to the following:

- IPv4 Host Address—Object permission that applies to all IPv4 DHCP enabled host addresses in a specified network.
- IPv6 Host Address—Object permission that applies to all IPv6 DHCP enabled host addresses in a specified network.

For information about setting permissions for DHCP enabled host addresses, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).  
The following table lists tasks that admins can perform and the required permissions for IPv4 and IPv6 DHCP enabled host addresses.

*Permissions* *for* *DHCP* *Enabled* *Host* *Addresses*

| **Tasks** | **Specific** **IPv4** **or** **IPv6** **Network** | **All** **IPv4** **or** **IPv6** **DHCP** **enabled** **host** **Addresses** |
| --- | --- | --- |
| Create, modify, and delete IPv4 or IPv6 DHCP enabled host addresses in a specified network |  | **RW** |
| Modify and delete a specific IPv4 or IPv6 DHCP enabled host address |  | **RW** |
| View and search for all IPv4 or IPv6 DHCP enabled host addresses |  | **RO** |
| View and search for IPv4 or IPv6 DHCP enabled host addresses in a specified network |  | **RO** |
