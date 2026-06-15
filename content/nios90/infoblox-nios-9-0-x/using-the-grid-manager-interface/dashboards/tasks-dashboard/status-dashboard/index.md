---
title: "Status Dashboard"
source: "/space/nios90/537002114"
pageId: "537002114"
---
A status dashboard contains widgets from which you can view and manage data. Widgets are the building blocks of status dashboards. For more information about widgets, see [*Adding Widgets to Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/adding-widgets-to-dashboards). They provide information about different aspects of your Grid and networks. For example, the *Member* *Status* widget provides general information about a Grid member, and the *Network* *Statistics* widget provides data for a specified network.  
  
The appliance provides a default status dashboard. Grid Manager displays the default dashboard only when there is more than one widget on the dashboard. You can add and modify widgets in the default dashboard, but you cannot rename or delete it. From a dashboard, you can access your most commonly accessed tasks and monitor appliance status. You can configure your own status dashboards to which you can add widgets that help you manage different data. Configuring multiple status dashboards helps organize widgets in a meaningful way and improves dashboard and widget performance. This is especially useful when you have a Grid serving a large number of Grid members. When you configure a new dashboard, you can use the existing dashboard as a template. You can create up to 100 copies at a time using the **Add** **Dashboard** option. For information about how to add status dashboards, see [*Adding Status Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/adding-status-dashboards).  
  
You can add widgets to different dashboards, however, you can add only one widget at a time on each dashboard. The default number of widgets per dashboard is 10. The maximum number of widgets that you can add on each dashboard is 20 at a time. You can define the number of widgets that can be configured on each dashboard in **User** **Profile**. This limitation applies only to dashboards that you configure and does not apply to the default dashboard. For information about how to specify the widget limit, see [*Configuring Widget Limit per Dashboard*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/configuring-widget-limit-per-dashboard).  
  
Infoblox Grid Manager provides a default Security dashboard if you have installed any or all of the following licenses on the appliance: **Threat** **Protection**, **RPZ**, and **Threat** **Insight**. The Security dashboard contains widgets that help you monitor the security status of the Grid. In the Security dashboard, you can add and remove widgets, but you cannot rename or delete them.

> **warning**
>
> **Note**
> 
> To ensure that the Security dashboard displays correct data, use NTP to synchronize the time of the Grid members with that of the Grid Master.

If you have configured a lot of status dashboards, you can use the Quick Navigation icon to quickly access each status dashboard. For information, see [*Using Quick Navigation*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/using-quick-navigation). The Status Dashboard figure below illustrates the typical layout in Grid Manager after you configure multiple status dashboards.   
  
*Status Dashboard*

*[drawio]*

You can do the following on the **Status** tab:

- Add new status dashboards, as described in [*Adding Status Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/adding-status-dashboards).
- Rename a dashboard, as described in [*Renaming Status Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/renaming-status-dashboards).
- Copy or move a widget, as described in [*Copying or Moving Widgets*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/copying-or-moving-widgets).
- Reorder dashboards, as described in [*Reordering Status Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/reordering-status-dashboards).
- Delete dashboards, as described in [*Deleting Status Dashboards*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/deleting-status-dashboards).
- Configure #limit, as described in [*Configuring Widget Limit per Dashboard*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/configuring-widget-limit-per-dashboard).
- Configure Security dashboard properties, as described in [*Configuring Security Status Thresholds*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/configuring-security-status-thresholds).
