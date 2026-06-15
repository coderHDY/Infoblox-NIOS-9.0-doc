---
title: "show memory"
source: "/space/nios90/301531287"
pageId: "301531287"
---
The `show memory` command displays memory statistics on used and available buffers and cache, in KB. Poor performance can be an indicator that the memory is full. If your NIOS appliance is not performing as it should, use this command to verify whether or not the appliance is experiencing a memory problem. If so, Infoblox recommends that you call Infoblox Support.

# Syntax

`show memory`

This command has no arguments.

# Example

`Infoblox &gt; show memory`

`            total     used     free     buffers    cached`  
`Mem:        1032852   309904   722948   32864      242060`  
`Swap:       2047992   0        2047992`  
`Total:      3080844   309904   2770940`
