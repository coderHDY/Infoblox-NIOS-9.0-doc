---
title: "Member Status (System Status)"
source: "/space/nios90/1457193829"
pageId: "1457193829"
---
The *Member* *Status* widget provides status information about the system resources and services of a Grid member, including the reporting server. The *System* *Status* widget provides the operational status about an independent appliance. Add a *Member* *Status* widget to your Dashboard for each Grid member that you want to monitor. The widget always displays the services that a Grid member is running. You can then configure it to display additional information and specify how the information is displayed.  
You can modify the *Member* *Status* or the *System* *Status* widget by clicking the Configure icon. If you have an independent appliance, you can only configure some of the following:

- For *Member Status* widget only: Click **Select Member** to select a Grid member for display. When you select the reporting server, the widget displays reporting usage.
- Select the information you want to display:
  
  - **Show Role:** For *Member Status* widget only. Click to display whether the appliance is a Grid Master, Grid Master candidate, or Grid member. An independent appliance does not have a Grid license installed.
  - **Show Hardware Type:** Click to display the appliance hardware model.
  - **Show HA Status:** Click to display whether the appliance is part of an HA pair. It displays one of the following:
    
    - **Standalone**: The Grid member is an independent appliance.
    - **HA OK**: The Grid member is part of an HA pair that is functioning properly.
    - **HA Broken**: The appliance is part of an HA pair that is not operating properly. You can check the logs to determine the problem.
  - **Show System Uptime:** Click to display the duration of time (days, hours, and minutes) that the Grid member has been up and running.
- **Statistics:** Select the data that you want to display and its format:
  
  - **CPU:** Click to display the percentage of CPU that is in use. Select either **Dial** or **Bar** for the display format.
  - **Memory:** Click to display the current percentage of memory that is in use. Select either **Dial** or **Bar** for the display format.
  - **Database:** Click to display the percentage of the database that is in use. Select either **Pie** or **Bar** for the display format.
  - **Disk:** Click to display the percentage of the data partition on the hard disk drive in use. Select either **Pie** or **Bar** for the display format.
  - **System** **Temperature:** Click to display the system temperature. Depending on the hardware model, the system temperature may not be available. Select to display the temperature in either **Celsius** or **Fahrenheit**.
  - **CPU Temperature**: Click to display the CPU temperature. Depending on the hardware model, the CPU temperature may not be available. Select to display the temperature in either **Celsius** or **Fahrenheit**.

Click the Configuration icon again to hide the configuration panel after you complete the modification.

Grid Manager displays the hostname of the appliance at the top of the widget. You can click the name link to view detailed information about the appliance. The widget also displays the upgrade status if the member is currently in the process of an upgrade. If the member is scheduled for an upgrade, the **Scheduled for upgrade** link appears. You can click this link to access the **Grid** tab -&gt; **Upgrade** tab to view more details about the date and time of the scheduled upgrade.

The widget also displays the service status of the following: FTP, TFTP, HTTP (File Distribution), DNS, DHCP, NTP, bloxTools, Captive Portal, Cloud Sync (Cloud DNS Sync in 9.0.x versions prior to 9.0.4), DNS Accelerator, and Reporting in the Services section. The service status can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|   ![Status Dashboard_green_color_icon.png](/assets/1457193829/62148256-4d0d-4491-b238-3987ee1221d9.png)   | Green | The service is enabled and running properly. |
|   ![Status Dashboard_yellow_color_icon.png](/assets/1457193829/400c857b-f11f-405f-a3fe-f6b6de3a81f0.png)   | Yellow | The service is enabled, but there may be some issues that require attention. |
|   ![Status Dashboard_red_color_icon.png](/assets/1457193829/4bbd7d5c-dec1-4229-ae58-51f5c51eb745.png)   | Red | The service is enabled, but it is not running properly or is out of synchronization. (A red status icon can also appear temporarily when a service is enabled and begins running, but the monitoring mechanism has not yet notified the GUI engine.) |
|   ![Status Dashboard_gray_color_icon.png](/assets/1457193829/13a0ad0f-f333-4c6c-b3bf-16ccf5f196f9.png)   | Gray | The service is not configured or is disabled. |



The widget also displays the statistics you specified, such as CPU usage, memory, and database usage, in the format you selected.  
When you select the reporting server, you can also see the reporting usage information:

- **Reporting** **Usage**: Displays the daily consumption rate for the reporting service.

For more information about reporting, see [*Infoblox Reporting and Analytics*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics).
