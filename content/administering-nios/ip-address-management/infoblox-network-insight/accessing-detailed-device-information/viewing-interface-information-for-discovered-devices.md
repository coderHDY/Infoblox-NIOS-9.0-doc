---
title: "Viewing Interface Information for Discovered Devices"
source: "/space/nios90/1455358014"
pageId: "1455358014"
---
This panel lists all discovered interfaces associated with the selected device. Interfaces are detected whether they are loopbacks, unnumbered, or numbered with one or more IP addresses. Interfaces may be listed for either managed or unmanaged devices.

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the **Action** icon
   
   *[image: media]*
   
   for a chosen device and choose **Interfaces** from the drop-down menu, or simply click the device name to display the Interfaces list. Click **Devices** **Home** to return to the main **Devices** page.  
   This panel displays the following information for each interface. Note that some data may appear for some device types and not for others.

- **Name**: The name of the interface (usually a switched interface) associated with the discovered device.
- **Reservation**: Indicates whether the port has been reserved by NIOS as part of a Port Control operation.
- **IP** **Address**: Detected IPv4 or IPv6 address of the interface.
- **VRF** **Name**: The name of the VRF associated with the interface, if applicable.
- **Network** **View**: The name of the network view to which the VRF instance belongs, if applicable. If there is only one network view in the Grid, which is the default view, the **Network** **View** column is hidden by default.
- **VRF** **Description**: The description about the VRF instance, if applicable.
- **VRF** **RD**: The route distinguisher associated with the VRF instance, if applicable.
- **MAC** **Address**: The hardware address associated with the interface.
- **Description**: Port description associated with the interface, such as **ge-0/0/5** or **FastEthernet0/13**.
- **VLAN** **ID/VLAN** **Name**: The data VLAN identifier and VLAN name that is bound to the interface, if applicable.
- **Port** **Speed**: Interface speed, in Mbps.
- **Port** **Type**: Type of interface as detected by NIOS Discovery. Examples include **ethernet-csmacd**, **propPointToPoint** **Serial**, **l2vlan**, **tunnel**, **VxLAN** and others.
- **Admin** **Status**: Shows whether the interface is administratively Up or administratively Down.
- **Operating** **Status**: Shows whether the interface is operationally Up or operationally Down.
- **Trunk** **Status**: Where applicable, shows the trunking status of the interface.
- **Link** **Aggregation**: Shows if the interface is part of a Link Aggregation Group, also known as port channel.
- **Aggregated Interface**: Shows the port channel name, if the interface is part of a port channel or virtual port channel.
- **vPC Peer**: This field is applicable to Cisco devices with virtual port channel. It shows the name of the second aggregated interface of the port channel. The aggregated interface and vPC peer values are identical as aggregated interfaces on a vPC device must have identical names. Clicking the link in the **vPC Peer** column takes you to the **Interfaces** tab of the device to which the peer interface belongs. Also see [*IP List Neighbor Information*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1345161822) for vPC data displayed in the **Attached Device Port Name** field for an end device.
- **Status**: Shows whether the interface is Used or Unused.
- **IPAM** **Type**: The object type that is associated with the IP address for the interface. Possible values can be Lease, IPv4 DHCP Range or Fixed Address.
- **Usage**: Indicates whether NIOS has configured the IP address for DNS or DHCP.
- **Managed**: Shows whether the interface is managed under IPAM, by being associated with a managed IPAM object such as a Fixed Address. Check the IPAM Type field for related information.
- **Reservation**: Indicates whether the interface has a port reservation bound to it. For information, see [*Creating Port Reservations for IPAM Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763890).
- **Capabilities**: Describes the capabilities of each interface in the selected device. Hover the mouse over each entry to view the complete listing. For information, see Determining Interface Capabilities below*.*
- **Site**: This is a predefined extensible attribute.

You can also click the Action icon  next to an interface name and select one of the following to perform the specified task:

- **Edit**: This option is enabled if the network is in managed state. This opens the network editor.
- **Show** **Assets**: This option is only available for switched Ethernet interfaces with no IP Address. This opens the Assets page for the selected device, and shows a list of end host devices or neighboring linked to the interface. Network Insight filters the asset list for the device by the interface name.
- **Show** **Multiple** **IP** **Addresses**: Opens the IP Addresses page specifically for the interface, listing all IPv4 and IPv6 addresses associated with the interface. This option appears only if the interface has IP addresses.
- **Convert**: Convert a network in the unmanaged state to be managed under IPAM and (optionally) DHCP. Unlike devices and interfaces, you do not assign objects such as fixed addresses or PTR records to a managed network. Conversion enables a network to be fully manageable under IPAM and DHCP. For more information, see [*Converting Unmanaged Networks to Managed Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432753519).
- **IPAM** **Networks**: Choosing this option lists all IPAM networks associated with the current interface.
- **Device** **Details**: A basic list of information about the chosen device, including the IP address by which the device is discovered, operational status, IPAM Type (whether the device is Managed or Unmanaged), the Device Type and the number of Interfaces.

You can also do the following:

- Modify some of the data in the table. Double click a row, and either modify the data in the field or select an item from a drop-down list. Click **Save** to save the changes or click **Cancel** to exit. Note that some fields are read only. You can modify the following fields in this table: **VLAN** **ID/VLAN** **Name**, **Admin** **Status** and **Description**.
- Sort the data in ascending or descending order by column.
- Select an interface checkbox and click the Edit icon to manage device properties.
- Click the Export icon to export the list of discovered devices to a .csv file.
- Click the Print icon to print the list of discovered devices.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of a device name in the **Go** **to** field and select the device from the possible matches.
- Create a quick filter to save frequently used filter criteria.
