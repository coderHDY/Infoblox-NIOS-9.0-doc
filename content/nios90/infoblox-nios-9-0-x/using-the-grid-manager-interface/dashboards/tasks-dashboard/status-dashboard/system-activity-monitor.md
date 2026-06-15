---
title: "System Activity Monitor"
source: "/space/nios90/1457652558"
pageId: "1457652558"
---
The *System* *Activity* *Monitor* widget provides information about the following resources on the selected Grid member: CPU and its utilization, system memory, NIC usage, top processes, and information about VLAN interfaces. By default, the widget displays the system activity of the Grid Master. You can add a *System* *Activity* *Monitor* widget to your Dashboard for each Grid member whose resources you want to monitor.

To configure the *System* *Activity* *Monitor* widget, click the Configure icon and select a Grid member and the resources that you want to track:

- Click **Select** **Member**. In the *Member* *Selector* dialog box and select a Grid member from the list.
- **CPU:** Select which type of CPU usage you want to track:
  
  - **User:** The CPU usage of user applications, such as programs and libraries.
  - **System:** The CPU usage of the kernel and drivers.
  - **Idle:** The percentage of CPU that is not in use.
- **System Memory:** Select which portion of the system memory you want to track:
  
  - **Real Memory Used:** The physical RAM usage.
  - **Swap Used:** The swap area usage. The swap area is the disk area that temporarily holds a process memory image.
- **NIC Usage:** Select how you want to measure network traffic:
  
  - **Bytes:** Reports the number of bytes.
  - **Packets:** Reports the number of packets.
- **NIC Settings**: Select the port on which you want to measure network traffic. If you have configured VLANs, Grid Manager displays them in the format LAN1 nnnn or LAN2 nnnn, where nnnn represents the associated VLAN ID. For example, a VLAN configured on LAN1 can be displayed as LAN1 297 and a LAN2 VLAN can be LAN2 21. For more information about VLANs, see [*VLAN Management*](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management).  
  Note that for vNIOS appliances, some of the options in the drop-down list may vary depending on your vNIOS configuration. For example, if you are using a single network interface instance of vNIOS for Google Cloud, you will see choices specific to the LAN1 interface only. For more information, see the vNIOS documentation specific to your product at [*Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances)*.*
- **CPU Utilization and Top N Processes:** Set the auto refresh period in this section. NIOS displays the information for all available cores.
  
  - **Auto Refresh Period for CPU Utilization and Top N Processes:** Enter the time interval in seconds for the CPU Core Utilization graph and the top N process data to auto refresh and display the CPU core utilization information. If you enter 12, the graph displays new information after every 12 seconds. You can enter a minimum refresh interval of 10 seconds and a maximum refresh interval of 30 seconds. By default, the time interval is set to 10 seconds. This field is applicable only to the **CPU Utilization **and** Top N Processes** tabs.
- **Auto Refresh Period:** Enter the refresh interval in seconds for the data in the **CPU**, **System Memory**, and **NIC Usage** tabs to auto refresh.

The *System* *Activity* *Monitor* widget displays a tab for each resource: **CPU**, **System** **Memory**, **NIC** **Usage**,** CPU Utilization**,** Top N Processes**.

Each tab contains a line graph that tracks the resource utilization per second.

- **CPU:** The graph on the **CPU** tab tracks the percentage of CPU usage.
- **System Memory:** The graph on the **System** **Memory** tab tracks the memory utilization percentage.
- **NIC Usage:** The graph on the **NIC** **Usage** tab tracks either bytes or packets per second.
- **CPU Utilization:** If you select the **Live** option, the graph tracks live CPU utilization data for the last 10 minutes for all CPUs in your Grid member. The graph is refreshed based on the time interval you specify in the **Auto Refresh Period for CPU Utilization and Top N Processes** field. Each CPU is denoted in a different color. If you select the **Historical** option, you can view the CPU utilization data for up to a maximum of past 60 minutes based on the time range you specify in the **Earliest** and **Latest** fields. For example, if you enter 2019-09-05 and 09:20:42 AM in the **Earliest** field and 2019-09-05 and 10:20:42 AM in the **Latest** field, the graph displays the CPU utilization data for 5th September 2019 between 9:20:42 AM and 10:20:42 AM. You can view data for a maximum of past of 5 days but the time difference between **Earliest** and **Latest** time should not exceed 60 minutes.
- **Top N Processes:** If you select the **Live** option, the table displays the process ID and name of the top N processes that are consuming CPU utilization. N is the number that you specify in the **Number of Top Processes **field on the **Monitoring** tab of the *Grid Properties* editor. It also displays the percentage of CPU utilized by each process. The data is refreshed based on the time interval you specify in the **Auto Refresh Period for CPU Utilization and Top N Processes** field. If you select the **Historical** option, you can view past top N process data based on the time range you specify in the **Earliest** and **Latest** fields. For example, if you enter 2019-09-05 and 09:20:42 AM in the **Earliest** field and 2019-09-05 and 10:20:42 AM in the **Latest** field, the graph displays the top process data on 5th September 2019 between 9:20:42 AM and 10:20:42 AM. You can view data for a maximum of 5 days.

The time is displayed according to the time zone specified in the User Profile. If the auto-detect time zone option is enabled and Grid Manager cannot determine the browser time zone, then the time is displayed in UTC format. You can mouse over the graph to display the coordinates of any point in the graph.
