---
title: "show ipv6_ospf"
source: "/space/nios90/280789662"
pageId: "280789662"
---
The `show`` ``ipv6_ospf`` `command displays configuration and statistical information about the OSPFv3 protocol (if any) running on the NIOS appliance. For information on changing OSPF log settings, see *[set ipv6_ospf](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ipv6-ospf)*.

# Syntax

`show ipv6_ospf {route | interface | database | neighbor | configuration}`

| **Argument ** | **Description** |
| --- | --- |
| `route` | Displays the OSPF routing table, as determined by the most recent SPF calculation. |
| `interface` | Displays the state and configuration on all interfaces configured with OSPF. |
| `database` | Displays all OSPF database information. |
| `neighbor` | Displays the OSPF neighbor information. |
| `configuration` | Displays the running OSPF configuration file. |

# Examples

`Infoblox &gt; ``show ipv6_ospf`  
`OSPFv3 Routing Process (0) with Router-ID 10.34.1.179`  
` Running 11d03:14:41`  
` Number of AS scoped LSAs is 2`  
` Number of areas in this router is 1`  
` Area 0.0.0.61`  
`    Number of Area scoped LSAs is 4`  
`    Interface attached to this area: eth1`

`Infoblox &gt; ``show ipv6_ospf interface`  
`eth1 is up, type BROADCAST`  
` Interface ID: 11`  
` Internet Address:`  
`    inet : 10.34.1.179/29`  
`    inet6: 2001:db8:a22:1b0::3/64`  
`    inet6: fe80::230:48ff:febc:9503/64`  
` Instance ID 0, Interface MTU 1500 (autodetect: 1500)`  
` MTU mismatch detection: enabled`  
` Area ID 0.0.0.61, Cost 1`  
` State BDR, Transmit Delay 1 sec, Priority 1`  
` Timer intervals configured:`  
`  Hello 10, Dead 40, Retransmit 5`  
` DR: 255.1.1.1 BDR: 10.34.1.179`  
` Number of I/F scoped LSAs is 2`  
`  0 Pending LSAs for LSUpdate in Time 00:00:00 [thread off]`  
`  0 Pending LSAs for LSAck in Time 00:00:00 [thread off]`  
`eth2 is down, type BROADCAST`
