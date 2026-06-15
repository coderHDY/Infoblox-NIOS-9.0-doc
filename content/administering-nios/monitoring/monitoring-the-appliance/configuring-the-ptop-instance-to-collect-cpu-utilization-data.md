---
title: "Configuring the PTop Instance to Collect CPU Utilization Data"
source: "/space/nios90/280270363"
pageId: "280270363"
---
The NIOS appliance allows you to configure the collection of CPU utilization data of top processes that are running on the Grid Master and all members of a Grid, or a standalone system. The PTop tool that runs in the background, collects the CPU utilization data and logs it in PTop logs.

To configure the PTop instance, complete the following steps:

1. **Grid**: From the **Infoblox Grid** tab, select the **Grid Manager** tab. Expand the Toolbar, and then select **Grid Properties** -> **Edit**.  
   Or,  
   **Standalone system**: From the **System** tab, select the **System Manager** tab. Expand the Toolbar, and then select **System Properties** -> **Edit**.
2. In the *Grid Properties* editor or the *System Properties* editor, click the **Monitoring** tab, and then complete the following steps in the *PTop Log* section:
   
   - **Number of Top Processes**: Enter the number of top processes for which you want to check the CPU utilization. If you enter 11, NIOS displays the CPU utilization of the top 11 processes. The minimum number of processes for which you can check the utilization is 10 and the maximum is 25. By default, the widget displays the CPU utilization for 10 top processes.
   - **PTop Interval**: Enter the time interval in seconds to determine the frequency with which the Ptop tool must run and collect data. The Ptop tool is an internal tool that runs in the background and collects CPU utilization and other data. The minimum interval that you can enter is 2 seconds and the maximum is 30 seconds. By default, the PTop interval is set as 2 seconds.
3. Click **Save & Close**.
