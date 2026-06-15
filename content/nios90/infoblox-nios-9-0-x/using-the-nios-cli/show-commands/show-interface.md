---
title: "show interface"
source: "/space/nios90/280822403"
pageId: "280822403"
---
The `show`` ``interface` command displays network interface details. The information reveals how the NIOS appliance is connected to the network. It shows line rate, broadcast address, and whether packets are being dropped. This information allows you to check the status, find the MAC address of an appliance, and provides statistics on the quality of the network signal. This command also displays whether IPv6 is enabled. On the Infoblox-X5 and X6 series appliances, the appliance displays information about the LAN2 port as well. It also displays the bonded interface information when NIC bonding is enabled in the NIOS appliance.  
For information about how to change your interface settings, see *[set interface](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-interface)*.

# Syntax

`show interface [``name ``| all]`

| **Argument** | **Description** |
| --- | --- |
| `name`` ` | Displays information about a specific interface. Enter one of the following: lan, lan2, ha, mgmt, or loopback. |
| `all`` ` | Displays information about all interfaces. |

# Example

The following example illustrates how you can use the `show`` ``interface` command to view the IP address and MAC address of an appliance, and its network connection details. Note that when you manually configure the speed and duplex of an interface, the appliance communicates only the settings. When you configure the Speed/Duplex settings at 1000M/Full, auto-negotiating is required and the appliance displays `Enabled (Speed/Duplex configured by user)` instead of `Enabled` in the **Negotiation** field, as shown in the following example.  
Statistical information is also provided on the packets received and transmitted, as well as any errors that have occurred. Lack of packet activity can be a sign of connectivity problems, dropped packages, overruns, or collisions.

`Infoblox &gt; ``show`` ``interface`  
` `` `

`LAN1:`  
`           IP Address:  10.34.8.188      MAC Address: 3c:ec:ef:31:9f:41`  
`           Mask:        255.255.255.0    Broadcast:   10.34.8.255`  
`           MTU:         1500             Metric:      1`  
`           IPv6 Address:       2001:550:40a:2265::58`  
`           IPv6 Link:          fe80::3eec:efff:fe31:9f41`  
`           IPv6 Status:        Enabled`  
`           Negotiation: Enabled`  
`           Speed:       10M              Duplex:      Full`  
`           DSCP Value:  0`  
`           IPv6 DSCP Value:  0`  
`           Status:      UP,BROADCAST,RUNNING,MULTICAST`

`           Statistics Information`  
`             Received`  
`                    packets:  30287555     bytes:    5010038116 (5.0 GB)`  
`                    errors:   0            dropped:  520`  
`                    overruns: 0            frame:    0`  
`             Transmitted`  
`                    packets:  3382931      bytes:    226298358 (226.2 MB)`  
`                    errors:   0            dropped:  0`  
`                    overruns: 0            carrier:  0`  
`             Collisions: 0                Txqueuelen:  1000`

`Enter &lt;return&gt; for next page or q&lt;return&gt; to cancel the command.`

`LAN2:`  
`           IP Address:  10.34.109.88     MAC Address: 3c:ec:ef:31:9f:43`  
`           Mask:        255.255.255.0    Broadcast:   10.34.109.255`  
`           MTU:         1500             Metric:      1`  
`           IPv6 Address:       2001:550:40a:22c9::58`  
`           IPv6 Link:          fe80::3eec:efff:fe31:9f43`  
`           IPv6 Status:        Enabled`  
`           Negotiation: Enabled`  
`           Speed:       10M              Duplex:      Full`  
`           DSCP Value:  0`  
`           IPv6 DSCP Value:  0`  
`           Status:      UP,BROADCAST,RUNNING,MULTICAST`

`           Statistics Information`  
`             Received`  
`                    packets:  811692       bytes:    77104579 (77.1 MB)`  
`                    errors:   0            dropped:  9039`  
`                    overruns: 0            frame:    0`  
`             Transmitted`  
`                    packets:  541297       bytes:    37567299 (37.5 MB)`  
`                    errors:   0            dropped:  0`  
`                    overruns: 0            carrier:  0`  
`             Collisions: 0                Txqueuelen:  1000`

`Enter &lt;return&gt; for next page or q&lt;return&gt; to cancel the command.`

`MGMT:`  
`           IP Address:  10.36.0.138      MAC Address: 3c:ec:ef:31:9f:40`  
`           Mask:        255.255.0.0      Broadcast:   10.36.255.255`  
`           MTU:         1500             Metric:      1`  
`           IPv6 Link:          fe80::3eec:efff:fe31:9f40`  
`           IPv6 Status:        Enabled`  
`           Negotiation: Enabled`  
`           Speed:       10M              Duplex:      Full`  
`           DSCP Value:  0`  
`           Status:      UP,BROADCAST,RUNNING,MULTICAST`

`           Statistics Information`  
`             Received`  
`                    packets:  10336642     bytes:    2664409995 (2.6 GB)`  
`                    errors:   0            dropped:  24767`  
`                    overruns: 0            frame:    0`  
`             Transmitted`  
`                    packets:  547383       bytes:    120728618 (120.7 MB)`  
`                    errors:   0            dropped:  0`  
`                    overruns: 0            carrier:  0`  
`             Collisions: 0                Txqueuelen:  1000`
