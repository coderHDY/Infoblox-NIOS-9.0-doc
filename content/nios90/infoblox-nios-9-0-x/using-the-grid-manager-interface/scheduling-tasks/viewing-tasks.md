---
title: "Viewing Tasks"
source: "/space/nios90/280268354"
pageId: "280268354"
---
The appliance displays scheduled tasks and approval tasks in the **Task** **Manager** tab of Grid Manager. Scheduled tasks are those with scheduled time listed and approval tasks contain approval status. A task can also be scheduled and queued for approval at the same time. By default, all completed and rejected tasks are displayed in **Task** **Manager** for up to 14 days before they are removed from the list. You can configure how long the completed and rejected tasks are displayed in **Task** **Manager** using the CLI command set delete_tasks_interval. For more information about the CLI command, see *Infoblox* *CLI* *Guide*.  
The appliance logs all tasks in the audit log and associates each with a task ID. By default, Grid Manager sorts tasks by Task ID in **Task** **Manager**. You can view tasks that you are allowed to see based on your permissions. For information about admin permissions, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)[*Administrative*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions)[*Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).  
To view tasks:

1. From the **Administration** tab, select the **Workflow** tab -&gt; **Task Manager** tab.
2. Grid Manager displays the following information for each task:

You can do the following in the **Task Manager** tab:

| **Field Name** | **Description** |
| --- | --- |
| **Action ** | The operation the appliance performs in this task. The can be: **Add**, **Modify**, **Delete**, **Network Discovery**, **Lock/Unlock Zone**, or **Restart Services**. |
| **Affected Object ** | The name or value of the object that is associated with the task. For example, if the task involves an A record, this field displays the domain name of the record. If it is a fixed address, it displays the IP address of the fixed address. |
| **Approval Status** | The current approval status. Possible values are **Approved**, **Not Applicable**, **Pending**, and **Rejected**. |
| **Approver** | The username of the admin who has approved this task. |
| **Approver Comment** | Comments entered by the approver. |
| **Associated Task** | (hidden by default) Applies to Port Configuration tasks. If a port configuration task is dependent on an object change task (such as a new Fixed Address or an edit to an existing object), this could will show the Task ID value for the associated object change task. |
| **Executed Time** | The date, time, and time zone the task was executed. |
| **Execution Status** | The execution status of the task. Possible values are Completed, Failed, Pending, and Executing. |
| **Object Type** | The object type. For example, the appliance can display A Record or Fixed Address. |
| **Scheduled Time** | The date, time, and time zone when the appliance executes the task. |
| **Submitted Time** | The date, time, and time zone when the task was submitted. |
| **Submitter** | The username of the admin who scheduled or submitted the task. |
| **Submitter Comment** | Comments entered by the submitter. |
| **Task ID** | The ID associated with the task. The appliance assigns an ID to a task in chronological order. By default, the appliance sorts tasks by Task ID. |
| **Task Details** | Detailed information about the task. This message also appears in the audit log. |
| **Ticket Number** | For an approval workflow, this number may be entered by the submitter to associate the task with a help desk ticket number or a reference number. |
| **Type** | Indicates key information about certain types of executing/executed jobs. The Type column lists values for Port Control and for Object Change tasks undertaken by Grid Manager or submitted by Grid Manager for approval by the administrator. |

- Sort the tasks in ascending or descending order by column, except for **TaskDetails**.
- Use filters and the search function to look for specific values.

> **warning**
>
> ### Note
> 
> You cannot use the search function to search for approval or execution status. Use filters to search for these values.

- Create a quick filter to save frequently used filter criteria. Grid Manager provides the following default quick filters that you can select from the Quick Filter drop-down list: **PendingApprovals**, **RejectedTasks**, and **ScheduledTasks**. For more information about using quick filters, see [*Finding and Restoring Data*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
- Export and print the information in the table.
- Control the display of information in the panel by toggling between a single-line view and a multi-line view.
- Reschedule a task, cancel a scheduled task, or execute a task immediately.
- For approvers, select a task and click the Approve icon to approve the task, or click the Reject icon to disapprove the task. You can also reschedule the task while approving it.

> **warning**
>
> ### Note
> 
> If you have multiple pages of tasks in **Task** **Manager**, you can select multiple tasks on the current page for approval or disapproval. If you click the **Select** **all** **objects** **in** **this** **dataset** link to select all the tasks in the dataset, the Approve and Reject icons are disabled and you cannot approve or reject any task.

# Using the Task Manager Action Menu

The Task Manager page provides an Action icon  column with a series of menu options for features related to grid Manager tasks to manage task execution, scheduling and approval. Menu choices change based upon the context and the current state of tasks in the table; features available in the Action menu include the following:   
*Figure* *1.6* *Task* *Manager* *Action* *menu*

| **Features in Action Menu** | **Description** |
| --- | --- |
| (*AppliesonlywithNetworkInsight*) **Approve** and **Reject** | Enables admins to approve or reject a pending job; rejecting a job immediately cancels it. |
| **AssociatedTask (applies only with port configuration tasks)** | Choosing this option opens the object change task, if any, for the currently selected port configuration task. |
| **ExecutionLog** | Opens a completed task's execution log window. the Execution Log lists the complete communications sequence sent to a device to perform a port control task. |
| **ExecuteNow** | Force a selected pending task to execute immediately. |
| **Re-execute** | Allows you to re-run the selected task. Combined with the Execution Log, this process can aid in troubleshooting a failed port control task. |
| **Reschedule** | Opens the Reschedule window for the selected task. To immediately execute this task, click **Now**. Or, in the *Reschedule* panel, click **Later**, and then specify a date, time, and time zone. You can reschedule the task if you have the applicable permissions. Click **Save** to commit the changes. |
| **Delete** | Deletes the pending task. |
| **View** | Opens the Task Viewer to the currently selected task. For related information about using the Task Viewer to View Job Logs and Approve Jobs, see [*NetMRI Task Pack*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/dashboards/tasks-dashboard/netmri-task-pack). |
