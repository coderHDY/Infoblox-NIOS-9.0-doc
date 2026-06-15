---
title: "Controlling DNS Queries"
source: "/space/nios90/280405942"
pageId: "280405942"
---
By default, the NIOS appliance responds to DNS queries from any IP address. You can create a list of queriers to which the appliance is allowed to respond; restricting it to specific networks, IP addresses, and remote servers that present specified TSIG (transaction signature) keys. When using TSIG keys, it is important that the appliances and servers involved with the authentication procedure use NTP (Network Time Protocol) for their time settings (see [*Using NTP for Time Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319488612)).  
In addition, you can also configure the appliance to respond to recursive queries. A recursive query requires the appliance to return requested DNS data, or locate the data through queries to other servers. Recursion is disabled by default. If you enable this feature, you can also create a list of allowed recursive queries. For information about allowing recursion, refer to [*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882).  
You can create a list of allowed queriers for the Grid and for individual Grid members.

# Specifying Queries

To configure a list of allowed queriers for the Grid or for a member:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member**: From the **Data Management** tab, select the **DNS **tab and click the **Members **tab -> *member* checkbox -> Edit icon.  
   To override an inherited property, click **Override **next to it and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**, select the **Queries** tab.
3. In the Allow queries from section, select one of the following:
   
   - **Any**: Select this if you do not want to configure access control for DNS queries. The appliance allows queries from all clients. This is selected by default.
   - **Named** **ACL:** Select this and click **Select** **Named** **ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this, the appliance allows clients that have the **Allow** permission to send and receive DNS queries. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows:
     
     - **IPv4** **Address** and **IPv6** **Address:** Select this to add an IPv4 address or IPv6 address. Click the **Value** field and enter the IP address of the remote querier. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4 ** **Network:** In the **Add ** **IPv4 ** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **IPv6** **Network:** In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **TSIG** **Key:** In the **Add** **TSIG** **Key** panel, complete the following, and then click **Add** to add the TSIG key to the list:
       
       - **Key** **name:** Enter a meaningful name for the key, such as a zone name or the name of the remote name server. This name must match the name of the same TSIG key on other name servers.
       - **Key** **Algorithm:** Select either **HMAC-MD5** or **HMAC-SHA256.**
       - **Key** **Data:** To use an existing TSIG key, type or paste the key in the **Key** **Data** field. Alternatively, you can select the key algorithm, select the key length from the **Generate** **Key** **Data** drop down list, and then click **Generate** **Key** **Data** to create a new key.
     - **Any** **Address/Network:** Select to allow or deny queries from any IP addresses.  
       After you have added access control entries, you can do the following:
       
       - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
       - Reorder the list of ACEs using the up and down arrows next to the table.
       - Select an ACE and click the Edit icon to modify the entry.
       - Select an ACE or multiple ACEs and click the Delete icon to delete the entries.
4. Save the configuration.
