---
title: "Administrative Permissions for Super Hosts"
source: "/space/nios90/1468497989"
pageId: "1468497989"
---
Superusers and limited-access users with read/write permission to **All Super Hosts** and corresponding objects can manage super hosts and their associated resource records. By default, the Super Host Admin role supports read/write permission on super hosts.

To define permissions for super hosts:

1. **For an admin group**: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_group* in the Groups table, and then click the Add icon -> **Global Permissions** from the Create New Permission area or select Add -> **Global Permissions** from the Toolbar. For more information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
2. **For an admin role**: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_role* in the Roles table, and then click Add icon -> **Global Permissions** from the Create New Permission area or select Add -> **Global Permissions **from the Toolbar. For more information, see [*About Admin Roles*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668617).
3. Complete the following in the *Manage Global Permissions* dialog box:
   
   - **Permission Type**: Select **Super Host Permissions** from the drop-down list.
   - In the table, select **Read/Write, Read-Only**, or **Deny** for All Super Hosts.
4. Click **Save & Close**.

You can also define object level permissions for a super host. For more information, see [*Defining Object Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
