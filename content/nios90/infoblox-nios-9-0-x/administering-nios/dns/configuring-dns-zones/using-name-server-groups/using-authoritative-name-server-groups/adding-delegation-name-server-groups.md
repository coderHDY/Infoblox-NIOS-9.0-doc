---
title: "Adding Delegation Name Server Groups"
source: "/space/nios90/1340539520"
pageId: "1340539520"
---
To add a delegation name server group:

1. From the **Data** **Management** -&gt; **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -&gt; Add icon -&gt; **Delegation**.
   - From the Toolbar, click the Add icon -&gt; **Group** -&gt; **Delegation**.
2. In the *Add* *Delegation* *Name* *Server* *Group* wizard, complete the following:
   
   - **Name:** Enter the name of the delegation NS group.
   - **Comment:** Optionally, enter additional information about the delegation NS group.
3. Click **Next** to define the external name servers for the delegation NS group.
4. In the *Name* *Server* panel, click the Add icon and specify the following for every server that you are adding to the delegation NS group:
   
   - **Name:** Enter the name of the delegated name server.
   - **Address:** Enter the IP address of the delegated name server.
5. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).  
   A newly created delegation NS group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/viewing-name-server-groups). You can then associate it with delegated zones.

> **warning**
>
> ### Note
> 
> You will not be able to add a delegated name server group if DNS synchronization is enabled on any Microsoft server configured in NIOS.
