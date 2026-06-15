---
title: "Creating Approval Workflows"
source: "/space/nios90/1455293078"
pageId: "1455293078"
---
Before you create an approval workflow, ensure that you have admin groups that you can define as submitters and approvers. Note that a submitter group can be added to only one approval workflow, and approver groups can be added to multiple workflows. An approver can choose to approve a task and either keep or change the date and time when the task is executed. For information about scheduling and rescheduling tasks, see [*Scheduling*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[*Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks). An approver can also reject a submitted task.  
All submitted tasks are executed based on submitter permissions. When an admin submits a task, the appliance logs the task in the audit log and associates it with a task ID. You can view your tasks in **Task Manager**, as described in [*Viewing Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks). Depending on your configuration, you can control when and to whom email notifications are sent. For example, you can configure the appliance to send notifications to only the approver each time when a task requires approval, or send notifications to both the submitter and approver group each time when a task is disapproved.



To create an approval workflow

1. From the **Administration** tab, select the **Workflow** tab -&gt; **Approval Workflows** tab, and then click the Add icon
2. In the *Add Approval Workflow* wizard, complete the following:

- **Submitter Group**: From the drop-down list, select the admin group whose submitted tasks require approvals. Note that performing CSV imports do not require approvals. If there is a warning that the submitter group has CSV import permission, you may want to remove the permission.
- **Approver Group**: From the drop-down list, select the group that can approve tasks submitted by admins of the submitter group. If the approver group you select does not have the permission to schedule tasks, the approvers cannot reschedule the execution dates and times of the tasks when they approve them.
- **Ticket Number**: From the drop-down list, select one of the following to determine whether a ticket number is required when a submitter submits a task for approval.
  
  - **Required**: The submitter must enter a ticket number when submitting a task.
  - **Optional**: The submitter can choose to enter a ticket number or not when submitting a task.
  - **Not Used**: The **Ticket Number** field does not appear when the submitter creates a task.
- **Submitter Comment**: From the drop-down list, select whether the submitter must enter a comment or not when submitting a task for approval. You can select **Required**, **Optional**, or **Not Used**.
- **Approver Comment**: From the drop-down list, select whether the approver must enter a comment or not when approving a task. You can select **Required**, **Optional**, or **Not Used**.

1. Click **Next** and complete the following to specify notification options for the workflow:

- **Approver Notification Address(es)**: Select one of the following to specify to which approver email addresses the appliance sends workflow notifications. The default is **Group Email Address(es)**.
  
  - **Group Email Address(es)**: Select this if you want the appliance to send notifications to the list of email addresses configured for the admin group. For information about how to configure this list, see [*About Admin*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[*Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).
  - **User Email Address(es)**: Select this if you want the appliance to send notifications to individual email addresses of the admin group.
- **Notifications sent on**: Select the operations that can trigger email notifications. When you select an operation, the appliance sends a notification each time that operation occurs. By default, all operations are selected.
  
  - **Approval Required**: The appliance sends an email notification each time an approval is required.
  - **Task Approved**: The appliance sends an email notification each time a task is approved.
  - **Task Rejected**: The appliance sends an email notification each time a task is rejected.
  - **Task Succeeded**: The appliance sends an email notification each time a task is completed successfully.
  - **Task Failed**: The appliance sends an email notification each time the execution of a task fails.
  - **Task Rescheduled**: The appliance sends an email notification each time a task is being rescheduled.
- **Notifications sent to**: For each operation, select whether the **Approver**, **Submitter**, or **Both** are notified when the operation occurs. The default value is **Both** for all operations. For information about email notifications, see [Viewing Approval Tasks](#).

1. Optionally, click **Next** to add extensible attributes to the approval workflow. For information, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#AddingExtensibleAttributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#AddingExtensibleAttributes)[*Extensible*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#AddingExtensibleAttributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#AddingExtensibleAttributes)[*Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#AddingExtensibleAttributes).
2. Save the configuration.
