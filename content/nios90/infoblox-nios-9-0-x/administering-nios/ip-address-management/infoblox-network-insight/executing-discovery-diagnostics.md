---
title: "Executing Discovery Diagnostics"
source: "/space/nios90/280273280"
pageId: "280273280"
---
You can execute a discovery diagnostic to help determine why a specific device is presenting difficulties in discovery. For example, a given device may be reachable but show an overall status of **Failed** in the *Discovery* *Status* dialog. A discovery diagnostic steps through a complete discovery process based on the configuration on the Probe member to which the device is assigned. The diagnostic runs the gamut from fetching SNMP object ID information to ARP table reading and to ICMP pings and traceroutes.

You can do the following in the Discovery Diagnostics dialog:

- View all existing discovery diagnostic tasks that were executed in the last 12 hours.
- Enable or disable SNMP debugging for a device. The SNMP debugging is enabled by default.

Note that you must be a superuser to perform a discovery diagnostic. To execute a discovery diagnostic, complete the following:

1. From the **Data Management** tab, select the **IPAM** tab, and then click **Discovery Diagnostics** from the Toolbar.
2. In the *Discovery* *Diagnostic* editor, complete the following:
   
   - **Existing Discovery Diagnostic Task: **Select this option to choose an existing discovery task from the **Task ID** drop-down list. The appliance displays all the discovery diagnostic tasks that were executed in the last 12 hours.
   - **New Discovery Diagnostic Task**: Select this option to initiate a new discovery diagnostic. To start a new discovery diagnostic task, complete the following:
     
     - **Discovery Member**: Make sure that you select a discovery member for an IP address that does not exist in any network (in the **IPAM** tab) or excluded from discovery. Click **Select** to select a discovery member. You can click **Clear** to remove the discovery member
     - **IP address**: Enter the IPv4 or IPv6 address of the device on which you want to perform the test. The discovery diagnostic runs a full discovery procedure against the specified IP address. Ensure that you select the respective network view in which this IP address resides.
     - **NetworkView**: If you have multiple network views, select the network view in which the IP address resides from the drop-down list. If you have only one network view, which is the default view, the **NetworkView** drop-down list is hidden by default. NIOS conducts a discovery diagnostic for the IP address in the selected network view.
     - **CommunityString**: Specify the community string for the device if the required SNMP credential is not currently configured for the discovery member. It may not be necessary to enter a community string if the device is already discovered by NIOS and is a managed device.
     - **ForceTest**: To force a diagnostic against the device, select **Yes**.
   - **Enable SNMP debug**: As a troubleshooting aid, the SNMP debugging option is enabled by default. When you enable this option, the appliance collects all SNMP communications between NetMRI and a device. The SNMP logs are useful for troubleshooting purposes. Clear this checkbox to disable the SNMP debugging for a device.
3. Click **Start** to start the discovery diagnostic. The lower pane displays the complete discovery sequence for the chosen device, and whether or not the discovery is successful. You can click **Stop** at any time to end the diagnostic sequence.

The output log of the diagnostic is displayed in the lower pane, and it shows the attempt for the complete discovery process. You can then do the following:

- You can click **Select** **All** to select the complete text in the lower pane for copying and pasting to the Clipboard and a text editor. You can also monitor the test messages in this pane.
- Click **Download** **as** **text** to download the complete discovery diagnostics in a text file for the selected device. The default name of the downloaded file is discovery_diagnostic_nnn.nnn.nnn.nnn.txt, where nnn.nnn.nnn.nnn is the IP address of the selected device. The **Download** **as** **text** button remains disabled until the download is complete.

# Viewing the Management State of IPs in Discovered Networks

You can view the management state for any IP address, in any network, that is associated with any discovered device.

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the Action icon
   
   ![image](/assets/280273280/a4ceb8af-fc04-4a6d-8a9a-0312cc0e9ff7.png)
   
   for a chosen device and choose **Networks** from the popup menu.
3. Choose a network from the list. Grid Manager switches to the IPAM page view of the selected network.  
   The IPAM Home page displays the IP Map for the chosen network. The page shows information in graphical format, indicating elements such as **Used** Addresses, fixed addresses and IP reservations, **Unmanaged** IPs, **Host** **Not** **in** **DNS/DHCP**, and all other objects or information associated with IP management. The user benefits from this view by immediately seeing which IPs in the network contain devices that remain unmanaged by Grid Manager. These Unmanaged IP values appear in light yellow. Hovering the mouse over any IP address in the graphical table shows the information that has already been determined about the IP address.

> **warning**
>
> ### Note
> 
> An Unmanaged IP cannot be converted to Managed unless the network that contains it, is converted to managed status. For more information, see [*Converting Unmanaged Networks under IPAM to Managed Status*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/managing-discovered-data-280764086/converting-unmanaged-networks-under-ipam-to-mana).
