---
title: "About Root Name Servers"
source: "/space/nios90/280405807"
pageId: "280405807"
---
Root name servers contain the root zone file which lists the names and IP addresses of the authoritative name servers for each top-level zone. When a root name server receives a query for a domain name, it provides at least the names and addresses of the name servers that are authoritative for the top-level zone of the domain name.  
You can configure the NIOS appliance to use Internet root name servers or custom root name servers. If you enable recursive queries and the appliance receives a recursive query that it cannot resolve locally, then it queries specified forwarders (if any) and then queries any root name servers that you configure. If you do not specify internal root name servers and the appliance can access the Internet, it queries the Internet root name servers.  
You can specify root name servers for the Grid, individual members, and user-defined DNS views. You can specify root name servers for all DNS views except the default view. The default view uses either the member level root name servers (if specified) or the Grid level root name servers.  
Every Grid member has a default view. If you want to specify root name servers for a default view, override the Grid root name server setting at the member level and the default view can use the member-level setting.

# Specifying Root Name Servers

To specify root name servers for a Grid, member, or DNS view:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **DNS** **View:** From the **Data** **Management** tab, select the **DNS** tab, click the **Zones** tab-&gt; *dns_view* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* and *Member* *DNS* *Properties* editors, you must click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click **Root** **Name** **Servers**.
4. Select one of the following options:
   
   - Use Internet root name servers: This option is selected by default.
   - **Use** **custom** **root** **name** **servers**:
     
     - Click the Add icon and enter the following information when a new row appears:
       
       - **Name:** Enter a name for the root name server.
       - **Address:** Enter the IP address of the root name server. The feature supports IPv4 or IPv6 values.
     - Optionally, you can perform the following:
       
       - Select a server from the custom root name servers list to modify its information.
       - Select a server from the custom root name servers list, and then click the Delete icon.
     - *Member DNS Properties* editor only: You can choose whether the DNS views should inherit the custom root name server from the member. Select one of the following:
       
       - **Applies to default DNS view only**: Select this option to apply the root name server only to the default DNS view on the selected member. This option is selected by default.
       - **Applies to all DNS Views on this member**: Select this option to apply the root name server for all DNS views on the selected member.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
