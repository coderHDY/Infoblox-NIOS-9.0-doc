---
title: "show delete_tasks_interval"
source: "/space/nios90/280789743"
pageId: "280789743"
---
The **show** **delete_tasks_interval** command shows the time interval the appliance waits until it deletes the completed and rejected tasks from the system. Once the tasks are removed, they are no longer displayed in the **Task** **Manager** tab of **Grid** **Manager**. The default interval is 14 days. For information about how to configure this time interval, see *[set delete_tasks_interval](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-delete-tasks-interval)*.

# Syntax

`show delete_tasks_interval`

This command has no arguments.

# Example

`Infoblox &gt; ``show`` ``delete_tasks_interval`  
` show delete_tasks_interval`  
` Current delete tasks interval is 25 days`
