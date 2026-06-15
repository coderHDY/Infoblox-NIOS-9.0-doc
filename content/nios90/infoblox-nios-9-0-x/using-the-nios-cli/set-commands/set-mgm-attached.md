---
title: "set mgm attached"
source: "/space/nios90/280757192"
pageId: "280757192"
---
The set mgm attached command forces a Grid to attach to a Master Grid. Use this command only if a Grid is in the Attached state on the Multi-Grid Manager and Detached on the Grid Manager. This command recovers the Grid status when it is out of sync with the Infoblox Grid status on the Multi-Grid Manager.

# Syntax

`set mgm attached [``MGM IP Address``] [``Port Number``]`

| **Argument** | **Description** |
| --- | --- |
| `MGM IP Address`` ` | IP address of the Master Grid |
| `Port Number`` ` | Port number of the Master Grid |

# Example

The following example uses the set mgm attached command.

`Console connect [@ ``Grid IP address``]`  
`Infoblox &gt; ``set maintenancemode`  
`Maintenance Mode &gt; set mgm attached [``MGM IP address``] [``Port Number``]`  
`This command will force the Grid to get attached.`  
`Are you sure you want to continue? (y or n): ``y`
