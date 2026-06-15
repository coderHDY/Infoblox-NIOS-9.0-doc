---
title: "Viewing Discovered Data"
source: "/space/nios90/280666433"
pageId: "280666433"
---
After an IP discovery and a vDiscovery, you can view discovered data in the Discovered Data section when you drill down to a specific IP address in the Net Map, Net List, IP Map or IP List panel. For information about IP Map and IP List, see [*Viewing and Managing IPv4 Addresses*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-and-managing-ipv4-addresses)*.*  
You can also view discovered data for Cloud specific VMs in the Cloud tab. Note that you must install the Cloud Network Automation license on the Grid Master to view the Cloud tab.

# Viewing IPAM Discovered Data

To view discovered data in the **IPAM** tab:

1. In the top navigation bar, select the network view to which discovered data belongs.
2. From the **Data** **Management** tab, select the **IPAM** tab.
3. In the IPAM home page, select the network you want to view discovered data and click the link.
4. In the IP List of IP Map panel, click the IP address link to drill down to the IP address properties panel.
5. In the **Discovered** **Data** section, click the Configure icon to specify data to be displayed in the **Discovered** **Data** tab.
6. Select fields from the **Available** list and click the arrow key to move them to the **Selected** list and vice versa. You can use CTRL+Click or SHIFT+Click to select multiple fields at one time.  
   You can also change the order in which the fields are displayed by moving the fields up and down in the **Selected** list. To move a field up in the list, select it and click the Up arrow. To move a field down, select it and click the Down arrow.
7. Click the Configure icon again, and the **Discovered** **Data** section displays the fields you have specified. Note the fields you select appears for all IP addresses in the network.

Depending on the source of the discovered data, when you modify certain DNS and DHCP objects, Grid Manager can display some of the following discovered data (if any) in the **Discovered** **Data** tab:

- **NetBIOSName**: The name returned in the NetBIOS reply or the name you manually register for the discovered host.
- **OS**: The operating system of the detected host or virtual entity. The OS can be one of the following:

- **Microsoft** for all discovered hosts that have a non-null value in the MAC addresses using the NetBIOS discovery method.
- A value that a TCP discovery returns.
- The OS of a virtual entity on a vSphere server.
- **Discovered MAC Address**: The discovered MAC address for the host. This is the unique identifier of a network device. The discovery acquires the MAC address for hosts that are located on the same network as the Grid member that is running the discovery. This can also be the MAC address of a virtual entity on a specified vSphere server.
- **AP Name**: The name of the access point for the device. This column is displayed only for wireless devices. If discovered by NetMRI, the value will be populated through IPAM Sync as well.
- **AP IP Address**: The IP address of the access point for the device. This column is displayed only for wireless devices. If discovered by NetMRI, the value will be populated through IPAM Sync as well.
- **SSID**: The unique name of the WLAN (Wireless Local Area Network). If discovered by NetMRI, the value will be populated through IPAM Sync as well.
- **Discovered DUID**: For IPv6 address only. The DHCP unique identifier of the discovered host. This is an optional field, and data might not be included.
- **Last Discovered**: The timestamp when the IP address was last discovered.
- **First Discovered**: The timestamp when the IP address was first discovered.
- **Task Name**: The name of the task that collected the discovered data. It is usually the ID or task name that collected the data. It is defined on the corresponding NetMRI appliance when you import the discovered data to the NIOS appliance. The task name should be defined in thevDiscoverytask managerforvDiscovery.
- **Discovered Name**: The name of the network device associated with the discovered IP address.
- **Discoverer**: Specifies whether the IP address was discovered by NetMRI or NIOS discovery process.

If you imported data from NetMRI appliances, Grid Manager displays the following information, if available. For information about the data imported from NetMRI appliances, see [*Integrating*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[*Discovered*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[*Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[*From*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri)[*NetMRI*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/integrating-discovered-data-from-netmri).

- **Attached** **Device** **Description**: A textual description of the switch that is connected to the end device.
- **Attached** **Device** **Address**: The IPv4 or IPv6 address of the switch that is connected to the end device.
- **Attached** **Device** **Model**: If a reverse lookup was successful for the IP address associated with this switch, the device model is displayed here.
- **Attached** **Device** **Name**: If a reverse lookup was successful for the IP address associated with this switch, the host name is displayed here.
- **Attached** **Device** **Port** **Description**: A textual description of the switch port that is connected to the end device.
- **Attached** **Device** **Port** **Name**: The name of the switch port or port channel connected to the device. For Cisco devices with virtual port channel configured, this field also displays the list of physical interfaces that form the virtual port channel. For more information, see [*IP List Neighbor Information*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-and-managing-ipv4-addresses/ip-list-neighbor-information).
- **Attached** **Device** **Vendor**: The vendor name of the switch port connected to the end device.
- **Attached** **Device** **Port**: The number of the switch port connected to the end device.
- **Attached** **Device** **Type**: Identifies the switch that is connected to the end device.
- **Attached** **Device** **Location**: The physical location of the network device to which the end host is connected/attached, as detected from the device during discovery.
- **Attached** **Device** **Contact**: The contact details for the network device to which the End Host is connected/attached, as detected from the device during discovery.
- **Device** **Vendor**: The vendor name of the end device.
- **Device** **Model**: The device model of the end device.
- **Device** **Location**: The physical location of the network device on which the IP Address is configured, as detected from the device during discovery.
- **Device** **Contact**: The contact details for the network device on which the IP Address is configured, as detected from the device during discovery.
- **Device** **Management** **IP**: The IPv4 or IPv6 address of the end device that is connected to the switch.
- **Device** **Port** **Type**: The port type for the end device.
- **Device** **Port** **Name**: The port name for the end device.
- **Device** **Type(s)**: Identifies the device type.
- **Port** **Duplex**: The negotiated or operational duplex setting of the switch port connected to the end device. You can modify this in the IPv6 fixed address and AAAA record editors.
- **Port** **Link**: The link status of the switch port connected to the end device. Indicates whether it is connected.
- **Port** **Speed**: The interface speed, in Mbps, of the switch port. You can modify this in the IPv6 fixed address and AAAA record editors.
- **Port** **Type**: The switch port type.
- **Port** **Status**: The operational status of the switch port. Indicates whether the port is up or down.
- **Open** **Port(s)**: Ports that are open.
- **VLAN** **Name**: The name of the VLAN of the switch port.
- **VLAN** **ID**: The ID of the VLAN of the switch port.

For IP addresses discovered through a vDiscovery, Grid Manager displays the following additional information, if available:

- **Virtual** **Host** **Adapter**: The name of the physical network adapter through which the virtual entity is connected to the appliance.
- **Virtual** **Datacenter**: The name of the vSphere datacenter or container to which the virtual entity belongs.
- **Virtual** **Cluster**: The name of the VMware cluster to which the virtual entity belongs.
- **Virtual** **Entity** **Name**: The name of the virtual entity.
- **Virtual** **Entity** **Type**: The virtual entity type. This can be blank or one of the following: Virtual Machine, Virtual Host, or Virtual Center. Virtual Center represents a VMware vCenter server.
- **Virtual** **Host**: The name of the VMware server on which the virtual entity was discovered.
- **Virtual** **Switch**: The name of the switch to which the virtual entity is connected.
- **Virtual** **Machine** **Name**: The name of the VM instance.
- **Virtual** **Machine** **ID**: The ID of the VM.
- **Virtual** **Machine** **Tenant** **ID**: The tenant ID to which the VM belongs.
- **Virtual** **Machine** **Port** **Group**: The port group to which the VM belongs.
- **Attached** **Virtual** **Switch** **Name**: The name of the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Switch** **ID**: The ID of the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Switch** **Type**: The type of the virtual switch. This can be standard or distributed.
- **Attached** **Virtual** **Switch** **IPv6** **Enabled**: Indicates that virtual switch that has IPv6 enabled.
- **Attached** **Virtual** **Port** **Name**: The name of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **MAC** **Address**: The MAC address of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **Link** **Status**: The link status of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **Configured** **Speed**: The configured port speed of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **Configured** **Mode**: The configured mode of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **Configured** **Speed**: The actual port speed of the virtual adapter on the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Port** **Configured** **Mode**: The actual mode of the virtual adapter on the virtual switch to which the VM is connected.
- **Network** **Segment** **Type**: The type of network segment to which the VM is connected.
- **Network** **Segment** **Name**: The name of the network segment to which the VM is connected.
- **Network** **Segment** **ID**: The ID of the network segment to which the VM is connected.
- **Network** **Segment** **Port** **Group**: The port group of the network segment to which the VM is connected.
- **Network** **Segment** **Available** **Ports**: The number of available ports reported by the virtual switch to which the VM is connected.
- **Attached** **Virtual** **Switch** **VTEP** **Type**: The type of VTEP (Virtual Tunnel Endpoint) in the virtual switch that is connected to the VM. This can be VXLAN or STT.
- **Attached** **Virtual** **Switch** **VTEP** **IP**: The IP address of the VTEP in the virtual switch that is connected to the VM.
- **Attached** **Virtual** **Switch** **VTEP** **Port** **Group**: The port group of the VTEP in the virtual switch that is connected to the VM.
- **Attached** **Virtual** **Switch** **VTEP** **VLAN**: The VLAN of the VTEP in the virtual switch that is connected to the VM.
- **Attached** **Virtual** **Switch** **VTEP** **DHCP** **Server**: The DHCP server of the VTEP in the virtual switch that is connected to the VM.
- **Attached** **Virtual** **Switch** **VTEP** **Multicast**: The multicast address of the VTEP in the virtual switch that is connected to the VM.
- **Physical** **Host** **IP** **Address**: The IP address of the physical node on which the VM is hosted.  
  Starting from NIOS 9.0.6, the discovered data of a VMware vCenter server for the **Physical Host IP Address** field will show the IP address of the ESXi host server on which the discovered VM is hosted instead of the IP address of the vCenter.
- **Physical** **Host** **Name**: The name of the physical node on which the VM is hosted.
- **Physical** **Host** **MAC** **Address**: The MAC address of the physical node on which the VM is hosted.
- **Physical** **Host** **CIDR** **Subnet**: The subnet mask of the physical node on which the VM is hosted.
- **Physical** **Host** **'s** **NIC** **Names**: The list of all physical port names used by the virtual switch on the physical node on which the virtual machine is hosted. Valid values are eth1, eth2, eth3, and so on.

# Viewing Discovered Data for Cloud VMs

You can view discovered data for cloud specific VMs after performing a vDiscovery job. Note that you must have at least read-only permission to "All Tenants" and "All Network Views" to view the **VMs** tab.  
To view discovered data for cloud VMs, see [*Viewing All Cloud VMs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/viewing-cloud-objects/viewing-all-cloud-vms).
