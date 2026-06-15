---
title: "show mgmt_exclusion_from_fastpath"
source: "/space/nios90/874709020"
pageId: "874709020"
---
The `show mgmt_exclusion_from_fastpath` CLI command is used to display whether the management (MGMT) interface on an appliance is excluded from the impact of virtual DNS Cache Acceleration (vDCA) and DNS Infrastructure Protection. For more information, see [*set mgmt_exclusion_from_fastpath*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-mgmt-exclusion-from-fastpath).

> **warning**
>
> **Note**
> 
> You must run this command from the NIOS CLI Expert Mode. To enable the mode run the `set expertmode` or `set expertmode on` command from the NIOS CLI. To disable the Expert Mode, use `set expertmode off.`

# Syntax

`show mgmt_exclusion_from_fastpath`

This command has no arguments.

# Example

`Expert Mode &gt; show mgmt_exclusion_from_fastpath`  
`mgmt interface not excluded from fastpath`
