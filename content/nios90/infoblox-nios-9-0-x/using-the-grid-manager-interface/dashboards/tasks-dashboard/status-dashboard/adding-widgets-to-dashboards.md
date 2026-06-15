---
title: "Adding Widgets to Dashboards"
source: "/space/nios90/1457193901"
pageId: "1457193901"
---
You can add all or some of the following widgets to your status dashboards depending on whether you are managing a Grid, an independent appliance, or an Infoblox Orchestration server:

- Infoblox Grid Status
- Grid Upgrade Status
- Member Status (System Status)
- DNS Statistics
- Ranges Over Threshold
- IPv4 Failover Associations Status
- DHCP Statistics
- Network Statistics
- IPv4 Networks Over Threshold
- Discovery Status
- Advanced Discovery Status
- My Commands
- DDNS Statistics
- System Activity Monitor
- File Distribution Statistics
- Active WebUI Users
- Microsoft Servers Status Widget
- CSV Import Manager
- Pending Approvals
- Infoblox Community
- Mobile Devices Status
- DNS Infrastructure Protection Status for Grid
- DNS Infrastructure Protection Status for Member
- DNS Integrity Check
- Cloud Statistics
- Security Status for Grid
- Security Status for All Members
- Pool Licenses Statistics
- DNS Record Scavenging

Grid Manager displays the Security dashboard if you have any or all of the following licenses installed on your appliance: **Threat** **Protection**, **RPZ**, and **Threat** **Insight**. The Security dashboard contains the following widgets, depending on the licenses installed on your appliance:

- Security Status for Grid
- Security Status for All Members
- DNS Infrastructure Protection Status for Grid
- DNS Infrastructure Protection Status for Member
- Response Policy Zone (RPZ) Status for Grid
- Response Policy Zone (RPZ) Status for Member

Note that you must have at least read-only permission to the objects that a widget displays. Otherwise, though you are allowed to select and place the widget on the dashboard, it does not display any information.

To add widgets to your dashboard:

1. **Default** **Status** **Dashboard**: From the **Dashboards** -&gt; **Status** tab -&gt; **Default** tab, click the Configure icon -&gt; **Add** **Content**. This is applicable when you have the default dashboard only.   
   **Configured** **Status** **Dashboards**: From the **Dashboards** -&gt; **Status** tab, select the configured status dashboard, click the Configure icon -&gt; **Add** **Content**.** **  
   **Security** **Status** **Dashboard**: From the **Dashboards** -&gt; **Status** tab -&gt; **Security** tab, click the Configure icon -&gt; **Add** **Content**. This is applicable only when at least one member in the Grid has Threat Protection, RPZ, or Threat Insight license. Note that the Security Status dashboard is a default dashboard and it cannot be renamed or deleted.  
   Grid Manager displays thumbnails of the available widgets. Use the scroll bar on the right to scroll through the widgets, as illustrated in the below Widgets Panel* *figure.
2. Click an icon on the filter panel, as illustrated in the Widgets Panel* *figure, to add a widget to the desired dashboard. The Filter panel is categorized into the following:  
   **Cloud** icon  
   **Security** icon  
   **DNS/DHCP** icon  
   **Reset** icon  
   When you click on an icon, Grid Manager displays thumbnails of the widgets belonging to the respective filter. If you click filters one after the other without clicking **Reset**, Grid Manager displays thumbnails of all widgets along with the icon that indicates the category to which the widget belongs. Click **Reset** to view only those widgets that belong to the selected category.
3. Select and drag a widget to the desired location on your dashboard. You can also click  icon to add a widget to the desired dashboard.  
   After you add a widget to the dashboard, you can configure it to provide relevant data. You can also copy or move a widget, by selecting and dragging it to its new location on your dashboard. Grid Manager saves your dashboard configuration and displays it the next time you log in.  
   You can turn on auto-refresh by clicking **On** in the **Turn Auto Refresh** field at the top of the dashboard to periodically refresh the contents of all widgets in the dashboard. Click **Off** to disable auto-refresh for all widgets in the dashboard. When auto-refresh is disabled, you can enable it for individual widgets by clicking the Configure icon in the corresponding widgets. You can specify the auto-refresh period in seconds. The default auto-refresh period is 30 seconds.
   
   *[legacy-content]*
   
   Widgets have the following icons:

- **Copy/Move**: Click to copy or move the widget from a dashboard to another. For information about how to copy or move, see [Copying or Moving Widgets](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/status-dashboard/copying-or-moving-widgets).
- **Span** **Up/Span** **Down**: Click to resize the widget. Click **Span** **Up** to increase the width of the widget. Click **Span** **Down** to decrease the width of the widget. Note that the fully spanned widgets are moved to the top of the dashboard.
- **Refresh**: Click to update the content of the widget. Each widget contains a status bar at the bottom that displays the last date and time it was updated.
- **Configure**: Click to hide and show the configuration options of the widget.
- **Toggle**: Click to minimize and restore the widget.
- **Close**: Click to remove the widget from a dashboard.

*Widgets* *Panel*

*[drawio]*





#
