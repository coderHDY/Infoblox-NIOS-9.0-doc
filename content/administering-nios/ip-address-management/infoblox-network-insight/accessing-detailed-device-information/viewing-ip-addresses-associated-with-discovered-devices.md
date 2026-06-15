---
title: "Viewing IP Addresses Associated with Discovered Devices"
source: "/space/nios90/1455325269"
pageId: "1455325269"
---
You can view the complete list of discovered IP addresses bound to all interfaces for any device, discovered and managed devices alike.

> **warning**
>
> ### Note
> 
> One useful trick for interfaces is to pick out an interface from the **Interfaces** page that has multiple IPs and open the **IPAddresses** tab; or sort the IP addresses table by its **IPAddress** column, and locate the interface name that bears multiple IPs. Frequently, an interface with multiple addresses can have IPv4 and IPv6 addresses bound to it. Loopbacks are another example.

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the Action icon, for a chosen device and choose **Interfaces** from the drop-down menu, or simply click the device name to display the Interfaces list. Click **Devices** **Home** to return to the main **Devices** page.
3. Click the **IP** **Addresses** tab. Grid Manager displays all IP addresses associated with the chosen device. Grid Manager displays the following information for each IP address:
   
   - **IP** **Address**: The IP address for each discovered interface as managed by NIOS and IPAM. The table supports IPv4 and IPv6 values. Each IP address is a link to the home IPAM page for the interface. If an IP address does appear but is not a link, this indicates the discovered IP is not recognized under IPAM.
   - **VRF** **Name**: The name of the VRF associated with the interface, if applicable.
   - **Network** **View**: The name of the network view to which the VRF instance belongs, if applicable. If there is only one network view in the Grid, which is the default view, the **Network** **View** column is hidden by default.
   - **VRF** **Description**: The description about the VRF instance, if applicable.
   - **VRF** **RD**: The route distinguisher associated with the VRF instance, if applicable.
   - **Interface** **Name**: The name of the interface (usually a switched interface) associated with the discovered device.
   - **MAC** **Address**: The hardware MAC address associated with the interface.
   - *[image: media]*
     
     **VLAN** **Name/VLAN** **ID**: The data VLAN name and VLAN identifier to which the interface is bound, if applicable. In most cases, you see both the VLAN name and the VLAN ID as two values in the same field. Multiple VLAN entries may be present for an interface or IP Address.Some interfaces may have a large number of associated VLANs. By default, Network Insight does not automatically show all of them, instead providing a **Show** **all...** link for reference within the table cell. All VLAN ID/VLAN name values appear within the table cell, with a **Hide...** link provided to shorted the list back to original length.
   - **AdminStatus**: Lists whether the interface is administratively Up or administratively Down.
   - **OperationStatus**: The operational status of the interface (operationally Up or operationally Down).
   - **Managed**: Indicates whether or not the IP Address is managed by Grid Manager. If the IP address is unmanaged, you will be able to Convert the IP address to an Object that is managed by Grid Manager.
   - **Site**: This is a predefined extensible attribute. Extensible attributes may also appear in this table.
4. Click the IP Address link for any interface to open the Related Objects page for the chosen port.   
   Click the Action icon,  next to an IP address and select one of the following to perform the specified task. Note that some of these actions are not applicable to the IP address.

- **Edit** **Interface**: Opens the interface general settings page. You can view and modify basic interface settings such as **Admin** **Status** (on the **General** page), **Data** **VLAN** and **Voice** **VLAN** (on the **VLAN** page), and add or modify extensible attributes.
- **Convert**: Depending on the address type and its IPAM status, you may be able to convert the selected IP to a Host Record, A Record, PTR Record or a Fixed Address. Otherwise, Grid Manager shows **This** **object** **cannot** **be** **converted**. You can also perform the same action by selecting an IP address checkbox and clicking **Convert** from the Toolbar.
- **Device** **Details**: Provides information about the device to which the selected IP address belongs. The list includes information such as the **IP** **Address** and **Device** **Type** for the device, and in the **IPAM** **Type** field whether the device itself is a managed or unmanaged object in NIOS. It also provides the following status counters for the device:
  
  - **Total** **Available** **Interfaces**: The total number of interfaces associated with the device.
  - **Administrative** **Up** **-** **Operational** **Up**: The number of ports that are fully up and passing traffic
  - **Administrative** **Up** **-** **Operations** **Down**: The number of ports that are administratively up, but have some kind of connectivity issues.
  - **Administrative** **Down** **-** **Operational** **Down**: The number of ports that are administratively taken down.
