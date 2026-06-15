---
title: "Administrative Permissions for IPv4 or IPv6 DHCP Templates"
source: "/space/nios90/1343324256"
pageId: "1343324256"
---
There are three types of DHCP templates for IPv4 and IPv6 objects—network, DHCP range, and fixed address/reservation templates. To access any of these templates, a limited-access admin group must have read-only permission to the template. Limited-access admin groups cannot have read/write permission to the templates. Only superusers can create, modify and delete network, DHCP range, and fixed address templates. An admin group with read-only permission to the DHCP templates can view them and use them to create networks, DHCP ranges and fixed addresses, as long as they have read/write permissions to those DHCP resources as well.  
You can set global read-only permission that applies to all DHCP templates, and you can set permissions to specific templates as well.  
For information on setting permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424). The following table lists the tasks admins can perform and the required permissions for DHCP templates.

*Permissions* *for* *DHCP Templates*

| **Tasks** | **IPv4** **or** **IPv6** **DHCP** **Templates** | **All** **IPv4** **or** **IPv6** **Networks** | **All** **IPv4** **or** **IPv6** **DHCP** **Ranges** | **All** **IPv4** **or** **IPv6** **Fixed** **Addresses/** **IPv4** **Reservations** |
| --- | --- | --- | --- | --- |
| Create IPv4 or IPv6 networks from templates | **RO** | **RW** |  |  |
| Create IPv4 or IPv6 DHCP ranges from templates | **RO** |  | **RW** |  |
| Create IPv4 fixed addresses/reservations or IPv6 fixed addresses from templates | **RO** |  |  | **RW** |
| View templates | **RO** |  |  |  |



Note the following additional guidelines:

- DHCP range templates and fixed address templates do not inherit their permissions from network templates. You must set permissions for each type of template.
- An admin group can create a network using a network template that includes a DHCP range template and a fixed address template, even if it has no permission to access the DHCP range and fixed address templates.
