---
title: "Administrative Permissions for the IPv4 and IPv6 DHCP Lease Histories"
source: "/space/nios90/1343291589"
pageId: "1343291589"
---
A limited-access admin group can view and export the IPv4 and IPv6 DHCP lease histories if it has read-only permission to the IPv4 and IPv6 DHCP lease history. Permissions to the IPv4 and IPv6 DHCP lease histories are different from the network permissions. Therefore, an admin group can access the IPv4 and IPv6 DHCP lease histories, regardless of its network permissions. Note that only superusers can import a DHCP lease history file.  
To define permissions for the IPv4 and IPv6 DHCP lease histories:

1. For an admin group: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_group* in the Groups table, and then click the Add icon -> **Global** **Permissions** from the Create New Permission area or select Add -> **Global** **Permissions** from the Toolbar.   
   or  
   For an admin role: From the **Administration** tab, select the **Administrators** tab -> **Permissions** tab -> *admin_role* in the Roles table, and then click Add icon -> **Global** **Permissions** from the Create New Permission area or select Add -> **Global** **Permissions** from the Toolbar.
2. Complete the following in the *Manage* *Global* *Permissions* dialog box:
   
   - **Permission** **Type**: Select **DHCP** **Permissions** from the drop-down list.
   - In the table, select **Read/Write**, **Read-only**, or **Deny** for **All** **IPv4** **DHCP** **Lease** **History** and **All** **IPv6** **DHCP** **Lease** **History.**
3. Save the configuration and click **Restart** if it appears at the top of the screen.
