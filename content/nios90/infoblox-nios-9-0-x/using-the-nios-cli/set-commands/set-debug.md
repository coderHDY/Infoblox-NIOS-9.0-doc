---
title: "set debug"
source: "/space/nios90/280822788"
pageId: "280822788"
---
The `set`` ``debug`` `command enables and disables debug logging for the NIOS appliance. Debug logging is the most extensive and verbose logging that is available on the appliance. It captures all levels of messaging. The output is written into the debug log file. For information on how to view this output, see *[show debug](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-debug)*.  
Use this command to capture specific occurrences. However, only use it for short periods of time. Do not leave it running for extended periods of time. Due to the amount of data that is captured, leaving this feature running for any length of time can affect the performance of the appliance. For this reason, it is best to use this command during non-peak hours.

> **warning**
>
> **Note**
> 
> Infoblox recommends that you turn debug logging off, unless Infoblox Support specifically directs you to turn this feature on. If you leave debug logging turned on, it can cause performance issues.

# Syntax

`set debug [distribution|upgrade|firewall|ntp|slog|all] [on|off]`

| **Argument ** | **Description** |
| --- | --- |
| all | Specifies debug logging for all services as enabled or disabled. |
| on | Enables debug logging. |
| off | Disables debug logging. |

# Examples

## Enable debugging

`Infoblox &gt; ``set`` ``debug`` ``all`` ``on`  
` Enabled debug logging for : all`

## Disable debugging

`Infoblox &gt; ``set`` ``debug`` ``all`` ``off`  
` Disabled debug logging for: all `
