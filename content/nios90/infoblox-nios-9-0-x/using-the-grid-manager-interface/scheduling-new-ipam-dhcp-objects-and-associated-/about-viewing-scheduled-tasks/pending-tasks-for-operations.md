---
title: "Pending Tasks for Operations"
source: "/space/nios90/1455063420"
pageId: "1455063420"
---
You can view all pending tasks for a network discovery or service restart in **Task** **Manager** if you have the applicable permissions. For information, see [*Viewing Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks). You can also view the pending tasks in their corresponding dialogs.  
To view the pending tasks in an editor:

1. Network **Discovery**: From the **Data** **Management** tab, select the **IPAM** tab, and then click **Discovery** from the Toolbar.

**Service** **Restarts** **for** **the** **Grid**: From the **Data** **Management** tab, select the **IPAM**, **DHCP** or **DNS** tab, and then click **Restart** **Services** from the Toolbar, or from the **Grid** tab, click **Restart** **Services** from the Toolbar.  
**Service** **Restarts** **for** **Grid** **members**: From the **Data** **Management** tab, select the **DHCP** or **DNS** tab -&gt; **Members** tab, select a member checkbox, and then click **Restart** **Services** from the Toolbar.

1. Click the Schedule icon at the top of the wizard, and then select **Click** **here** **to** **view/manage** **the** **scheduled** **items**. Note that this link appears only when you have one or more scheduled tasks.

1. Grid Manager displays the following information in the *Scheduled* *Tasks*:

- **Scheduled** **Time**: The date, time, and time zone when the appliance executes the task.
- **Submitted Time**: The date, time, and time zone when the task was submitted.
- **Submitter**: The admin who scheduled the task.
- **Task Details**: The message that appears in the audit log.

By default, the appliance sorts the tasks by **Scheduled** **Time** starting with the earliest scheduled start time. You can do the following in this viewer:

- Sort the tasks in ascending or descending order by column, except for **Task** **Details**.
- Reschedule a selected task. For information, see [Rescheduling Tasks Associated with Operations](#).
- Delete a selected task by selecting the task checkbox and clicking the Delete icon.
- Export and print the information in the table.
