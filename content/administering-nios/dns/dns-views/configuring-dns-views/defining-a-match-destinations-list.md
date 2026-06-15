---
title: "Defining a Match Destinations List"
source: "/space/nios90/1415939017"
pageId: "1415939017"
---
You can define a Match Destinations list that identifies destination addresses and TSIG keys that are allowed access to a DNS view. When the NIOS appliance receives a DNS request from a client, it tries to match the destination address or TSIG key in the incoming message with its Match Destination list to determine which DNS view, if any, the client can access. After the appliance determines that a host can access a DNS view, it checks the zone level settings to determine whether it can provide the service that the host is requesting for that zone.  
You can define a Match Destination list when you edit an existing DNS view as follows:

1. From the **Data Management **tab, click the **DNS **tab > **Zones **tab> dns_view checkbox -> Edit icon. Or, if there is only one DNS view, for example the predefined default view, you can just click the Edit icon beside it.
2. In the *DNS* *View* editor, select the **Match** **Destinations** tab, and select one of the following:
   
   - **None**: Select this if you want to configure a Match Destinations list. The appliance allows all destination addresses to access the DNS view. This is selected by default.
   - **Named** **ACL:** Select this and click **Select** **Named** **ACL** to select a named ACL. Grid Manager displays the *Named* *ACLs* Selector. Select the named ACL you want to use. If you have only one named ACL, Grid Manager automatically displays the named ACL. When you select this option, the appliance allows access to the DNS view from the destination addresses that have the **Allow** permission in the named ACL. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual ACEs. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding, as follows.
     
     - **IPv4** **Address** and **IPv6** **Address:** Select this to add an IPv4 address or IPv6 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Allow** by default. You can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4** **Network:** In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **IPv6** **Network:** In the **Add** **IPv6** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission:** Select **Allow** or **Deny** from the drop-down list.
     - **TSIG** ** Key:** In the **Add** **TSIG** **Key** panel, complete the following, and then click **Add** to add the TSIG key to the list:
       
       - **Key** ** name:** Enter a meaningful name for the key, such as a zone name or the name of the client or Grid member. This name must match the name of the same TSIG key on other name servers.
       - **Key ** **Algorithm:** Select either **HMAC-MD5** or **HMAC-SHA256.**
       - **Key** ** Data:** To use an existing TSIG key, type or paste the key in the **Key** **Data** field. Alternatively, you can select the key algorithm, select the key length from the **Generate ** **Key ** **Data** drop down list, and then click **Generate ** **Key ** **Data** to create a new key.
     - **DNSone** **2.x** **TSIG** **Key**: Select this when the other name server is a NIOS appliance running DNS One 2.x code. The appliance automatically populates the value of the key in the **Value** field. The **Permission** column displays **Allow** by default. You cannot change the default permission.
     - **Any** ** Address/Network:** Select this to allow or deny any IP addresses to access the DNS view.  
       After you have added access control entries, you can do the following:
       
       - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
       - Reorder the list of ACEs using the up and down arrows next to the table.
       - Select an ACE and click the Edit icon to modify the entry.
       - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
3. Save the configuration and click **Restart** if it appears at the top of the screen. You can also click the Schedule icon at the top of the editor to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone.
