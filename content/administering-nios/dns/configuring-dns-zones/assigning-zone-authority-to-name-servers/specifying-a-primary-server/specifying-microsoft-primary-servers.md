---
title: "Specifying Microsoft Primary Servers"
source: "/space/nios90/1456865956"
pageId: "1456865956"
---
You can assign a Microsoft server as the primary server of a zone when it is managed by a Grid member in read/write mode. For information, see [*About Managing Microsoft Windows Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662903). When a Microsoft server is the primary server of a zone, the zone supports only standard DNS resource records. It does not support the Infoblox record types host records, bulk host records, and shared record groups. You cannot add any of these records to the zone nor assign a DNS zone with these records to a Microsoft server as the primary server.  
In the Add Grid Primary panel, do the following to assign a Microsoft primary server:

1. Complete the following:
   
   - Select **Use** **this** **set** **of** **name** **servers**.
   - Click the *Add* icon and select **Microsoft** **Primary**.
2. In the *Add* *Microsoft* *Primary* panel, do the following, and then click **Add** to add the Microsoft primary server to the list of name servers for the zone:
   
   - If no server is displayed, click **Select** **Server** to specify a Microsoft server. When there are multiple servers, Grid Manager displays the *Server* *Selector* dialog box from which you can select a Microsoft server. Grid Manager lists Microsoft servers that are managed in read/write mode. It does not include Microsoft servers managed in read-only mode.
   - **Information** **to** **create** **NS** **record:** Grid Manager automatically creates the NS record. After you select a server, Grid Manager populates the **Name** and **IP** **Address** fields. Grid Manager uses this information when it creates the NS record, unless you select **Stealth**. You can specify a different FQDN or IP address for the NS record; for example, for a multihomed server.
   - Store the zone in Active Directory (AD Integrated Zone): This is enabled and selected by default only if the Microsoft server is a domain controller. Note that you can enable Active Directory integration only after the Microsoft server has been synchronized at least once because its AD ability is not known before the synchronization. This is disabled when the Microsoft server is not a domain controller.
   - **Stealth:** Select this option to hide the NS record for the primary name server from DNS queries. Grid Manager does not create an NS record for the primary name server in the zone data. Clear this option to display the NS record for the primary name server in responses to queries. Note that this option is not available for AD-integrated zones.
