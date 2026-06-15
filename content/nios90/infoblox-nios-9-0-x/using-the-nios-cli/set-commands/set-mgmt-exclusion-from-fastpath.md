---
title: "set mgmt_exclusion_from_fastpath"
source: "/space/nios90/874414154"
pageId: "874414154"
---
The `set mgmt_exclusion_from_fastpath` CLI command is used to exclude the management (MGMT) interface from the effects of virtual DNS Cache Acceleration (vDCA) if vDCA is enabled on a Grid member. By setting this command to `on`, you can prevent the DNS traffic to the MGMT interface from being affected by vDCA.

In a new installation of NIOS 9.0.5 or later, the MGMT interface is excluded from the effects of vDCA by default. When upgrading to NIOS 9.0.5 or later, you must use the `set mgmt_exclusion_from_fastpath` command to prevent vDCA from affecting the MGMT traffic. Infoblox recommends that you do not direct DNS traffic to the MGMT interface as it is a secure internal interface.

> **warning**
>
> **Note**
> 
> You must run this command from the NIOS CLI Expert Mode. To enable the mode run the `set expertmode` or `set expertmode on` command from the NIOS CLI. To disable the Expert Mode, use `set expertmode off`.

# Syntax

`set mgmt_exclusion_from_fastpath {on|off}`

| **Argument** | **Description** |
| --- | --- |
| `on` | Excludes the management interface from the effects of vDCA. |
| `off` | Allows vDCA to affect the management interface. |

# Example

`Expert Mode &gt; set mgmt_exclusion_from_fastpath on`  
`Enabled mgmt exclusion from fastpath. Manual Reboot is required in order for the changes to take effect.`

`Expert Mode &gt; set mgmt_exclusion_from_fastpath off`  
`Disabled mgmt exclusion from fastpath. Manual Reboot is required in order for the changes to take effect.`
