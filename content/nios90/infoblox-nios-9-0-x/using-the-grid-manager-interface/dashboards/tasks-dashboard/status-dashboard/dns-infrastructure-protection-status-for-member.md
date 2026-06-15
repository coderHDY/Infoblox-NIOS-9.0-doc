---
title: "DNS Infrastructure Protection Status for Member"
source: "/space/nios90/1457652491"
pageId: "1457652491"
---
The *DNS Infrastructure* *Protection* *Status* *for* *Member* widget displays statistics about the DNS Infrastructure Protection events for a specific Grid member that supports Infoblox DNS Infrastructure Protection. For information about the DNS Infrastructure Protection feature, see [*About Infoblox DNS Infrastructure Protection*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection).  
To configure the *DNS Infrastructure* *Protection* *Status* *for* *Member* widget, click the Configure icon and complete the following:

- Click **Select** **Member**. In the *Member* *Selector* dialog box, select a Grid member from the list that supports Infoblox DNS Infrastructure Protection.
- Select either **Dial** or **Bar** as the display format for the following resources: **Smart NIC CPU**, **Traffic being dropped**, **Traffic being received**. Note that Smart NIC CPU selection is displayed only when you select a Grid member that supports Infoblox DNS Infrastructure Protection.
- **SNIC Settings**: Select the interface for which you want to view the interface usage information. You can select one of the following from the drop-down list: **HA**, **LAN1**, or **LAN2**. You can view the interface usage information for the selected interface in the **Interface Usage** tab. This is displayed only when you select a Grid member that supports Infoblox DNS Infrastructure Protection.  
  Note that you can select the HA port even though the Grid member is not an HA pair, because the HA port on a single member can be exposed to potential attacks.
- **NIC** **Settings**: Select the interface for which you want to view the interface usage information. You can select one of the following from the drop-down list: HA, LAN1, or LAN2. You can view the interface usage information for the selected interface in the Interface Usage (LAN1) tab. This is displayed only when you select a Grid member that supports Software DNS Infrastructure Protection.
- **Events** **Over** **Time**: Select the severity level, **Critical**, **Major**, **Warning**, or **Informational**, to view the details for a specific severity level. You can select one or all the available severity levels.
- Select the **AutoRefreshPeriod** checkbox to turn on auto-refresh, and specify the auto-refresh period in seconds. The default is 30 seconds.

> **error**
>
> ### Warning
> 
> If the [*Detailed Status panel*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status) is open, the following actions take place:
> 
> - Grid Manager auto refreshes at a rate of 30 seconds.
> - Widgets that support user-specified auto refresh, refresh at the rate specified in the **Auto Refresh Period** field.
> 
> Therefore, even if you set the session timeout to be to greater than the auto refresh rate, auto refresh still takes place. The Grid Manager session does not time out because auto refresh takes precedence over the session timeout.

Click the Configure icon again to hide the configuration panel after you complete the modification. You can do the following in this widget:

- Click the **Summary** tab to view the statistics for the following resources in the format you selected:
- **Smart** **NIC** **CPU**: The percentage of Smart NIC CPU that is in use. This is displayed only when you select a Grid member that supports Infoblox DNS Infrastructure Protection.
- **Traffic** **being** **dropped**: The percentage of traffic dropped. It is displayed for both LAN1 and LAN2 interfaces.
- **Traffic** **being** **received**: The percentage of traffic received. It is displayed for both LAN1 and LAN2 interfaces.
- Click the **Events** **Over** **Time** tab to view information about the DNS Infrastructure Protection event counts for each severity level over the given time frame. It displays line graphs that show the DNS Infrastructure Protection event counts for each event severity over the last 30 minutes. Each event severity is represented by a different color line graph. You can hover your mouse over the graph to view the coordinates of any point in the graph. You can also click the Events Over Time legend and use it as a filter to view the graph for specific severity level.
- Click the **Top** **10** **Rules** tab to view information about the DNS Infrastructure Protection rules that have the most number of hits. It displays a bar chart to track the top 10 DNS Infrastructure Protection rules with the most number of hits for critical, major, and warning severity levels. Each event severity is displayed in a different color.  
  If you have configured a Reporting member in the Grid, the **Go** **To** **History** link is displayed in this tab. You can click **Go** **To** **History** to view the *DNS Infrastructure* *Protection* *Top* *Rules* *Logged* report in the **Reporting** tab. To navigate back to the Security dashboard from the **Reporting** tab, click **Back** **to** **Security** **Dashboard** at the top left corner of the navigation bar in the **Reporting** tab.
- Click the **Top 10** **Clients** tab to view information about the top sources (client IP addresses) that triggered DNS Infrastructure Protection rules. It displays a bar chart to track the top 10 clients with the most number of hits.  
  If you have configured a Reporting member in the Grid, the **Go** **To** **History** link is displayed in this tab. You can click **Go** **To** **History** to view the *DNS Infrastructure* *Protection* *Top* *Rules* *Logged* *by* *Source* report in the **Reporting** tab. To navigate back to the Security dashboard from the **Reporting** tab, click **Back** **to** **Security** **Dashboard** at the top left corner of the navigation bar in the **Reporting** tab.
- Click the **Interface** **Usage** tab to view information about the interface usage (in megabytes per second) over a given time frame. It displays line graphs that show the interface usage trends for the selected interface over the last 30 minutes. You can hover your mouse over the graph to view the coordinates of any point in the graph.
- Click the **Smart** **NIC** **CPU** tab to view the information about the percentage of CPU usage over a given time frame. It displays line graphs that show the CPU usage trends over the last 30 minutes. You can hover your mouse over the graph to view the coordinates of any point in the graph. This is displayed only when you select a Grid member that supports Infoblox DNS Infrastructure Protection.
