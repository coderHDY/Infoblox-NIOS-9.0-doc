---
title: "Modifying Networks"
source: "/space/nios90/1455292598"
pageId: "1455292598"
---
Grid Manager enables the user to edit select DHCP configurations, including the following:  
**IPv4** **DHCP** **Options/IPv6** **DHCP** **Options**: DHCP options provide specific configuration and service information to DHCP clients. For more information, see [*About IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).  
**DHCP** **Forwarding**: Enables routers connecting multiple networks to act as a silent DHCP relay and forward DHCP packets between them. The **DHCP** **Forwarding** page lists the interfaces on the currently selected network on which DHCP Forwarding is enabled. If more than one device on the selected network also enables DHCP Forwarding, they also appear here. DHCP Forwarding configuration involves simply enabling or disabling the service for a network endpoint on the device. In order for DHCP forwarding to work, you must restart the DHCP service on the Grid member that is serving the network; If you run DHCP service on both LAN1 and LAN2 of the Grid member, then both addresses are written to the device.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Name** link for the device you want to inspect.
3. Click the **Networks** tab.
4. Click the Action icon, for a network in the table, and choose **Edit**. This feature is enabled only for networks that are managed under IPAM.
5. Click the **DHCP** **Forwarding** tab.
6. Select the checkbox for any listed instance and do the following if necessary:
   
   - Click **Configure**. Grid Manager queries you to confirm that DHCP Forwarding are configured on the selected network **(A task will be created to configure DHCP forwarding for this network on these devices: &lt;device_name&gt;. You can view the execution log for the task in the Task Manager to see the results)**.
   - Click **Delete** to remove the selected DHCP Forwarding instance from the network.



*DHCP* *Forwarding* *confirmations*

![DHCP Forwarding confirmations](/assets/1455292598/961d3f1b-7368-4835-93b6-f5e93d4d3bb8.jpg)

1. Click **Yes** to confirm the activating or deletion of DHCP forwarding on the selection, or **No** to reject the change.
2. Click **Save** **&** **Close**.
