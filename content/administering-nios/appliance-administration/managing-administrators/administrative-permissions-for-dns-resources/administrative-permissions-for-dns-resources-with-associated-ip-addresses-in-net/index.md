---
title: "Administrative Permissions for DNS Resources with Associated IP addresses in Networks and Ranges"
source: "/space/nios90/414711908"
pageId: "414711908"
---
You can further control permissions for DNS resources that have associated IP addresses in a network container, network, or address range. These DNS resources include A records, AAAA records, PTR records, and DNS hosts. Permissions for these resources have been added so you now have more control over who can perform which tasks for these DNS resources without affecting permissions defined for the networks and ranges to which the resources belong. For example, if you want to allow an admin to add, modify, and delete A records associated with IP addresses within a specific network but you do not want the same admin to modify or delete the network, you can grant the admin read-only permission for the specified network and read/write permission for A records in that network.  
Similar behavior applies to AAAA records, PTR records, and DNS hosts.  
As a superuser, you can now grant permissions to admin groups for more granular access to the following resources:

- IPv4 and IPv6 DHCP fixed addresses and IPv4 reservations in a range
- IPv4 and IPv6 host addresses in a range
- A and AAAA records in a network container, network, or range
- IPv4 and IPv6 PTR records in a network container, network, or range

For information about how to configure new permissions for these resources, see [*Configuring Permissions for DNS Resources in Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1482555528) below.
