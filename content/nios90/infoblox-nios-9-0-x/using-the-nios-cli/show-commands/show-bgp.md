---
title: "show bgp"
source: "/space/nios90/280266213"
pageId: "280266213"
---
The `show`` ``bgp` command displays information about the BGP configuration on the appliance, reachability information about neighbors, and BGP routes to destinations. You can specify the command with or without an argument. A command without an argument defaults to `show` `bgp`` ``route`.  
 For information about how to write statistical information to syslog, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[*bgp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log)[*log*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-bgp-log).

# Syntax

`show bgp {route | neighbor | summary | config}`

| **Argument** | **Description** |
| --- | --- |
| route | Displays the BGP routing table. |
| summary | Displays the BGP protocol summary. |
| neighbor | Displays information about all known BGP neighbors. |
| config | Displays the running BGP configuration file. |

# Example

`The following examples are for illustration only. The actual output varies based on the Quagga version.`

`Infoblox &gt; ``show`` ``bgp`` ``route`  
` BGP table version is 0, local router ID is 50.0.1.2`  
` Status codes: s suppressed, d damped, h history, * valid, &gt; best, i - internal, r RIB-failure, S Stale, R Removed`  
` Origin codes: i - IGP, e - EGP, ? - incomplete `

`                     Network            Next Hop                 Metric                LocPrf               Weight          Path`  
`* i                 10.0.1.0/24        10.0.1.1                     0                   100                  0              ?`  
`*&gt;                           10.0.2.99              11                                  32768                ?`  
`* i                 10.0.2.0/24        10.0.1.99                    2                   100                  0              ?`  
`*&gt;                           0.0.0.0                 1                                  32768                ?`  
`* i                 50.0.1.1/32        10.0.1.1                     0                   100                  0              i`  
`*&gt;                        10.0.2.99               1011                                  32768                ?`  
`*                   50.0.1.2/32        0.0.0.0                      1                                        32768          ?`  
`*&gt;                         0.0.0.0                  0                                   32768                i`  
`...`` `

` Infoblox &gt; ``show`` ``bgp`` ``summary`  
` BGP router identifier 50.0.1.2, local AS number 65001 RIB entries 25, using 1600 bytes of memory`  
` Peers 2, using 5024 bytes of memory `

`Neighbor   V    AS     MsgRcvd MsgSent TblVer InQ OutQ Up/Down   State/PfxRcd`  
`10.0.1.1   4    65001  89      85      0      0   0    01:11:27  10`  
`100.0.2.4  4    65004  57      53      0      0   0    00:46:37  5`

`Total number of neighbors 2`
