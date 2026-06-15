---
title: "show network_connectivity"
source: "/space/nios90/2249588739"
pageId: "2249588739"
---
The `show network_connectivity` command is used to test network connectivity from the appliance to a remote host. It helps to verify whether specific TCP or UDP ports are reachable (open).  
This is a maintenance mode command.

# Syntax

`show network_connectivity [type [4|6]] [proto [tcp|udp]] [src_addr &lt;value&gt;] [timeout &lt;value&gt;] &lt;host_ip_addr&gt; &lt;host_ports&gt;`

| **Argument** | **Description** |
| --- | --- |
| `type` | Enter 4 for IPv4 address or 6 for IPv6 address. |
| `proto` | Specify the protocol (tcp or udp) for the services. The default value is tcp. |
| `src_addr` | Enter the source IP address. This should be one of the network ports on the appliance. |
| `timeout` | Enter the timeout value (in seconds) for testing network connectivity and service availability. The default value is 10 seconds. |
| `host_ip_addr` | Specify the IP address of the host on which you want to test network connectivity for available services. |
| `host_ports` | Enter the port number (as an integer) or a range of port numbers in nnn-mmm format for the specified host address. The appliance displays only the port or ports on which successful network connectivity has been established. |

# Example

```
Maintenance Mode > show network_connectivity proto udp 10.35.1.153 53 
Connection to 10.35.1.153 53 port [udp/*] succeeded!
Maintenance Mode > show network_connectivity proto tcp 10.35.1.153 53 
Connection to 10.35.1.153 53 port [tcp/*] succeeded! 
Maintenance Mode > show network_connectivity type 4 proto udp 10.35.1.153 53 
Connection to 10.35.1.153 53 port [udp/*] succeeded! 
Maintenance Mode > show network_connectivity type 4 proto tcp 10.35.1.153 53 
Connection to 10.35.1.153 53 port [tcp/*] succeeded! 
Maintenance Mode > show version 
Version : 9.9.9-Release-9999999
SN      : 963d532d5262f58c7c3ee90f1a61a4e 
Hotfix  : N/A 
Maintenance Mode >
```
