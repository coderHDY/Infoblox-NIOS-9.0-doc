---
title: "Configuring SDN and SD-WAN Polling Properties"
source: "/space/nios90/1343161776"
pageId: "1343161776"
---
On the Grid side, you can enable or disable the SDN and SD-WAN polling, specify end host collection timing, and define network view mapping rules. If SDN and SD-WAN polling is disabled, only traditional network devices are polled. Controlling the polling setting and end host data collection allows you to reduce the load on your system if required.

For Meraki devices, you can select between different modes for mapping Meraki networks to NIOS network views. This mapping mechanism is required as your Meraki infrastructure may have overlapping IP ranges that can be supported under different network views. The mapping rules include:

- Mapping to the predefined SDN network view
- Automatic mapping
- Custom mapping

To configure SDN/SD-WAN polling properties, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab, and then click **Discovery**.
2. From the Toolbar, select **Edit** > **Grid Discovery Properties**.
3. Click the **SDN/SD-WAN** tab.
4. On the **Basic** tab, complete the following:
   
   - **Enable SDN/SD-WAN polling**: Select to enable or disable SDN and SD-WAN polling.
   - **Default SDN Network View**: The network view that will be assigned to discovered Cisco Meraki devices for which the automatic network view mapping is disabled. You enable or disable automatic mapping in the advanced SDN and SD-WAN polling settings. For more information, see step 5 below.
   - **Detailed End Host Collection Interval**: Select to enable or disable the collection of end hosts (or clients in Cisco Meraki terminology). If enabled, specify one of the following:
     
     - **Periodic Collection**: Specify the N minutes or hours when the collection should occur.
     - **Scheduled Collection**: Schedule recurrent collection based on hourly, daily, weekly, or monthly time periods. Choosing this option, click the Calendar icon and a Polling Scheduler appears; click the Edit icon to make scheduling changes. Choose a recurrence pattern of **Once**, **Hourly**, **Daily**, **Weekly,** or **Monthly**; in all cases, you must choose an **Execution Time**.
5. On the **Advanced** tab, complete the following:
   
   - **Disable SDN/SD-WAN Discovery for networks not in IPAM**: If set, new unmanaged networks discovered on the SDN controller are not created in the Infoblox IPAM.
   - **Network View Mapping**: Select one of the following:
     
     - **Disable automatic mapping and use predefined SDN Network View**: Select to map collected SDN/SD-WAN devices to the default SDN network view defined in step 4 above.
     - **Automatically create network views for unmapped networks**: Select to automatically map collected networks to their network views using Network Insight internal rules. Network views that do not exist are created automatically. The mapped networks are displayed in the table that is not editable.
     - **Enable network view mapping defined below**: This is custom mapping. Select to manually map collected networks to appropriate network views. To change a network view entry, click it in the table.
6. Click **Save & Close**.

> **warning**
>
> ### Note
> 
> A network name in the mapping table is made up by combining the Meraki organization and network name. The Source column displays the fabric name or config name that you previously defined for the SDN or SD-WAN configuration. The network view name is made of the network and source values.
