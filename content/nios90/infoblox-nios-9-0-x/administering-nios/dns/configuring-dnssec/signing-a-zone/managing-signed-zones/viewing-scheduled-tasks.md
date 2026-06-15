---
title: "Viewing Scheduled Tasks"
source: "/space/nios90/1455063080"
pageId: "1455063080"
---
You can view the status of operations that are scheduled. The appliance also displays error or warning messages, if any. For example, if you schedule the **Sign** **Zones** operation for multiple zones, there is a possibility that some operations may fail, some may succeed with warnings, and some are completed successfully. You can also view the error or warning messages that are generated for certain affected zones. To view the status:

1. From the **Administration** tab, select the **Workflow** tab -&gt; **Task** **Manager** tab.
2. Grid Manager displays the DNSSEC operations that are scheduled. To view the details you can either click the Action icon
   
   
   
   next to the task ID and select **View** from the menu or select the checkbox adjacent to the Action icon and then click **View** from the Toolbar.
3. The **General** tab of the *Scheduled* *Task* *Details* wizard displays the following details:
   
   - **Task ID**: The ID associated with the task. The appliance assigns an ID to a task in chronological order. By default, the appliance sorts tasks by **Task ID**.
   - **Action** **Type**: The operation the appliance performs in this task.
   - **Submitter**: The username of the admin who scheduled or submitted the task.
   - **Submitted** **Time**: The date, time, and time zone when the task was submitted.
   - **Ticket** **Number**: For an approval workflow, this number may be entered by the submitter to associate the task with a help desk ticket number or a reference number.
   - **Approver**: The username of the admin who has approved this task.
   - **Approver** **Comments**: Comments entered by the approver.
   - **Executed** **on** **Member**: The Grid member on which the task is executed.
   - **Execution** **Status**: The execution status of the task. Possible values are **Completed**, **Failed**, **Pending**, and **Executing**.
   - **Execution** **Time**: The date, time, and time zone when the task was executed.
   - **Affected** **Objects**: The name of the object and object type.
4. The **Warnings/Errors** tab of the *Scheduled* *Task* *Details* wizard displays error or warning messages related to tasks. It also displays object execution details. This table is blank if there are no error messages or warnings. You can view the error message and the name of the zone with which the error or warning message is associated.
5. Click **Close** to close the dialog box.
