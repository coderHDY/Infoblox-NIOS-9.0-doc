---
title: "set ipv6_status"
source: "/space/nios90/280855680"
pageId: "280855680"
---
The `set`` ``ipv6_status`` `command enables or disables IPv6 on all interfaces. This is not a permanent enable or disable. If you restart your system, IPv6 is enabled once again.

# Syntax

`set ipv6_status {enable ``|`` disable}`

| **Argument ** | **Description** |
| --- | --- |
| enable | Enables IPv6 on all interfaces. |
| disable | Disables IPv6 on all interfaces. |



# Example

`Infoblox &gt; ``set`` ``ipv6_status`` ``enable`` `

`WARNING: This operation will restart the product `

`Do you want to proceed? (y or n):y `

`Infoblox &gt; ``show`` ``interface`  
` MGMT: `

`IP Address:  10.36.111.3      MAC Address: 00:0C:29:70:D5:F5`  
`Mask:        255.255.0.0      Broadcast: 10.36.255.255`  
`MTU:         1500             Metric:   1`  
`IPv6 Link:           fe80::20c:29ff:fe70:d5f5/64`  
`IPv6 Status:         Enabled`  
`Negotiation: Disabled`  
`Speed:       1000M            Duplex:      Full`  
`Status:      UP BROADCAST RUNNING MULTICAST`

`Statistics Information`  
`Received`

`packets:   25             bytes:    1518 (1.4 KiB)`  
`errors:    0              dropped: 0`  
`overruns:  0              frame: 0`

`Transmitted`

`packets:  3               bytes: 218 (218.0 b)`  
`errors:   0               dropped: 0`  
`overruns: 0               carrier: 0`

`Collisions: 0                Txqueuelen: 1000`` `

`Infoblox &gt; ``set ipv6_status disable`

`WARNING: This operation will disable IPv6 communication`  
`Do you want to proceed? (y or n):y`` `

`Infoblox &gt; ``show interface`  
`MGMT:`

`IP Address:   10.36.111.3       MAC Address: 00:0C:29:70:D5:F5`  
`Mask:         255.255.0.0       Broadcast: 10.36.255.255`  
`MTU:          1500              Metric: 1`  
`IPv6 Link:`  
`IPv6 Status:         Disabled`  
`Negotiation: Disabled`  
`Speed:       1000M              Duplex: Full`  
`Status:      UP BROADCAST RUNNING MULTICAST`

`Statistics Information`

`Received`

`packets:  606            bytes: 66780 (65.2 KiB)`  
`errors:   0              dropped: 0`  
`overruns: 0              frame: 0`

`Transmitted`

`packets:  10             bytes: 540 (540.0 b)`  
`errors:   0              dropped: 0`  
`overruns: 0              carrier: 0`

`Collisions:   0             Txqueuelen: 1000`
