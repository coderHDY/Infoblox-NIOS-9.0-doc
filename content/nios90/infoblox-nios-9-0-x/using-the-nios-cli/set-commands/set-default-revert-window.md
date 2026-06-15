---
title: "set default_revert_window"
source: "/space/nios90/280855816"
pageId: "280855816"
---
Use the `set`` ``default_revert_window` command to configure the Grid default time window for reverting a member after it was upgraded. Note that you can only change the default value on the Grid Master. When you change the default value, the new revert window affects only the members that have not been upgraded.

# Syntax

`set default_revert_window ``hours`

| **Argument ** | **Description** |
| --- | --- |
| *hours* | The number of hours configured for the default revert window. The minimum value is 1 and the maximum is 48. The default is 24. |

# Example

`Infoblox &gt; ``set`` ``default_revert_window`` ``36`  
` Member revert window is currently: 24h`  
` Member Revert Window being changed to 36 hours Is this correct? (y or n): ``y`  
` Member Revert Window change will only affect members which are not yet upgraded. Member Revert Window is changed.`
