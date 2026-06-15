---
title: "Modifying Admin Groups and Roles"
source: "/space/nios90/1395655105"
pageId: "1395655105"
---
To modify an admin group:

1. From the **Administration** tab, select the **Administrators** tab -> **Groups** tab -> *admin_group* checkbox, and then click the Edit icon.
2. The *Admin Group* editor provides the following tabs from which you can modify data:

- **General**: You can modify the following data.
  
  - **Name:** Modify the name of the admin group.
  - **Comment:** Enter useful information about the group, such as location or department.
  - **Disable:** Select this to retain an inactivated profile for this admin group in the configuration. For example, you may want to define a profile for recently hired administrators who have not yet started work. Then when they do start, you simply need to clear this checkbox to activate the profile.
  - **Allow Access from**: To control access to the GUI and API, select one of the following. You can restrict access using a named ACL or define individual ACEs. For information about named ACLs, see [*Configuring Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667677).  
    Note this group-based authentication is applicable for Grid-wide settings only. NIOS authenticates user credentials only after it authenticates the Grid-wide settings.
  - **Any**: Select this to allow any clients to access the GUI and API. This is selected by default.
  - **Named ACL**: Select this and click **Select Named ACL** to select a named ACL that contains only IPv4 and IPv6 addresses and networks. When you select this, the appliance allows GUI and API access for all ACEs in the named ACL. You can click **Clear** to remove the selected named ACL.
  - **Set of ACEs**: Select this to configure individual access control entries (ACEs). You can define ACEs for selected admin groups from which users can log in to the application. Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding.
  - **IPv4 Address and IPv6 Address**: Select this to add an IPv4 address or an IPv6 address. The **Type** column displays either IPv4 address or IPv6 address based on the item you select from the drop-down list. Click the **Value** field and enter the IP address. The appliance allows this client to access the GUI and API and restricts others.
  - **IPv4 Network and IPv6 Network**: Select this to add an IPv4 network or IPv6 network. The **Type** column displays either IPv4 address or IPv6 address based on the item you select from the drop-down list. Click the **Value** field and enter the network. The appliance allows this network to access the GUI and API and restricts others.

- After you have added access control entries, you can do the following:
  
  - Select the ACEs that you want to consolidate and put into a new named ACL. Click the **Create new named ACL** icon and enter a name in the *Convert to Named ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named ACL** panel. Note that the ACEs you configure for this operation stay intact.
  - Reorder the list of ACEs using the up and down arrows next to the table.Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
- **Roles**: Modify the data as described in Creating Limited-Access Admin Groups, see [*About Admin Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275587).
- **Extensible Attributes**: Add and delete extensible attributes that are associated with the admin group. You can also modify the values of the extensible attributes. For information, see [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[*Extensible*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[*Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)

1. Save the configuration and click **Restart** if it appears at the top of the screen.
