---
title: "Configuring a DNS Blackhole List"
source: "/space/nios90/280405780"
pageId: "280405780"
---
The DNS blackhole feature provides the ability to specify IP and network addresses of network devices that you do not want to use in the DNS resolution process. The DNS blackhole feature is disabled by default. When enabled, the NIOS appliance does not accept queries from IP addresses in the blackhole list and does not use them to resolve queries. For example, you can add the IP addresses of name servers that are using DNS incorrectly to prevent the NIOS appliance from accepting their queries and from using them as resolvers. You can also use this feature to fix temporary network issues. For example, you can add the IP addresses of delegated servers, configured forwarders, and DHCP servers that have temporary DNS-related issues.  
You can create a DNS blackhole list for the entire Grid or create a separate list for each Grid member. For example, if one of your Grid members is behind a firewall, you might need to configure a different DNS blackhole list for this member because the clients that can access it might be mapped differently.  
The appliance accepts queries from addresses and networks that are excluded from the blackhole list and uses these addresses and networks as resolvers. To add an IP address to the blackhole list, enter it and set its permission to **Include**. You can also add an IP address to the blackhole list and set its permission to **Exclude** so its not in the blackhole list, effectively allowing the NIOS appliance to respond to queries from that address and to use it as a resolver.  
When you add a network to a DNS blackhole list, all the IP addresses in the network are not used in the DNS resolution process. If you want to allow some IP addresses within the network, add these addresses to the list and set their permission to "Exclude." Ensure that you list these IP addresses before the network address because the appliance applies permissions to the addresses in the order they are listed. For example, when you add the network 10.10.0.0/24 to a DNS blackhole list, all 256 IP addresses in the network are put on the blackhole list. To allow DNS traffic to the IP addresses 10.10.0.55 and 10.10.0.88, add these two addresses before the network address in the DNS blackhole list, and then set their permissions to **Exclude**.  
You can define ACEs or a named ACL to determine the IPv4 and IPv6 addresses and networks that you want to include in or exclude from a blackhole list.

# Defining a DNS Blackhole List

To enable the DNS blackhole feature and configure a DNS blackhole list for a Grid or member:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the editor, click the **Blackhole** tab and complete the following:  
   **Enable** **Blackhole:** Select this checkbox to enable the DNS blackhole feature. This is disabled by default.
3. Select one of the following:
   
   - **Any**: Select this if you want to configure a blackhole list. The appliance will allow all clients to resolve DNS queries. This is selected by default.
   - **Named** **ACL:** Select this and click **Select** **Named** **ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this, the appliance uses clients that have the **Exclude** permission in the DNS resolution process. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv4** **Address** and **IPv6** **Address:** Select this to add an IPv4 address or IPv6 address. Click the **Value** field and enter the IP address of the client. The **Permission** column displays **Include** by default. You can change it to **Exclude** by clicking the field and selecting **Exclude** from the drop-down list. When you select **Include**, the appliance adds the IP address to the blackhole list and does not allow DNS queries and DNS resolution for this address. When you select **Exclude**, the appliance excludes the address from the blackhole list and allows DNS queries and resolution for the address.
     - **IPv4** **Network:** In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **IPv6** **Network:** In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **Any** **Address/Network:** Select to include or exclude any IP addresses and networks for the DNS resolution process.  
       After you have added access control entries, you can do the following:
       
       - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
       - Reorder the list of ACEs using the up and down arrows next to the table.
       - Select an ACE and click the Edit icon to modify the entry.
       - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
4. Save the configuration.
