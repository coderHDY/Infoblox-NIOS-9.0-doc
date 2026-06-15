---
title: "Configuring Syslog for Grid Members"
source: "/space/nios90/1381171675"
pageId: "1381171675"
---
You can override Grid-level syslog settings and enable syslog proxy for individual members. A Grid member can act as a syslog proxy for non-Grid members. For example, routers and other syslog servers. However, it cannot act as a syslog proxy for other Grid members or the Grid Master. When you enable syslog proxy, the member receives syslog messages from specified devices, such as syslog servers and routers, and then forwards these messages to an external syslog server. You can also enable appliances to use TCP for sending syslog messages. Using TCP is more reliable than using UDP; this reliability is important for security, accounting, and auditing messages sent through the syslog. Note that you cannot enable syslog proxy for Grid members. But you can forward the syslog messages of a Grid Master to external syslog servers.  
To configure syslog parameters for a member, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Grid* *Member* *Properties* editor, select the **Monitoring** tab -> **Basic** tab, click **Override** in the Syslog section, and then complete the fields as described in Specifying Syslog Servers above.   
   In addition to storing the system log on a Grid member, you can configure a member to send the log to a syslog server.
3. Select the **Advanced** tab and complete the following:
   
   - **Enable** **syslog** **proxy:** Select this to enable the appliance to receive syslog messages from other devices, such as syslog servers and routers, and then forward these messages to an external syslog server.
     
     - **Enable** **listening** **on** **TCP:** Select this if the appliance uses TCP to receive messages from other devices. Enter the number of the port through which the appliance receives syslog messages from other devices.
     - **Enable** **listening** **on** **UDP:** Select this if the appliance uses UDP to receive messages from other devices. Enter the number of the port through which the appliance receives syslog messages from other devices.
   - **Proxy Access Control:** Select one of the following to configure access control when receiving syslog messages from specific syslog servers or routers:
     
     - **None**: Select this if you do not want to configure syslog proxy. When you select this option, none of the devices can send syslog messages to the appliance. This is selected by default.
     - **Named ACL:** Select this and click **Select Named ACL** to select a named ACL that contains only IPv4 addresses and networks. This does not support TSIG key based ACEs. When you select this, the appliance permits clients that have **Allow** permission in the named ACL to allow syslog messages from specific syslog servers or routers. You can click **Clear** to remove the selected named ACL.
     - **Set of ACLs**: Select this to configure individual access control entries (ACEs). Click the Add icon and select one of the following from the drop-down list. Grid Manager adds a row to the table.
       
       - **IPv4 Address or IPv6 Address:** Select this to add an IPv4 or IPv6 address entry. Click the **Value** field and enter the address. The default permission is **Allow**, which means that the appliance allows access to and from this device. You can change this to **Deny** to block access.
       - **IPv4 Network or IPv6 Network:** Select this to add an IPv4 or Ipv6 network entry. Click the **Value** field and enter the network. The default permission is **Allow**, which means that the appliance allows syslog messages sent by this network. You can change this to **Deny** to block access.
       - **Any Address/Network:** Select this to allow or deny access to all IPv4 and IPv6 addresses and networks. The default permission is **Allow**, which means that the appliance allows syslog messages sent by all addresses and networks. You can change this to **Deny** to block access.
         
         After you have added access control entries, you can perform the following:
         
         - Select the ACEs that you want to group and put into a named ACL. Click the Create new named ACL icon and enter a name in the *Convert* *to* *Named* *ACL* dialog box.
         - Reorder the list of ACEs using the up and down arrows next to the table.
         - Select an IPv4 network and click the Edit icon to modify the entry.
         - Select an ACE and click the Delete icon to delete the entry. You can select multiple ACEs for deletion.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
