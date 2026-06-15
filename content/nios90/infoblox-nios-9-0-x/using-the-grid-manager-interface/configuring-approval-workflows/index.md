---
title: "Configuring Approval Workflows"
source: "/space/nios90/280398484"
pageId: "280398484"
---
Approval workflows support routing certain core network service tasks submitted by an admin group to another for approval. You can add an admin group to an approval workflow and define the group as a submitter or approver group. Note that only superusers can create approval workflows. For information about how to set up admin groups, see [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[*Admin*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[*Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).  
In an approval workflow, you can add a submitter group and an approver admin group that you have previously defined. You can also define when and to whom email notifications are sent, and configure options such as whether submitters or approvers must enter a comment or a ticket number when they submit tasks for approval. Approval workflows are useful when you want to control tasks that require reviews. For example, if you have a group of help desk users who can add, modify, and delete hosts and you want members of an operation group to review these tasks, you can define the help desk users as submitters, and then set up members of the operation group as approvers. You can then add the submitter and approver groups to an approval workflow and configure notifications options and other configurations, such as allowing the approvers to reschedule the submitted tasks.  
Not all core network service tasks can be routed for approval. You can configure approval tasks associated with certain objects. For a list of supported objects, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)*.*

> **warning**
>
> ### Note
> 
> When an admin group is defined as a submitter group, there are certain operations the submitters cannot perform even though they may have the permissions to do so. For information about such operations, see [Unsupported Operations for Submitter](#UnsupportedOperationsfSubmitter).

To create an approval workflow, complete the following:

1. If you have not already done so, set up admin groups that you can configure as submitter groups and approver groups in an approval workflow, as described in [*About*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[*Admin*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)[*Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).
2. Create an approval workflow and configure email notifications and other options, as described in [Creating Approval Workflows](#CreatApprovalWorkflows).

You can do the following after you have created approval workflows:

- View a list of approval workflows, as described in [Viewing Approval Workflows](#ViewApprovalWorkflows)*.*
- Modify approval workflows, as described in [Modifying Approval Workflows](#ModApprovalWorkflows).
- Delete approval workflows, as described in [Deleting Approval Workflows](#DelApprovalWorkflows)*.*
- View a list of approval tasks, as described in [Viewing Approval Tasks](#ViewApprovalTasks).
- View approval notifications, as described in [Viewing Workflow Notifications](#ViewWorkflowNotifications).
