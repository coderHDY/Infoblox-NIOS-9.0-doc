---
title: "Managing DNS Traffic Control Objects"
source: "/space/nios90/280271694"
pageId: "280271694"
---
You can configure multiple DNS Traffic Control servers, pools, or LBDNs on a NIOS appliance. For information on how to configure and manage the DNS Traffic Control Objects, see:

*[children]*

Sections covered in the topic are:

*[toc]*

# Viewing DNS Traffic Control Objects

Grid Manager lists all DNS Traffic Control objects in the **Traffic** **Control** tab. You can view the objects that you have configured in the Grid from: **Data** **Management** tab -> **DNS** tab -> **Traffic** **Control** tab.

Based on the selected columns, Grid Manager displays the following information for each DNS Traffic Control object:

- **Name**: The name of the object.
- **Type**: The object type.
- **Status**: Displays information about the last update, connection status, load balancer methods, and servers and pools. Hover your mouse over the status value to view full information in a tooltip. For more information about the possible statuses, see as described in [*Understanding DTC Object Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271616/Visualization+for+DNS+Traffic+Control+Objects#Understanding-DTC-Object-Status)*.*
- **IPv4 Address**: The IPv4 address of the object, if applicable.
- **IPv6 Address**: The IPv6 address of the object, if applicable.
- **Disabled**: **Yes** or **No**. Indicates whether the DNS Traffic Control object is disabled.
- **Comment**: Displays any comments that were entered for the object.
- **Last Status Update**: Displays the timestamp of the last status update.
- **Load Balancing Method**: Displays the load balancing methods defined for the object.
- **Topology Ruleset**: Displays the topology ruleset defined for the object if it uses the Topology load balancing method.
- Extensible attributes, if configured:
  
  - **Site**: Displays any values that were entered for the Site pre-defined attribute.
  - **IB Discovery Owned**: Displays any values that were entered for the IB Discovery Owned pre-defined extensible attribute.
  - **Building**: Displays any values that were entered for the Building pre-defined attribute.
  - **Country**: Displays any values that were entered for the Country pre-defined attribute.
  - **Region**: Displays any values that were entered for the Region pre-defined attribute.
  - **State**: Displays any values that were entered for the State pre-defined attribute.
  - **VLAN**: Displays any values that were entered for the VLAN pre-defined attribute.

> **warning**
>
> Note
> 
> You can perform inline editing in the **Name**, **Comment**, and **Site** columns by double-clicking the required line in the table and providing the value in the corresponding column.

You can perform the following in the **Traffic** **Control** tab:

- Select the checkbox to view specific objects only:
  
  - **LBDN**: Select the checkbox to view LBDN objects only. For more information, see [*Configuring DNS Traffic Control LBDNs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/299368879).
  - **Pool**: Select the checkbox to view pools only. For more information, see [*Configuring DNS Traffic Control Pools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281247795).
  - **Server**: Select the checkbox to view servers only. For more information, see [*Configuring DNS Traffic Control Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215057).
- Change the set of columns displayed in the DTC objects table and change their width. For more information, see [*Customizing Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#Customizing-Tables).* *
- Click the Add icon to add an object.
- Select an object and click the Edit icon to edit the configuration. You can also click the Action icon  of the object and select **Edit** from the menu.
- Select an object and click the Delete icon to delete it. You can also click the Action icon of the object and select **Delete** from the menu. For more information, see the *Deleting* *DNS* *Traffic* *Control* *Objects* section.
- Click a DTC server name to open the list of DTC records associated with the server. For more information, see* *[*Managing DTC Server Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215057/Managing+DNS+Traffic+Control+Servers#Managing-DTC-Server-Records).
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343161370).
- Click the Export icon to export the list of objects to a .csv file.
- Click the Print icon to print the list of objects.
- Add or delete extensible attributes for a DTC object by selecting the object in the table and clicking **Extensible** **Attributes** in the Toolbar. For information, see [*Using*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)[*Extensible*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868)[*Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868).
- Test a selected LBDN by clicking **Test** **LBDN** in the Toolbar. For more information, see [*Testing DNS Traffic Control LBDNs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/299368879/Managing+DNS+Traffic+Control+LBDNs#Testing-DNS-Traffic-Control-LBDNs).
- Enable/disable one or more selected traffic control objects. For more information, see the *Enabling* *or* *Disabling Traffic* *Control* *Objects* section.
- View a visualization of the traffic control structure for an object by selecting the object in the table. The visualization is displayed by default. To hide the visualization, click **Hide** **Visualization** in the Toolbar. For more information, see [*Visualization for DNS Traffic Control Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271616)*.*
- Use the **IDN** **Converter** from the Toolbar to convert IDNs into punycodes. For more information, see [*Decoding IDNs and Encoding Punycode*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204).

> **warning**
>
> Note
> 
> The Grid Master Candidate provides the health status of DNS Traffic Control objects such as servers, pools, and LBDNs through WAPI requests.

# Deleting DNS Traffic Control Objects

You can delete DNS Traffic Control objects, such as servers, pools, or LBDNs. When you delete an LBDN, the appliance automatically dissociates it from the zones. To delete an LBDN, you must either have write permission on the LBDN record or the LBDN. For more information, see [*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755).

You cannot delete a DNS Traffic Control pool when it is in use. To delete a pool, you must first delete it from the associated LBDNs. You cannot delete a DNS Traffic Control server when it is in use. You must first remove it from every pool and topology ruleset before deleting the server.

To delete an object:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, click the Action icon of the object name and select **Delete** from the menu or select an object and click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes** to delete the object or **No** to cancel the operation.

The *Delete* *Confirmation* dialog box displays information about associated objects and warns if the object cannot be deleted due to the associations.

To schedule an object deletion, click the Action icon of the object and select **Delete** -> **Schedule** **Delete**. Alternatively, you can select the object in the **Traffic** **Control** panel and then select the Delete icon -> **Schedule** **Delete**. In the *Schedule* *Deletion* panel, enter a date, time, and time zone. For information, see [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1455063358).

> **warning**
>
> Note
> 
> If you remove a name server associated with a zone that comprises LBDN records and if the name server is configured as part of a [*consolidated monitor list*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664170), ensure that you remove the name server from the consolidated health monitor list in the DTC pool. For more information about health monitors, see [*Using DNS Traffic Control Health Monitors*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404830) and [*Configuring DTC Monitors for Health Check*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664170).

# Enabling or Disabling Traffic Control Objects

You can enable or disable a single or multiple DNS Traffic Control objects for a selected Grid member.

The Grid-level status of DNS Traffic Control objects can be viewed on the **Data Management** tab -> **DNS** tab -> **Traffic Control** tab and the member-level status in the visualization panel. For more information, see [*Visualization for DNS Traffic Control Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271616) and [*Understanding DTC Object Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271616/Visualization+for+DNS+Traffic+Control+Objects#Understanding-DTC-Object-Status). You will not be able to view the disabled configuration of an object in Grid Manager.

## Disabling Traffic Control Objects

To disable a traffic control object:

> **warning**
>
> Note
> 
> Ensure that at least one health monitor is configured in a pool or a server object before you attempt to disable that DTC object.

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab.
2. In the *Traffic Control* panel, select the object that you want to disable.
3. Click the arrow beside the Enable/Disable icon or click the Action icon of the selected object, and select **Disable**.
4. Complete the following steps in the *Disable Traffic Management Objects* dialog:
   
   - **Disable health monitoring**: Select it if you want to disable the health monitoring when the selected DTC object is disabled.
   - **Disable options**: Select one of the following options:
     
     - **Disable until objects are enabled manually**: Select it to keep the object disabled until you enable the object manually.
     - **Disable until DNS service restarts**: Select it to keep the object disabled until the DNS service is restarted.
     - **Disable for specified time (seconds)**: Select it and specify a time interval in seconds until when the object must remain disabled. The object is enabled automatically after the specified interval elapses.
   - **Disable after (seconds)**: Select it and specify a time interval in seconds after which the object is disabled automatically.
   - In the **DTC grid** **members** section, select the Grid members on which the selected object must be disabled:
     
     1. Click a member in the **Enabled on** box to select it.
     2. Click the right arrow to move the member to the **To disable on** box.
5. Click **Save & Close**.

Consider the following points when you have disabled DNS Traffic Control objects in a Grid:

- When you restore a Grid that had a DNS Traffic Control object disabled with the **Disable until DNS restarts** option, the object gets enabled as the restore operation causes all services including the DNS service to restart. You must disable the object once again.
- If you need to override or modify the configuration used to disable a DTC object, you must either wait until the object is enabled based on the setting you have defined, or manually enable the object.
- Disabling DNS Traffic Control objects does not impact the DTC backup or restore operation. A restore operation enables all objects in a Grid leaving them in Running state.
- When a Dig request is running, if you force restart the DNS service, the disabled DTC objects continue to send responses until all objects that were in the disabled state are reinstated to the disabled state after the restart. The time taken to reinstate the objects varies depending on the count of the disabled objects.
- When you modify the name server association of zones configured for an LBDN object, and then restart the DNS service, the DTC object disable settings (manual fail back events) configured for members associated with the LBDN, its pool, or server objects prior to the zone’s name server modification, becomes stale, and the stale data is cleared at regular intervals.

## Enabling Traffic Control Objects

In a DNS Traffic Control setup, you must have at least one server object enabled in a pool and at least one pool object enabled in an LBDN.

To enable a traffic control object:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab.
2. In the *Traffic Control* panel, select the object that you want to enable.
3. Click the arrow beside the Enable/Disable icon, or click the Action icon of the selected object, and select **Enable**.
4. In the *Enable Traffic Management Objects* dialog, select the Grid members on which the object must be enabled:
   
   1. In the **DTC grid members** section, click a member in the **Disabled on** box to select it.
   2. Click the right arrow to move the member to the **To enable on** box.
5. Click **Save & Close**.

> **warning**
>
> Note
> 
> - To enable a disabled DNS Traffic Control server object, its pool must be enabled. If not, the status of the server object will remain disabled.
> - In NIOS version 8.6.2 and later, to enable an object that was disabled in a prior version of NIOS, do not use the **Enable** option. Instead, complete the following steps:
>   
>   1. On the **Traffic Control** tab, click the Action icon of the disabled object and select **Edit**.
>   2. In the editor, on the **General** tab, clear the selection in the **Disabled** checkbox.
>   3. Click **Save & Close**.

# Limitations and Warnings for Auto Consolidated Monitors

You can view the limitations and warnings of Auto Consolidated Monitors for the DNS Traffic Control, server, and LBDN objects listed in this section.

## DNS Traffic Control

- The Auto Consolidated Monitors option uses DNS Traffic Control consolidated monitors that cannot share results of health monitors specified on DNS Traffic Control servers (server monitors). Therefore, DNS Traffic Control objects may have some differences in health statuses per Grid members when the Auto Consolidated Monitors option is enabled.
- If you disable the Auto Consolidated Monitors option for a DNS Traffic Control pool that is linked to an LBDN that has Auto Consolidated Monitors enabled, an error message is displayed. You cannot disable the Auto Consolidated Monitors option when this option is enabled in the linked LBDN.
- You cannot make any changes to the DNS Traffic Control consolidated monitors settings if the Auto Consolidated Monitors option is enabled.

> **error**
>
> Warning
> 
> - If you enable the Auto Consolidated Monitors option on the DNS Traffic Control pool, all existing DNS Traffic Control consolidated monitors are deleted.
> - When there are no health monitors on the DNS Traffic Control pool and you enable the Auto Consolidated Monitors option, a warning message asking you to manually add health monitors to the DNS Traffic Control pool is displayed.

## DNS Traffic Control LBDN

- Since the Auto Consolidated Monitors option uses DNS Traffic Control Consolidated Monitors which cannot share results of health monitors specified on DNS Traffic Control Servers (server monitors), DNS Traffic Control objects may have some differences in health statuses per Grid members even when the Auto Consolidated Monitors option is enabled.

> **error**
>
> Warning
> 
> - If you enable Auto Consolidated Monitors on the LBDN, all the existing DNS Traffic Control Consolidated Monitors on all linked DNS Traffic Control Pools are deleted.
> - When Auto Consolidated Monitors is enabled on LBDN, all linked DNS Traffic Control Pools also have this option automatically enabled.
> - When there are no health monitors assigned on the linked DNS Traffic Control Pool(s), and you enable Auto Consolidated Monitor on the LBDN, the warning message asking to manually add health monitors on DNS Traffic Control Pool is displayed.

## DNS Traffic Control Servers

> **error**
>
> Warning
> 
> When you add health monitors to a DNS Traffic Control server that is a part of the DNS Traffic Control configuration with the source IP hash load balancing method selected and the Auto Consolidated Monitors option enabled, a warning message is displayed that these changes can cause differences in resolving queries among DNS Traffic Control Grid members for the same DNS request.
