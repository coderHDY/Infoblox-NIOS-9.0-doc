---
title: "Viewing the Complete List of Discovered Devices"
source: "/space/nios90/1340540905"
pageId: "1340540905"
---
The **Data** **Management** tab **–&gt;** **Devices** tab provides a complete view of all discovered devices discovered by Network Insight. The list includes routers, switches, firewalls and other security devices, wireless APs, end hosts and servers in end-host networks. Use NIOS standard filtering to narrow down the status table to the devices or values you want to examine.

You can see the following information in the devices table:

- **IP** **Address**: The detected management  IP address (IPv4 or IPv6).
- **Name**: Detected name of the device. Each device name provides a link to the complete body of information associated with the device, arranged in five tabs: **Interfaces**, **Networks**, **IP** **Addresses**, **Assets** and **Components**. For more information, see the sections under [*Accessing Detailed Device Information*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/accessing-detailed-device-information).
- **Device** **Type**: The network device type: **Router**, **Switch-Router**, **Firewall**, **NIOS** **(Infoblox** **appliance)**, **vNIOS**, **SDN Controller**,** SDN Element**, **LWAP**, and others.
- **Model**: The model name as detected by the device during discovery.
- **Serial** **Number**: The serial number of the discovered device.
- **Vendor**: The equipment manufacturer (Cisco, Juniper, Fortinet, F5, and others).
- **Device** **Version**: The Operating System version for the network device.
- **Chassis** **S/N**: The chassis serial number of the discovered device.
- **Location**: The physical location of the network device as detected by the device during discovery.
- **Description**: Verbose description of the network device as collected from the device by discovery.
- **Discover** **Now**: Indicates when the device is undergoing a current discovery process. A "Pending" icon appears in this column to indicate the status.
- **Managed**: Indicates the status of the device in Grid Manager. A blank value in this field indicates the device has been discovered but is not recognized in IPAM; a **No** value indicates the device is recognized by IPAM but is not managed under Grid Manager; and a **Yes** value indicates that the device is fully managed by Grid Manager from use of the **Convert** command and can support related features such as port reservations and IPAM/DHCP object assignments.
- **Active** **Users**: The number of active users on the Active Directory domain for the selected IP address.

For each listed device, the Action icon  provides the following options depending on the device type and its status:

- **Show** **IPAM** **IP** **Address**: Shows the management IP address for the device that has a network in IPAM–the main **IPAM** tab appears, showing details for the IP address. This option is greyed out for devices that have a management IP that is not part of an IPAM network.
- **Edit**: Displays the Device Properties Editor window. Alternatively, you can select the device and click the Edit icon above the devices table. For more information, see Editing Device Properties below.
- **Interfaces**: A direct link to the **Interfaces** page for the chosen device. Unmanaged devices may have managed interfaces that appear in this page, and managed devices may have unmanaged interfaces that appear here. For more information, see [*Viewing Interface Information for Discovered Devices*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/accessing-detailed-device-information).
- **Discover** **Now**: Immediately performs discovery on the selected device.
- **Convert**: For devices in unmanaged status (shown in yellow), allows conversion of the device to a managed object in Grid Manager: a host, fixed address, A record or PTR record. For more information, see [*Converting Unmanaged Devices to Managed Devices*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/managing-discovered-data-280764086/Managing+Discovered+Data#CUDM).
- **IPAM Networks**: A drop-down list of all IPv4/IPv6 IPAM networks currently provisioned on the device. Each network provides a link to the IP Map page for the selected network.
- **Device** **Details**: A basic list of information about the chosen device, including the IP address by which the device is discovered, operational status, IPAM Type (whether the device is managed or unmanaged), the Device Type and the number of Interfaces.
- Click **Device Support** to verify data collection activities in the following tabs:
  
  - **Data Collection**: You can view the timestamp at which the most recent collection from various data sources was completed. The sources from which device support information is collected are listed under the Data Source column, and it includes the device’s routing table (ipRouteTable), environment monitoring (DeviceEnvMon), and numerous other data sources as applicable to the specific device type. It displays the following information for each discovered device:
    
    - **Data Source**: The sources from which the device support information was collected.
    - **End Time**: The most recent timestamp of the data collected by the discovery member.
  - **Device Support**: Lists various types of information supported for collection on the current device. You can view the following details for each discovered device:
    
    - **Function**: Data function that can be collected by Network Insight. The value can be **Device Vendor**, **Device Model**, **Device Version**, **VLANs**, **Forwarding**, **VRFs**, **Inventory**, and **SecurityControl**.
    - **Supported**: Indicates whether this data function is supported for the selected device. The value can be **Yes** or **No**. If it is **No**, Network Insight will not attempt to gather the data. For instance, for a Cisco router, Network Insight does not attempt to gather VLAN information, so a No value will be displayed in the **Supported** column.
    - **Available**: Reflects whether the data has actually been collected. The value can be **Yes** or **No**. A value of **Yes** for **Supported** and **No** for **Available** indicates a discovery misconfiguration or could possibly require an adjustment to the Device Support Bundle (DSB) for that particular device model.
    - **Value**: Displays the value collected for the **Device Vendor**, **Device** **Model**, and **Device** **Version** data functions. Displays **Last Collected** time for the **VLANs**, **Forwarding**, **VRFs**, **Inventory**, and **Security** **Control** data functions.
- **Show** **Active** **Users**: Displays the *Active* *Users* dialog box. You can view all the active users on the Active Directory domain for the selected device. For more information, see [*Viewing Active Network Users*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-identity-mapping-information/Viewing+Identity+Mapping+Information#Viewing-Active-Network-Users).

Click **Discovery** **Status** in the Toolbar to view the same list of network devices showing the discovery data set. You can sort the table by Name or IP address. Use Grid Manager-standard filtering to display device names, IP addresses or other values in which you are interested.
