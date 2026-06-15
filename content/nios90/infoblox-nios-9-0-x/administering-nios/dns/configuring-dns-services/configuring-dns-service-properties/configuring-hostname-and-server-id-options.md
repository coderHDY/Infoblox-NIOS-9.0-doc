---
title: "Configuring Hostname and Server ID Options"
source: "/space/nios90/281247933"
pageId: "281247933"
---
When you configure DNS anycast, multiple DNS name servers share a single IP address. To identify which DNS name server is answering queries, you can configure the hostname and server ID options so the appliance returns the hostname of the DNS name server that is currently answering queries. By default, the hostname and server ID options are disabled on the NIOS appliance. You can configure the hostname bind directive and server-id directive options at the Grid level and override them at the member level. The appliance returns the hostname of the DNS name server that is currently answering queries when a client queries for the hostname.bind or the id.server with record type as TXT and class CHAOS, as follows:

` dig @&lt;IP&gt; hostname.bind txt CH`   
`dig @&lt;IP&gt; id.server txt CH`

To secure the identity of the internet-facing DNS servers, you can configure the hostname and server ID options for  
specific Grid members that are internet-facing to return a user defined value instead of the real hostname. Alternatively, you can disable the hostname and server ID options at the Grid level and configure them only for those members that are not internet-facing.  
To configure the hostname and server ID options:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, and then select **Grid** **DNS** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the *Grid* *DNS* *Properties* or the *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode** if the editor is in the basic mode.
3. Click the **Advanced** subtab of the **General** tab and then complete the following:
   
   - **Hostname** **bind** **directive**: Select either **Hostname** or **None** from the drop-down list. The default is **None**. If you select **Hostname**, the appliance returns the hostname of the DNS name server that is currently answering queries. Selecting **None** disables the Hostname bind directive option.  
     In the *Member* *DNS* *Properties* editor, you can also select **User** **defined** and specify any hostname of your choice. The appliance returns the specified hostname instead of the real hostname of the DNS name server that is currently answering queries.  
     To override an inherited setting from the Grid, click **Override**. To retain the same setting as the Grid, click **Inherit**.
   - **Server-id** **directive**: Select either **Hostname** or **None** from the drop-down list. The default is **None**. If you select **Hostname**, the appliance returns the hostname of the DNS name server that is currently answering queries, when a client queries to identify the server ID of the name server that is answering queries.  
     Selecting **None** disables the Server-id directive option.  
     In the *Member* *DNS* *Properties* editor, you can also select **User** **defined** and specify a value of your choice. The appliance returns the specified value when a client queries to identify the server ID of the DNS name server that is answering queries.  
     To override an inherited setting from the Grid, click **Override**. To retain the same setting as the Grid, click **Inherit**.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
