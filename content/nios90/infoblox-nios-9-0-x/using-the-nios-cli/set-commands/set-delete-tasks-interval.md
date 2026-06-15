---
title: "set delete_tasks_interval"
source: "/space/nios90/280757351"
pageId: "280757351"
---
Use the` ``set`` ``delete_tasks_interval`` `command to configure the time interval the appliance waits until it deletes completed and rejected tasks from the system. Grid Manager displays these tasks in the **Task** **Manager** tab until they are deleted from the system. By default, Grid Manager displays these tasks for 14 days. You can configure this time interval. Valid values are from 1 to 30 days.  
Use the `show` **delete_tasks_interval** command to view the current time interval. For information, see *[show delete_tasks_interval](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-delete-tasks-interval)*.

# Syntax

`set delete_tasks_interval ``days`

| **Argument** | **Description** |
| --- | --- |
| `days`` ` | The number of days completed and rejected tasks are displayed in the **Task****Manager** tab before they are deleted. The minimum value is 1 and the maximum is 30. The default is 14. |

# Example

`Infoblox &gt; ``set`` ``delete_tasks_interval`` ``25`  
` Current delete tasks interval is 14 days`  
` The delete tasks interval has been changed to 25 days Is this correct? (y or n): ``y`  
` The delete tasks interval has been changed. `
