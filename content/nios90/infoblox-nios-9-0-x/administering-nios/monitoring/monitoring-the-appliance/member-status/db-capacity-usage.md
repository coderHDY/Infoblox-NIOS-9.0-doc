---
title: "DB Capacity Usage"
source: "/space/nios90/1320357184"
pageId: "1320357184"
---
Grid Manager displays the current percentage of the database in use on the selected Grid member. It also describes whether the usage has exceeded the trigger or reset value. Note that the trigger and reset values are user configurable. The default trigger value is 80% and the reset value is 70%. For information about using the capacity report, see [*Monitoring Tools*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools). The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|  | Green | The database capacity is either below the reset value or has not yet reached the trigger value. |
|    | Yellow | The database capacity is decreasing from the trigger value, but has not yet reached the reset value. When the capacity exceeds the trigger value, the icon changes from green to yellow. |
