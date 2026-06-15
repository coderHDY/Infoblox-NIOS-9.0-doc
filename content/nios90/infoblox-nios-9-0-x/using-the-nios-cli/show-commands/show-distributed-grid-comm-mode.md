---
title: "show distributed_grid_comm_mode"
source: "/space/nios90/1580794301"
pageId: "1580794301"
---
Use the `show distributed_grid_comm_mode` CLI command to display whether the NIOS Grid is in the FIPS/CC compliant mode or not.

# Syntax

`show distributed_grid_comm_mode`

This command has no arguments.

# Examples

The following output is displayed when the Grid is in compliant state:

`Infoblox &gt; show distributed_grid_comm_mode`  
`The distributed grid communication is operating in compliant mode.`



The following output is displayed when the Grid is in non-compliant state:

`Infoblox &gt; show distributed_grid_comm_mode`  
`The distributed grid communication is operating outside of compliant mode.`
