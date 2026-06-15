---
title: "show debug"
source: "/space/nios90/280658612"
pageId: "280658612"
---
The `show debug` command shows whether debug logging is on or off. When on, debug logging captures all traffic and processes on the NIOS appliance. Due to the verbose nature and the extent of the information captured, these log files grow at a rapid rate. For information on how to turn on or off the debug logging, see [*set debug*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-debug).

> **warning**
>
> ### Note
> 
> Infoblox recommends that you turn off debug logging unless Infoblox Support specifically directs you to turn on this feature. If left on, debug logging can cause performance issues.

# Syntax

`show debug`

This command has no arguments.

# Example

`Infoblox &gt; show debug`  
` Debug logging status : enabled `  
` `

`Infoblox &gt; show debug`  
` Debug logging status : disabled`

For information on viewing the output of the debug log file, see [*show log*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-log).
