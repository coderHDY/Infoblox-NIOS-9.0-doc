---
title: "show ipv6_bgp"
source: "/space/nios90/280855317"
pageId: "280855317"
---
The `show` `ipv6_bgp` command displays the local NIOS appliance's IPv6 BGP configuration, reachability information about neighbors, and BGP routes to destinations. You can specify the command with or without an argument. A command without an argument defaults to `show`` ``bgp`` ``route`.  
 For information about how to write statistical information to syslog, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[*bgp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[*log*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log).

# Syntax

`show ipv6_bgp {route | neighbor | summary | config}`

| **Argument ** | **Description** |
| --- | --- |
| `route` | Displays the BGP routing table. |
| `summary` | Displays the BGP protocol summary. |
| `neighbor` | Displays information about all known BGP neighbors. If only IPv4 BGP information is available, this command option displays IPv4 information. |
| `config` | Displays the running BGP configuration file, including all IPv4 and IPv6 configuration, prefix lists and access-lists. |

If no applicable information is available (for example, the current device has no IPv6 BGP configuration and hence no IPv6 BGP neighbor information), you are returned to the NIOS CLI prompt.

# Example

`Infoblox &gt; ``show`` ``ipv6_bgp`` ``summary`  
` BGP router identifier 10.34.1.179, local AS number 1 RIB entries 3, using 288 bytes of memory`  
` Peers 1, using 4560 bytes of memory `

`Neighbor    V   AS  MsgRcvd MsgSent TblVer InQ OutQ Up/Down State/PfxRcd`  
`10.34.1.178 4   10  192542  240631      0    0    0 02:45:16      0`

` Total number of neighbors 1 `  
`Infoblox &gt; ``show`` ``ipv6_bgp`` ``neighbor`  
` BGP neighbor is 2001:1938:BA8::22AA:1, remote AS 10, local AS 1, external link `  
` BGP version 4, remote router ID 10.36.1.66`  
` BGP state = Established, up for 02:11:21`  
`  Last read 14:34:06, hold time is 16, keepalive interval is 4 seconds `  
`  Neighbor capabilities:`  
`   4 Byte AS: advertised and received`  
`   Route refresh: advertised and received(old & new)`  
`   Address family IPv4 Unicast: advertised and received `  
`   Address family IPv6 Unicast: advertised and received`  
` Message statistics: Inq depth is 0 Outq depth is 0 `

`Inq depth is 0`  
`Outq depth is 0`

`                                   Sent    Rcvd`  
`Opens:                             118     25`` `

`Notifications:                     13      88`  
`Updates:                           219     0`  
`Keepalives:                        239773  192022`  
`Route Refresh:                     0       0`  
`Capability:                        0       0`  
`Total:                             240123  192135`` `

` Enter &lt;return&gt; for next page or q&lt;return&gt; to go back to command line. `  
`Minimum time between advertisement runs is 30 seconds `  
` `  
` For address family: IPv4 Unicast `  
`  NEXT_HOP is always this router`  
`  Community attribute sent to this neighbor(both) `  
`  Inbound path policy configured`  
`  Outbound path policy configured`  
`  Incoming update prefix filter list is *DEFAULT `  
`  Outgoing update prefix filter list is *ANYCAST`  
`  0 accepted prefixes `  
` `

`For address family: IPv6 Unicast`  
`  Community attribute sent to this neighbor(both)`  
`  0 accepted prefixes `  
` `

`  Connections established 73; dropped 72`  
`  Last reset 02:13:50, due to BGP Notification send `

`Local host: 10.34.1.179, Local port: 179`  
` Foreign host: 10.34.1.178, Foreign port: 43135`  
` Nexthop: 10.34.1.179 `  
` `

`Nexthop global: 2001:db8:a22:1b0::3 `  
`Nexthop local: fe80::230:48ff:febc:9503 `  
`BGP connection: non shared network`  
` Read thread: on Write thread: off`
