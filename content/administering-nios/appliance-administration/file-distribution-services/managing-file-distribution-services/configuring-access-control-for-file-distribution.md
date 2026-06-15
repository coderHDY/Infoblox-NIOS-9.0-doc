---
title: "Configuring Access Control for File Distribution"
source: "/space/nios90/1395622135"
pageId: "1395622135"
---
You can select a named access control list (ACL) or create individual access control entries (ACEs) for each file distribution service (TFTP, FTP, HTTP) to control access to file distribution requests from specific clients. You can grant or deny access from specific IPv4 addresses and IPv4 networks, but you cannot do so for IPv6 addresses and IPv6 networks as well as TSIG key based ACEs.

> **warning**
>
> ### Note
> 
> For HTTP service, you can grant permissions to all clients or specific clients, but you can deny permissions only to all clients, not specific clients.



When you grant access to a network for a specific file distribution service, all clients in the network are allowed to request file distribution service. You can deny services to specific IP addresses within the network by adding these addresses to an access control list and denying access to the service. Ensure that you list these IP addresses before the network address in the list because the appliance applies permissions to the addresses in the order they are listed. You can use the arrow keys to move the addresses up and down the list after you add them. For information about how to create a named ACL, see [*Configuring Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667677).  
To configure an access control list for a file distribution service:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Member* *File* *Distribution* *Properties* editor, select a service tab: **TFTP**, **FTP**, or **HTTP**.
3. In the **Allow** **these** **clients** **perform** **file** **transfers** section, select one of the following:
   
   - **Any**: Select this to allow any clients to use the HTTP file distribution service. This is selected by default.
   - **Named** **ACL:** Select this and click **Select** **Named** **ACL** to select a named ACL that contains only IPv4 addresses and networks. File distribution does not support IPv6 addresses/networks and TSIG key based ACEs. When you select this, the appliance allows clients that have the **Allow** permission in the named ACL to use the file distribution service. You can click **Clear** to remove the selected named ACL.
   - **Set** **of** **ACEs**: Select this to configure individual access control entries (ACEs). Click the Add icon and select one of the following from the drop-down list. Depending on the item you select, Grid Manager either adds a row for the selected item or expands the panel so you can specify additional information about the item you are adding.
     
     - **IPv4** **Address:** Select this to add an IPv4 address. Click the **Value** field and enter the IP address. The **Permission** column displays **Allow** by default. Only for TFTP and FTP, you can change it to **Deny** by clicking the field and selecting **Deny** from the drop-down list.
     - **IPv4** **Network:** In the **Add** **IPv4** **Network** panel, complete the following, and then click **Add** to add the network to the list:
       
       - **Address:** Enter an IPv4 network address and either type a netmask or move the slider to the desired netmask.
       - **Permission:** Only for TFTP and FTP, select **Allow** or **Deny** from the drop-down list.
     - **Any** **Address/Network:** For TFTP and FTP only. Select this to allow or deny access to all IPv4 addresses and networks. The default permission is **Allow**, which means that the appliance allows access to and from all IPv4 clients. You can change this to **Deny** to block access.  
       After you have added access control entries, you can do the following:
     - Select the ACEs that you want to consolidate and put into a new named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box. The appliance creates a new named ACL and adds it to the **Named** **ACL** panel. Note that the ACEs you configure for this operation stay intact.
     - Reorder the list of ACEs using the up and down arrows next to the table.
     - Select an ACE and click the Edit icon to modify the entry.
     - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
