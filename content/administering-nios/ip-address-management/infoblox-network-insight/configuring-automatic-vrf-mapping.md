---
title: "Configuring Automatic VRF Mapping"
source: "/space/nios90/280273363"
pageId: "280273363"
---
You can configure Network Insight to automatically assign network views to VRFs by defining mapping rules that match unassigned VRFs—VRFs that do not have associated network views. You can also disable the automatic VRF mapping and manually assign network views to discovered VRFs, as described in* *[*Viewing Discovered VRFs and Mapping Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273310/Viewing+Discovered+Devices+and+their+Properties#VDVMNV)*.*  
When you enable automatic VRF mapping, you can add VRF mapping rules that Network Insight uses to map network views to VRFs that do not already have an assigned network view. When you configure mapping rules, you can define criteria using regular expressions and place the rules in specific order to define their priorities. Network Insight matches the rule criteria to the discovered VRF names, starting with the first rule in the VRF Mapping Rules table. You also have a choice to map an unassigned VRF to the network view from which one of the interfaces the VRF is reached, if none of the mapping rules match the VRF name.  
To configure automatic VRF mapping and mapping rules for unassigned VRFs, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then click the **Discovery** service.
2. Click **Edit** -> **Grid** **Discovery** Properties from the Toolbar.
3. In the *Grid* *Discovery* *Properties* editor, select the **VRF** **Mapping** **Rules** tab, and then complete the following:
   
   - **Enable** **the** **automatic** **VRF** **mapping** **rules** **defined** **below** **for** **unassigned** **VRFs**: Select this to enable automatic VRF mapping so you can define mapping rules that Network Insight uses to map network views to unassigned VRFs that match the criteria of the rules.
   - **Enable** **the** **automatic** **VRF** **mapping** **rules** **and** **system** **mapping** **extensions**: Select this to enable the VRF Mapping Rules table so you can define mapping rules that Network Insight uses to map network views to unassigned VRFs that match the criteria of the rules; and in cases where none of the rules match a VRF name, Network Insight maps the VRF to the network view from which one of the interfaces the unassigned VRF is reached.
   - **Disable** **automatic** **VRF** **mapping** **and** **only** **use** **manually** **defined** **VRF** **mapping**: Select this to disable the VRF Mapping Rules table. When you select this, Network Insight does not perform any evaluation of the VRF mapping rules. You can manually assign or unassign network views to the discovered VRFs, as described in [*Viewing Discovered VRFs and Mapping Network Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273310/Viewing+Discovered+Devices+and+their+Properties#VDVMNV)*.*

When you enable automatic VRF mapping, you can add mapping rules to the VRF Mapping Rules table, as follows:

1. Click the Add icon, and the appliance adds a row to the table.
2. In the table, click each of the following fields and enter the values accordingly:
   
   - **Network** **View**: The network view that you want to use for all matching VRFs. You can click this field and select a network view from the drop-down list that displays all the configured network views, including the default network view.
   - **Order**: The order and priority in which Network Insight evaluates the mapping rules. Each time you add a new rule, the appliance automatically appends the rule to the end of the list and assigns the next incremental number to the rule. To reorder the list, you can select a rule and use the up and down arrows next to the table to move the rules to its desired position so you can set the priority for the rule evaluation. Network Insight evaluates the rules based on the order, starting with 1 as the highest priority.
   - **Criteria**: The criteria that Network Insight uses to match the VRF name of an unassigned VRF. You can use POSIX regular expressions to define the mapping criteria. The appliance validates the rule when you save the configuration, and it returns an error message if the criteria is invalid.
   - **Comment**: Enter a comment about the VRF mapping rule. Click the Add icon again to define another mapping rule.
3. Save the configuration.

> **warning**
>
> ### Note
> 
> All the VRF mapping rules that are currently configured for the Grid are displayed in the VRF Mapping Rules table.

You can also do the following in the **VRF** **Mapping** **Rules** tab:

- Select a specific rule and click the Delete icon to remove it from the table.
- Use the up and down arrows next to the rules table to reorder the rules.
- Use the **Go** **to** function to search for a specific mapping rule. With the autocomplete feature, you can just enter the first few characters of a network view in the **Go** **to** field and select the network view from the possible matches.
