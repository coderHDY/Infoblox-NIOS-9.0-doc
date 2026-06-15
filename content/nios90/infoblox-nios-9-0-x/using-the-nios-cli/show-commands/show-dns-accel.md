---
title: "show dns-accel"
source: "/space/nios90/280266172"
pageId: "280266172"
---
The` ``show`` ``dns-accel` command displays DNS Cache Acceleration information. This command is available for:

- IB-FLEX only if the **Flex Grid Activation** license is present in the Grid.

# Syntax

`show dns-accel`

# Example

`Infoblox &gt; ``show`` ``dns-accel`

`Log level: 2(Critical)`  
`Cache: Enabled`  
`Minimum cached TTL: 1`  
`Maximum cached lifetime: 86400`  
`Cache hit count: 0`  
`Cache miss count: 0`  
`DNS query stats: SUCCESS=0 NXDOMAIN=0 NXRRSET=0 FAILURE=0 REFERR`  
`AL=0`  
`System UDP DNS query count: LAN1=0 LAN2=0 MGMT=0 HA=0`  
`System UDP DNS response count: 0`

`Infoblox &gt; ``show`` ``dns-accel`

`Log level: 5(Notice)`  
`Cache: Enabled`  
`Minimum cached TTL: 1`  
`Maximum cached lifetime: 86400`  
`Cache hit count: 0`  
`Cache miss count: 0`  
`DNS query stats: SUCCESS=0 NXDOMAIN=0 NXRRSET=0 FAILURE=0 REFERRAL=0`  
`System UDP DNS query count: LAN1=0 LAN2=0 MGMT=0 HA=0`  
`System UDP DNS response count: 0`
