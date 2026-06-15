---
title: "Controlling AAAA Records for IPv4 Clients"
source: "/space/nios90/280763620"
pageId: "280763620"
---
By default, the NIOS appliance returns resource records, including AAAA records, in response to DNS queries. You can enable the appliance to filter and remove AAAA records in response to queries received over IPv4 for each name server and DNS view. This feature is useful in a configuration where a client issues a DNS query over IPv4 when it does not have the ability to use an IPv6 address. When a response returns an IPv6 address however, the client that sends the query over an IPv4 transport would lose connectivity. By enabling AAAA filtering, you can configure your name server not to return AAAA records to clients that request queries over an IPv4 transport. Presumably, these clients then re-query the name server for A records for the same domain name.   
Depending on your configuration, the appliance can remove AAAA records for all queries over IPv4 (even when DNSSEC is enabled), or only for queries that are not DNSSEC-signed. You can also create a list of IPv4 networks and addresses to which the appliance applies AAAA filtering and vice versa. You can enable and configure AAAA filtering for the Grid, members, and DNS views.  
To control whether you want the appliance to return AAAA records for queries sent over IPv4, you must first enable AAAA filtering, and then create a list of IPv4 networks and addresses that allow or deny AAAA filtering from the appliance, as described in  Enabling AAAA Filtering.

> **warning**
>
> ### Note
> 
> When AAAA filtering is enabled, it does not prevent answers for AAAA queries in all cases. If there are both A and AAAA records for a given name, then AAAA will be filtered. If an AAAA record exists and there is no corresponding A record for a given name, then the AAAA will be returned to the client regardless of the filter. That is, AAAA filtering filters only when both record types are available for a given query.

# Enabling AAAA Filtering

To enable AAAA filtering and configure a list of IPv4 networks and addresses:

1. **Grid**: From the **Data Management **tab, select the **DNS** tab, expand the Toolbar and click** Grid DNS Properties**.   
   **Member**: From the** Data Management** tab, select the **DNS** tab > **Members** tab -> member checkbox -> Edit icon.   
   **DNS View**: From the **Data Management** tab, click the **DNS** tab -> **Zones** tab> *dns_view* checkbox -> Edit icon.  
   To override Grid settings, click **Override** and complete the appropriate fields.
2. In the editor, click the **Queries** tab and complete the following:  
   **Enable** **AAAA** **Filtering:** From the drop-down list, select one of the following:
   
   - **Break** **DNSSEC**: Select this to remove AAAA records in response to queries sent over IPv4, including those that are signed by DNSSEC.
     
     Note: Be aware that when you select this option, DNSSEC configuration will no longer be in effect.
   - **No**: Select this to disable AAAA filtering for queries over IPv4. When you select this, the appliance returns AAAA records in response to all DNS queries issued over IPv4. This is selected by default.
   - **Yes**: Select this to enable AAAA filtering for queries over IPv4. When you select this, the appliance removes AAAA records in response to all DNS queries issued over IPv4, except for DNSSEC-signed requests.
3. In the *AAAA Filtering* section, select one of the following:
   
   - **None**: Select this if you want to configure access control for AAAA filtering. The appliance allows all clients to issue DNS queries over IPv4 when they do not have the ability to use IPv6 addresses. This is selected by default.
   - **Named** **ACL**: Select this and click **Select** **Named** **ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this, the appliance allows clients that have the **Allow** permission can filter AAAA responses. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv4** **Address**: Select this to add an IPv4 address. Click the **Value** field and enter the IP address of the client. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list. When you select **Allow**, the appliance applies AAAA filtering and removes AAAA records in response to queries sent by the specified IPv4 address. When you select **Deny**, the appliance does not apply AAAA filtering and thus returns AAAA records.
     - **IPv4 ** **Network**: In the **Add ** **IPv4 ** **Network** panel, complete the following, and then click **Add** to add the network to the list:
     - **Address**: Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
     - **Permission**: Select **Allow** or **Deny** from the drop-down list.
   - **Any** **Address/Network**: Select to allow or deny AAAA filtering from any IP addresses.  
     After you have added access control entries, you can do the following:
   - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
   - Reorder the list of ACEs using the up and down arrows next to the table.
   - Select an ACE and click the Edit icon to modify the entry.
   - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.

> **warning**
>
> ### Note
> 
> If you do not enter any addresses or networks in the table, the appliance applies AAAA filtering to all IPv4 clients. In other words, the appliance removes AAAA records in responses to all queries sent over IPv4.
