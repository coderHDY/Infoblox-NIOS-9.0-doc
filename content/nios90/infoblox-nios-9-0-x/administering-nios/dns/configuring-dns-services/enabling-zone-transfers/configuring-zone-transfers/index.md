---
title: "Configuring Zone Transfers"
source: "/space/nios90/1394933795"
pageId: "1394933795"
---
To configure zone transfers, you identify the servers to which zone data is transferred and optionally, servers to which data must not be transferred. For example, you can allow transfers to a network, but not to a specific server in the network.

You can specify a different set of servers for specific Grid members and zones. For example, if certain Grid members are primary servers for a zone, then you can specify the secondary servers to which that member is allowed to transfer zones.

You can also enable the appliance to add all IPv4 and IPv6 addresses for which you allow zone transfers to the also-notify statement for each authoritative zone that is served by a Grid member. The also-notify statement defines a list of addresses that receive notifications about zone updates, in addition to the IP addresses listed in the NS records for the zone. Use this feature to configure a large number of external secondary servers, instead of putting them in stealth mode.

To configure zone transfer properties:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **Zone:** From the **Data Management** tab, select the **DNS** tab, click the **Zones** tab -&gt; **DNS View** column -&gt; select the *zone_name* checkbox, and click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the editor, click **Toggle** **Advanced** **Mode**, select the **Zone** **Transfers** tab.
3. In the *Allow zone transfers to* section, select one of the following:
   
   - **None**: Select this to deny all clients for DNS zone transfers. This is selected by default.
   - **Named** **ACL**: Select this and click **Select** **Named** **ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this, the appliance allows remote name servers that have the **Allow** permission to send and receive zone transfer data. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv4** **Address** and **IPv6** **Address**: Select this to add an IPv4 address or IPv6 address. Click the **Value** field and enter the IP address of the remote name server. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4** **Network**: In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address**: Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission**: Select **Allow** or **Deny** from the drop-down list.
     - **IPv6 Network**: In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address**: Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission**: Select **Allow** or **Deny** from the drop-down list.
     - **TSIG Key**: In the **Add ** **TSIG ** **Key** panel, complete the following, and then click **Add** to add the TSIG key to the list:
       
       - **Key** **name:** Enter a meaningful name for the key, such as a zone name or the name of the remote name server with which the local server authenticates zone transfer requests and replies. This name must match the name of the same TSIG key on other name servers that use it to authenticate zone transfers with the local server.
       - **Key** **Algorithm:** Select either **HMAC-MD5** or **HMAC-SHA256.**
       - **Key** **Data:** To use an existing TSIG key, type or paste the key in the **Key** **Data** field. Alternatively, you can select the key algorithm, select the key length from the **Generate ** **Key** ** Data** drop down list, and then click **Generate** **Key** **Data** to create a new key.
       - **DNSone** **2.x** **TSIG** **Key**: Select this when the other name server is a NIOS appliance running DNS One 2.x code. The appliance automatically populate the value of the key in the **Value** field. The **Permission** column displays **Allow** by default. You cannot change the default permission.
       - **Any** **Address/Network**: Select to allow or deny the local appliance to send zone transfers to any IP address.  
         After you have added access control entries, you can do the following:
         
         - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
         - Reorder the list of ACEs using the up and down arrows next to the table.
         - Select an ACE and click the Edit icon to modify the entry.
         - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
4. Optionally, select the **Add** **allowed** **IP** **addresses** **to** **also-notify** checkbox to add all IPv4 and IPv6 addresses listed in the "Allow zone transfers to" table to the also-notify statement for each authoritative zone served by a Grid member. When you enable this, all external secondary servers that are not defined for the zone and are allowed zone transfers will receive notifications about zone updates, in addition to name servers assigned to the zone. Infoblox recommends that you do not configure a large number of external secondary servers in stealth mode. To ensure that these secondary servers receive notifications about zone updates, add their addresses to the "Allow zone transfers to" table and grant them the "Allow" permission, and then select this checkbox.
   
   Note that the appliance includes only IPv4 and IPv6 addresses. It does not include network addresses, TSIG keys, and denied addresses. When you configure a named ACL, all allowed IPv4 and IPv6 addresses in the named ACL are added to the also-notify statement.
5. Optionally, you can:
   
   - Modify an item on the list by selecting it and clicking the Edit icon.
   - Remove an item from the list by selecting it and clicking the Delete icon.
   - Move an item up or down the list. Select it and drag it to its new position, or click the up or down arrow.
6. Save the configuration and click **Restart** if it appears at the top of the screen.
