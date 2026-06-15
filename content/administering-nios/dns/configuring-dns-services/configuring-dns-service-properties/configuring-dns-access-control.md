---
title: "Configuring DNS Access Control"
source: "/space/nios90/281215184"
pageId: "281215184"
---
You can add ACEs (access control entries) or use a named ACL (access control list) to determine which hosts can perform specific DNS tasks. For information about how to define a named ACL, see [*Defining Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667593). When you add ACEs or a named ACL to Grid DNS properties, the configuration overrides member and object access control for DNS zone transfers, dynamic DNS updates, DNS queries and recursive queries, blackhole lists, and AAAA filtering. For a full list of operations that support access control, see [*Operations that Support Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407358).  
To configure DNS access control:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**
2. In the *Grid* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**, and select one of the following tabs for specific DNS tasks:
   
   - **Updates** tab**:** Define ACEs or a named ACL to control Grid level dynamic DNS updates, as described in [*Enabling DNS Servers to Accept DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272279)*.*
   - **Queries** tab**:** Define ACEs or a named ACL to control Grid level DNS queries, recursive queries, and AAAA filtering, as described in [*Controlling DNS Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405942)[,](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405942)* *[*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882) and [*Controlling AAAA Records for IPv4 Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763620)*.*
   - **Zone** **Transfers** tab**:** Define ACEs or a named ACL to control Grid level DNS zone transfers, as described in [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834) .This does not apply to zone transfers for Microsoft servers. For information about Microsoft servers, see [*Setting Zone Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270513)*.*
   - **Blackhole** tab**:** Configure ACEs or a named ACL to define IP addresses and networks that you do not want to include during the DNS resolution process, as described in [*Configuring a DNS Blackhole List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405780).
   - **DNS64** **tab**: Configure ACEs or a named ACL for clients to which the appliance sends synthesized AAAA records DNS64 groups, as described in [*Setting DNS64 Group Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1420099718)*.*
3. Save the configuration.

You can override the Grid settings at the member and object levels.
