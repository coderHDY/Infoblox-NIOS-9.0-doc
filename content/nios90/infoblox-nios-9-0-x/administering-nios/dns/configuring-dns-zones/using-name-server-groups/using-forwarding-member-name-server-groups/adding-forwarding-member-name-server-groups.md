---
title: "Adding Forwarding Member Name Server Groups"
source: "/space/nios90/1340736130"
pageId: "1340736130"
---
To add a forwarding member NS group:

1. From the **Data** **Management** -&gt; **DNS** tab, do one of the following:
   
   - Click the **Name** **Server** **Groups** tab -&gt; Add icon -&gt; **Forwarding** **Member**.
   - From the Toolbar, click the Add icon -&gt; **Group** -&gt; **Forwarding** **Member**.
2. In the *Forwarding* *Member* *Name* *Server* *Group* wizard, complete the following:
   
   - **Name:** Enter the name of the forwarding member NS group.
   - **Name Servers:** In this section, you can add the Grid members to the forwarding member NS group and use the default forwarders or you can override default forwarders and configure custom forwarders. Click the Add icon and select a Grid member from the *MemberSelector* dialog box.  
     The following is displayed in the table for each member:
     
     - **Name:** The name of the Grid member.
     - **IPv4 Address:** The IPv4 address of the Grid member.
     - **IPv6 Address:** The IPv6 address of the Grid member.
     - **Override Default Forwarders**: Displays **Yes** when you override default forwarders. Otherwise, this field displays **No**.
     - **Custom Forwarders**: Displays the IP address of the custom forwarders. Otherwise, this field is blank.
   - **Comment:** Optionally, enter additional information about the forwarding member NS group.
3. Save the configuration or click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

A newly created forwarding member NS group appears in the **Name** **Server** **Groups** tab. For information about viewing the name server groups, see [*Viewing Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/viewing-name-server-groups). You can then associate it with forward forward-mapping zones and forward reverse-mapping zones.
