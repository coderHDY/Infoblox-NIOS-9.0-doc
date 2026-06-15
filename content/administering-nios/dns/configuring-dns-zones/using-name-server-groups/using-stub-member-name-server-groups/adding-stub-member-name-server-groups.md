---
title: "Adding Stub Member Name Server Groups"
source: "/space/nios90/1340736202"
pageId: "1340736202"
---
To add a stub member NS group:

1. From the **Data** **Management** -> **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -> Add icon -> **Stub** **Member**.
   - From the Toolbar, click the Add icon -> **Group** -> **Stub** **Member**.
2. In the *Stub* *Member* *Name* *Server* *Group* wizard, complete the following:
   
   - **Name:** Enter the name of the stub member NS group.
   - **Name Servers:** In this section, you can add the Grid members to the stub member NS group. Click the Add icon and select a Grid member from the *MemberSelector* dialog box.  
     The following is displayed in the table for each member:
     
     - **Name:** The name of the Grid member.
     - **IPv4 Address:** The IPv4 address of the Grid member.
     - **IPv6 Address:** The IPv6 address of the Grid member.
   - **Comment:** Optionally, enter additional information about the stub member NS group.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.*

A newly created stub member NS group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762871). You can then associate it with stub  
forward-mapping zones and stub reverse-mapping zones.
