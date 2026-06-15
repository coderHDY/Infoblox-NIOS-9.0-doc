---
title: "Administrative Permissions for Reporting and Analytics"
source: "/space/nios90/280857269"
pageId: "280857269"
---
You must have the appropriate permissions to access, view, edit, and clone searches, dashboards, reports, and alerts that are available in the **Reporting** tab. NIOS synchronizes all users and admin groups as users and roles on the reporting server. In NIOS, admin groups may have the setting "superusers" enabled or disabled. NIOS groups that have "superusers" enabled will correspond to roles with administrative permissions on the reporting server. This documentation will refer to this role as a superuser role and the associated users as superusers. NIOS groups that do not have "superusers" enabled will not have administrative permissions on the reporting server. This role will be referred to as a non-superuser role and the associated users are limited-access users. The default NIOS admin group "admin-group" will have a superuser role on the reporting server called "infoblox-admin-role." The default NIOS admin named "admin" will have a user name on the reporting server called "infoblox-admin." Ensure that for NIOS groups to access the reporting server, they must adhere to the Splunk’s guideline for naming conventions such as the characters should be lowercase and cannot contain spaces, colons, semicolons, or forward slashes and commas.

Ensure that for NIOS groups to access the reporting server, they must adhere to Splunk's naming conventions. Specifically, the characters should be in lowercase and should not include spaces, colons, semicolons, forward slashes, or commas.

> **warning**
>
> ### Note
> 
> - When you enable the reporting service, the *splunk-reporting-group* is created automatically for authentication by the Reporting and Analytics App on the Grid. It is an internal admin group, so you must not add users to this group or rename it.
> - It is necessary for NIOS groups accessing the reporting server to adhere to Splunk's naming convention guidelines, such as the characters should be lowercase and cannot contain spaces, colons, semicolons, or forward slashes and commas.

By default, superusers have full access to the Reporting and Analytics App and limited-access users do not. Superusers can grant permissions to limited-access users so they can access the Reporting and Analytics App. Limited-access users will not have access to the **Reporting** tab until superusers grant them this access. For information about Splunk roles, refer to the Splunk documentation. Note that the reporting service does not support non-ASCII characters in the names of admin groups and admin users. When you include ASCII characters and space in the admin user name, make sure that its length does not exceed 33 characters.

When configuring NIOS, only superuser and users with the Grid Reporting Properties permission can configure Grid Reporting Properties. Limited-access users can view the Grid Reporting Properties. When superusers create or delete any admin groups in NIOS, the corresponding roles are created or deleted on the reporting server. You cannot directly create or delete roles on the reporting server. If superuser permission is granted or removed from a NIOS group, this permission change will be reflected in the corresponding role on the reporting server. When you modify the name of an admin group on NIOS, make sure that you grant permissions again for all corresponding roles that are created on the Reporting and Analytics App for this renamed admin group. For information about granting permissions, see Granting Permissions below.

> **warning**
>
> ### Note
> 
> Limited-access users cannot create, modify, and delete any user role for the Splunk App.

# Granting Permissions

Superusers can grant App permissions to limited-access users. Permissions for all reporting objects are migrated to the new Reporting solution and managed through the new user interface after an upgrade. You may see some new built-in roles, such as **Everyone**, when configuring Reporting permissions. For best practices, do not alter permissions for these new built-in roles. In addition, Reporting Dashboard and Reporting Search global permissions have been removed. If an admin group or admin role was granted these permissions before an upgrade, the permissions will still be displayed after an upgrade. However, they won't take any effect. The Grid Reporting Properties permission is retained.

> **warning**
>
> ### Note
> 
> The **App Permission** and **Edit Permissions** sections display only your assigned admin role on the reporting server. Therefore, you can only view the admin role to which your user name was assigned. Only the default system admin can view all admin roles.

To set permissions:

1. From the **Reporting** tab -> select the **Administration** tab.
2. Click **Permissions** to manage permissions.
3. In the **App** **permissions **dialog box, set permissions to **Read** and/or **Write** for the roles listed. You must have at least one permission (Read or Write) to execute a task on the **Reporting** tab.
4. Click **Save**.

*Setting* *Permissions* *for* *Reporting* *and* *Analytics* *App*

*[drawio]*

## Editing Permissions

Users can edit permissions for objects where they are the owner, such as dashboards, reports, and alerts. When a user creates a new report, dashboard or an alert, It is only available to that user. To make that object available to other users, you can do the following (only if your permissions allow you to do so):

- Make an object available to all users.
- Restrict or expand access to all or specific objects by roles.
- Set Read or Write permissions at the Reporting level for roles. For information about users and roles, refer to the Splunk documentation.

To modify permissions:

1. From the **Reporting** tab -> select **Dashboards** or **Reports** or **Alerts**.
2. From the **Edit** drop-down list, select **Edit** **Permissions**.
3. Specify the following:
   
   - Display for **Owner**, **App**, or **All** **Apps**. For more information about **All** **Apps** permissions, refer to the Splunk documentation.
   - Read and write privileges for users. By default, the permissions are set on the object. You cannot remove the **Read** and **Write** permissions completely. However, you can change this permissions from **Read** to **Write** or vice versa, based on your permissions. For more information about permissions, refer to the Splunk documentation.
4. Click **Save**.
