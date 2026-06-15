---
title: "Configuring the Grid to Use NTP"
source: "/space/nios90/1449623553"
pageId: "1449623553"
---
In a Grid, the Grid Master and Grid members can synchronize their clocks with external NTP servers. They then forward the clock time to other appliances in the network. Likewise, in an independent HA pair, the active node communicates directly with an external NTP server. The passive node then synchronizes its clock with the active node.  
In a Grid, you must first enable the NTP service and configure external NTP servers at the Grid level before you configure the Grid Master and Grid members as NTP clients.  
To configure a Grid Master as an NTP client, perform the following tasks:

- If you want to enable authentication between the Grid members and NTP servers, you must specify the authentication keys before enabling the NTP service. You can specify authentication keys at the Grid and member levels.
- Enable the NTP service on the Grid and specify one or more external NTP servers. For information, see [Synchronizing the Grid with External NTP Servers](/nios90/by-id/1449590834/Synchronizing+the+Grid+with+External+NTP+Servers).
