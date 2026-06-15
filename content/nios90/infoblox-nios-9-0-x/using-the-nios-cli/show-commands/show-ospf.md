---
title: "show ospf"
source: "/space/nios90/280855239"
pageId: "280855239"
---
The `show`` ``ospf` command displays configuration and statistical information about the OSPF protocol that is running on the NIOS appliance. For information on how to change your OSPF settings, see *[set ospf](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ospf)*.

# Syntax

`show ospf {route | interface | database | neighbor | configuration}`

The `show ospf` command displays information about the OSPF configuration on the appliance, reachability information about neighbors, and OSPF routes to destinations. You can specify the command with or without arguments.

| **Argument** | **Description** |
| --- | --- |
| `route ` | Displays the OSPF routing table, as determined by the most recent SPF calculation. |
| `interface` | Displays the state and configuration on all interfaces configured with OSPF. |
| `database` | Displays all OSPF database information. |
| `neighbor` | Displays the OSPF neighbor information. |
| `configuration` | Displays the running OSPF configuration file. |

# Examples

`Infoblox &gt; ``show`` ``ospf`` ``interface`  
` eth0 is down`  
`  OSPF not enabled on this interface`  
`eth1 is up`  
`  Internet Address 172.32.0.61/24, Broadcast 172.32.0.255, Area 0.0.0.0 `  
`  Router ID 172.32.0.61, Network Type BROADCAST, Cost: 100`  
`  Transmit Delay is 1 sec, State DROther, Priority 0`  
`  Designated Router (ID) 172.32.0.110, Interface Address 172.32.0.254 `  
`  No backup designated router on this network`  
`  Timer intervals configured, Hello 10, Dead 40, Wait 3, Retransmit 5`  
`   Hello due in 00:00:01`  
`  Neighbor Count is 1, Adjacent neighbor count is 1`  
`lo is up`  
`  Internet Address 172.16.10.10/32, Area 0.0.0.0`  
`  Router ID 172.32.0.61, Network Type LOOPBACK, Cost: 100`  
`  Transmit Delay is 1 sec, State Loopback, Priority 0`  
`  No designated router on this network`  
`  No backup designated router on this network`  
`  Timer intervals configured, Hello 10, Dead 40, Wait 3, Retransmit 5`  
`   Hello due in inactive`  
`  Neighbor Count is 0, Adjacent neighbor count is 0 `  
` Infoblox &gt; ``show`` ``ospf`` ``route`  
` ============ OSPF network routing table ============`  
` ``N 172.16.10.10/32   [100] area: 0.0.0.0`  
`                   directly attached to lo`  
`N 172.32.0.0/24     [100] area: 0.0.0.0`  
`                   directly attached to eth1`

`============ OSPF router routing table ============= `  
` ============ OSPF external routing table ===========`
