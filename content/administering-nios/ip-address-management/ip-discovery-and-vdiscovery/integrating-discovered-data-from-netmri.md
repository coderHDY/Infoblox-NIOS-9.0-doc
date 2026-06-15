---
title: "Integrating Discovered Data from NetMRI"
source: "/space/nios90/280764361"
pageId: "280764361"
---
The NetMRI appliances discover and track IPv4 and IPv6 network devices and provide information about the discovered IP addresses. You can integrate IPv4 and IPv6 discovered data into the NIOS appliance database, and then view the data in the IP List panel of Grid Manager as well as in the **Discovered** **Data** tab of certain IPAM object editor. When you start synchronization of discovered data from the NetMRI appliance, only the available IP addresses in the network are discovered. The imported data from the NetMRI appliance can only be modified or deleted by the specific synchronization. When you import the discovered data again for the same network and if some of the information in the network is changed, the newly discovered data and the originally discovered data (now old data) co-exist in the database. When you import the data again, the old data is deleted or modified, or the new data is added depending on the information discovered.

For information about NetMRI IP discovery and how to import discovered data from a NetMRI appliance to the NIOS appliance, refer to [*Executing NIOS IPAM Sync*](https://infoblox-docs.atlassian.net/wiki/spaces/INAG722/pages/15826991) in the Infoblox NetMRI documentation.

> **warning**
>
> ### Note
> 
> - NIOS does not import IPv6 leases that contain prefixes and link-local IPv6 addresses. This data is discarded during an import.
> - After an IPAM synchronization, CSV import errors if any are logged in a separate file named discovery_csv_error.log.*xxxxxx *located at /infoblox/var/discovery_csv_error

The appliance can import the following IPv4 and IPv6 data that NetMRI discovers:

- **IP** **Address**: The discovered IPv4 or IPv6 address.
- **Discovered** **MAC** **Address**: The MAC address of the discovered host.
- **Last** **Discovered**: The date and time the IP address was last discovered.
- **NetBIOS** **Name**: The name returned in the NetBIOS reply or the name that you manually register for the discovered host.
- **OS**: The operating system of the detected host.
- **First** **Discovered**: The date and time the IP address was first discovered.
- **Discoverer**: Specifies whether the IP address was discovered by a NetMRI discovery process.
- **Discovered** **Name**: The name of the network device associated with the discovered IP address.
- **Attached** **Device** **Description**: A textual description of the switch that is connected to the end device.
- **Attached** **Device** **Address**: The IP address of the switch that is connected to the end device.
- **Attached** **Device** **Name**: If a reverse lookup was successful for the IP address associated with this switch, the host name is displayed here.
- **Attached** **Device** **Port** **Description**: A textual description of the switch port that is connected to the end device.
- **Attached** **Device** **Port** **Name**: The name of the switch port or port channel connected to the device. For Cisco devices with virtual port channel configured, this field also displays the list of physical interfaces that form the virtual port channel. For more information, see [*IP List Neighbor Information*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666616).
- **Attached** **Device** **Port**: The number of the switch port connected to the end device.
- **Attached** **Device**: Identifies the switch that is connected to the end device.
- **Port** **Duplex**: The negotiated or operational duplex setting of the switch port connected to the end device.
- **Port** **Link**: The link status of the switch port connected to the end device. Indicates whether it is connected.
- **Port** **Speed**: The interface speed, in Mbps, of the switch port.
- **Port** **Status**: The operational status of the switch port. Indicates whether the port is up or down.
- **VLAN** **Name**: The name of the VLAN of the switch port.
- **VLAN**: The ID of the VLAN of the switch port.
