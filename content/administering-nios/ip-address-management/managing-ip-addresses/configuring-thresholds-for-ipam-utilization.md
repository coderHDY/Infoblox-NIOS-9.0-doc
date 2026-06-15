---
title: "Configuring Thresholds for IPAM Utilization"
source: "/space/nios90/280764453"
pageId: "280764453"
---
You can define thresholds for IPAM utilization in a network or network container and configure the appliance to send SNMP trap and email notifications to a designated destination when IPAM utilization in a network or network container crosses the configured threshold. IPAM utilization for a network is the percentage based on the IP addresses in use divided by the total addresses in the network and for a network container that contains subnets, it is the percentage of the total address space defined within the container regardless of whether any of the IP addresses in the subnets are in use. The appliance sends an SNMP trap and email notification only once when the IPAM utilization in a network or network container exceeds the Trigger value and when it drops below the Reset value. The default Trigger value is 95% and the default Reset value is 85%. The IPAM utilization notifications are sent for IPv4 networks and IPv4 network containers only. The appliance updates the IPAM utilization data immediately for a network container, but for a network it is updated every 15 minutes.  
You can define thresholds for IPAM utilization at the Grid level and network level. The appliance applies the settings hierarchically in a parent-child structure. By defining thresholds at a higher level, all networks can then inherit the same settings and you do not have to redefine them for each network. For example, if you set the thresholds for IPAM utilization at the Grid level, then the settings applies to all the network containers and networks in any network view. However, if you override these settings at the network container or network level, then the settings applies to that network or network container and any network within that network or network container in the same network view. If you set the thresholds for an individual network, then it overrides settings at a higher level.

> **warning**
>
> ### Note
> 
> Infoblox recommends that you do not enable SNMP traps and email notifications for IPAM utilization during an upgrade, because if you have configured notifications you may have to unconfigure them during an upgrade.

You can configure the thresholds for IPAM utilization at the Grid level and override them at the network level. To configure the IPAM utilization thresholds at the Grid level, see [*Defining Threshold for Traps*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492).  
To configure the IPAM utilization thresholds for a IPv4 network, network container, or network template, complete the following:

1. **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -> *network_container* checkbox, and click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and click the Edit icon.  
   **Network** **Template**: From the **Data** **Management** tab, select the **DHCP** tab -> **Templates** tab -> *DHCP_template *checkbox, and click the Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode**, select the **IPv4** **IPAM** **Utilization** **Notification** tab, and then complete the following:
   
   - **IPAM** **Utilization** **Notification**: Click **Override** to override the inherited property, and specify the following:
     
     - **Enable** **SNMP** **Notifications**: Select this for the appliance to send an SNMP trap to the trap receiver that you define for the Grid when IPAM utilization crosses the configured threshold.
     - **Enable** **Email** **Notifications**: Select this for the appliance to send an email notification to a designated destination if IPAM utilization crosses the configured threshold.
   - **IPAM** ** Threshold ** **Settings**: Click **Override** to override the inherited property, and specify the following:
     
     - **Trigger**: Enter a Trigger value between 0 to 100. The appliance sends an SNMP trap and—if configured to do so—sends an email notification to a designated destination when the IPAM utilization exceeds the Trigger value. The default Trigger value is 95.
     - **Reset**: Enter a Reset value between 0 to 100. The appliance sends an SNMP trap and —if configured to do so—an email notification to a designated destination when the IPAM utilization drops below the Reset value. The default Reset value is 85.
   - **Email** **Addresses**: Click **Override** to override the inherited property. Click the Add icon, and then enter an email address to which you want the appliance to send email notifications when IPAM utilization for the network or network container crosses the configured threshold. You can create a list of email addresses.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
