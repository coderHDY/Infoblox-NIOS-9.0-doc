---
title: "Adding Forward/Stub Server Name Server Groups"
source: "/space/nios90/1340801675"
pageId: "1340801675"
---
To add a forward/stub server NS group:

1. From the **Data** **Management** -&gt; **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -&gt; Add icon -&gt; **Forward/Stub** **Server**.
   - From the Toolbar, click the Add icon -&gt; **Group** -&gt; **Forward/Stub** **Server**.
2. In the *Forward/Stub* *Server* *Name* *Server* *Group* wizard, complete the following:
   
   - **Name**: Enter a name that provides a meaningful reference for this set of external name servers for the forward and stub zones.
   - **Name** **Servers**: Click the Add icon and specify the following for every external name server that you are adding to the forward/stub server NS group:
     
     - **Name**: The name of the external name server.
     - **IP** **Address**: The IP address of the external name server.
   - **Comment**: Optionally, enter additional information about the forward/stub server NS group.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

A newly created forward/stub server NS group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/viewing-name-server-groups). You can then associate it with forward zones as default forwarders and as primary servers for stub zones.
