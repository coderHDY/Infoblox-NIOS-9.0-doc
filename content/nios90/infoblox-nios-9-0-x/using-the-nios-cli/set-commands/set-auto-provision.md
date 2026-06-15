---
title: "set auto_provision"
source: "/space/nios90/280790205"
pageId: "280790205"
---
The **set** **auto_provision** command enables and disables auto-provisioning for the NIOS appliance. You cannot enable auto-provisioning for an appliance if a static IP address is already set for an appliance. Note that  
auto-provisioning can be enabled only on single appliances. To view the status of auto-provisioning for a NIOS appliance, see *[show auto_provision](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-auto-provision)*.

# Syntax

`set auto_provision {on | off}`

| **Argument** | **Description** |
| --- | --- |
| on | Enables auto-provisioning on an appliance. |
| off | Disables auto-provisioning on an appliance. |

# Examples

## Turn on auto-provisioning on an appliance

`Infoblox &gt; ``set`` ``auto_provision`` ``on`

## Turn off auto-provisioning on an appliance

`Infoblox &gt; ``set`` ``auto_provision`` ``off`
