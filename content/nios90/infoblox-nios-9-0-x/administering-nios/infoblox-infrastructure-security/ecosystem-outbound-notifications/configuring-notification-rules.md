---
title: "Configuring Notification Rules"
source: "/space/nios90/280759890"
pageId: "280759890"
---
You can configure notification rules after you have uploaded outbound templates and configured outbound endpoints on the NIOS appliance. For information about adding outbound endpoints, see *[Configuring Outbound Endpoints](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)*. To send outbound notifications from NIOS to the target endpoints, you must configure notification rules. When adding rules, you can select REST API, DXL, or Syslog endpoint and associate the correct action template to the rule. The appliance validates the event type specified in the template with the event type that you select in the notification rule. The parameters defined in a template decides the way NIOS specific data is presented to an endpoint. Each notification rule specifies the target endpoint, notification rule criteria, and the outbound template being used to take action for the matching events.

> **warning**
>
> **Note**
> 
> When you remove all notification rules associated with an endpoint, all the debug logs for that endpoint will also be removed.

While configuring notification rules, you can decide whether you want to reduce the number of redundant RPZ hits, DNS Infrastructure Protection hits, and object change discovery data events. Oftentimes, these hits come from the same client IPs, query FQDNs, or networks. To avoid receiving excessive events at the endpoint, you can configure the appliance to remove or deduplicate subsequent events (after sending the first event) within a certain time period. Depending on your configuration, the appliance sends the first event and deduplicates subsequent events that match your filtering criteria within the configured lookback interval. For more information, see Deduplicating Events below.

# Adding Notification Rules

To add notification rules, complete the following steps:

1. From the **Grid/System** tab, select the **Ecosystem** tab -&gt; **Notification** tab, and then click the Add icon.   
   or  
   From the **Grid/System **tab, select the **Ecosystem** tab, and click **Add** **Notification** **Rule** in the Toolbar.
2. In the *Add* *Notification* wizard, complete the following.
   
   - **Name**: Enter the name of the notification rule.
   - **Target**: Click **Select** **Endpoint** to select the endpoint type. If there are multiple endpoints, the *All* *Endpoints* *Selector* dialog box is displayed, from which you can select an endpoint name, such as **Cisco** **ISE**.
   - **Target** **Type**: Displays the target type. You cannot change this.
   - **Comment**: Enter useful information about the notification rule.
   - **Disable**: Select this option to disable the notification rule.
3. Click **Next** and complete the following to configure notification rules for the selected endpoint:
   
   - **Event**: Depending on the licenses you have installed in the Grid, you can select the event types you want to apply to the notification rules. The outbound member collects data for the selected events based on your configuration. Note that if there is a significant amount of data or if the network bandwidth is not sufficient, the outbound member might drop some of the events. In this case, you can access the syslog to view the messages related to the dropped events. In addition to basic information (such as timestamp, member IP, network, and others), data collected for some event type might include enriched data, such as discovered data, parent network information, and associated extensible attributes.  
     From the drop-down list, select the event types that you want to monitor for the notification rules:
     
     - **DNS ****RPZ**: Select this to collect data for RPZ events. The **DNS ****RPZ** event type is available only if you have installed the **RPZ** license in the Grid. When you select this event type, you can enable event deduplication in the next step so that the appliance can avoid sending excessive events to the endpoint based on your configuration.
     - **Object Change DNS Record**: Select this to collect data for DNS records. That is, if a DNS record is added, updated, or deleted, the notification rule is triggered and the event notification is sent to the target endpoint. Dynamic records are not supported.
     - **Object Change**** DNS Zone**: Select this to collect data for DNS zones. That is, if a zone is created, updated, or deleted, the notification rule is triggered and the event notification is sent to the target endpoint.
     - **DNS**** Tunneling**: Select this to collect data for DNS tunneling events.
     - **DHCP ****Leases**: Select this to collect data for DHCP leases. Since the same IP addresses might be used by multiple systems, the appliance matches both the IP and the MAC address or the DUID to ensure that the discovered data is most likely to be correct.
     - **DXL Events**: Select this to collect data from the topic to which you subscribed when configuring the DXL endpoint. For more information, see *[Configuring DXL Endpoints](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)*.
     - **IPAM**: Select this to send IPAM data. No notification rule is required for this event type. For more information, see *[Publishing Data](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Publishing%20Data&linkCreation=true&fromPageId=280759890)*.
     - **Security DNS Infrastructure Protection**: Select this to collect data for DNS infrastructure protection events. You can specify the maximum domain level for query FQDN for outbound DNS infrastructure protection events. For more information, see Enabling Query FQDN for Outbound Notifications below. When you create outbound notifications for security DNS Infrastructure Protection event types, the server collects event statistics every 15 seconds to avoid excessive DNS infrastructure protection events. Note that you can execute test rules in JSON format for Security DNS Infrastructure Protection event types. For more information, see Deduplicating Events below.
     - **Object**** Change ****DHCP ****Fixed ****Address**** IPv4**, **Object**** Change ****DHCP ****Fixed ****Address**** IPv6**,** Object Change Network IPv4**, **Object Change Network** **IPv6**,** Object Change Range IPv4**,** Object Change Range IPv6**, **Object Change Host Address IPv4**, **Object Change Host Address IPv6**, **Object Change Discovery Data**: Select any of these event types to collect data for database changes in fixed addresses, DHCP ranges, networks, DNS host addresses, and discovery data. If you select **Object Change Discovery Data**, when unmanaged IP addresses or devices are created, updated, or deleted, the notification rule is triggered and the event notification is sent to the target endpoint.
     - **Schedule**: Select this to schedule the notification rule configuration. You can set up schedules on an hourly, daily, weekly, or on a monthly basis. You can also choose to schedule the event to occur only once. You cannot specify other event types when you select **Schedule** from the drop-down list. Note that you can execute test rules in JSON format when you schedule the notification rule configuration. You cannot choose an action rule when you schedule the notification rule configuration.
       
       - **Priority**: This field is displayed only if you select **Schedule** from the drop-down list. Select a priority value, **Normal** or **High**, for scheduled events from the drop-down list. When you select **Normal**, the event is added to the queue right after the existing events in the list and is executed after all events that are already scheduled. Select **High** if you want the event type to be executed soon after the execution of the current event in the list of events that are scheduled. For more information, see *[Scheduling Tasks](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)*.
     - **Action**: This field is displayed only if you have selected **Cisco**** ISE** as the endpoint (the Target field). Otherwise, this field is hidden.  
         
       In the **Match** **the** **following** **rule** section, select the filters, operators, and values from the drop-down lists for the selected event type. You can use the + icon to construct nested expressions for the rule. The filters change depending on what you selected as the event type. Some of the filters are:
     - **DNS ****RPZ**: Action Policy, Infoblox Threat Defense Cloud Hit Class, Infoblox Threat Defense Cloud Hit Property, Infoblox Threat Defense Cloud Hit Type, Query Name, RPZ Name, RPZ Type, Rule Name, Source IP, and Threat Origin.
     - **DNS ****Tunneling**: Source IP.
     - **DHCP ****Leases**: DHCP Fingerprint and Lease State.
     - **DXL Events**: DXL topic that you entered in the **Topics** field when configuring the DXL endpoint. For more information, see [*Configuring DXL Endpoint*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)[s](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints).
     - **Record Name**: Name of the DNS record. For example, AA, CNAME, SRV, and so on.
     - **DNS Records**: Supported records are A, AAAA, AAA, CNAME, SRV, ALIAS, NS, PTR, MX, TXT, TLSA, CAA, SOA, DNAME, NAPTR, and UNKNOWN.
     - **Zone Type**: Supported zones are Authoritative, Forward, Stub, Delegation, and RPZ.
     - **User Name**: Name entered in the WAPI Integration Username field. For more information, see *[Configuring Outbound Endpoints](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-endpoints)*.
     - **IPAM**: In the *Notify the target* section, there are predefined data types in the **Available** table you can publish. Click **Override** and use the arrows to move data types from the **Available** table to the **Selected** table and vice versa. The appliance sends information for all data types that are added to the **Selected** table. If you do not override, the publication settings are inherited from those configured while adding the Cisco ISE server. Note that you can configure only one IPAM rule per Cisco ISE server. For more information, see *[Publishing Data](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Publishing%20Data&linkCreation=true&fromPageId=280759890)*.
     - **Security DNS Infrastructure Protection**: Rule Message, Hits Count, Member IP, Member Name, Query FQDN, Rule Action, Rule Category, Rule Severity, SID, and Source IP. When you select **Member Name**, the appliance displays all the DNS Infrastructure Protection members that are available.
     - **Object ****Change ****Fixed ****Address ****IPv4**: Disable, IPv4 Address, MAC, Name, Network, Network View, Username, and User Group.
     - **Object ****Change ****Fixed ****Address ****IPv6**: Address Type, Disable, DUID, IPv6 Address, IPv6 Prefix, IPv6 Prefix Bits, Name, Network, Network View, Username, and User Group.
     - **Object ****Change ****Network ****IPv4**: Disable, Network, and Network View.
     - **Object ****Change ****Network ****IPv6**: Disable, Network, Network View, Username, and User Group.
     - **Object ****Change**** ****Range ****IPv4**: Disable, Network, Network View, Server Association Type, Username, and User Group.
     - **Object ****Change ****Range ****IPv6**: Address Type, Disable, Network, Network View, Server Association Type, Username, and User Group.
     - **Object ****Change ****Host ****Address ****IPv4**: Host, IPv4 Address, MAC, Network, Network View Association Type, Username, and User Group.
     - **Object ****Change ****Host ****Address ****IPv6**: Address Type, DUID, Host, IPv6 Address, IPv6 Prefix, IPv6 Prefix Bits, Network View, Username, and User Group.
     - **Object Change Discovery Data:** Discoverer, IP Address, Is IPv4, Operation Type, Unmanaged, Username, and User Group.
     - **Object Change DNS Record**: Auto Created Records, DNS View, Network View, Operation Type, Record Name, Record Type, User Group, Username, and Zone Name.
     - **Object Change DNS Zone**: DNS View, Network View, Operation Type, User Group, Username, Zone Name, and Zone Type.

> **warning**
>
> **Note**
> 
> An event may not be triggered and the template may not execute in the following scenarios:
> 
> - For events of type **Object Change DNS Record**.  
> - Microsoft synchronization of records, DDNS update of records, and nameserver update of records are not supported.  
> - For SOA records, serial numbers are not automatically incremented.  
> - For NS records, the **Comment** field is not updated.  
> - For an RPZ rule, add and update operations are not supported.  
> - For a shared record, add and update operations are not supported.  
> - For events of type **Object Change DNS Zone**, Microsoft synchronization of zones is not supported.  
> - Transfer of secondary zones is not supported.

4. Click **Next**. If you have selected **DNS** **RPZ**, or **Security DNS Infrastructure Protection** or **Object Change Discovery Data** as the event type, go to Deduplicating Events below to configure deduplication. Otherwise, go to Selecting Action Template below to select an action template.

> **warning**
>
> **Note**
> 
> - The event type you select here affects the templates that are available when you select the RESTful API template you want to use for the outbound notifications. For example, if you select **DNS ****RPZ** as the event type, only templates configured for DNS RPZ event type are available for selection.
> - For the Cisco ISE endpoint, only the DNS RPZ, Security DNS Infrastructure Protection, DHCP Leases, and DNS Infrastructure Protection events are applicable.

## Enabling Query FQDN for Outbound Notifications

Infoblox allows you to configure support for query FQDN for outbound DNS Infrastructure Protection protection events and choose maximum labels in FQDN that can be configured at the Grid and/or member level. When you enable query FQDN, event data will contain the `query_fqdn` field, if any, which is limited by the domain level. The outbound template executes the parameters and fields against the notification criteria to verify if the notification rule works for the selected security DNS Infrastructure Protection event type.

Note that the maximum domain level is set to three and you can query for domain levels up to three. For example, if you set the domain level to two, you can query for domain a.com, but if you query a.b.com, then the outbound template does not execute the details against the notification criteria. When you set the domain level to three, you can query for a.b.com, but if you query for a.b.c.com, then the details are not executed. Query FQDN automatically prefixes a *. at the beginning of the domain name if the FQDN is longer.

You can enable query FQDN through the *Grid **Security Properties* or *Member Security Properties* editor. A warning message is displayed if the notification rule uses Query FQDN for filtering or deduplication when it is not enabled on each member.

To enable query FQDN for outbound notifications, complete the following steps:

1. From the **Data Management** tab, select the **Security **tab, then click** Grid Security Properties** from the Toolbar.  
   or  
   From the **Data Management** tab, select the **Security **tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Grid Security Properties *or* Member Security Properties* editor, click **Toggle Advanced Mode**, select the **Ecosystem** tab, and complete the following:
   
   - **Enable Query FQDN for DNS Infrastructure Protection Events**: Select this checkbox to enable NIOS to use DNS query FQDNs for Outbound DNS Infrastructure Protection events in the Grid.
   - **Max domain level**: Select a value from the drop-down list to set the maximum domain level for query FQDNs. You can choose 2 or 3.

# Deduplicating Events

> **warning**
>
> **Note**
> 
> This step appears only if you have selected **DNS** **RPZ**, or **Security DNS Infrastructure Protection**, **Object Change Discovery Data**, or** DXL Events **as the event type.

Depending on your configuration, the appliance sends the first RPZ, or DNS infrastructure protection, or object change discovery data event and deduplicates subsequent events that match your filtering criteria within the specified lookback interval. The hits are considered based on the following fields for each of these event types:

- **RPZ events: **Source IP, Query Name, RPZ Policy, and other related fields.
- **ADP hits:** Source IP, Rule ID, and other corresponding fields.
- **Object Change Discovery Data**: Discoverer, IP Address, and other fields.

1. To avoid excessive notifications received at the endpoint, complete the following to configure event deduplication:
   
   - **Enable** **event** **deduplication**: Select this to enable event deduplication for RPZ, or DNS Infrastructure Protection, or data discovery hits. When you enable deduplication, the appliance suppresses redundant notifications based on your configuration.
   - **Log** **all** **dropped** **events** **due** **to** **deduplication** **to** **the** **syslog**: Select this if you want to log all the events that have been dropped due to deduplication. Selecting this allows the appliance to record all the dropped events to the syslog.
   - **Select** **the** **fields** **to** **use** **for** **deduplication**: From the **Available** table, pick the fields you want to use for filtering the deduplication and move them to the **Selected** table using the right arrow. You can also deselect any fields by selecting and moving them from the **Selected** table to the **Available** table using the left arrow. Event deduplication is done based on the conditions of the selected fields. The following example explains how deduplication works if two RPZ hits occur within the lookback interval, as follows:  
       
     *RPZ* *hit* *1 / *`ADP ``hit`` ``1`` / ``Data Discovery 1`: source_ip: 1.2.3.4, query_name: server1.bad.com, rpz_policy: NXDOMAIN, query_type: qname, network.network_view: internal, network.network: 1.2.3.0/24  
       
     *RPZ* *hit* *2* /` ADP hit`` ``2`` / `` Data Discovery 2`: source_ip: 1.2.3.4, query_name: www.something.com, rpz_policy: NXDOMAIN, query_type: qname, network.network_view: internal, network.network: 1.2.3.0/24  
     If you have selected only **Source** **IP** for deduplication, the appliance sends only the first RPZ event to the endpoint. If you have selected both **Source** **IP** and **Query** **Name**, both RPZ events are sent to the endpoint.
   - **Lookback** **Interval**: Enter the time interval during which the appliance evaluates RPZ hit, or ADP hit, or data discovery events and stops sending redundant events to the endpoint (based on your configuration). At the end of this interval, the appliance resumes scanning of the client IP, query FQDN, or network for RPZ events. The minimum interval is five seconds and the maximum is 15 minutes. The default is 10 minutes.
2. Click **Next** to select an action template for the endpoint, as described in the following section, Selecting Action Template.

# Selecting Action Template

1. In this step, select the outbound template you want to use for outbound notifications. The appliance validates the event type that is added to the notification rule and then matches that with the event type configured in the template.
   
   In the **Template** field, click** Select Template** to associate an action template with the notification rule. If there are multiple templates, the &lt;DXL or RESTful API&gt; *Template Selector* dialog box is displayed, from which you can select an action template. Note that only templates that have the same event type configured for the notification rule appear in this dialog.
   
   The following information is displayed about the selected action template:
   
   - **Vendor** **Type**: The vendor type associated with the endpoint.
   - **Template ****Type**: The type of action that will be taken for the matching events.
   - **Parameters**: Displays the associated parameters of the template, such as **Name**, **Value**, and **Type**. You can click the **Value** cell and modify the value for the parameter.
2. Save the endpoint configuration.

# Modifying Notification Rules

To modify a notification rule, complete the following steps:

1. From the **Grid/System** tab, select the **Ecosystem** tab -&gt; **Notification** tab, click the **Action** icon next to the notification rule and select **Edit** from the menu.
2. The *Notification* *Rule* editor provides the following tabs from which you can modify data:
   
   - **General**: You can modify the **Target** and **Comment** fields.
   - **Rules**: You can edit the event type and the rule, as described in this section, Configuring Notification Rules.
   - **Templates**: You can select a new action template for the notification rule.
3. Save the configuration.

# Viewing All Notification Rules

To view the list of notification rules, complete the following steps:

1. From the **Grid/System** tab, select the **Ecosystem** tab, and click the **Notification** tab.
2. Grid Manager displays the following information:
   
   - **Name**: Name of the notification rule.
   - **Target**: The target name.
   - **Action**: The action type.
   - **Comment**: Comments that were entered for the notification rule.
   - **Disable**: Displays whether the notification rule is disabled.  
       
     You can perform the following on this tab:
   - Click the Action icon  and perform the following:
     
     - **Edit**: Select this to modify the notification rule.
     - **Delete**: Select this to delete a notification rule.
     - **Test**** Rule**: Select this to execute the parameters and fields of a template against the notification criteria and verify whether the notification rule works for the event (specified in the template). Make changes to the template if required, and you can view this information in the debug log. The test rules go through the following stages: filtering, enrichment, and deduplication.
     - **View**** Debug ****Log**: Select this to view debugging messages for the selected notification rule.
   - Edit the notification rule information.
     
     - Select the notification rule, and then click the Edit icon.
   - Delete a notification rule.
     
     - Select the notification rule, and then click the Delete icon.  
         
       Note when you remove all the notification rules associated with an endpoint, all the debug logs for that endpoint will also be removed.
   - Print the list of notification rules.
     
     - Click the Print icon.
   - Use filters and the **Go ****to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go ****to** field and select the object from the possible matches.
   - Create a quick filter to save frequently used filter criteria:
     
     1. In the filter section, click **Show** **Filter** and define filter criteria for the quick filter.
     2. Click **Save** and complete the configuration In the *Save Quick Filter* dialog box.  
        The appliance adds the quick filter to the quick filter drop-down list in the panel. Note that global filters are prefixed with [G], local filters with [L], and system filters with [S].
   - Sort the notification rules in ascending or descending order by column.
