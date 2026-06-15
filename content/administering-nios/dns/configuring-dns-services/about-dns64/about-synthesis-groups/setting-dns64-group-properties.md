---
title: "Setting DNS64 Group Properties"
source: "/space/nios90/1420099718"
pageId: "1420099718"
---
After you create a DNS64 synthesis group, you can specify the following:

- The IPv4 and IPv6 DNS clients and networks to which the DNS server is allowed to send synthesized AAAA records with the specified IPv6 prefix.
- The IPv4 addresses and networks for which the DNS server can synthesize AAAA records with the specified prefix.
- IPv6 addresses or prefix ranges that cannot be used by IPv6 only hosts, such as IP addresses in the ::ffff:0:0/96 network. When the DNS server retrieves an AAAA record that contains an IPv6 address that matches an excluded address, it does not return the AAAA record. Instead, it synthesizes an AAAA record from the A record.  
  Note that a DNS server synthesizes the AAAA record of a host that has both A and AAAA records when all the IPv6 addresses in the AAAA records match the excluded addresses. If the host has multiple AAAA records and some of them contain excluded IPv6 addresses, then the server returns the remaining AAAA records.

You can add individual access control entries (ACEs) or use a named access control list (ACL) to define these clients. For information about how to define named ACLs, see [*Defining Named ACLs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667593).  
To configure DNS64 group properties:

1. From the **Data** ** Management** tab, select the **DNS** tab -> **DNS64** **Groups** tab -> *group* checkbox -> Edit icon.
2. In the **General** tab of the *DNS64* * Synthesis* * Groups* editor, you can do the following:
   
   - Modify the name, prefix or comment.
   - Select the **Disabled** checkbox, if you want to disable the group at this time.
   - Select the **Apply ** **to ** **queries ** **requesting** ** DNSSEC** ** records** checkbox to have the DNS server generate synthesized AAAA records for DNS64 synthesis groups that request DNSSEC data.
   
   **Perform** ** DNS64** ** synthesis** ** for ** **these ** **clients**: Specify IPv4 and IPv6 hosts and networks to which Infoblox DNS servers can send synthesized AAAA records. The default is to allow any IPv4 and IPv6 address and network. Select one of the following:
   
   - **None**: Select this if you do not want to define specific addresses or networks to which the appliance sends synthesized AAAA records. When you select this, the appliance sends synthesized AAAA records to all clients. This is selected by default.
   - **Named** ** ACL:** Select this and click **Select** ** Named** ** ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this option, the appliance sends synthesized AAAA records to the clients that have the **Allow** permission in the list. You can click **Clear** to remove the selected named ACL.
   - **Set ** **of ** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv4** **Address** and **IPv6** **Address:** Select this to add an IPv4 address or IPv6 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4** **Network:** In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **IPv6** **Network:** In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **Any** ** Address/Network:** Select this to allow or deny any IP addresses to which the appliance sends synthesized AAAA records.
   
   **Mapped** ** IPv4 ** **Addresses:** Specify IPv4 addresses and networks for which the DNS server synthesizes AAAA records. The default is to allow the DNS server to synthesize AAAA records for any IPv4 address in any network. Select one of the following1:
   
   - **None**: Select this if you do not want to define specific IPv4 addresses or networks for which the DNS server synthesizes AAAA records. The appliance synthesizes AAAA records for all IPv4 clients. This is selected by default.
   - **Named** ** ACL:** Select this and click **Select** ** Named** ** ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this option, the appliance synthesizes AAAA records for the clients that have the **Allow** permission in the list. You can click **Clear** to remove the selected named ACL.
   - **Set** ** of** ** ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
   - **IPv4** **Address:** Select this to add an IPv4 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
   - **IPv4** **Network:** In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
     
     - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
     - **Permission:** Select **Allow** or **Deny** from the drop-down list.
   - **Any ** **Address/Network:** Select this to allow or deny any IPv4 addresses for which the appliance synthesizes AAAA records.  
     After you have added access control entries, you can do the following:
     
     - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
     - Reorder the list of ACEs using the up and down arrows next to the table.
     - Select an ACE and click the Edit icon to modify the entry.
     - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
   
   **Exclude** **IPv6** **addresses:** Specify IPv6 addresses of AAAA records that the appliance treats as nonexistent. The DNS server does not return the AAAA record of an address from this list. Instead, it synthesizes an AAAA record from the A record.
   
   - **None**: Select this if you do not want to define specific IPv6 addresses or networks of AAAA records that the appliance treats as nonexistent. The appliance treats all IPv6 addresses as nonexistent. This is selected by default.
   - **Named** ** ACL:** Select this and click **Select** ** Named** ** ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this option, the appliance synthesizes AAAA records from A records for the clients that have the **Allow** permission in the list. You can click **Clear** to remove the selected named ACL.
   - **Set** ** of ** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv6** **Address:** Select this to add an IPv6 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv6** **Network:** In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **Any ** **Address/Network:** Select this to allow or deny any IP addresses of AAAA records that the appliance treats as nonexistent.  
       After you have added access control entries, you can do the following:
     - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
     - Reorder the list of ACEs using the up and down arrows next to the table.
     - Select an ACE and click the Edit icon to modify the entry.
     - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
   - **Extensible** **Attributes**: You can modify the attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)
   - **Permissions**: This tab displays if you logged in as a superuser. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)
3. Save the configuration and click **Restart** if it appears at the top of the screen.
