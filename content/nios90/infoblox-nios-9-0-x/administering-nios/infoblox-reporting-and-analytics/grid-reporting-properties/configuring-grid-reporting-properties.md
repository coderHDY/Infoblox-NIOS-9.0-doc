---
title: "Configuring Grid Reporting Properties"
source: "/space/nios90/1457029215"
pageId: "1457029215"
---
After you configure the reporting server, you must enable the data indexing and select at least one reporting category to ensure that the reporting service functions properly.

> **warning**
>
> ### Note
> 
> You must select the correct report categories in order for the reporting server to generate the correct data in corresponding reports.

Complete the following to configure the Grid reporting properties:

1. From the **Administration** tab -&gt; **Reporting** tab, click **Grid** **Reporting** **Properties** from the Toolbar.   
   or  
   From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab and click **Edit** -&gt; **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid* *Reporting* *Properties* editor, select the **General** -&gt; **Basic** tab
3. Complete the following:
   
   1. **Reporting** **Server**: Grid Manager displays the name of the reporting server.
   2. **Enable** **Data** **Indexing**: Data transmission is disabled by default. You must select this checkbox to ensure that all Grid members transmit data to the reporting appliance. Enabling data transmissions for all members can affect the overall data consumption on the reporting server. For information about the daily maximum data consumption per day for your reporting appliance, see the Default Index Space Configured for Each Report Category table below.
   3. **Enable Time Based Retention**: Select this checkbox if you want the reporting data to be retained for a number of days you specify. You can specify the number of days in the **Retention in days** column. When you select this checkbox, NIOS displays a warning message indicating that the reporting data is deleted after the number of days specified in the **Retention in days** column. This checkbox is disabled by default.  
      Note that the **Enable Time Based Retention** feature is not available for the IP Address Usage Report, the DNS QPS Usage Report, and the DHCP LPS Usage Report as the deletion of data after the retention period impacts the subscription count, which in turn generates inaccurate data in these reports.
   4. **Report** **Category**: Select the reports you want the reporting server to generate. The reporting server automatically configures data sources and configurations required to generate the reports you select here. The required data is stored in the reporting server database. By default, no report categories are selected. For a list of report categories, see [Predefined Dashboards](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards). You must select at least one reporting category for the reporting service to start working.
      
      1. **Index%**: Displays the actual storage space allocated for a reporting index. You can modify this value between 0 and 100. When you enable an index category and leave it at 0%, the appliance displays an error message. Make sure that the total percentage of the index storage space for all report categories equals 100% or less than 100%. The appliance displays a warning message when the total percentage of the index storage space is less than 100%.
      2. **Used%**: Displays the index storage space used by a reporting index.
      3. **Retention in days**: Enter the number of days up to which you want the reporting data to be retained. The data will be permanently deleted after this number of days. You can enter a value between 7 and 365. The default value is **No Retention**.
      4. **IndexName:** Displays the reporting index name, which is displayed on the which is displayed on the Reporting Index Usage Statistics report, [*Predefined Dashboard*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards).
         
         Note that if you back up the reporting data before the expiry of the retention period, then you can restore the data at a later date.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
