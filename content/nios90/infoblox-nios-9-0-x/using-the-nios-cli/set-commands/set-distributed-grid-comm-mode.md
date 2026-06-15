---
title: "set distributed_grid_comm_mode"
source: "/space/nios90/1581023564"
pageId: "1581023564"
---
The `set distributed_grid_comm_mode`** **CLI command migrates the Grid communication between the Grid Master and members to FIPS/CC compliant state. Note that this command is executed only in an upgraded FIPS/CC mode Grid.

# Syntax

`set distributed_grid_comm_mode [compliant]`

| **Argument** | **Description** |
| --- | --- |
| `compliant` | This is used to migrate Grid communication between the Grid Master and members to FIPS/CC from non-compliant state to compliant state. |

# Example

`Infoblox &gt; set distributed_grid_comm_mode compliant`

`*********************************************************************************`  
`WARNING: This operation will disrupt the communication between the nodes`  
`*********************************************************************************`

`Do you want to proceed? (y or n): y`

`Operation successful. All the future communication from members with this Master will operate in compliant mode`
