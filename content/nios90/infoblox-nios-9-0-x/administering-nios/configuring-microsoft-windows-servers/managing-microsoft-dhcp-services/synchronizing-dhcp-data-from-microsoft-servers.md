---
title: "Synchronizing DHCP Data from Microsoft Servers"
source: "/space/nios90/280662716"
pageId: "280662716"
---
After you configure a member to manage the DHCP service of a Microsoft server, the Grid member connects to the server and starts synchronizing IPv4 DHCP data from the Microsoft server to the Grid database. It synchronizes the Microsoft server properties, leases, scopes and reservations.  
The synchronization time varies, depending on different factors, such as the number of managed Microsoft servers and the amount of data being synchronized.

> **warning**
>
> **Note**
> 
> Synchronizing IPv6 data is not supported.

As shown in the table below, Microsoft servers and Infoblox DHCP servers represent DHCP data differently. Scopes on Microsoft servers are DHCP ranges on Infoblox DHCP servers. Additionally, Microsoft servers support split-scopes, which is a scope assigned to two Microsoft servers. Each scope has an exclusion range on opposite ends to specify the pool of IP addresses that the other Microsoft server allocates. On an Infoblox DHCP server, each scope in the split-scope is represented as a DHCP range with an exclusion range. Note that NIOS also synchronizes scopes assigned to more than two Microsoft servers, but they are not synchronized as split-scopes.  
Fixed addresses on Infoblox DHCP servers are the same as reservations on Microsoft servers. Infoblox reservations, which are IP addresses that are excluded from DHCP, are not supported on Microsoft servers. Microsoft superscopes, which are used to group scopes, are represented as superscopes and can be managed from Infoblox DHCP servers.   
  
*DHCP Data in Microsoft and Infoblox DHCP Servers*

| **DHCP Data** | **Microsoft DHCP Servers** | **Infoblox DHCP Servers** |
| --- | --- | --- |
| Address pool from which the server allocates addresses | Scope | DHCP Address Range in a Network |
| An IP address that is always assigned to the same device | Reservation | Fixed Address |
| An IP address that is excluded from DHCP because a user intends to configure it manually on a network device | Not supported | Reservation |
| Administrative group of scopes | Superscope | Microsoft superscope |

> **warning**
>
> **Note**
> 
> In this chapter, reservations always refer to Microsoft reservations (Infoblox fixed addresses), unless otherwise specified.

When the member synchronizes a scope to the Grid, it converts the scope to a DHCP range and network. For example, it converts the Microsoft scope 10.1.1.1- 10.1.1.200 with a netmask of /24 to the network 10.1.1.0/24 and DHCP range 10.1.1.1- 10.1.1.200 on Grid Manager. The member associates the DHCP properties of the scope, including its DHCP and Microsoft vendor options, with the DHCP range. It synchronizes the leases within the range and if configured, the exclusion range as well.  
NIOS synchronizes two scopes as split-scopes if the following conditions are met:

- Two scopes have the same address range.
- The scopes are assigned to two different Microsoft servers.
- Each scope has an exclusion range and the exclusion ranges are at opposite ends of the scope, so they complement each other. For example, the scope 10.1.1.1-10.1.1.200 on Microsoft server A has an exclusion range of 10.1.1.100-10.1.1.200 and the same scope on Microsoft server B has en exclusion range of 10.1.1.1-10.1.1.99.

When the appliance synchronizes a split-scope, it sets a split-scope flag on each scope to indicate that it is part of a split-scope. For more information, see [*Viewing Scopes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1935115163). It synchronizes any reservations that are configured in each scope as well.  
When the member synchronizes a Microsoft reservation to the Grid, it converts the reservation to a fixed address and static lease on Grid Manager. It associates the DHCP properties and DHCP and Microsoft vendor options of the reservation with the fixed address record.  
The Grid member synchronizes superscopes to the Grid as well. The Grid supports Microsoft superscopes, when an MS management license is installed. For information about adding and managing superscopes in Infoblox DHCP servers, see [*About Superscopes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/1934528307).  
Following are some guidelines on how a Grid member synchronizes DHCP data from Microsoft servers to the Grid:

- If two superscopes have the same name, but are served by different servers, the member creates two different superscopes on the Grid, each appended with the Microsoft server FQDN.
- The member synchronizes all active and inactive scopes from a managed Microsoft server as long as the scopes do not conflict or include any networks currently served by a Grid member. The member does not synchronize a scope if its network already exists in the Grid and is served by a Grid member. It can synchronize a scope if its network is included in an existing network, only if the network is not served by DHCP.
- Synchronizing scopes that are larger than /12 is not supported.
- NIOS synchronizes all scopes except for those with serving ranges that overlap the serving ranges of existing DHCP ranges.
- If the appliance manages multiple Microsoft servers and synchronizes identical scopes from more than two Microsoft servers, it does not flag the scopes as split-scopes.
- If the appliance synchronizes one or more scopes from Microsoft servers that are identical to an existing split-scope, it removes the split-scope flag from the existing split-scope.
- NIOS does not synchronize partially overlapping scopes inside a single network from different Microsoft servers. It synchronizes only ranges that completely overlap.
- More than two scopes are not synchronized as split-scopes, even if they are identical and have exclusion ranges that complement each other.
- Scopes that have more than one exclusion range are not synchronized as split-scopes, even if the exclusion ranges complement each other. In addition, if a split-scope is synchronized from a Microsoft server and one of the scopes is split again on the Microsoft server, NIOS synchronizes the third scope, but does not set a split-scope flag. In addition, it removes the split-scope flag from the original split-scopes.

You can view the synchronized data as follows:

- To view the networks of the scopes, select the **Data** **Management** tab -&gt; **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** panel. This panel displays all IPv4 networks.
- To view the corresponding DHCP ranges and reservations, select the **Data** **Management** tab -&gt; **DHCP** tab -&gt; **Networks** tab, and click a network link. For information about this panel, see [*Viewing Scopes*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686825470).

You can also use the features in the **IPAM** tab, such as the Net Map and IP Map, to view and manage the Microsoft DHCP data. For information, see [*About IP Address Management*](https://infoblox-docs.atlassian.net/wiki/spaces/nios91x/pages/2181562446).
