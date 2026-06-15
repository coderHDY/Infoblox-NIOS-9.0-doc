---
title: "Visualization for DNS Traffic Control Objects"
source: "/space/nios90/280271616"
pageId: "280271616"
---
Grid Manager provides a visual tree view that you can use to quickly understand an overall traffic control structure of a selected DTC object. The visualization panel is displayed by default on the **Traffic** **Control** tab.  
To view a visualization of the DNS traffic control structure for an object:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab.
2. Select the checkbox next to the DTC object for which you want to view, for example, LBDN. The LBDN structure tree is displayed in the visualization panel.

The tree shows the selected object and its relationships with other associated DTC objects. The DTC objects are represented as nodes in the hierarchical order of LBDN -> pool -> server levels. Note that when a DTC server is associated with multiple pools, the appliance displays the connection to the selected pool only, not showing the other pools that the server is assigned to. If an LBDN has more than one pool associated, it displays the servers for only one pool at a time. Clicking on another pool of the LBDN displays the servers for that pool.  
You can hover your mouse over an object to display a tooltip that contains the following information:

- The name and status of the DTC object. For more information about the possible statuses, see Understanding DTC Object Status below.
- **Load Balancing Method**: This is displayed only for LBDN objects.
- **Preferred Load Balancing Method**: This is displayed only for pool objects.
- **Alternate Load Balancing Method**: This is displayed only for pool objects.
- **Host**: The domain name or IP address of a server object.
- **Last Updated**: The timestamp when the object was last discovered.
- **Health Monitors:** This displays health monitors status for pools and servers.  
  The health status displayed for a DTC server includes health monitors assigned through the pool as well as individual health monitors per IP address or domain name of the server, if assigned. For example, monitor_name(monitor_type) for a pool monitor, and IP_address_or_FQDN(monitor_type) for an individual server monitor.
- **Ratio: Dynamic**: In DTC pools and servers visualization, this displays traffic distribution across members and servers with the Ratio: Dynamic load balancing method applied.
- **Number of Pools**: Shows the number of pools for the LBDN.
- **Number of Servers:** Shows the number of servers for the pool.
- **Used by these LBDNs**: Shows all LBDNs that use the pool.
- **Used by these Pools:** Shows all pools that use the server.

To hide or show the visualization panel, click **Hide** **Visualization** or **Show** **Visualization** in the Toolbar.

From a DTC object tooltip, you can perform certain actions on the object or add the default visualization in the panel as discussed later in this topic

> **warning**
>
> ### Note
> 
> Grid Manager can display a maximum of 100 nodes for each level associated with the currently visualized node.

# Understanding DTC Object Status

The DTC object status can be one of the following:

| **Icon (Visualization Panel)** | **Status** **and** **Meaning (Visualization Panel)** | **Status** **and** **Meaning (Traffic Control Tab)** |
| --- | --- | --- |
| *[image: media]* | **Running**:   The object is fully available and operational. | **Running** with a green background:   The object is fully available and operational. |
| *[image: media]* | **Warning**:   The object has a warning message. You can check the syslog for any messages. | **Warning** with a yellow background:   The object has a warning message. You can check the syslog for any messages. |
| *[image: media]* | **Error**:   The object has an error. You can check the syslog for any messages. | **Error** with a red background:   The object has an error. You can check the syslog for any messages. |
| *[image: media]* | **Disabled** (in the legend) and **Requires Manual Enabling** (on mouse hover):   The object is disabled due to a configuration setting and it must be enabled manually. | **Requires Manual Enabling** with a white background:   The object is disabled due to a configuration setting and it must be enabled manually. |
| *[image: media]* | **Temporarily Disabled** (in the legend)   **Will be enabled at &lt;*****time_stamp*****&gt;** (On mouse hover):   The object is disabled for a specified duration due to a configuration setting. It will be automatically enabled at the displayed time.  Or  **Temporarily Disabled**  (On mouse hover):   The object is disabled due to a configuration setting and will be enabled when the DNS service restarts. | **Temporarily Disabled** with a dark grey background:   The object is disabled due to a configuration setting. This might be due to different reasons, such as the "Disable" flag being set, the DNS service not running on the selected member, a zone not assigned to an LBDN, or the LBDN not associated with a zone for the selected DTC member.  When multiple DTC Grid members are configured with different disable options for a DTC object, collectively the status shows as **Temporarily Disabled**. You can view the member level status in the visualization panel. |
| *[image: media]* | **Disabled,** **Working** (in the legend) and** Will be disabled at &lt;*****time_stamp*****&gt;** (On mouse hover):   The object is working fine, but it will be disabled at the displayed time. | **Running** with a green background:   The object is fully available and operational. |
| *[image: media]* | **Disabled, Error** (in the legend) and **Will be disabled at &lt;*****time_stamp*****&gt;** (On mouse hover):   The object has failed. It will be disabled at the displayed time. | **Error** with a red background:   The object has an error. You can check the syslog for any messages. |
| *[image: media]* | **Unknown**:   The DTC object status has not yet been determined. | **Unknown**:   The DTC object status has not yet been determined. |
| *[image: media]* | **Unlicensed**:   The object does not have a DNS Traffic Control license. | **Unlicensed**:   The object does not have a DNS Traffic Control license. |

It may take a few minutes for the status of an object to be updated after a configuration change.  
Grid Manager calculates the status differently for the DTC objects list view and the visualization.

# Calculating the Status

A DTC pool may use multiple health monitors and it has an availability option for these monitors that is used to determine the status of a DTC server. For example, if the availability requirement is "All", then the server is considered to be 'Running' if all the pool health monitors report the server as 'Running'. Servers may appear in multiple pools that have different health monitors and different availability settings. Thus, a DTC server status can be different for different pools.  
You can filter the DTC objects visualization by all members or a specific member. A DTC Grid member uses health monitors to determine the status of a DTC server. A Grid member is associated with an LBDN if that Grid member is assigned a name server for a zone that is associated with an LBDN. A DTC server is associated with an LBDN if it is part of a DTC pool which is used by the LBDN. Thus, if a DTC Grid member is associated to a DTC server through an LBDN, the Grid member checks the status of the DTC server using the health monitors associated with the DTC server's pool. When the visualization is filtered by a specific DTC Grid member, the displayed status of the DTC servers is the status that was determined by that specific DTC Grid member. When you select **All** **Members** in the visualization, the displayed status is an aggregated status across all DTC Grid members.  
For the DTC objects list view, the status is calculated as follows:

- Server: Aggregated status from all pool monitoring across all DTC Grid members.
- Pool: Aggregated status for all its servers across all DTC Grid members.
- LBDN: Aggregated status for all its pools across all DTC Grid members.

For the visualization panel, the status is calculated as follows:

- Server: Status from selected pool monitoring for selected DTC Grid member.
- Pool: Aggregated status for all its servers for selected DTC Grid member.
- LBDN: Aggregated status for all its pools for selected DTC Grid member.
  
  *[legacy-content]*
  
  

# Working with the Visualization Panel

You can do the following in the visualization panel:

- Resize the visualization panel in relation to the DTC objects list view by dragging the vertical separator between the panel and the list view.
- Filter the visualization by Grid members associated to DTC objects through LBDNs: In the **Member** drop-down list, select **All** **Members** or a specific member. For more information about how the object status is determined for all members and for a specific member, see Calculating the Status above. Note that the appliance displays only members that have the DNS Traffic Control license.
- Filter by the DTC status: **All** **DTC** **Status** or **Non-Running** only. You can combine this filter with the members filter.
- Zoom the map in and out by moving the Zoom slider. You can also zoom in and out by using the mouse wheel.
- Click the **Adjust** **tree** **size** **to** **window** **size** icon to adjust the tree size after you zoomed it in our out.
- Change the tree orientation by clicking the Change Tree Orientation icon. The default orientation is vertical.
- Click the **Expand** **Visualization** icon to open the DTC structure in a separate window. Alternatively, you can click the Action icon
  
  *[image: media]*
  
  next to the required DTC object in the table and select **Expand** **Visualization**.
- Click **Show** **Legend/Hide** **Legend** to show or hide the legend when the visualization is expanded.
- Click the Refresh icon to refresh the tree. You can also select the **Auto** **Refresh** checkbox to turn on auto-refresh.
- Click anywhere in the tree and hold your mouse to drag the tree to a desired location in the panel or window.
- Hover your mouse over an LDBN to display the tooltip and do the following:
  
  - Test the LBDN.
  - Add an existing pool to the LBDN.
  - Add a new pool to the LBDN.
  - Disable or enable the LBDN.
  - Edit the LBDN.
  - Delete the LBDN.
  - Schedule the deletion of the LBDN.
  - Switch to the LBDN visualization mode if you are currently in the pool visualization mode.
- Hover your mouse over a pool to display the tooltip and do the following:
  
  - Add the pool to an LBDN.
  - Add an existing server to the pool.
  - Add a new server to the pool.
  - Disable or enable the pool.
  - Edit the pool.
  - Switch to the pool visualization mode if you are currently in the LBDN or server visualization mode.
- Hover your mouse over a server to display the tooltip and do the following:
  
  - Add the server to a pool.
  - Disable or enable the server.
  - Edit the server.
  - Switch to the server visualization mode if you are currently in the LBDN visualization mode.

# Adding Default Visualization

The default visualization allows you to design a DNS Traffic Control structure in the inverse order—first, add a visualization of the default DTC objects structure and create the default disabled objects, and then define the objects one by one.  
To add the default visualization:

1. On the **Traffic** **Control** tab, click the arrow next to the Add icon and select **Default** **Visualization**.  
   The default basic DTC objects structure is displayed in the visualization panel. It consists of the default server, pool, and LBDN. By default, they are disabled.  
   The corresponding server, pool, and LBDN objects are added in the DTC objects list view.
2. Configure the DTC objects in any of the following ways:  
   For information about the configurable properties of DTC objects, see [*Managing DNS Traffic Control Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271694).
   
   - Hover your mouse over an object to display the tooltip, click the required button, and make the necessary configurations.
   - In the DTC objects list view, select the required object, click the Edit icon, and make the necessary configurations.
3. If necessary, configure the topology rulesets, topology database, and DTC health monitors used in your DTC structure. For information, see [*Defining Topology Rulesets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1412137451), [*Importing a Topology Database*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1411318255)[,](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664223/Configuring+Topology+Rules+and+Rulesets#bookmark2101) and [*Using DNS Traffic Control Health Monitors*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404830) correspondingly.
4. After you configured the DTC objects, enable each one of them:
   
   - Hover your mouse over an object.
   - Click **Enable** in the tooltip.

Once all objects are enabled and all necessary service restarts are performed, the whole DTC structure starts working.
