---
title: "Network Inventory"
source: "/space/nios90/1471513269"
pageId: "1471513269"
---
The *Network* *Inventory* dashboard provides information about all known networks. The dashboard displays the list of device IP addresses, IP address utilization %, management platform, and the netmask details of the devices that have been discovered.

This dashboard displays a table that contains the following information:

- **Device** **IP** **Address**: The IP address of the device.
- **Netmask**: The netmask of the network.
- **First** **Seen**: The timestamp when the IP address was first seen in the network.
- **Last** **Seen**: The timestamp when the IP address was last seen in the network.
- **Network** **View**: The network view with which the device is associated.
- **Utilization%**: Displays the percentage based on the IP addresses that are currently in use on the network. For example, a /30 subnet mask can have two IP addresses that are in use. If both IP addresses are detected, then the Utilization% is 100%.
- **Managed**: Indicates whether this network is a managed or unmanaged object in NIOS. Managed objects are configured for DNS or DHCP and have corresponding NIOS objects such as fixed addresses, DNS records, or host records, which you can manage directly in NIOS.
- **Management** **Platform**: The platform information on which IP address is discovered. This can be **Network** **Insight**, **Amazon**, **OpenStack**, or **VMware**.
- **Discovered VLAN Name**: VLAN name of the discovered VLAN on the switch port.
- **Assigned VLAN Name**: VLAN name of the VLAN assigned to the network.
- **Discovered VLAN ID**: The VLAN ID of the discovered VLAN on the switch port.
- **Assigned VLAN ID**: VLAN ID of the VLAN assigned to the network.
- **VRF Name**: The name of the discovered VRF that uses IP addresses of the network.
- **VRF Description**: The description of the discovered VRF.
- **VRF RD**: The address of the route distinguisher of discovered VRF.  
  **BGP AS**: The number of the discovered BGP Autonomous System that uses IP addresses of the network.
- **SDN**: Indicates if the network was collected from an SDN/SD-WAN device.
- **Source Device**: Displays the IP address(es) of the device(s) on which a network was discovered by Network Insight. Empty for managed not discovered networks.  
  Note: In the columns **VRF Name** and **BGP AS**, if IPs in the network have multiple VRF or BGP AS records, the columns display “Multiple” as an aggregate value. In the columns **VRF Description** and **VRF RD**, if all VRF description or RD values for IP addresses are the same, then the columns display this value for the network. Otherwise the columns display “Multiple”.  
  To see values for each IP, click the network -&gt; **List** tab.
