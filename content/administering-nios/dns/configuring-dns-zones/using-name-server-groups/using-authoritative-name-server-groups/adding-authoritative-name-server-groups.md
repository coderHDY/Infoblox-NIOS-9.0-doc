---
title: "Adding Authoritative Name Server Groups"
source: "/space/nios90/1340474164"
pageId: "1340474164"
---
To add an authoritative name server group:

1. From the **Data** **Management** -> **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -> Add icon -> **Group** -> **Authoritative**.
   - From the Toolbar, click the Add icon -> **Group** -> **Authoritative.**
2. In the *Add* *Name* *Server* *Group* wizard, do the following:
   
   - **Name:** Type a name that provides a meaningful reference for this set of servers.
   - **Name Servers:** Click the Add icon and select one of the following options for every server that you are adding to the NS group:
     
     - **Grid Primary:** Choose this option to select a primary name server or multiple primary servers for the zone. See [*Specifying Grid Primary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
     - **Grid Secondary:** Choose this option to select a Grid member as a secondary server for the zone. See [*Adding Grid Secondaries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
     - **External Primary:** Choose this option if the appliance is in a Grid and you want to specify a primary server outside the Grid ("external" to the Grid). See [*Specifying External Primary Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
     - **External Secondary**: Choose this option if the appliance is in a Grid and you want to specify a secondary server outside the Grid ("external" to the Grid), or if the appliance is deployed independently from a Grid. See [*Specifying External Secondaries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
   - **Default** **NS** **Group:** Select this to specify this authoritative name server group as the default.
   - **Comment:** Optionally, enter additional information about the authoritative NS group.

1. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

A newly created authoritative name server group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762871). You can then associate it with forward-mapping and reverse-mapping authoritative zones.
