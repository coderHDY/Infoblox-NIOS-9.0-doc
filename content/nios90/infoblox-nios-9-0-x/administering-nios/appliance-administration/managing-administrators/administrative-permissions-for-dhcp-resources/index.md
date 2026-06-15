---
title: "Administrative Permissions for DHCP Resources"
source: "/space/nios90/280275153"
pageId: "280275153"
---
Limited-access admin groups can access certain DHCP resources only if their administrative permissions are defined. By default, the appliance denies access when a limited-access admin group does not have defined permissions. You can grant admin groups read-only or read/write permission, or deny access to the following DHCP resources:

- Network views
- IPv4 networks
- Hosts
- IPv4 DHCP ranges
- IPv4 DHCP fixed addresses
- IPv4 DHCP reservations
- MAC address filters
- IPv4 shared networks
- IPv4 network templates
- IPv4 DHCP range templates
- IPv4 fixed address templates
- IPv4 DHCP enabled host addresses
- IPv4 DHCP lease history
- Roaming hosts
- IPv6 networks
- IPv6 DHCP ranges
- IPv6 DHCP fixed addresses
- IPv6 DHCP enabled host addresses
- IPv6 shared networks
- IPv6 network templates
- IPv6 DHCP range templates
- IPv6 fixed address templates
- IPv6 DHCP lease history

You can grant an admin group broad permissions to DHCP resources, such as read/write permission to all IPv4 or IPv6 networks and shared networks in the database. In addition, you can grant permission to specific resources, such as a specific IPv4 or IPv6 network or DHCP range, or an individual address in an IPv4 or IPv6 network. Permissions at more specific levels override global permissions.  
You can also define permissions for specific DHCP objects and Grid member to restrict admins to perform only the specified DHCP tasks on the specified member. For more information about defining DNS and DHCP permissions on Grid Members, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)*.*  
The following sections describe the different types of permissions that you can set for DHCP resources:

- Administrative Permissions for Network Views
- Administrative Permissions for IPv4 and IPv6 Networks and Shared Networks
- Administrative Permissions for IPv4 or IPv6 Fixed Addresses and IPv4 Reservations
- Administrative Permissions for IPv4 and IPv6 DHCP Ranges
- Administrative Permissions for IPv4 or IPv6 DHCP Templates
- Administrative Permissions for Roaming Hosts
- Administrative Permissions for MAC Address Filters
- Administrative Permissions for the IPv4 and IPv6 DHCP Lease Histories

In this section:

*[children]*
