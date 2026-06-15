---
title: "Creating Limited-Access Admin Groups"
source: "/space/nios90/1471316391"
pageId: "1471316391"
---
When you create a limited-access admin group, you can assign roles to it. The group then inherits the permissions of its assigned roles. In addition, you can assign permissions directly to the group. Only superusers can create admin groups.

To create a limited-access admin group:

1. From the **Administration** tab, select the **Administrators** tab -> **Groups** tab, and then click the Add icon.
2. In the *Add* *Admin* *Group* wizard, complete the following:
   
   - **Name:** Enter a name for the admin group.
   - **Comment:** Enter useful information about the group, such as location or department.
   - **Disable:** Select this to retain an inactivated profile for this admin group in the configuration. For example, you may want to define a profile for recently hired administrators who have not yet started work. Then when they do start, you simply need to clear this checkbox to activate the profile.
3. Click **Next** and complete the following:
   
   - **Superusers:** Clear this checkbox to create a limited-access admin group.
   - **Roles**: Optionally, click the Add icon to add an admin role to the admin group. In the *Role* *Selector* dialog box, select the roles you want to assign to the admin group, and then click the Select icon. Use Shift+click and Ctrl+click to select multiple admin roles. You can assign up to 21 roles to an admin group. The appliance displays the selected roles in the list box. When an admin group is assigned multiple roles, the appliance applies the permissions to the group in the order the roles are listed. Therefore if there are overlapped permissions among the roles, the appliance uses the permission from the role that is listed first and ignores the others. You can reorder the list by selecting a role and clicking the arrow keys to move the role up and down the list. To delete a role, select it and click the Delete icon.
   - **Allowed** **Interfaces**: Specify whether the admin group can use the Infoblox GUI (Grid Manager) and the API (application programming interface) to configure the appliance. Note that you must have the Cloud Network Automation or Cloud Platform license installed to configure access to the cloud API.
     
     **GUI:** Select this to allow the admin group to use the Infoblox GUI, Grid Manager.
     
     ** CLI: **Select this to allow the admin group access to the Infoblox CLI. You can select all the commands that you want the group to execute by selecting the command group from the drop-down list. You can then select individual commands from the command group that the admin group can execute . For example, if you want to grant access to the admin group to run all commands related to the Grid command group, select **Grid** from the drop-down list and select all the commands. You can also select individual commands from the Grid command group that you want the admin group to execute.
     
     **API:** Select this to allow the admin group access to the Infoblox API. The following options are available only if a Cloud Network Automation or Cloud Platform license is active in the Grid. You must first select this option to enable the following options.
     
     - **API** **(WAPI/PAPI** **only)**: Select this to allow the admin group to use only the RESTful API and Infoblox API.
     - **Cloud API:** Select this to allow the admin group to use the cloud API. This option is available only if a Cloud Network Automation or Cloud Platform license is installed in the Grid. Select one of the following:
       
       - **Cloud** **API** **only** **(No** **PAPI)**: Select this to allow the admin group to use WAPI (RESTful API) to send cloud API requests. Note that the Cloud API uses WAPI exclusively. The group has no access to the Infoblox API.
       - **Cloud** **API** **and** **PAPI** **(No** **WAPI)**: Select this to allow the admin group to send API requests and have access to the Infoblox API. However, the group cannot use RESTful API to send cloud API calls.

> **warning**
>
> ### Notes
> 
> - When you assign cloud API access to an admin group, the group assumes full authority over all delegated objects. You must however specifically assign object permissions to the admin group for the group to gain authority over non-delegated objects. For information about how to assign object permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
> - The GUI permission that you assign to the admin group is independent of the CLI permission that you assign. That is, you have to assign each of these permissions separately to non-super users. You can track actions and commands of non-super-users in the audit.log file.
> - If you enable CLI commands for reporting users, they will not be able to login to the CLI unless they log in to the **Reporting** tab in Grid Manager.
> - SAML-only users will not be able to run CLI commands, because such users are created dynamically and hence do have the password. However, users belonging to the saml_local group can run the `set` series of commands.
> - Cloud users will not be able to run CLI commands because they are delegated users.

1. Click **Next** and complete the following to define the dashboard template:

- **DashboardTemplate**: From the drop-down list, select the dashboard template you want to assign to this superuser group. When you assign a dashboard template to an admin group, the template applies to all users in the group. The default is **None**, which means that users in this group can perform all licensed tasks in the **TasksDashboard** tab if they have the correct permissions to the task-related objects. Note that if you want to delete a template, you must first unassign the template from an admin group, or select **None**, before you can delete it. For more information about dashboard templates, see [*About Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911).
- **Display Task flow Dashboards Only**: Select this checkbox if you want to restrict this admin group to access only the Tasks Dashboard in Grid Manager. Note that when you select this checkbox, users in this admin group have access to the tasks you specified in the selected dashboard template, if applicable. They cannot perform any other tasks or manage any core network services in Grid Manager the next time they log in to the system.

1. Click **Next** to add admin email addresses if you want the appliance to send approval workflow notifications to a list of email addresses for the admin group. Complete the following in the Email Address table:

Click the Add icon and Grid Manager adds a row to the table. Enter the email address of the admin who should receive workflow notifications. You can click the Add icon again to add more email addresses. You can also select an email address and click the Delete icon to delete it. To modify an email address, click the **Email** **Address** column and modify the existing address.

> **warning**
>
> ### Note
> 
> When you configure an approval workflow and select **Group** **Email** **Address(es)** as the approver notification addresses, the appliance sends workflow notifications to all email addresses you have added to this table. For information, see [*Configuring approval workflows*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280398484).

1. Optionally, click **Next** to add or delete extensible attributes for this admin group. For information, see[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

1. Save the configuration and click **Restart** if it appears at the top of the screen.
