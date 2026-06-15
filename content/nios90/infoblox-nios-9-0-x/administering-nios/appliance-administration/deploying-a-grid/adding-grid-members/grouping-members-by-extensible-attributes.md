---
title: "Grouping Members by Extensible Attributes"
source: "/space/nios90/1483637037"
pageId: "1483637037"
---
When you have a few members in your Grid, you can organize and group them by extensible attributes that contain the same values. Using the **Group** **Results** function, you can organize your members in a meaningful way and quickly identify them based on common data. When you group members by multiple extensible attributes, the appliance groups the members hierarchically based on the order of the filters. For example, when you filter members first by extensible attribute "Site equals London" and then by extensible attribute "Organization equals Engineering," the appliance groups corresponding members first by Site and then by Organization based on the values you enter. In the **Infoblox** **Grid** tab -&gt; **Grid** **Manager** tab -&gt;**Members** tab, Grid Manager displays the grouped members in a hierarchical view that displays the member group name (**London**). You can click the London link and drill down to the next level of grouping. In this case, Grid Manager displays the organization group (**Engineering**) in the **Members** tab. When you click the **Engineering** link to drill down to the next level, all associated members that belong to this member group (**London** -&gt; **Engineering**) are displayed.  
To go back to a previous hierarchical view, click the link of the corresponding level in the breadcrumb.  
To group members by extensible attributes:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.   
   or   
   From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Services** tab.  
   Note that you can use the "Group Results" function for the following services: DNS, DHCP, TFTP, FTP, HTTP, NTP, Captive Portal, and Reporting services.
   
   or  
   From the **Data** **Management** tab, select the **DHCP**, **File** **Distribution**, or **DNS** tab -&gt; **Members/Servers** tab.
2. Complete the following to group members with the same extensible attribute value:
   
   - **Group** **Results**: Select this checkbox to enable the appliance to group members by extensible attributes.
   - **Group** **By**: From the drop-down list, select the first extensible attribute that you want the appliance to use for filtering members.

Grid Manager displays data per group of members configured with the same extensible attribute value.  
To add additional **Group** **By** filter, click the + icon, and then select a value from the drop-down list. You can apply up to 10 **Group** **By** filters. You can also delete a filter by clicking the - icon.  
When you enable reporting service on the Grid and configure multi-site cluster, you can group reporting members by reporting site extensible attributes. For information about reporting clusters, see [*Configuring Reporting Clusters*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/configuring-reporting-clustering).  
Grid Manager displays the following information for the specified extensible attribute:

- &lt;*Selected extensible attribute*&gt;: Displays the selected extensible attribute value.
- **Status**: This is the overall status for all members in the group. Depending on the status of each member, the overall status can be one of the following: **Working**, **Warning**, **Failed**, **Offline**, **Inactive**, or **Unknown**. For information about the status, [*Status Dashboard*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard).  
  Note that in an HA pair, when one of the appliances is in the **Working** status and the other appliance has a status other than **Working**, **Inactive**, and **Unknown**, then the overall status of HA members is **Warning**. When you use filters and the group by extensible attribute feature, filters take precedence over the group by function.

When you drill-down to the member level, Grid Manager displays the members in the group.
