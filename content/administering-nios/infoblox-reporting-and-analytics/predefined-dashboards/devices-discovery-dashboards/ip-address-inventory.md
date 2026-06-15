---
title: "IP Address Inventory"
source: "/space/nios90/1471513294"
pageId: "1471513294"
---
The IP Address Inventory dashboard provides information about IP addresses that are part of networks discovered by NetMRI (IPAM sync), vDiscovery, and Network Insight solutions. It does not display information about IP addresses that are part of a network container. This dashboard displays the IP addresses, management platform, discovered name, and details of the network devices that have been discovered. The data in the dashboard can be filtered by **Time**, **Network** **View**, **IP** **Address**, **Management** **Platform**, **First** **Seen**, and **Last** **Seen** timestamps. For instance, to see which platform discovered the IP address during a specific time frame, filter the data by **Management** **Platform**.

The platform shows the following information:

- **IP** **address**: The discovered IPv4 or IPv6 address.
- **Discovered** **Name**: The name of a discovered device.
- **First** **Seen**: The timestamp that shows when the discovered IP address was first seen in the network.
- **Last** **Seen**: The timestamp that shows when the discovered IP address was last seen in the network.
- **Network** **View**: The network view with which the IP address is associated.
- **Managed**: An indication of whether a discovered device is managed by NIOS. For a NIOS-managed device, you can define basic characteristics and use them to manage the device on NIOS.
- **Management** **Platform**: Information about the platform where a specific IP address was discovered. This can be **Network** **Insight**, **Amazon**, **OpenStack**, or **VMware**.
- **VLAN Name**: The name of the VLAN to which the switch port is assigned.
- **VLAN ID:** The ID number of the VLAN to which the switch port is assigned.
- **VRF Name**: The name of the VRF to which the interface with this IP address belongs.
- **VRF Description**: The description of a discovered VRF.
- **VRF RD**: The address of the route distinguisher of a discovered VRF.
- **BGP AS**: The number of the discovered BGP Autonomous System that uses the IP address.
