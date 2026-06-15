---
title: "Synchronizing to a Network View and DNS View"
source: "/space/nios90/1381630640"
pageId: "1381630640"
---
A Microsoft server can synchronize its data only to a single network view and a DNS view. Grid Manager automatically assigns Microsoft servers to the default view when a Grid contains only the default network view and DNS view. If a Grid has more than one network view, you must select a network view for the Microsoft server to synchronize its data; and if there are multiple DNS views, you must select a DNS view as well.

You cannot modify the assigned network view or DNS view of a Microsoft server after its data has been synchronized. Instead, you must remove the Microsoft server and then add it again. For information about removing a server, see [*Removing a Managed Microsoft Server*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403352/Managing+Microsoft+Servers#Removing-a-Managed-Microsoft-Server).

Microsoft servers do not support network views and DNS views. Therefore, network view and DNS view properties have no effect on the DNS and DHCP data that are synchronized from Microsoft servers.
