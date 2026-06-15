---
title: "Viewing Assets Associated with Discovered Devices"
source: "/space/nios90/1455358065"
pageId: "1455358065"
---
During discovery, Network Insight classifies end hosts and any other devices connected to switchport interfaces as "Assets" directly associated with each discovered interface. On the device level, the Assets page shows all network devices reachable by the selected network device, including switchports supporting end hosts. In practice, most Asset tables show end hosts and devices that populate Ethernet network segments. In earlier releases, Network Insight only displayed neighbors discovered through physical interfaces. From NIOS 9.0.6 onwards, it includes neighbors discovered through virtual interfaces along with those found through physical interfaces, thus ensuring complete visibility of network connectivity.

The Assets table lists all managed end hosts and application servers detected through discovery and identity resolution by Grid Manager, that are connected to each network infrastructure device. The records listed in this table date from the Last Seen discovery time stamp of each end host or other device. In many cases, you see neighbor devices to the current device appearing on this page.  
To view assets associated with discovered devices:

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the Action icon
   
   *[image: media]*
   
   for a chosen device and choose **Interfaces** from the drop-down menu, or simply click the device name to display the Interfaces list. Click **Devices** **Home** to return to the main **Devices** page.
3. Click the **Assets** tab. Grid Manager displays all assets associated with the chosen device.  
   Note the list of assets at this level may include devices that are trunked to the current device, including end-user host computers or routers and switch-routers neighboring the currently selected device.
   
   Grid Manager displays the following information for each asset:

- **Name**: The asset name on the network as discovered by Grid Manager. If the name is that for another infrastructure device, you may click on it to see its associated assets.
- **Interface** **Name**: The name of the interface (usually a switched interface) associated with the discovered device.
- **VRF** **Name**: The name of the VRF associated with the interface, if applicable.
- **Network** **View**: The name of the network view to which the VRF instance belongs, if applicable. If there is only one network view in the Grid, which is the default view, the **Network** **View** column is hidden by default.
- **VRF** **Description**: The description about the VRF instance, if applicable.
- **VRF** **RD**: The route distinguisher associated with the VRF instance, if applicable.
- **IP** **Address**: The IP Address for each discovered asset as managed by NIOS and IPAM. The IP address is a link to the home IPAM page for the interface.
- **Type**: The type of device. Infrastructure devices such as routers and switches may also be categorized as an Asset.
- **Username**: The User Name for the asset, as defined from the host's DHCP lease.
- **Asset** **MAC** **Address**: The hardware MAC address associated with the asset.
- **VLAN** **Name/VLAN** **ID**: The VLAN identifier from which the asset is reachable.
- **Admin** **Status**: The administrative status (Up or Down) of the management port that identifies the asset device.
- **Operation** **Status**: Normally reads **Up** or **Down**. Asset records may appear as **Down** because they are disconnected from the network or being rebooted.
- **Managed**: Indicates whether the asset is managed by NIOS.
- **Reservation**: Indicates whether the interface has a port reservation bound to it.
- **Capabilities**: Describes the capabilities of each interface in the selected device. Hover the mouse over each entry to view the complete listing.
- **Site**: This is a predefined extensible attribute.

Using the Action icon , you can perform the following tasks in the IP Addresses page:

- **Edit** **IPAM** **Object**: For managed objects, this opens the editor for the object so you can modify its properties.
- **Edit** **Interface**: Opens the interface general settings page. You can view and modify basic interface settings such as **Admin** **Status** (on the General page), **Data** **VLAN** and **Voice** **VLAN** (on the VLAN page), and add or modify extensible attributes.
- **Show** **IPAM** **IP** **Address**: Shows discovered data, related objects, and audit history of the selected asset. This option is disabled for devices that have a management IP that is not part of an IPAM network. Discovered data may or may not appear for the asset, depending on the device type.
- **Convert**: Depending on the asset type and its IPAM status, you may be able to convert the selected asset to a Host Record, A Record, PTR Record or a Fixed Address. Otherwise, Grid Manager shows **This** **object** **cannot** **be** **converted**. You can also perform the same action by selecting an IP address checkbox and clicking **Convert** from the Toolbar.
- **Device** **Details**: Provides information about the device to which the selected IP address belongs. The list includes information such as the **IP** **Address** and **Device** **Type** for the device, and in the **IPAM** **Type** field whether the device itself is a managed or unmanaged object in NIOS. It also provides the following status counters for the device:
  
  - **Total** **Available** **Interfaces**: The total number of interfaces associated with the device.
  - **Administrative** **Up** **-** **Operational** **Up**: The number of ports that are fully up and passing traffic
  - **Administrative** **Up** **-** **Operations** **Down**: The number of ports that are administratively up, but have some kind of connectivity issues.
  - **Administrative** **Down** **-** **Operational** **Down**: The number of ports that are administratively taken down.
