---
title: "Applying Access Control to Operations"
source: "/space/nios90/280667621"
pageId: "280667621"
---
When you apply access control to NIOS operations, you can use anonymous ACEs or a named ACL. You cannot combine ACEs and named ACLs for access control. Depending on the access control types each operation supports, you may or may not be able to apply a named ACL to a specific operation. For information about which access control types each operation supports in *Operations* *that* *Support* *Access* *Control *table, see [*Operations that Support Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407358).

> **warning**
>
> ### Note
> 
> If you disable access control or select **None** or **Any** for an operation, the appliance removes the previously applied named ACL or the configured anonymous ACEs. To avoid losing your ACE configuration, Infoblox recommends that you convert the ACEs to a named ACL.

For information about how to apply access control to each supported operation, see the following:

- DNS zone transfers, as described in [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834).
- DNS queries, as described in [*Controlling DNS Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405942)*.*
- Recursive queries, as described in [*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882)*.*
- Dynamic DNS updates, as described in [*Configuring DNS Servers for DDNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272279)*.*
- AAAA filtering, as described in [*Controlling AAAA Records for IPv4 Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763620)*.*
- Blackhole list, as described in [*Configuring a DNS Blackhole List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405780)*.*
- Match clients list for DNS views, as described in [*Defining Match Clients Lists*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665456)*.*
- Match destinations for DNS views, as described in [*Defining a Match Destinations List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665456)*.*
- DNS64 clients, DNS64 mapped IPv4 addresses, and DNS64 excluded IPv6 addresses, as described in [*Setting DNS64 Group Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1420099718)*.*
- File distribution services, as described in [*Configuring Access Control for File Distribution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1395622135)*.*
- Grid Manager and API access, as described in [*Configuring Security Features*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257/Managing+Security+Operations#Configuring-Security-Features)*.*
- NTP access control, as described in* *[*Defining NTP Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1449590908)*.*
- Syslog proxy access, as described in [*Configuring Syslog for Grid Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1381171675)*.*
