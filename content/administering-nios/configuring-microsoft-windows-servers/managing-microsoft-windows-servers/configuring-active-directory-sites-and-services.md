---
title: "Configuring Active Directory Sites and Services"
source: "/space/nios90/280403325"
pageId: "280403325"
---
An Active Directory Site represents physical or logical sites that are defined on a Microsoft server. Each Active Directory Site is associated with an Active Directory Domain. A Microsoft administrator can associate multiple sites and networks with an Active Directory Domain. You cannot associate the same network with multiple Active Directory Sites. For more information about adding an Active Directory Site, see *[Monitoring Managed Microsoft Servers](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761116)*.  
You can synchronize Active Directory Sites, along with the associated networks, from the Active Directory server. The networks that synchronize from the Active Directory server appears in NIOS as a network or a network container. The Active Directory Site to which the network belongs is displayed as an extensible attribute and associated with the respective network. For more information, see *[Managing Extensible Attributes and Associated Networks](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403295)*. When you create a new Active Directory Site on NIOS, the appliance synchronizes new Active Directory Sites and associated networks with the Active Directory server.  
The appliance uses LDAP to communicate with the Microsoft server. For more information, see as described in *[Configuring Microsoft Server and LDAP Connections](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403295)*. You can specify a site link for a given Active Directory Site. For more information, see *[Configuring Server Site Links](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403295)*.  
You can assign relevant permissions for Active Directory Domains at the Grid level, network view level, or at the object level. For more information, see Configuring and Managing Server Permissions below.  
For more information on supported versions, see *[Supported Windows Versions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281149447)*.

# Best Practices for Configuring Active Directory Sites and Services

- A Grid member configured to synchronize Active Directory Sites and networks of a Microsoft server uses system resources, CPU, memory, network, etc. The amount of consumed resources depends on the number of Microsoft servers that are managed by the Grid member, the amount of data for synchronization and the synchronization frequency. Infoblox recommends that the managing Grid member should not serve other protocols.
- The Grid Master might also be affected by the initial synchronization. The first synchronization replicates all Active Directory Sites and networks from the managing Grid member to the Grid Master.
- The Grid member always initiates the connection to the Microsoft server. Infoblox recommends that you use an encrypted LDAP connection between the Grid member and the Microsoft server. The appliance displays a warning message when you use a non-encrypted connection.
- During a scheduled full upgrade, the synchronization of a Microsoft server is deactivated until the managing Grid member completes its upgrade.
- Microsoft Windows 2003 does not support IPv6 networks. Hence, the appliance prevents you from performing the following operations on the NIOS appliance, which might result in a synchronization failure on the Microsoft server:
  
  - Assigning an Active Directory Site to an IPv6 network if the site belongs to an Active Directory Domain that is managed by a Windows 2003 server.
  - Creating an IPv6 network from an IPv6 network template in which an Active Directory Site belonging to an Active Directory Domain managed by a Windows 2003 server is defined.
  - Moving one or more IPv6 networks when the destination Active Directory Site belongs to an Active Directory Domain that is managed by a Windows 2003 server.

# Synchronizing Active Directory Domains on a Domain Controller

The top level container in the Active Directory is called a Forest. Each forest can contain one or more Active Directory domains. All these domains share the same sites and networks. To avoid any inconsistency within NIOS, the appliance synchronizes only the root Active Directory domain of the forest into the Grid. For example, if the Microsoft server points to a domain controller of xyz.abc.com domain, the appliance synchronizes abc.com domain in NIOS.

An Active Directory user with the Domain User privilege (configured for synchronizing domains, sites, and their associated subnets) can read data from Active Directory and the same user with complete privileges on sites can write data from NIOS to Microsoft. However, these privileges are not enough to read deleted subnet associations of a site, when the delete operation occurs on the Microsoft server. For example.  if  you delete 10.x.x.0/24 from a Microsoft site and add 10.x.x.0/25 and 10.x.x.128/25 to the same site, after a synchronization, Grid Manager reflects all three subnets on the site.

NIOS performs incremental LDAP queries to search for the `uSNChanged` attribute on objects. This fetches the newly added or modified objects but does not fetch deleted objects. To find these objects, a query must be run against the Deleted Objects container. Only users with the Domain Admin privilege can read from the Deleted Objects container using LDAP queries.

# Configuring and Managing Server Permissions

You can define permissions for Active Directory Sites on both the NIOS and Microsoft servers, but there is no relationship between these two sets of permissions and they are not synchronized. You must have relevant permissions on the Microsoft server to synchronize an Active Directory server. If you do not have permissions, the operation fails and the appliance logs the message into the Microsoft log. The synchronization process fails until appropriate permissions are granted.  
On the Active Directory Sites, make sure that you set the following permissions in the *Permission* *Entry* *for* *Sites* dialog box:

- In the **Permissions** section, select all the checkboxes.
- In the **Properties** section, select the **Read** **All** **Properties** and **Write** **All** **Properties** checkboxes.

An administrator can define relevant permissions on the Active Directory Site and associated networks to prevent them from accidental deletion. However, you can modify such Active Directory Sites and networks. For example, you can rename an Active Directory Site.  
You can define permissions for an Active Directory Domain at the following levels:

- Grid level: When you assign Grid level permission, it is applicable to the objects that are associated with the Active Directory Domains that you have defined. When you assign Grid permissions, you can assign either **Read/Write**, **Read-only**, or **Deny** permissions for **All** **Active** **Directory** **Domains** resource. For more information about how to define Grid level permission, see *[Defining Global Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.
- Network view level: When you assign permission at the network view level, the permission is applicable to all the Active Directory Domains within the selected network view. For more information, see *[Administrative Permissions for Network Views](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275153)*.
- Permission on the Active Directory Domain. For more information, see *[Defining Object Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.

You must have the following permissions on the Active Directory Domain to perform the relevant operations:

- Read-only permission on the Active Directory Domain to view the Active Directory Domain and associated Sites.
- Read/Write permission on the Active Directory Domain to add, update or delete an associated Active Directory Site.
- Read/Write permission on the Active Directory Domain to associate or dissociate an Active Directory Site from or to the network.
- Note that the **All** **Active** **Directory** **Domains** permission will only support two modes: **Read-Only** and **Read/Write**. If you do not define permissions explicitly, the appliance sets Read-only permission for Active Directory Domains and Sites.
- Note that the extensible attributes are used to represent Active Directory Domains and Sites. As extensible attributes are generic and they do not support permissions, you can always retrieve Active Directory Domains and Sites for a given network if you have Read-only permission.
