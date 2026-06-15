---
title: "IP List Neighbor Information"
source: "/space/nios90/1345161822"
pageId: "1345161822"
---
Other values are available for display in the IP list. Most of the hidden columns consist of information discovered by Grid Manager, to identify devices connected to the network interfaces neighboring the listed IP addresses. These data columns are hidden and must be enabled for display by selecting the **Visible** checkbox for each field when editing the columns for the table. Most of this information does not appear unless a device is recognized in IPAM or is in managed state under IPAM. Additional IP list neighbor information includes:

- **Discovered Name**: The discovered name of the device bound to the IP address. The IP address may be just one of several or many IP addresses bound to the device on a specific interface.
- **Discovered MAC Address**: The discovered MAC of the interface bound to the IP address.
- **Discoverer**: Name of the Infoblox appliance that discovered the IP address and its associated information.
- **Attached Device Description**: Listing of the device neighboring to the IP address.
- **Attached Device Address**: The IP address of the device neighboring to the current IP.
- **Attached Device Name**: The host name of the device neighboring to the current IP.
- **Attached Device Vendor**: The vendor of the device neighboring to the current IP address.
- **Attached Device Model**: The vendor's model number for the device neighboring to the current IP address.
- **Attached Device Port Description**: An admin-provided description for the neighboring IP address, if any is discovered.
- **Attached Device Port Name**: The name of the switch port or port channel connected to the end device. For Cisco devices with virtual port channel configured, this field also displays the list of physical interfaces that form the virtual port channel. The first vPC peer's IP address is displayed in the field **Attached Device Address** mentioned above, and other vPC data is displayed in the **Attached Device Port Name** field in the following format:   
  *virtual port channel name: list of physical interfaces of the first device, IP address of the second device/virtual port channel name: list of physical interfaces of the second device*  
  Example:  
  An end device is connected to devices 192.168.1.2 and 192.168.1.3 using vPC. The first vPC peer's IP address 192.168.1.2 is displayed in the **Attached Device Address** field. Other vPC data is displayed in the **Attached Device Port Name** field:  
  `port-channel-1: Ethernet4/11, Ethernet5/11, 192.168.1.3/port-channel-1: Ethernet3/12, Ethernet4/12`
- **Attached Device Type**: Indicates the device type for the neighboring device: **Router**, **Switch-Router**, **Switch**, and other types.
- **Port Duplex**: Discovered Duplex setting for the neighboring port, when applicable.
- **Port Link**: Indicates the state of the link: **Connected** or **Disconnected**.
- **Port Speed**: Indicates the speed of the network connection.
