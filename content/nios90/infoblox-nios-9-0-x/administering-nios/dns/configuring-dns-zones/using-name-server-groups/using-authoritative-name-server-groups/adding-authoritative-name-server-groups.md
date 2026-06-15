---
title: "Adding Authoritative Name Server Groups"
source: "/space/nios90/1340474164"
pageId: "1340474164"
---
To add an authoritative name server group:

1. From the **Data** **Management** -&gt; **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -&gt; Add icon -&gt; **Group** -&gt; **Authoritative**.
   - From the Toolbar, click the Add icon -&gt; **Group** -&gt; **Authoritative.**
2. In the *Add* *Name* *Server* *Group* wizard, do the following:
   
   - **Name:** Type a name that provides a meaningful reference for this set of servers.
   - **Name Servers:** Click the Add icon and select one of the following options for every server that you are adding to the NS group:
     
     - **Grid Primary:** Choose this option to select a primary name server or multiple primary servers for the zone. See [*Specifying Grid Primary Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers).
     - **Grid Secondary:** Choose this option to select a Grid member as a secondary server for the zone. See [*Adding Grid Secondaries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers).
     - **External Primary:** Choose this option if the appliance is in a Grid and you want to specify a primary server outside the Grid ("external" to the Grid). See [*Specifying External Primary Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers).
     - **External Secondary**: Choose this option if the appliance is in a Grid and you want to specify a secondary server outside the Grid ("external" to the Grid), or if the appliance is deployed independently from a Grid. See [*Specifying External Secondaries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers).
   - **Default** **NS** **Group:** Select this to specify this authoritative name server group as the default.
   - **Comment:** Optionally, enter additional information about the authoritative NS group.

1. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

A newly created authoritative name server group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/viewing-name-server-groups). You can then associate it with forward-mapping and reverse-mapping authoritative zones.
