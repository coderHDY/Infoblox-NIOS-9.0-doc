---
title: "Viewing Networks Associated with Discovered Devices"
source: "/space/nios90/1455259785"
pageId: "1455259785"
---
To view all discovered networks associated with the selected device, complete the following:

1. From the **Data** **Management** tab, select the **Devices** tab. The Devices Home page displays a list of all devices currently found and catalogued by discovery.
2. Click the device name.
3. Click the **Networks** tab.  
   Grid Manager displays all networks to which the chosen device connects. You see the following types of networks based on their managed or unmanaged status:

- Unmanaged: These networks are displayed in yellow rows with the value of **No **in the Managed column. Shows that the network is not managed under IPAM, but enough network information is catalogued so that the network can be converted to managed status. You can provision these networks onto devices.
- Managed: These networks are displayed in white rows with the value of **Yes** in the Managed column. These networks are currently managed under IPAM, converted to an IPAM network. You can provision and de-provision managed networks.
- The so called "non-NIOS networks": These networks are displayed in grey rows with a blank value in the Managed column. Indicates that the network is discovered but available network information is not sufficient to identify and catalog the network in IPAM at the present time. If you encounter such networks and you want them to appear in IPAM, do the following:
  
  - Check the admin or operation status of the corresponding interface. It should not be disconnected physically or disabled by administrator.
  - Ensure that the prefix length for the network is other than /32 (ipv4) or /128 (ipv6). Network Insight treats named prefixes as a route to a specific device rather than a subnet, therefore it does not create such network in IPAM.
  - Ensure that the route for this interface is configured correctly.
  - Check that the route is a direct or local one based on the routing table and is not learned from a remote source via BGP, OSPF and so on (i.e., indirect next hop), nor comes from a static route using the netmgmt protocol.
  - If the network is within a VRF, ensure that the VRF is mapped to the correct network view. VRF mapping is required in this case for the network to appear in IPAM. After the VRF is correctly mapped, the network turns from non-NIOS to unmanaged, or managed if the network is already present in IPAM.

Grid Manager displays the following information for each network found on the selected device, if applicable:

- **Network**: The network IPv4 or IPv6 address.
- **VRF** **Name**: The name of the VRF associated with the interface, if applicable.
- **Network** **View**: The name of the network view to which the VRF instance belongs, if applicable. If there is only one network view in the Grid, which is the default view, the **Network** **View** column is hidden by default.
- **VRF** **Description**: The description about the VRF instance, if applicable.
- **VRF** **RD**: The route distinguisher associated with the VRF instance, if applicable.
- **Comment**: Any information entered by admins about the network.
- **Managed**: Shows values of Yes or No for managed status.

Using the Action icon , you can perform the following tasks in the Networks page:

- **Show** **IPAM** **Network**: Opens the IPAM IP MAP that illustrates the IP states for all IPs in the network.
- **De-provision** **Network**: Available for managed networks that are provisioned and active on a device. Allows you to de-provision (delete) the selected IPAM network from all devices connected to the selected network. See [*Provisioning and De-Provisioning Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/provisioning-and-de-provisioning-networks)*.*
- **Edit**: Opens the network editor for the selected network. This option is enabled if the network is in managed status.
- **Delete**: Select **Delete** to delete the network now or select **Schedule** **Deletion** to schedule the deletion at a later time. Note that the deletion function allows you to de-provision the actual network from the device. By default, when you choose **Delete** or **Scheduled** **Delete**, the network is de-provisioned from all interfaces listed in the panel. Exercise caution when using this feature!
- **Extensible** **Attributes**: Provides access to the extensible attribute settings for the selected network.
- **Permissions**: Provides access to admin permissions settings for the selected network. This option is enabled if the network is in managed status.
- **Convert**: Converts unmanaged network to a managed network in NIOS. All discovered networks on each device are automatically listed as **Unmanaged** after a discovery. This means that the discovered network, though visible, does not have its identities resolved by NIOS, nor are its IP address managed through IPAM or leased through DHCP. After converting the unmanaged network to managed status, Grid Manager uses the discovered router IP address to populate the same value under subsequent DHCP configurations for the network. You can also select an unmanaged network and convert it to managed status by clicking **Convert** from the Toolbar.
- **Device** **Details**: Provides information about the device to which the selected network belongs. The list includes information such as the **IP** **Address** and **Device** **Type** for the device, and in the **IPAM** **Type** field whether the device itself is a managed or unmanaged object in NIOS. It also provides the following status counters for the device:
  
  - **Administrative** **Up** **-** **Operational** **Up**: The number of ports that are fully up and passing traffic
  - **Administrative** **Up** **-** **Operations** **Down**: The number of ports that are administratively up, but have some kind of connectivity issues.
  - **Administrative** **Down** **-** **Operational** **Down**: The number of ports that are administratively taken down.

The horizontal navigation bar and the Toolbar also provide the following functions:

- **Provision** **Network**   : Available for managed networks and for unmanaged networks that are recognized by IPAM. For information, see [*Provisioning and De-Provisioning Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/provisioning-and-de-provisioning-networks). Clicking this icon opens the Provision Network feature, allowing you to provision the network onto the actual device by selecting a device interface, and enabling DHCP Forwarding and/or assigning a VLAN. Grid Manager creates a new port control task under Task Manager, and you can choose the interface on which the network is provisioned, along with VLAN configuration and other settings.
- **De-Provision** **Network**   : Available for discovered networks that are not visible under IPAM. A dialog box appears summarizing the task.
- **Show** **Active** **Users**: For Microsoft Management only. Displays the *Active* *Users* dialog box. You can view all the active users on the Active Directory domain for the selected device. For more information, see [*Viewing Active Network Users*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-identity-mapping-information/Viewing+Identity+Mapping+Information#Viewing-Active-Network-Users)*.*
