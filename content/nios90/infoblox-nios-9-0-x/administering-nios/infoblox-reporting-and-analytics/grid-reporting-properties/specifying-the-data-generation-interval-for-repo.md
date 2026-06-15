---
title: "Specifying the Data Generation Interval for Reports"
source: "/space/nios90/1457127476"
pageId: "1457127476"
---
You can specify the time interval when the appliance generates data for the *DNS* *Statistics* *per* *View* and *DNS* *Statistics* *per* *Zone* reports. The default value for the data generation interval for these reports is one day (86400 seconds). You can specify different data generation intervals for the *DNS* *Statistics* *per* *View* and *DNS* *Statics* *per* *Zone* reports.

To specify the data generation interval for *DNS* *Statistics* *per* *View* and *DNS* *Statistics* *per* *Zone* reports, complete the following:

1. From the **Administration** tab, select the **Reporting** tab -&gt; expand the Toolbar and click **Grid Reporting Properties**.   
   or  
   From the **Infoblox Grid** tab -&gt; **Grid Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click **Edit** -&gt; **Grid Reporting Properties** from the Toolbar.
2. In the *Grid Reporting Properties* editor, select the **Data Generation Schedule** tab and complete the following:
   
   1. **Data** **Generation**: Enter the time in HH:MM:SS AM/PM format. You can also click the Clock icon to select a time from the drop-down list.
3. Save the configuration.

For more information about the reports DNS Statistics per DNS View and DNS Statistics per Zone, see* *[*IPAMv4 Utilization Dashboards*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/ipamv4-utilization-dashboards).
