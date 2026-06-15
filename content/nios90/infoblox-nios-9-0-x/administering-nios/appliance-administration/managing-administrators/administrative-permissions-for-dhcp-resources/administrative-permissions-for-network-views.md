---
title: "Administrative Permissions for Network Views"
source: "/space/nios90/1343291471"
pageId: "1343291471"
---
Limited-access admin groups can access network views, including the default network view, only if they have read-only or read/write permission to a specific network view or to all network views. Permissions granted to a network view apply to all its IPv4 and IPv6 networks, shared networks, DHCP ranges and fixed addresses.  
You can grant admin groups read-only or read/write permission, or deny access to network views as follows:

- All network views—Global permission that applies to all network views in the database.
- A specific network view—Permission to a specific network view applies to the properties you set in the *Network* *View* editor, and to all the IPv4 and IPv6 networks and shared networks in the network view. This overrides the global permission to all network views. When you configure permissions for a network view, you can also set permissions for the following:
  
  - All IPv4 and IPv6 networks in the selected network view—If you do not define permissions for IPv4 or IPv6 networks, they inherit the permissions of their network view.
  - All IPv4 and IPv6 shared networks in a specific network view—If you do not define permissions for IPv4 or IPv6 shared networks, they inherit the permissions of their network view.

Note that you can grant an admin group read-only or read/write permission to specific IPv4 or IPv6 networks in a network view, without granting them permission to that network view. For information, see   Permissions for IPv4 and IPv6 Networks and Shared Networks below.  
For information on how to define permissions for network views, see* *[*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).  
The following table lists the tasks admins can perform and the required permissions for network views.

*Network* *View* *Permissions*

| **Tasks** | **All DNS Views** | **Specific DNS View** | **All Network Views** | **Specific Network View** | **All IPv4 or IPv6 Networks** | **All IPv4 or IPv6 Shared Networks** |
| --- | --- | --- | --- | --- | --- | --- |
| Create and delete network views and their associated DNS views | **RW** |  | **RW** |  |  |  |
| Create and delete a network view and its associated DNS views |  | **RW** |  | **RW** |  |  |
| Create, modify, and delete IPv4 and IPv6 networks and shared networks in all network views |  |  | **RW** |  |  |  |
| Create, modify, and delete IPv4 and IPv6 networks and shared networks in a network view |  |  |  | **RW** |  |  |
| View the properties of all network views |  |  | **RO** |  |  |  |
| View network statistics of all network views |  |  | **RO** |  |  |  |
| View and search for all IPv4 and IPv6 networks and shared networks |  |  | **RO** |  |  |  |
| View the properties of a network view |  |  |  | **RO** |  |  |
| View and search for IPv4 and IPv6 networks and shared networks in a network view |  |  |  | **RO** |  |  |
| Expand and join IPv4 and IPv6 networks |  |  | **RW** |  |  |  |
| Expand and join IPv4 and IPv6 networks in a specific network view |  |  |  | **RW** |  |  |
| Create, modify, and delete IPv4 and IPv6 networks, DHCP ranges and fixed addresses in a specific network view |  |  |  | **RW** |  |  |
| View network statistics and properties of all networks in a network view |  |  |  | **RO** |  |  |
| Search for IPv4 and IPv6 networks in a network view |  |  |  | **RO** |  |  |
| Create, modify, and delete all IPv4 or IPv6 shared networks |  |  |  |  |  | **RW** |
| View the properties of all IPv4 or IPv6 shared networks |  |  |  |  |  | **RO** |
| View and search for IPv4 and IPv6 shared networks in a network view |  |  |  | **RO** |  |  |
| Restart services from the DHCP tab | **RO** |  |  | **RW** |  |  |
