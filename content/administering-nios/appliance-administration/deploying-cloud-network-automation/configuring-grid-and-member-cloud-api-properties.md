---
title: "Configuring Grid and Member Cloud API Properties"
source: "/space/nios90/280407427"
pageId: "280407427"
---
Only admin users in admin groups with cloud API access can be used to send cloud API queries by default. For information about how to add users to an admin group, see [*Creating Local Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011). To control which admin users, either from this group or from remote servers, can perform cloud API tasks, you can further define ACLs at the Grid and member levels.

If you rename the admin user or delete the admin user, the API proxy server fails and an error message is displayed.

1. **Grid**: From the **Cloud** tab, click **Grid** **Cloud** **API** **Properties** from the Toolbar. Configuration done for the Grid only applies to the current Grid Master; it is not inherited by other Cloud Platform Appliances. ** **  
   **Member**: From the **Cloud** tab, select the **Members** tab -> *member* checkbox, and then click the Action icon
   
   *[image: media]*
   
   and select **Edit** from the menu. Configuration done at the member level applies only to the Grid member.
2. In the *Grid* *Cloud* *API* *Properties* (for the current Grid Master) or the *Member* *Cloud* *API* *Properties* editor, select the **General** tab, and then complete the following:  
   **Administrator** **allowed** **to** **make** **WAPI** **request** **on** **the** **Grid** **Master**
   
   - **None**: When you select this, none of the admin users in admin groups with cloud API access can send cloud API requests to the Grid Master or Cloud Platform Appliance.
   - All: When you select this, all admin users in admin groups with cloud API access can send cloud API requests to the Grid Master or cloud Platform Appliance. This is the default.
   - Set of administrators: Select this to create a list of admin users, both remote and local, who can send cloud API requests. Local users are users defined in admin groups with cloud API access. Remote users are users who log in from other remote servers. These users will be authenticated before they can access the Grid Master or Cloud Platform Appliance.  
     To add local users, click the Add icon and select **Local**. In the *Cloud * *API* * Admin* * Selector*, select an admin user from the list. Grid Manager adds the selected user to the table. If you have only one cloud API user, Grid Manager automatically adds this user to the table.  
     To add remote users, click the Add icon and select **Remote**. Grid Manager adds a row to the table. Click the **Admin** column to add the username of the administrator. Note that the username you enter here must match the username used on the remote server. Depending on the remote server type, you must create a server group for these remote users and add the group to the admin authentication policy to ensure these admin users can send cloud API requests. For information about how to configure admin server groups and admin authentication policy, see* *[*About Remote Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519).  
     Click the Add icon again to add additional admin users.  
     **Recycle** ** cloud ** **objects**: This only applies to the Grid Master. Select this checkbox to enable the recycling of cloud objects. This is selected by default.
3. Save the configuration.
