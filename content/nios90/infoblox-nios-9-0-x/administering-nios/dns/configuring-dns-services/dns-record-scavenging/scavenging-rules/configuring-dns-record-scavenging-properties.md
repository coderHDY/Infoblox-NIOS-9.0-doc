---
title: "Configuring DNS Record Scavenging Properties"
source: "/space/nios90/1393560333"
pageId: "1393560333"
---
You can configure the DNS record scavenging properties at the Grid, DNS view, or DNS zone level. According to the NIOS inheritance pattern for object properties, the scavenging properties configured at a given level are inherited by the level below, unless overridden.

To configure the DNS record scavenging properties, complete the following:

1. **Grid**: From the **Data** ** Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **DNS** ** view**: From the **Data** ** Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; dns_view checkbox -&gt; Edit icon.  
   **DNS** ** zone**: From the **Data ** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; click a DNS view -&gt; zone checkbox -&gt; Edit icon.
2. If the properties editor is in basic mode, click **Toggle ** **Advanced** ** Mode**.
3. Click **DNS** ** Scavenging**.
4. **Enable** ** last** ** queried** ** time** ** monitoring** ** for** ** resource** ** records**: Select this if you are going to use the Last Queried Time rule. This setting enables monitoring the time when the resource record was last queried for its DNS data. For more information on DNS queries monitoring for resource records, see [*Monitoring DNS Querie*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/monitoring-dns-queries)[s](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/monitoring-dns-queries).
5. **Enable** ** last ** **queried** ** time ** **monitoring** ** for ** **zones**: This setting enables monitoring the time when the zone, or at least a single record in it, was last queried for its DNS data. The data resulting from zone last queries time monitoring is displayed in the zones viewer (**Data Management** -&gt; **DNS** -&gt; **Zones** -&gt; click a* DNS view *to open zones list).
   
   Note that enabling monitoring for a zone does not enable monitoring for child zones.
6. You can configure the set of ACLs (Access Control Lists) to filter clients on DNS queries from updating the last-queried timestamp, under **Prevent the following ACLs or ACEs from updating the last queried timestamp**. To configure the ACLs, you should select either **Enable last queried time monitoring for resource records** or **Enable last queried time monitoring for zones **option, these options are disabled by default.
7. Select one of the following:
   
   - **None**: Select this option if you do not want to configure any access control for updating the last queried time stamp. When you select this option, NIOS will allow updates to the last queried time stamp for the queries received from any client. This is selected by default.
   - **Named ACL**: Select this option and click **Select Named ACL** to select a named ACL that you want to use. If you have only one named ACL, only that named ACL is displayed. When you select this option, the appliance prevents clients with the **Include** permission from updating the last queried timestamp. You can click **Clear** to remove the selected named ACL.
   - **Set of ACEs**: Select this option to configure individual access control entries (ACEs). Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so that you can specify additional information about the item you are adding.
     
     - **IPv4 Address and IPv6 Address**: Select this option to add an IPv4 or IPv6 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Include** by default. You can change it to **Exclude** by clicking the field and selecting **Exclude** from the drop-down list. When you select **Include**, the appliance prevents the client from updating the last queried timestamp. When you select **Exclude**, the appliance allows the client to update the last queried timestamp.
     - **IPv4 Network**: In the **Add IPv4 Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address**: Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission**: Select **Include** or **Exclude** from the drop-down list.
     - **IPv6 Network**: In the **Add IPv6 Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address**: Enter an IPv6 network address and select the netmask from the drop-down list.
       - **Permission**: Select **Include** or **Exclude** from the drop-down list.
     - **Any Address/Network**: Select this option to include or exclude all IP addresses and networks to the last queried ACL list. The default permission is **Include**, which means the appliance prevents updating the last queried timestamp from all clients. You can change this to **Exclude** to allow all clients to update the last queried timestamp.
     - After you have added access control entries, you can perform the following:
       
       - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert to Named ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named ACL** panel. Note that the ACEs you configure for this operation stay intact.
       - Reorder the list of ACEs using the up and down arrows next to the table.
       - Select an ACE and click the Edit icon to modify the entry.
       - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
8. Select **Enable ** **record ** **scavenging**.
9. To override the inherited properties, click **Override** and complete the fields.
10. Under **Match** ** the ** **following ** **rule**, create a rule as follows. For information about rules, see *** Scavenging Rules*** above.
   
   - **Choose** ** Filter**: Select a criterion from the drop-down list.
   - **Choose** ** Operator**: Select an operator for the filter criterion.
   - In the value field, enter the value for the filter field. To add another rule:
   - Click **+** to add another rule at the same level.
   - Click **|&lt;**- to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level and above the first rule.
   - Click **-&gt;|** to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level.  
     To logically combine the whole ruleset, select **Match all of the following rules **or ** Match any of the following rules**.  
     After you add all the match rules, you can click **Reset** to remove the previously configured rules and start again.
11. Under** Match records with the following extensible attribute**, add an extensible attribute to use as an additional criterion for finding necessary records.
   
   - **Choose** **Operator**: Select an operator for the filter criterion.
   - **Choose** **Filter**: Select a criterion from the drop-down list.
   - In the value field, enter the value for the filter field.

To add another extensible attribute, click **+**.

1. To logically combine the extensible attributes set, select **Match all records with the following extensible attributes **or **Match any records with the following extensible attributes**.
2. After you add all the extensible attributes, you can click **Reset** to remove the previously configured attributes and start again.
   
   Note that the extensible attributes rule is always combined with the rest of the match rules using the AND operator.
3. **When** **reclaiming** **A,** **AAAA** **or** **PTR** **records,** **also** **reclaim** **the** **corresponding,** **symmetric** **A,** **AAAA** **and** **PTR** **records**: Select this if you want to reclaim records associated to the ones identified as reclaimable.
4. To configure a schedule for automatic records scavenging, select **Enable** **scheduled** **record** **scavenging**. See ** *****Scheduling***** *****Automatic***** *****Scavengin****g* in this topic.
5. Click **Save** **&** **Close** or **Save**.
