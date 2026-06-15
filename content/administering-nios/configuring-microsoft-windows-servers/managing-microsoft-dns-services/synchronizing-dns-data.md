---
title: "Synchronizing DNS Data"
source: "/space/nios90/280761090"
pageId: "280761090"
---
Managing members synchronize the properties and resource records for the following types of DNS zones:

- Authoritative forward-mapping zones
- IPv4 and IPv6 reverse-mapping zones
- Stub zones
- Delegations
- Active Directory-integrated zones

Grid members synchronize most of the resource records supported by Microsoft servers, except for WINS, WINSR, and ATMA records. They synchronize all the resource records supported by Infoblox DNS servers, as well as unsupported records, such as ISDN and X25 records. You can view the unsupported records in Grid Manager and delete them, but you cannot edit them. Note that Grid Manager and Microsoft DNS servers display some resource records, such as SIG records, in a different format. You can enable and disable zone synchronization for individual Microsoft DNS zones. For information, see *[Enabling and Disabling DNS Zone Synchronization](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761068)*.  
Grid members do not synchronize the following DNS zones supported by Microsoft servers:

| **Infoblox**** ****Terminology** | **Microsoft**** ****Terminology** |
| --- | --- |
| Forwarding zones | Conditional forwarders |
| Cached zones | Stub zones |
| Root zone | Root zone (Dot zone) |
| 0.in-addr.arpa | 0.in-addr.arpa (0.0.0.0) |
| 127.in-addr.arpa | 127.in-addr.arpa (127.0.0.1 - loopback) |
| 255.in-addr.arpa | 255.in-addr.arpa (255.255.255.255 - broadcast) |
| TrustAnchors | Trust Anchors |

You cannot use Grid Manager to create the unsupported zones and assign them to a Microsoft server. Any zone on the Grid that has the same name as a forwarding, cached or root zone on the Microsoft server is not synchronized. In addition, Grid members do not synchronize the contents of a zone if the Microsoft server is a secondary server.  
Subdomains defined within a Microsoft DNS zone are not synchronized unless they contain at least one resource record. For example, in the corpxyz.com zone, any resource record defined in a subdomain of the corpxyz.com zone is synchronized. If the subdomain sub.corpxyz.com zone has no resource record, it is not synchronized.  
The following zones and resource records are supported on Microsoft servers running Windows Server 2008 only. Therefore, Grid members can only synchronize these DNS zones and resource records with Microsoft servers running Windows Server 2008.

- IPv6 reverse-mapping zones
- Global Names zones
- DNAME records
- NAPTR records
- DNSSEC records

# Synchronizing with Multiple Servers

Because a Grid member can manage multiple Microsoft servers, it could potentially manage multiple servers assigned to the same zone. For example, a Grid member could manage a Microsoft server that is the primary server of a zone and one or more Microsoft servers that are secondary servers of the same zone. It could also manage multiple Microsoft servers that are secondary servers for the same zone.

If a Grid member manages the primary server and at least one secondary server of a zone, the Grid member always synchronizes DNS data with the primary server only. It never synchronizes data with the secondary server, even if the primary server fails.

If a Grid member manages several Microsoft servers that are secondary servers of the same zone, it synchronizes DNS data as follows:

- If each Microsoft server is assigned to a different DNS view, the Grid member synchronizes data with each one.
- If the Microsoft servers are synchronized to the same DNS view, the Grid member selects a principal server for synchronization purposes, as follows:
  
  - The first Microsoft server that is assigned as the DNS secondary server is designated principal server.
  - If the secondary servers are managed in read-only and read/write modes, the Grid member always selects a server that is managed in read/write mode.
  - If a Microsoft server fails three successive synchronizations, it loses its principal server status. The Grid Master checks the date that each server last became a principal server and selects the server that has not been the designated principal server the longest.

Note that a Grid member could fail to synchronize with a Microsoft server due to errors, such as a disabled account or an expired password. In these situations, the failure count is reset and is not increased. This prevents the Microsoft server from losing its master status to another Microsoft server that could experience the same errors.  
When a zone is served by multiple Microsoft servers, the **MS** **Sync** **Server** column of the **Zones** tab shows which Microsoft server is actually performing the synchronization of that zone with the Grid.
