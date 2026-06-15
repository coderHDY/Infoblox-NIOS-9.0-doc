---
title: "set scheduled"
source: "/space/nios90/280757110"
pageId: "280757110"
---
Use the `set`` ``scheduled` command to specify the number of times per hour the appliance checks if the services need a restart when the task scheduling feature is enabled. You must manually restart services or schedule a restart of services for the scheduled change to take effect.  
You can set the value from 0 to 60, and the default value is 60. When you set the value to 0, the appliance turns off the restart feature.  
Use the *[show scheduled](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-scheduled)* to view the number of times per hour the appliance checks whether a restart of services is required.

# Syntax

`set scheduled task restarts [``0-60``]`

| **Argument** | **Description** |
| --- | --- |
| `0-60` | The number of times per hour the appliance checks if the services need a restart when the task scheduling feature is enabled. You can enter any number from 0 to 60. The default is 60. A value of 0 turns off the restart feature. |

# Example

Enter the following command to enable the appliance to check 10 times per hour whether the services need a restart:

`Infoblox &gt; ``set`` ``scheduled`` ``task`` ``restarts`` ``10`

The appliance checks 10 times per hour if the services must be restarted, which is every six minutes of the hour. For example, if you enter the command at 3:15 p.m., the appliance checks if the services must be restarted every six minutes starting at the hour (3:00 p.m.). Therefore, the next checks are at 3:18, 3:24, 3:30, 3:36, 3:42, 3:48, 3:54, and 4:00 p.m.
