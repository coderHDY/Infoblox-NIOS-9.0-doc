---
title: "NetBIOS"
source: "/space/nios90/1346011428"
pageId: "1346011428"
---
The NetBIOS method queries IP addresses for an existing NetBIOS service. This method detects active hosts by sending NetBIOS queries and listening for NetBIOS replies. It is a fast discovery that focuses on Microsoft hosts or non-Microsoft hosts that run NetBIOS services.  
NetBIOS discovery returns the following information for each detected host:

- **IP address**: The IP address of the host.
- **NetBIOS name**: This value is set to the name returned in the NetBIOS reply.
- **MAC address**: The discovery returns the MAC address only if the member reports the MAC address in the NetBIOS response.

To use the NetBIOS discovery method, ports 137 (UDP/TCP) and 139 (UDP/TCP) between the Grid member performing the discovery and the target networks must be unfiltered.  
The following table summarizes the supported discovery methods:

| **Discovery** **Type** | **Returned** **Data** | **Guideline ** | **Mechanism** |
| --- | --- | --- | --- |
| Smart IPv4   Subnet   Ping Sweep | - IP address - MAC address | Apply on known subnetworks on which no devices are readily found. Limited to networks of /22 and smaller. | ICMP echo request and reply. |
| Complete Ping    Sweep | - IP address - MAC address | Last resort for discovery. Use ICMP for a rough and fast discovery. Enables path tracing. | ICMP echo request and reply, ICMP traceroute. |
| NetBIOS | - IP address - NetBIOS name | Use NetBIOS for discovering Microsoft networks or non-Microsoft networks that run some NetBIOS services | NetBIOS query and reply. |
| TCP | - IP address - MAC address - OS | Use TCP for an accurate but slow discovery | TCP SYN packet and SYN ACK packet. |
| Port Scanning/    Profile Device | - Open and Closed TCP ports - IP Address | Disabled by default, use for non-SNMP devices. | Scans specified list of TCP ports, using TCP SYN packet. |
| SNMPv1/v2   SNMPv3 | - Open and Closed TCP ports - IP Address - System Description - System Up Time - Routing Neighbors - Routing and Forwarding Tables - ARP tables - SNMP credentials | Most important protocols for discovery. Ensure you have the SNMP credentials necessary for probing devices using SNMP. | Queries and collects system OIDs such as SysDescr and sysUpTime. |
| CLI (Device Command-Line by Telnet or SSH) | - Similar data set to SNMP - May be used instead of, or in combination with, SNMP | Requires correctly defined admin login tuples and Enable passwords where needed for device types.  You may test credentials against devices and assign CLI credentials to individual objects, overriding Grid-level and Network-level credential settings. | Uses standard device-language scripts and configured Telnet or SSH connection settings to collect discovery data. |
| vDiscovery | - IP address - MAC address - OS - Discovered name - Virtual entity type - Virtual entity name - Virtual cluster - Virtual datacenter - Virtual switch - Virtual host - Virtual host adapter | Add the VMware vSphere servers on which you want to perform the vDiscovery.   For information about how execute a vDiscovery, see [*Configuring vDiscovery Jobs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239). | The appliance communicates with the vSphere servers to collect discovery data on virtual machine instances. |
