---
title: "show thresholdtrap"
source: "/space/nios90/280855147"
pageId: "280855147"
---
The `show thresholdtrap` command displays the trigger and reset values of the SNMP trap for event types such as CPU usage and database write usage.

The CPU usage trap is disabled by default, and the trigger value is set at 100 and reset value at 0. For information about how to configure the trigger and reset values, see [*set*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-thresholdtrap)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-thresholdtrap)[*thresholdtrap*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-thresholdtrap).

By default, the trigger for database write usage is set at `95` and the reset value is set at `85`. For information about how to configure the trigger and reset values from the CLI, see [*set thresholdtrap*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-thresholdtrap).

# Syntax

`show thresholdtrap {type}`

| **Argument ** | **Description** |
| --- | --- |
| `type` | The type of threshold trap.  - Enter **CpuUsage** to display the trigger and reset values of the CPU usage trap. The trap is disabled by default, and the trigger value is set at 100 and reset value at 0. - Enter **DBWrites** to display the trigger and reset values of the database write usage trap. By default, the trigger and reset values are set at `95`% and `85`% respectively. |

# Example

## Example Showing the CPU Usage Trap Values

`Infoblox &gt; show thresholdtrap CpuUsage`  
`Trap type: CpuUsage`  
`trigger: 80`  
`reset: 71`

## Example Showing the Database Write Trap Values

`Infoblox &gt; show thresholdtrap DBWrites`  
`Trap type: DBWrites`  
`trigger: 80`  
`reset: 79`
