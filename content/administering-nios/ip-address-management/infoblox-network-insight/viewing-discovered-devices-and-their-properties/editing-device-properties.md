---
title: "Editing Device Properties"
source: "/space/nios90/1340540870"
pageId: "1340540870"
---
In the Device Properties Editor, you can change the management IP address and settings for interfaces of the selected device, apply extensible attributes, or apply administrative permissions for Grid Manager admin access to the device.

To edit properties of a device:

1. In the **Data Management** → **Devices** tab, click the Action icon for the required device or select the device and click the Edit icon above the table.
2. In the **General** tab, edit the following general device properties:
   
   - **Name**: The discovered device name, such as SPINE, LEAF, [switch1.building2.com](http://switch1.building2.com), or office1router.
   - **Management IP address**: This IP address is used for the device to be discovered by the discovery member. If the device has more than one IP address that can be used as the management IP, you can manually select the required address from the list of those discovered on the device.  
     If more than one network view is used in the discovery, the name of the corresponding network view is displayed next to the IP address.
     
     Note changing of management IP address may take some time.
   - **Managed**: Indicates whether this device is managed or unmanaged in NIOS.
   - **Device Type**: Indicates the device type: Router, Switch-Router, Firewall, NIOS (Infoblox appliance), vNIOS, SDN Controller, SDN Element, and others.
   - **Description**: Description of the network device as collected from the device by discovery.
   - **Model**: The device model.
   - **Vendor**: The vendor of network device. For example, Cisco, Juniper, Aruba, Dell, Infoblox, or HP.
   - **Device Version**: The OS version of the device.
   - **Location**: Displays the physical location of the device as detected during discovery.
   - **Discover Now**: Displays the status of the Discovery Now operation of the device.
   - **Object Type**: The object type.
3. In the **Interfaces** tab, edit the following basic port settings:
   
   - **Admin Status**
   - **Description**
   - **Data VLA**N
   - **Voice VLAN**
4. In the **Extensible Attributes** tab, add any attributes that are necessary for the device.
5. In the **Permissions** tab, edit administrative permissions for the device:
   
   1. Click the Add icon. Grid Manager displays the Admin Group/Role Selector dialog box.
   2. In the Admin Group/Role Selector dialog box, select the admin group you want to add, and then click the Select icon.
   3. Select the permission for the group.
   4. Select an object to which the permission applies from the drop-down list in the Resources column.
      
      Note that administrators can access discovered and managed devices in Grid Manager. For tasks such as provisioning networks, adding administrative permissions is advised to ensure that unauthorized changes to device configurations cannot take place. For example, you can use accounts with the Port Control permission to control and manage network provisioning tasks.
6. Click **Verify** where applicable, for example, in the interfaces settings.
7. Click **Save & Close**.
