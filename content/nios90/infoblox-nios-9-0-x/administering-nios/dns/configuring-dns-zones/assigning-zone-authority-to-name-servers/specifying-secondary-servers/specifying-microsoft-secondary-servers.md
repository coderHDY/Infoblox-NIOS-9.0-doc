---
title: "Specifying Microsoft Secondary Servers"
source: "/space/nios90/1457095408"
pageId: "1457095408"
---
You can assign a Microsoft server as the primary server of a zone when it is managed by a Grid member in read/write mode. For information, see* *[*About Managing Microsoft Windows Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/about-managing-microsoft-windows-servers).  
Since Microsoft servers cannot replicate data from the Grid, when a DNS zone is defined as a secondary on a Microsoft server, the Microsoft server obtains the content of the zone only through DNS zone transfers.

- In the Add Microsoft Secondary panel, do the following:
  
  - If no server is displayed, click **Select** **Server** to specify a Microsoft server. When there are multiple servers, Grid Manager displays the *Server* *Selector* dialog box from which you can select a Microsoft server. Grid Manager lists Microsoft servers that are managed in read/write mode. It does not include Microsoft servers managed in read-only mode.
  - **Information** **to** **create** **NS** **record:** Grid Manager automatically creates the NS record. After you select a server, Grid Manager populates the **Name** and **IP** **Address** fields. Grid Manager uses this information when it creates the NS record, unless you select Stealth.
  - **Stealth:** This setting applies only if the primary server is a Grid member or a Microsoft server. Select this option to hide the NS record for the secondary name server from DNS queries. Grid Manager does not create an NS record for this name server in the zone data. Clear this option to display the NS record for the secondary name server in responses to queries.
