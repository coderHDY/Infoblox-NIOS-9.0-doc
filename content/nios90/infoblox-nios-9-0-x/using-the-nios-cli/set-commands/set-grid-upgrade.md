---
title: "set grid_upgrade"
source: "/space/nios90/856915976"
pageId: "856915976"
---
The `set grid_upgrade command `enables you to set Grid upgrade properties. You can use this command to force a scheduled upgrade to end immediately, or to force Grid members that have not yet upgraded to upgrade immediately.

# Syntax

`set grid_upgrade [forced_end | forced_upgrade]`

| Argument | Description |
| --- | --- |
| `forced_end` | Ends a scheduled upgrade that is currently running. |
| `forced_upgrade` | Forces Grid members that have not yet upgraded to upgrade immediately. |

# Example

When no scheduled upgrade is currently active  
`Infoblox &gt; set grid_upgrade forced_complete`  
`No scheduled upgrade currently active.`

When a scheduled upgrade is active  
`Infoblox &gt; set grid_upgrade forced_complete`  
`This will force all upgrade groups to trigger an immediate upgrade, this may effect grid services`  
`Do you want to proceed with an immediate upgrade of all groups (Y/N) ? y`  
`Are you sure (Y/N) ? y`  
`Upgrading all groups immediately.`

When a scheduled upgrade is currently paused  
`Infoblox &gt; set grid_upgrade forced_complete`  
`Upgrade is currently paused, please un-pause the upgrade before triggering this operation.`

When no scheduled upgrade is active  
`Infoblox &gt; set grid_upgrade forced_end`  
`No active scheduled upgrade.`

When a scheduled upgrade is active  
`Infoblox &gt; set grid_upgrade forced_end`  
`This will force all upgrade groups to end upgrade immediately, all incomplete groups members will be logged-off the grid to perform an auto-sync of software with the grid this operation should only be used in an emergency situation to end a scheduled upgrade as it will result in member service outage until the operation is completed.`  
`Do you want to proceed (Y/N) ? y`  
`Are you sure (Y/N) ? y`  
`Ending upgrade schedule and logging out incomplete group members for an auto-sync.`

When a scheduled upgrade is currently paused  
`Infoblox &gt; set grid_upgrade forced_end`  
`Upgrade schedule is currently paused, please un-pause the upgrade schedule before triggering this operation.`
