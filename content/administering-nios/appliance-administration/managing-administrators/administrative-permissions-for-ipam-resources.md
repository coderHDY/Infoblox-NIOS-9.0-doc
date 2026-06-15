---
title: "Administrative Permissions for IPAM Resources"
source: "/space/nios90/280765880"
pageId: "280765880"
---
Limited-access admin groups can access certain IPAM resources only if their administrative permissions are defined. By default, the appliance denies access when a limited-access admin group does not have defined permissions. You can grant admin groups read-only or read/write permission, or deny access to the following IPAM resources:

- Network views
- IPv4 networks
- IPv6 networks
- Hosts

The appliance applies permissions for IPAM resources hierarchically. Permissions to a network view apply to all networks and resources in that view. You can also grant an admin group broad permissions to IPAM resources, such as read/write permission to all IPv4 networks and IPv6 networks in the database. In addition, you can grant permission to a specific host in a network. Permissions at more specific levels override global permissions.

The following sections describe the types of permissions that you can set for IPAM resources:

- For more information about Administrative Permissions for Network Views, see [*Administrative Permissions for DHCP Resources*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153).
- Administrative Permissions for IPv4 and IPv6 Networks, see below
- Administrative Permissions for Hosts, see below.

# Administrative Permissions for IPv4 and IPv6 Networks

Limited-access admin groups can access IPv4 and IPv6 networks only if their administrative permissions are defined. Permissions for a network apply to all its DNS and DHCP resources, if configured. To override network-level permissions, you must define permissions for specific objects within the networks. You can also define permissions for specific DHCP objects and Grid member to restrict admins to perform only the specified DHCP tasks on the specified member. For more information about Defining DNS and DHCP Permissions on Grid Members, see [*About Administrative Permission*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)[s](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).  
You can grant read-only or read/write permission, or deny access to networks, as follows:

- All IPv4 or IPv6 networks—Global permission that applies to all networks in the database.
- A specific network—Network permissions apply to all objects in the network. This overrides global permissions.
- A specific network on a specific member—Network permissions apply to all objects in the network and member permissions apply to the specific member. For information about member permissions and modifying permissions on a Grid Member, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.*

# Administrative Permissions for Hosts

A host record can contain both DNS and DHCP attributes if you configure them. When applying administrative permissions to host records, the permissions apply to all relevant DNS and DHCP resources within the host records. You can define global permissions to all hosts. To override global permissions, you must define permissions for specific hosts.  
You can grant read-only or read/write permission, or deny access to host records, as follows:

- All hosts—Global permission that applies to all host records in the Grid.
- A specific host—Object permission that applies only to a selected host.

# Administrative Permissions for DHCP Fingerprint Permissions

NIOS provides a global permission for all All DHCP Fingerprints; however, it does not support object level permissions for fingerprints. To use fingerprint filters, you must have superuser privileges.

# Administrative Permissions for Network Insight Tasks

The below table summarizes the permissions you need to perform various tasks related to device discovery.   
*Permissions* *for* *Network* *Discovery*

| **Tasks** | ** Network Discovery ** | **DNS** **Zones** | **Networks** **Selected** **for** **Discovery** | **Port** **Control** | **All** **Network** **Views/** **All** **IPv4** **Networks/** **All** **IPv6** **Networks** | **Permissions** **for** **Object** |
| --- | --- | --- | --- | --- | --- | --- |
| Initiate and control a discovery on selected networks | **RW** |  | **RW** |  |  |  |
| View discovered data |  |  | **RO** |  |  |  |
| Resolve conflicting IP addresses |  |  | **RW** |  |  |  |
| Convert unmanaged objects to a host, fixed address, reservation, A record, or PTR record |  | **RW** | **RW** |  |  |  |
| Configure device interfaces, provision networks on interfaces | **RW** |  |  | **RW** |  |  |
| Configure a Blackout schedule for networks or DHCP ranges | **RW** |  |  |  | **RO** |  |
| Creating/editing port reservations for a Grid member, host, fixed address, reservation, A record, or PTR record |  |  |  | **RW** |  | **RO** |
