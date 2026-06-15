---
title: "End Host History"
source: "/space/nios90/1471480491"
pageId: "1471480491"
---
The *End* *Host* *History* dashboard provides the history of the end hosts discovered by Network Insight in a given time frame across all network views. This dashboard is applicable only for the Network Insight solution. The dashboard displays the list of MAC addresses for end hosts, their IP addresses and the details of the network devices from which the end hosts have been discovered.  
The dashboard data can be filtered by **Network** **View**, **MAC** **Address**, **IP** **Address**, **First** **Seen** and **Last** **Seen** timestamps. For instance, you can filter by **MAC** **address** and see which IP address the end host possesses during the given time frame. You can also filter by the **First** **Seen** and/or **Last** **Seen** timestamp and find the MAC addresses of the end hosts becoming active and/or going offline.

This dashboard displays the following information in table format:

- **MAC** **Address**: The MAC address of the end host.
- **IP** **address**: The IP address of the end host.
- **First** **Seen**: The timestamp when the MAC address was first seen in the network.
- **Last** **Seen**: The timestamp when the MAC address was last seen in the network.
- **Network** **View**: The network view with which the end host is associated.
- **Device** **Name**: The name of the network device that has the ARP (Address Resolution Protocol) of the end host.
- **Device** **Vendor**: The vendor of the network device that has the ARP of the end host.
- **Device** **Model**: The model of the network device that has the ARP of the end host.
- **Device** **OS** **Version**: The OS version of the network device that has the ARP of the end host.
- **Device** **IP** **Address**: The management address of the network device that has the ARP of the end host.
- **Device** **Interface**: The interface name of the network device that has the ARP of the end host.
- **Device** **VLAN**: The VLAN ID of the interface that has the ARM (Asynchronous Response Mode) of the end host.
- **AP** **Name**: The name of the access point of the device. This column is displayed only for wireless devices.
- **AP** **IP** **Address**: The IP address of the access point of the device. This column is displayed only for wireless devices.
- **SSID**: The unique name of the WLAN (Wireless Local Area Network).
- **User** **Name**: The name of the user. This column is displayed only when the Identity Mapping feature on the appliance is enabled. For information about how to enable the Identity Mapping feature, see [*Viewing Identity Mapping Information*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-identity-mapping-information).
- **Unmanaged**: Indicates if the discovered host is managed or not under the Infoblox IPAM.
