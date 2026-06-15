---
title: "show scheduled"
source: "/space/nios90/280756802"
pageId: "280756802"
---
Use the `show`` ``scheduled` command to view the number of times per hour the appliance checks if the services need a restart when the scheduling task feature is enabled. The appliance restarts services only when the execution of a scheduled task requires a service restart.  
Use the *[set scheduled](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-scheduled)* command to configure the value. You can set the value from 0 to 60, and the default value is 60. A value of 0 turns off the restart feature.

# Syntax

`show scheduled task restarts`

This command has no argument.

# Example

`Infoblox &gt; ``show`` ``scheduled`` ``task`` ``restarts`  
` Number of restarts per hour: 4`
