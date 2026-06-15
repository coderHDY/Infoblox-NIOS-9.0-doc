---
title: "Managing RPZ Rules"
source: "/space/nios90/280269719"
pageId: "280269719"
---
You can manage local RPZ, including FireEye integrated RPZ rules that you defined earlier and modify their information. You can do the following:

*[toc]*

> **warning**
>
> **Note**
> 
> You cannot modify the rules of an RPZ feed. However, you can override the entire ruleset or each rule using local RPZs.



# Viewing RPZ Rules

You can view and edit the rules that are defined for each local RPZ, including FireEye integrated RPZs. To view RPZ rules:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; click the RPZ link.
2. You can view the following:
   
   - **Name** **or** **Address:** Displays the domain name or the IP address on which the rule is defined.
   - **Policy**: Displays the rule applied on the domain name or the IP address.
   - **Data**: Displays the target data of the rule.
   - **Comment**: Displays the comment specified when the rule is defined.
   - **Disabled**: Displays **Yes** if the RPZ rule is disabled. Otherwise, this field displays **No**.
   - **Site**: Displays an extensible attribute, **Site**.
   - **Expiration**: Displays the expiration time for the corresponding FireEye integrated RPZ rule. Note that NIOS updates the expiration time when you change the lifetime of the FireEye integrated RPZ rule, or if the last updated time of the rule changes, or if the alert type that generates the rule changes. This time is estimated based on the following:  
     Expiration Time = Lifetime of an alert type + Last updated time of the rule  
     NIOS runs a scheduler every 10 minutes to identify FireEye integrated RPZ rules whose expiration time is less than the current time. If there are rules whose expiration time is less than the current time, then such rules will be deleted. NIOS logs all deletion activities in the syslog. You can view the syslog to verify expired rules. For more information, see *[Viewing RPZ in the Syslog](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/verifying-rpz-configuration)*.
   - **Fire Eye**** Alert**** Type**: Displays the type of FireEye alert.
   - **Last** **Updated**: Displays the time when the RPZ rule was last updated.

> **warning**
>
> **Note**
> 
> The columns, **Expiration**, **FireEye****Alert****Type**, and **Last****Updated**, are displayed only for FireEye integrated RPZ rules. These columns are not displayed for non-FireEye RPZ rules.

You can also do the following:

- Use **Quick**** Filter** and the **Go ****to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go ****to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see *[Using Quick Filters](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data)*.
- Modify some of the data in the table. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. You can edit **Comments** and **Extensible** **Attributes**. Note that some fields are read-only. For more information about this feature, see *[Modifying Data in Tables](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface)*.
- To export the list of RPZ rules to a .csv file, click the *Export* icon. For information on the export options, see *[Importing and Exporting Data using CSV Import](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280269719)*.
- Click the *Print* icon to print the list of RPZ rules. For more information, see *[Printing from Grid Manager](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface)*.

# Modifying RPZ Rules

You can modify the name of a local or FireEye integrated RPZ rule, IP address, network address, substituted name, and the comment recorded for the corresponding rule. You can also update the TTL settings or the extensible attributes that are associated with an RPZ rule.  
To modify RPZ rules:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; click the RPZ link -&gt; *Name* *or* *Address* checkbox, and then click the *Edit* icon.
2. The RPZ rules editor provides the following tabs from which you can modify data:
   
   - In the **General** tab, you can change the information you previously entered through the wizard. For more information, see *[Configuring Rules for RPZs](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-rules-for-rpzs)*.
   - You can also enter or edit information in the **TTL** **and** **Extensible** **Attributes** tabs. For information about TTL settings, see *[Specifying Time To Live Settings](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-time-to-live-settings)*. For information about extensible attributes, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
3. Save the configuration.

# Deleting RPZ Rules

You can delete local RPZ rules, including FireEye integrated RPZ rules, or schedule them for deletion for a later date. When you remove an RPZ rule, the NIOS appliance moves it to the Recycle Bin, if enabled.  
To delete RPZ rules:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; *Response* *Policy* *Zone* -&gt;* Ruleset*.
2. To delete an RPZ rule immediately, click the *Delete* icon, and then click **Yes** to confirm the delete request. To schedule the deletion, click **Schedule** **Deletion** and in the **Schedule** **Change** panel, enter a date, time, and time zone. For information, see [*Scheduling*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-/Scheduling+New+IPAM+DHCP+Objects+and+Associated+Port+Configurations#bookmark145)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-/Scheduling+New+IPAM+DHCP+Objects+and+Associated+Port+Configurations#bookmark145)[*Deletions*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-/Scheduling+New+IPAM+DHCP+Objects+and+Associated+Port+Configurations#bookmark145).

Grid Manager moves the RPZ rule to the Recycle Bin, from which you can restore or permanently delete it.

# Copying RPZ Rules

You can copy rules from one local RPZ to another local RPZ or from one FireEye integrated RPZ to another FireEye RPZ. You can also copy rules from a local RPZ to a FireEye integrated RPZ or vice-versa. Different views of the same RPZ may have a number of rules in common. If this is the case, you can copy rules between views and zones.  
To copy RPZs between DNS zones and views:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, click **Copy** **Rules** from the **Toolbar**.
2. In the *Copy* *Rules* dialog box, Grid Manager displays the last selected zone or the zone from which you are copying rules in the **Source** field. The following fields are displayed:
   
   - **Source**: Grid Manager displays the last selected zone or the zone from which you are copying rules. It also displays the associated DNS view.
   - **Destination**: Click **Select** **Zone** to select the destination zone. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box from which you can select one. After you select the zone, Grid Manager displays the associated DNS view.
   - **Copy** **All** **Rules**: Select this option to copy all the rules.
   - **Copy** **Specific** **Rules**: Select this option to copy specific rules only. Select a rule from the **Available** column and click the right arrow to move it to the **Selected** column.
   - **Copy** **Options:** Select one of the following:
     
     - **Delete** **all** **rules** **in** **the** **destination** **before** **copying** **the** **rules:** Select to delete all rules in the destination zone before the records are copied.
     - **Overwrite** **existing** **rules:** Select to overwrite existing rules that have the same domain name owners as the rules being copied.
3. Click **Copy** **&** **Close**.

# Importing RPZ Rules

You can import rules from an RPZ zone to a local zone. To import, you must enable zone transfer on the external server. The rules of the existing zone are overwritten when you import rules from an external server.  
To import RPZ rules:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; click the RPZ link in the **Name** column -&gt; *Rules*, click **Import** **Zone** from the **Toolbar**.
2. In the *Import* *Zone* dialog box, the following fields are displayed:
   
   - **Zone**: The RPZ that you have selected is displayed.
   - **DNS** **View**: The DNS view that you have selected is displayed.
   - **Address**: Enter the address of the external server from where you want to import rules.
3. Click **Import.**

# Disabling NSDNAME and NSIP rules for RPZ zones

NSDNAME and NSIP rules are enabled for RPZ zones by default. You can disable or enable NSDNAME and NSIP rules to control the validation of NS records and glue records received by upstream DNS servers. When you enable RPZ on internal DNS servers and if there are forward-mapping zones that are not reachable from external networks, NSDNAME and NSIP validation is not necessary. In this case, you can disable NSDNAME and NSIP rules to reduce delays in responses. When you disable these rules for RPZ zones, the appliance bypasses NSDNAME and NSIP validation for the queries and it significantly improves the performance. Note that this setting disables both NSDNAME and NSIP rules at the same time for both internal and external RPZ zones. This setting only affects the lookup process but the zone data remains unchanged. NSDNAME and NSIP records will still be available in RPZ zones during zone transfers (AXFR and IXFR). If you disable NSDNAME and NSIP rules for RPZ zones at the Grid level, all members inherit this setting. You can override this setting for each member.

> **warning**
>
> **Note**
> 
> Disabling NSDNAME and NSIP rules for RPZ zones on members which may send recursive queries to external servers, results in reduced security. Accordingly, it is not recommended to disable these rules for RPZ zones on members that respond with data from external servers.

To disable NSDNAME and NSIP rules for RPZ zones:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **General** tab -&gt; **Advanced** tab and complete the following.
   
   - **Disable** **NSDNAME** **and** **NSIP** **rules** **for** **RPZ** **zones**: This checkbox is deselected and NSDNAME and NSIP rules are enabled for RPZ zones by default. Select this checkbox to disable NSDNAME and NSIP rules for all RPZ zones. To override the value inherited from the Grid, click **Override**. To retain the same value as the Grid, click **Inherit**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
