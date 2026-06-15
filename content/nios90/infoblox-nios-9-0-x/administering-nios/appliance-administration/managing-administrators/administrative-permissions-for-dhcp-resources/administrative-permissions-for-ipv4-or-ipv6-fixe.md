---
title: "Administrative Permissions for IPv4 or IPv6 Fixed Addresses and IPv4 Reservations"
source: "/space/nios90/1343291510"
pageId: "1343291510"
---
IPv4 and IPv6 fixed addresses and IPv4 reservations inherit the permissions of the networks in which they reside. You can override network-level permissions by defining permissions for fixed addresses.  
You can grant read-only or read-write permission, or deny access to fixed addresses, as follows:

- All IPv4 fixed addresses/reservations—Global permission that applies to all IPv4 fixed addresses and reservations in the database.
- All IPv6 fixed addresses—Global permission that applies to all IPv6 fixed addresses in the database.
- All IPv4 fixed addresses/reservations in a network— Permissions at this level override global permissions. If you do not define permissions for fixed addresses and reservations, they inherit the permissions of the network in which they reside.
- All IPv6 fixed addresses in a network— Permissions at this level override global permissions. If you do not define permissions for IPv6 fixed addresses, they inherit the permissions of the network in which they reside.
- A single IPv4 fixed address/reservation—Overrides global and network-level permissions.
- A single IPv6 fixed address—Overrides global and network-level permissions.

For information on setting permissions for fixed addresses, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)*.*  
The following table lists the tasks admins can perform and the required permissions for IPv4 and IPv6 fixed addresses.

*Permissions* *for* *Fixed* *Addresses/Reservations*

| **Tasks** | **Specific** **IPv4** **or** **IPv6** **Network** | **All** **IPv4** **or** **IPv6** **fixed** **Addresses/** **IPv4** **Reservations** | **Specific** **IPv4** **or** **IPv6** **Fixed** **Address/** **IPv4** **Reservation** |
| --- | --- | --- | --- |
| Create, modify, and delete IPv4 fixed addresses/reservations or IPv6 fixed addresses |  | **RW** |  |
| Create, modify, and delete IPv4 fixed addresses/reservations or IPv6 fixed addresses in a specific network | **RW** |  |  |
| Modify and delete an IPv4 fixed address/reservation or IPv6 fixed address |  |  | **RW** |
| View and search for all IPv4 fixed addresses/reservations or IPv6 fixed addresses |  | **RO** |  |
| View and search for IPv4 fixed addresses/reservations or IPv6 fixed addresses in a network | **RO** | **RO** |  |
| View and search for an IPv4 fixed address/reservation or IPv6 fixed address |  |  | **RO** |
